export const cardClass = 'rounded-xl border border-slate-200 bg-white p-6 shadow-sm';

export const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all';

const buttonClasses = Object.freeze({
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
});

const statusClasses = Object.freeze({
  active: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
  archived: 'bg-slate-100 text-slate-700 border border-slate-300',
  pending: 'bg-amber-100 text-amber-800 border border-amber-300',
});

export function buttonClass(variant = 'primary') {
  return inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ;
}

export function statusClass(status) {
  return statusClasses[status] ?? statusClasses.archived;
}

export function renderNavbarHtml({ activeRoute = 'dashboard', email = 'docente@example.test' } = {}) {
  const isDash = activeRoute === 'dashboard';
  const isUsers = activeRoute === 'usuarios';
  const isProds = activeRoute === 'productos';

  return 
  <header class="bg-slate-900 text-white border-b border-slate-800 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <a href="/" class="flex items-center space-x-3 text-white font-bold text-lg tracking-tight hover:text-blue-400 transition-colors">
          <span class="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-md font-extrabold uppercase">UTN TUP</span>
          <span>Arquitectura Microfrontends</span>
        </a>
        <nav class="hidden md:flex space-x-2">
          <a href="/" class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors ">Dashboard (Shell)</a>
          <a href="/usuarios" class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors ">Usuarios MFE</a>
          <a href="/productos" class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors ">Productos MFE</a>
        </nav>
      </div>
      <div class="flex items-center space-x-4">
        <div class="hidden sm:flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full text-xs text-slate-300">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-medium"></span>
        </div>
        <button id="tpi-logout-btn" type="button" class="text-xs bg-rose-600/90 hover:bg-rose-600 text-white font-medium px-3 py-1.5 rounded-lg transition-colors shadow-sm">
          Cerrar Sesión
        </button>
      </div>
    </div>
  </header>
  ;
}
