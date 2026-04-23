<template>
  <TopTitle
    title="팝오버 (Popover)"
    text="기본 타입과 알람, 프로필로 나뉩니다."
  />
  <a-flex gap="8" align="flex-start">
    <a-popover placement="rightBottom" trigger="click">
      <template #title>
        <BasicTitle
          level="popover"
          title="popover title component"
          description="description"
          :tooltip="{
            title: 'modal title component 도움말 툴팁',
            icon: 'info',
          }"
          :tags="[
            { text: 'success', color: 'green' },
            { text: 'warning', color: 'red' },
          ]"
        >
          <template #extra>
            <a-button class="primary">primary</a-button>
            <a-button class="secondary">secondary</a-button>
          </template>
        </BasicTitle>
      </template>
      <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        totam rem accusamus, porro quae necessitatibus aliquam aliquid deserunt
        sunt optio repellat ab suscipit inventore, distinctio reprehenderit
        veniam beatae ut, ex iure at? Dolores nobis nam officiis est! Nulla
        quaerat tempore expedita accusamus! Facilis consectetur fuga quia amet
        deleniti quae? Iure.
      </template>
      <a-button class="primary"> 팝오버 </a-button>
    </a-popover>
    <ViewAlarm />
    <ViewProfile />
  </a-flex>
</template>
<script lang="ts" setup>
import ViewAlarm from '@/views/publishing-archive/componentView/ViewAlarm.vue';
import ViewProfile from '@/views/publishing-archive/componentView/ViewProfile.vue';
import { BasicTitle } from '@/components/layouts';
import { TopTitle } from '@/components/layouts';
</script>
