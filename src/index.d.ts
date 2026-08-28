export declare const cardClass: string;
export declare const fieldClass: string;
export declare function buttonClass(variant?: 'primary' | 'secondary' | 'danger' | 'success'): string;
export declare function statusClass(status: 'active' | 'archived' | 'pending'): string;
export declare function renderNavbarHtml(options?: { activeRoute?: 'dashboard' | 'usuarios' | 'productos'; email?: string }): string;
