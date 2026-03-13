import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Fusionne les classes Tailwind proprement en gérant les conflits
 * et les conditions logiques.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}