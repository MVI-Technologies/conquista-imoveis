import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, ShieldCheck, HelpCircle, MapPin, Calculator, Coins, Home } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import heroImage from "@/assets/hero-barbershop.jpg";
import { toast } from "sonner";

const INCOME_BRACKETS = [
  { id: "faixa-1", name: "Até R$ 2.640", description: "Faixa 1 — Potencial de subsídio máximo da Caixa." },
  { id: "faixa-2", name: "R$ 2.640 a R$ 4.400", description: "Faixa 2 — Ótimo subsídio e taxas de juros reduzidas." },
  { id: "faixa-3", name: "R$ 4.400 a R$ 8.000", description: "Faixa 3 — Juros reduzidos do programa Minha Casa Minha Vida." },
  { id: "faixa-sbpe", name: "Acima de R$ 8.000", description: "Linha SBPE Caixa — Ampla flexibilidade de crédito." },
];

const FGTS_OPTIONS = [
  { id: "fgts-nenhum", name: "Não pretendo usar ou não tenho FGTS" },
  { id: "fgts-baixo", name: "Até R$ 10.000 de saldo" },
  { id: "fgts-medio", name: "De R$ 10.000 a R$ 30.000" },
  { id: "fgts-alto", name: "Mais de R$ 30.000 de saldo" },
];

const NEIGHBORHOODS = [
  { id: "leste", name: "Zona Leste", desc: "Itaquera, Penha, Carrão, etc." },
  { id: "sul", name: "Zona Sul", desc: "Interlagos, Santo Amaro, Ipiranga, etc." },
  { id: "norte", name: "Zona Norte", desc: "Santana, Casa Verde, Tucuruvi, etc." },
  { id: "oeste-centro", name: "Zona Oeste / Centro", desc: "Lapa, Barra Funda, Centro, etc." },
  { id: "grande-sp", name: "Grande SP / ABC", desc: "Guarulhos, Osasco, Santo André, etc." },
];

const BookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedIncome, setSelectedIncome] = useState<string>("");
  const [selectedFgts, setSelectedFgts] = useState<string>("");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>("");
  
  // Date & Time
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultationType, setConsultationType] = useState("virtual"); // virtual or presencial
  const [notes, setNotes] = useState("");

  const incomeData = INCOME_BRACKETS.find(i => i.id === selectedIncome);
  const fgtsData = FGTS_OPTIONS.find(f => f.id === selectedFgts);
  const neighborhoodData = NEIGHBORHOODS.find(n => n.id === selectedNeighborhood);

  // Generate 6 upcoming days starting from tomorrow
  const getUpcomingDays = () => {
    const days = [];
    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    for (let i = 1; i <= 8; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      if (d.getDay() === 0) continue; // Skip sundays
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const date = String(d.getDate()).padStart(2, "0");
      const dateString = `${year}-${month}-${date}`;
      
      days.push({
        dateString,
        dayOfWeek: weekdays[d.getDay()],
        dayOfMonth: d.getDate(),
        month: d.toLocaleDateString("pt-BR", { month: "short" }).toUpperCase(),
      });
    }
    return days.slice(0, 6);
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !selectedDate || !selectedTime) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const newSimulation = {
      id: "SIM-" + Math.floor(100000 + Math.random() * 900000),
      income: selectedIncome,
      fgts: selectedFgts,
      neighborhood: selectedNeighborhood,
      date: selectedDate,
      time: selectedTime,
      consultationType,
      customer: { name, email, phone, notes },
      createdAt: new Date().toISOString(),
    };

    // Save in local storage
    const currentSims = JSON.parse(localStorage.getItem("conquista_simulations") || "[]");
    localStorage.setItem("conquista_simulations", JSON.stringify([...currentSims, newSimulation]));

    toast.success("Dados enviados! Nossa equipe preparará a sua simulação Caixa.");
    setStep(5);
  };

  const formatDateLabel = (isoDate: string) => {
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#fafaf9", color: "#1c1917" }}>
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] pointer-events-none z-0" 
        style={{ backgroundImage: `url(${heroImage})` }} 
      />
      
      {/* Content wrapper to keep text on top of background */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-stone-100 py-4 bg-white shadow-sm">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div 
                className="w-9 h-9 rounded-full flex items-center justify-center border"
                style={{ borderColor: "#0d9488", backgroundColor: "rgba(13, 148, 136, 0.08)" }}
              >
                <Home className="w-4 h-4 text-[#0d9488]" strokeWidth={1.5} />
              </div>
              <span className="font-display font-bold text-lg text-stone-900">Conquista Imóveis</span>
            </Link>
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-500 hover:text-teal-700 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Início
            </Link>
          </div>
        </header>

      {/* Booking Container */}
      <main className="flex-1 container mx-auto px-4 py-10 max-w-4xl flex flex-col">
        {step < 5 && (
          <div className="mb-10 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-teal-800 bg-teal-50 border border-teal-200">
              Simulador Habitacional Caixa
            </span>
            <h1 className="font-display font-bold text-3xl mt-3 mb-6">Simule seu Financiamento</h1>
            
            {/* Steps Progress Tracker */}
            <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1 last:flex-initial">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={{ 
                      backgroundColor: step === s ? "#0d9488" : step > s ? "rgba(13,148,136,0.12)" : "rgba(0,0,0,0.03)",
                      color: step === s ? "#ffffff" : step > s ? "#0d9488" : "#57534e",
                      border: step === s ? "1px solid #0d9488" : step > s ? "1px solid rgba(13,148,136,0.3)" : "1px solid transparent"
                    }}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div className="flex-1 h-0.5 mx-2 bg-opacity-20 transition-all duration-300" style={{ backgroundColor: step > s ? "#0d9488" : "rgba(0,0,0,0.08)" }} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-xs mt-3 font-bold uppercase tracking-wider text-stone-500">
              {step === 1 && "Passo 1: Faixa de Renda"}
              {step === 2 && "Passo 2: FGTS & Região"}
              {step === 3 && "Passo 3: Data da Consulta"}
              {step === 4 && "Passo 4: Seus Contatos"}
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col lg:flex-row gap-8 items-start w-full">
          
          {/* Main Area */}
          <div className="flex-1 w-full bg-white rounded-2xl p-6 lg:p-8 border border-stone-100 shadow-sm">
            
            {/* STEP 1: INCOME */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-base font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-teal-600" />
                  Qual a renda mensal bruta da sua família? (Soma de quem vai comprar)
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {INCOME_BRACKETS.map((bracket) => (
                    <button
                      key={bracket.id}
                      onClick={() => {
                        setSelectedIncome(bracket.id);
                        setStep(2);
                      }}
                      className="text-left p-5 rounded-xl border transition-all duration-300 hover:scale-[1.01] flex flex-col gap-2 group w-full"
                      style={{ 
                        backgroundColor: selectedIncome === bracket.id ? "rgba(13,148,136,0.03)" : "#fafaf9",
                        borderColor: selectedIncome === bracket.id ? "#0d9488" : "#e7e5e4"
                      }}
                    >
                      <h3 className="font-bold text-stone-900 group-hover:text-[#0d9488] transition-colors duration-200">{bracket.name}</h3>
                      <p className="text-xs text-stone-500 leading-relaxed">{bracket.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: FGTS & NEIGHBORHOOD */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600">
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </div>

                <div className="space-y-5">
                  <h2 className="text-sm font-bold text-stone-800 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-teal-600" />
                    Possui saldo de FGTS para usar como entrada?
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {FGTS_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedFgts(opt.id)}
                        className="p-3 text-left rounded-lg border text-xs font-semibold transition-all duration-200 w-full"
                        style={{
                          backgroundColor: selectedFgts === opt.id ? "rgba(13,148,136,0.03)" : "#fafaf9",
                          color: selectedFgts === opt.id ? "#0d9488" : "#1c1917",
                          borderColor: selectedFgts === opt.id ? "#0d9488" : "#e7e5e4"
                        }}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedFgts && (
                  <div className="animate-fade-in pt-6 border-t border-stone-100">
                    <h2 className="text-sm font-bold text-stone-800 flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      Qual região você tem preferência para morar?
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {NEIGHBORHOODS.map((nh) => (
                        <button
                          key={nh.id}
                          type="button"
                          onClick={() => {
                            setSelectedNeighborhood(nh.id);
                            setStep(3);
                          }}
                          className="p-4 text-left rounded-xl border transition-all duration-200 w-full group"
                          style={{
                            backgroundColor: selectedNeighborhood === nh.id ? "rgba(13,148,136,0.03)" : "#fafaf9",
                            borderColor: selectedNeighborhood === nh.id ? "#0d9488" : "#e7e5e4"
                          }}
                        >
                          <span className="block font-bold text-stone-900 group-hover:text-teal-700 text-sm">{nh.name}</span>
                          <span className="block text-[11px] text-stone-500 mt-1">{nh.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <button onClick={() => setStep(2)} className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600">
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </div>

                {/* Day selector */}
                <div>
                  <h3 className="text-sm font-bold text-stone-800 mb-3 flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-600" /> Selecione o dia para a sua consulta simulada:</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {getUpcomingDays().map((day) => (
                      <button
                        key={day.dateString}
                        onClick={() => {
                          setSelectedDate(day.dateString);
                          setSelectedTime("");
                        }}
                        className="py-3 px-2 rounded-lg border flex flex-col items-center gap-1 transition-all duration-200"
                        style={{
                          backgroundColor: selectedDate === day.dateString ? "rgba(13,148,136,0.05)" : "#fafaf9",
                          borderColor: selectedDate === day.dateString ? "#0d9488" : "#e7e5e4"
                        }}
                      >
                        <span className="text-[10px] font-bold text-stone-500 uppercase">{day.dayOfWeek}</span>
                        <span className="font-display font-bold text-lg text-stone-800">{day.dayOfMonth}</span>
                        <span className="text-[9px] font-bold text-teal-700">{day.month}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time selector */}
                {selectedDate && (
                  <div className="animate-fade-in pt-4 border-t border-stone-100">
                    <h3 className="text-sm font-bold text-stone-800 mb-3 flex items-center gap-1.5"><Clock className="w-4 h-4 text-teal-600" /> Selecione o horário disponível:</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                      {["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setSelectedTime(time);
                            setStep(4);
                          }}
                          className="py-2.5 text-xs font-semibold rounded-lg border text-center transition-all duration-200"
                          style={{
                            backgroundColor: selectedTime === time ? "#0d9488" : "transparent",
                            color: selectedTime === time ? "#ffffff" : "#1c1917",
                            borderColor: selectedTime === time ? "#0d9488" : "#e7e5e4"
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: FORM */}
            {step === 4 && (
              <form onSubmit={handleCreateBooking} className="space-y-5 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600">
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-stone-600">Seu Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Pedro de Souza"
                      className="bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-stone-600">WhatsApp para receber a Simulação *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (11) 99999-0888"
                      className="bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-stone-600">Seu E-mail principal *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="pedro@exemplo.com"
                      className="bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="type" className="text-xs font-bold text-stone-600">Como prefere a primeira conversa?</label>
                    <select
                      id="type"
                      value={consultationType}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="virtual">Virtual (Chamada de Vídeo/WhatsApp)</option>
                      <option value="presencial">Presencial no Escritório Comercial</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="notes" className="text-xs font-bold text-stone-600">Tem alguma dúvida ou observação específica? (Opcional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Gostaria de saber se consigo juntar a minha renda com a do meu irmão..."
                    className="bg-stone-50 border border-stone-200 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-all duration-200"
                  >
                    Enviar Dados & Solicitar Simulação
                  </button>
                </div>
              </form>
            )}

            {/* STEP 5: SUCCESS */}
            {step === 5 && (
              <div className="text-center py-6 space-y-6 animate-fade-in">
                <div className="flex justify-center">
                  <CheckCircle2 className="w-16 h-16 text-teal-600 animate-bounce" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-stone-900 mb-2">Simulação Solicitada com Sucesso!</h2>
                  <p className="text-sm text-stone-500 max-w-md mx-auto">
                    Excelente! Nossa equipe de crédito oficial Caixa já recebeu seus dados e entrará em contato com a simulação detalhada.
                  </p>
                </div>

                <div className="p-6 rounded-2xl text-left max-w-sm mx-auto text-xs space-y-3 bg-stone-50 border border-stone-200">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500">Renda Familiar</span>
                    <span className="font-bold text-stone-900">{incomeData?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500">FGTS</span>
                    <span className="font-bold text-stone-900">{fgtsData?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500">Região de Interesse</span>
                    <span className="font-bold text-stone-900">{neighborhoodData?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-500">Tipo de Contato</span>
                    <span className="font-bold text-stone-900 uppercase">{consultationType}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-stone-500">Agendamento Pré-Reservado</span>
                    <span className="font-bold text-teal-700">{formatDateLabel(selectedDate)} às {selectedTime}h</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                  <a
                    href={`https://wa.me/5511999990888?text=Olá! Acabei de enviar os meus dados de simulação no site. Meu nome é ${name}. Aguardo a simulação para renda ${incomeData?.name} na ${neighborhoodData?.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg text-xs font-bold transition-all duration-200 bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
                  >
                    <WhatsAppIcon style={{ width: "14px", height: "14px" }} />
                    Falar Conosco no WhatsApp
                  </a>
                  <button
                    onClick={() => navigate("/")}
                    className="flex-1 py-3 rounded-lg text-xs font-bold border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
                  >
                    Voltar ao Site
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary Info (Only shows when service is selected) */}
          {selectedIncome && step < 5 && (
            <div className="w-full lg:w-80 bg-white rounded-2xl p-6 space-y-5 border border-stone-100 shadow-sm">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider border-b border-stone-100 pb-3 text-teal-700">Resumo da Simulação</h3>
              <div className="space-y-4 text-xs">
                
                {/* Income */}
                <div className="flex gap-2">
                  <Calculator className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <span className="block font-bold text-stone-800">Renda Bruta Declarada</span>
                    <span className="block text-[10px] text-stone-500 mt-0.5">{incomeData?.name}</span>
                  </div>
                </div>

                {/* FGTS & Neighborhood */}
                {selectedFgts && (
                  <div className="flex gap-2 pt-3 border-t border-stone-100">
                    <Coins className="w-4 h-4 text-teal-600 shrink-0" />
                    <div>
                      <span className="block font-bold text-stone-800">Uso do FGTS</span>
                      <span className="block text-[10px] text-stone-500 mt-0.5">{fgtsData?.name}</span>
                    </div>
                  </div>
                )}

                {/* Neighborhood */}
                {selectedNeighborhood && (
                  <div className="flex gap-2 pt-3 border-t border-stone-100">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <div>
                      <span className="block font-bold text-stone-800">Região de Interesse</span>
                      <span className="block text-[10px] text-stone-500 mt-0.5">{neighborhoodData?.name}</span>
                    </div>
                  </div>
                )}

                {/* Consultation Date */}
                {selectedDate && selectedTime && (
                  <div className="flex gap-2 pt-3 border-t border-stone-100">
                    <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
                    <div>
                      <span className="block font-bold text-stone-800">Data & Horário Proposto</span>
                      <span className="block text-[10px] text-teal-700 font-bold mt-0.5">{formatDateLabel(selectedDate)} às {selectedTime}h</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Secure Notice */}
              <div className="flex gap-2 p-3 rounded-lg text-[10.5px] bg-teal-50 text-teal-800 border border-teal-100 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Seus dados são 100% protegidos pela LGPD. Não cobramos taxas adicionais de assessoria habitacional.</span>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Mini Footer */}
      <footer className="py-6 border-t border-stone-200 mt-auto text-center text-xs bg-white text-stone-500">
        <p>© 2026 Conquista Imóveis. Todos os direitos reservados. CRECI: 123456-F.</p>
      </footer>
      </div>
    </div>
  );
};

export default BookingPage;
