import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroMaria from "@/assets/hero-maria.png";

const weekDays = [
  'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'
];

const missions = {
  'Segunda': [
    { icon: '✏️', title: 'Desenho mágico', description: 'Pegue lápis e papel e desenhe algo que te deixa feliz' },
    { icon: '🧠', title: 'Jogo da memória', description: 'Vire as cartas e encontre os pares iguais' },
    { icon: '🧸', title: 'Guardar brinquedos', description: 'Coloque cada brinquedo em seu lugar na caixa' },
    { icon: '⭐', title: 'Ir ao banheiro', description: 'Vá ao banheiro quando sentir vontade, peça ajuda se precisar' },
    { icon: '📚', title: 'História de fada', description: 'Escolha um livro e imagine ser a fada corajosa da história' }
  ],
  'Terça': [
    { icon: '🐠', title: 'Vídeo do peixinho', description: 'Assista o vídeo e respire como o peixinho para ficar calma' },
    { icon: '💖', title: 'Ajudar a vovó', description: 'Faça algo carinhoso para ajudar a vovó no que ela precisar' },
    { icon: '🛏️', title: 'Arrumar o quarto', description: 'Organize a cama e coloque o travesseiro no lugar' },
    { icon: '🪆', title: 'Explorar com boneca', description: 'Passeie pelo quarto com sua boneca e conte o que vê' },
    { icon: '💃', title: 'Dança livre', description: 'Coloque uma música e dance do jeito que quiser' }
  ],
  'Quarta': [
    { icon: '☁️', title: 'Soprinho da calma', description: 'Respire fundo e sopre devagarzinho como uma nuvem' },
    { icon: '🎨', title: 'Massinha mágica', description: 'Use as mãos para modelar formas coloridas na massinha' },
    { icon: '🪆', title: 'Banheiro com boneca', description: 'Leve sua bonequinha e vão juntas ao banheiro' },
    { icon: '💡', title: 'Luz mágica', description: 'Acenda uma luz especial que te ajuda a relaxar para dormir' },
    { icon: '📖', title: 'Guardar livros', description: 'Organize os livrinhos na prateleira com cuidado' }
  ],
  'Quinta': [
    { icon: '🏃', title: 'Circuito obstáculos', description: 'Pule, contorne e passe pelos obstáculos como uma heroína' },
    { icon: '🔍', title: 'Missão cômodos', description: 'Explore os cômodos da casa como uma detetive corajosa' },
    { icon: '🛡️', title: 'Pintar escudo', description: 'Decore seu escudo mágico com cores e desenhos especiais' },
    { icon: '🔦', title: 'História lanterna', description: 'Use a lanterna para contar histórias no escuro com estrelas' },
    { icon: '🧹', title: 'Ajudar a limpar', description: 'Use a vassoura mágica para ajudar a deixar tudo limpinho' }
  ],
  'Sexta': [
    { icon: '😊', title: 'Colagem medômetro', description: 'Cole carinhas que mostram como você está se sentindo' },
    { icon: '👸', title: 'Princesa valente', description: 'Conte a história da princesa que foi corajosa contra o dragão' },
    { icon: '💝', title: 'Pote da coragem', description: 'Coloque coisas que te dão coragem dentro do pote especial' },
    { icon: '📺', title: 'Filminho cobertor', description: 'Assista um filme gostoso embaixo do cobertor quentinho' },
    { icon: '👕', title: 'Ajudar com roupas', description: 'Separe as roupas e coloque no cesto organizadamente' }
  ],
  'Sábado': [
    { icon: '🦸‍♀️', title: 'Aventura heroína', description: 'Vista sua capa e seja a heroína em uma aventura imaginária' },
    { icon: '🌳', title: 'Caminhada vovó', description: 'Caminhe ao ar livre com a vovó observando a natureza' },
    { icon: '🚪', title: 'Explorar cantinho', description: 'Descubra um cantinho novo da casa com sua lanterna' },
    { icon: '🏠', title: 'Pintura lugar seguro', description: 'Desenhe e pinte uma casinha que é seu lugar seguro' },
    { icon: '🤲', title: 'Guardar toalhinhas', description: 'Dobre e organize as toalhinhas com as mãozinhas' }
  ],
  'Domingo': [
    { icon: '😄', title: 'Roda da gratidão', description: 'Conte 3 coisas que te deixaram feliz durante a semana' },
    { icon: '🛁', title: 'Banho encantado', description: 'Tome banho brincando com as bolhas mágicas' },
    { icon: '💬', title: 'Conversa família', description: 'Conte para a família sobre seus momentos especiais' },
    { icon: '🌙', title: 'Música calma', description: 'Escute uma música suave olhando para a lua antes de dormir' },
    { icon: '👔', title: 'Pijama mágico', description: 'Escolha um pijama com estrelinhas para ter sonhos bonitos' }
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