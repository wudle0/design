<template>
  <svg
    width="30"
    height="10"
    viewBox="0 0 30 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === 'empty'"
  >
    <rect width="30" height="10" rx="2" fill="var(--border-subtle-03)" />
    <rect x="2" y="2" width="26" height="6" rx="1" fill="transparent" />
  </svg>

  <svg
    width="30"
    height="10"
    viewBox="0 0 30 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === 'hypervisor'"
  >
    <rect width="30" height="10" rx="2" fill="var(--support-green-default)" />
    <circle cx="3" cy="3" r="1" fill="var(--icon-inverse)" />
    <circle cx="7" cy="3" r="1" fill="var(--icon-inverse)" />
    <circle cx="11" cy="3" r="1" fill="var(--icon-inverse)" />
    <circle cx="15" cy="3" r="1" fill="var(--icon-inverse)" />
    <circle cx="19" cy="3" r="1" fill="var(--icon-inverse)" />
    <circle cx="23" cy="3" r="1" fill="var(--icon-inverse)" />
    <circle cx="27" cy="3" r="1" fill="var(--icon-inverse)" />
    <circle cx="3" cy="7" r="1" fill="var(--icon-inverse)" />
    <circle cx="7" cy="7" r="1" fill="var(--icon-inverse)" />
    <circle cx="11" cy="7" r="1" fill="var(--icon-inverse)" />
    <circle cx="15" cy="7" r="1" fill="var(--icon-inverse)" />
    <circle cx="19" cy="7" r="1" fill="var(--icon-inverse)" />
    <circle cx="23" cy="7" r="1" fill="var(--icon-inverse)" />
    <circle cx="27" cy="7" r="1" fill="var(--icon-inverse)" />
  </svg>

  <svg
    width="30"
    height="10"
    viewBox="0 0 30 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === 'bareMetal'"
  >
    <rect width="30" height="10" rx="2" fill="var(--support-green-default)" />
    <path
      d="M2 4C2 3.72386 2.22386 3.5 2.5 3.5H4V4.5H2.5C2.22386 4.5 2 4.27614 2 4Z"
      fill="var(--icon-inverse)"
    />
    <path
      d="M2 6C2 5.72386 2.22386 5.5 2.5 5.5H4V6.5H2.5C2.22386 6.5 2 6.27614 2 6Z"
      fill="var(--icon-inverse)"
    />
    <rect x="4" y="2" width="22" height="6" rx="1" fill="var(--icon-inverse)" />
    <path d="M6 4H24V6H6V4Z" fill="#1E8A1E" />
    <path
      d="M26 3.5H27.5C27.7761 3.5 28 3.72386 28 4C28 4.27614 27.7761 4.5 27.5 4.5H26V3.5Z"
      fill="var(--icon-inverse)"
    />
    <path
      d="M26 5.5H27.5C27.7761 5.5 28 5.72386 28 6C28 6.27614 27.7761 6.5 27.5 6.5H26V5.5Z"
      fill="var(--icon-inverse)"
    />
  </svg>

  <svg
    width="30"
    height="10"
    viewBox="0 0 30 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === 'storage'"
  >
    <rect
      width="29.99"
      height="10"
      rx="2"
      fill="var(--support-green-default)"
    />
    <path
      d="M6.01 2C6.01 2 6.01 2 6 2C6 2 6 2 5.99 2C5.98 2 5.99 2 5.98 2H4.03C4.03 2 4.03 2 4.02 2C4.01 2 4.02 2 4.01 2C4.01 2 4.01 2 4 2C2.89 2 2 3.34 2 5C2 6.66 2.89 8 3.99 8C3.99 8 3.99 8 4 8C4 8 4 8 4.01 8C4.02 8 4.01 8 4.02 8H5.97C5.97 8 5.97 8 5.98 8C5.99 8 5.98 8 5.99 8C5.99 8 5.99 8 6 8C7.1 8 7.99 6.66 7.99 5C7.99 3.34 7.1 2 6 2H6.01ZM4.99 5C4.99 5 4.99 4.95 4.99 4.92C4.99 4.95 4.99 4.97 4.99 5Z"
      fill="var(--icon-inverse)"
    />
    <path
      d="M9.99999 2C9.99999 2 9.99999 2 9.98999 2L8.00999 2C8.00999 2 8.00999 2 7.99999 2C7.98999 2 7.99999 2 7.98999 2C8.60999 2.73 8.99999 3.79 8.99999 5C8.99999 6.21 8.60999 7.27 7.98999 8C7.98999 8 7.98999 8 7.99999 8C8.00999 8 7.99999 8 8.00999 8H9.98999C9.98999 8 9.98999 8 9.99999 8C11.1 8 11.99 6.66 11.99 5C11.99 3.34 11.1 2 9.99999 2Z"
      fill="var(--icon-inverse)"
    />
    <path
      d="M14 2C14 2 14 2 13.99 2L12.01 2C12.01 2 12.01 2 12 2C11.99 2 12 2 11.99 2C12.61 2.73 13 3.79 13 5C13 6.21 12.61 7.27 11.99 8C11.99 8 11.99 8 12 8C12.01 8 12 8 12.01 8H13.99C13.99 8 13.99 8 14 8C15.1 8 15.99 6.66 15.99 5C15.99 3.34 15.1 2 14 2Z"
      fill="var(--icon-inverse)"
    />
    <path
      d="M18 2C18 2 18 2 17.99 2L16.01 2C16.01 2 16.01 2 16 2C15.99 2 16 2 15.99 2C16.61 2.73 17 3.79 17 5C17 6.21 16.61 7.27 15.99 8C15.99 8 15.99 8 16 8C16.01 8 16 8 16.01 8H17.99C17.99 8 17.99 8 18 8C19.1 8 19.99 6.66 19.99 5C19.99 3.34 19.1 2 18 2Z"
      fill="var(--icon-inverse)"
    />
    <path
      d="M22 2C22 2 22 2 21.99 2L20.01 2C20.01 2 20.01 2 20 2C19.99 2 20 2 19.99 2C20.61 2.73 21 3.79 21 5C21 6.21 20.61 7.27 19.99 8C19.99 8 19.99 8 20 8C20.01 8 20 8 20.01 8H21.99C21.99 8 21.99 8 22 8C23.1 8 23.99 6.66 23.99 5C23.99 3.34 23.1 2 22 2Z"
      fill="var(--icon-inverse)"
    />
    <path
      d="M26 2C26 2 26 2 25.99 2L24.01 2C24.01 2 24.01 2 24 2C23.99 2 24 2 23.99 2C24.61 2.73 25 3.79 25 5C25 6.21 24.61 7.27 23.99 8C23.99 8 23.99 8 24 8C24.01 8 24 8 24.01 8H25.99C25.99 8 25.99 8 26 8C27.1 8 27.99 6.66 27.99 5C27.99 3.34 27.1 2 26 2Z"
      fill="var(--icon-inverse)"
    />
  </svg>

  <svg
    width="30"
    height="10"
    viewBox="0 0 30 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === 'switch'"
  >
    <rect width="30" height="10" rx="2" fill="var(--support-green-default)" />
    <rect x="3.5" y="2" width="2" height="1" fill="var(--icon-inverse)" />
    <rect x="2" y="3" width="5" height="5" fill="var(--icon-inverse)" />
    <rect x="10.5" y="2" width="2" height="1" fill="var(--icon-inverse)" />
    <rect x="9" y="3" width="5" height="5" fill="var(--icon-inverse)" />
    <rect x="17.5" y="2" width="2" height="1" fill="var(--icon-inverse)" />
    <rect x="16" y="3" width="5" height="5" fill="var(--icon-inverse)" />
    <rect x="24.5" y="2" width="2" height="1" fill="var(--icon-inverse)" />
    <rect x="23" y="3" width="5" height="5" fill="var(--icon-inverse)" />
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  type: 'empty' | 'hypervisor' | 'bareMetal' | 'storage' | 'switch';
}
const props = withDefaults(defineProps<Props>(), {
  type: 'empty',
});
</script>
