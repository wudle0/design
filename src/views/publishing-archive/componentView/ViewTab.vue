<template>
  <TopTitle
    title="탭"
    text="기본 타입으로 너비 초과 시 너비를 벗어난 메뉴를 스크롤 기능과 함께 operation(더보기 버튼)을 통해서도 접근 가능합니다."
  />
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Common Type">
      <section class="section">
        <div class="section-body">
          <a-typography-text class="typography-body-2">
            컨텐츠 내용
          </a-typography-text>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>Table/Accrodian Type</span>
        <a-tooltip title="툴팁 타이틀 문구" autoAdjustOverflow>
          <a-button class="auto">
            <Icon size="xs" color="default">
              <template #name>help</template>
            </Icon>
          </a-button>
        </a-tooltip>
      </template>
      <section class="section">
        <div class="section-body">
          <a-typography-text class="typography-body-2">
            컨텐츠 내용
          </a-typography-text>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tee Type"></a-tab-pane>
    <a-tab-pane key="4" tab="Yaml Type"></a-tab-pane>
    <a-tab-pane key="5" tab="Dashboard Type"></a-tab-pane>
    <a-tab-pane key="6" tab="No data Type"></a-tab-pane>
    <a-tab-pane key="7" tab="No Tab Type" disabled></a-tab-pane>
    <a-tab-pane
      key="7"
      tab="Tab overflow Text Tab overflow Text Tab overflow Text Tab overflow Text Tab overflow Text Tab overflow Text"
      disabled
    >
    </a-tab-pane>
  </a-tabs>
  <a-divider />
  <TopTitle
    title="탭 (no-operation)"
    text="너비 초과 시 operation(더보기 버튼)이 제공되지 않으며 스크롤 기능만 제공됩니다."
    style="margin-top: 20px"
  />
  <a-tabs v-model:activeKey="activeKey" class="no-operation">
    <a-tab-pane key="1" tab="Common Type">
      <section class="section">
        <div class="section-body">
          <a-typography-text class="typography-body-2">
            컨텐츠 내용
          </a-typography-text>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>Table/Accrodian Type</span>
        <a-tooltip title="툴팁 타이틀 문구" autoAdjustOverflow>
          <a-button class="auto">
            <Icon size="xs" color="default">
              <template #name>help</template>
            </Icon>
          </a-button>
        </a-tooltip>
      </template>
      <section class="section">
        <div class="section-body">
          <a-typography-text class="typography-body-2">
            컨텐츠 내용
          </a-typography-text>
        </div>
      </section>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tee Type"></a-tab-pane>
    <a-tab-pane key="4" tab="Yaml Type"></a-tab-pane>
    <a-tab-pane key="5" tab="Dashboard Type"></a-tab-pane>
    <a-tab-pane key="6" tab="No data Type"></a-tab-pane>
    <a-tab-pane key="7" tab="No Tab Type" disabled></a-tab-pane>
    <a-tab-pane
      key="7"
      tab="Tab overflow Text Tab overflow Text Tab overflow Text Tab overflow Text Tab overflow Text Tab overflow Text"
      disabled
    ></a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const activeKey = ref('1');
</script>
<style scoped>
.section {
  height: 200px;
  background-color: var(--layer-02);
}
</style>
