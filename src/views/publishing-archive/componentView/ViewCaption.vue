<template>
  <TopTitle
    title="캡션 (Caption)"
    text="컴포넌트 하단에 위치하는 보조 설명 텍스트 요소입니다.
    사용 예시, 도움말 또는 유효성 상태(에러/성공 등)를 함께 안내합니다."
  />
  <a-flex vertical gap="16">
    <div class="caption-wrap">
      <p class="caption-wrap-text">caption</p>
    </div>
    <div class="caption-wrap error">
      <Icon fill size="xs" color="error">
        <template #name>error</template>
      </Icon>
      <p class="caption-wrap-text">Error Text</p>
    </div>
    <div class="caption-wrap error">
      <Icon fill size="xs" color="error">
        <template #name>error</template>
      </Icon>
      <p class="caption-wrap-text">
        Error Text<br />
        오버플로우의 경우 아이콘은 상단 고정
      </p>
    </div>
    <div class="caption-wrap success">
      <Icon fill size="xs" color="success">
        <template #name>check_circle</template>
      </Icon>
      <p class="caption-wrap-text">Success Text</p>
    </div>
    <div class="caption-wrap success">
      <Icon fill size="xs" color="success">
        <template #name>check_circle</template>
      </Icon>
      <p class="caption-wrap-text">
        Success Text<br />
        오버플로우의 경우 아이콘은 상단 고정
      </p>
    </div>
  </a-flex>
</template>
<script lang="ts" setup>
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
</script>
