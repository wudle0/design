import { ref, watch } from 'vue';

const THEME_STORAGE_KEY = 'theme';
const isDarkMode = ref<boolean>(false);

export function useTheme() {
  // 초기화
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    isDarkMode.value = saved === 'dark';
  }

  // 반응형 watch → 저장
  watch(isDarkMode, (val) => {
    localStorage.setItem(THEME_STORAGE_KEY, val ? 'dark' : 'light');
  });

  return {
    isDarkMode,
  };
}
