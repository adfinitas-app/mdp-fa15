var     urlBySegment = {
            //segments:   _SEGMENTS,

            getUrl: function(mySegment, segAmount, data) {
                //var segment = this.segments[mySegment];
                var segment = data.segments[mySegment];
                //console.log(segment);
                var url = "";
                var frontURL = "";
                var montants = [];
                if (segment.type == "addition")
                {
                    montants    = this.addition(segment, segAmount);
                    url         = this.generateUrl(montants);
                }
                else if (segment.type == "percent")
                {
                    montants    = this.percent(segment, segAmount);
                    url         = this.generateUrl(montants);
                }
                else if (segment.type == "libre")
                {
                    var newAmout    =   (mySegment == "GD") ? "" : segAmount*100 ;
                    url             =   '&amount='+newAmout+'&once_grid[]=';
                }
                else if (segment.type == "libre-preremplit") {
                    var newAmout    =   segAmount*100 ;
                    url             =   '&amount='+newAmout+'&once_grid[]=';
		}
                //console.log(myUrlParams.getAll());

                if (segment.iraiser_params != undefined)
                {
                    for (j in segment.iraiser_params)
                    {
                        frontURL += (j != "cid") ? '&'+j+'='+segment.iraiser_params[j] : segment.iraiser_params[j];

                    }
                }
                else
                {
                    frontURL = data.iraiser_cid;
                }
                return frontURL + url + myUrlParams.getAll();
            },
            addition: function(segment, myAmount) {
                var montants = [];
                for (v in segment.values)
                {
                    var arrondi = segment.arrondiSup;
                    var tmp     = myAmount + segment.values[v];
                    if (arrondi !=0 && v >= 0)
                    {
                        tmp = (tmp%arrondi !== 0) ? tmp + (arrondi - tmp%arrondi) : tmp ;
                    }
                    montants[v] = tmp * 100;
                }
                return montants;
            },
            fixe: function(segment, myAmount) {
                var montants = [];
                for (v in segment.values)
                {
                    montants[v] = segment.values[v] * 100;
                }
                return montants;
            },
            percent: function(segment, myAmount) {
                var montants = [];
                for (v in segment.values)
                {
                    var arrondi = segment.arrondiSup;
                    var tmp     = myAmount + Math.round((myAmount * segment.values[v]) / 100);
                    if (arrondi !=0 && v >= 0)
                    {
                        tmp = (tmp%arrondi !== 0) ? tmp + (arrondi - tmp%arrondi) : tmp ;
                    }
                    montants[v] = tmp * 100;
                }
                return montants;
            },
            generateUrl: function(myMontants) {
                var URL = "";
                for (v in myMontants)
                {   URL += (v == 0) ? '&amount='+myMontants[v] : "" ;
                    URL += '&once_grid[]=' + myMontants[v];
                }
                return URL + '&once_grid[]=';
            }
};

var deFisk = {
    calculation: function(myAmount,mySegment, data) {
        var valeurReelle = 0;

        if ( (data.segments[mySegment] != undefined) && (data.segments[mySegment].defisc == "ISF") && (data.fiscal_rules.ISF != 0) )
        {
            valeurReelle = myAmount - (myAmount * data.fiscal_rules.ISF / 100);
        }
        else
        {
            if (data.fiscal_rules.percentreste == 0 || (myAmount - data.fiscal_rules.plafond) <= 0)
            {
                valeurReelle = myAmount - Math.floor(myAmount * data.fiscal_rules.percentplafond / 100);
            }
            else
            {
                var newAmount = myAmount - data.fiscal_rules.plafond ;
                valeurReelle  = myAmount - Math.floor(data.fiscal_rules.plafond * data.fiscal_rules.percentplafond / 100) - Math.floor(newAmount * data.fiscal_rules.percentreste / 100 );
                valeurReelle = Math.abs(valeurReelle);
            }
        }
        var sentence = this.replaceAll(data.fiscal_phrase, '{{XX}}', Math.floor(valeurReelle));
        return sentence;
    },
    replaceAll: function(string, find, replace) {
        return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    },
    escapeRegExp: function(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
};
