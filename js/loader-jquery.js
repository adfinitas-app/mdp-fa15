// -->  Chargement jQuery :: si on a deja une version on la teste, sinon, on en charge une
//      sinon on en charge une perso et on attend avant de lancer le programme
//      je n'utilise pas "setTimeout(alert, 1000, hello);" dans ce cas pour les navigateurs anciens
//      Dans tous les cas, on passe jQuery en Non conflict
function loadJQuery(myModule, myDebug, myAmount, mySegment) {
    // Boucle qui attend le chargement de jQ avant de lancer le module
        var waitForLoad = function (myModule, myDebug, myAmount, mySegment) {
            if (typeof jQuery != "undefined") {
                jQ = jQuery.noConflict();

                if (typeof myModule == "undefined")
                {
                        if (jQ('#images').length > 0)
                        {
                            myModule = 'image';
                        }
                        if (jQ('#form').length > 0)
                        {
                            myModule = 'form';
                        }
                }
                myDebug     = (typeof myDebug == "undefined")   ? false     : myDebug ;
                myAmount    = (typeof myAmount == "undefined")  ? 0         : myAmount ;
                mySegment   = (typeof mySegment == "undefined") ? 'OPTIN'   : mySegment ;

                console.log("Version jQuery chargée : "+jQ.fn.jquery+" // Minimum requis : "+minimumVersion);
                if (myModule == "image")
                {
                    jQ('.static').remove();
                    imgsGrid.buildAll(myDebug, myAmount, mySegment, jQ);
                }
                else if (myModule == "cta")
                {
                    ctaGrid.buildAll(myDebug, myAmount, mySegment, jQ);
                }
                else if (myModule == "form")
                {
                    formGrid.buildAll(myDebug, myAmount, mySegment, jQ);
                }
            } else {
                console.log("jquery not loaded..");
                window.setTimeout(function(){ waitForLoad(myModule, myDebug, myAmount, mySegment) }, 500);
            }
        };
    // Tests de présence et version de jQ
        var minimumVersion  = 1.09;
        if (typeof jQuery === "undefined")
        {
            console.log("jQuery non présent");
            appendjQuery();
        }
        else
        {
            var jQueryVersion   = $.fn.jquery.split(".");
            jQueryVersion = parseFloat(jQueryVersion[0]+"."+jQueryVersion[1]);
            if (minimumVersion <= jQueryVersion)
            {
                appendjQuery();
            }
        }
    // Premier lancement de la fonction d'attente
        window.setTimeout(function(){ waitForLoad(myModule, myDebug, myAmount, mySegment) }, 500);
}

/*if( window.canRunAds === undefined ){
    console.log("AdBlock activé...");
    window.onload = loadJQuery();
}*/
// Si aucune version chargé, on charge une version 2 maison ;)
    function appendjQuery()
    {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//code.jquery.com/jquery-2.1.4.min.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
