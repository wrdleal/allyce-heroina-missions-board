import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroMaria from "@/assets/hero-maria.png";

const weekDays = [
  'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'
];

const missions = {
  'Segunda': [
    { icon: '✏️', title: 'Desenho mágico', description: 'lápis e papel' },
    { icon: '🧠', title: 'Jogo da memória', description: 'cartas e cérebro sorrindo' },
    { icon: '🧸', title: 'Guardar brinquedos', description: 'caixa e ursinho' },
    { icon: '⭐', title: 'Ir ao banheiro', description: 'vaso e estrelinha' },
    { icon: '📚', title: 'História de fada', description: 'livro e varinha mágica' }
  ],
  'Terça': [
    { icon: '🐠', title: 'Vídeo do peixinho', description: 'peixinho com bolhas' },
    { icon: '💖', title: 'Ajudar a vovó', description: 'coração e vovó sorrindo' },
    { icon: '🛏️', title: 'Arrumar o quarto', description: 'cama e travesseiro' },
    { icon: '🪆', title: 'Explorar com boneca', description: 'boneca e estrelinha' },
    { icon: '💃', title: 'Dança livre', description: 'notas musicais' }
  ],
  'Quarta': [
    { icon: '☁️', title: 'Soprinho da calma', description: 'nuvem e sopro' },
    { icon: '🎨', title: 'Massinha mágica', description: 'mãos e massinha colorida' },
    { icon: '🪆', title: 'Banheiro com boneca', description: 'vaso e boneca' },
    { icon: '💡', title: 'Luz mágica', description: 'abajur com brilho' },
    { icon: '📖', title: 'Guardar livros', description: 'prateleira e livrinhos' }
  ],
  'Quinta': [
    { icon: '🏃', title: 'Circuito obstáculos', description: 'cones e criança pulando' },
    { icon: '🔍', title: 'Missão cômodos', description: 'lupa e pegadas' },
    { icon: '🛡️', title: 'Pintar escudo', description: 'escudo e pincel' },
    { icon: '🔦', title: 'História lanterna', description: 'lanterna e estrelas' },
    { icon: '🧹', title: 'Ajudar a limpar', description: 'vassoura mágica' }
  ],
  'Sexta': [
    { icon: '😊', title: 'Colagem medômetro', description: 'cola e carinhas' },
    { icon: '👸', title: 'Princesa valente', description: 'princesa e dragão' },
    { icon: '💝', title: 'Pote da coragem', description: 'pote com corações' },
    { icon: '📺', title: 'Filminho cobertor', description: 'tela e cobertor' },
    { icon: '👕', title: 'Ajudar com roupas', description: 'camiseta e cesto' }
  ],
  'Sábado': [
    { icon: '🦸‍♀️', title: 'Aventura heroína', description: 'capa e estrela' },
    { icon: '🌳', title: 'Caminhada vovó', description: 'árvore e pegadas' },
    { icon: '🚪', title: 'Explorar cantinho', description: 'porta e lanterna' },
    { icon: '🏠', title: 'Pintura lugar seguro', description: 'tinta e casinha' },
    { icon: '🤲', title: 'Guardar toalhinhas', description: 'toalha e mãos' }
  ],
  'Domingo': [
    { icon: '😄', title: 'Roda da gratidão', description: 'carinhas felizes' },
    { icon: '🛁', title: 'Banho encantado', description: 'banheira e bolhas' },
    { icon: '💬', title: 'Conversa família', description: 'balões de fala' },
    { icon: '🌙', title: 'Música calma', description: 'notas musicais e lua' },
    { icon: '👔', title: 'Pijama mágico', description: 'pijama com estrelinhas' }
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