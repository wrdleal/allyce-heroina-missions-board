import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroArthur from "@/assets/hero-arthur.png";

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
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinho toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinho' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '👂', title: 'Escutar a mamãe', description: 'prestar atenção quando a mamãe falar' },
    { icon: '🤐', title: 'Não responder mal', description: 'falar sempre com educação e carinho' },
    { icon: '🫁', title: 'Respiração da calma', description: 'respirar fundo 3 vezes quando irritado' },
    { icon: '🎯', title: 'Obedecer na primeira', description: 'fazer o que a mamãe pede logo na primeira vez' },
    { icon: '🏆', title: 'Pote de estrelas', description: 'ganhar uma estrela por cada boa ação' }
  ],
  '🏠 Terça - Ajudante da Mamãe': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinho toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinho' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '🧽', title: 'Limpar a mesa', description: 'ajudar a limpar a mesa após as refeições' },
    { icon: '🧺', title: 'Roupas no cesto', description: 'colocar roupas sujas no lugar certo' },
    { icon: '🍽️', title: 'Pôr a mesa', description: 'ajudar a colocar pratos e talheres' },
    { icon: '💙', title: 'Pedir desculpas', description: 'falar "desculpa mamãe" quando errar' },
    { icon: '🌱', title: 'Cuidar das plantas', description: 'regar as plantinhas com a mamãe' }
  ],
  '📚 Quarta - Estudioso Responsável': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinho toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinho' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '📖', title: 'Lição de casa', description: 'fazer o dever na mesa de estudos' },
    { icon: '✏️', title: 'Caprichar na letra', description: 'escrever bonito e com atenção' },
    { icon: '📚', title: 'Leitura diária', description: 'ler um livro por 20 minutos' },
    { icon: '🧠', title: 'Estudar tabuada', description: 'praticar matemática 15 minutos' },
    { icon: '👨‍🏫', title: 'Obedecer professor', description: 'ser educado e atencioso na escola' }
  ],
  '⭐ Quinta - Organizador Campeão': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinho toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinho' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '👕', title: 'Dobrar roupas', description: 'ajudar a dobrar e guardar roupas' },
    { icon: '📱', title: 'Horário do tablet', description: 'usar eletrônicos só no horário permitido' },
    { icon: '🍎', title: 'Preparar lanche', description: 'ajudar a fazer o lanche escolar' },
    { icon: '💪', title: 'Ser responsável', description: 'cuidar das próprias coisas' }
  ],
  '🎯 Sexta - Focado e Disciplinado': [
    { icon: '🛏️', title: 'Arrumar a cama', description: 'fazer a cama sozinho toda manhã' },
    { icon: '🎒', title: 'Arrumar a mochila', description: 'organizar material escolar sozinho' },
    { icon: '🧹', title: 'Arrumar o quarto', description: 'deixar o quarto organizado' },
    { icon: '👞', title: 'Organizar sapatos', description: 'guardar sapatos no lugar certo' },
    { icon: '🧸', title: 'Organizar brinquedos', description: 'guardar todos os brinquedos no lugar' },
    { icon: '⏰', title: 'Cumprir horários', description: 'acordar e dormir no horário certo' },
    { icon: '🙋‍♂️', title: 'Ajudar sem pedir', description: 'oferecer ajuda para a mamãe' },
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

// Cada dia em sua própria página para impressão
const printPages = weekDays.slice(0, 5).map(day => [day]); // Segunda a Sexta, cada dia em sua própria página

const PrintableMissionBoard = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-container">
      {/* Botão de impressão - apenas na tela */}
      <div className="no-print mb-6 text-center">
        <Button onClick={handlePrint} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
          🖨️ Imprimir Quadro do Arthur
        </Button>
      </div>

      {/* Páginas para impressão */}
      {printPages.map((pageDays, pageIndex) => (
        <div key={pageIndex} className="print-page">
          {/* Header compacto */}
          <div className="page-header">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src={heroArthur} 
                alt="Super Arthur" 
                className="w-12 h-12 rounded-full shadow-magic border-2 border-primary"
              />
              <div className="text-center">
                <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Missões do Super Arthur
                </h1>
                <p className="text-xs text-foreground/80 font-medium">
                  🏆 Herói da Obediência 🏆
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
                🏆 Você é um Super Herói! 🏆
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Cada missão completa te torna mais obediente e responsável!
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