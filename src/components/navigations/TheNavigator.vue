<template>
  <a-popover
    placement="bottomRight"
    trigger="click"
    overlayClassName="navigator-wrap no-arrow"
    :destroyTooltipOnHide="false"
    @openChange="handlePopoverVisibleChange"
  >
    <template #content>
      <div class="navigator-box">
        <Filter size="small" />
        <a-flex>
          <div class="navigator-list">
            <div class="navigator-item">
              <p class="navigator-item-title">클러스터 선택</p>
              <div class="navigator-item-body">
                <a-collapse
                  expandIconPosition="end"
                  :bordered="false"
                  v-model:activeKey="allClusterKeys"
                  :class="{ 'no-animation': isFirstRender }"
                >
                  <template #expandIcon="{ isActive }">
                    <span :class="{ rotate: isActive }">
                      <Icon size="md" color="default">
                        <template #name>keyboard_arrow_right</template>
                      </Icon>
                    </span>
                  </template>
                  <a-collapse-panel
                    v-for="item in NavigatorListCopy"
                    :key="item.key"
                    tabindex="0"
                  >
                    <template #header>
                      <a-flex class="header-group">
                        <a-flex class="group-items">
                          <a-typography-text class="typography-body-2">
                            {{ item?.name }}
                          </a-typography-text>
                        </a-flex>
                      </a-flex>
                    </template>
                    <div class="collapse-content-body">
                      <ul>
                        <li v-for="subItem in item.item" :key="subItem.key">
                          <a-button
                            class="ghost"
                            @click="toggleBookmark(subItem.key)"
                          >
                            <Icon
                              size="md"
                              :color="
                                subItem.bookmark === 'yes' ? 'brand' : 'subtle'
                              "
                              :fill="subItem.bookmark === 'yes'"
                            >
                              <template #name>bookmark</template>
                            </Icon>
                          </a-button>
                          <a-button
                            class="navigator-item-btn"
                            :class="subItem.key === activeItem ? 'checked' : ''"
                            @click="activeItem = subItem.key"
                          >
                            {{ subItem.name }}
                          </a-button>
                        </li>
                      </ul>
                    </div>
                  </a-collapse-panel>
                </a-collapse>
              </div>
            </div>
          </div>
          <template v-if="activeItem">
            <div class="navigator-list">
              <template v-if="selectedSubItems.length">
                <div class="navigator-item">
                  <p class="navigator-item-title">프로젝트 선택</p>
                  <div class="navigator-item-body">
                    <a-collapse
                      expandIconPosition="end"
                      :bordered="false"
                      v-model:activeKey="activeCollapse"
                      :class="{ 'no-animation': isFirstRender }"
                    >
                      <template #expandIcon="{ isActive }">
                        <span :class="{ rotate: isActive }">
                          <Icon size="md" color="default">
                            <template #name>keyboard_arrow_right</template>
                          </Icon>
                        </span>
                      </template>
                      <a-collapse-panel
                        v-for="item in selectedSubItems"
                        :key="item.key"
                        tabIndex="0"
                      >
                        <template #header>
                          <a-flex class="header-group">
                            <a-flex class="group-items">
                              <a-typography-text class="typography-body-2">
                                {{ item?.name }}
                              </a-typography-text>
                            </a-flex>
                          </a-flex>
                        </template>
                        <div class="collapse-content-body">
                          <ul>
                            <li v-for="subItem in item.item" :key="subItem.key">
                              <a-button
                                class="ghost"
                                @click="toggleBookmark(subItem.key)"
                              >
                                <Icon
                                  size="md"
                                  :color="
                                    subItem.bookmark === 'yes'
                                      ? 'brand'
                                      : 'subtle'
                                  "
                                  :fill="subItem.bookmark === 'yes'"
                                >
                                  <template #name>bookmark</template>
                                </Icon>
                              </a-button>
                              <a-button
                                class="navigator-item-btn"
                                :class="
                                  subItem.key === activeItem ? 'checked' : ''
                                "
                                @click="activeItem = subItem.key"
                              >
                                {{ subItem.name }}
                              </a-button>
                            </li>
                          </ul>
                        </div>
                      </a-collapse-panel>
                    </a-collapse>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="navigator-item">
                  <p class="navigator-item-title">프로젝트 선택</p>
                  <div class="navigator-item-body">
                    <NoData
                      description
                      text="해당 클러스터에 포함된 프로젝트가 없습니다. 프로젝트를 등록 후 서비스를 이용해 주세요."
                    >
                      <template #icon>
                        <Icon size="md" color="warning" fill>
                          <template #name>warning</template>
                        </Icon>
                      </template>
                      <template #link>
                        <a-button class="link">프로젝트 등록</a-button>
                      </template>
                    </NoData>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </a-flex>

        <div class="navigator-wrap-footer">
          <a-button class="ghost">취소</a-button>
          <a-button class="primary">확인</a-button>
        </div>
      </div>
    </template>

    <div class="btn-navigator">
      <div class="btn-navigator-name">
        <p class="name-main">Cluster name</p>
        <span class="name-line">/</span>
        <p class="name-sub">Project name</p>
      </div>
      <div class="btn-navigator-icon">
        <Icon size="xs" color="default" fill>
          <template #name>sync_alt</template>
        </Icon>
      </div>
    </div>
  </a-popover>
</template>
<script lang="ts" setup>
import { computed, ref, nextTick } from 'vue';
import { NoData } from '@/components/no-data';
import { Icon } from '@/components/icons';
import { Filter } from '@/components/table';

interface NavigatorItem {
  key: string;
  name: string;
  bookmark?: 'yes' | 'no';
  item?: NavigatorItem[];
  subItems?: NavigatorItem[];
}

interface Props {
  navigatorList?: NavigatorItem[];
}

const props = withDefaults(defineProps<Props>(), {
  navigatorList: () => [],
});

const activeItem = ref('');

// const getPopupContainer = (triggerNode: HTMLElement | null): HTMLElement => {
//   return triggerNode?.closest('.group-items.items-end');
// };
const getPopupContainer = () => {
  return document.querySelector('#archive');
};

// 선택된 값에 따라 서브메뉴 표시
const selectedSubItems = computed(() => {
  for (const group of NavigatorListCopy.value) {
    for (const item of group.item || []) {
      if (item.key === activeItem.value && item.subItems) {
        return item.subItems;
      }
    }
  }
  return [];
});

// 목록 기본값 열어놓기
const allClusterKeys = ref(
  props.navigatorList.slice(0, 2).map((item) => item.key)
);
const activeCollapse = ref([
  'navigator-bookmark-subItem1',
  'navigator-bookmark-subItem2',
]);
// 북마크
const NavigatorListCopy = ref([...props.navigatorList]);

// 애니메이션 제어
const isFirstRender = ref(true);

// popover가 열릴 때 애니메이션 비활성화
const handlePopoverVisibleChange = (visible: boolean) => {
  if (visible && isFirstRender.value) {
    // 처음 열릴 때는 애니메이션 비활성화
    nextTick(() => {
      // 짧은 지연 후 애니메이션 활성화
      setTimeout(() => {
        isFirstRender.value = false;
      }, 50);
    });
  }
};

function toggleBookmark(key: string) {
  function recursiveToggle(items: any[]): boolean {
    for (const item of items) {
      if (item.key === key) {
        item.bookmark = item.bookmark === 'yes' ? 'no' : 'yes';
        return true;
      }

      if (item.subItems && recursiveToggle(item.subItems)) return true;
      if (item.item && recursiveToggle(item.item)) return true;
    }
    return false;
  }

  recursiveToggle(NavigatorListCopy.value);
}
</script>
