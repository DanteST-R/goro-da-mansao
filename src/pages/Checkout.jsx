import React from 'react';

const Checkout = () => {
  return (
    <div className="px-4 py-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2 space-y-12">
        <h1 className="text-5xl">FINALIZAR PEDIDO</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl text-[var(--primary-glow)]">INFORMAÇÕES DE ENVIO</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="NOME" className="bg-neutral-900 border-b border-[var(--outline)] p-4 outline-none focus:border-[var(--primary-glow)] transition-colors col-span-2" />
            <input type="text" placeholder="CEP" className="bg-neutral-900 border-b border-[var(--outline)] p-4 outline-none focus:border-[var(--primary-glow)] transition-colors" />
            <input type="text" placeholder="CIDADE" className="bg-neutral-900 border-b border-[var(--outline)] p-4 outline-none focus:border-[var(--primary-glow)] transition-colors" />
            <input type="text" placeholder="ENDEREÇO" className="bg-neutral-900 border-b border-[var(--outline)] p-4 outline-none focus:border-[var(--primary-glow)] transition-colors col-span-2" />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-[var(--primary-glow)]">PAGAMENTO</h2>
          <div className="flex gap-4">
            <button className="flex-grow p-4 border border-[var(--primary-glow)] text-[var(--primary-glow)] bg-[var(--primary-glow)]/5">PIX (10% OFF)</button>
            <button className="flex-grow p-4 border border-[var(--glass-border)] opacity-50">CARTÃO</button>
          </div>
        </section>
      </div>

      <div className="md:col-span-1">
        <div className="glass-card p-8 sticky top-32 space-y-8">
          <h2 className="text-2xl">RESUMO</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="opacity-60">Subtotal</span>
              <span>R$ 149,90</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">Frete</span>
              <span className="text-green-500">GRÁTIS</span>
            </div>
            <div className="border-t border-[var(--glass-border)] pt-4 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-[var(--primary-glow)]">R$ 149,90</span>
            </div>
          </div>
          <button className="w-full py-6 bg-[var(--primary-glow)] text-black font-bold text-lg hover:scale-105 transition-transform neon-glow-primary">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
