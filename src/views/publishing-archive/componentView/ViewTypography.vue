<template>
  <a-flex vertical gap="8">
    <TopTitle
      title="Typography"
      text="디자인 정책에 맞는 폰트 사이즈, 컬러 정책 및 클래스명 확인이 가능합니다."
    />
    <a-space direction="vertical" class="ant-typography-default">
      <div class="form-item-group-title">
        <a-typography-title :level="3"> Display Styles</a-typography-title>
      </div>
      <a-typography-text class="typography-display-1">
        typography-display-1 : 28px/34px, 700(Bold), 대시보드의 숫자 하이라이트
        등
      </a-typography-text>
      <!-- 레벨을 명시할 수 있는 타이틀 1~5 만 a-typoraphy-title 사용 -->
      <div class="form-item-group-title">
        <a-typography-title :level="3"> Heading Styles</a-typography-title>
      </div>
      <a-typography-title :level="1">
        h1.ant-typography : 18px/24px, 600(SemiBold), 페이지 타이틀
      </a-typography-title>
      <a-typography-title :level="2">
        h2.ant-typography : 26px/20px, 600(SemiBold), 컨테이너 타이틀, 패널
        타이틀 등
      </a-typography-title>
      <a-typography-title :level="3">
        h3.ant-typography : 14px/18px, 600(SemiBold), 본문 내 섹션 타이틀,
        콜랩스 타이틀
      </a-typography-title>
      <!-- 이외 일반 본문 텍스트는 a-typography-text 를 사용 -->
      <div class="form-item-group-title">
        <a-typography-title :level="3"> Body Styles</a-typography-title>
      </div>
      <a-typography-text class="typography-body-1">
        ant-typography.typography-body-1 : 14px/18px, 600(SemiBold), 본문에서
        강조가 필요한 부분
      </a-typography-text>
      <a-typography-text class="typography-body-2">
        ant-typography.typography-body-2 : 14px/18px, 400(Normal), 본문 기본
        텍스트
      </a-typography-text>
      <!-- 폼 텍스트 요소는 a-typography-text 를 사용 -->
      <div class="form-item-group-title">
        <a-typography-title :level="3">
          Label Styles (클래스 참조)
        </a-typography-title>
      </div>
      <a-typography-text class="typography-label-1">
        .typography-label-1 : 16px/20px, 400(Normal), 큰 사이즈 필드 내 텍스트
      </a-typography-text>
      <a-typography-text class="typography-label-2">
        .typography-label-2 : 14px/18px, 600(SemiBold), 큰 사이즈 태그 내 텍스트
      </a-typography-text>
      <a-typography-text class="typography-label-3">
        .typography-label-3 : 14px/18px, 400(Normal), 버튼 내 텍스트
      </a-typography-text>
      <a-typography-text class="typography-label-4">
        .typography-label-4 : 13px/16px, 600(SemiBold), 태그 내 텍스트
      </a-typography-text>
      <a-typography-text class="typography-label-5">
        .typography-label-5 : 13px/16px, 400(Normal), 도움말, 필드 내 작은
        사이즈의 텍스트
      </a-typography-text>
      <a-typography-text class="typography-label-6">
        .typography-label-6 : 12px/14px, 400(Normal), 툴팁 내 텍스트, 캡션의
        하위 단계
      </a-typography-text>
      <div class="form-item-group-title">
        <a-typography-title :level="3">
          Status Color Styles
        </a-typography-title>
      </div>
      <a-typography-text>Ant Design Vue (default)</a-typography-text>
      <a-typography-text type="brand">Ant Design Vue (brand)</a-typography-text>
      <a-typography-text type="brand-bold"
        >Ant Design Vue (brand bold)</a-typography-text
      >
      <a-typography-text type="success"
        >Ant Design Vue (success)</a-typography-text
      >
      <a-typography-text type="warning"
        >Ant Design Vue (warning)</a-typography-text
      >
      <a-typography-text type="danger"
        >Ant Design Vue (danger)</a-typography-text
      >
      <a-typography-text type="down">Ant Design Vue (down)</a-typography-text>
      <a-typography-text type="gray">Ant Design Vue (gray)</a-typography-text>
      <a-typography-text type="helper">
        Ant Design Vue (helper)
      </a-typography-text>
      <a-typography-text type="subtle">
        Ant Design Vue (subtle)
      </a-typography-text>
      <a-typography-text type="subtler">
        Ant Design Vue (subtler)
      </a-typography-text>
      <a-typography-text disabled>Ant Design Vue (disabled)</a-typography-text>
      <a-typography-text underline
        >Ant Design Vue (underline)</a-typography-text
      >
      <a-typography-text delete>Ant Design Vue (delete)</a-typography-text>
      <a-typography-text strong>Ant Design Vue (strong)</a-typography-text>
      <!-- 일반 태그 (p, span, strong, small) -->
      <div class="form-item-group-title">
        <a-typography-title :level="3">
          Tag Styles (일반 태그 기본 정의)
        </a-typography-title>
      </div>
      <strong>strong (= typography-body-1 : 본문 강조 스타일)</strong>
      <p>p (=typography-body-2 : 본문 스타일)</p>
      <!-- <span>span (= typography-label-5 : 버튼 내 텍스트)</span> -->
      <small>small (= typography-label-6 : 캡션의 하위 단계)</small>
    </a-space>
  </a-flex>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
</script>
<style scoped>
.ant-divider.size-large {
  margin: 20px 0 !important;
}
.form-item-group-title {
  margin: 20px 0 10px;
}
</style>
