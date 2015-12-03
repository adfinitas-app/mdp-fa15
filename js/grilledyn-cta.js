/* -------> CAS DES Blocs Images */
var ctaGrid    =   {
    segmentRetenu:  'OPTIN',
    htmlRetenu:  "",


    affichage:  function(myDebug, myAmount, mySegment, jQ) {
        jQ('.adFcta').each(function () {
            var Link = 'https://' + _DATA_CTA.iraiser_url + '/b?cid=' + urlBySegment.getUrl(mySegment, myAmount, _DATA_CTA);
            ctaGrid.woopracta(myDebug, Link, jQ(this));
        });
    },

        woopracta: function(myDebug, myLink, myButton) {
            var myInteraction = _DATA_CTA.segments;
            myButton.on('click', function(e) {
                e.preventDefault();
                var whichOne = jQ(this).data().cta;
                var woopraId = myInteraction[0] + whichOne + '-' + myInteraction[1];

                if (! myDebug) {
                    woopra.track('interaction', {
                        category: woopraId,
                        action: "clic",
                        url: document.location.href,
                        //value: don,
                        title: document.title
                    });
                }
                ctaGrid.newWindow(myLink+myUrlParams.getAll());
            });
        },

        buildAll:   function(myDebug, myAmount, mySegment, jQ) {
            this.segmentRetenu = (_DATA_CTA.segments[mySegment] !== undefined) ? mySegment : this.segmentRetenu;
            //this.htmlRetenu = (this.htmlBuild[mySegment] !== undefined) ? this.htmlBuild[mySegment] : this.htmlBuild[this.segmentRetenu];
            this.affichage(myDebug, myAmount, this.segmentRetenu, jQ);
            //this.woopraimgs(myDebug, jQ);
        },

        escapeRegExp: function(string) {
            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        },
        replaceAll: function(string, find, replace) {
            return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
        },
        // Création fenetre
        newWindow: function(url) {
	  console.log(url);
            var win = window.open(url, '_blank');
            win.focus();
            return false;
        },
    };
