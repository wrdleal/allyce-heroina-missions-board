import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroAntonela from "@/assets/hero-antonela.png";

const weekDays = [
  '💜 Segunda - Heroína Focada', 
  '🌸 Terça - Ajudante da Vovó', 
  '📚 Quarta - Estudante Brilhante', 
  '⭐ Quinta - Organizadora Campeã', 
  '🎯 Sexta - Disciplinada e Honesta', 
  '🌻 Sábado - Dia Livre', 
  '💖 Domingo - Dia Livre'
];

const missions = {
  '💜 Segunda - Heroína Focada': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinha toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinha' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '🦷', title: 'Escovar os dentes', description: 'escovar bem os dentes após as refeições' },
    { icon: '🎯', title: 'Foco por 10 min', description: 'fazer uma tarefa só por 10 minutos sem parar' },
    { icon: '⏰', title: 'Timer de atividades', description: 'usar cronômetro para organizar o tempo' },
    { icon: '🫁', title: 'Técnica 4-7-8', description: 'respirar: 4 seg inspira, 7 seg segura, 8 seg solta' },
    { icon: '🏆', title: 'Pote de incentivo', description: 'ganhar uma estrela por cada boa ação' }
  ],
  '🌸 Terça - Ajudante da Vovó': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinha toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinha' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '🦷', title: 'Escovar os dentes', description: 'escovar bem os dentes após as refeições' },
    { icon: '👵', title: 'Ajudar a vovó', description: 'ajudar a vovó com tarefas simples' },
    { icon: '📝', title: 'Dever com vovó', description: 'fazer as tarefas escolares com a vovó' },
    { icon: '📱', title: 'Videochamada mamãe', description: 'contar o dia para mamãe por vídeo' },
    { icon: '💧', title: 'Higiene pessoal', description: 'lavar as mãos e rosto quando necessário' }
  ],
  '📚 Quarta - Estudante Brilhante': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinha toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinha' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '🦷', title: 'Escovar os dentes', description: 'escovar bem os dentes após as refeições' },
    { icon: '📖', title: 'Leitura concentrada', description: 'ler 15 min sem distrações' },
    { icon: '✏️', title: 'Quebrar tarefas', description: 'dividir deveres grandes em partes pequenas' },
    { icon: '🧘‍♀️', title: 'Mindfulness 5 min', description: 'exercício de atenção plena' },
    { icon: '📚', title: 'Foto do dever', description: 'mandar foto do dever pronto para mamãe' }
  ],
  '⭐ Quinta - Organizadora Campeã': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinha toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinha' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '🦷', title: 'Escovar os dentes', description: 'escovar bem os dentes após as refeições' },
    { icon: '🧼', title: 'Higiene completa', description: 'tomar banho e se cuidar bem' },
    { icon: '📋', title: 'Lista de tarefas', description: 'fazer checklist das atividades do dia' },
    { icon: '🎨', title: 'Atividade criativa', description: '20 min de desenho ou artesanato' },
    { icon: '💌', title: 'Carta para mamãe', description: 'escrever uma cartinha ou áudio para mamãe' }
  ],
  '🎯 Sexta - Disciplinada e Honesta': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinha toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinha' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '🦷', title: 'Escovar os dentes', description: 'escovar bem os dentes após as refeições' },
    { icon: '🌟', title: 'Praticar honestidade', description: 'contar a verdade mesmo quando é difícil' },
    { icon: '🤝', title: 'Aceitar "não"', description: 'não fazer birra quando ouvir "não"' },
    { icon: '🗣️', title: 'Pedir desculpas', description: 'reconhecer erros e pedir desculpas' },
    { icon: '🎉', title: 'Celebrar conquistas', description: 'contar para mamãe por vídeo as vitórias da semana' }
  ],
  '🌻 Sábado - Dia Livre': [
    { icon: '🌈', title: 'Tempo livre', description: 'brincar do que quiser!' },
    { icon: '🛋️', title: 'Descansar', description: 'relaxar e não fazer nada' },
    { icon: '🎮', title: 'Diversão', description: 'escolher sua atividade favorita' },
    { icon: '👨‍👩‍👧', title: 'Família', description: 'curtir tempo especial com a família' }
  ],
  '💖 Domingo - Dia Livre': [
    { icon: '😴', title: 'Dormir mais', description: 'acordar na hora que quiser' },
    { icon: '🎪', title: 'Brincadeira livre', description: 'inventar suas próprias brincadeiras' },
    { icon: '🤗', title: 'Tempo em família', description: 'curtir momentos especiais juntos' },
    { icon: '🍰', title: 'Algo gostoso', description: 'comer algo especial no domingo' }
  ]
};

const MissionBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-sky p-4 print:p-2">
      {/* Header with Hero */}
      <div className="text-center mb-8 print:mb-4">
        <div className="flex items-center justify-center gap-6 mb-4">
            <img 
              src={heroAntonela} 
              alt="Super Antonela" 
              className="w-24 h-24 rounded-full shadow-magic border-4 border-primary"
            />
            <div>
              <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent print:text-primary">
                Missões da Super Antonela
              </h1>
              <p className="text-lg text-foreground/80 font-medium">
                🏆 Heroína da Disciplina 🏆
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
            🏆 Você é uma Super Heroína! 🏆
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Cada missão completa te torna mais focada e responsável!
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