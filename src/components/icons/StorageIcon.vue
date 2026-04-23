<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.small ? 20 : 24"
    :height="props.small ? 20 : 24"
    :viewBox="`0 0 ${props.small ? 20 : 24} ${props.small ? 20 : 24}`"
    fill="none"
    class="custom-icon"
  >
    <title>Storage</title>
    <mask
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="props.small ? 20 : 24"
      :height="props.small ? 20 : 24"
    >
      <rect
        :width="props.small ? 20 : 24"
        :height="props.small ? 20 : 24"
        fill="var(--palette-neutral-100)"
      />
    </mask>
    <g v-if="props.light" mask="url(#mask0_0_1)">
      <path
        :d="
          props.small
            ? 'M16.6667 6.66667C16.6667 6.66667 16.6667 4.16667 14.1667 4.16667H8.75833C8.15833 4.16667 7.59167 3.84167 7.30833 3.30833C6.86667 2.5 5.84167 2.5 5.84167 2.5H4.175C4.175 2.5 2.5 2.5 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H14.4667C15.2583 17.5 15.9417 16.9417 16.1 16.1583L17.5 9.16667C17.5 9.16667 17.5 8.33333 16.6667 8.33333H10C8.33333 8.33333 5.83333 8.33333 5 10C4.16667 11.6667 5.83333 13.3333 6.66667 11.6667C7.5 10 7.5 5.83333 7.5 5.83333'
            : 'M20 8C20 8 20 5 17 5H10.51C9.79 5 9.11 4.61 8.77 3.97C8.24 3 7.01 3 7.01 3H5.01C5.01 3 3 3 3 5V19C3 20.1 3.9 21 5 21H17.36C18.31 21 19.13 20.33 19.32 19.39L21 11C21 11 21 10 20 10H12C10 10 7 10 6 12C5 14 7 16 8 14C9 12 9 7 9 7'
        "
        stroke="var(--icon-default)"
        :stroke-width="props.small ? 1.08 : 1.5"
        stroke-linejoin="round"
      />
      <template v-if="props.on">
        <path
          :d="
            props.small
              ? 'M11 1.95996H9.5V7.78996H11V1.95996Z'
              : 'M13 2.25H11V9.25H13V2.25Z'
          "
          fill="var(--icon-brand-default)"
        />
        <path
          :d="
            props.small
              ? 'M12.5 1.95996H11V7.78996H12.5V1.95996Z'
              : 'M15 2.25H13V9.25H15V2.25Z'
          "
          fill="var(--support-red-default)"
        />
        <path
          :d="
            props.small
              ? 'M14 1.95996H12.5V7.78996H14V1.95996Z'
              : 'M17 2.25H15V9.25H17V2.25Z'
          "
          fill="var(--support-orange-default)"
        />
        <path
          :d="
            props.small
              ? 'M15.5 1.95996H14V7.78996H15.5V1.95996Z'
              : 'M19 2.25H17V9.25H19V2.25Z'
          "
          fill="var(--icon-brand-selected)"
        />
      </template>
    </g>
    <g v-else mask="url(#mask0_0_2)">
      <path
        :d="
          props.small
            ? 'M16.6667 6.66667C16.6667 6.66667 16.6667 4.16667 14.1667 4.16667H8.75833C8.15833 4.16667 7.59167 3.84167 7.30833 3.30833C6.86667 2.5 5.84167 2.5 5.84167 2.5H4.175C4.175 2.5 2.5 2.5 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H14.4667C15.2583 17.5 15.9417 16.9417 16.1 16.1583L17.5 9.16667C17.5 9.16667 17.5 8.33333 16.6667 8.33333H10C8.33333 8.33333 5.83333 8.33333 5 10C4.16667 11.6667 5.83333 13.3333 6.66667 11.6667C7.5 10 7.5 5.83333 7.5 5.83333'
            : 'M20 8C20 8 20 5 17 5H10.51C9.79 5 9.11 4.61 8.77 3.97C8.24 3 7.01 3 7.01 3H5.01C5.01 3 3 3 3 5V19C3 20.1 3.9 21 5 21H17.36C18.31 21 19.13 20.33 19.32 19.39L21 11C21 11 21 10 20 10H12C10 10 7 10 6 12C5 14 7 16 8 14C9 12 9 7 9 7'
        "
        stroke="var(--icon-default)"
        :stroke-width="props.small ? 1.5 : 2"
        stroke-linejoin="round"
      />
      <template v-if="props.on">
        <path
          :d="props.small ? 'M11 1.75H9.5V7.58H11V1.75Z' : 'M13 2H11V9H13V2Z'"
          fill="var(--icon-brand-default)"
        />
        <path
          :d="
            props.small ? 'M12.5 1.75H11V7.58H12.5V1.75Z' : 'M15 2H13V9H15V2Z'
          "
          fill="var(--support-red-default)"
        />
        <path
          :d="props.small ? 'M14 1.75H12.5V7.58H14V1.75Z' : 'M17 2H15V9H17V2Z'"
          fill="var(--support-orange-default)"
        />
        <path
          :d="
            props.small ? 'M15.5 1.75H14V7.58H15.5V1.75Z' : 'M19 2H17V9H19V2Z'
          "
          fill="var(--icon-brand-selected)"
        />
      </template>
    </g>
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  light?: boolean;
  on?: boolean;
  small?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  light: false,
  on: false,
  small: false,
});
</script>
