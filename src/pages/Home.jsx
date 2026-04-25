import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col space-y-40 mb-40"> {/* Espaçamento massivo entre seções para reduzir estresse */}
      
      {/* SECTION 1: Hero - Full Height & Impact */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 fade-up">
        <div className="inline-block px-5 py-2 border border-[var(--primary-glow)]/30 text-[var(--primary-glow)] text-[10px] font-bold tracking-[0.5em] rounded-full mb-12 backdrop-blur-sm">
          ESTABLISHED 2026
        </div>
        <h1 className="text-8xl md:text-[12rem] tracking-tighter leading-[0.8] font-bold mb-12 mix-blend-difference">
          VIVA O <br />
          <span className="text-gradient-primary">PROGRESSO</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-50 font-light tracking-widest leading-relaxed mb-16">
          A inteligência líquida para quem domina a noite sem perder o amanhã.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
          <button className="px-14 py-6 bg-white text-black font-bold text-xl hover:bg-[var(--primary-glow)] hover:scale-105 transition-all duration-500 neon-glow-primary">
            QUERO MEU GORÓ
          </button>
          <button className="px-14 py-6 border border-white/10 text-white font-bold text-xl hover:bg-white hover:text-black transition-all duration-500">
            TOUR PELA MANSÃO
          </button>
        </div>
      </section>

      {/* SECTION 2: The Core Experience */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary-glow)] opacity-5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[var(--primary-glow)]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img 
              src="/assets/goro_original.png" 
              alt="Goró Original" 
              className="w-full max-w-lg mx-auto relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-1000 group-hover:scale-105 group-hover:-rotate-2"
            />
          </div>
          <div className="space-y-12 relative z-10">
            <div className="space-y-4">
              <span className="text-[var(--primary-glow)] font-bold tracking-[0.3em] text-xs uppercase">Original Formula</span>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight">O PODER DA <br /> CLAREZA.</h2>
            </div>
            <p className="text-2xl opacity-40 font-light leading-relaxed">
              Não é apenas um drink. É uma ferramenta de otimização humana. 
              Zero açúcar. Nootrópicos premium. Eletrólitos essenciais.
            </p>
            <div className="flex gap-12 pt-4">
              <div>
                <h4 className="text-4xl font-bold text-[var(--primary-glow)]">0%</h4>
                <p className="text-xs opacity-30 uppercase tracking-widest mt-2">Açúcar & Crash</p>
              </div>
              <div className="w-px h-16 bg-white/10"></div>
              <div>
                <h4 className="text-4xl font-bold text-white">100%</h4>
                <p className="text-xs opacity-30 uppercase tracking-widest mt-2">Foco & Shape</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Visual Calm - Contrast */}
      <section className="py-40 px-4 bg-white/[0.02] backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center space-y-24">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold">A CIÊNCIA DO ROLÊ</h2>
            <p className="text-lg opacity-30 max-w-2xl mx-auto uppercase tracking-[0.4em]">Por que somos diferentes?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-left space-y-8 p-12 glass-card bg-transparent hover:bg-white/[0.02]">
              <div className="w-16 h-1 w-20 bg-red-500/50"></div>
              <h3 className="text-3xl font-bold text-red-500/80">O PASSADO</h3>
              <p className="text-lg opacity-40 leading-relaxed">
                Energéticos genéricos carregados de taurina sintética e açúcar, 
                causando arritmia e destruindo seu sono e sua queima de gordura.
              </p>
            </div>
            <div className="text-left space-y-8 p-12 glass-card bg-white/[0.03] border-[var(--primary-glow)]/20">
              <div className="w-16 h-1 w-20 bg-[var(--primary-glow)]"></div>
              <h3 className="text-3xl font-bold text-[var(--primary-glow)]">O FUTURO</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                Bio-hackers do entretenimento. Utilizamos L-Theanina e Cafeína anidra 
                em proporções perfeitas para energia limpa e foco zen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Boutique Gallery */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-6xl font-bold tracking-tighter uppercase italic">The Drop <span className="opacity-20">.01</span></h2>
          <p className="text-sm opacity-30 tracking-[0.2em] font-bold uppercase">Edição de Lançamento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: 'REGATA MANSÃO', price: 'R$ 89', tag: 'LIMITED', img: '/assets/regata.png' },
            { name: 'SUMMER PINK', price: 'R$ 14', tag: 'HOT', img: '/assets/goro_pink.png' },
            { name: 'SHAKER CARBON', price: 'R$ 119', tag: 'GEAR', img: '/assets/shaker.png' }
          ].map((prod, i) => (
            <div key={i} className="group flex flex-col space-y-8">
              <div className="aspect-[4/5] bg-neutral-900/50 rounded-3xl overflow-hidden relative border border-white/5 group-hover:border-[var(--primary-glow)]/30 transition-all duration-700">
                <img src={prod.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={prod.name} />
                <div className="absolute top-8 left-8 px-4 py-1.5 bg-black/60 backdrop-blur-md text-[10px] font-bold tracking-widest border border-white/10 rounded-full">
                  {prod.tag}
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight">{prod.name}</h3>
                  <p className="text-xs opacity-20 uppercase tracking-widest">Disponível agora</p>
                </div>
                <button className="text-xl font-bold hover:text-[var(--primary-glow)] transition-colors">
                  {prod.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
