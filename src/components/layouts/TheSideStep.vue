<template>
  <div class="side-step-content">
    <div class="content-header">
      <slot name="header"></slot>
    </div>
    <div class="content-body">
      <slot name="body">
        <Step
          :steps="props.steps"
          :readonly="readonlyValue"
          :current="props.current"
          @click="handleStepClick"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { Icon } from '@/components/icons';
import { Step } from '@/components/step';

const current = ref<number>(2);
const direction = ref<'horizontal' | 'vertical'>('horizontal');

const handleResize = () => {
  const isWindowMax = window.innerWidth <= 1439;
  direction.value = isWindowMax ? 'horizontal' : 'vertical';
  document
    .querySelectorAll('.custom-step')
    .forEach((el) =>
      el.classList.toggle('custom-steps-horizontal', isWindowMax)
    );
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const props = defineProps<{
  steps: [];
  readonly?: boolean;
  current?: number;
}>();

const emit = defineEmits<{
  change: [step: number];
}>();

const readonlyValue = computed(() => props.readonly ?? true);

// Step 컴포넌트 click 이벤트 상위로 전달
const handleStepClick = (index: number) => {
  emit('change', index);
};
</script>
