<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    class="custom-icon"
  >
    <title>Logo</title>
    <path
      d="M8.78328 14.7828C8.78328 14.7828 2.99282 15.8951 2.0921 14.0974C1.96713 13.8481 1.97072 13.5539 2.0885 13.3016C2.51052 12.3966 4.27565 10.8684 9.24163 15.2496L12.1059 18.2751C12.1059 18.2751 13.7397 20.4625 13.6447 17.2379C13.5496 14.0132 13.2925 13.6283 13.2925 13.6283L8.78328 14.7828Z"
      :fill="props.disabled ? 'var(--icon-disabled)' : 'var(--logo-default)'"
    />
    <path
      d="M17.7483 12.8592L13.2925 13.6283C13.2925 13.6283 12.6022 8.98427 12.5212 7.48463C12.4397 5.98499 12.3587 3.47712 14.3765 6.23735C16.3944 8.99757 17.7351 12.9124 17.8613 13.151C17.9878 13.3901 19.1253 15.1945 21.1835 14.9292C21.1835 14.9292 22.6823 14.7524 21.6167 13.779C20.5515 12.8063 19.531 12.7531 17.7483 12.8592Z"
      :fill="props.disabled ? 'var(--icon-disabled)' : 'var(--logo-default)'"
    />
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>
