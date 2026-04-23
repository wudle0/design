/* eslint-disable */
declare module '*.svg' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@/hooks/useTheme' {
  import { ComputedRef } from 'vue';
  export function useTheme(type?: string): {
    colorPalette: ComputedRef<string[]>;
    isDarkTheme: ComputedRef<boolean>;
  };
}

declare module 'hostMaestro/assets/ThemeJson' {
  const value: any;
  export default value;
}

declare module '*.json' {
  const value: any;
  export default value;
}
