import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroMaria from "@/assets/hero-maria.png";

const weekDays = [
  '🌈 Segunda - Respiração da Calma', 
  '🏠 Terça - Ajudante Especial', 
  '💫 Quarta - Mente Tranquila', 
  '🌟 Quinta - Estrela da Responsabilidade', 
  '🎨 Sexta - Criativa e Organizada', 
  '🌻 Sábado - Exploradora da Natureza', 
  '💖 Domingo - Família Unida'
];

const missions = {
  '🌈 Segunda - Respiração da Calma': [
    { icon: '🫁', title: 'Exercício da respiração', description: 'respirar fundo 5 vezes quando sentir ansiedade' },
    { icon: '📝', title: 'Diário dos sentimentos', description: 'desenhar como me sinto hoje' },
    { icon: '🧹', title: 'Organizar meu cantinho', description: 'arrumar mesa de estudos e brinquedos' },
    { icon: '🍽️', title: 'Ajudar na cozinha', description: 'colocar os pratos na mesa para o almoço' },
    { icon: '📚', title: 'Leitura tranquila', description: 'ler um livro no meu lugar favorito' }
  ],
  '🏠 Terça - Ajudante Especial': [
    { icon: '🧽', title: 'Missão limpeza', description: 'limpar a mesa depois das refeições' },
    { icon: '👕', title: 'Organizar roupas', description: 'dobrar e guardar minhas roupas no guarda-roupa' },
    { icon: '🌱', title: 'Cuidar das plantas', description: 'regar as plantinhas da casa' },
    { icon: '🧘', title: 'Momento zen', description: 'fazer alongamento quando me sentir agitada' },
    { icon: '🎒', title: 'Preparar mochila', description: 'organizar material escolar para amanhã' }
  ],
  '💫 Quarta - Mente Tranquila': [
    { icon: '🎵', title: 'Música relaxante', description: 'ouvir música calma por 10 minutos' },
    { icon: '🧊', title: 'Técnica do gelo', description: 'segurar um cubo de gelo quando estiver ansiosa' },
    { icon: '🍴', title: 'Ajudante da cozinha', description: 'ajudar a mamãe a preparar o lanche' },
    { icon: '📖', title: 'Contar histórias', description: 'inventar uma história para os brinquedos' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'separar brinquedos por categoria' }
  ],
  '🌟 Quinta - Estrela da Responsabilidade': [
    { icon: '🛏️', title: 'Fazer minha cama', description: 'arrumar cama sozinha toda manhã' },
    { icon: '🧺', title: 'Roupas sujas', description: 'colocar roupas usadas no cesto' },
    { icon: '✋', title: 'Técnica das 5 coisas', description: 'nomear 5 coisas que vejo quando me sinto nervosa' },
    { icon: '🍎', title: 'Preparar lanche', description: 'ajudar a embalar meu lanche escolar' },
    { icon: '📚', title: 'Hora do dever', description: 'fazer lição de casa no horário certo' }
  ],
  '🎨 Sexta - Criativa e Organizada': [
    { icon: '🎨', title: 'Arte da ansiedade', description: 'desenhar ou pintar quando me sentir preocupada' },
    { icon: '👞', title: 'Organizar sapatos', description: 'alinhar todos os sapatos da família' },
    { icon: '📦', title: 'Caixinha da calma', description: 'organizar objetos que me tranquilizam' },
    { icon: '🧹', title: 'Varrer com mamãe', description: 'ajudar a varrer a cozinha' },
    { icon: '🎭', title: 'Teatro das emoções', description: 'representar diferentes sentimentos' }
  ],
  '🌻 Sábado - Exploradora da Natureza': [
    { icon: '🌳', title: 'Caminhada observadora', description: 'passear e observar árvores e flores' },
    { icon: '🪴', title: 'Jardinagem', description: 'plantar sementes ou cuidar do jardim' },
    { icon: '🏡', title: 'Limpar varanda', description: 'ajudar a organizar área externa' },
    { icon: '🦋', title: 'Caça ao tesouro', description: 'procurar objetos na natureza' },
    { icon: '📸', title: 'Álbum da natureza', description: 'desenhar ou fotografar plantas e animais' }
  ],
  '💖 Domingo - Família Unida': [
    { icon: '🙏', title: 'Gratidão da semana', description: 'compartilhar 3 coisas boas que aconteceram' },
    { icon: '🍽️', title: 'Cozinhar juntos', description: 'ajudar a preparar o almoço de domingo' },
    { icon: '🗨️', title: 'Roda de sentimentos', description: 'conversar sobre como me senti esta semana' },
    { icon: '🧹', title: 'Limpeza geral', description: 'escolher um cômodo para organizar com a família' },
    { icon: '🎲', title: 'Jogos em família', description: 'escolher e organizar um jogo para todos' }
  ]
};

// Organizando os dias em páginas para impressão
const printPages = [
  [weekDays[0], weekDays[1]], // Segunda e Terça
  [weekDays[2], weekDays[3]], // Quarta e Quinta  
  [weekDays[4], weekDays[5]], // Sexta e Sábado
  [weekDays[6]]               // Domingo
];

const PrintableMissionBoard = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-container">
      {/* Botão de impressão - apenas na tela */}
      <div className="no-print mb-6 text-center">
        <Button onClick={handlePrint} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
          🖨️ Imprimir Quadro de Missões
        </Button>
      </div>

      {/* Páginas para impressão */}
      {printPages.map((pageDays, pageIndex) => (
        <div key={pageIndex} className="print-page">
          {/* Header com a Maria em cada página */}
          <div className="page-header">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img 
                src={heroMaria} 
                alt="Super Sofia" 
                className="w-16 h-16 rounded-full shadow-magic border-2 border-primary"
              />
              <div className="text-center">
                <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Missões da Super Sofia
                </h1>
                <p className="text-sm text-foreground/80 font-medium">
                  ⭐ Estrela da Organização ⭐
                </p>
              </div>
            </div>
          </div>

          {/* Grid de missões da página */}
          <div className={`grid gap-6 ${pageDays.length === 1 ? 'grid-cols-1 justify-center' : 'grid-cols-2'}`}>
            {pageDays.map((day) => (
              <Card key={day} className="p-4 bg-card/90 shadow-soft border-2 border-primary/20">
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="text-base font-bold px-4 py-2 bg-gradient-hero text-white">
                    {day}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {missions[day as keyof typeof missions].map((mission, missionIndex) => (
                    <div 
                      key={missionIndex}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-accent/30"
                    >
                      <div className="text-xl flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {mission.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-foreground leading-tight">
                          {mission.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Footer em cada página */}
          <div className="page-footer">
            <div className="bg-gradient-sunshine p-3 rounded-xl shadow-soft text-center">
              <p className="text-foreground font-bold text-sm">
                🌟 Você é uma Super Estrela! 🌟
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Cada missão completa te deixa mais organizada e tranquila!
              </p>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          .print-page {
            page-break-after: always;
            page-break-inside: avoid;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
          }
          
          .print-page:last-child {
            page-break-after: auto;
          }
          
          .page-header {
            flex-shrink: 0;
          }
          
          .page-footer {
            flex-shrink: 0;
            margin-top: auto;
            padding-top: 20px;
          }
          
          @page {
            size: landscape;
            margin: 15mm;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        
        @media screen {
          .print-page {
            margin-bottom: 40px;
            padding: 20px;
            border: 1px dashed #ccc;
            min-height: 70vh;
            display: flex;
            flex-direction: column;
          }
          
          .page-footer {
            margin-top: auto;
            padding-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintableMissionBoard;