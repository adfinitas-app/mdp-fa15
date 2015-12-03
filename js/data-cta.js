var _DATA_CTA = {
  // --> Config générale
  iraiser_cid : 53,
  iraiser_url : 'don.spa.asso.fr',

  // - Ajout des CTA avec action éclaté pour WoopraTrack
  woopra_interaction :   ['don-IMG', '_ete2015'],

  segments : {
    'OPTIN':    {'arrondiSup':0, 'type': 'addition', 'values':[0,2,5]} ,
    'ADHERENT': {'arrondiSup':5, 'type': 'addition', 'values':[0,5,10]} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'percent',  'values':[0,25,50]} ,
    'MIDDLE':   {'arrondiSup':5, 'type': 'addition', 'values':[0,25,100]} ,
    'GD':       {'arrondiSup':0, 'type': 'libre'}
  }
};
