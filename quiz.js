// Definição das perguntas do quiz e suas respectivas opções (Emoji, Texto, Categoria)
const questions = [
  {
    text: "Qual seria sua maior prioridade ao governar uma cidade?",
    options: [
      ["❤️", "Garantir direitos e oportunidades para todos", "igualitaria"],
      ["📈", "Fazer a economia crescer e gerar empregos", "desenvolvimentista"],
      ["🍃", "Proteger a natureza e investir em sustentabilidade", "sustentavel"],
      ["🗳️", "Garantir liberdade e participação nas decisões", "democratica"]
    ]
  },
  {
    text: "Se você tivesse pouco dinheiro no orçamento, o que priorizaria?",
    options: [
      ["❤️", "Investir em saúde, educação e moradia para a população.", "igualitaria"],
      ["📈", "Focar no crescimento econômico, empregos e infraestrutura.", "desenvolvimentista"],
      ["🍃", "Aplicar em energia limpa, reciclagem e áreas verdes.", "sustentavel"],
      ["👥", "Ouvir a população e decidir juntos, por meio da participação cidadã.", "democratica"]
    ]
  },
  {
    text: "Como você lidaria com a desigualdade social?",
    options: [
      ["🤝", "Criaria programas para reduzir as diferenças e ampliar oportunidades.", "igualitaria"],
      ["🏗️", "Apostaria em empregos e novos negócios para movimentar a economia.", "desenvolvimentista"],
      ["🌱", "Garantiria que todos tivessem acesso a espaços verdes e recursos limpos.", "sustentavel"],
      ["💬", "Promoveria debates públicos para construir soluções coletivas.", "democratica"]
    ]
  },
  {
    text: "Quem deveria ter mais influência nas decisões da cidade?",
    options: [
      ["⚖️", "Políticas públicas focadas nos direitos e nas necessidades de todos.", "igualitaria"],
      ["🧠", "Equipes técnicas e gestores focados no desenvolvimento.", "desenvolvimentista"],
      ["🌎", "Comunidades, cientistas e especialistas em meio ambiente.", "sustentavel"],
      ["🗳️", "Os cidadãos, por meio de eleições, consultas e debates.", "democratica"]
    ]
  },
  {
    text: "Como você gostaria que sua cidade fosse daqui a 20 anos?",
    options: [
      ["🏘️", "Um lugar onde todos tenham uma vida digna.", "igualitaria"],
      ["🚄", "Uma cidade moderna, com empregos, tecnologia e infraestrutura.", "desenvolvimentista"],
      ["🌳", "Uma cidade limpa, verde e que use recursos com responsabilidade.", "sustentavel"],
      ["🤲", "Uma cidade livre, participativa e respeitosa com as diferenças.", "democratica"]
    ]
  },
  {
    text: "Qual medida deveria receber mais investimento?",
    options: [
      ["🏥", "Ampliar hospitais, escolas e serviços públicos", "igualitaria"],
      ["🏭", "Atrair empresas e melhorar a infraestrutura", "desenvolvimentista"],
      ["☀️", "Expandir energia solar e transporte limpo", "sustentavel"],
      ["🗣️", "Criar consultas públicas para definir prioridades", "democratica"]
    ]
  },
  {
    text: "Como a cidade deveria lidar com o transporte?",
    options: [
      ["🚌", "Oferecer transporte público acessível a todos", "igualitaria"],
      ["🚇", "Construir grandes obras e conexões para impulsionar a economia", "desenvolvimentista"],
      ["🚲", "Priorizar bicicletas, caminhada e veículos menos poluentes", "sustentavel"],
      ["📣", "Consultar os moradores antes de mudar as linhas", "democratica"]
    ]
  },
  {
    text: "O que fazer quando uma empresa polui um rio e gera muitos empregos?",
    options: [
      ["🤝", "Proteger as comunidades afetadas e garantir alternativas de trabalho", "igualitaria"],
      ["🏗️", "Negociar melhorias para manter a atividade econômica", "desenvolvimentista"],
      ["🌊", "Exigir que a poluição pare e recuperar o rio", "sustentavel"],
      ["⚖️", "Promover uma decisão transparente com participação pública", "democratica"]
    ]
  },
  {
    text: "Como melhorar a educação?",
    options: [
      ["📚", "Garantir acesso e qualidade para todos os estudantes", "igualitaria"],
      ["💻", "Investir em tecnologia e formação para novas profissões", "desenvolvimentista"],
      ["🌿", "Incluir educação ambiental e projetos sustentáveis", "sustentavel"],
      ["🏫", "Ouvir estudantes, famílias e professores nas decisões", "democratica"]
    ]
  },
  {
    text: "Qual indicador mostra melhor que a cidade está indo bem?",
    options: [
      ["❤️", "Menos desigualdade e mais acesso a direitos", "igualitaria"],
      ["📈", "Mais empregos, renda e inovação", "desenvolvimentista"],
      ["🌳", "Menos poluição e uso responsável dos recursos", "sustentavel"],
      ["🗳️", "Mais transparência e participação dos cidadãos", "democratica"]
    ]
  },
  {
    text: "Como a cidade deveria planejar novos bairros?",
    options: [
      ["🏘️", "Garantir moradia digna e serviços essenciais próximos", "igualitaria"],
      ["🏢", "Atrair negócios e criar áreas de atividade econômica", "desenvolvimentista"],
      ["🌱", "Preservar áreas verdes e reduzir o impacto ambiental", "sustentavel"],
      ["👥", "Planejar junto com os moradores da região", "democratica"]
    ]
  },
  {
    text: "Se houver uma decisão urgente que afete todos, o que priorizar?",
    options: [
      ["🫶", "Proteger primeiro quem está em situação mais vulnerável", "igualitaria"],
      ["⚙️", "Escolher a opção que resolva o problema com mais eficiência", "desenvolvimentista"],
      ["🍃", "Evitar danos ambientais que possam ser irreversíveis", "sustentavel"],
      ["🗳️", "Explicar as opções e garantir participação e fiscalização", "democratica"]
    ]
  },
  {
    text: "Como usar a tecnologia na administração pública?",
    options: [
      ["📱", "Facilitar o acesso de todos aos serviços essenciais", "igualitaria"],
      ["🤖", "Aumentar produtividade e atrair inovação", "desenvolvimentista"],
      ["🔋", "Monitorar energia, água e impactos ambientais", "sustentavel"],
      ["🔎", "Publicar dados e permitir que a população fiscalize", "democratica"]
    ]
  }
];

// Definição dos tipos de sociedade e suas descrições
const types = {
  igualitaria: {
    title: "Sociedade Igualitária",
    subtitle: "Sua prioridade é o bem-estar coletivo.",
    message: "Você valoriza direitos básicos, redução das desigualdades e oportunidades para todos. O desafio será distribuir recursos de forma justa e atender às diferentes necessidades da população."
  },
  desenvolvimentista: {
    title: "Sociedade Desenvolvimentista",
    subtitle: "Sua prioridade é o crescimento econômico.",
    message: "Sua cidade valoriza empregos, tecnologia, infraestrutura e crescimento econômico. O desafio será fazer com que a riqueza gerada beneficie a população inteira, sem deixar grupos para trás."
  },
  sustentavel: {
    title: "Sociedade Sustentável",
    subtitle: "Sua prioridade é o futuro do planeta.",
    message: "Sua sociedade procura conciliar qualidade de vida, preservação ambiental e uso consciente dos recursos. O desafio será manter esse equilíbrio enquanto atende às necessidades econômicas e sociais."
  },
  democratica: {
    title: "Sociedade Democrática",
    subtitle: "Sua prioridade é a participação cidadã.",
    message: "Sua cidade valoriza liberdade, diálogo e participação das pessoas nas decisões. O desafio será conciliar diferentes opiniões e encontrar soluções que respeitem os direitos de todos."
  }
};

let current = 0;
let selected = Array(questions.length).fill(null);
let participantName = "";

const $ = id => document.getElementById(id);

// Função para renderizar a pergunta atual e as opções na tela
function render() {
  const q = questions[current];
  $("qCount").textContent = `Pergunta ${current + 1} de ${questions.length}`;
  $("percent").textContent = `${Math.round((current / questions.length) * 100)}%`;
  $("progress").style.width = `${(current / questions.length) * 100}%`;
  $("question").textContent = q.text;

  $("answers").innerHTML = q.options.map((o, i) => `
    <button class="answer ${selected[current] === i ? 'selected' : ''}" data-index="${i}" aria-pressed="${selected[current] === i}">
      <span class="emoji">${o[0]}</span>
      <span>${o[1]}</span>
      <span class="radio"></span>
    </button>
  `).join("");

  document.querySelectorAll(".answer").forEach(btn => 
    btn.addEventListener("click", () => {
      selected[current] = Number(btn.dataset.index);
      render();
    })
  );

  $("backBtn").disabled = current === 0;
  $("backBtn").style.opacity = current === 0 ? ".45" : "1";
  $("nextBtn").disabled = selected[current] === null;
  $("nextBtn").textContent = current === questions.length - 1 ? "Ver meu resultado ✨" : "Próxima pergunta →";
}

// Função para calcular pontuações, salvar no localStorage e exibir o resultado final
function showResult() {
  const scores = { igualitaria: 0, desenvolvimentista: 0, sustentavel: 0, democratica: 0 };
  
  selected.forEach((v, i) => scores[questions[i].options[v][2]]++);
  
  const high = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter(k => scores[k] === high);

  // Registro local: os dados ficam somente neste navegador/computador
  try {
    const key = "sociedadeIdealRegistrosV1";
    const registros = JSON.parse(localStorage.getItem(key) || "[]");
    
    registros.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      nome: participantName,
      data: new Date().toISOString(),
      resultado: winners.map(k => types[k].title).join(" + "),
      vencedores: winners,
      scores,
      respostas: selected.map((v, i) => ({
        pergunta: questions[i].text,
        escolha: questions[i].options[v][1],
        modelo: questions[i].options[v][2]
      }))
    });
    
    localStorage.setItem(key, JSON.stringify(registros));
  } catch (e) {
    console.warn("Não foi possível salvar o resultado localmente.", e);
  }

  let html = "";
  if (winners.length > 1) {
    html = `<h2>🌈 Sua sociedade combina prioridades!</h2><p>Suas escolhas ficaram divididas entre <strong>${winners.map(k => types[k].title).join("</strong> e <strong>")}</strong>. Você valoriza diferentes objetivos; o desafio será equilibrá-los quando houver conflitos.</p>`;
  } else {
    const t = types[winners[0]];
    html = `<h2>${t.title}</h2><p><strong>${t.subtitle}</strong></p><p>${t.message}</p>`;
  }

  html += '<div class="score-list"><strong>Pontuação das suas escolhas</strong>' + 
    Object.keys(scores).map(k => `
      <div class="score-row">
        <span>${types[k].title.replace("Sociedade ", "")}</span>
        <div class="score-track"><div class="score-fill" style="width:${(scores[k] / questions.length) * 100}%"></div></div>
        <span>${scores[k]}/${questions.length}</span>
      </div>
    `).join("") + 
    '</div><p style="font-size:12px;color:#586782">Esse resultado representa suas escolhas neste quiz, não define quem você é e não existe modelo perfeito.</p>' +
    '<a class="primary" href="resultados.html">Conhecer todos os modelos →</a>' +
    '<p><button class="secondary" id="againBtn">↻ Refazer quiz</button></p>';

  $("resultDetail").innerHTML = html;
  
  const who = document.createElement("p");
  who.innerHTML = "<strong>Participante:</strong> ";
  who.appendChild(document.createTextNode(participantName));
  
  $("resultDetail").prepend(who);
  $("resultDetail").hidden = false;
  $("resultDetail").scrollIntoView({ behavior: "smooth", block: "center" });
  
  $("qCount").textContent = "Quiz concluído!";
  $("percent").textContent = "100%";
  $("progress").style.width = "100%";
  $("nextBtn").disabled = true;
  $("nextBtn").textContent = "Resultado exibido";

  document.getElementById("againBtn").addEventListener("click", reset);
}

// Reseta o estado do quiz para permitir refazer
function reset() {
  current = 0;
  selected = Array(questions.length).fill(null);
  $("resultDetail").hidden = true;
  $("quizContent").hidden = true;
  $("nameGate").hidden = false;
  $("participantName").value = participantName;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Permite recuperar o último resultado pelo nome, neste mesmo navegador
const lookupBtn = document.getElementById("lookupBtn");
if (lookupBtn) {
  lookupBtn.addEventListener("click", () => {
    const n = $("participantName").value.trim();
    if (!n) {
      alert("Digite o nome usado quando fez o quiz.");
      return;
    }
    
    let registros = [];
    try {
      registros = JSON.parse(localStorage.getItem("sociedadeIdealRegistrosV1") || "[]");
    } catch (e) {}
    
    const encontrados = registros.filter(r => (r.nome || "").trim().toLocaleLowerCase("pt-BR") === n.toLocaleLowerCase("pt-BR"));
    const box = $("savedLookup");
    
    if (!encontrados.length) {
      box.hidden = false;
      box.innerHTML = "<p>Não encontramos resultados salvos com esse nome neste navegador. Confira a escrita ou faça o quiz agora.</p>";
      return;
    }
    
    const r = encontrados[encontrados.length - 1];
    box.hidden = false;
    box.innerHTML = `
      <h3>Resultado salvo de ${escapeHtml(r.nome)}</h3>
      <p><strong>${escapeHtml(r.resultado)}</strong></p>
      <p>Feito em ${new Date(r.data).toLocaleString("pt-BR")}</p>
      <div class="score-list"><strong>Pontuação</strong>${Object.entries(r.scores).map(([k, v]) => `<div class="score-row"><span>${escapeHtml(types[k]?.title || k)}</span><span>${v}/${questions.length}</span></div>`).join("")}</div>
      <h4>Suas respostas</h4>
      <ol>${(r.respostas || []).map(a => `<li><strong>${escapeHtml(a.pergunta)}</strong><br>${escapeHtml(a.escolha)}</li>`).join("")}</ol>
      <a class="primary" href="resultados.html">Ver todos os modelos →</a>
    `;
  });
}

function escapeHtml(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

// Event Listeners principais de navegação
$("startBtn").addEventListener("click", () => {
  const n = $("participantName").value.trim();
  if (!n) {
    alert("Digite seu nome para começar.");
    $("participantName").focus();
    return;
  }
  participantName = n;
  $("nameGate").hidden = true;
  $("quizContent").hidden = false;
  render();
});

$("nextBtn").addEventListener("click", () => {
  if (selected[current] === null) return;
  if (current < questions.length - 1) {
    current++;
    render();
  } else {
    showResult();
  }
});

$("backBtn").addEventListener("click", () => {
  if (current > 0) {
    current--;
    render();
  }
});

// Inicialização
render();