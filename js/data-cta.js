var _DATA_CTA = {
  // --> Config générale
  iraiser_cid : 23,
  iraiser_url : 'donner.miedepain.asso.fr',

  // - Ajout des CTA avec action éclaté pour WoopraTrack
  //woopra_interaction :   ['don-IMG', '_ete2015'],
    woopra_interaction: ['cta_don-noel15']

  segments : {
    'OPTIN':    {'arrondiSup':0, 'type': 'fixe', 'values':[25,55,80]} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'addition',  'values':[5,10,20]} ,
    'GD':       {'arrondiSup':0, 'type': 'addition', 'values':[550,1000,5000]}
  }
};