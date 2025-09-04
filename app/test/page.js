'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-bg p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-ink mb-8">Teste de Cores BlueSpring</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-primary p-6 rounded-lg text-white shadow-lg">
            <h3 className="font-bold text-lg mb-2">Primary</h3>
            <p className="text-sm opacity-90">#59C36A</p>
            <p className="mt-2">Cor principal da marca</p>
          </div>
          
          <div className="bg-primary-dark p-6 rounded-lg text-white shadow-lg">
            <h3 className="font-bold text-lg mb-2">Primary Dark</h3>
            <p className="text-sm opacity-90">#2E7D32</p>
            <p className="mt-2">Versão mais escura</p>
          </div>
          
          <div className="bg-accent p-6 rounded-lg text-ink shadow-lg">
            <h3 className="font-bold text-lg mb-2">Accent</h3>
            <p className="text-sm opacity-70">#D9F99D</p>
            <p className="mt-2">Cor de destaque</p>
          </div>
          
          <div className="bg-ink p-6 rounded-lg text-white shadow-lg">
            <h3 className="font-bold text-lg mb-2">Ink</h3>
            <p className="text-sm opacity-90">#0F172A</p>
            <p className="mt-2">Texto principal</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg text-muted shadow-lg">
            <h3 className="font-bold text-lg mb-2">Muted</h3>
            <p className="text-sm opacity-70">#6B7280</p>
            <p className="mt-2">Texto secundário</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg text-ink border shadow-lg">
            <h3 className="font-bold text-lg mb-2">Background</h3>
            <p className="text-sm text-muted">#F7FAF7</p>
            <p className="mt-2">Fundo suave</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-ink mb-4">Botões de Teste</h2>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Botão Primary
            </button>
            
            <button className="border-2 border-primary text-primary hover:bg-accent px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Botão Secondary
            </button>
            
            <button className="bg-ink hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Botão Dark
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-ink mb-4">Texto de Exemplo</h2>
          <p className="text-ink mb-4">
            Este é um texto principal usando a cor <span className="text-primary font-semibold">ink (#0F172A)</span>.
          </p>
          <p className="text-muted mb-4">
            Este é um texto secundário usando a cor <span className="text-primary font-semibold">muted (#6B7280)</span>.
          </p>
          <p className="text-primary font-semibold">
            Este texto usa a cor primary (#59C36A).
          </p>
        </div>
      </div>
    </div>
  );
}
