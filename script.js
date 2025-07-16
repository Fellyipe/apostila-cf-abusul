/*const eventData = {
        sexta: [
          {
            id: "sex1",
            time: "12:00 - 19:30",
            title: "Chegadas e Jantar",
            icon: "🧳",
            content:
              "<p>Bem-vindo(a)! Acomode-se, reencontre os amigos e prepare-se para o início do nosso curso. O jantar será servido às 18:00.</p>",
          },
          {
            id: "sex2",
            time: "19:30 - 21:00",
            title: "Abertura / Exposição Bíblica",
            subtitle: "Atos 1:1-11",
            icon: "📖",
            content:
              '<p>A abertura oficial do nosso CF 2025! Vamos juntos mergulhar na Palavra e entender a promessa que dá início ao movimento do Espírito.</p><h3>Anote seus pensamentos:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="O que Deus falou com você?"></textarea>',
          },
          {
            id: "sex3",
            time: "23:00",
            title: "Dormir",
            icon: "😴",
            content:
              "<p>Um bom descanso para recarregar as energias para o dia seguinte!</p>",
          },
        ],
        sabado: [
          {
            id: "sab1",
            time: "07:00 - 09:00",
            title: "Oração Matinal, Café e Louvor",
            icon: "🙏",
            content:
              "<p>Começando o dia na presença de Deus, com um tempo de oração, comunhão no café da manhã e louvor.</p>",
          },
          {
            id: "sab2",
            time: "09:00 - 10:00",
            title: "Exposição Bíblica",
            subtitle: "Atos 2:1-47",
            icon: "📖",
            content:
              '<p>O derramamento do Espírito em Pentecostes. Como a promessa se cumpre e a igreja nasce.</p><h3>Anote seus pensamentos:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="O que mais te impactou nesta passagem?"></textarea>',
          },
          {
            id: "sab3",
            time: "10:15 - 12:00",
            title: "Oficinas e Palestra 1: Perspectivas da Educação",
            icon: "🎓",
            content:
              '<p>Um tempo para refletir sobre como nossa fé se conecta com o universo da educação. Anote os principais pontos das oficinas e da palestra.</p><h3>Anotações:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="Quais os principais desafios e oportunidades?"></textarea>',
          },
          {
            id: "sab4",
            time: "12:30 - 14:00",
            title: "Almoço",
            icon: "🍽️",
            content: "<p>Tempo de comunhão e boa comida!</p>",
          },
          {
            id: "sab5",
            time: "15:45 - 16:15",
            title: "Estudo Bíblico Indutivo",
            subtitle: "Atos 3:1-10",
            icon: "✍️",
            content: `
            <h4 class="font-semibold text-lg mb-2">Depois das línguas, agora a cura: descobrindo os poderes do Espírito Santo</h4>
            <p class="mb-4 text-sm text-gray-600">Por Josué Penteado</p>
            <div class="space-y-3 text-sm">
                <p><strong>1. [O]</strong> Relembrando o que vimos no capítulo 2 de Atos, tivemos o primeiro contato com a presença poderosa do Espírito Santo. Quais foram os impactos e manifestações que o Espírito produziu entre as pessoas sobre as quais ele desceu (At 2.1-6; 37-47)?</p>
                <p><strong>2. [O, I]</strong> Em sua pregação, ainda no capítulo 2, Pedro cita o profeta Joel que falava literalmente sobre o "derramamento do Espírito" (At 2.17-21). Entre os sinais profetizados, quais já haviam sido realizados e quais ainda não?</p>
                <p><strong>3. [O]</strong> Agora vamos finalmente para o capítulo 3. Aqui encontramos um homem "aleijado de nascença" na porta do templo. Como ele chegou a esse lugar e o que ele estava fazendo lá?</p>
                <p><strong>4. [O, I]</strong> O que esse homem pede a Pedro e João? Por que ele faz esse pedido? O que isso revela sobre seu conhecimento a respeito dos apóstolos?</p>
                <p><strong>5. [O, I]</strong> Como Pedro e João respondem ao homem nos vs. 4-6? O que há de surpreendente na resposta deles?</p>
                <p><strong>6. [R]</strong> As pessoas ao nosso redor tem uma infinidade de necessidades. Olhando para o seu contexto na universidade, quais são as maiores necessidades das pessoas? Quais você consegue ajudar e quais você se sente incapaz de socorrer?</p>
                <p><strong>7. [O]</strong> Curas e milagres como os do capítulo 3 não eram novidade no Novo Testamento. Olhando para Atos 2.22, qual personagem já havia realizado atos poderosos?</p>
                <p><strong>8. [O, I]</strong> Em nome de quem Pedro e João realizam a cura (At 3.6)? Como podemos conectar o poder de Jesus, a atuação do Espírito Santo e o que os apóstolos estão fazendo aqui?</p>
                <p><strong>9. [O]</strong> Qual a reação do homem depois de ser curado? O que chama a atenção das pessoas ao redor?</p>
                <p><strong>10. [A]</strong> De que outras formas o Espírito pode usar sua vida e sua comunidade para atender as necessidades das pessoas que você pensou na pergunta 6?</p>
                <p><strong>11. [R]</strong> O louvor a Deus é uma marca dos que foram tocados pelo Espírito. Como sua vida reflete essa marca? Como isso nos ajuda a avaliar o testemunho dos nossos grupos?</p>
            </div>
            <h3 class="mt-4">Suas Reflexões:</h3>
            <textarea class="w-full h-48 mt-2 p-2 border rounded-md" placeholder="Anote suas respostas e o que Deus falou com você..."></textarea>
        `,
          },
          {
            id: "sab6",
            time: "19:30 - 21:00",
            title: "Noite ABUB/IFES",
            subtitle: "Com Beatriz Delvachio",
            icon: "🌍",
            content:
              '<p>Um tempo especial para conhecer mais sobre o movimento estudantil cristão no Brasil e no mundo.</p><h3>Anotações:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="O que te inspirou nesta noite?"></textarea>',
          },
        ],
        domingo: [
          {
            id: "dom1",
            time: "07:00 - 09:00",
            title: "Oração Matinal, Café e Louvor",
            icon: "🙏",
            content:
              "<p>Começando o dia na presença de Deus, com um tempo de oração, comunhão no café da manhã e louvor.</p>",
          },
          {
            id: "dom2",
            time: "09:00 - 10:00",
            title: "Exposição Bíblica",
            subtitle: "Atos 4:32-5:16",
            icon: "📖",
            content:
              '<p>A vida da primeira comunidade: comunhão, poder e os primeiros desafios internos. O que podemos aprender sobre viver como corpo de Cristo?</p><h3>Anote seus pensamentos:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="Quais princípios desta comunidade podemos aplicar hoje?"></textarea>',
          },
          {
            id: "dom3",
            time: "10:15 - 12:00",
            title: "Conselho Regional e Palestra 2: Profissão em Missão",
            icon: "💼",
            content:
              '<p>Discussões sobre os rumos da ABU na nossa região e uma palestra inspiradora sobre como nossa futura profissão é um campo missionário.</p><h3>Anotações:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="Como posso ver minha profissão como missão?"></textarea>',
          },
          {
            id: "dom4",
            time: "15:45 - 16:15",
            title: "Estudo Bíblico Indutivo",
            subtitle: "Atos 4:1-31",
            icon: "✍️",
            content: `
            <h4 class="font-semibold text-lg mb-2">EBI Atos 4:1 a 31</h4>
            <p class="mb-4 text-sm text-gray-600">Por Higor B. Valin</p>
            <div class="space-y-3 text-sm">
                <p><strong>1.</strong> Onde os discípulos estão neste momento? Quem está com eles? (O)</p>
                <p><strong>2.</strong> Quem aborda Pedro e João? Por quê? O que fizeram com eles? (O, I)</p>
                <p><strong>3.</strong> O que a informação do verso 4, sobre os muitos que creram, comunica sobre o evangelho? (I)</p>
                <p><strong>4.</strong> No dia seguinte, com quem Pedro e João se encontram? Qual a pergunta e a preocupação dos líderes? (O, I)</p>
                <p><strong>5.</strong> Como Pedro responde? Quais adjetivos podemos atribuir a ele? (O, I)</p>
                <p><strong>6.</strong> Como os líderes reagem? Por que estão de mãos atadas? O que decidem fazer? (O)</p>
                <p><strong>7.</strong> Como Pedro e João respondem à ordem de não falar mais de Jesus? (O)</p>
                <p><strong>8.</strong> Após serem libertos, para onde vão? Como a comunidade reage e o que acontece no lugar? Como Pedro mudou desde a negação de Jesus? (O, I)</p>
                <p><strong>9.</strong> Compare a reação do povo e das autoridades. Quais as preocupações de cada grupo? (I)</p>
                <p><strong>10.</strong> O que a oração dos discípulos revela sobre a teologia deles? (I)</p>
                <p><strong>11.</strong> Onde está a confiança das autoridades? E a dos discípulos? (I)</p>
                <p><strong>12.</strong> Suas atitudes se parecem mais com as dos líderes ou com as de Pedro e João? Você se firma na Pedra Angular quando as coisas dão certo? (R)</p>
                <p><strong>13.</strong> Como está sua vida de oração? O que suas orações revelam sobre suas preocupações? O que pode aprender com a oração em Atos? (R, A)</p>
            </div>
            <h3 class="mt-4">Suas Reflexões:</h3>
            <textarea class="w-full h-48 mt-2 p-2 border rounded-md" placeholder="Anote suas respostas e o que Deus falou com você..."></textarea>
        `,
          },
          {
            id: "dom5",
            time: "19:30 - 21:00",
            title: "Cine ABU",
            icon: "🎬",
            content:
              '<p>Tempo de relaxar e ser edificado através da sétima arte. Qual a mensagem do filme para nós hoje?</p><h3>Anotações sobre o filme:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="Personagens, cenas marcantes, mensagem principal..."></textarea>',
          },
        ],
        segunda: [
          {
            id: "seg1",
            time: "07:00 - 09:00",
            title: "Oração Matinal, Café e Louvor",
            icon: "🙏",
            content:
              "<p>Começando o dia na presença de Deus, com um tempo de oração, comunhão no café da manhã e louvor.</p>",
          },
          {
            id: "seg2",
            time: "09:00 - 10:00",
            title: "Exposição Bíblica",
            subtitle: "Atos 8:1-40",
            icon: "📖",
            content:
              '<p>A perseguição dispersa a igreja, mas espalha o evangelho. O Espírito age em Samaria e no deserto com Filipe. O que aprendemos sobre a soberania de Deus na missão?</p><h3>Anote seus pensamentos:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="Como Deus pode usar as dificuldades para expandir seu Reino?"></textarea>',
          },
          {
            id: "seg3",
            time: "10:15 - 12:00",
            title: "Oficinas e Palestra 3: Saúde Mental",
            icon: "🧠",
            content:
              '<p>Um tema de extrema importância. Vamos conversar sobre como cuidar da nossa mente à luz da fé, combatendo estigmas e buscando ajuda.</p><h3>Anotações:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="Quais práticas e princípios posso aplicar na minha vida?"></textarea>',
          },
          {
            id: "seg4",
            time: "15:45 - 16:15",
            title: "Estudo Bíblico Indutivo",
            subtitle: "Atos 5:17-42",
            icon: "✍️",
            content: `
            <h4 class="font-semibold text-lg mb-2">Resistindo aos Apelos do Poder</h4>
            <div class="space-y-3 text-sm">
                <p><strong>1.</strong> Qual foi a motivação do sumo sacerdote? Como agiram? (vv. 17-18, 24-26)</p>
                <p><strong>2.</strong> Qual o resultado da união entre a inveja do Sumo Sacerdote e seu poder religioso?</p>
                <p><strong>3.</strong> Onde vemos motivações pecaminosas associadas a poder hoje (igreja, sociedade, grupos)?</p>
                <p><strong>4.</strong> Qual a mensagem da libertação dos apóstolos por um anjo? Isso afirma ou deslegitima a autoridade do Sumo Sacerdote?</p>
                <p><strong>5.</strong> Quais as duas acusações do Sumo Sacerdote no v. 28? Elas se sustentam?</p>
                <p><strong>6.</strong> A resposta de Pedro (vv. 29-32) é como um credo. O que ele denuncia e o que ele anuncia?</p>
                <p><strong>7.</strong> Qual o argumento de Gamaliel para que o Conselho solte os apóstolos? (vv. 35-39)</p>
                <p><strong>8.</strong> Como o argumento de Gamaliel pode nos ajudar a lidar com pessoas ou teologias que consideramos "heréticas"?</p>
                <p><strong>9.</strong> Em que consiste a alegria da perseguição, segundo o v. 41 e Mateus 5:11-12?</p>
                <p><strong>10.</strong> O v. 42 chama à perseverança. Quais suas dificuldades em ensinar e anunciar o nome de Jesus? Orem uns pelos outros.</p>
            </div>
            <h3 class="mt-4">Suas Reflexões:</h3>
            <textarea class="w-full h-48 mt-2 p-2 border rounded-md" placeholder="Anote suas respostas e o que Deus falou com você..."></textarea>
        `,
          },
          {
            id: "seg5",
            time: "19:30 - 21:00",
            title: "Sarau",
            icon: "🎶",
            content:
              "<p>Uma noite de talentos, comunhão e arte. Um tempo para celebrar os dons que Deus nos deu.</p>",
          },
        ],
        terca: [
          {
            id: "ter1",
            time: "07:00 - 09:00",
            title: "Oração Matinal, Café e Louvor",
            icon: "🙏",
            content: "<p>Nosso último dia começando em oração e gratidão.</p>",
          },
          {
            id: "ter2",
            time: "09:00 - 10:00",
            title: "Exposição Bíblica",
            subtitle: "Atos 10:1-48",
            icon: "📖",
            content:
              '<p>A barreira entre judeus e gentios é quebrada. O evangelho é para todos! Como o Espírito nos move para além das nossas fronteiras?</p><h3>Anote seus pensamentos:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="Quais \'muros\' o Espírito quer quebrar em minha vida?"></textarea>',
          },
          {
            id: "ter3",
            time: "11:00 - 12:00",
            title: "Encerramento e Ceia",
            icon: "🍞",
            content:
              '<p>Um tempo de celebração, envio e comunhão na mesa do Senhor, lembrando do seu sacrifício e olhando para o futuro.</p><h3>Reflexões finais e compromissos:</h3><textarea class="w-full h-64 mt-2 p-2 border rounded-md" placeholder="O que você leva deste CF? Quais seus próximos passos?"></textarea>',
          },
          {
            id: "ter4",
            time: "15:45",
            title: "Envio",
            icon: "🚀",
            content:
              "<p>Agora, somos enviados de volta para nossas universidades, cidades e famílias, movidos pelo vento do Espírito. Que a missão continue!</p>",
          },
        ],
      };
*/
const eventData = {
  sexta: [
    {
      id: "sex1",
      time: "12:00 - 19:30",
      title: "Chegadas e Jantar",
      icon: "🧳",
      content:
        "<p>Bem-vindo(a)! Acomode-se, reencontre os amigos e prepare-se para o início do nosso curso. O jantar será servido às 18:00.</p>",
    },
    {
      id: "sex2",
      time: "19:30 - 21:00",
      title: "Abertura / Exposição Bíblica",
      subtitle: "Atos 1:1-11",
      icon: "📖",
      content:
        "<p>A abertura oficial do nosso CF 2025! Vamos juntos mergulhar na Palavra e entender a promessa que dá início ao movimento do Espírito.</p>",
    },
    {
      id: "sex3",
      time: "23:00",
      title: "Dormir",
      icon: "😴",
      content:
        "<p>Um bom descanso para recarregar as energias para o dia seguinte!</p>",
    },
  ],
  sabado: [
    {
      id: "sab1",
      time: "07:00 - 09:00",
      title: "Oração Matinal, Café e Louvor",
      icon: "🙏",
      content:
        "<p>Começando o dia na presença de Deus, com um tempo de oração, comunhão no café da manhã e louvor.</p>",
    },
    {
      id: "sab2",
      time: "09:00 - 10:00",
      title: "Exposição Bíblica",
      subtitle: "Atos 2:1-47",
      icon: "📖",
      content:
        "<p>O derramamento do Espírito em Pentecostes. Como a promessa se cumpre e a igreja nasce.</p>",
    },
    {
      id: "sab3",
      time: "10:15 - 12:00",
      title: "Oficinas e Palestra 1: Perspectivas da Educação",
      icon: "🎓",
      content:
        "<p>Um tempo para refletir sobre como nossa fé se conecta com o universo da educação.</p>",
    },
    {
      id: "sab4",
      time: "12:30 - 14:00",
      title: "Almoço",
      icon: "🍽️",
      content: "<p>Tempo de comunhão e boa comida!</p>",
    },
    {
      id: "sab5",
      time: "15:45 - 16:15",
      title: "Estudo Bíblico Indutivo",
      subtitle: "Atos 3:1-10",
      icon: "✍️",
      content: `<h4 class="font-semibold text-lg mb-2">Depois das línguas, agora a cura: descobrindo os poderes do Espírito Santo</h4>
            <p class="mb-4 text-sm text-gray-600">Por Josué Penteado</p>
            <div class="space-y-3 text-sm">
                <p><strong>1. [O]</strong> Relembrando o que vimos no capítulo 2 de Atos...</p>
                <p><strong>2. [O, I]</strong> Em sua pregação, Pedro cita o profeta Joel...</p>
                <!-- demais perguntas resumidas -->
            </div>`,
    },
    {
      id: "sab6",
      time: "19:30 - 21:00",
      title: "Noite ABUB/IFES",
      subtitle: "Com Beatriz Delvachio",
      icon: "🌍",
      content:
        "<p>Um tempo especial para conhecer mais sobre o movimento estudantil cristão no Brasil e no mundo.</p>",
    },
  ],
  domingo: [
    {
      id: "dom1",
      time: "07:00 - 09:00",
      title: "Oração Matinal, Café e Louvor",
      icon: "🙏",
      content:
        "<p>Começando o dia na presença de Deus, com um tempo de oração, comunhão no café da manhã e louvor.</p>",
    },
    {
      id: "dom2",
      time: "09:00 - 10:00",
      title: "Exposição Bíblica",
      subtitle: "Atos 4:32-5:16",
      icon: "📖",
      content:
        "<p>A vida da primeira comunidade: comunhão, poder e os primeiros desafios internos.</p>",
    },
    {
      id: "dom3",
      time: "10:15 - 12:00",
      title: "Conselho Regional e Palestra 2: Profissão em Missão",
      icon: "💼",
      content:
        "<p>Discussões sobre os rumos da ABU na nossa região e uma palestra inspiradora sobre como nossa futura profissão é um campo missionário.</p>",
    },
    {
      id: "dom4",
      time: "15:45 - 16:15",
      title: "Estudo Bíblico Indutivo",
      subtitle: "Atos 4:1-31",
      icon: "✍️",
      content:
        "<p>Análise do texto de Atos 4:1-31 e reflexão sobre autorias e teologia.</p>",
    },
    {
      id: "dom5",
      time: "19:30 - 21:00",
      title: "Cine ABU",
      icon: "🎬",
      content:
        "<p>Exibição de filme seguido de discussão sobre a mensagem transmitida.</p>",
    },
  ],
  segunda: [
    {
      id: "seg1",
      time: "07:00 - 09:00",
      title: "Oração Matinal, Café e Louvor",
      icon: "🙏",
      content:
        "<p>Começando o dia na presença de Deus, com um tempo de oração, comunhão no café da manhã e louvor.</p>",
    },
    {
      id: "seg2",
      time: "09:00 - 10:00",
      title: "Exposição Bíblica",
      subtitle: "Atos 8:1-40",
      icon: "📖",
      content:
        "<p>A perseguição dispersa a igreja, mas espalha o evangelho. O Espírito age em Samaria e no deserto com Filipe.</p>",
    },
    {
      id: "seg3",
      time: "10:15 - 12:00",
      title: "Oficinas e Palestra 3: Saúde Mental",
      icon: "🧠",
      content:
        "<p>Discussão sobre cuidados com a saúde mental à luz da fé, combatendo estigmas e buscando auxílio.</p>",
    },
    {
      id: "seg4",
      time: "15:45 - 16:15",
      title: "Estudo Bíblico Indutivo",
      subtitle: "Atos 5:17-42",
      icon: "✍️",
      content: "<p>Resistindo aos apelos do poder: reflexão sobre Atos 5.</p>",
    },
    {
      id: "seg5",
      time: "19:30 - 21:00",
      title: "Sarau",
      icon: "🎶",
      content: "<p>Noite de talentos, comunhão e expressão artística.</p>",
    },
  ],
  terca: [
    {
      id: "ter1",
      time: "07:00 - 09:00",
      title: "Oração Matinal, Café e Louvor",
      icon: "🙏",
      content: "<p>Nosso último dia começando em oração e gratidão.</p>",
    },
    {
      id: "ter2",
      time: "09:00 - 10:00",
      title: "Exposição Bíblica",
      subtitle: "Atos 10:1-48",
      icon: "📖",
      content:
        "<p>A barreira entre judeus e gentios é quebrada. O evangelho é para todos!</p>",
    },
    {
      id: "ter3",
      time: "11:00 - 12:00",
      title: "Encerramento e Ceia",
      icon: "🍞",
      content: "<p>Ceia e reflexões finais: celebração e compromisso.</p>",
    },
    {
      id: "ter4",
      time: "15:45",
      title: "Envio",
      icon: "🚀",
      content:
        "<p>Envio para nossas universidades, cidades e famílias, movidos pelo vento do Espírito.</p>",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const dayNavigation = document.getElementById("day-navigation");
  const timelineContainer = document.getElementById("timeline-container");
  const detailsTitle = document.getElementById("details-title");
  const detailsSubtitle = document.getElementById("details-subtitle");
  const detailsContent = document.getElementById("details-content");
  const welcomeModal = document.getElementById("welcome-modal");
  const closeModalButton = document.getElementById("close-modal-button");
  const appContent = document.getElementById("app-content");

  const days = {
    sexta: "Sexta (18/07)",
    sabado: "Sábado (19/07)",
    domingo: "Domingo (20/07)",
    segunda: "Segunda (21/07)",
    terca: "Terça (22/07)",
  };

  let activeDay = "sexta";
  let activeEventId = eventData[activeDay][0].id;

  function renderDetails(day, eventId) {
    const event = eventData[day].find((e) => e.id === eventId);
    if (event) {
      detailsTitle.textContent = event.title;
      detailsSubtitle.textContent = event.subtitle || "";
      detailsSubtitle.classList.toggle("hidden", !event.subtitle);
      detailsContent.innerHTML = event.content;
      activeEventId = event.id;

      document.querySelectorAll(".timeline-item").forEach((item) => {
        item.classList.remove("active", "bg-blue-50");
        if (item.dataset.id === eventId) {
          item.classList.add("active", "bg-blue-50");
        }
      });
    }
  }

  function renderTimeline(day) {
    activeDay = day;
    timelineContainer.innerHTML = "";
    const events = eventData[day];
    events.forEach((event, index) => {
      const item = document.createElement("div");
      item.className = "relative pl-8 pb-8 timeline-item";
      item.dataset.id = event.id;
      item.dataset.day = day;

      item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="cursor-pointer p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                    <p class="text-xs text-gray-500">${event.time}</p>
                    <h4 class="font-semibold text-gray-700">${event.icon} ${
        event.title
      }</h4>
                    ${
                      event.subtitle
                        ? `<p class="text-sm text-gray-600">${event.subtitle}</p>`
                        : ""
                    }
                </div>
            `;
      timelineContainer.appendChild(item);
    });

    if (events.length > 0) {
      renderDetails(day, events[0].id);
    } else {
      detailsTitle.textContent = "Sem eventos";
      detailsSubtitle.textContent = "";
      detailsContent.innerHTML =
        "<p>Não há eventos programados para este dia.</p>";
    }

    updateNavButtons();
  }

  function updateNavButtons() {
    document.querySelectorAll(".nav-button").forEach((button) => {
      button.classList.toggle("active", button.dataset.day === activeDay);
    });
  }

  function setupNavigation() {
    Object.keys(days).forEach((dayKey) => {
      const button = document.createElement("button");
      button.className =
        "nav-button px-3 py-1.5 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-200 transition-colors";
      button.textContent = days[dayKey];
      button.dataset.day = dayKey;
      dayNavigation.appendChild(button);
    });

    dayNavigation.addEventListener("click", (e) => {
      if (e.target.matches("button")) {
        const day = e.target.dataset.day;
        renderTimeline(day);
      }
    });
  }

  timelineContainer.addEventListener("click", (e) => {
    const item = e.target.closest(".timeline-item");
    if (item) {
      renderDetails(item.dataset.day, item.dataset.id);
    }
  });

  closeModalButton.addEventListener("click", () => {
    const modalBox = welcomeModal.querySelector("div");
    modalBox.classList.remove("scale-100", "opacity-100");
    modalBox.classList.add("scale-95", "opacity-0");
    welcomeModal.classList.add("opacity-0");
    setTimeout(() => {
      welcomeModal.style.display = "none";
      appContent.classList.remove("opacity-0");
    }, 300);
  });

  function init() {
    const modalBox = welcomeModal.querySelector("div");
    setTimeout(() => {
      modalBox.classList.add("scale-100", "opacity-100");
    }, 100);

    setupNavigation();
    renderTimeline(activeDay);
  }

  init();
});
