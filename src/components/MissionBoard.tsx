import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroMaria from "@/assets/hero-maria.png";

const weekDays = [
  '💙 Segunda - Herói Obediente', 
  '🏠 Terça - Ajudante da Mamãe', 
  '📚 Quarta - Estudioso Responsável', 
  '⭐ Quinta - Organizador Campeão', 
  '🎯 Sexta - Focado e Disciplinado', 
  '🌻 Sábado - Dia Livre', 
  '💖 Domingo - Dia Livre'
];

const missions = {
  '💙 Segunda - Herói Obediente': [
    { icon: '👂', title: 'Escutar a mamãe', description: 'prestar atenção quando a mamãe falar' },
    { icon: '🤐', title: 'Não responder mal', description: 'falar sempre com educação e carinho' },
    { icon: '🫁', title: 'Respiração da calma', description: 'respirar fundo 3 vezes quando irritado' },
    { icon: '🛏️', title: 'Arrumar minha cama', description: 'fazer a cama sozinho toda manhã' },
    { icon: '🎯', title: 'Obedecer na primeira', description: 'fazer o que a mamãe pede logo na primeira vez' },
    { icon: '🏆', title: 'Pote de estrelas', description: 'ganhar uma estrela por cada boa ação' }
  ],
  '🏠 Terça - Ajudante da Mamãe': [
    { icon: '🧽', title: 'Limpar a mesa', description: 'ajudar a limpar a mesa após as refeições' },
    { icon: '👞', title: 'Guardar sapatos', description: 'organizar os sapatos da família' },
    { icon: '🧺', title: 'Roupas no cesto', description: 'colocar roupas sujas no lugar certo' },
    { icon: '🍽️', title: 'Pôr a mesa', description: 'ajudar a colocar pratos e talheres' },
    { icon: '💙', title: 'Pedir desculpas', description: 'falar "desculpa mamãe" quando errar' },
    { icon: '🌱', title: 'Cuidar das plantas', description: 'regar as plantinhas com a mamãe' }
  ],
  '📚 Quarta - Estudioso Responsável': [
    { icon: '📖', title: 'Lição de casa', description: 'fazer o dever na mesa de estudos' },
    { icon: '✏️', title: 'Caprichar na letra', description: 'escrever bonito e com atenção' },
    { icon: '📚', title: 'Leitura diária', description: 'ler um livro por 20 minutos' },
    { icon: '🎒', title: 'Organizar mochila', description: 'preparar material escolar sozinho' },
    { icon: '🧠', title: 'Estudar tabuada', description: 'praticar matemática 15 minutos' },
    { icon: '👨‍🏫', title: 'Obedecer professor', description: 'ser educado e atencioso na escola' }
  ],
  '⭐ Quinta - Organizador Campeão': [
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '👕', title: 'Dobrar roupas', description: 'ajudar a dobrar e guardar roupas' },
    { icon: '🧹', title: 'Varrer o quarto', description: 'ajudar a limpar o próprio quarto' },
    { icon: '📱', title: 'Horário do tablet', description: 'usar eletrônicos só no horário permitido' },
    { icon: '🍎', title: 'Preparar lanche', description: 'ajudar a fazer o lanche escolar' },
    { icon: '💪', title: 'Ser responsável', description: 'cuidar das próprias coisas' }
  ],
  '🎯 Sexta - Focado e Disciplinado': [
    { icon: '⏰', title: 'Cumprir horários', description: 'acordar e dormir no horário certo' },
    { icon: '🙋‍♂️', title: 'Ajudar sem pedir', description: 'oferecer ajuda para a mamãe' },
    { icon: '🤝', title: 'Dividir brinquedos', description: 'emprestar brinquedos para irmãos' },
    { icon: '🧘', title: 'Momento zen', description: 'ficar 5 minutos quieto e calmo' },
    { icon: '🗣️', title: 'Falar a verdade', description: 'sempre contar a verdade para a mamãe' },
    { icon: '⭐', title: 'Semana campeã', description: 'revisar todas as conquistas da semana' }
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
              🏆 Herói da Obediência 🏆
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
            🏆 Você é um Super Herói! 🏆
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Cada missão completa te torna mais obediente e responsável!
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