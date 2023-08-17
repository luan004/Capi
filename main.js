const data = 'JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.[4]É atualmente a principal linguagem para programação client-side em navegadores web. É também bastante utilizada do lado do servidor através de ambientes como o node.js.Como uma linguagem multiparadigma, o JavaScript suporta estilos de programação orientados a eventos, funcionais e imperativos (incluindo orientado a objetos e prototype-based), apresentando recursos como fechamentos (closures) e funções de alta ordem comumente indisponíveis em linguagens populares como Java e C++. Possui APIs para trab';


const words = data.split(' ');
const ngrams = {};

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const next = words[i + 1];

    if (!ngrams[word]) {
        ngrams[word] = [];
    }
    ngrams[word].push(next);
}

const model = {};
for (let word in ngrams) {
    const nextWords = ngrams[word];
    model[word] = nextWords[Math.floor(Math.random() * nextWords.length)];
}


function go(fword, model, length) {
    let sentence = fword;
    for (let i = 0; i < length; i++) {
        const next = model[sentence.split(' ').pop()];
        sentence += ' ' + next;
    }
    return sentence;
}

console.log(go('o', model, 10));