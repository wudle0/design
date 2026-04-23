<template>
  <a-alert
    v-bind="alertProps"
    :message="props?.title"
    :show-icon="props?.showIcon"
    :closable="actualClosable"
    :banner="props?.banner"
    :class="[
      { 'ant-alert-default': props.variant === 'default' },
      { vertical },
    ]"
  >
    <template #icon v-if="props.variant !== 'default'">
      <Icon size="md" fill>
        <template #name>
          {{ props.variant === 'success' ? 'check_circle' : props.variant }}
        </template>
      </Icon>
    </template>

    <template #description v-if="props?.description">
      <template v-if="Array.isArray(props.description)">
        <ul class="default-list">
          <li v-for="(desc, index) in props.description" :key="index">
            <span v-html="desc"></span>
          </li>
        </ul>
      </template>
      <template v-else>
        <span v-html="props.description"></span>
      </template>
      <slot name="button"> </slot>
      <!-- <template v-if="props?.buttonFirst || props.buttonSecond">
        <a-flex :gap="8">
          <a-button
            class="secondary small"
            @click="props?.buttonFirstAction"
            v-if="props?.buttonFirst !== 'button01'"
          >
            {{ props?.buttonFirst }}
          </a-button>
          <a-button
            class="secondary small"
            @click="props?.buttonSecondAction"
            v-if="props?.buttonSecond !== 'button02'"
          >
            {{ props?.buttonSecond }}
          </a-button>
        </a-flex>
      </template>-->
    </template>
    <template #closeIcon>
      <Icon size="md" color="default">
        <template #name>close</template>
      </Icon>
    </template>
  </a-alert>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Icon } from '@/components/icons';

interface Props {
  variant?: string;
  title?: string;
  description: string | string[];
  // buttonFirst?: string;
  // buttonFirstAction?: () => void;
  // buttonSecond?: string;
  // buttonSecondAction?: () => void;
  showIcon?: boolean;
  banner?: boolean;
  vertical?: boolean;
  closable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  title: '',
  description: 'description',
  // buttonFirst: 'button01',
  // buttonFirstAction: () => {},
  // buttonSecond: 'button02',
  // buttonSecondAction: () => {},
  showIcon: true,
  banner: false,
  vertical: false,
  closable: undefined, // undefined로 명시적 설정
});

const alertProps = computed(() => {
  const base: Record<string, any> = {};

  if (props.variant !== 'default') {
    base.type = props.variant;
    base.showIcon = props.showIcon;
  } else {
    base.showIcon = false;
  }

  return base;
});

// closable의 실제 값을 계산하는 computed property
const actualClosable = computed(() => {
  // closable이 명시적으로 설정된 경우 (true 또는 false)
  if (props.closable !== undefined) {
    return props.closable;
  }
  // closable이 undefined인 경우 banner 값에 따라 결정
  return props.banner;
});
</script>
