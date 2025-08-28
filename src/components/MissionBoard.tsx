import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroMaria from "@/assets/hero-maria.png";

const weekDays = [
  '🌈 Segunda - Obediência e Calma', 
  '🏠 Terça - Ajudante Especial', 
  '💫 Quarta - Respeito e Gentileza', 
  '🌟 Quinta - Estrela da Responsabilidade', 
  '🎨 Sexta - Criativo e Organizado', 
  '🌻 Sábado - Dia Livre', 
  '💖 Domingo - Dia Livre'
];

const missions = {
  '🌈 Segunda - Obediência e Calma': [
    { icon: '👂', title: 'Escutar a mamãe', description: 'prestar atenção quando a mamãe falar comigo' },
    { icon: '📝', title: 'Diário dos sentimentos', description: 'desenhar como me sinto hoje' },
    { icon: '🧹', title: 'Organizar meu cantinho', description: 'arrumar mesa de estudos e brinquedos' },
    { icon: '🍽️', title: 'Ajudar na cozinha', description: 'colocar os pratos na mesa para o almoço' },
    { icon: '📚', title: 'Leitura tranquila', description: 'ler um livro no meu lugar favorito' },
    { icon: '🙏', title: 'Gratidão da semana', description: 'compartilhar 3 coisas boas que aconteceram' }
  ],
  '🏠 Terça - Ajudante Especial': [
    { icon: '🧽', title: 'Missão limpeza', description: 'limpar a mesa depois das refeições' },
    { icon: '👕', title: 'Organizar roupas', description: 'dobrar e guardar minhas roupas no guarda-roupa' },
    { icon: '🌱', title: 'Cuidar das plantas', description: 'regar as plantinhas da casa' },
    { icon: '🤝', title: 'Obedecer na primeira vez', description: 'fazer o que a mamãe pede sem repetir' },
    { icon: '🎒', title: 'Preparar mochila', description: 'organizar material escolar para amanhã' },
    { icon: '🌳', title: 'Caminhada observadora', description: 'passear e observar árvores e flores' }
  ],
  '💫 Quarta - Respeito e Gentileza': [
    { icon: '🎵', title: 'Música relaxante', description: 'ouvir música calma por 10 minutos' },
    { icon: '🤐', title: 'Não responder mal', description: 'falar sempre com respeito para a mamãe' },
    { icon: '🍴', title: 'Ajudante da cozinha', description: 'ajudar a mamãe a preparar o lanche' },
    { icon: '📖', title: 'Contar histórias', description: 'inventar uma história para os brinquedos' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'separar brinquedos por categoria' },
    { icon: '🪴', title: 'Jardinagem', description: 'plantar sementes ou cuidar do jardim' }
  ],
  '🌟 Quinta - Estrela da Responsabilidade': [
    { icon: '🛏️', title: 'Fazer minha cama', description: 'arrumar cama sozinha toda manhã' },
    { icon: '🧺', title: 'Roupas sujas', description: 'colocar roupas usadas no cesto' },
    { icon: '💬', title: 'Pedir desculpas', description: 'pedir desculpas quando fizer algo errado' },
    { icon: '🍎', title: 'Preparar lanche', description: 'ajudar a embalar meu lanche escolar' },
    { icon: '📚', title: 'Hora do dever', description: 'fazer lição de casa no horário certo' },
    { icon: '🍽️', title: 'Cozinhar juntos', description: 'ajudar a preparar as refeições' }
  ],
  '🎨 Sexta - Criativo e Organizado': [
    { icon: '🎨', title: 'Arte dos sentimentos', description: 'desenhar algo bonito para a mamãe' },
    { icon: '👞', title: 'Organizar sapatos', description: 'alinhar todos os sapatos da família' },
    { icon: '📦', title: 'Caixinha dos tesouros', description: 'organizar objetos especiais' },
    { icon: '🧹', title: 'Varrer com mamãe', description: 'ajudar a varrer a cozinha' },
    { icon: '🎭', title: 'Teatro das emoções', description: 'representar diferentes sentimentos' },
    { icon: '🗨️', title: 'Conversa especial', description: 'contar para a mamãe sobre meu dia' }
  ],
  '🌻 Sábado - Dia Livre': [
    { icon: '🌈', title: 'Tempo livre', description: 'brincar do que quiser!' },
    { icon: '🛋️', title: 'Descansar', description: 'relaxar e não fazer nada' },
    { icon: '🎮', title: 'Diversão', description: 'escolher sua atividade favorita' }
  ],
  '💖 Domingo - Dia Livre': [
    { icon: '😴', title: 'Dormir mais', description: 'acordar na hora que quiser' },
    { icon: '🎪', title: 'Brincadeira livre', description: 'inventar suas próprias brincadeiras' },
    { icon: '🤗', title: 'Tempo em família', description: 'curtir momentos especiais juntos' }
  ]
};

const MissionBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-sky p-4 print:p-2">
      {/* Header with Hero */}
      <div className="text-center mb-8 print:mb-4">
        <div className="flex items-center justify-center gap-6 mb-4">
          <img 
            src={heroMaria} 
            alt="Super Arthur" 
            className="w-24 h-24 rounded-full shadow-magic border-4 border-primary"
          />
          <div>
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent print:text-primary">
              Missões do Super Arthur
            </h1>
            <p className="text-lg text-foreground/80 font-medium">
              ⭐ Herói da Obediência ⭐
            </p>
          </div>
        </div>
      </div>

      {/* Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 max-w-7xl mx-auto">
        {weekDays.map((day, dayIndex) => (
          <Card key={day} className="p-4 bg-card/90 backdrop-blur-sm shadow-soft border-2 border-primary/20 hover:shadow-magic transition-all duration-300">
            <div className="text-center mb-4">
              <Badge variant="secondary" className="text-lg font-bold px-4 py-2 bg-gradient-hero text-white">
                {day}
              </Badge>
            </div>
            
            <div className="space-y-3">
              {missions[day as keyof typeof missions].map((mission, missionIndex) => (
                <div 
                  key={missionIndex}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-accent/30 transition-colors border border-accent/30"
                >
                  <div className="text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center">
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

      {/* Footer */}
      <div className="text-center mt-8 print:mt-4">
        <div className="bg-gradient-sunshine p-4 rounded-2xl shadow-soft max-w-md mx-auto mb-4">
          <p className="text-foreground font-bold text-lg">
            🌟 Você é um Super Herói! 🌟
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Cada missão completa te deixa mais obediente e respeitoso!
          </p>
        </div>
        
        <div className="mt-6">
          <a 
            href="/print" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold shadow-soft transition-all duration-300 hover:shadow-magic"
          >
            🖨️ Versão para Impressão
          </a>
        </div>
      </div>
    </div>
  );
};

export default MissionBoard;