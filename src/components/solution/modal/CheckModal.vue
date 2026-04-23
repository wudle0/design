<template>
  <a-modal
    :open="props.open"
    :closable="false"
    :getContainer="false"
    :class="props.size"
    :ok-text="props.okText || props.info.variant"
    destroyOnClose
    centered
    @ok="props.okAction"
    @cancel="props.okClose"
    :width="
      props.size === 'small'
        ? 400
        : props.size === 'medium'
          ? 644
          : props.size === 'large'
            ? 950
            : props.size === 'full'
              ? '95vw'
              : 'auto'
    "
  >
    <template #title>
      <BasicTitle
        level="modal"
        :title="props.info.title + ' ' + props.info.variant"
      />
    </template>

    <div class="ant-modal-alert">
      <slot name="alert"></slot>
    </div>

    <div class="ant-modal-box">
      <div class="modal-content">
        <a-flex vertical gap="16">
          <a-flex vertical gap="8">
            <p class="check-modal-title">
              선택한 항목을 {{ props.info.variant }}하시겠습니까?
            </p>
          </a-flex>
          <a-flex class="check-modal-content-area" :gap="6" vertical>
            <a-flex class="check-modal-list-box">
              <span class="check-modal-count"> 총 {{ targetCount }}개 </span>
              <a-card class="check-modal-list">
                <ul class="default-list">
                  <li v-for="(item, index) in props.info.target" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </a-card>
              <div v-if="$slots.extra" class="check-modal-extra-content">
                <slot name="extra"></slot>
              </div>
              <a-checkbox v-model:checked="formState.checked"
                >확인했습니다.</a-checkbox
              >
            </a-flex>
            <template v-if="props.message">
              <p
                class="check-modal-message"
                :class="{ error: msg.status === 'error' }"
                v-for="(msg, index) in props.message"
                :key="index"
              >
                <Icon size="xs" :color="msg.status" fill v-if="!msg.hideIcon">
                  <template #name>{{
                    msg.status === 'error' ? 'error' : 'info'
                  }}</template>
                </Icon>
                {{ msg.text }}
              </p>
            </template>
          </a-flex>
        </a-flex>
      </div>
    </div>

    <template #footer>
      <div class="footer-group">
        <a-flex class="group-items items-end">
          <a-button class="ghost" @click="handleCancel">
            {{ props.cancelText }}
          </a-button>
          <a-button
            class="secondary danger"
            @click="handleOkClick"
            :disabled="!formState.checked"
          >
            {{ props.okText || props.info.variant }}
          </a-button>
        </a-flex>
      </div>
    </template>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, watch } from 'vue';
import { BasicTitle } from '@/components/layouts';
import { Icon } from '@/components/icons';
import { openNotification } from '@/hooks/notification/useNotification';

const formState = reactive({
  checked: false,
});

const props = defineProps({
  open: Boolean,
  okClose: Function,
  okAction: Function,
  cancelText: { type: String, default: '취소' },
  info: { type: Object, default: () => ({}) },
  size: { type: String, default: 'small' },
  message: {
    type: Array as PropType<
      {
        text: string;
        status: 'default' | 'error';
        hideIcon: boolean;
      }[]
    >,
    default: () => [],
  },
  notification: {
    type: Object,
    default: (rawProps: any) => ({
      title: rawProps.info?.title || '항목',
      variant: rawProps.info?.variant || '생성',
      iconName: 'check_circle',
      status: 'success',
      detailAction: () => {},
    }),
  },
  okText: { type: String, default: '' }, // 사용자가 지정할 경우 버튼명 커스텀 가능 (예 : 확인
});

const targetCount = computed(() => props.info.target?.length || 0);

watch(
  () => props.open,
  (newValue) => {
    if (newValue) {
      formState.checked = false;
    }
  }
);

const handleCancel = () => {
  props.okClose?.(false);
};

const modalResult = () => {
  const { status, title, variant, detailAction } = props.notification;

  const statusMap: {
    [key: string]: { iconName: string; message: string };
  } = {
    error: { iconName: 'error', message: ' 요청 실패' },
  };

  const config = statusMap[status];

  if (config) {
    openNotification({
      iconName: config.iconName,
      title: `${title} ${variant}${config.message}`,
    });
  } else {
    openNotification({
      title: `${title} ${variant} 요청 성공`,
      iconName: 'check_circle',
    });
  }

  props.okClose?.();
};

const handleOkClick = () => {
  if (props.okAction) {
    props.okAction();
  } else {
    modalResult();
  }
};
</script>

<style scoped>
.check-modal-extra-content {
  margin-block: 24px 8px;
}
</style>
