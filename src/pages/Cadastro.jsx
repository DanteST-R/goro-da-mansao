import React from 'react';

const Cadastro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 -mt-20">
      <div className="aura-bg opacity-30"></div>
      
      <div className="glass-card w-full max-w-2xl p-16 md:p-24 space-y-12 relative overflow-hidden text-center">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--primary-glow)] opacity-5 blur-[120px]"></div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">CADASTRO</h1>
          <p className="text-sm md:text-base opacity-40 uppercase tracking-[0.3em] font-light">Faça parte da elite</p>
        </div>

        <form className="space-y-10 max-w-md mx-auto">
          <div className="space-y-4 text-left">
            <label className="text-[10px] tracking-[0.3em] font-bold opacity-30 uppercase ml-1">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Como quer ser chamado?" 
              className="w-full bg-white/5 border-b border-white/10 p-5 outline-none focus:border-[var(--primary-glow)] focus:bg-white/[0.08] transition-all text-lg placeholder:opacity-20"
            />
          </div>

          <div className="space-y-4 text-left">
            <label className="text-[10px] tracking-[0.3em] font-bold opacity-30 uppercase ml-1">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="w-full bg-white/5 border-b border-white/10 p-5 outline-none focus:border-[var(--primary-glow)] focus:bg-white/[0.08] transition-all text-lg placeholder:opacity-20"
            />
          </div>

          <div className="space-y-4 text-left">
            <label className="text-[10px] tracking-[0.3em] font-bold opacity-30 uppercase ml-1">Criar Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/5 border-b border-white/10 p-5 outline-none focus:border-[var(--primary-glow)] focus:bg-white/[0.08] transition-all text-lg placeholder:opacity-20"
            />
          </div>

          <div className="pt-6">
            <button className="w-full py-6 bg-[var(--primary-glow)] text-black font-bold text-xl hover:scale-[1.02] transition-all duration-500 neon-glow-primary uppercase tracking-widest">
              CONCLUIR CADASTRO
            </button>
          </div>
        </form>

        <div className="pt-8 text-sm opacity-30">
          Já tem conta? <a href="/login" className="text-white opacity-100 hover:underline font-bold">Fazer Login</a>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
