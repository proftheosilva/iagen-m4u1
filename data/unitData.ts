import type { UnitContent } from "./types";

export const unitData: UnitContent = {
  unitNumber: "Módulo 4 · Unidade 1",
  unitTitle: "Agentes Autônomos e Raciocínio Encadeado",
  unitSubtitle:
    "Como sistemas que recebem um objetivo passam a planejar, decidir e agir — com autonomia sob controle.",
  overview:
    "Nesta unidade você entende a virada de chave da IA Generativa: sair de um chat que apenas responde perguntas para um sistema capaz de receber uma missão, quebrar o problema em etapas, usar ferramentas reais e avaliar se o resultado deu certo antes de entregar.",
  simulatorTitle: "Simulador do Ciclo do Agente",
  simulatorSubtitle:
    "Clique em 'Simular Fluxo' ou selecione cada etapa para ver como um agente resolve um pedido passo a passo.",
  simulatorSteps: [
    {
      id: "perceber",
      label: "Perceber",
      shortDesc: "Recebe o objetivo e lê o contexto atual.",
      detail:
        "O usuário faz um pedido aberto ('Verifique se o pedido #402 já foi pago e avise o cliente'). O agente entende a meta e identifica o que precisa descobrir.",
      payload: `{
  "objetivo": "Verificar pagamento do pedido #402 e notificar cliente",
  "estado": "INICIAL",
  "memoria_curto_prazo": ["pedido_id: 402"]
}`,
    },
    {
      id: "planejar",
      label: "Planejar",
      shortDesc: "Divide o objetivo em passos lógicos.",
      detail:
        "Em vez de tentar adivinhar, o agente cria um plano: 1) consultar o pedido #402 no sistema; 2) checar o status do pagamento; 3) preparar a mensagem.",
      payload: `{
  "plano": [
    "1. chamar buscar_pedido(id=402)",
    "2. validar status_pagamento",
    "3. enviar_notificacao(cliente)"
  ]
}`,
    },
    {
      id: "agir",
      label: "Agir",
      shortDesc: "Executa a ferramenta escolhida.",
      detail:
        "O orquestrador aciona a ferramenta 'buscar_pedido' usando o contrato padronizado (Function Calling / MCP) e recebe os dados reais do banco.",
      payload: `-> Chamando: buscar_pedido(id=402)
<- Retorno: {
  "cliente": "Ana Souza",
  "status": "PAGO",
  "previsao_envio": "Amanhã, 14h"
}`,
    },
    {
      id: "avaliar",
      label: "Avaliar",
      shortDesc: "Confere o resultado e decide o próximo passo.",
      detail:
        "O agente analisa o retorno: o pedido está PAGO! Se tivesse dado erro na consulta, ele poderia replanejar e tentar outra busca.",
      payload: `{
  "validacao": "Dados confirmados com sucesso",
  "proxima_acao": "enviar_notificacao (aguardando confirmação)"
}`,
    },
    {
      id: "concluir",
      label: "Concluir",
      shortDesc: "Entrega a resposta final com segurança.",
      detail:
        "Com tudo validado, a notificação é enviada (ou aprovada pelo humano, conforme o nível de autonomia) e o ciclo se encerra.",
      payload: `{
  "status": "CONCLUIDO",
  "resposta": "Olá Ana! Seu pedido #402 foi confirmado e será enviado amanhã às 14h."
}`,
    },
  ],
  concepts: [
    {
      id: "c1",
      chapter: "Capítulo 1 · Conceito Fundamental",
      title: "O que é, afinal, um Agente Autônomo?",
      summary:
        "A diferença entre uma IA que apenas conversa e um sistema que persegue um objetivo.",
      fromZero:
        "Um chatbot tradicional funciona como um atendente de balcão que só responde perguntas com base no que decorou. Já um agente autônomo funciona como um assistente que recebe uma missão ('resolva isso para mim'), decide quais passos dar, consulta sistemas e só para quando conclui a tarefa.",
      inPractice:
        "No atendimento ao cliente, um chatbot diz 'Acesse o site para ver seu pedido'. Um agente consulta o pedido no sistema, verifica que houve atraso na transportadora e já abre um chamado com o protocolo pronto.",
      attention:
        "Autonomia não significa fazer tudo sem regras. Um agente sem limites pode tomar decisões erradas em alta velocidade.",
      keyTakeaway:
        "Um agente não é apenas um modelo de texto — é um sistema que percebe, planeja, age e avalia em ciclos.",
    },
    {
      id: "c2",
      chapter: "Capítulo 2 · Por que Agora?",
      title: "Velocidade, Escala e Complexidade",
      summary:
        "Os três motivos que fizeram os agentes saírem da teoria para as empresas.",
      fromZero:
        "Antigamente, softwares seguiam receitas fixas ('se acontecer X, faça Y'). Isso funcionava bem para tarefas idênticas, mas quebrava quando o cliente escrevia de um jeito diferente ou surgia uma exceção.",
      inPractice:
        "Empresas recebem milhares de pedidos por dia (escala), precisam responder em segundos (velocidade) e lidam com situações imprevistas (complexidade). Agentes conseguem interpretar o contexto e escolher o caminho certo.",
      attention:
        "Não use um agente para tudo: se uma regra fixa simples resolve o problema, a automação tradicional é mais barata e previsível.",
      keyTakeaway:
        "Agentes brilham quando há muitas exceções e é preciso interpretar linguagem humana para decidir.",
    },
    {
      id: "c3",
      chapter: "Capítulo 3 · Anatomia",
      title: "As 5 Peças de um Agente Moderno",
      summary:
        "Modelo, Orquestrador, Ferramentas, Memória e Interface trabalhando juntos.",
      fromZero:
        "Pense no agente como um corpo: o Modelo (LLM) é o cérebro que raciocina; o Orquestrador é o sistema nervoso que coordena os passos; as Ferramentas são as mãos que apertam botões; a Memória é o caderno de anotações; e a Interface é onde o humano conversa e aprova.",
      inPractice:
        "Se você trocar o modelo de IA (por exemplo, atualizar de versão), não precisa jogar o sistema fora — basta manter o orquestrador, as ferramentas e a memória.",
      attention:
        "Muitos iniciantes acham que o modelo faz tudo sozinho. Na verdade, quem garante a ordem e os limites é o Orquestrador.",
      keyTakeaway:
        "O modelo é apenas uma das cinco peças; a inteligência do produto mora na integração entre todas elas.",
    },
    {
      id: "c4",
      chapter: "Capítulo 4 · Escolha Certa",
      title: "Automação vs. Chatbot vs. Agente",
      summary:
        "Como escolher a abordagem certa para não gastar tempo e dinheiro à toa.",
      fromZero:
        "Automação é um trem nos trilhos: vai sempre de A para B. Chatbot é um guia turístico: tira dúvidas conversando. Agente é um motorista de aplicativo: recalcula a rota se a rua estiver fechada.",
      inPractice:
        "Emitir nota fiscal após pagamento confirmado = Automação. Responder dúvidas sobre horário de funcionamento = Chatbot. Investigar por que uma entrega atrasou e negociar novo prazo = Agente.",
      attention:
        "Usar um agente para tarefa simples gera custo desnecessário de tokens e aumenta a chance de variação na resposta.",
      keyTakeaway:
        "Regra de ouro: se o caminho é 100% conhecido, use automação; se basta conversar, use chatbot; se precisa decidir e agir, use agente.",
    },
    {
      id: "c5",
      chapter: "Capítulo 4 · Controle",
      title: "Os 5 Níveis de Autonomia",
      summary:
        "Autonomia cresce aos poucos: do assistente que sugere até o sistema supervisionado.",
      fromZero:
        "Assim como nos carros (sensor de ré → piloto automático → direção autônoma), nos agentes começamos no Nível 1 (só sugere texto), passamos pelo Nível 2 (prepara a ação e o humano aprova), até níveis mais altos com auditoria.",
      inPractice:
        "A maioria das empresas começa no Nível 2 (Copiloto): o agente pesquisa tudo, escreve a resposta ou preenche o formulário, e o funcionário apenas confere e clica em 'Enviar'.",
      attention:
        "Pular direto para o Nível 5 sem testes e logs é a receita mais rápida para incidentes em produção.",
      keyTakeaway:
        "Comece no Nível 2 (Copiloto) e só aumente a autonomia conforme o sistema provar confiabilidade.",
    },
    {
      id: "c6",
      chapter: "Capítulo 5 · Memória",
      title: "Memória de Curto Prazo, Longo Prazo e Externa",
      summary:
        "O que o agente lembra agora, o que guarda para depois e o que consulta na hora.",
      fromZero:
        "Memória de curto prazo é a conversa atual (como sua mesa de trabalho). Memória de longo prazo são preferências aprendidas ao longo dos dias. Memória externa é o arquivo da empresa (bancos e PDFs) que o agente consulta só quando precisa.",
      inPractice:
        "Em vez de colar um manual de 200 páginas no prompt, deixamos o manual na memória externa e o agente busca apenas o parágrafo relevante.",
      attention:
        "A janela de contexto tem limite! Encher a memória de curto prazo com texto inútil deixa o agente lento, caro e confuso.",
      keyTakeaway:
        "Consultar na hora (memória externa) é sempre melhor do que tentar decorar tudo no prompt.",
    },
    {
      id: "c7",
      chapter: "Capítulo 6 & 7 · Execução",
      title: "Ferramentas, MCP e Raciocínio Encadeado",
      summary:
        "Decompor, validar e replanejar usando contratos claros de ferramentas.",
      fromZero:
        "Raciocínio encadeado é resolver um problemão em passos pequenos: primeiro descobre A, valida se A faz sentido, depois faz B. Para agir, o agente usa ferramentas via Function Calling ou MCP (o padrão universal tipo 'USB-C da IA').",
      inPractice:
        "Se uma ferramenta de pagamento falhar por queda de rede, o agente usa idempotência (garantia de não cobrar duas vezes) e replaneja a tentativa com segurança.",
      attention:
        "Agente bom não é o que tem 100 ferramentas ligadas ao mesmo tempo, e sim o que domina as 5 ferramentas essenciais com regras claras.",
      keyTakeaway:
        "Decompor + Validar + Replanejar transforma erros pontuais em recuperação inteligente.",
    },
    {
      id: "c8",
      chapter: "Capítulo 10 & 12 · Produção",
      title: "Novos Erros, Custo Invisível e Roteiro 30/60/90 Dias",
      summary:
        "Por que agentes erram diferente e como começar do jeito certo.",
      fromZero:
        "Um chatbot erra em uma frase; um agente pode entrar em loop infinito tentando a mesma ferramenta 20 vezes e gastando tokens sem parar (custo invisível).",
      inPractice:
        "Plano seguro: 30 dias para escolher 1 caso simples e testar; 60 dias para medir acertos com humano aprovando; 90 dias para escalar com logs e monitoramento.",
      attention:
        "Sempre defina um limite máximo de passos (ex: máximo 6 tentativas) e tempo limite para evitar loops infinitos.",
      keyTakeaway:
        "Todo agente precisa de freio: limite de passos, medição de custo e supervisão humana.",
    },
  ],
  quiz: [
    {
      id: 1,
      question:
        "Qual é a principal diferença entre um chatbot tradicional e um agente autônomo?",
      options: [
        "O chatbot usa cores diferentes na tela.",
        "O agente recebe um objetivo, planeja passos, usa ferramentas e avalia resultados.",
        "O agente não precisa de modelo de linguagem para funcionar.",
        "O chatbot só funciona offline sem internet.",
      ],
      correctIndex: 1,
      explanation:
        "Enquanto o chatbot apenas responde perguntas em texto, o agente atua em ciclos (Perceber, Planejar, Agir, Avaliar) para cumprir um objetivo.",
    },
    {
      id: 2,
      question: "Qual é a ordem correta do ciclo básico de um agente?",
      options: [
        "Agir → Esquecer → Responder → Desligar",
        "Perceber → Planejar → Agir → Avaliar",
        "Formatar → Imprimir → Enviar → Apagar",
        "Copiar → Colar → Traduzir → Salvar",
      ],
      correctIndex: 1,
      explanation:
        "O agente percebe o objetivo/contexto, planeja o próximo passo, age usando uma ferramenta e avalia se precisa continuar ou concluir.",
    },
    {
      id: 3,
      question:
        "Na anatomia de um agente, qual peça atua como o 'maestro' que coordena os ciclos e limites?",
      options: [
        "O Orquestrador",
        "A Memória Externa",
        "O Cabo de Rede",
        "O Banco de Imagens",
      ],
      correctIndex: 0,
      explanation:
        "O Orquestrador coordena a comunicação entre o modelo (cérebro), as ferramentas (mãos) e a memória, controlando o fluxo.",
    },
    {
      id: 4,
      question:
        "Quando uma tarefa tem caminho 100% conhecido e sem exceções (ex: enviar nota fiscal após pagamento), o que devemos usar?",
      options: [
        "Um enxame de 10 agentes autônomos",
        "Automação tradicional",
        "Um jogo da memória",
        "Apenas um prompt manual todo dia",
      ],
      correctIndex: 1,
      explanation:
        "Regra de ouro: se uma automação simples resolve com previsibilidade e baixo custo, não há motivo para usar um agente.",
    },
    {
      id: 5,
      question:
        "Em qual nível de autonomia a maioria das empresas começa com segurança?",
      options: [
        "Nível 5 (autonomia total sem revisão)",
        "Nível 2 (Copiloto: o agente prepara e o humano aprova)",
        "Nível 0 (sem computador)",
        "Nível 10 (controle absoluto de servidores)",
      ],
      correctIndex: 1,
      explanation:
        "No Nível 2 (Copiloto), o agente faz o trabalho pesado de pesquisa e rascunho, mas o humano valida antes da ação final.",
    },
    {
      id: 6,
      question:
        "Por que é melhor usar Memória Externa (consultar bancos/documentos) do que colocar tudo no prompt?",
      options: [
        "Porque o prompt tem limite de contexto e excesso de texto gera lentidão, custo e confusão.",
        "Porque os modelos não sabem ler texto em português.",
        "Porque memória externa apaga os dados automaticamente.",
        "Não faz diferença nenhuma.",
      ],
      correctIndex: 0,
      explanation:
        "Encher a janela de contexto com dados irrelevantes aumenta o custo de tokens, deixa a resposta lenta e piora a precisão.",
    },
    {
      id: 7,
      question: "O que significa 'Idempotência' ao usar ferramentas externas?",
      options: [
        "O agente inventar uma resposta quando não sabe.",
        "Repetir a mesma chamada por falha de rede sem duplicar o efeito (ex: não cobrar duas vezes).",
        "Apagar o histórico do usuário após 5 minutos.",
        "Aumentar o tamanho da fonte do chat.",
      ],
      correctIndex: 1,
      explanation:
        "Como no botão do elevador, apertar mais de uma vez não chama vários elevadores — garante segurança em novas tentativas.",
    },
    {
      id: 8,
      question: "O que é o 'custo invisível' em agentes autônomos?",
      options: [
        "O preço do mouse e do teclado.",
        "O consumo acumulado de tokens e tempo em múltiplos passos ou loops.",
        "A conta de água do escritório.",
        "O salário do designer.",
      ],
      correctIndex: 1,
      explanation:
        "Como o agente executa vários ciclos de raciocínio, um loop sem limite pode consumir muitos tokens rapidamente.",
    },
    {
      id: 9,
      question:
        "No raciocínio encadeado, o que o agente faz quando uma ferramenta falha?",
      options: [
        "Desliga o computador do usuário.",
        "Avalia o erro e replaneja o próximo passo dentro dos limites permitidos.",
        "Inventa um número aleatório para disfarçar.",
        "Ignora o usuário para sempre.",
      ],
      correctIndex: 1,
      explanation:
        "A capacidade de validar resultados e replanejar diante de falhas é uma das marcas de um agente bem construído.",
    },
    {
      id: 10,
      question:
        "Qual é a recomendação do roteiro de 30/60/90 dias para começar com agentes?",
      options: [
        "Substituir toda a empresa no primeiro dia.",
        "Começar com 1 caso claro e baixo risco, medir resultados com supervisão e só depois escalar.",
        "Nunca medir métricas de acerto ou custo.",
        "Dar acesso de administrador a todas as ferramentas logo no início.",
      ],
      correctIndex: 1,
      explanation:
        "Começar pequeno, validar com usuários reais e medir acertos e custos garante evolução segura até a produção.",
    },
  ],
  memoryPairs: [
    {
      id: "m1",
      term: "Orquestrador",
      definition: "Maestro que coordena o ciclo, ferramentas e limites do agente.",
    },
    {
      id: "m2",
      term: "Memória Externa",
      definition: "Consultar bancos e arquivos na hora em vez de colar tudo no prompt.",
    },
    {
      id: "m3",
      term: "Nível 2 (Copiloto)",
      definition: "Agente prepara a tarefa e o humano revisa antes de executar.",
    },
    {
      id: "m4",
      term: "Idempotência",
      definition: "Repetir o comando por falha sem duplicar a ação no sistema.",
    },
    {
      id: "m5",
      term: "Loop Infinito",
      definition: "Falha em que o agente repete passos sem parar, gerando custo.",
    },
    {
      id: "m6",
      term: "Raciocínio Encadeado",
      definition: "Decompor o objetivo, validar cada passo e replanejar se preciso.",
    },
  ],
};
