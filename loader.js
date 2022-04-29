// producción
// let PIANO_URL = 'https://experience.piano.io/xbuilder/experience/load';
// let AID = 'TwXO2pHvpu';

// sandbox
let PIANO_URL = 'https://sandbox.piano.io/xbuilder/experience/load';
let AID = '6UafT9Fjsu';
if (typeof window !== 'undefined') {
  window.SlotMachine = require('./utils/slotMachine/slot-machine');

  // conexion con piano
  window.tp = window.tp || [];

  // window.tp.push([
  //   'setExternalJWT',
  //   'Kz6aUSJnEfhTPM9Iw1r6KaDo17NB2q4ji19SeRCY'
  // ]);
  // window.tp.push(['setAid', '6UafT9Fjsu']);
  // window.tp.push(['setUseTinypassAccounts', true]);
  window.tp.push(['setUsePianoIdUserProvider', true]);
  window.tp.push(['setSandbox', true]); // solo para sandbox
  window.tp.push(['setDebug', false]); // solo para debug
  window.tp.push([
    'init',
    async () => {
      await window.tp.experience.init();
      await window.tp.enableGACrossDomainLinking();
      console.log('session TROME ===> ', window.tp.pianoId.isUserValid());
      console.log('session TROME ===> ', window.tp.pianoId.getUser());
      // window.tp.pianoId.loadExtendedUser({
      //   extendedUserLoaded: function (data) {
      //     console.log(data);
      //   },
      //   formName: 'new_form'
      // });
    }
  ]); // para enviar eventos nativos de Piano a Google Analytics
  (function (src) {
    var a = document.createElement('script');
    a.async = true;
    a.src = src;
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
    // })(`//cdn.piano.io/api/tinypass.min.js`);
  })(`${PIANO_URL}?aid=${AID}`);
}
