<template>
  <a-popover
    placement="rightBottom"
    trigger="click"
    overlayClassName="no-arrow"
  >
    <template #content>
      <div class="alarm-wrap">
        <div class="alarm-head">
          <a-typography-title :level="2"> 전체 알림 </a-typography-title>
        </div>
        <div class="alarm-body">
          <a-tabs>
            <a-tab-pane key="1" tab="전체">
              <div class="alarm-body-group">
                <div class="caption-wrap">
                  <p class="caption-text">오늘</p>
                </div>
                <div class="list-wrap read">
                  <div class="list-head">
                    <div class="list-head-title">
                      <a-typography-title :level="3">
                        Title
                      </a-typography-title>
                      <a-tag class="green small">
                        <p class="tag-wrap-text">TAG</p>
                      </a-tag>
                    </div>
                    <div class="list-head-date">
                      <a-typography-text class="typography-label-5">
                        00분 전
                      </a-typography-text>
                    </div>
                  </div>
                  <div class="list-body">
                    <a-typography-text class="typography-body-2">
                      description
                    </a-typography-text>
                    <a-button class="link"> link button </a-button>
                  </div>
                </div>
                <div class="list-wrap">
                  <div class="list-head">
                    <div class="list-head-title">
                      <a-typography-title :level="3">
                        Title
                      </a-typography-title>
                      <a-tag class="green small">
                        <p class="tag-wrap-text">TAG</p>
                      </a-tag>
                    </div>
                    <div class="list-head-date">
                      <a-typography-text class="typography-label-5">
                        00분 전
                      </a-typography-text>
                    </div>
                  </div>
                  <div class="list-body">
                    <a-typography-text class="typography-body-2">
                      description
                    </a-typography-text>
                    <a-button class="link"> link button </a-button>
                  </div>
                </div>
              </div>
              <a-divider class="size-large" />
              <div class="alarm-body-group">
                <div class="caption-wrap">
                  <p class="caption-wrap-text">1일 전</p>
                </div>
                <div class="list-wrap">
                  <div class="list-head">
                    <div class="list-head-title">
                      <a-typography-title :level="3">
                        Title
                      </a-typography-title>
                      <a-tag class="blue small">
                        <p class="tag-wrap-text">TAG</p>
                      </a-tag>
                    </div>
                    <div class="list-head-date">
                      <a-typography-text class="typography-label-5">
                        00분 전
                      </a-typography-text>
                    </div>
                  </div>
                  <div class="list-body">
                    <a-typography-text class="typography-body-2">
                      description
                    </a-typography-text>
                    <a-button class="link"> link button </a-button>
                  </div>
                </div>
                <div class="list-wrap">
                  <div class="list-head">
                    <div class="list-head-title">
                      <a-typography-title :level="3">
                        Title Title Title Title Title Title Title Title Title
                      </a-typography-title>
                      <a-tag class="blue small">
                        <p class="tag-wrap-text">TAG</p>
                      </a-tag>
                    </div>
                    <div class="list-head-date">
                      <a-typography-text class="typography-label-5">
                        00분 전
                      </a-typography-text>
                    </div>
                  </div>
                  <div class="list-body">
                    <a-typography-text class="typography-body-2">
                      description
                    </a-typography-text>
                    <a-button class="link"> link button </a-button>
                  </div>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="읽지 않음">
              <NoData text="알림 내용이 없습니다.">
                <template #icon>
                  <Icon color="info" fill>
                    <template #name> info </template>
                  </Icon>
                </template>
              </NoData>
            </a-tab-pane>
            <template #rightExtra>
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="1"> 조건1 </a-menu-item>
                    <a-menu-item key="2"> 조건2 </a-menu-item>
                    <a-menu-item key="3"> 조건3 </a-menu-item>
                  </a-menu>
                </template>
                <a-button class="ghost">
                  <Icon color="default">
                    <template #name>filter_list</template>
                  </Icon>
                  필터
                </a-button>
              </a-dropdown>
            </template>
          </a-tabs>
        </div>
        <div class="alarm-footer">
          <a-divider class="size-large" />
          <a-button class="ghost">
            전체 알림 목록보기
            <Icon color="default">
              <template #name>open_in_new</template>
            </Icon>
          </a-button>
        </div>
      </div>
    </template>
    <template v-if="!$slots.trigger">
      <a-button class="ghost">
        <Icon color="default">
          <template #name> notifications </template>
        </Icon>
        알림
      </a-button>
    </template>
    <slot name="trigger" />
  </a-popover>
</template>
<script lang="ts" setup>
import { Icon } from '@/components/icons';
import { NoData } from '@/components/no-data';
</script>
