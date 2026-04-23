<template>
  <!-- 아이콘만 있을 시 static 추가 (hover, active 효과 비활성화), 아이콘 외 요소가 있을 시 static 비활성화 -->
  <span
    :class="[
      'material-icon',
      props.fill ? 'fill' : '',
      props.size ? props.size : '',
      props.color ? props.color : '',
      props.disabled ? 'disabled' : '',
      props.static ? 'static' : '',
    ]"
  >
    <slot name="name" />
  </span>
</template>

<script lang="ts" setup>
interface Props {
  fill?: boolean;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?:
    | ''
    | 'default'
    | 'subtle'
    | 'on-color'
    | 'brand'
    | 'inverse'
    | 'error'
    | 'warning'
    | 'success'
    | 'info';
  disabled?: boolean;
  static?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  fill: false,
  size: 'md',
  color: '',
  disabled: false,
  static: false,
});
</script>
