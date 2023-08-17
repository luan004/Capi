// CAPI - v1.1
// author
// github.com/luan004

/* Insira na constante data o texto que será usado
de base para a geração de um novo texto aleatório,
quanto maior for o texto data, mais aleatório será
o resultado. */
const data = '';

/* Insira na constante input a palavra inicial do
texto que será gerado. */
const input = 'o';

/* Insira na constante maxlenght um valor int que
definirá o tamanho máximo do texto gerado, observe
que o texto gerado poderá ser bem mais curto caso
o algoritmo não consiga encontrar uma próxima palavra
para continuar a geração, para evitar isso, use um
texto base (data) extenso. */
const maxlenght = 80;

function createModel(data) {
    data = data.replace(/(\r\n|\n|\r)/gm, '');
    data = data.toLowerCase();
    data = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const words = data.split(' ');
    return words;
}

const model = createModel(data);
const sentence = go(input, model, 80);

console.log('INPUT: ' + input + '\nRESULT: ' + sentence);
if (sentence.length < maxlenght) {
    console.log('WARNING: Não foi possível encontrar uma palavra para continuar a geração do texto.');
}

function go(fword, model, length) {
    let sentence = fword;
    let lastword = sentence.split(' ').pop();

    for (let i = 0; i < length; i++) {
        const allnexts = [];
        var index = 0;
        model.forEach(word => {
            if (word == lastword) {
                allnexts.push(model[index+1]);
            }
            index++;
        });

        const next = allnexts[Math.floor(Math.random() * allnexts.length)];

        if (next == undefined || next == null || next == '') {
            break;
        }

        sentence += ' ' + next;
        lastword = next;
    }
    return sentence;
}