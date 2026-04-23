<template>
  <!-- 가이드 패널, 필터 패널 -->
  <div :class="['right-fix-panel', panelSizeClass]">
    <!-- 패널 타이틀 영역 -->
    <div class="panel-header">
      <slot name="title">
        <!-- 패널 타이틀 슬롯 영역 -->
        <BasicTitle
          level="panel"
          title="Guide Title"
          :tooltip="{
            title: 'panel(page) tiitle component 도움말 툴팁',
            icon: 'info',
          }"
        >
          <template #extra>
            <a-button class="tertiary">
              <template #icon>
                <Icon size="md" color="default" fill>
                  <template #name>refresh</template>
                </Icon>
              </template>
              초기화
            </a-button>
          </template>
        </BasicTitle>
      </slot>
    </div>

    <!-- 패널(컨텐츠) 영역 -->
    <div class="panel-body">
      <div class="main-content">
        <div class="content-header">
          <slot name="header">
            <!-- 컨텐츠 타이틀 슬롯 영역 (필요 시 삽입) -->
            <BasicTitle
              level="content"
              title="content title component"
              :tooltip="{
                title: 'content title component 도움말 툴팁',
                icon: 'info',
              }"
            >
              <template #extra>
                <a-button class="secondary">secondary</a-button>
              </template>
            </BasicTitle>
          </slot>
        </div>
        <div class="content-body">
          <slot name="body">
            <!-- 섹션 영역 -->
            <section class="section">
              <div class="section-header">
                <BasicTitle
                  level="section"
                  title="section title component"
                  :tooltip="{
                    title: '섹션 타이틀 컴포넌트 도움말 툴팁',
                    icon: 'info',
                  }"
                  :tags="[{ text: 'TAG', color: 'blue' }]"
                />
              </div>
              <div class="section-body">
                <a-typography-title :level="2">
                  section-body
                </a-typography-title>
              </div>
            </section>
            <a-divider class="size-large" />
            <a-collapse
              v-model:activeKey="guideActiveKey"
              :bordered="false"
              class="divider-size-large"
            >
              <template #expandIcon="{ isActive }">
                <span :class="{ rotate: isActive }">
                  <Icon size="md" color="default">
                    <template #name>keyboard_arrow_right</template>
                  </Icon>
                </span>
              </template>
              <a-collapse-panel key="1" tabIndex="0">
                <template #header>
                  <a-flex class="header-group">
                    <a-flex class="group-items">
                      <a-typography-text class="typography-body-2">
                        Accordion placeholder
                      </a-typography-text>
                      <div class="tag-wrap">
                        <a-tag class="green small">
                          <p class="tag-wrap-text">TAG</p>
                        </a-tag>
                      </div>
                    </a-flex>
                    <a-flex class="group-items items-end">
                      <a-button class="secondary" @click.stop>
                        Tab-function
                      </a-button>
                    </a-flex>
                  </a-flex>
                </template>
                <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
                <div class="collapse-content-body">
                  <ul class="default-list">
                    <li>
                      Placeholder
                      <ul>
                        <li>
                          Placeholder
                          <ul>
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                          </ul>
                        </li>
                        <li>Placeholder</li>
                      </ul>
                    </li>
                    <li>
                      Placeholder
                      <div class="editor-view">
                        <div class="inner-editor">
                          toggleState = (element, evt) => { const data =
                          element.dataset; const label = (data.label)
                          ?data.label : ''; const previousValue =
                          (data.previousValue) ? data.previousValue : ''; const
                          initialEvt = evt; this.changeState({ group:
                          data.event, element, label, previousValue, initialEvt,
                          toggleState = (element, evt) => { const data =
                          element.dataset; const label = (data.label)
                          ?data.label : ''; const previousValue =
                          (data.previousValue) ? data.previousValue : ''; const
                          initialEvt = evt; this.changeState({ group:
                          data.event, element, label, previousValue, initialEvt,
                          }); }
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </a-collapse-panel>
              <a-collapse-panel key="2" tabIndex="0">
                <template #header>
                  <a-flex class="header-group">
                    <a-flex class="group-items">
                      <a-typography-text class="typography-body-2">
                        Accordion placeholder
                      </a-typography-text>
                      <div class="tag-wrap">
                        <a-tag class="green small">
                          <p class="tag-wrap-text">TAG</p>
                        </a-tag>
                      </div>
                    </a-flex>
                    <a-flex class="group-items items-end">
                      <a-button class="secondary" @click.stop>
                        Tab-function
                      </a-button>
                    </a-flex>
                  </a-flex>
                </template>
                <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
                <div class="collapse-content-body">
                  <ul>
                    <li>
                      Placeholder
                      <ul>
                        <li>
                          Placeholder
                          <ul>
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                          </ul>
                        </li>
                        <li>Placeholder</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </a-collapse-panel>
              <a-collapse-panel key="3" tabIndex="0">
                <template #header>
                  <a-flex class="header-group">
                    <a-flex class="group-items">
                      <a-typography-text class="typography-body-2">
                        Accordion placeholder
                      </a-typography-text>
                      <div class="tag-wrap">
                        <a-tag class="green small">
                          <p class="tag-wrap-text">TAG</p>
                        </a-tag>
                      </div>
                    </a-flex>
                    <a-flex class="group-items items-end">
                      <a-button class="secondary" @click.stop>
                        Tab-function
                      </a-button>
                    </a-flex>
                  </a-flex>
                </template>
                <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
                <div class="collapse-content-body">
                  <ul>
                    <li>
                      Placeholder
                      <ul>
                        <li>
                          Placeholder
                          <ul>
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                          </ul>
                        </li>
                        <li>Placeholder</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Icon } from '@/components/icons';
import { BasicTitle, BasicEllipsisText } from '@/components/layouts';
import { Filter } from '@/components/table';

// collapse
const guideActiveKey = ref(['1']);

// 1. props 선언
const props = defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg';
}>();

// 2. size -> class 변환
const panelSizeClass = computed(() => {
  return props.size ? `panel-size-${props.size}` : '';
});
</script>
