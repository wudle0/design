<template>
  <TopTitle
    title="타이틀 컴포넌트 (BasicTitle)"
    text="공통 타이틀 컴포넌트 옵션 설정(level, title, description, number, tooltip, tag, backbutton)이 가능하며, extra slot을 통해 우측에 폼 요소 및 버튼 삽입이 가능합니다.
    level 옵션에 따라 페이지(패널), 컨텐츠, 섹션, 폼, 모달 타이틀로 사용 가능합니다.
    리사이징지 우측 요소는 내부 요소의 너비를 벗어날 경우 타이틀과 디스크립션의 하단에 위치합니다."
  />
  <a-flex vertical style="background: rgba(0, 0, 0, 0.02); padding: 12px">
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        페이지(패널) 타이틀 컴포넌트 (level : panel)
      </a-typography-title>
    </div>
    <BasicTitle
      level="panel"
      title="페이지(패널) 타이틀 컴포넌트"
      description="description"
      :backbutton="true"
      :tooltip="{ title: '타이틀 컴포넌트 도움말 툴팁', icon: 'info' }"
      :tags="[
        { text: 'success', color: 'green' },
        { text: 'warning', color: 'red' },
      ]"
    >
      <template #extra>
        <a-button class="primary"> primary </a-button>
        <a-button class="secondary">secondary</a-button>
        <a-divider type="vertical" />
        <a-button class="secondary danger">secondary danger</a-button>
        <a-button class="tertiary" disabled>tertiary disabled</a-button>
      </template>
    </BasicTitle>
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        컨텐츠 타이틀 컴포넌트 (level : content)
      </a-typography-title>
    </div>
    <BasicTitle
      level="content"
      title="컨텐츠 타이틀 컴포넌트 컨텐츠 타이틀 컴포넌트 컨텐츠 타이틀 컴포넌트 컨텐츠 타이틀 컴포넌트 컨텐츠 타이틀 컴포넌트 컨텐츠 타이틀 컴포넌트 컨텐츠 타이틀 컴포넌트 컨텐츠 타이틀 컴포넌트 "
      description="description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description "
      number="num"
      :tooltip="{ title: '타이틀 컴포넌트 도움말 툴팁', icon: 'info' }"
      :tags="[
        { text: 'success', color: 'green' },
        { text: 'warning', color: 'red' },
      ]"
    >
      <template #extra>
        <a-button class="primary"> primary </a-button>
        <a-button class="secondary">secondary</a-button>
        <a-button class="secondary danger">secondary danger</a-button>
        <a-button class="tertiary" disabled>tertiary disabled</a-button>
      </template>
    </BasicTitle>
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        섹션 타이틀 컴포넌트 (level : section)
      </a-typography-title>
    </div>
    <BasicTitle
      level="section"
      title="섹션 타이틀 컴포넌트"
      description="description"
      :tooltip="{ title: '타이틀 컴포넌트 도움말 툴팁', icon: 'info' }"
      :tags="[
        { text: 'success', color: 'green' },
        { text: 'warning', color: 'red' },
      ]"
    >
      <template #extra>
        <a-button class="primary small"> primary </a-button>
        <a-button class="secondary small">secondary</a-button>
        <a-divider type="vertical" />
        <a-button class="secondary danger small">secondary danger</a-button>
        <a-button class="tertiary small" disabled>tertiary disabled</a-button>
      </template>
    </BasicTitle>
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        폼 타이틀 컴포넌트 (level : form)
      </a-typography-title>
    </div>
    <BasicTitle
      level="form"
      title="폼 타이틀 컴포넌트"
      description="description"
      number="num"
      :tooltip="{ title: '폼 컴포넌트 도움말 툴팁', icon: 'info' }"
      :tags="[
        { text: 'success', color: 'green' },
        { text: 'warning', color: 'red' },
      ]"
    >
      <template #extra>
        <a-button class="primary small"> primary </a-button>
        <a-button class="secondary small">secondary</a-button>
        <a-button class="secondary danger small">secondary danger</a-button>
        <a-button class="tertiary small" disabled>tertiary disabled</a-button>
      </template>
    </BasicTitle>
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        카드 그룹 타이틀 컴포넌트 (level : card)
      </a-typography-title>
    </div>
    <BasicTitle
      level="card"
      title="카드 그룹 타이틀 컴포넌트"
      description="description"
      number="num"
      :tooltip="{ title: '카드 그룹 컴포넌트 도움말 툴팁', icon: 'info' }"
      :tags="[
        { text: 'success', color: 'green' },
        { text: 'warning', color: 'red' },
      ]"
    >
      <template #extra>
        <a-button class="primary small"> primary </a-button>
        <a-button class="secondary small">secondary</a-button>
        <a-button class="secondary danger small">secondary danger</a-button>
        <a-button class="tertiary small" disabled>tertiary disabled</a-button>
      </template>
    </BasicTitle>
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        모달 타이틀 컴포넌트 (level : modal)
      </a-typography-title>
    </div>
    <BasicTitle
      level="modal"
      title="모달 타이틀 컴포넌트"
      description="description"
      :tooltip="{ title: '모달 컴포넌트 도움말 툴팁', icon: 'info' }"
      :tags="[
        { text: 'success', color: 'green' },
        { text: 'warning', color: 'red' },
      ]"
    >
      <template #extra>
        <a-button class="primary small"> primary </a-button>
        <a-button class="secondary small">secondary</a-button>
        <a-button class="secondary danger small">secondary danger</a-button>
        <a-button class="tertiary small" disabled>tertiary disabled</a-button>
      </template>
    </BasicTitle>
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        팝오버 타이틀 컴포넌트 (level : popover)
      </a-typography-title>
    </div>
    <BasicTitle
      level="popover"
      title="팝오버 타이틀 컴포넌트"
      description="description"
      :tooltip="{ title: '팝오버 컴포넌트 도움말 툴팁', icon: 'info' }"
      :tags="[
        { text: 'success', color: 'green' },
        { text: 'warning', color: 'red' },
      ]"
    >
      <template #extra>
        <a-button class="primary small"> primary </a-button>
        <a-button class="secondary small">secondary</a-button>
        <a-button class="secondary danger small">secondary danger</a-button>
        <a-button class="tertiary small" disabled>tertiary disabled</a-button>
      </template>
    </BasicTitle>
  </a-flex>
</template>
<script lang="ts" setup>
import { TopTitle, BasicTitle } from '@/components/layouts';
</script>
<style scoped>
.title-group {
  margin-bottom: 60px;
}
</style>
