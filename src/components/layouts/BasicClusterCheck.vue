<template>
  <div class="title-group">
    <div class="tag-wrap">
      <a-checkable-tag
        v-for="(tag, index) in tagsData"
        :key="tag"
        v-model:checked="selectTags[index]"
        class="large"
      >
        <p class="tag-wrap-text">
          {{ tag.name }}
        </p>
      </a-checkable-tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, ref, nextTick } from 'vue';

// 선택 가능한 태그
const tagsData = reactive([
  {
    name: '전체',
  },
  {
    name: 'ClusterName1',
  },
  {
    name: 'ClusterName2',
  },
  {
    name: 'ClusterName3',
  },
  {
    name: 'ClusterName4',
  },
  {
    name: 'ClusterName5',
  },
  {
    name: 'ClusterName6',
  },
  {
    name: 'ClusterName7',
  },
  {
    name: 'ClusterName8',
  },
  {
    name: 'ClusterName9',
  },
  {
    name: 'ClusterName10',
  },
  {
    name: 'ClusterName11',
  },
  {
    name: 'ClusterName12',
  },
]);

const selectTags = reactive([
  false,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

const isUpdating = ref(false);

watch(
  () => selectTags[0],
  (isAllSelected) => {
    if (isUpdating.value) return;

    for (let i = 1; i < selectTags.length; i++) {
      selectTags[i] = isAllSelected;
    }
  }
);

watch(
  () => selectTags.slice(1),
  (individualTags) => {
    isUpdating.value = true;

    const allSelected = individualTags.every((tag) => tag);
    const noneSelected = individualTags.every((tag) => !tag);

    if (allSelected) {
      selectTags[0] = true;
    } else if (noneSelected) {
      selectTags[0] = false;
    } else {
      selectTags[0] = false;
    }

    nextTick(() => {
      isUpdating.value = false;
    });
  },
  { deep: true }
);
</script>
