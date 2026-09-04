// ============================================================
// TEST.JS - 25 preguntas (adaptado a inglés americano)
// Inspirado en Cambridge English, pero con ortografía y
// vocabulario 100% americano.
// ============================================================

const preguntas = [
    // ========== Nivel A2-B1 ==========
    {
        nivel: 'A2-B1',
        peso: 1,
        texto: 'Can I park here?',
        opciones: ['Sorry, I did that.', 'It\'s the same place.', 'Only for half an hour.', 'You\'ll enjoy the weather.'],
        correcta: 2 // c
    },
    {
        nivel: 'A2-B1',
        peso: 1,
        texto: 'What color will you paint the bedroom?',
        opciones: ['I hope it was right.', 'We can\'t decide.', 'It wasn\'t very difficult.', 'We\'ll do it soon.'],
        correcta: 1 // b
    },
    {
        nivel: 'A2-B1',
        peso: 1,
        texto: 'I can\'t figure out this app.',
        opciones: ['Would you like some help?', 'Don\'t you know?', 'I suppose you can.', 'I\'ll send it again.'],
        correcta: 0 // a
    },
    {
        nivel: 'A2-B1',
        peso: 1,
        texto: 'I\'d like a room for tomorrow night.',
        opciones: ['How much did you pay?', 'Afternoon and evening.', 'Let me see what\'s available.', 'That\'s everything for now.'],
        correcta: 2 // c
    },
    {
        nivel: 'A2-B1',
        peso: 1,
        texto: 'Should we go to the gym now?',
        opciones: ['I\'m too tired.', 'It\'s very good.', 'Not at all.', 'That\'s fine.'],
        correcta: 0 // a
    },

    // ========== Nivel B1 ==========
    {
        nivel: 'B1',
        peso: 2,
        texto: 'His eyes were ______ bad that he couldn\'t read the sign.',
        opciones: ['such', 'too', 'so', 'very'],
        correcta: 2 // c
    },
    {
        nivel: 'B1',
        peso: 2,
        texto: 'The team needs to decide ______ and for all what their position is.',
        opciones: ['here', 'once', 'first', 'finally'],
        correcta: 1 // b
    },
    {
        nivel: 'B1',
        peso: 2,
        texto: 'Don\'t put your wine on the ______ of the counter, someone might knock it off.',
        opciones: ['outside', 'edge', 'boundary', 'border'],
        correcta: 1 // b
    },
    {
        nivel: 'B1',
        peso: 2,
        texto: 'I\'m sorry, I never ______ to bother you.',
        opciones: ['hoped', 'thought', 'meant', 'supposed'],
        correcta: 2 // c
    },
    {
        nivel: 'B1',
        peso: 2,
        texto: 'The band closed the concert ______ their biggest hit.',
        opciones: ['by', 'with', 'in', 'as'],
        correcta: 1 // b
    },

    // ========== Nivel B1-B2 ==========
    {
        nivel: 'B1-B2',
        peso: 2,
        texto: 'Would you mind ______ these plates a wipe before putting them away?',
        opciones: ['making', 'doing', 'getting', 'giving'],
        correcta: 3 // d
    },
    {
        nivel: 'B1-B2',
        peso: 2,
        texto: 'I was looking forward ______ at the new Italian restaurant, but it was closed.',
        opciones: ['to eat', 'to have eaten', 'to eating', 'eating'],
        correcta: 2 // c
    },
    {
        nivel: 'B1-B2',
        peso: 2,
        texto: '______ tired Mandy is when she gets home, she always gives the kids a goodnight kiss.',
        opciones: ['Whatever', 'No matter how', 'However much', 'Although'],
        correcta: 1 // b
    },
    {
        nivel: 'B1-B2',
        peso: 2,
        texto: 'It was only five days ago ______ he accepted the new position.',
        opciones: ['then', 'since', 'after', 'that'],
        correcta: 3 // d
    },
    {
        nivel: 'B1-B2',
        peso: 2,
        texto: 'The store didn\'t have the model I wanted, but they\'ve ______ a pair specially for me.',
        opciones: ['booked', 'ordered', 'commanded', 'asked'],
        correcta: 1 // b
    },

    // ========== Nivel B2 ==========
    {
        nivel: 'B2',
        peso: 3,
        texto: 'Do you have a second to talk about your report now or are you ______ to head out?',
        opciones: ['thinking', 'round', 'planned', 'about'],
        correcta: 3 // d
    },
    {
        nivel: 'B2',
        peso: 3,
        texto: 'He moved here ...... a year ago.',
        opciones: ['quite', 'beyond', 'already', 'almost'],
        correcta: 3 // d
    },
    {
        nivel: 'B2',
        peso: 3,
        texto: 'Once the plane is in the air, you can ______ your seat belt if you wish.',
        opciones: ['undress', 'unfasten', 'unlock', 'untie'],
        correcta: 1 // b
    },
    {
        nivel: 'B2',
        peso: 3,
        texto: 'I quit my previous job because I had no ______ to travel.',
        opciones: ['place', 'position', 'opportunity', 'possibility'],
        correcta: 2 // c
    },
    {
        nivel: 'B2',
        peso: 3,
        texto: 'It wasn\'t a bad crash and ...... damage was done to my car.',
        opciones: ['little', 'small', 'light', 'mere'],
        correcta: 0 // a
    },

    // ========== Nivel B2-C1 ==========
    {
        nivel: 'B2-C1',
        peso: 3,
        texto: 'I\'d rather you ______ to her why we can\'t go.',
        opciones: ['would explain', 'explained', 'to explain', 'will explain'],
        correcta: 1 // b
    },
    {
        nivel: 'B2-C1',
        peso: 3,
        texto: 'The boss considered all ______ of the argument before making a decision.',
        opciones: ['sides', 'features', 'perspectives', 'shades'],
        correcta: 0 // a
    },
    {
        nivel: 'B2-C1',
        peso: 3,
        texto: 'This new model is advertised as being ______ reliable.',
        opciones: ['greatly', 'highly', 'strongly', 'readily'],
        correcta: 1 // b
    },
    {
        nivel: 'B2-C1',
        peso: 3,
        texto: 'When I realized my keys were missing, I decided to ______ my steps.',
        opciones: ['retrace', 'regress', 'resume', 'return'],
        correcta: 0 // a
    },
    {
        nivel: 'B2-C1',
        peso: 3,
        texto: 'Lucy\'s house is somewhere in the ______ of the subway station.',
        opciones: ['region', 'quarter', 'vicinity', 'district'],
        correcta: 2 // c
    }
];

// ============================================================
// LÓGICA DEL TEST (sin cambios)
// ============================================================

let indiceActual = 0;
let puntajeTotal = 0;
let respuestas = [];

const intro = document.getElementById('test-intro');
const container = document.getElementById('test-container');
const resultado = document.getElementById('test-resultado');
const preguntaTexto = document.getElementById('pregunta-texto');
const opcionesDiv = document.getElementById('opciones');
const btnSiguiente = document.getElementById('btn-siguiente');
const preguntaNumero = document.getElementById('pregunta-numero');
const barra = document.getElementById('barra-llenado');

document.getElementById('btn-iniciar').addEventListener('click', () => {
    intro.style.display = 'none';
    container.style.display = 'block';
    indiceActual = 0;
    puntajeTotal = 0;
    respuestas = [];
    mostrarPregunta();
});

function mostrarPregunta() {
    if (indiceActual >= preguntas.length) {
        mostrarResultado();
        return;
    }

    const p = preguntas[indiceActual];
    preguntaTexto.textContent = p.texto;
    preguntaNumero.textContent = indiceActual + 1;
    barra.style.width = ((indiceActual / preguntas.length) * 100) + '%';

    opcionesDiv.innerHTML = '';
    p.opciones.forEach((opcion, i) => {
        const label = document.createElement('label');
        label.className = 'opcion';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'pregunta';
        radio.value = i;
        radio.addEventListener('change', () => {
            document.querySelectorAll('.opcion').forEach(el => el.classList.remove('seleccionada'));
            label.classList.add('seleccionada');
            btnSiguiente.disabled = false;
        });
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opcion));
        opcionesDiv.appendChild(label);
    });

    btnSiguiente.disabled = true;

    if (indiceActual === preguntas.length - 1) {
        btnSiguiente.innerHTML = 'Ver resultado <i class="fas fa-arrow-right"></i>';
    } else {
        btnSiguiente.innerHTML = 'Siguiente <i class="fas fa-arrow-right"></i>';
    }

    btnSiguiente.onclick = function() {
        const seleccionada = document.querySelector('input[name="pregunta"]:checked');
        if (!seleccionada) return;

        const respuesta = parseInt(seleccionada.value);
        respuestas.push(respuesta);
        if (respuesta === p.correcta) {
            puntajeTotal += p.peso;
        }

        indiceActual++;
        mostrarPregunta();
    };

    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mostrarResultado() {
    container.style.display = 'none';
    resultado.style.display = 'block';

    const maxPuntaje = preguntas.reduce((acc, p) => acc + p.peso, 0);
    const porcentaje = (puntajeTotal / maxPuntaje) * 100;

    let nivel = 'A1';
    let desc = 'Estás empezando. Puedes entender frases muy básicas y presentarte.';

    if (porcentaje >= 85) {
        nivel = 'C1';
        desc = 'Tienes un dominio avanzado. Puedes expresarte con fluidez y precisión en situaciones complejas.';
    } else if (porcentaje >= 70) {
        nivel = 'B2';
        desc = 'Puedes interactuar con hablantes nativos con fluidez natural, y producir textos claros y detallados sobre una amplia variedad de temas.';
    } else if (porcentaje >= 55) {
        nivel = 'B1';
        desc = 'Puedes desenvolverte en la mayoría de las situaciones que surgen al viajar, y expresar opiniones sobre temas conocidos.';
    } else if (porcentaje >= 40) {
        nivel = 'A2';
        desc = 'Puedes comunicarte en tareas simples y rutinarias que requieren un intercambio directo de información sobre temas familiares.';
    } else {
        nivel = 'A1';
        desc = 'Puedes entender y usar expresiones cotidianas muy básicas, como presentarte y hacer preguntas simples sobre información personal.';
    }

    document.getElementById('nivel-badge').textContent = nivel;
    document.getElementById('resultado-desc').textContent = desc;

    resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
}