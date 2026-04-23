<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.small ? 20 : 24"
    :height="props.small ? 20 : 24"
    :viewBox="`0 0 ${props.small ? 20 : 24} ${props.small ? 20 : 24}`"
    fill="none"
    class="custom-icon"
  >
    <title>Container</title>
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
      <template v-if="props.on">
        <path
          :d="
            props.small
              ? 'M11.66 16.67H13.33V15H11.66V16.67Z'
              : 'M14 20H16V18H14V20Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M8.32996 16.67H9.99996V15H8.32996V16.67Z'
              : 'M10 20H12V18H10V20Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M4.99996 16.67H6.66996V15H4.99996V16.67Z'
              : 'M6 20H8V18H6V20Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small ? 'M13.33 15H15V13.33H13.33V15Z' : 'M16 18H18V16H16V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M9.99996 15H11.67V13.33H9.99996V15Z'
              : 'M12 18H14V16H12V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M6.65996 15H8.32996V13.33H6.65996V15Z'
              : 'M8 18H10V16H8V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M3.32996 15H4.99996V13.33H3.32996V15Z'
              : 'M4 18H6V16H4V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M11.66 13.33H13.33V11.66H11.66V13.33Z'
              : 'M14 16H16V14H14V16Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M8.32996 13.33H9.99996V11.66H8.32996V13.33Z'
              : 'M10 16H12V14H10V16Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M4.99996 13.33H6.66996V11.66H4.99996V13.33Z'
              : 'M6 16H8V14H6V16Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M15 16.67H15.83C16.29 16.67 16.67 16.29 16.67 15.83V15H15V16.67Z'
              : 'M18 20H19C19.55 20 20 19.55 20 19V18H18V20Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M15.83 11.67H15V13.34H16.67V12.51C16.67 12.05 16.29 11.67 15.83 11.67Z'
              : 'M19 14H18V16H20V15C20 14.45 19.55 14 19 14Z'
          "
          fill="var(--icon-disabled)"
        />
      </template>
      <path
        :d="
          props.small
            ? 'M11.6667 4.16663C11.6667 5.0871 10.9205 5.83329 10 5.83329M11.6667 4.16663C11.6667 3.24615 10.9205 2.49996 10 2.49996C9.07953 2.49996 8.33333 3.24615 8.33333 4.16663C8.33333 5.0871 9.07953 5.83329 10 5.83329M11.6667 4.16663C11.6667 7.84996 8.68333 10.8333 5 10.8333H4.16667C3.25 10.8333 2.5 11.5833 2.5 12.5V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V12.5C17.5 11.5833 16.75 10.8333 15.8333 10.8333H10.8333M10 5.83329C12.3 5.83329 14.1667 3.96663 14.1667 1.66663'
            : 'M14 5C14 6.10457 13.1046 7 12 7M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7M14 5C14 9.42 10.42 13 6 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13H13M12 7C14.76 7 17 4.76 17 2'
        "
        stroke="var(--icon-default)"
        :stroke-width="props.small ? 1.08 : 1.5"
        stroke-miterlimit="1"
      />
    </g>
    <g v-else mask="url(#mask0_0_2)">
      <template v-if="props.on">
        <path
          :d="
            props.small
              ? 'M11.66 16.67H13.33V15H11.66V16.67Z'
              : 'M18 20H20V18H18V20Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M8.32996 16.67H9.99996V15H8.32996V16.67Z'
              : 'M14 20H16V18H14V20Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M4.99996 16.67H6.66996V15H4.99996V16.67Z'
              : 'M10 20H12V18H10V20Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="props.small ? 'M13.33 15H15V13.33H13.33V15Z' : 'M6 20H8V18H6V20Z'"
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M9.99996 15H11.67V13.33H9.99996V15Z'
              : 'M16 18H18V16H16V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M6.65996 15H8.32996V13.33H6.65996V15Z'
              : 'M12 18H14V16H12V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M3.32996 15H4.99996V13.33H3.32996V15Z'
              : 'M8 18H10V16H8V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M11.66 13.33H13.33V11.66H11.66V13.33Z'
              : 'M4 18H6V16H4V18Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M8.32996 13.33H9.99996V11.66H8.32996V13.33Z'
              : 'M18 16H20V14H18V16Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M4.99996 13.33H6.66996V11.66H4.99996V13.33Z'
              : 'M14 16H16V14H14V16Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M15 15V16.67H15.84C16.29 16.67 16.66 16.3 16.67 15.85V15.01H15V15Z'
              : 'M10 16H12V14H10V16Z'
          "
          fill="var(--icon-disabled)"
        />
        <path
          :d="
            props.small
              ? 'M15.84 11.67H15V13.34H16.67V12.5C16.67 12.05 16.3 11.68 15.84 11.67Z'
              : 'M6 16H8V14H6V16Z'
          "
          fill="var(--icon-disabled)"
        />
      </template>
      <path
        :d="
          props.small
            ? 'M11.6667 4.16663C11.6667 5.0871 10.9205 5.83329 10 5.83329M11.6667 4.16663C11.6667 3.24615 10.9205 2.49996 10 2.49996C9.07953 2.49996 8.33333 3.24615 8.33333 4.16663C8.33333 5.0871 9.07953 5.83329 10 5.83329M11.6667 4.16663C11.6667 7.84996 8.68333 10.8333 5 10.8333H4.16667C3.25 10.8333 2.5 11.5833 2.5 12.5V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V12.5C17.5 11.5833 16.75 10.8333 15.8333 10.8333H10.8333M10 5.83329C12.3 5.83329 14.1667 3.96663 14.1667 1.66663'
            : 'M14 5C14 6.10457 13.1046 7 12 7M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7M14 5C14 9.42 10.42 13 6 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13H13M12 7C14.76 7 17 4.76 17 2'
        "
        stroke="var(--icon-default)"
        :stroke-width="props.small ? 1.5 : 2"
        stroke-miterlimit="1"
      />
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
