import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

// Cada dia em sua própria página para impressão
const printPages = weekDays.map(day => [day]); // Todos os dias, cada dia em sua própria página

const PrintableMissionBoard = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-container">
      {/* Botão de impressão - apenas na tela */}
      <div className="no-print mb-6 text-center">
        <Button onClick={handlePrint} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
          🖨️ Imprimir Quadro da Antonela
        </Button>
      </div>

      {/* Páginas para impressão */}
      {printPages.map((pageDays, pageIndex) => (
        <div key={pageIndex} className="print-page">
          {/* Header compacto */}
          <div className="page-header">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src={heroAntonela} 
                alt="Super Antonela" 
                className="w-12 h-12 rounded-full shadow-magic border-2 border-primary"
              />
              <div className="text-center">
                <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Missões da Super Antonela
                </h1>
                <p className="text-xs text-foreground/80 font-medium">
                  🏆 Heroína da Disciplina 🏆
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo do dia */}
          {pageDays.map((day) => (
            <div key={day} className="flex-1">
              <div className="text-center mb-4">
                <Badge variant="secondary" className="text-lg font-bold px-6 py-2 bg-gradient-hero text-white">
                  {day}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {missions[day as keyof typeof missions].map((mission, missionIndex) => (
                  <div 
                    key={missionIndex}
                    className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-accent/30"
                  >
                    <div className="text-lg flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {mission.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs text-foreground leading-tight">
                        {mission.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer compacto */}
          <div className="page-footer">
            <div className="bg-gradient-sunshine p-2 rounded-lg shadow-soft text-center">
              <p className="text-foreground font-bold text-sm">
                🏆 Você é uma Super Heroína! 🏆
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Cada missão completa te torna mais focada e responsável!
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
            height: 210mm;
            width: 297mm;
            padding: 15mm;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
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
            padding-top: 10px;
          }
          
          @page {
            size: A4 landscape;
            margin: 0;
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