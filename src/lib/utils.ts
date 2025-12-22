// Utility functions

/**
 * Combines multiple class names, filtering out falsy values
 */
export function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
