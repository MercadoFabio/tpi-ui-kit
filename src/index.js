export const cardClass = 'rounded-xl border border-slate-200 bg-white p-6 shadow-sm';

export const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30';

const buttonClasses = Object.freeze({
  primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400',
});

const statusClasses = Object.freeze({
  active: 'bg-emerald-100 text-emerald-800',
  archived: 'bg-slate-100 text-slate-700',
  pending: 'bg-amber-100 text-amber-800',
});

export function buttonClass(variant = 'primary') {
  return `inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonClasses[variant] ?? buttonClasses.primary}`;
}

export function statusClass(status) {
  return statusClasses[status] ?? statusClasses.archived;
}
