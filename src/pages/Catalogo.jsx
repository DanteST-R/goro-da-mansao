import React from 'react';

const Catalogo = () => {
  const products = [
    { id: 1, name: 'Goró Original', price: 'R$ 12,90', tag: 'STREET LUXURY', color: 'var(--primary-glow)', img: '/assets/goro_original.png', desc: 'A fórmula clássica com eletrólitos e nootrópicos.' },
    { id: 2, name: 'Summer Pink', price: 'R$ 14,90', tag: 'EDITION', color: 'var(--secondary-glow)', img: '/assets/goro_pink.png', desc: 'Explosão refrescante com notas tropicais e energia limpa.' },
    { id: 3, name: 'Regata Mansão', price: 'R$ 89,00', tag: 'GEAR', color: 'var(--primary-glow)', img: '/assets/regata.png', desc: 'Tecido premium com corte oversized para performance.' },
    { id: 4, name: 'Shaker Carbon', price: 'R$ 119,00', tag: 'ACCESSORY', color: '#fff', img: '/assets/shaker.png', desc: 'Isolamento térmico e acabamento em fibra de carbono.' },
  ];

  return (
    <div className="px-4 py-32 max-w-7xl mx-auto space-y-32 mb-40">
      <div className="space-y-6 text-center md:text-left">
        <span className="text-[var(--primary-glow)] font-bold tracking-[0.5em] text-xs uppercase">The Boutique</span>
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none">EQUIPAMENTO <br /><span className="text-gradient-primary">DE ELITE</span></h1>
        <p className="text-xl md:text-2xl opacity-40 font-light max-w-2xl leading-relaxed">
          Peças e substâncias curadas para quem não aceita o medíocre. <br />
          Design industrial meets high-performance biology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {products.map(product => (
          <div key={product.id} className="glass-card group p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 aspect-square bg-black/40 rounded-3xl relative flex items-center justify-center overflow-hidden p-12">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-[100px]" style={{ background: product.color }}></div>
              <img src={product.img} alt={product.name} className="w-full h-full object-contain relative z-10 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] tracking-[0.3em] font-bold opacity-30 uppercase">{product.tag}</span>
                  <span className="text-2xl font-bold text-[var(--primary-glow)]">{product.price}</span>
                </div>
                <h3 className="text-4xl font-bold tracking-tight">{product.name}</h3>
                <p className="text-lg opacity-40 leading-relaxed font-light">{product.desc}</p>
              </div>
              <button className="w-full py-5 bg-white text-black font-bold text-sm tracking-[0.2em] hover:bg-[var(--primary-glow)] transition-all duration-500 uppercase">
                ADICIONAR AO KIT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
