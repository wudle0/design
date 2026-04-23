<template>
  <a-modal
    :open="props.open"
    :closable="false"
    :okText="props.okText"
    @ok="props.okAction"
    @cancel="props.okClose"
    :getContainer="false"
    :class="props?.size"
    destroyOnClose
    centered
    :width="
      props?.size === 'small'
        ? 400
        : props?.size === 'medium'
          ? 644
          : props?.size === 'large'
            ? 950
            : props?.size === 'full'
              ? '95vw'
              : 'auto'
    "
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <div class="ant-modal-alert">
      <slot name="alert"></slot>
    </div>
    <div class="ant-modal-box" :class="{ 'is-padding': props.isPadding }">
      <slot name="content"></slot>
    </div>
    <!-- </a-form> -->
    <template #footer>
      <div class="footer-group">
        <a-flex class="group-items items-end">
          <!-- 버튼 2개 사용 시 (default) -->
          <template v-if="!props.singleButton">
            <a-button class="ghost" @click="props.okClose">
              {{ props.cancelText }}
            </a-button>
          </template>
          <slot name="before-add-button"> </slot>
          <!-- danger 버튼 사용 시 okDangerText -->
          <a-button
            :class="
              props.okDangerText
                ? 'secondary danger'
                : props.okSecondaryText
                  ? 'secondary'
                  : 'primary'
            "
            @click="handleOkClick"
          >
            {{ props.okText }}
            <slot name="ok-icon"></slot>
          </a-button>
          <slot name="after-add-button"> </slot>
        </a-flex>
      </div>
    </template>
  </a-modal>
</template>
<script lang="ts" setup>
import { openNotification } from '@/hooks/notification/useNotification';
import { BasicTitle, BasicEllipsisText } from '@/components/layouts';

const props = defineProps({
  open: { type: Boolean, default: false }, // onoff
  okAction: { type: Function, default: undefined }, // action 클릭 시 기능
  okClose: { type: Function, default: () => [{}] }, // 취소 클릭 시 기능
  okText: { type: String, default: '확인' }, // action 버튼 텍스트
  cancelText: { type: String, default: '취소' }, // 취소 버튼 텍스트
  okDangerText: { type: Boolean, default: false }, // okText 버튼 유형 변경 시 (danger)
  okSecondaryText: { type: Boolean, default: false }, // okText 버튼 유형 변경 시 (secondary)
  title: { type: String, default: '제목' }, // 모달 제목
  size: { type: String, default: 'medium' }, // small, medium, large, full
  isBack: { type: Boolean, default: true }, // false 입력 시 모달 완료 뒤에도 뒤로가기 하지 않음
  isPadding: { type: Boolean, default: false },
  notification: {
    type: Object,
    default: {
      title: '항목',
      variant: '생성',
      iconName: 'check_circle',
      status: 'success',
      detailAction: () => {},
    },
  }, // 확인 버튼 notification
  singleButton: { type: Boolean, default: false }, // primary 액션 버튼만 존재할 경우
});

const handleOkClick = () => {
  if (props.okAction) {
    props.okAction();
  } else {
    modalResult();
  }
};

const modalResult = () => {
  if (props.singleButton) {
    props.okClose();
    return;
  }
  const { status, title, variant, detailAction } = props.notification;

  const statusMap: {
    [key: string]: { iconName: string; message: string };
  } = {
    error: { iconName: 'error', message: ' 요청 실패' },
  };

  const config = statusMap[status];
  const variantText = variant ? ` ${variant}` : '';

  if (config) {
    openNotification({
      iconName: config.iconName,
      title: `${title}${variantText}${config.message}`,
    });
  } else {
    openNotification({
      title: `${title}${variantText}${variantText ? ' 요청 성공' : ''}`,
      iconName: 'check_circle',
    });
  }

  props.okClose();
};
</script>
