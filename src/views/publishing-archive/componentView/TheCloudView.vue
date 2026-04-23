<template>
  <Transition
    name="cloudview-slide-up"
    @after-enter="handleTransitionEnd"
    @after-leave="handleTransitionEnd"
  >
    <Teleport v-if="visible && hasTarget" to=".main-panel">
      <div class="cloudview-wrap" :style="{ height: wrapHeight + 'px' }">
        <a-flex class="cloudview-box" vertical :class="{ active: isActive }">
          <a-flex vertical>
            <div class="cloudview-bar" @mousedown="onMouseDown" />
            <div class="cloudview-title">
              <a-flex gap="8" align="center" class="cloudview-title-text">
                <CloudViewIcon />
                <span>Cloud View</span>
                <a-tooltip overlayClassName="plain" v-if="props.tooltip">
                  <template #title>
                    {{ props.tooltip }}
                  </template>
                  <Icon size="md" color="default">
                    <template #name>help</template>
                  </Icon>
                </a-tooltip>
              </a-flex>
            </div>
            <div class="cloudview-btns">
              <a-flex gap="8" align="center">
                <a-button class="secondary">
                  <Icon size="md" color="default" fill>
                    <template #name>download</template>
                  </Icon>
                  다운로드
                </a-button>
                <a-button class="secondary">
                  <Icon size="md" color="default" fill>
                    <template #name>refresh</template>
                  </Icon>
                  재연결
                </a-button>
              </a-flex>
              <div class="cloudview-btns-close">
                <a-button class="ghost" @click="close">
                  <Icon size="md" color="default" fill>
                    <template #name>close</template>
                  </Icon>
                </a-button>
              </div>
            </div>
          </a-flex>
          <a-tabs class="cloudview-prompt">
            <a-tab-pane key="1">
              <template #tab> 프롬프트 뷰 </template>
              <div class="section-header" v-if="props.alert">
                <Alert
                  :variant="props?.alert?.status"
                  :title="props?.alert?.title"
                  :description="props?.alert?.description"
                  showIcon
                  banner
                />
              </div>
              <div class="section-body">
                <span>
                  <slot name="content"></slot>
                </span>
              </div>
            </a-tab-pane>
          </a-tabs>
        </a-flex>
      </div>
    </Teleport>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { Icon, CloudViewIcon } from '@/components/icons';
import { Alert } from '@/components/alert';

interface AlertContent {
  title?: string;
  text?: string;
  status?: string;
  description?: string;
}

interface Props {
  alert?: AlertContent;
  onoff?: boolean;
  tooltip?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alert: () => ({
    title: '',
    text: '',
    status: '',
  }),
  onoff: false,
  tooltip: '',
});
const emit = defineEmits<{
  (e: 'update:onoff', value: boolean): void;
}>();

const visible = computed({
  get: () => props.onoff,
  set: (val) => emit('update:onoff', val),
});

const hasTarget = ref(false);

onMounted(() => {
  hasTarget.value = !!document.querySelector('.main-panel');
  // main-panel이 나중에라도 생기면 감지
  const observer = new MutationObserver(() => {
    hasTarget.value = !!document.querySelector('.main-panel');
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

const open = () => {
  visible.value = true;
};

const close = () => {
  visible.value = false;
};

defineExpose({ open, close });

// 크기 조절 기능
const wrapHeight = ref(400); // 초기 높이(px)
const startY = ref(0);
const startHeight = ref(0);
const isActive = ref(false);

const onMouseDown = (e: MouseEvent) => {
  isActive.value = true;
  startY.value = e.clientY;
  startHeight.value = wrapHeight.value;

  document.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseup', onMouseUp, { passive: true });
};

const onMouseMove = (e: MouseEvent) => {
  const deltaY = startY.value - e.clientY;
  const newHeight = startHeight.value + deltaY;

  const maxHeight = window.innerHeight - 100;
  const minHeight = 56;

  wrapHeight.value = Math.min(Math.max(minHeight, newHeight), maxHeight);
};

const onMouseUp = () => {
  isActive.value = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
};

onMounted(() => {
  hasTarget.value = !!document.querySelector('.main-panel');
});

const isCloudViewOpen = ref(true); // 항상 열려있도록 true
const isCloudViewCloseTransEnd = ref(true);

const handleTransitionEnd = () => {
  if (!isCloudViewOpen.value) {
    isCloudViewCloseTransEnd.value = true;
  } else {
    isCloudViewCloseTransEnd.value = false;
  }
};
</script>
