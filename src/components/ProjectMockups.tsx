import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Star, 
  Plus, 
  Minus, 
  Check, 
  Activity, 
  Layers, 
  ExternalLink, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Palette,
  Headphones,
  Watch,
  GraduationCap,
  Calendar as CalendarIcon,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Target,
  Zap,
  BarChart2,
  Sparkles
} from 'lucide-react';

/* ==========================================================================
   1. NOVASTORE E-COMMERCE MOCKUP
   ========================================================================== */
export const NovaStoreMockup: React.FC = () => {
  const [cartCount, setCartCount] = useState(2);
  const [activeTab, setActiveTab] = useState('All');
  const [addedId, setAddedId] = useState<number | null>(null);

  const allProducts = [
    {
      id: 1,
      name: "Aura Noise-Canceling Headphones",
      price: "$249.00",
      rating: "4.9",
      reviews: "128",
      category: "Audio",
      badge: "Best Seller",
      color: "from-blue-500/20 via-indigo-500/15 to-cyan-500/10",
      border: "border-blue-500/30",
      icon: Headphones,
      iconColor: "text-cyan-400"
    },
    {
      id: 2,
      name: "Chronos Minimalist Smartwatch",
      price: "$189.00",
      rating: "4.8",
      reviews: "94",
      category: "Wearables",
      badge: "New",
      color: "from-purple-500/20 via-pink-500/15 to-indigo-500/10",
      border: "border-purple-500/30",
      icon: Watch,
      iconColor: "text-purple-400"
    }
  ];

  const filteredProducts = activeTab === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeTab);

  const handleAddToCart = (id: number) => {
    setAddedId(id);
    setCartCount(prev => prev + 1);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 dark:bg-[#0b0e17] border border-slate-800 text-slate-100 overflow-hidden shadow-2xl font-sans text-xs">
      {/* Simulated Browser Bar */}
      <div className="px-3.5 py-2 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></span>
        </div>
        <div className="flex-1 max-w-xs mx-auto py-0.5 px-3 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono text-center flex items-center justify-center gap-1.5 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
          <span className="truncate">store.novaretail.io/explore</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="p-1 px-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center gap-1.5">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span className="font-bold text-[10px] px-1 bg-blue-500 text-white rounded-full leading-tight">{cartCount}</span>
          </div>
        </div>
      </div>

      {/* Store Header & Category Chips */}
      <div className="p-3.5 sm:p-4 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/80">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            <div className="text-[10px] font-mono text-blue-400 font-semibold tracking-wider uppercase">Figma + React Store</div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <span>NovaStore Pro</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">Live Demo</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 font-mono hidden sm:inline">
            Free Worldwide Shipping
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
          {['All', 'Audio', 'Wearables', 'Lifestyle'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-all shrink-0 ${
                activeTab === cat 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950/70">
        {filteredProducts.map((item) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id}
              className={`p-3 rounded-xl bg-slate-900/90 border ${item.border} flex flex-col justify-between group hover:border-blue-500/60 transition-all`}
            >
              <div>
                {/* Product Visual Container */}
                <div className={`h-24 sm:h-26 rounded-lg bg-gradient-to-br ${item.color} border border-white/5 flex items-center justify-center relative overflow-hidden mb-2.5`}>
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-slate-950/80 text-blue-300 border border-blue-500/30">
                    {item.badge}
                  </span>
                  
                  {/* Visual Icon Illustration */}
                  <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                  </div>

                  <div className="absolute bottom-1.5 right-1.5 flex items-center gap-0.5 text-[10px] text-amber-300 font-mono bg-slate-950/85 px-1.5 py-0.2 rounded-md">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <div className="font-semibold text-slate-200 text-xs truncate">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5 flex items-center justify-between">
                  <span>{item.category}</span>
                  <span className="text-slate-500">Auto Layout 5.0</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-800/80">
                <span className="font-bold text-white font-mono text-xs">{item.price}</span>
                
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-medium flex items-center gap-1 transition-all ${
                    addedId === item.id 
                      ? 'bg-emerald-600 text-white shadow-xs' 
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-xs active:scale-95'
                  }`}
                >
                  {addedId === item.id ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3 h-3" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="px-3.5 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3 h-3" />
          WCAG 2.1 AA Compliant (4.8:1)
        </span>
        <span className="text-slate-300">Subtotal: ${(cartCount * 119.5).toFixed(2)}</span>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. FRESHGO MOBILE GROCERY APP MOCKUP
   ========================================================================== */
export const FreshGoMockup: React.FC = () => {
  const [items, setItems] = useState<{ [key: string]: number }>({
    'Avocado': 2,
    'Strawberries': 1
  });

  const updateQuantity = (name: string, delta: number) => {
    setItems(prev => {
      const current = prev[name] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [name]: next };
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-[28px] bg-slate-950 p-2 border-[2.5px] border-slate-800 shadow-2xl font-sans text-xs">
      {/* Smartphone Notch & Status Bar */}
      <div className="px-4 py-1.5 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span>9:41</span>
        <div className="w-16 h-3 bg-slate-900 rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
        </div>
        <div className="flex items-center gap-1">
          <span>5G</span>
          <div className="w-3.5 h-2 rounded-xs border border-slate-400 p-0.2 flex items-center">
            <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
          </div>
        </div>
      </div>

      {/* Screen Inner */}
      <div className="rounded-[20px] bg-slate-900/90 border border-slate-800/80 overflow-hidden text-slate-100">
        
        {/* App Bar */}
        <div className="p-3 bg-slate-950/80 border-b border-slate-800/60 flex items-center justify-between">
          <div>
            <div className="text-[9px] font-mono text-emerald-400 uppercase font-semibold">FreshGo Express</div>
            <div className="text-xs font-bold text-white flex items-center gap-1">
              <span>Delivery in 15 mins</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>
          <div className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-[10px] font-mono font-medium">
            Kathmandu
          </div>
        </div>

        {/* Categories Horizontal */}
        <div className="p-3 bg-slate-900/80 border-b border-slate-800/40">
          <div className="text-[10px] text-slate-400 font-medium mb-1.5">Fast Categories</div>
          <div className="grid grid-cols-4 gap-1.5 text-center">
            {[
              { icon: '🥑', label: 'Fresh' },
              { icon: '🍓', label: 'Fruits' },
              { icon: '🥛', label: 'Dairy' },
              { icon: '🥖', label: 'Bakery' },
            ].map((cat, idx) => (
              <div key={idx} className="p-1.5 rounded-xl bg-slate-950/70 border border-slate-800/70 hover:border-emerald-500/40 cursor-pointer transition-colors">
                <div className="text-base">{cat.icon}</div>
                <div className="text-[9px] font-medium text-slate-300 mt-0.5">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Items List with Stepper */}
        <div className="p-3 space-y-2">
          <div className="text-[10px] text-slate-400 font-medium">Your Express Basket</div>
          
          <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">🥑</span>
              <div>
                <div className="font-semibold text-white text-[11px]">Organic Hass Avocado</div>
                <div className="text-[9px] text-slate-400 font-mono">$2.40 / ea</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700/60 rounded-lg p-0.5">
              <button 
                onClick={() => updateQuantity('Avocado', -1)} 
                className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center active:scale-90 transition-transform"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="font-mono text-xs px-1 font-bold text-white">{items['Avocado']}</span>
              <button 
                onClick={() => updateQuantity('Avocado', 1)} 
                className="w-5 h-5 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center active:scale-90 transition-transform"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">🍓</span>
              <div>
                <div className="font-semibold text-white text-[11px]">Fresh Strawberries</div>
                <div className="text-[9px] text-slate-400 font-mono">$3.80 / box</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700/60 rounded-lg p-0.5">
              <button 
                onClick={() => updateQuantity('Strawberries', -1)} 
                className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center active:scale-90 transition-transform"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="font-mono text-xs px-1 font-bold text-white">{items['Strawberries']}</span>
              <button 
                onClick={() => updateQuantity('Strawberries', 1)} 
                className="w-5 h-5 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center active:scale-90 transition-transform"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Live Delivery Progress Tracker */}
        <div className="p-2.5 mx-3 mb-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50">
          <div className="flex items-center justify-between text-[10px] text-emerald-300 font-medium mb-1.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Driver En Route
            </span>
            <span className="font-mono font-bold">ETA 8m</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-3/4 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ==========================================================================
   3. DEVPULSE DEVELOPER ANALYTICS MOCKUP
   ========================================================================== */
export const DevPulseMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-[#0b0f19] border border-slate-800 text-slate-100 overflow-hidden shadow-2xl font-sans text-xs">
      {/* Console Header */}
      <div className="px-3.5 py-2 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-bold text-white text-xs font-mono">DevPulse Real-Time Telemetry</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Streaming
          </span>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/40 border-b border-slate-800/80">
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] font-mono text-slate-400">P95 LATENCY</div>
          <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono mt-0.5">38.4 ms</div>
          <div className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> -12% vs avg
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] font-mono text-slate-400">UPTIME (30D)</div>
          <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono mt-0.5">99.994%</div>
          <div className="text-[9px] text-slate-400 font-mono mt-0.5">0 incidents</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] font-mono text-slate-400">LIGHTHOUSE</div>
          <div className="text-xs sm:text-sm font-bold text-amber-300 font-mono mt-0.5">100 / 100</div>
          <div className="text-[9px] text-emerald-400 font-mono mt-0.5">Core Web Vitals</div>
        </div>
      </div>

      {/* SVG Wave Chart */}
      <div className="p-3 sm:p-4 bg-slate-900/40">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
          <span>Throughput (req/sec)</span>
          <span className="text-cyan-400 font-bold">Peak: 14,280 rps</span>
        </div>

        {/* Dynamic SVG Area Chart */}
        <div className="h-20 sm:h-24 w-full relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradientPulse" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,60 Q 30,20 60,45 T 120,30 T 180,15 T 240,40 T 300,10 L 300,80 L 0,80 Z"
              fill="url(#chartGradientPulse)"
            />
            <path
              d="M 0,60 Q 30,20 60,45 T 120,30 T 180,15 T 240,40 T 300,10"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2.5"
            />
            {/* Pulsing point on current value */}
            <circle cx="300" cy="10" r="4" fill="#22d3ee" className="animate-ping" />
            <circle cx="300" cy="10" r="3" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Live Log Stream */}
      <div className="p-2.5 sm:p-3 bg-slate-950 border-t border-slate-800/80 font-mono text-[10px] space-y-1">
        <div className="flex items-center justify-between text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[9px]">200 OK</span>
            <span>GET /api/v1/metrics</span>
          </span>
          <span className="text-slate-500">12ms</span>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <span className="px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[9px]">200 OK</span>
            <span>POST /api/v1/telemetry</span>
          </span>
          <span className="text-slate-500">24ms</span>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   4. PRISM DESIGN SYSTEM & TOKEN MOCKUP
   ========================================================================== */
export const PrismMockup: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [toggleState, setToggleState] = useState(true);
  const [sliderVal, setSliderVal] = useState(75);

  const colors = [
    { name: '--color-primary', hex: '#2563eb', bg: 'bg-blue-600' },
    { name: '--color-accent', hex: '#06b6d4', bg: 'bg-cyan-500' },
    { name: '--color-success', hex: '#10b981', bg: 'bg-emerald-500' },
    { name: '--color-surface', hex: '#1e293b', bg: 'bg-slate-800' }
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1400);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0d111a] border border-slate-800 text-slate-100 p-3.5 sm:p-4 shadow-2xl font-sans text-xs space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-purple-400" />
          <span className="font-bold text-white text-xs font-mono">Prism Figma Token Library</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/60">
          Auto Layout + React
        </span>
      </div>

      {/* Live Color Tokens with One-Click Copy */}
      <div>
        <div className="text-[10px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
          <span>DESIGN TOKEN PALETTE</span>
          <span className="text-slate-500 text-[9px]">Click to copy HEX</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {colors.map((c) => (
            <div
              key={c.name}
              onClick={() => handleCopy(c.hex)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 cursor-pointer transition-all flex flex-col justify-between"
            >
              <div className={`w-full h-7 rounded-lg ${c.bg} mb-1 shadow-inner`}></div>
              <div className="text-[10px] font-mono font-bold text-slate-200">{c.hex}</div>
              <div className="text-[9px] font-mono text-slate-500 truncate">{c.name}</div>
              {copiedHex === c.hex && (
                <div className="text-[9px] text-emerald-400 font-mono font-bold mt-0.5">Copied!</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Live Component States */}
      <div className="pt-2 border-t border-slate-800/80 space-y-2">
        <div className="text-[10px] font-mono text-slate-400">INTERACTIVE ATOMIC COMPONENTS</div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all">
            Primary Button
          </button>
          
          <button className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs active:scale-95 transition-all">
            Secondary Outline
          </button>

          <button className="px-3 py-1.5 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 font-medium text-xs hover:bg-purple-600/30 transition-all">
            Ghost Badge
          </button>
        </div>

        {/* Live Slider & Switch Controls */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <span className="text-[10px] text-slate-300 font-medium">Dark Mode Token</span>
            <button
              onClick={() => setToggleState(!toggleState)}
              className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${toggleState ? 'bg-purple-600' : 'bg-slate-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${toggleState ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <span className="text-[10px] text-slate-300 font-mono font-bold shrink-0">{sliderVal}px</span>
            <input
              type="range"
              min="10"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   5. BRAND STUDIO MOCKUP (FEATURING ACTUAL CLIENT VISUALS)
   ========================================================================== */
export const BrandStudioMockup: React.FC = () => {
  const [activeImage, setActiveImage] = useState<'blooming' | 'lily'>('blooming');

  return (
    <div className="w-full rounded-2xl bg-[#120f18] border border-amber-900/30 text-slate-100 p-3.5 sm:p-4 shadow-2xl font-sans text-xs space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-amber-900/20">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-white text-xs font-mono">Brand Identity & Graphic Studio</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-950/60 text-amber-300 border border-amber-800/60">
          Client Works
        </span>
      </div>

      {/* Visual Creative Showcase with Actual Compressed Artwork */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>FEATURED DESIGNS (CLICK TO PREVIEW)</span>
          <span className="text-amber-400 text-[10px]">Optimized Web Assets</span>
        </div>

        {/* 2 Visual Artwork Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          
          {/* 1. Blooming Buds Artwork */}
          <div 
            onClick={() => setActiveImage('blooming')}
            className={`p-2 rounded-xl border transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between ${
              activeImage === 'blooming' 
                ? 'bg-amber-950/40 border-amber-500/80 ring-2 ring-amber-500/30' 
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="h-32 sm:h-36 rounded-lg overflow-hidden relative bg-slate-950 border border-white/5 mb-2">
              <img 
                src="/images/blooming-buds.jpg" 
                alt="Blooming Buds Brand Design" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-950/90 text-amber-300 border border-amber-500/40">
                School Branding
              </span>
            </div>
            <div>
              <div className="font-bold text-white text-xs truncate">Blooming Buds Creative</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">Poster & Banner Design</div>
            </div>
          </div>

          {/* 2. Lily Garden Preschool Artwork */}
          <div 
            onClick={() => setActiveImage('lily')}
            className={`p-2 rounded-xl border transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between ${
              activeImage === 'lily' 
                ? 'bg-amber-950/40 border-amber-500/80 ring-2 ring-amber-500/30' 
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="h-32 sm:h-36 rounded-lg overflow-hidden relative bg-slate-950 border border-white/5 mb-2">
              <img 
                src="/images/lily-garden.jpg" 
                alt="Lily Garden Preschool Visual Design" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-950/90 text-cyan-300 border border-cyan-500/40">
                Preschool Collateral
              </span>
            </div>
            <div>
              <div className="font-bold text-white text-xs truncate">Lily Garden Preschool</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">Brand Identity & Collateral</div>
            </div>
          </div>

        </div>
      </div>

      {/* Action Footer */}
      <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-800/40 flex items-center justify-between">
        <span className="text-[10px] text-amber-200 font-medium">
          Official Canva Design Workspace
        </span>
        <a
          href="https://www.canva.com/design/DAGwM_FuciM/wHWYVp5J94eQ6QL96otlFQ/edit"
          target="_blank"
          rel="noreferrer"
          className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center gap-1 transition-all"
        >
          <span>Open Workshop</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

/* ==========================================================================
   6. LILLIPUT PREMIER SCHOOL WEB PLATFORM MOCKUP
   ========================================================================== */
export const LilliputSchoolMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portal' | 'calendar' | 'admissions'>('portal');
  const [selectedGrade, setSelectedGrade] = useState('Preschool');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeCalMonth, setActiveCalMonth] = useState<'bhadra' | 'aswin'>('bhadra');

  const calendarEvents = {
    bhadra: [
      { bs: '०४', ad: 'Aug 20', title: 'Karkhana STEAM Robotics Kickoff', type: 'steam', tag: 'STEAM' },
      { bs: '१२', ad: 'Aug 28', title: 'First Term Academic Evaluation', type: 'exam', tag: 'Exam' },
      { bs: '१८', ad: 'Sep 03', title: 'Haritalika Teej Special Assembly', type: 'holiday', tag: 'Celebration' },
      { bs: '२६', ad: 'Sep 11', title: 'Montessori Open House & Parent Forum', type: 'event', tag: 'Parent Forum' }
    ],
    aswin: [
      { bs: '०३', ad: 'Sep 19', title: 'Constitution Day (National Holiday)', type: 'holiday', tag: 'Holiday' },
      { bs: '१२', ad: 'Sep 28', title: 'Dashain Festival Break Commences', type: 'holiday', tag: 'Vacation' },
      { bs: '२८', ad: 'Oct 14', title: 'School Reopens & STEAM Sprint 2', type: 'steam', tag: 'Curriculum' }
    ]
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 dark:bg-[#0c0f18] border border-slate-800 text-slate-100 overflow-hidden shadow-2xl font-sans text-xs">
      {/* Simulated Browser Bar with Lilliput Red Accent */}
      <div className="px-3.5 py-2 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></span>
        </div>
        <div className="flex-1 max-w-sm mx-auto py-0.5 px-3 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono text-center flex items-center justify-center gap-1.5 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
          <span className="truncate">https://www.lilliputschool.edu.np/</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="https://lilliputschool.edu.np"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1 rounded-lg bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 font-mono text-[10px] flex items-center gap-1 transition-all"
            title="Open Live Website"
          >
            <span>Live Site</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Navigation & Mode Switcher */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-red-600 p-1.5 flex items-center justify-center shadow-md shadow-red-600/30 shrink-0">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 leading-snug">
                <span>Lilliput Premier Elementary School</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-red-400" />
                <span>Biratnagar, Nepal • Est. 2066 B.S.</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[9px] font-mono flex items-center gap-1">
              <Award className="w-2.5 h-2.5 text-amber-400" />
              <span>British Council ISA Winner</span>
            </span>
          </div>
        </div>

        {/* Inner Tab Selector */}
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
          {[
            { id: 'portal', label: '🏛️ Campus Portal' },
            { id: 'calendar', label: '📅 Dual Calendar (B.S. / A.D.)' },
            { id: 'admissions', label: '📝 Admissions Flow' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-xs font-semibold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-3.5 sm:p-4 bg-slate-950/70">
        
        {/* 1. Portal View */}
        {activeTab === 'portal' && (
          <div className="space-y-3">
            {/* Hero Visual Card */}
            <div className="rounded-xl overflow-hidden relative border border-slate-800 bg-slate-900 group">
              <div className="h-32 sm:h-40 w-full relative overflow-hidden bg-slate-950">
                <img 
                  src="/images/lilliput-school.webp" 
                  alt="Lilliput Premier School Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Hero Overlay Badges */}
                <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-red-600 text-white shadow-sm">
                    Education for Life
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/40">
                    Karkhana STEAM Campus
                  </span>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-tight drop-shadow-md">
                      Nurturing Inquisitive Young Minds
                    </h4>
                    <p className="text-[10px] text-slate-300 font-mono mt-0.5">
                      Nepal's First Fully Montessori Preschool & Elementary
                    </p>
                  </div>
                  <a
                    href="https://lilliputschool.edu.np"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-md shadow-red-600/30 transition-all shrink-0"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* School Pillar Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-red-400 font-mono font-bold text-sm sm:text-base">2066 B.S.</div>
                <div className="text-[9px] text-slate-400 font-mono mt-0.5">Established</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-emerald-400 font-mono font-bold text-sm sm:text-base">100%</div>
                <div className="text-[9px] text-slate-400 font-mono mt-0.5">Montessori</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-cyan-400 font-mono font-bold text-sm sm:text-base">STEAM</div>
                <div className="text-[9px] text-slate-400 font-mono mt-0.5">Karkhana Lab</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-amber-400 font-mono font-bold text-sm sm:text-base">ISA Award</div>
                <div className="text-[9px] text-slate-400 font-mono mt-0.5">British Council</div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Dual Academic Calendar View */}
        {activeTab === 'calendar' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-red-400" />
                <span className="font-bold text-white text-xs font-mono">Dual Academic Calendar Engine</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                <button
                  onClick={() => setActiveCalMonth('bhadra')}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                    activeCalMonth === 'bhadra' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Bhadra (Aug/Sep)
                </button>
                <button
                  onClick={() => setActiveCalMonth('aswin')}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                    activeCalMonth === 'aswin' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Aswin (Sep/Oct)
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {calendarEvents[activeCalMonth].map((ev, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between gap-2 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-center w-10 py-1 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                      <div className="text-red-400 font-bold font-mono text-xs">{ev.bs}</div>
                      <div className="text-[8px] text-slate-400 font-mono">{ev.ad}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{ev.title}</div>
                      <div className="text-[9px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Official School Event</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-semibold shrink-0 ${
                    ev.type === 'steam' 
                      ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/60'
                      : ev.type === 'exam'
                      ? 'bg-rose-950/70 text-rose-300 border border-rose-800/60'
                      : ev.type === 'holiday'
                      ? 'bg-amber-950/70 text-amber-300 border border-amber-800/60'
                      : 'bg-purple-950/70 text-purple-300 border border-purple-800/60'
                  }`}>
                    {ev.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Admissions Workflow View */}
        {activeTab === 'admissions' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-red-400" />
                <span>Online Admission Inquiry Flow</span>
              </span>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Enrollment Open 2083
              </span>
            </div>

            {submitted ? (
              <div className="p-5 text-center rounded-xl bg-slate-900/90 border border-emerald-500/40 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="font-bold text-white text-xs">Inquiry Registered Successfully!</div>
                <p className="text-[10px] text-slate-400 font-mono">
                  The Lilliput Admissions team will contact you for a campus tour.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-mono text-slate-300"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 mb-1">Target Grade Level:</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['Montessori', 'Preschool', 'Elementary'].map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setSelectedGrade(g)}
                        className={`p-1.5 rounded-lg text-[10px] font-medium border text-center transition-all ${
                          selectedGrade === g
                            ? 'bg-red-600/20 border-red-500 text-red-200 font-semibold'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">Parent / Guardian Name:</label>
                    <input 
                      type="text" 
                      defaultValue="Dr. Ramesh Sharma" 
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:border-red-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">Phone Number:</label>
                    <input 
                      type="text" 
                      defaultValue="9800000000" 
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:border-red-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-500 active:scale-98 text-white font-bold text-xs shadow-md shadow-red-600/30 flex items-center justify-center gap-1.5 transition-all"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Admission Inquiry</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

      </div>

      {/* Bottom Summary Bar */}
      <div className="px-3.5 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3 h-3" />
          WCAG 2.1 AA Compliant • Schema.org SEO
        </span>
        <span className="text-red-400 font-bold">Devkota Building, Tinpaini Marga</span>
      </div>
    </div>
  );
};

/* ==========================================================================
   7. CLICKDIGITALS MARKETING & ACADEMY MOCKUP
   ========================================================================== */
export const ClickDigitalsMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agency' | 'courses' | 'inquiry'>('agency');
  const [selectedCourse, setSelectedCourse] = useState('frontend');
  const [monthlyBudget, setMonthlyBudget] = useState(500);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    {
      id: 'frontend',
      title: 'Front End Development',
      icon: '</>',
      duration: '4 Months',
      level: 'Beginner to Pro',
      levelBadge: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60',
      tech: 'React 19, TypeScript, Tailwind CSS, Next.js, Git',
      desc: 'Build modern, lightning-fast user interfaces with latest web standards and design systems.'
    },
    {
      id: 'backend',
      title: 'Back End Development',
      icon: '⚙️',
      duration: '4 Months',
      level: 'Intermediate',
      levelBadge: 'bg-blue-950/60 text-blue-300 border-blue-800/60',
      tech: 'Node.js, Express, Python, PostgreSQL, REST APIs',
      desc: 'Architect secure, scalable server systems, database schemas, and microservice APIs.'
    },
    {
      id: 'qa',
      title: 'Quality Assurance (QA)',
      icon: '✅',
      duration: '3 Months',
      level: 'Beginner',
      levelBadge: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60',
      tech: 'Manual & Automated Testing, Playwright, CI/CD, JIRA',
      desc: 'Ensure rock-solid software quality through systematic test suites, regression pipelines, and bug triage.'
    },
    {
      id: 'smm',
      title: 'Social Media Marketing',
      icon: '📱',
      duration: '3 Months',
      level: 'All Levels',
      levelBadge: 'bg-amber-950/60 text-amber-300 border-amber-800/60',
      tech: 'Meta Ads, TikTok Strategy, Analytics, Content Calendars',
      desc: 'Master audience targeting, high-converting ad funnels, and viral engagement tactics.'
    },
    {
      id: 'design',
      title: 'Graphic Designing & UI',
      icon: '🎨',
      duration: '3 Months',
      level: 'Intermediate',
      levelBadge: 'bg-purple-950/60 text-purple-300 border-purple-800/60',
      tech: 'Figma, Adobe Illustrator, Photoshop, Brand Systems',
      desc: 'Create compelling visual brand identities, digital marketing assets, and user interfaces.'
    },
    {
      id: 'video',
      title: 'Video Editing & Motion',
      icon: '🎬',
      duration: '4 Months',
      level: 'Intermediate',
      levelBadge: 'bg-blue-950/60 text-blue-300 border-blue-800/60',
      tech: 'Premiere Pro, After Effects, Motion Graphics, Color Grade',
      desc: 'Produce cinematic commercial reels, product explainers, and high-impact social media video ads.'
    }
  ];

  const activeCourseData = courses.find(c => c.id === selectedCourse) || courses[0];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLeadSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 dark:bg-[#0a0f1d] border border-slate-800 text-slate-100 overflow-hidden shadow-2xl font-sans text-xs">
      {/* Simulated Browser Bar */}
      <div className="px-3.5 py-2 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></span>
        </div>
        <div className="flex-1 max-w-sm mx-auto py-0.5 px-3 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono text-center flex items-center justify-center gap-1.5 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
          <span className="truncate">https://www.clickdigitals.com.np/</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="https://www.clickdigitals.com.np/"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 font-mono text-[10px] flex items-center gap-1 transition-all"
            title="Open Live Website"
          >
            <span>Live Site</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Brand Header */}
      <div className="p-3.5 sm:p-4 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-1 flex items-center justify-center shadow-md shadow-blue-500/30 shrink-0 font-mono font-bold text-white text-xs">
              CD
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 leading-snug">
                <span>ClickDigitals</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono font-medium">We Click. You Grow.</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-blue-400" />
                <span>Biratnagar 56613, Nepal • Performance Marketing & Tech Academy</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 text-[9px] font-mono flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-cyan-400" />
              <span>Data-Driven ROI</span>
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
          {[
            { id: 'agency', label: '🚀 Growth & Performance' },
            { id: 'courses', label: '🎓 Tech Academy Tracks (6)' },
            { id: 'inquiry', label: '📋 Lead Inquiry & Consultation' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs font-semibold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-3.5 sm:p-4 bg-slate-950/70">
        
        {/* 1. Growth & Performance Marketing */}
        {activeTab === 'agency' && (
          <div className="space-y-3">
            {/* Visual Hero Card with new high-res background */}
            <div className="rounded-xl overflow-hidden relative border border-slate-800/90 bg-slate-900 group shadow-lg">
              <div className="h-44 sm:h-52 md:h-56 w-full relative overflow-hidden bg-slate-950">
                <img 
                  src="/images/clickdigitals-hero-bg.png" 
                  alt="ClickDigitals Hero — You're just a Click Away" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                
                {/* Visual Adjustment Gradients: subtle dark vignette & bottom shadow to balance contrast and preserve the original graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/15 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none"></div>
                
                {/* Top Floating Badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-md text-[9px] font-bold font-mono bg-blue-600 text-white shadow-sm flex items-center gap-1 backdrop-blur-xs">
                    <Sparkles className="w-2.5 h-2.5" />
                    Audience Science
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-bold font-mono bg-slate-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-xs shadow-xs">
                    High-ROI Campaigns
                  </span>
                </div>

                {/* Bottom Content Bar with Frosted Glass Backdrop */}
                <div className="absolute bottom-2 left-2 right-2 p-2.5 sm:p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 flex items-end justify-between gap-3 shadow-xl">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-wide">
                        Live Agency Hero
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      Data-Driven Digital Marketing in Nepal
                    </h4>
                    <p className="text-[10px] text-slate-300 font-mono mt-0.5 line-clamp-1">
                      Targeted Audience Modeling & Precision Acquisition
                    </p>
                  </div>
                  <a
                    href="https://www.clickdigitals.com.np/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all shrink-0"
                  >
                    <span>Explore Live</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive ROI Calculator Simulation */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-slate-300 font-bold flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Campaign Performance Multiplier Simulator</span>
                </span>
                <span className="text-cyan-400 font-mono font-bold">${monthlyBudget}/mo Budget</span>
              </div>

              <input
                type="range"
                min="100"
                max="3000"
                step="100"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />

              <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-400">EST. IMPRESSIONS</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{(monthlyBudget * 320).toLocaleString()}+</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-400">QUALIFIED LEADS</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">~{Math.round(monthlyBudget * 0.18)} leads</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[9px] text-slate-400">PROJECTED REVENUE</div>
                  <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5">${(monthlyBudget * 4.2).toLocaleString()} (4.2x)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Tech Academy Tracks */}
        {activeTab === 'courses' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Job-Ready Tech & Creative Training Tracks</span>
              </span>
              <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                Enrollment Open 2026
              </span>
            </div>

            {/* Course Selector Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {courses.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCourse(c.id)}
                  className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    selectedCourse === c.id
                      ? 'bg-blue-600/20 border-blue-500 text-white font-bold ring-1 ring-blue-500/40'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className="text-sm">{c.icon}</span>
                  <span className="text-[9px] font-mono truncate w-full">{c.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Selected Course Details Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-base shadow-xs">
                    {activeCourseData.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs sm:text-sm">{activeCourseData.title}</h5>
                    <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                      <span>🕒 {activeCourseData.duration}</span>
                      <span>•</span>
                      <span className={`px-1.5 py-0.2 rounded text-[8px] border ${activeCourseData.levelBadge}`}>
                        {activeCourseData.level}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.clickdigitals.com.np/#courses-section"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] font-mono flex items-center gap-1 shrink-0"
                >
                  <span>Syllabus</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{activeCourseData.desc}</p>
              
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-[10px] text-cyan-300 flex items-center gap-1.5">
                <span className="text-slate-500 font-bold">Stack:</span>
                <span className="truncate">{activeCourseData.tech}</span>
              </div>
            </div>
          </div>
        )}

        {/* 3. Lead Inquiry & Consultation */}
        {activeTab === 'inquiry' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>Request Custom Marketing Growth Strategy</span>
              </span>
              <span className="text-[9px] font-mono text-emerald-400">Response in &lt; 24h</span>
            </div>

            {leadSubmitted ? (
              <div className="p-5 text-center rounded-xl bg-slate-900/90 border border-emerald-500/40 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="font-bold text-white text-xs">Strategy Request Submitted!</div>
                <p className="text-[10px] text-slate-400 font-mono">
                  A ClickDigitals marketing strategist will contact you with a customized audit.
                </p>
                <button
                  onClick={() => setLeadSubmitted(false)}
                  className="mt-2 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-mono text-slate-300"
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">Company / Brand Name:</label>
                    <input 
                      type="text" 
                      defaultValue="Acme Innovations Nepal" 
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:border-blue-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">Business Email:</label>
                    <input 
                      type="email" 
                      defaultValue="hello@acmenepal.com" 
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:border-blue-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">Primary Growth Goal:</label>
                    <select className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:border-blue-500 focus:outline-hidden">
                      <option>Scale Paid Ads (Meta / Google)</option>
                      <option>SEO & Search Ranking</option>
                      <option>Brand Identity & Creative Suite</option>
                      <option>Corporate Team Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 mb-1">Target Monthly Spend:</label>
                    <select className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:border-blue-500 focus:outline-hidden">
                      <option>$500 - $1,500 / mo</option>
                      <option>$1,500 - $5,000 / mo</option>
                      <option>$5,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-xs shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5 transition-all"
                >
                  {isSubmitting ? (
                    <span>Submitting Strategy Request...</span>
                  ) : (
                    <>
                      <span>Get Custom Growth Proposal</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

      </div>

      {/* Bottom Summary Bar */}
      <div className="px-3.5 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3 h-3" />
          WCAG 2.1 AA • Schema.org (LocalBusiness + Course)
        </span>
        <span className="text-cyan-400 font-bold">Biratnagar 56613, Nepal</span>
      </div>
    </div>
  );
};


