<template>
  <div class="breadcrumb-wrap" ref="wrapRef">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in visibleRoutes" :key="index">
        <template v-if="'type' in item">
          <a-dropdown :trigger="['click']">
            <span class="more-depth" @click.stop></span>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="(hiddenItem, i) in hiddenRoutes" :key="i">
                  <router-link :to="hiddenItem.path">{{
                    hiddenItem.name
                  }}</router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>

        <template v-else-if="index === visibleRoutes.length - 1">
          <span class="selected-item">{{ item.name }}</span>
        </template>

        <template v-else>
          <router-link v-if="!item.disabled" :to="item.path" class="linked-item"
            >{{ item.name }}
          </router-link>
          <span v-else class="linked-item disabled">{{ item.name }} </span>
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from 'vue';

type RealRoute = { path: string; name: string; disabled?: boolean };
type EllipsisItem = { type: 'ellipsis' };
type BreadcrumbItem = RealRoute | EllipsisItem;

const props = defineProps<{ route: RealRoute[] }>();

/**
 * depth 줄임 관련
 */
const wrapRef = ref<HTMLElement | null>(null);
const isOverflowing = ref(false);
const checkOverflow = () => {
  if (!wrapRef.value) return;

  const wrapWidth = wrapRef.value.offsetWidth;

  // 원본 route의 모든 아이템을 렌더링한 상태에서 측정
  const tempDiv = document.createElement('div');
  tempDiv.style.position = 'absolute';
  tempDiv.style.visibility = 'hidden';
  tempDiv.style.width = 'auto';
  tempDiv.style.whiteSpace = 'nowrap';

  // 원본 route의 모든 아이템을 임시로 렌더링
  props.route.forEach((item, index) => {
    const span = document.createElement('span');
    span.textContent = item.name;
    span.style.marginRight = '8px'; // separator 간격
    tempDiv.appendChild(span);
  });

  document.body.appendChild(tempDiv);
  const totalWidth = tempDiv.offsetWidth;
  document.body.removeChild(tempDiv);

  isOverflowing.value = totalWidth > wrapWidth * 0.8;
};

const visibleRoutes = computed<BreadcrumbItem[]>(() => {
  const raw = props.route;
  if (!isOverflowing.value || raw.length <= 3) return raw;

  // 모든 속성 복사
  const clone = (item: any) => ({ ...item });
  return [clone(raw[0]), { type: 'ellipsis' }, ...raw.slice(-2).map(clone)];
});
const hiddenRoutes = computed(() => {
  const raw = props.route;
  if (!isOverflowing.value || raw.length <= 3) return [];
  return raw.slice(1, -2);
});

// 아래는 리사이즈 대응
const handleResize = () => {
  checkOverflow();
};
onMounted(() => {
  checkOverflow();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

watch(
  () => props.route,
  () => {
    nextTick(() => checkOverflow());
  }
);
</script>
