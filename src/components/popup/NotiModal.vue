<template>
  <Modal
    v-if="(props.info.count && props.info.count > 1) || props.showInput"
    :open="props.open"
    :ok-close="props.okClose"
    :ok-action="notificationOpen"
    size="small"
    :ok-text="props.okText || props.info.variant"
    :cancel-text="props.okCancelText"
    :suffix="props.suffix"
    :notification="props.info"
    :ok-danger-text="props.okDangerText"
  >
    <template #ok-icon>
      <slot name="ok-icon"></slot>
    </template>
    <template #title>
      <BasicTitle
        level="modal"
        :title="props.info.title + ' ' + props.info.variant"
      />
    </template>
    <template #content>
      <div class="modal-content">
        <a-flex vertical gap="16">
          <a-flex vertical gap="8">
            <p class="noti-modal-title">
              <template v-if="props.info.count && props.info.count > 1">
                {{ props.info.variant }} {{ props.info.target }} 외
                {{ props.info.count - 1 }}개를 삭제하시겠습니까?
              </template>
              <template v-else>
                {{ props.info.title
                }}{{ props.info.target ? ' ' + props.info.target : ''
                }}{{ props.showParticle !== false ? '을(를)' : '' }}
                {{ props.info.variant }}하시겠습니까?
              </template>
            </p>
            <p class="noti-modal-desc">
              삭제하시려면 하단 필드에 '삭제'를 입력해 주세요.
            </p>
          </a-flex>
          <a-form :model="formState" autocomplete="off" layout="vertical">
            <a-form-item :rules="[{ required: true }]" validate-status="error">
              <template #help>
                <a-flex gap="4">
                  <Icon size="xs" color="error" fill>
                    <template #name>info</template>
                  </Icon>
                  필드값을 정확히 입력해 주세요.</a-flex
                >
              </template>
              <a-input
                v-model:value="formState.name"
                placeholder="삭제"
                type="text"
              >
              </a-input>
            </a-form-item>
          </a-form>
        </a-flex>
      </div>
    </template>
  </Modal>

  <Modal
    v-else
    :open="props.open"
    :ok-close="props.okClose"
    :ok-action="notificationOpen"
    size="small"
    :ok-text="props.okText || props.info.variant"
    :cancel-text="props.okCancelText"
    :suffix="props.suffix"
    :notification="props.info"
    :ok-danger-text="props.okDangerText"
  >
    <template #ok-icon>
      <slot name="ok-icon"></slot>
    </template>
    <template #title>
      <BasicTitle
        level="modal"
        :title="
          props.alarm
            ? '알림'
            : props.info.variant === '확인'
              ? props.info.title
              : props.info.desc
                ? props.info.title
                : props.info.title + ' ' + props.info.variant
        "
      />
    </template>
    <template #content>
      <div class="modal-content">
        <div class="info-modal-content">
          <!-- 메인 설명 영역 -->
          <div class="noti-modal-desc-wrap">
            <a-flex gap="8" align="center">
              <Icon
                v-if="getDescIcon() && getDescText()"
                :color="getDescIconType()"
                size="md"
                fill
              >
                <template #name>
                  {{ getDescIconName() }}
                </template>
              </Icon>
              <p
                v-if="getDescText()"
                :class="[
                  'noti-modal-desc',
                  { 'noti-modal-desc-bold': isMainDesc() },
                ]"
              >
                {{ getDescText() }}
              </p>
            </a-flex>
          </div>

          <!-- 서브 설명 영역 -->
          <div v-if="getSubDescText()" class="noti-modal-sub-desc-wrap">
            <a-flex gap="8" align="center">
              <Icon
                v-if="getSubDescIcon()"
                :color="getSubDescIconType()"
                size="sm"
                fill
              >
                <template #name>
                  {{ getSubDescIconName() }}
                </template>
              </Icon>
              <p class="noti-modal-sub-desc">
                {{ getSubDescText() }}
              </p>
            </a-flex>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Modal } from '@/components/popup';
import { BasicTitle } from '@/components/layouts';
import { Icon } from '@/components/icons';
import { useNotification } from '@/hooks/modal/useNoti';

/**
 * 노드 종료 모달
 */
const props = defineProps({
  open: { type: Boolean, default: false },
  okClose: { type: Function, default: () => {} },
  okAction: { type: Function, default: null }, // 확인 버튼 클릭 시 추가 액션
  info: { type: Object, default: () => {} },
  suffix: { type: Boolean, default: false },
  okDangerText: { type: Boolean, default: false },
  showInput: { type: Boolean, default: false },
  showParticle: { type: Boolean, default: true },
  okText: { type: String, default: '' }, // 사용자가 지정할 경우 버튼명 커스텀 가능 (예 : 확인
  okCancelText: { type: String, default: '취소' }, // 취소 버튼 텍스트
  iconType: { type: String, default: '' }, // 기존 아이콘 타입 (하위 호환성)
  messageIconType: { type: String, default: '' }, // 메인 메시지용 아이콘 타입
  subMessageIconType: { type: String, default: '' }, // 서브 메시지용 아이콘 타입
  titleBold: { type: Boolean, default: true }, // 제목 p 태그의 font-weight 제어 (기본값: true - semi-bold)
  alarm: { type: Boolean, default: false }, // 타이틀 '알림' 여부
  replace: { type: Boolean, default: false }, // 스텝이 여러개인 경우 history back 대신 replace 사용
});

const formState = reactive({
  name: '',
});

// 메인 설명 관련 함수들
const getDescText = () => {
  if (props.info.content) {
    // content가 객체인 경우
    if (typeof props.info.content === 'object') {
      // message가 있으면 desc 반환
      if (props.info.content.desc) {
        return props.info.content.desc;
      }
      // message가 없고 subMessage가 있으면 subDesc 반환
      if (props.info.content.subDesc) {
        return props.info.content.subDesc;
      }
    }
    // content가 함수인 경우
    if (typeof props.info.content === 'function') {
      return props.info.content();
    }
    // content가 문자열인 경우
    return props.info.content;
  }

  // content가 없을 때만 기본 메시지 생성
  if (!props.info.content) {
    let text = props.info.title;
    if (props.info.target) {
      text += ' ' + props.info.target;
    }
    if (props.showParticle !== false) {
      text += '을(를)';
    }
    if (props.info.variant) {
      text += ' ' + props.info.variant + '하시겠습니까?';
    }
    return text;
  }

  return '';
};

const getDescIcon = () => {
  // content 객체에 icon이 있는 경우
  if (
    props.info.content &&
    typeof props.info.content === 'object' &&
    props.info.content.icon
  ) {
    return props.info.content.icon;
  }
  // 기존 방식
  return props.info.messageIcon || props.messageIconType || props.iconType;
};

const getDescIconType = () => {
  const icon = getDescIcon();
  if (typeof icon === 'object' && icon.type) {
    return icon.type;
  }
  return icon;
};

const getDescIconName = () => {
  const iconType = getDescIconType();
  return iconType === 'success' ? 'check_circle' : iconType;
};

// 메인 설명인지 확인하는 함수 (bold 처리 여부 결정)
const isMainDesc = () => {
  if (props.info.content && typeof props.info.content === 'object') {
    // content.message가 있으면 bold 처리
    return !!props.info.content.desc;
  }
  // content가 없으면 기본 알림 모달 (bold 처리 안함)
  return false;
};

// 서브 설명 관련 함수들
const getSubDescText = () => {
  // content 객체 안에 subMessage가 있고, message도 있는 경우에만 서브 메시지 표시
  if (
    props.info.content &&
    typeof props.info.content === 'object' &&
    props.info.content.subDesc &&
    props.info.content.desc
  ) {
    const subMsg = props.info.content.subDesc;
    if (typeof subMsg === 'object' && subMsg.desc) {
      return subMsg.desc;
    }
    if (typeof subMsg === 'function') {
      return subMsg();
    }
    return subMsg;
  }

  // 기존 방식
  if (props.info.subDesc) {
    if (typeof props.info.subDesc === 'object' && props.info.subDesc.desc) {
      return props.info.subDesc.desc;
    }
    if (typeof props.info.subDesc === 'function') {
      return props.info.subDesc();
    }
    return props.info.subDesc;
  }
  return '';
};

const getSubDescIcon = () => {
  // content 객체에 subDesc icon이 있는 경우
  if (
    props.info.content &&
    typeof props.info.content === 'object' &&
    props.info.content.subDesc &&
    typeof props.info.content.subDesc === 'object' &&
    props.info.content.subDesc.icon
  ) {
    return props.info.content.subDesc.icon;
  }

  // 기존 방식
  return props.info.subMessageIcon || props.subMessageIconType;
};

const getSubDescIconType = () => {
  const icon = getSubDescIcon();
  if (typeof icon === 'object' && icon.type) {
    return icon.type;
  }
  return icon;
};

const getSubDescIconName = () => {
  const iconType = getSubDescIconType();
  return iconType === 'success' ? 'check_circle' : iconType;
};

// 알림
const { notificationOpen } = useNotification(
  props.info.title + ' ' + props.info.variant,
  true,
  props.replace,
  props.okAction
);
</script>
