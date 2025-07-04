import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroMaria from "@/assets/hero-maria.png";

const weekDays = [
  '🌞 Segunda - Super Sensibilidade', 
  '🌈 Terça - Peixinho da Calma', 
  '💎 Quarta - Mente Brilhante', 
  '🛡 Quinta - Escudo Mágico', 
  '✨ Sexta - Pote da Coragem', 
  '🌳 Sábado - Aventura ao Ar Livre', 
  '💗 Domingo - Família Protetora'
];

const missions = {
  '🌞 Segunda - Super Sensibilidade': [
    { icon: '✏️', title: 'Desenho mágico', description: '"Como me sinto hoje?"' },
    { icon: '🧠', title: 'Jogo da memória da heroína', description: 'para treinar o foco' },
    { icon: '🧽', title: 'Missão do dia', description: 'ajudar a mamãe a guardar os brinquedos' },
    { icon: '🚽', title: 'Treino corajoso', description: 'ir ao banheiro com a varinha da coragem' },
    { icon: '🧚', title: 'Histórias de fada valente', description: 'enfrentando monstros do quarto' }
  ],
  '🌈 Terça - Peixinho da Calma': [
    { icon: '🐠', title: 'Assistir ao vídeo', description: '"Acalme o seu filho" (Peixinho respirando)' },
    { icon: '💖', title: 'Ajudar a vovó', description: 'a colocar a mesa ou dobrar paninhos' },
    { icon: '🛏', title: 'Arrumar o quartinho', description: 'com a capa de super-heroína' },
    { icon: '🧸', title: 'Explorar o quarto', description: 'com a boneca guardiã da coragem' },
    { icon: '🎶', title: 'Dança livre das emoções', description: 'sorriso, força, calma e amor' }
  ],
  '💎 Quarta - Mente Brilhante': [
    { icon: '🌬', title: 'Jogo da calma', description: 'soprar o vento para longe com a boca mágica' },
    { icon: '✋', title: 'Hora da massinha mágica', description: 'criar monstrinhos do medo' },
    { icon: '🚽', title: 'Banheiro com apoio', description: 'da bonequinha mágica + elogios' },
    { icon: '💡', title: 'Luz mágica da segurança', description: 'para dormir sem sustos' },
    { icon: '🧽', title: 'Missão da tarde', description: 'ajudar a guardar os livros ou sapatos' }
  ],
  '🛡 Quinta - Escudo Mágico': [
    { icon: '🤸', title: 'Circuito de obstáculos', description: 'da coragem (pular, rastejar, equilibrar)' },
    { icon: '🕵️', title: 'Missão dos cômodos', description: 'visitar lugares secretos da casa' },
    { icon: '🎨', title: 'Pintar e decorar', description: 'o escudo mágico contra os medos' },
    { icon: '📖', title: 'Histórias calmantes', description: 'com lanterna mágica' },
    { icon: '🧹', title: 'Missão de limpeza', description: 'com a mamãe: passar o pano mágico' }
  ],
  '✨ Sexta - Pote da Coragem': [
    { icon: '✂️', title: 'Atividade com colagem', description: 'criar o "medômetro" (nível de medo)' },
    { icon: '🐉', title: 'História da princesa valente', description: 'que enfrentou um dragão de pelúcia' },
    { icon: '🎁', title: 'Adicionar um coração', description: 'no Pote da Coragem' },
    { icon: '🎬', title: 'Sessão de cinema', description: 'com cobertor mágico e pipoca' },
    { icon: '🌟', title: 'Missão da casa', description: 'ajudar a escolher as roupas ou calçados' }
  ],
  '🌳 Sábado - Aventura ao Ar Livre': [
    { icon: '🦸', title: 'Brincar de "Super Maria"', description: 'no mundo dos desafios (com fantasia)' },
    { icon: '🌿', title: 'Caminhar com a vovó', description: 'observando plantas, bichos e cheiros' },
    { icon: '🧭', title: 'Explorar um novo cantinho', description: 'da casa com a "luz de fada"' },
    { icon: '🎨', title: 'Pintura do lugar mais seguro', description: 'do mundo (feito por ela)' },
    { icon: '🧦', title: 'Missão', description: 'ajudar a guardar roupas ou toalhinhas' }
  ],
  '💗 Domingo - Família Protetora': [
    { icon: '🌞', title: 'Roda da gratidão', description: '"o que me fez feliz essa semana?"' },
    { icon: '🛁', title: 'Banho das bolhas encantadas', description: 'com brinquedos favoritos' },
    { icon: '🗣', title: 'Roda de conversa', description: 'com mamãe ou vovó sobre os sentimentos' },
    { icon: '🎼', title: 'Música do peixinho', description: 'ou canção de ninar suave' },
    { icon: '🧼', title: 'Ajudar a organizar', description: 'a cama e escolher o pijama mágico' }
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