import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 -mt-20"> {/* -mt-20 to compensate for header and feel perfectly centered vertically */}
      <div className="aura-bg opacity-30"></div> {/* Extra aura for this page */}
      
      <div className="glass-card w-full max-w-2xl p-16 md:p-24 space-y-12 relative overflow-hidden text-center">
        {/* Decorative elements for a "relaxing" vibe */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[var(--primary-glow)] opacity-5 blur-[120px]"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[var(--secondary-glow)] opacity-5 blur-[120px]"></div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">LOGIN</h1>
          <p className="text-sm md:text-base opacity-40 uppercase tracking-[0.3em] font-light">Acesso Exclusivo Mansão</p>
        </div>

        <form className="space-y-10 max-w-md mx-auto">
          <div className="space-y-4 text-left">
            <label className="text-[10px] tracking-[0.3em] font-bold opacity-30 uppercase ml-1">E-mail ou Usuário</label>
            <input 
              type="text" 
              placeholder="Ex: mestre@mansao.com" 
              className="w-full bg-white/5 border-b border-white/10 p-5 outline-none focus:border-[var(--primary-glow)] focus:bg-white/[0.08] transition-all text-lg placeholder:opacity-20"
            />
          </div>

          <div className="space-y-4 text-left">
            <label className="text-[10px] tracking-[0.3em] font-bold opacity-30 uppercase ml-1">Senha de Segurança</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/5 border-b border-white/10 p-5 outline-none focus:border-[var(--primary-glow)] focus:bg-white/[0.08] transition-all text-lg placeholder:opacity-20"
            />
          </div>

          <div className="pt-6">
            <button className="w-full py-6 bg-white text-black font-bold text-xl hover:bg-[var(--primary-glow)] hover:scale-[1.02] transition-all duration-500 neon-glow-primary uppercase tracking-widest">
              ENTRAR NO PROGRESSO
            </button>
          </div>
        </form>

        <div className="pt-8 flex flex-col gap-4 text-sm">
          <a href="#" className="opacity-30 hover:opacity-100 transition-opacity">Esqueceu sua senha?</a>
          <div className="opacity-30">
            Novo por aqui? <a href="/cadastro" className="text-[var(--primary-glow)] opacity-100 hover:underline font-bold">Criar Conta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
