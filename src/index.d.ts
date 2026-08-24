export type ButtonVariant = 'primary' | 'secondary';
export type DisplayStatus = 'active' | 'archived' | 'pending';

export interface UserDisplay {
  id: string;
  name: string;
  email: string;
  status: DisplayStatus;
}

export interface ProductDisplay {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  status: DisplayStatus;
}

export interface LoginDisplay {
  emailLabel: string;
  passwordLabel: string;
  submitLabel: string;
}

export declare const cardClass: string;
export declare const fieldClass: string;
export declare function buttonClass(variant?: ButtonVariant): string;
export declare function statusClass(status: string): string;
