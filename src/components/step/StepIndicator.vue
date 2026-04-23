<template>
  <a-steps
    v-model:current="current"
    size="small"
    :direction="direction"
    :class="['custom-step-indicator', { 'only-horizon': props.horizon }]"
  >
    <a-step
      v-for="(step, index) in props.steps"
      :key="index"
      :title="step.title"
      :description="step.description"
      :status="step.status"
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

const current = computed(() => props.current ?? 0);
const direction = ref<'horizontal' | 'vertical'>('horizontal');

const handleResize = () => {
  direction.value = window.innerWidth <= 1439 ? 'horizontal' : 'vertical';
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
  horizon?: boolean;
  current?: number;
}>();
</script>
