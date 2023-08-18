// CAPI - v1.3
// author
// github.com/luan004

export function gen(input, length) {
    const data = 'Este trabalho envolve o desenvolvimento de uma rede social simples, onde os usuários podem interagir por meio de publicações, comentários, curtidas e outras funcionalidades típicas de redes sociais. A plataforma permite criar perfis personalizados, incluindo informações pessoais e foto de perfil, além de possibilitar a criação de publicações acompanhadas de hashtags, menções a outros usuários e receber curtidas e comentários. Os usuários também podem seguir outros perfis para acompanhar as atualizações de amigos e pessoas de interesse. O projeto aborda aspectos de segurança, como autenticação de usuários, gerenciamento de permissões e proteção contra ataques, visando garantir a privacidade e integridade dos dados. Espera-se que esse trabalho contribua para o aprendizado dos conceitos fundamentais de desenvolvimento de aplicações web, além de fornecer uma base sólida para a construção de redes sociais mais complexas e personalizadas no futuro. Com o avanço tecnológico e a ascensão da internet, as redes sociais vêm se tornando cada vez mais presentes na vida das pessoas. Elas revolucionaram a forma de como nos comunicamos e têm desempenhado um papel fundamental na maneira como interagimos e nos envolvemos com o mundo ao nosso redor. Elas nos permitem compartilhar momentos importantes, expressar nossas opiniões, conhecer novas pessoas e explorar interesses comuns. Nesse contexto espera-se que este trabalho contribua para o aprendizado e a compreensão dos conceitos fundamentais de desenvolvimento de aplicações web, além de fornecer uma base sólida para a construção de redes sociais mais complexas e personalizadas no futuro. O objetivo geral deste trabalho é desenvolver uma rede social simples que permita aos usuários interagir por meio de publicações, comentários, curtidas e outras funcionalidades comuns em plataformas desse tipo. A proposta é criar um ambiente virtual onde os usuários possam compartilhar interesses, trocar informações, estabelecer conexões e personalizar seus perfis de acordo com suas preferências. Além disso, o trabalho também visa abordar aspectos de segurança, garantindo a proteção dos dados dos usuários e implementando uma medida de autenticação segura. Os principais objetivos desse trabalho são desenvolver uma API em PHP para gerenciar as principais funcionalidades da rede social, como criação de publicações, comentários, curtidas e interações entre os usuários, implementar uma interface de usuário amigável utilizando o framework Bootstrap, que permita aos usuários navegar e interagir de forma intuitiva com a rede social, utilizar tecnologias web como JavaScript e jQuery para adicionar recursos dinâmicos e interativos à interface, proporcionando uma experiência mais fluida e agradável aos usuários e armazenar e gerenciar os dados da rede social em um banco de dados MySQL, garantindo a integridade e a segurança das informações dos usuários.'

    function createModel(data) {
        data = data.replace(/(\r\n|\n|\r)/gm, '');
        data = data.toLowerCase();
        data = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        const words = data.split(' ');
        return words;
    }

    const model = createModel(data);

    let sentence = input;
    let lastword = sentence.split(' ').pop();

    for (let i = 0; i < length; i++) {
        const allnexts = [];
        var index = 0;
        model.forEach(word => {
            if (word == lastword && model[index+1] != undefined) {
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