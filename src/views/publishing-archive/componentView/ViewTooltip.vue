<template>
  <TopTitle
    title="툴팁 목록"
    text="plain, description, status 의 유형을 가집니다. 마우스오버 시 확인 가능합니다."
  />

  <a-flex gap="8">
    <a-tooltip overlayClassName="plain" autoAdjustOverflow>
      <template #title> TooltipPlain </template>
      <a-button class="primary">TooltipPlain</a-button>
    </a-tooltip>
    <a-tooltip autoAdjustOverflow>
      <template #title>
        <div class="ant-tooltip-head">Header</div>
        <div class="ant-tooltip-body">
          description....simple explanation.. max width 320 최대 네 줄이
          넘지않도록 사용합니다.
        </div>
      </template>
      <a-button class="secondary">TooltipDescription</a-button>
    </a-tooltip>
    <a-tooltip autoAdjustOverflow>
      <template #title>
        <div class="ant-tooltip-head">Header</div>
        <dl class="ant-tooltip-list">
          <div class="ant-tooltip-list-item">
            <dt>삭제됨</dt>
            <dd>
              <a-tag class="down small">
                <p class="tag-wrap-text">DELETED</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>사용 불가</dt>
            <dd>
              <a-tag class="down small">
                <p class="tag-wrap-text">DEACTIVATED</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>업로드 에러</dt>
            <dd>
              <a-tag class="red small">
                <p class="tag-wrap-text">KILLED</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>업로드 대기 중</dt>
            <dd>
              <a-tag class="blue small">
                <p class="tag-wrap-text">KQUEUEDILLED</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>업로드 중</dt>
            <dd>
              <a-tag class="blue small">
                <p class="tag-wrap-text">UPLOADING</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>저장 중</dt>
            <dd>
              <a-tag class="blue small">
                <p class="tag-wrap-text">SAVING</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>사용 중</dt>
            <dd>
              <a-tag class="blue small">
                <p class="tag-wrap-text">IMPORTING</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>삭제 중</dt>
            <dd>
              <a-tag class="blue small">
                <p class="tag-wrap-text">PENDING_DELETE</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>준비 완료</dt>
            <dd>
              <a-tag class="green small">
                <p class="tag-wrap-text">ACTIVE</p>
              </a-tag>
            </dd>
          </div>
          <div class="ant-tooltip-list-item">
            <dt>유지 보수 모드</dt>
            <dd>
              <a-tag class="orange small">
                <p class="tag-wrap-text">MAINTENANCE</p>
              </a-tag>
            </dd>
          </div>
        </dl>
      </template>
      <a-button class="secondary danger">TooltipStatus</a-button>
    </a-tooltip>
    <a-tooltip autoAdjustOverflow>
      <template #title>
        <div class="ant-tooltip-head">Header</div>
        <dl class="ant-tooltip-list">
          <div class="ant-tooltip-list-item default">
            <dt>사용량 :</dt>
            <dd>4.0 Core</dd>
          </div>
          <div class="ant-tooltip-list-item default">
            <dt>전체 :</dt>
            <dd>8.0 Core</dd>
          </div>
          <div class="ant-tooltip-list-item default">
            <dt>사용률 :</dt>
            <dd>50%</dd>
          </div>
          <div class="ant-tooltip-list-item default">
            <dt>가용량 :</dt>
            <dd>0.3 Core</dd>
          </div>
        </dl>
      </template>
      <a-button class="secondary">default type_List</a-button>
    </a-tooltip>
  </a-flex>
</template>
<script lang="ts" setup>
import { TopTitle } from '@/components/layouts';
</script>
