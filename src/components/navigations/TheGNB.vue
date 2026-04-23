<template>
  <div class="gnb-container">
    <div class="gnb-dim"></div>
    <div class="gnb-contents" ref="targetRef">
      <div class="gnb-head">
        <a-flex :gap="16" align="center">
          <div class="search-group">
            <Icon size="xl" color="default">
              <template #name>search</template>
            </Icon>
            <input
              type="text"
              placeholder="서비스를 검색해 주세요."
              id="searchTrigger"
              @click="searchExpand = !searchExpand"
            />
            <Transition name="global-search-transition">
              <div class="global-search" v-if="searchExpand">
                <div class="search-expand">
                  <div class="search-expand-head">
                    <input
                      type="text"
                      placeholder="메뉴명, 업무 등 원하는 검색어를 입력해 주세요."
                      name="searchInput"
                      ref="searchInput"
                    />
                  </div>
                  <div class="search-expand-body">
                    <a-menu>
                      <a-menu-item-group title="즐겨찾기">
                        <a-menu-item key="a1">
                          <span class="main-text">비용 현황 > 비용 관리</span>
                        </a-menu-item>
                        <a-menu-item key="a2">
                          <span class="main-text"
                            >업무함 > 서비스 처리 현황</span
                          >
                        </a-menu-item>
                        <a-menu-item key="a3">
                          <span class="main-text">업무함 > 1:1 문의</span>
                        </a-menu-item>
                      </a-menu-item-group>
                      <a-menu-item-group title="최근 방문 기록">
                        <a-menu-item key="b1">
                          <span class="main-text"
                            >신규 서비스 카탈로그 생성</span
                          >
                          <span class="sub-text"
                            >설정 > 서비스 카탈로그 관리 > 서비스 카탈로그</span
                          >
                        </a-menu-item>
                        <a-menu-item key="b2">
                          <span class="main-text">신규 사용자 생성</span>
                          <span class="sub-text"
                            >설정 > 사용자 관리 > 사용자</span
                          >
                        </a-menu-item>
                        <a-menu-item key="b3">
                          <span class="main-text">인스턴스 생성</span>
                          <span class="sub-text"
                            >Compute Engine > 기본 설정 > 인스턴스 > 인스턴스
                            생성</span
                          >
                        </a-menu-item>
                      </a-menu-item-group>
                      <a-menu-item-group title="'생성' 검색 결과">
                        <a-menu-item key="c1">
                          <span class="main-text"
                            >Configuration > 사용자 역할 관리 > 사용자 > 사용자
                            관리 > 사용자</span
                          >
                          <span class="highlight-text">생성</span>
                        </a-menu-item>
                        <a-menu-item key="c2">
                          <span class="main-text"
                            >Configuration > 사용자 역할 관리 > 운영자 > 운영자
                            관리 > 운영자</span
                          >
                          <span class="highlight-text">생성</span>
                        </a-menu-item>
                      </a-menu-item-group>
                    </a-menu>
                  </div>
                  <div class="search-expand-footer">
                    <ul class="divider-list flex">
                      <li>
                        이동하기
                        <span class="mark">
                          <Icon color="default">
                            <template #name>subdirectory_arrow_left</template>
                          </Icon>
                        </span>
                      </li>
                      <li>
                        닫기
                        <span class="mark"> esc </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <div class="bookmark-group">
            <a-popover
              placement="bottomLeft"
              trigger="click"
              overlayClassName="no-arrow"
              :getPopupContainer="getPopupContainer"
            >
              <template #content>
                <div class="bookmark-wrap">
                  <div class="bookmark-head">
                    <a-typography-title :level="2">즐겨찾기</a-typography-title>
                  </div>
                  <div class="bookmark-body">
                    <a-menu class="bookmark-body-menu">
                      <a-menu-item-group title="CMP">
                        <a-menu-item key="a1">
                          <a-button class="auto">
                            <Icon color="brand" fill>
                              <template #name>bookmark</template>
                            </Icon>
                          </a-button>
                          <span> Submenu 1 </span>
                        </a-menu-item>
                        <a-menu-item key="a2">
                          <a-button class="auto">
                            <Icon color="brand" fill>
                              <template #name>bookmark</template>
                            </Icon>
                          </a-button>
                          <span> Submenu 2 </span>
                        </a-menu-item>
                        <span class="more-item">
                          더보기 (2)
                          <Icon color="default">
                            <template #name>keyboard_arrow_down</template>
                          </Icon>
                        </span>
                      </a-menu-item-group>
                      <a-menu-item-group title="IaaS">
                        <a-menu-item key="b1">
                          <a-button class="auto">
                            <Icon color="brand" fill>
                              <template #name>bookmark</template>
                            </Icon>
                          </a-button>
                          <span> Submenu 1 </span>
                        </a-menu-item>
                        <a-menu-item key="2">
                          <a-button class="auto">
                            <Icon color="brand" fill>
                              <template #name>bookmark</template>
                            </Icon>
                          </a-button>
                          <span> Submenu 2 </span>
                        </a-menu-item>
                        <span class="more-item">
                          더보기 (2)
                          <Icon color="default">
                            <template #name>keyboard_arrow_down</template>
                          </Icon>
                        </span>
                      </a-menu-item-group>
                    </a-menu>
                  </div>
                </div>
              </template>
              <a-button class="auto">
                <Icon size="xl" color="brand" fill>
                  <template #name>bookmark</template>
                </Icon>
              </a-button>
            </a-popover>
          </div>
        </a-flex>
        <a-button class="ghost" @click="handleGnbClose">
          <template #icon>
            <Icon color="default">
              <template #name>close</template>
            </Icon>
          </template>
        </a-button>
      </div>
      <div class="gnb-body">
        <div class="gnb-body-content">
          <a-row :gutter="[40, 56]" class="gnb-body-row">
            <a-col
              :span="12"
              class="gnb-body-col"
              v-for="(menu, index) in gnbMenu"
              :key="index"
            >
              <a-typography-title :level="2">{{
                menu.title
              }}</a-typography-title>
              <a-flex class="gnb-category">
                <div
                  class="category"
                  v-for="(item, idx) in menu.children"
                  :key="idx"
                  @click="handleCategoryClick(item)"
                >
                  <span class="category-symbol">
                    <Icon size="xl" color="default">
                      <template #name>{{ item.symbol }}</template>
                    </Icon>
                  </span>
                  <dl class="category-box">
                    <dt class="category-title">{{ item.title }}</dt>
                    <dd class="category-description">
                      {{ item.description }}
                    </dd>
                  </dl>
                </div>
              </a-flex>
            </a-col>
          </a-row>
        </div>
        <div class="gnb-body-content">
          <div class="gnb-body-left">
            <a-typography-title :level="1">CMP</a-typography-title>
            <a-menu class="gnb-menu">
              <a-menu-item v-for="item in leftMenu" :key="item.key">
                <span>{{ item.title }}</span>
                <Icon color="default">
                  <template #name>keyboard_arrow_right</template>
                </Icon>
              </a-menu-item>
            </a-menu>
          </div>
          <div class="gnb-body-main">
            <a-flex
              class="gnb-category-item"
              vertical
              v-for="(item, index) in mainMenu"
              :key="index"
            >
              <div class="category">
                <span class="category-symbol">
                  <Icon color="default">
                    <template #name>{{ item.symbol }}</template>
                  </Icon>
                </span>
                <dl class="category-box">
                  <dt class="category-title">{{ item.title }}</dt>
                  <dd class="category-description">
                    {{ item.description }}
                  </dd>
                </dl>
              </div>
              <a-divider />
              <a-menu class="gnb-menu">
                <a-menu-item
                  v-for="subItem in item.children"
                  :key="subItem.key"
                >
                  <a-button class="auto">
                    <Icon
                      :color="subItem.bookmark ? 'brand' : 'default'"
                      :fill="subItem.bookmark"
                      @click="subItem.bookmark = !subItem.bookmark"
                    >
                      <template #name>bookmark</template>
                    </Icon>
                  </a-button>
                  <span>{{ subItem.title }}</span>
                </a-menu-item>
              </a-menu>
            </a-flex>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@/components/icons';
import { useClickOutside } from '@/hooks/event/useClickOutside';

const router = useRouter();

const emit = defineEmits<{
  (e: 'close-gnb'): void;
}>();

const handleGnbClose = () => {
  emit('close-gnb');
};

const gnbMenu = ref([
  {
    title: 'Archive',
    children: [
      {
        title: 'Archive',
        description: 'Description for Archive',
        symbol: 'web',
        link: '/archive',
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'IaaS',
        description: 'Description for IaaS',
        symbol: 'web',
        link: '/contrabass',
      },
      {
        title: 'VIOLA',
        description: 'Description for VIOLA',
        symbol: 'web',
        link: '/viola',
      },
      {
        title: 'IaaS SDS+',
        description: 'Description for IaaS SDS+',
        symbol: 'web',
        link: '/ceph',
      },
      {
        title: 'DevOps Tools',
        description: 'Description for DevOps Tools',
        symbol: 'web',
        link: '/cicd',
      },
    ],
  },
  {
    title: 'Menu 3',
    children: [
      {
        title: 'Submenu 3-1',
        description: 'Description for Submenu 3-1',
        symbol: 'web',
      },
      {
        title: 'Submenu 3-2',
        description: 'Description for Submenu 3-2',
        symbol: 'web',
      },
    ],
  },
  {
    title: 'Menu 4',
    children: [
      {
        title: 'Submenu 4-1',
        description: 'Description for Submenu 4-1',
        symbol: 'web',
      },
      {
        title: 'Submenu 4-2',
        description: 'Description for Submenu 4-2',
        symbol: 'web',
      },
    ],
  },
  {
    title: 'Menu 5',
    children: [
      {
        title: 'Submenu 5-1',
        description: 'Description for Submenu 5-1',
        symbol: 'web',
      },
      {
        title: 'Submenu 5-2',
        description: 'Description for Submenu 5-2',
        symbol: 'web',
      },
    ],
  },
]);

const handleCategoryClick = (item: any) => {
  if (item.link) {
    router.push(item.link);
  }
  handleGnbClose();
};

const leftMenu = ref([
  {
    key: '1',
    title: 'menu name',
  },
  {
    key: '2',
    title: 'menu name',
  },
  {
    key: '3',
    title: 'menu name',
  },
  {
    key: '4',
    title: 'menu name',
  },
  {
    key: '5',
    title: 'menu name',
  },
  {
    key: '6',
    title: 'menu name',
  },
]);

const mainMenu = ref([
  {
    title: 'Menu Item Title',
    description: 'Description for the menu item.',
    symbol: 'web',
    children: [
      {
        key: '1',
        title: 'Submenu 1',
        bookmark: true,
      },
      {
        key: '2',
        title: 'Submenu 2',
        bookmark: false,
      },
    ],
  },
  {
    title: 'Menu Item Title',
    description: 'Description for the menu item.',
    symbol: 'web',
    children: [
      {
        key: '1',
        title: 'Submenu 1',
        bookmark: true,
      },
      {
        key: '2',
        title: 'Submenu 2',
        bookmark: false,
      },
      {
        key: '3',
        title: 'Submenu 3',
        bookmark: true,
      },
      {
        key: '4',
        title: 'Submenu 4',
        bookmark: false,
      },
    ],
  },
  {
    title: 'Menu Item Title',
    description: 'Description for the menu item.',
    symbol: 'web',
    children: [
      {
        key: '1',
        title: 'Submenu 1',
        bookmark: true,
      },
      {
        key: '2',
        title: 'Submenu 2',
        bookmark: false,
      },
    ],
  },
  {
    title: 'Menu Item Title',
    description: 'Description for the menu item.',
    symbol: 'web',
    children: [
      {
        key: '1',
        title: 'Submenu 1',
        bookmark: true,
      },
      {
        key: '2',
        title: 'Submenu 2',
        bookmark: false,
      },
      {
        key: '3',
        title: 'Submenu 3',
        bookmark: true,
      },
      {
        key: '4',
        title: 'Submenu 4',
        bookmark: false,
      },
    ],
  },
  {
    title: 'Menu Item Title',
    description: 'Description for the menu item.',
    symbol: 'web',
    children: [
      {
        key: '1',
        title: 'Submenu 1',
        bookmark: true,
      },
      {
        key: '2',
        title: 'Submenu 2',
        bookmark: false,
      },
      {
        key: '3',
        title: 'Submenu 3',
        bookmark: true,
      },
      {
        key: '4',
        title: 'Submenu 4',
        bookmark: false,
      },
    ],
  },
  {
    title: 'Menu Item Title',
    description: 'Description for the menu item.',
    symbol: 'web',
    children: [
      {
        key: '1',
        title: 'Submenu 1',
        bookmark: true,
      },
      {
        key: '2',
        title: 'Submenu 2',
        bookmark: false,
      },
    ],
  },
]);

const { targetRef } = useClickOutside({
  onClickOutside: handleGnbClose,
  ignoreFirstClick: true,
});

const searchExpand = ref(false);

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    searchExpand.value = false;
  } else if (event.key === '/') {
    searchExpand.value = true;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const getPopupContainer = () => {
  return targetRef.value || document.body;
};
</script>
