export type Topic = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  detail: string;
  color: string;
  sections: { title: string; content: string }[];
};

export const topics: Topic[] = [
  {
    id: '01',
    tag: 'COMUNICACIÓN',
    title: 'Formas de comunicación',
    desc: 'Conocimos diferentes formas de comunicación y aprendimos cómo cada una transmite ideas, información o sentimientos según el medio que utiliza.',
    detail:
      'Las formas de comunicación son las distintas maneras en que las personas transmiten y reciben mensajes. Cada una utiliza recursos diferentes, como palabras, gestos, sonidos, imágenes o herramientas digitales, para compartir ideas, información y sentimientos.',
    color: 'from-purple-600/30 to-fuchsia-600/20',
    sections: [
      { title: 'Comunicación verbal', content: 'Se basa en el uso de palabras para transmitir ideas, información o sentimientos. Puede ser hablada o escrita. Ejemplo: una conversación entre compañeros.' },
      { title: 'Comunicación no verbal', content: 'Transmite mensajes sin utilizar palabras, mediante gestos, expresiones, miradas o movimientos. Ejemplo: asentir con la cabeza para decir “sí”.' },
      { title: 'Comunicación escrita', content: 'Utiliza palabras escritas para expresar y compartir información de manera clara. Ejemplo: un mensaje, una carta o un correo.' },
      { title: 'Comunicación corporal', content: 'Se expresa principalmente mediante la postura, los movimientos y los gestos del cuerpo. Ejemplo: cruzar los brazos puede transmitir una actitud de cierre o incomodidad.' },
      { title: 'Comunicación auditiva', content: 'La información se transmite y recibe principalmente mediante sonidos. Ejemplo: una alarma, una señal sonora o una indicación por altavoz.' },
      { title: 'Comunicación visual', content: 'Utiliza imágenes, símbolos, colores o elementos gráficos para transmitir un mensaje. Ejemplo: una señal de tránsito.' },
      { title: 'Comunicación virtual', content: 'Se desarrolla mediante herramientas y plataformas digitales para intercambiar información. Ejemplo: una videollamada o un chat.' },
    ],
  },
  {
    id: '02',
    tag: 'LENGUAJE',
    title: 'Funciones del lenguaje',
    desc: 'Aprendimos que los mensajes pueden tener diferentes intenciones según lo que queremos expresar o comunicar.',
    detail:
      'Las funciones del lenguaje describen el propósito de cada mensaje. La función referencial informa sobre la realidad; la expresiva transmite emociones; la apelativa intenta influir en el receptor; la poética cuida la forma del mensaje; la fática mantiene el canal abierto y la metalingüística habla sobre el propio lenguaje.',
    color: 'from-blue-600/30 to-purple-600/20',
    sections: [
      { title: '1. Referencial o informativa', content: 'Se centra en el contexto y comunica hechos, datos o explicaciones de manera objetiva. Ejemplo: “La Tierra gira alrededor del Sol”.' },
      { title: '2. Emotiva o expresiva', content: 'Expresa los sentimientos, opiniones o estados de ánimo del emisor. Ejemplo: “Estoy muy feliz por tu logro”.' },
      { title: '3. Apelativa o conativa', content: 'Busca provocar una respuesta, una acción o una reacción en el receptor. Ejemplo: “Cierra la puerta, por favor”.' },
      { title: '4. Poética', content: 'Se enfoca en la forma del mensaje y usa el lenguaje de manera creativa, como en poemas, canciones, slogans y metáforas.' },
      { title: '5. Fática', content: 'Comprueba, inicia o mantiene el canal de comunicación. Ejemplos: “¿Me escuchas?”, “Hola” o “¿Sigues ahí?”.' },
      { title: '6. Metalingüística', content: 'Utiliza el lenguaje para explicar el propio lenguaje. Ejemplo: “La palabra casa es un sustantivo común”.' },
    ],
  },
  {
    id: '03',
    tag: 'COMUNICACIÓN',
    title: 'Los 4 pilares de la comunicación',
    desc: 'Aprendimos cuatro acciones fundamentales para comprender mejor los mensajes, las emociones y las intenciones de otras personas.',
    detail:
      'Los cuatro pilares de la comunicación nos ayudan a observar el lenguaje corporal, escuchar con atención, analizar la información y percibir aquello que no siempre se expresa directamente con palabras.',
    color: 'from-fuchsia-600/30 to-pink-600/20',
    sections: [
      { title: 'Observar', content: 'Prestar atención a los gestos, movimientos, expresiones y comportamientos de la otra persona.' },
      { title: 'Escuchar', content: 'Concentrarse en lo que la persona dice, comprendiendo sus palabras y evitando interrumpir.' },
      { title: 'Analizar', content: 'Interpretar la información recibida para comprender mejor la situación y el mensaje.' },
      { title: 'Percibir', content: 'Captar emociones, actitudes e intenciones que pueden no expresarse directamente con palabras.' },
    ],
  },
  {
    id: '04',
    tag: 'COMUNICACIÓN',
    title: 'Tipos de comunicación',
    desc: 'Reconocimos diferentes maneras de expresar ideas, necesidades y sentimientos, y cómo cada una influye en nuestras relaciones.',
    detail:
      'Los tipos de comunicación describen la manera en que expresamos nuestras ideas, emociones y necesidades al relacionarnos con los demás. Identificarlos nos ayuda a reconocer nuestras actitudes y a construir intercambios más respetuosos.',
    color: 'from-amber-600/25 to-orange-600/20',
    sections: [
      { title: 'Agresiva', content: 'Expresa ideas o emociones de manera dominante, imponiendo opiniones y sin respetar a los demás.' },
      { title: 'Pasiva', content: 'Evita expresar opiniones, necesidades o sentimientos por miedo al conflicto o a incomodar.' },
      { title: 'Pasivo-agresiva (P/A)', content: 'Expresa el desacuerdo de forma indirecta, por ejemplo, mediante sarcasmo, indirectas o actitudes negativas.' },
      { title: 'Asertiva (A/P)', content: 'Comunica ideas, necesidades y sentimientos de forma clara y respetuosa, considerando también a los demás.' },
    ],
  },
];

export function getTopicById(id: string) {
  return topics.find((topic) => topic.id === id);
}