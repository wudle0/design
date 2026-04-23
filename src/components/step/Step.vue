<template>
  <a-steps
    v-model:current="current"
    type="navigation"
    size="small"
    :direction="props.onlyHorizon ? 'horizontal' : direction"
    class="custom-step"
    :class="{ 'read-only': props.readonly, 'only-horizon': props.onlyHorizon }"
  >
    <a-step
      v-for="(step, index) in props.steps"
      :key="index"
      :title="step.title"
      :status="step.status"
      @click="$emit('click', index)"
    >
      <template #icon>
        <Icon size="md" :fill="current === index || step.status === 'error'">
          <template #name>
            {{
              step.status === 'error'
                ? 'error'
                : step.status === 'finish'
                  ? 'check_circle'
                  : `counter_${index + 1}`
            }}
          </template>
        </Icon>
      </template>
    </a-step>
  </a-steps>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const current = computed(() => props.current ?? 2);
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

interface StepItem {
  title: string;
  status: 'wait' | 'process' | 'finish' | 'error';
  description?: string;
}

const props = defineProps<{
  steps: StepItem[];
  readonly?: false;
  current?: number;
  onlyHorizon?: boolean;
}>();

const emit = defineEmits<{
  click: [index: number];
}>();
</script>
<style scoped>
.ant-divider {
  margin: 20px 0 !important;
}
</style>
