// -->  Chargement jQuery :: si on a deja une version on la teste, sinon
//      on en charge une et on attend avant de lancer le programme
//      je n'utilise pas "setTimeout(alert, 1000, hello);" dans ce cas pour les navigateurs anciens
//      Dans tous les cas, on passe jQuery en Non conflict

function getDataFromModule(module) {
  if (module == "form") {
    return _DATA_FORM;
  } else if (module == "cta") {
    return _DATA_CTA;
  } else if (module == "image") {
    return _DATA_IMGS;
  }
}

function getObjectFromModule(module) {
  if (module == "form") {
    return formGrid;
  } else if (module == "cta") {
    return ctaGrid;
  } else if (module == "image") {
    return imgsGrid;
  }
}

// Vérification des valeurs
function checkParams(myModule, myDebug, myAmount, mySegment) {
  if (typeof myModule == "undefined" || myModule.length == 0 || (myModule != "form" && myModule != "image" && myModule != "cta"))
  {
    console.log("Module incorrect");
    return false;
  }
  if (typeof myDebug == "undefined" || (myDebug != true && myDebug != false)) {
    console.log("Debug incorrect");
    return false;
  }
  if (typeof myAmount == "undefined" || isNaN(myAmount) == true) {
    console.log("Amount invalide");
    return false;
  }
  data = getDataFromModule(myModule);
  if (typeof mySegment == "undefined" || data.segments[mySegment] == "undefined") {
    console.log("Segment invalide");
    return false;
  }
  return true;
}

// Si aucune version n'est chargé
function appendjQuery()
{
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//code.jquery.com/jquery-2.1.4.min.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}


function loadJQuery(myModule, myDebug, myAmount, mySegment) {
  // Boucle qui attend le chargement de jQ avant de lancer le module
  var waitForLoad = function (myModule, myDebug, myAmount, mySegment) {
    if (typeof jQuery != "undefined") {
      jQ = jQuery.noConflict();
      if (checkParams(myModule, myDebug, myAmount, mySegment) != true) {
	console.log("Usage : loadJQuery(module_string, debug_bool, amount_nbr, segment_string)")
	return false;
      }
      console.log("Version jQuery chargée : " + jQ.fn.jquery + " // Minimum requis : " + minimumVersion);
      getObjectFromModule(myModule).buildAll(myDebug, myAmount, mySegment, jQ);
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
