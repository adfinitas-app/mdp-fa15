var _DATA_IMGS = {
  // Peut-être un tableau ou un nombre
  // L'utilisation de plusieurs cid est utile en cas d'AB test
  iraiser_cid : 23,
  iraiser_url : 'donner.miedepain.asso.fr',

  // Nom de la catégorie de l'evenement remonté dans Woopra
  // Doit être un tableau
  woopra_interaction: ['cta_don-noel15', ""],

  // Paramètre de deduction fiscale
  fiscal_phrase : 'Soit <span class="deduction">{{XX}}€</span> après déduction fiscale',
  fiscal_rules  : {percentplafond: 75, percentreste: 66, plafond: 529, ISF: 0},

  // (1ère upgrade) => Valueur fixe affiché sur la page
  html_build     :   {
    'OPTIN':   [
    {
      amount: 25,
      image:  '/images/25_euros.jpg',
      text:   '5 mois de domiciliation <br>(adresse administrative)<br>à la Plateforme – Relais Social' },
    {
      amount: 55,
      image:  '/images/image-don2.jpg',
      text:   '24h au nouveau Refuge<br> 1 hébergement en chambre <br>3 repas chauds <br>1 accès aux premiers soins'},
    {
      amount: 80,
      image:  '/images/image-don3.jpg',
      text:   '6 journées d’accueil<br>de jour à l’Arche d’Avenirs', },
    ],
    'DONATEUR':  [
    {
      amount: 25,
      image:  '/images/25_euros.jpg',
      text:   '5 mois de domiciliation <br>(adresse administrative)<br>à la Plateforme – Relais Social' },
    {
      amount: 55,
      image:  '/images/image-don2.jpg',
      text:   '24h au nouveau Refuge<br> 1 hébergement en chambre <br>3 repas chauds <br>1 accès aux premiers soins'},
    {
      amount: 80,
      image:  '/images/image-don3.jpg',
      text:   '6 journées d’accueil<br>de jour à l’Arche d’Avenirs', },
    ],
    'GD':  [
    {
      amount: 25,
      image:  '/images/25_euros.jpg',
      text:   '5 mois de domiciliation <br>(adresse administrative)<br>à la Plateforme – Relais Social' },
    {
      amount: 55,
      image:  '/images/image-don2.jpg',
      text:   '24h au nouveau Refuge<br> 1 hébergement en chambre <br>3 repas chauds <br>1 accès aux premiers soins'},
    {
      amount: 80,
      image:  '/images/image-don3.jpg',
      text:   '6 journées d’accueil<br>de jour à l’Arche d’Avenirs', },
    ],
  },

  // (2ème upgrade) => Valeur affiché sur iRaiser
  segments : {
    'OPTIN':    {'arrondiSup':0, 'type': 'fixe', 'values':[25,55,80]} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'addition',  'values':[5,10,20]} ,
    'GD':	{'arrondiSup':5, 'type': 'addition',  'values':[5,10,20]}
  }
}
