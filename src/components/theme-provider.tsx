"use client";

import { ThemeProvider as InvariantThemeProvider, ThemeProviderProps } from "@johngarcia9110/invariant";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <InvariantThemeProvider {...props}>{children}</InvariantThemeProvider>;
}
