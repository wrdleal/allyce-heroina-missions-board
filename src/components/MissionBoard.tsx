import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroMaria from "@/assets/hero-maria.png";

const weekDays = [
  'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'
];

const missions = {
  'Segunda': [
    { icon: '✏️', title: 'Desenho mágico', description: 'Você consegue desenhar sozinha! Escolha suas cores favoritas e crie' },
    { icon: '🧠', title: 'Jogo da memória', description: 'Seja corajosa! Vire as cartas e use sua memória poderosa' },
    { icon: '🧸', title: 'Guardar brinquedos', description: 'Mostre sua força organizando tudo sozinha no lugar certo' },
    { icon: '⭐', title: 'Ir ao banheiro', description: 'Você é independente! Vá sozinha quando sentir vontade' },
    { icon: '📚', title: 'História de fada', description: 'Seja corajosa como a fada da história! Você também é forte' }
  ],
  'Terça': [
    { icon: '🐠', title: 'Vídeo do peixinho', description: 'Respire com calma sozinha, você consegue se acalmar' },
    { icon: '💖', title: 'Ajudar a vovó', description: 'Mostre sua gentileza ajudando por iniciativa própria' },
    { icon: '🛏️', title: 'Arrumar o quarto', description: 'Você é capaz! Organize sua cama sozinha como uma heroína' },
    { icon: '🪆', title: 'Explorar com boneca', description: 'Seja aventureira! Explore corajosamente cada cantinho' },
    { icon: '💃', title: 'Dança livre', description: 'Dance sem medo! Solte-se e mostre seus movimentos' }
  ],
  'Quarta': [
    { icon: '☁️', title: 'Soprinho da calma', description: 'Você tem o poder de se acalmar sozinha respirando devagar' },
    { icon: '🎨', title: 'Massinha mágica', description: 'Crie sozinha! Suas mãos fazem magia na massinha' },
    { icon: '🪆', title: 'Banheiro com boneca', description: 'Vá corajosamente, você e sua boneca são fortes juntas' },
    { icon: '💡', title: 'Luz mágica', description: 'Você consegue se preparar para dormir sozinha com sua luz' },
    { icon: '📖', title: 'Guardar livros', description: 'Organize independentemente cada livrinho em seu lugar' }
  ],
  'Quinta': [
    { icon: '🏃', title: 'Circuito obstáculos', description: 'Seja destemida! Enfrente cada obstáculo com coragem' },
    { icon: '🔍', title: 'Missão cômodos', description: 'Explore sozinha como uma detetive corajosa e curiosa' },
    { icon: '🛡️', title: 'Pintar escudo', description: 'Decore seu escudo da coragem, você é uma guerreira!' },
    { icon: '🔦', title: 'História lanterna', description: 'Você é corajosa no escuro! Use sua lanterna mágica' },
    { icon: '🧹', title: 'Ajudar a limpar', description: 'Mostre sua independência ajudando sozinha a organizar' }
  ],
  'Sexta': [
    { icon: '😊', title: 'Colagem medômetro', description: 'Mostre como você é corajosa colando suas conquistas' },
    { icon: '👸', title: 'Princesa valente', description: 'Você é como a princesa: corajosa e pode tudo sozinha!' },
    { icon: '💝', title: 'Pote da coragem', description: 'Coloque sozinha tudo que te faz sentir corajosa' },
    { icon: '📺', title: 'Filminho cobertor', description: 'Você consegue se aconchegar sozinha e relaxar' },
    { icon: '👕', title: 'Ajudar com roupas', description: 'Seja independente organizando as roupinhas sozinha' }
  ],
  'Sábado': [
    { icon: '🦸‍♀️', title: 'Aventura heroína', description: 'Vista sua capa e seja a heroína corajosa que você é!' },
    { icon: '🌳', title: 'Caminhada vovó', description: 'Caminhe confiante explorando o mundo ao seu redor' },
    { icon: '🚪', title: 'Explorar cantinho', description: 'Seja destemida descobrindo novos espaços sozinha' },
    { icon: '🏠', title: 'Pintura lugar seguro', description: 'Crie sozinha seu cantinho especial onde se sente forte' },
    { icon: '🤲', title: 'Guardar toalhinhas', description: 'Mostre sua habilidade dobrando tudo organizadamente' }
  ],
  'Domingo': [
    { icon: '😄', title: 'Roda da gratidão', description: 'Fale sozinha sobre tudo que te deixou corajosa esta semana' },
    { icon: '🛁', title: 'Banho encantado', description: 'Você consegue se cuidar sozinha brincando na água' },
    { icon: '💬', title: 'Conversa família', description: 'Conte com confiança sobre suas conquistas corajosas' },
    { icon: '🌙', title: 'Música calma', description: 'Você consegue relaxar sozinha ouvindo sua música' },
    { icon: '👔', title: 'Pijama mágico', description: 'Escolha sozinha seu pijama especial para sonhos de heroína' }
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
            alt="Super Maria Allyce" 
            className="w-24 h-24 rounded-full shadow-magic border-4 border-primary"
          />
          <div>
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent print:text-primary">
              Missões da Super Maria Allyce
            </h1>
            <p className="text-lg text-foreground/80 font-medium">
              ⭐ Heroína Corajosa ⭐
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
        <div className="bg-gradient-sunshine p-4 rounded-2xl shadow-soft max-w-md mx-auto">
          <p className="text-foreground font-bold text-lg">
            🌟 Você é uma Super Heroína! 🌟
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Cada missão completa te deixa mais corajosa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionBoard;