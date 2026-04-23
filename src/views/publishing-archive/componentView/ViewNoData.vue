<template>
  <TopTitle
    title="데이터 없음 (No data)"
    text="Nodata는 세 가지 유형으로 표시됩니다."
  />
  <a-flex
    align="center"
    gap="20"
    style="
      padding: 20px;
      background: var(--layer-01);
      border: 1px solid #e1e1e1;
    "
  >
    <NoData title="No Data" text="아직 생성된 항목이 없습니다.">
      <template #icon>
        <Icon size="md" color="brand" fill>
          <template #name>info</template>
        </Icon>
      </template>
      <template #link>
        <a-button class="link">링크 보러가기</a-button>
      </template>
      <template #button>
        <a-button class="primary ant-empty-btn"> 생성 </a-button>
      </template>
    </NoData>
    <NoData />
    <NoData description>
      <template #link>
        <a-button class="link">링크 보러가기</a-button>
      </template>
    </NoData>
  </a-flex>
</template>
<script lang="ts" setup>
import { NoData } from '@/components/no-data';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
</script>
