import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="aura-bg"></div>
      <header className="sticky top-0 z-50 glass-card mx-4 my-4 px-6 py-4 flex justify-between items-center border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--primary-glow)' }}>
            GORÓ DA MANSÃO
          </span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-[var(--primary-glow)] transition-colors">Home</Link>
          <Link to="/catalogo" className="hover:text-[var(--primary-glow)] transition-colors">Catálogo</Link>
          <Link to="/checkout" className="hover:text-[var(--primary-glow)] transition-colors">Checkout</Link>
          <Link to="/cadastro" className="hover:text-[var(--primary-glow)] transition-colors">Cadastro</Link>
        </nav>
        <div className="flex gap-4">
          <Link to="/login" className="px-4 py-2 text-sm border border-[var(--outline)] hover:border-[var(--primary-glow)] hover:text-[var(--primary-glow)] transition-all">
            Login
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="glass-card m-4 p-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
          <div>
            <h3 className="mb-4 text-[var(--primary-glow)]">GORÓ DA MANSÃO</h3>
            <p className="text-sm opacity-70">A revolução do rolê inteligente. Em pleno 2026, você bebe com inteligência.</p>
          </div>
          <div>
            <h4 className="mb-4">Links</h4>
            <ul className="text-sm space-y-2 opacity-70">
              <li>Privacidade</li>
              <li>Termos</li>
              <li>Trabalhe Conosco</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Social</h4>
            <ul className="text-sm space-y-2 opacity-70">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Atendimento</h4>
            <ul className="text-sm space-y-2 opacity-70">
              <li>SAC</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--glass-border)] pt-8 text-xs opacity-50">
          © 2024 Goró da Mansão. Beba com moderação.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
