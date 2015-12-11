/* -------> CAS DES Blocs Images */
var imgsGrid    =   {
  segmentRetenu:  "",
  htmlRetenu:  "",


  affichage:  function(myAmount, mySegment, jQ) {
    var prevAmount = 0;
    for (bl in this.htmlRetenu)
    {
      var data = this.htmlRetenu[bl];
      var HTML = jQ('#adFdon-parent .adFclone').html();
      var Link = 'https://' + _DATA_IMGS.iraiser_url + urlBySegment.getUrl(mySegment, data.amount, _DATA_IMGS);
      var Fisk = deFisk.calculation(data.amount, mySegment, _DATA_IMGS);
      var ID   = 'img-' + bl;
      var CL   = ( (myAmount >= prevAmount) && (myAmount <= data.amount)) ? 'active' : '' ;
     prevAmount = data.amount;

      HTML = this.replaceAll(HTML, '{{AMOUNT}}', data.amount);
      HTML = this.replaceAll(HTML, '{{TEXT}}', data.text);
      HTML = this.replaceAll(HTML, '{{LINK}}', Link);
      HTML = this.replaceAll(HTML, '{{IMGILLUS}}', data.image);
      HTML = this.replaceAll(HTML, '{{ID}}', ID);
      HTML = this.replaceAll(HTML, '{{CLASS}}', CL);
      HTML = this.replaceAll(HTML, '{{DEDUCTION}}', Fisk);
      HTML = this.replaceAll(HTML, 'data-src', 'src');

      jQ('#adFdon-parent').append(HTML);
    }
    jQ('.adFstatic').remove();
    jQ('#adFdon-parent .adFclone').remove();
    jQ('#adFdon-parent').css('display', 'block');
  },

  woopraimgs: function(myDebug, jQ) {
    var myInteraction = _DATA_IMGS.woopra_interaction;
    jQ('body #adFdon-parent a').on('click', function(e) {
      e.preventDefault();
      var whichOne = jQ(this).parent('.adFwrapper').attr('id');
      var woopraId = myInteraction[0] + whichOne + '-' + myInteraction[1];

      if (! myDebug) {
	woopra.track('interaction', {
	  category: woopraId,
	  action: "clic",
	  url: document.location.href,
	  value: don,
	  title: document.title
	});
      }
      imgsGrid.newWindow(jQ(this).attr('href') + myUrlParams.getAll());
    });
  },

  buildAll:   function(myDebug, myAmount, mySegment, jQ) {
    this.segmentRetenu = mySegment;
    this.htmlRetenu = _DATA_IMGS.html_build[mySegment];
    this.affichage(myAmount, this.segmentRetenu, jQ);
    this.woopraimgs(myDebug, jQ);
  },

  escapeRegExp: function(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  },

  replaceAll: function(string, find, replace) {
    return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  },

  // Création fenetre
  newWindow: function(url) {
    var win = window.open(url, '_blank');
    win.focus();
    return false;
  },
};
