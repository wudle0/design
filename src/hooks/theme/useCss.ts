import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from './useTheme';

import cmpbfLight from '@/styles/assets/css/cmpbf-light.css?inline';
import cmpbfDark from '@/styles/assets/css/cmpbf-dark.css?inline';
import contrabassLight from '@/styles/assets/css/contrabass-light.css?inline';
import contrabassDark from '@/styles/assets/css/contrabass-dark.css?inline';
import violaLight from '@/styles/assets/css/viola-light.css?inline';
import violaDark from '@/styles/assets/css/viola-dark.css?inline';
import cephLight from '@/styles/assets/css/ceph-light.css?inline';
import cephDark from '@/styles/assets/css/ceph-dark.css?inline';

const themeStyles: Record<string, string> = {
  'cmpbf-light': cmpbfLight,
  'cmpbf-dark': cmpbfDark,
  'contrabass-light': contrabassLight,
  'contrabass-dark': contrabassDark,
  'viola-light': violaLight,
  'viola-dark': violaDark,
  'ceph-light': contrabassLight,
  'ceph-dark': contrabassDark,
};

function extractServiceName(path: string): string {
  const match = path
    .split('/')
    .find((p) => ['cmpbf', 'contrabass', 'viola', 'ceph'].includes(p));
  return match || 'cmpbf';
}

function applyThemeCSS(serviceName: string, isDarkMode: boolean) {
  const themeKey = `${serviceName}-${isDarkMode ? 'dark' : 'light'}`;
  const css = themeStyles[themeKey];

  if (!css) {
    console.warn(`[theme] CSS 누락: ${themeKey}`);
    return;
  }

  const existing = document.getElementById('theme-style');
  if (existing) existing.remove();

  const style = document.createElement('style');
  style.id = 'theme-style';
  style.textContent = css;
  document.head.appendChild(style);
}

export function useCss() {
  const router = useRouter();
  const { isDarkMode } = useTheme();

  const apply = () => {
    const serviceName = extractServiceName(router.currentRoute.value.path);
    applyThemeCSS(serviceName, isDarkMode.value);
  };

  // 첫 적용
  apply();

  // 라우트 변경시
  watch(() => router.currentRoute.value.path, apply);

  // 다크모드 변경시
  watch(isDarkMode, apply);
}
