import { onMounted, onBeforeUnmount, ref } from 'vue';

interface ClickOutsideOptions {
  onClickInside?: () => void | Promise<void>;
  onClickOutside?: () => void | Promise<void>;
  ignoreFirstClick?: boolean;
}

export function useClickOutside(options: ClickOutsideOptions = {}) {
  const targetRef = ref<HTMLElement | null>(null);
  const hasClickedOnce = ref(false);

  const handleClick = async (e: MouseEvent) => {
    const el = targetRef.value;
    if (!el) return;

    const isInside = el.contains(e.target as Node);

    if (options.ignoreFirstClick && !hasClickedOnce.value) {
      hasClickedOnce.value = true;
      return;
    }

    if (isInside) {
      await options.onClickInside?.();
    } else {
      await options.onClickOutside?.();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClick);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClick);
  });

  return {
    targetRef,
  };
}
