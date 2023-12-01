function Escolher(idioma) {
    var conteudos = {
        "paragrafo1": {
            "ptbr": "Você sabe que é amado porque lhe disseram isso? Demonstrar amor requer mais do que beijos, sexo e palavras. Sentir-se amado é sentir que alguém tem um interesse real em sua vida. Quem cuida da sua felicidade, Quem se preocupa quando as coisas não estão dando certo. Que está pronto para ouvir suas dúvidas, E que te dá um solavanco quando necessário.",
            "es": "¿Sabes que eres amado porque te lo han dicho? Demostrar amor requiere más que besos, sexo y palabras. Sentirse amado es sentir que alguien tiene un interés real en tu vida. ¿Quién se preocupa por tu felicidad? ¿Quién se preocupa cuando las cosas no van bien. Que está dispuesto a escuchar tus dudas y que te da un empujón cuando es necesario.",
            "en": "Do you know you are loved because you have been told so? Showing love requires more than kisses, sex and words. Feeling loved is feeling that someone has a real interest in your life. Who cares for your happiness, Who worries when things aren't working out. Who is ready to listen to your doubts, And who gives you a jolt when necessary."
        },
        "paragrafo2": {
            "ptbr": "Ser amado é ver que ele(a) se lembra de coisas que você contou a ele há dois anos. É ver o quão triste ele/ela fica quando você está triste,E quão gentilmente ele sorri quando diz que você está fazendo um grande lidar com tudo.",
            "es": "Ser amado es ver que recuerda cosas que le dijiste hace dos años. Es ver lo triste que se pone cuando tú estás triste, y lo dulce que sonríe cuando dice que estás haciendo un gran negociar con todo.",
            "en": "Being loved is seeing that he/she remembers things you told him two years ago. It's seeing how sad he/she is when you're sad,And how gently he smiles when he says you're making a big deal out of everything."
        },
        "paragrafo3": {
            "ptbr": "Aquele que não vê sua mágoa transformada em munição na hora de uma discussão se sente amado. Aquele que se sente aceito, que se sente inteiro, se sente amado. Aquele que sabe que tudo pode ser dito e compreendido.",
            "es": "El que no ve su dolor convertido en munición al momento de una discusión se siente amado. El que se siente aceptado, el que se siente íntegro, se siente amado. El que sabe que todo se puede decir y entender.",
            "en": "He who does not see his hurt turned into ammunition at the time of an argument feels loved He who feels accepted, who feels whole, feels loved. The one who knows that everything can be said and understood."
        },
        "paragrafo4": {
            "ptbr": "Sente-se amado quem se sente seguro de ser exatamente como é, Sem inventar um personagem para o relacionamento, Bom, nenhum personagem dura muito.",
            "es": "Se siente amado quien se siente seguro de ser exactamente como es, Sin inventar un personaje para la relación, Bueno, ningún personaje dura mucho.",
            "en": "He feels loved who feels safe to be exactly as he is, Without inventing a character for the relationship, Well, no character lasts very long."
        },
        "paragrafo5": {
            "ptbr": "Quem não suspira, mas suspira, sente-se amado; Quem não levanta a voz, mas fala; Quem não concorda, mas escuta. Agora sente e escute: eu te amo não diz tudo!",
            "es": "El que no jadea, sino que suspira, se siente amado; El que no alza la voz, sino que habla; El que no asiente, pero escucha. Ahora, siéntate y escucha: Te amo no dice ¡todo!",
            "en": "He who does not pant, but sighs, feels loved; Who does not raise his voice, but speaks; Who doesn't agree, but listens. Now, sit down and listen: I love you doesn't say it all!"
        }
    };

    // Atualiza o conteúdo dos parágrafos com base no idioma selecionado
    document.getElementById('paragrafo1').innerHTML = conteudos['paragrafo1'][idioma];
    document.getElementById('paragrafo2').innerHTML = conteudos['paragrafo2'][idioma];
    document.getElementById('paragrafo3').innerHTML = conteudos['paragrafo3'][idioma];
    document.getElementById('paragrafo4').innerHTML = conteudos['paragrafo4'][idioma];
    document.getElementById('paragrafo5').innerHTML = conteudos['paragrafo5'][idioma];
}
