import React, { useState, createContext, useEffect } from 'react';

export const DATA = {
  information: {
    messageOne: '¡PRUEBA TU SUERTE HOY!',
    messageTwo: 'Si te salen los tres',
    messageThree: 'de Trome',
    messageFour: 'ganas el premiazo',
    messageFive: '¡AL INSTANTE!'
  },
  buttons: {
    main: '¡HAZ CLIC AQUÍ!',
    terms: 'TÉRMINOS Y CONDICIONES',
    more: 'CONOCE MÁS',
    participates: 'PARTICIPA'
  },
  knowMore: {
    messageOne: 'Tu puedes ser uno de los ganadores de',
    messageTwo: '4 premios de s/',
    messageThree: '200',
    messageFour: 'Preguntas frecuentes:',
    questions: [
      {
        question: '¿Cómo se si soy el ganador?',
        answer: `Si al girar la ruleta te aparecen las tres T de trome,
      <b>GANASTE!</b> Automáticamente te aparecerá el código
      ganador.`
      },
      {
        question: '¿Cuánto tiempo tengo que esperar por mi premio?',
        answer: `En un plazo de <b>60 días hábiles</b> nos estaremos
      contactando contigo para coordinar la entrega del premio.`
      },
      {
        question: '¿Si gané hoy día puedo ganar cualquier otro?',
        answer: `Si! En esta promoción puedes participar <b>todos los días.</b>`
      },
      {
        question: '¿Puedo compartir mi código ganador con algún familiar?',
        answer: `No, el código ganador es <b>personal</b> y está asociado a tu
        número de DNI`
      },
      {
        question: 'Perdí mi código, ¿cómo puedo recuperarlo?',
        answer: `<b>Escríbele a Fito al 977 944 966</b> y él podrá ayudarte a
        recuperar tú código.`
      }
    ]
  },
  game: {
    messageOne: 'Prueba tu suerte HOY y participa de',
    buttonJ: 'Jugar',
    buttonD: 'Detener'
  },
  informationDataUser: {
    messageOne: 'Ya casi terminas',
    messageTwo: 'Completa los datos y participa por el premiazo',
    ButtonOne: 'Clic Aquí',
    ButtonTwo: 'y completa tus datos'
  }
};

export const DataContext = createContext({
  systemData: '',
  setSystemData: () => {},
  auth: '',
  setAuth: () => {}
});

const ProviderData = ({ children }) => {
  const [systemData, setSystemData] = useState(DATA);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    window.tp.push([
      'init',
      function () {
        // esta función se ejecuta en cola, luego de que Piano se inicialice
        // console.log('hola', window.tp.pianoId.isUserValid());
        if (window.tpuser) {
          setAuth(window.tpuser);
        }
      }
    ]);
  }, []);

  const context = {
    systemData,
    setSystemData,
    auth,
    setAuth
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

export default ProviderData;
