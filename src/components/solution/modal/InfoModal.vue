<template>
  <!-- 알림 및 링크 연결을 위한 안내 모달 (notification 없음) -->
  <a-modal
    :open="props.open"
    :closable="false"
    :getContainer="false"
    :class="props.size"
    destroyOnClose
    centered
    :okText="props.okText"
    :ok-danger-text="props.okDangerText"
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
      <BasicTitle level="modal" title="알림" />
    </template>

    <div class="ant-modal-alert">
      <slot name="alert"></slot>
    </div>

    <div class="ant-modal-box">
      <div class="modal-content">
        <a-flex vertical gap="16">
          <a-flex vertical gap="8">
            <p class="noti-modal-title">
              <a-flex gap="8" align="center">
                <Icon
                  size="md"
                  :color="props.info.color || 'error'"
                  fill
                  v-if="props.info.icon"
                >
                  <template #name>{{ props.info.icon || 'info' }}</template>
                </Icon>
                {{ props.info.title }}
              </a-flex>
            </p>
            <p class="noti-modal-desc">
              {{ props.info.variant }}
            </p>
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
          <template v-if="props.info.path">
            <router-link :to="props.info.path">
              <a-button class="secondary">
                {{ props.okText }}
                <Icon size="md" color="default" fill v-if="props.okIcon">
                  <template #name>{{ props.okIcon }}</template>
                </Icon>
              </a-button>
            </router-link>
          </template>
          <template v-else>
            <a-button
              :class="{
                'secondary danger': props.okDangerText,
                primary: props.okPrimaryText,
                secondary: !props.okDangerText && !props.okPrimaryText,
              }"
              @click="handleOkClick"
            >
              {{ props.okText }}
              <Icon size="md" color="default" fill v-if="props.okIcon">
                <template #name>{{ props.okIcon }}</template>
              </Icon>
            </a-button>
          </template>
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
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  open: Boolean,
  okClose: Function,
  okAction: { type: Function, default: undefined }, // 확인 버튼 클릭 시 추가 액션
  okText: { type: String, default: '확인' },
  cancelText: { type: String, default: '취소' },
  info: { type: Object, default: () => ({}) },
  size: { type: String, default: 'small' },
  okDangerText: { type: Boolean, default: false },
  okPrimaryText: { type: Boolean, default: false },
  okIcon: { type: String, default: null }, // 확인 버튼 내 아이콘 필요 시
});

const handleCancel = () => {
  props.okClose(false);
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

  props.okClose();
};

const handleOkClick = () => {
  if (props.okAction) {
    props.okAction();
  } else {
    modalResult();
  }
};
</script>
