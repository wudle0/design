<template>
  <a-layout-sider
    v-model:collapsed="state.collapsed"
    collapsible
    :width="256"
    :collapsedWidth="40"
    :trigger="null"
    class="lnb-container"
  >
    <h1 class="logo-wrap">
      <router-link to="/archive/overview" class="auto">
        <span class="name">portfolio</span>
      </router-link>
    </h1>

    <div class="symbol-wrap">
      <div class="symbol">Design guide</div>
      <!-- hover 효과 제거로 주석 -->
      <!-- <div class="symbol scale-up">
        <Icon size="xl">
          <template #name> brightness_6 </template>
        </Icon>
      </div>
      <div class="symbol scale-down">
        <Icon>
          <template #name> brightness_5 </template>
        </Icon>
      </div> -->
    </div>

    <div class="menu-wrap">
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        :inlineIndent="0"
      >
        <template v-for="(menuItem, i) in menuItems" :key="menuItem.key">
          <a-divider v-if="menuItem.groupname && i !== 0" />
          <!-- 그룹이 있는 경우 -->
          <a-menu-item-group v-if="menuItem.groupname" :key="menuItem.key">
            <template #title>
              {{ menuItem?.groupname }}
            </template>
            <!-- 서브메뉴가 있는 경우 -->
            <template v-if="menuItem.subMenuItems">
              <a-sub-menu :key="menuItem.key">
                <template #icon>
                  <component
                    v-if="isCustomIcon(menuItem.meta?.icon)"
                    :is="getCustomIconComponent(menuItem.meta?.icon)"
                    light
                    small
                  />
                  <Icon v-else-if="menuItem.meta?.icon">
                    <template #name>{{ menuItem.meta.icon }}</template>
                  </Icon>
                </template>
                <template #title>{{ menuItem.meta.title }}</template>
                <template
                  v-for="subMenuItem in menuItem.subMenuItems"
                  :key="subMenuItem.key"
                >
                  <!-- 서브메뉴가 없는 경우 -->
                  <template v-if="!subMenuItem.subMenuItems">
                    <a-menu-item :key="subMenuItem.key">
                      <router-link :to="getFullPath(subMenuItem.link || '')">
                        {{ subMenuItem.meta.title }}
                      </router-link>
                    </a-menu-item>
                  </template>
                  <!-- 서브메뉴가 있는 경우 -->
                  <template v-else>
                    <!-- 접히지 않았을 경우 -->
                    <template v-if="!state.collapsed">
                      <a-sub-menu
                        :key="subMenuItem.key"
                        :title="subMenuItem.meta.title"
                      >
                        <template #title>{{ menuItem.meta.title }} </template>
                        <template
                          v-for="thirdMenuItem in subMenuItem.subMenuItems"
                          :key="thirdMenuItem.key"
                        >
                          <a-menu-item>
                            <router-link
                              :to="getFullPath(thirdMenuItem.link || '')"
                            >
                              {{ thirdMenuItem.meta.title }}
                            </router-link>
                          </a-menu-item>
                        </template>
                      </a-sub-menu>
                    </template>
                    <!-- 접혔을 경우 -->
                    <template v-else>
                      <a-menu-item :key="subMenuItem.key">
                        {{ subMenuItem.meta.title }}
                        <a-menu class="collapsed-depth">
                          <a-menu-item
                            v-for="thirdMenuItem in subMenuItem.subMenuItems"
                            :key="thirdMenuItem.key"
                          >
                            <router-link
                              :to="getFullPath(thirdMenuItem.link || '')"
                            >
                              {{ thirdMenuItem.meta.title }}
                            </router-link>
                          </a-menu-item>
                        </a-menu>
                      </a-menu-item>
                    </template>
                  </template>
                </template>
              </a-sub-menu>
            </template>
            <!-- 서브메뉴가 없는 경우 -->
            <a-menu-item v-else :key="menuItem.key">
              <template #icon>
                <component
                  v-if="isCustomIcon(menuItem.meta?.icon)"
                  :is="getCustomIconComponent(menuItem.meta?.icon)"
                  light
                  small
                />
                <Icon v-else-if="menuItem.meta?.icon">
                  <template #name>{{ menuItem.meta.icon }}</template>
                </Icon>
              </template>
              <router-link :to="getFullPath(menuItem.link || '')">
                {{ menuItem.meta.title }}
              </router-link>
            </a-menu-item>
          </a-menu-item-group>
          <!-- 그룹이 없는 경우 -->
          <template v-else>
            <!-- 서브메뉴가 있는 경우 -->
            <template v-if="menuItem.subMenuItems">
              <a-sub-menu :key="menuItem.key">
                <template #icon>
                  <component
                    v-if="isCustomIcon(menuItem.meta?.icon)"
                    :is="getCustomIconComponent(menuItem.meta?.icon)"
                    light
                    small
                  />
                  <Icon v-else-if="menuItem.meta?.icon">
                    <template #name>{{ menuItem.meta.icon }}</template>
                  </Icon>
                </template>
                <template #title>{{ menuItem.meta.title }}</template>
                <template
                  v-for="subMenuItem in menuItem.subMenuItems"
                  :key="subMenuItem.key"
                >
                  <!-- 서브메뉴가 없는 경우 -->
                  <template v-if="!subMenuItem.subMenuItems">
                    <a-menu-item :key="subMenuItem.key">
                      <router-link :to="getFullPath(subMenuItem.link || '')">
                        {{ subMenuItem.meta.title }}
                      </router-link>
                    </a-menu-item>
                  </template>
                  <!-- 서브메뉴가 있는 경우 -->
                  <template v-else>
                    <!-- 접히지 않았을 경우 -->
                    <template v-if="!state.collapsed">
                      <a-sub-menu
                        :key="subMenuItem.key"
                        :title="subMenuItem.meta.title"
                      >
                        <template #title>{{ menuItem.meta.title }}</template>
                        <template
                          v-for="thirdMenuItem in subMenuItem.subMenuItems"
                          :key="thirdMenuItem.key"
                        >
                          <a-menu-item>
                            <router-link
                              :to="getFullPath(thirdMenuItem.link || '')"
                            >
                              {{ thirdMenuItem.meta.title }}
                            </router-link>
                          </a-menu-item>
                        </template>
                      </a-sub-menu>
                    </template>
                    <!-- 접혔을 경우 -->
                    <template v-else>
                      <a-menu-item :key="subMenuItem.key">
                        {{ subMenuItem.meta.title }}
                        <a-menu class="collapsed-depth">
                          <a-menu-item
                            v-for="thirdMenuItem in subMenuItem.subMenuItems"
                            :key="thirdMenuItem.key"
                          >
                            <router-link
                              :to="getFullPath(thirdMenuItem.link || '')"
                            >
                              {{ thirdMenuItem.meta.title }}
                            </router-link>
                          </a-menu-item>
                        </a-menu>
                      </a-menu-item>
                    </template>
                  </template>
                </template>
              </a-sub-menu>
            </template>
            <!-- 서브메뉴가 없는 경우 -->
            <a-menu-item v-else :key="menuItem.key">
              <template #icon>
                <component
                  v-if="isCustomIcon(menuItem.meta?.icon)"
                  :is="getCustomIconComponent(menuItem.meta?.icon)"
                  light
                  small
                />
                <Icon v-else-if="menuItem.meta?.icon">
                  <template #name>{{ menuItem.meta.icon }}</template>
                </Icon>
              </template>
              <router-link :to="getFullPath(menuItem.link || '')">
                {{ menuItem.meta.title }}
              </router-link>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </div>

    <div class="function-wrap">
      <a-menu :selectable="false">
        <ViewAlarm>
          <template #trigger>
            <a-menu-item key="알림">
              <template #icon>
                <a-badge dot>
                  <Icon color="default">
                    <template #name> notifications </template>
                  </Icon>
                </a-badge>
              </template>
              알림
            </a-menu-item>
          </template>
        </ViewAlarm>
        <ViewProfile>
          <template #trigger>
            <a-menu-item key="프로필">
              <template #icon>
                <Icon color="default" fill>
                  <template #name> account_circle </template>
                </Icon>
              </template>
              프로필
            </a-menu-item>
          </template>
        </ViewProfile>
        <a-menu-item key="검색" @click="searchExpand = !searchExpand">
          <template #icon>
            <Icon color="default">
              <template #name> search </template>
            </Icon>
          </template>
          검색
          <a-button class="secondary small">
            <span class="name">/</span>
          </a-button>
        </a-menu-item>
        <a-menu-item key="토글" @click="toggleCollapsed" class="toggle">
          <template #icon>
            <Icon color="default">
              <template #name>
                {{ state.collapsed ? 'last_page' : 'first_page' }}
              </template>
            </Icon>
          </template>
        </a-menu-item>
      </a-menu>
    </div>

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
                  <span class="main-text">업무함 > 서비스 처리 현황</span>
                </a-menu-item>
                <a-menu-item key="a3">
                  <span class="main-text">업무함 > 1:1 문의</span>
                </a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="최근 방문 기록">
                <a-menu-item key="b1">
                  <span class="main-text">신규 서비스 카탈로그 생성</span>
                  <span class="sub-text"
                    >설정 > 서비스 카탈로그 관리 > 서비스 카탈로그</span
                  >
                </a-menu-item>
                <a-menu-item key="b2">
                  <span class="main-text">신규 사용자 생성</span>
                  <span class="sub-text">설정 > 사용자 관리 > 사용자</span>
                </a-menu-item>
                <a-menu-item key="b3">
                  <span class="main-text">인스턴스 생성</span>
                  <span class="sub-text"
                    >Compute Engine > 기본 설정 > 인스턴스 > 인스턴스 생성</span
                  >
                </a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="'생성' 검색 결과">
                <a-menu-item key="c1">
                  <span class="main-text"
                    >Configuration > 사용자 역할 관리 > 사용자 > 사용자 관리 >
                    사용자</span
                  >
                  <span class="highlight-text">생성</span>
                </a-menu-item>
                <a-menu-item key="c2">
                  <span class="main-text"
                    >Configuration > 사용자 역할 관리 > 운영자 > 운영자 관리 >
                    운영자</span
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
  </a-layout-sider>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  Icon,
  ComputingIcon,
  StorageIcon,
  NetworkIcon,
  SecurityIcon,
  DatabaseIcon,
  ContainerIcon,
  ObservabilityIcon,
} from '@/components/icons';
import { useWindowSize } from '@/hooks/size/useWindowSize';
import ViewAlarm from '@/views/publishing-archive/componentView/ViewAlarm.vue';
import ViewProfile from '@/views/publishing-archive/componentView/ViewProfile.vue';
import menuItemList from '@/assets/data/MenuItemList.json';

const route = useRoute();

// 커스텀 아이콘 매핑
const customIconMap = {
  'computing-oke': ComputingIcon,
  'storage-oke': StorageIcon,
  'network-oke': NetworkIcon,
  'security-oke': SecurityIcon,
  'database-oke': DatabaseIcon,
  'container-oke': ContainerIcon,
  'observability-oke': ObservabilityIcon,
};

// 아이콘 타입 확인 함수
const isCustomIcon = (iconName: string | undefined) => {
  return iconName && iconName.endsWith('-oke');
};

// 커스텀 아이콘 컴포넌트 가져오기
const getCustomIconComponent = (iconName: string | undefined) => {
  if (!iconName) return null;
  return customIconMap[iconName as keyof typeof customIconMap];
};

// LNB 상태 관리
const state = reactive({
  collapsed: false,
  selectedKeys: [''],
  openKeys: [''],
  preOpenKeys: [''],
  userManuallyCollapsed: false, // 사용자가 수동으로 접은 상태
});

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.userManuallyCollapsed = true;

  // collapsed가 false일 때만 openKeys를 복구
  if (!state.collapsed) {
    state.openKeys = [...state.preOpenKeys];
  } else {
    state.openKeys = [];
  }

  // lnb-container의 부모 요소 .container에 class 추가
  const container = document.querySelector('.container');
  if (container) {
    if (state.collapsed) {
      container.classList.add('collapsed');
    } else {
      container.classList.remove('collapsed');
    }
  }
};

// 윈도우 크기에 따라 LNB 자동 축소
const { width } = useWindowSize();

watch(
  width,
  (newWidth) => {
    // 사용자가 수동으로 조작한 경우라면 그대로 유지
    if (state.userManuallyCollapsed) {
      return;
    }

    // 기본 동작: 자동 열기/닫기
    if (newWidth < 1440) {
      state.collapsed = true;
    } else {
      state.collapsed = false;
    }
  },
  { immediate: true }
);

// LNB 메뉴
interface MenuItem {
  key: string;
  link?: string;
  groupname?: string;
  meta: {
    title: string;
    icon?: string;
  };
  subMenuItems?: MenuItem[];
}

const menuItems = computed(() => menuItemList as MenuItem[]);

// 현재 경로와 일치하는 메뉴 찾기
const findMenuByPath = (
  items: MenuItem[],
  currentPath: string
): { selectedKey: string; openKeys: string[] } | null => {
  const pathSegments = currentPath.split('/').filter(Boolean);
  const targetPath =
    pathSegments.length >= 2
      ? pathSegments.slice(1).join('/')
      : pathSegments[0] || '';

  for (const item of items) {
    // 직접 링크가 일치하는 경우
    if (item.link && targetPath.startsWith(item.link)) {
      return { selectedKey: item.key, openKeys: [] };
    }

    // 서브메뉴가 있는 경우 재귀 검색
    if (item.subMenuItems) {
      for (const subItem of item.subMenuItems) {
        if (subItem.link && targetPath.startsWith(subItem.link)) {
          return { selectedKey: subItem.key, openKeys: [item.key] };
        }

        // 3뎁스 메뉴가 있는 경우
        if (subItem.subMenuItems) {
          for (const thirdItem of subItem.subMenuItems) {
            if (thirdItem.link && targetPath.startsWith(thirdItem.link)) {
              return {
                selectedKey: thirdItem.key,
                openKeys: [item.key, subItem.key],
              };
            }
            // 4뎁스 이상이 있어도 3뎁스까지만 표기
            if (thirdItem.subMenuItems) {
              for (const fourthItem of thirdItem.subMenuItems) {
                if (fourthItem.link && targetPath.startsWith(fourthItem.link)) {
                  return {
                    selectedKey: fourthItem.key,
                    openKeys: [item.key, subItem.key],
                  };
                }
              }
            }
          }
        }
      }
    }
  }
  return null;
};

// 메뉴 상태 설정
const setMenuState = () => {
  const currentPath = route.path;
  const currentMenuItems = menuItems.value;
  const result = findMenuByPath(currentMenuItems, currentPath);

  if (result) {
    state.selectedKeys = [result.selectedKey];
    state.openKeys = [...result.openKeys];
    state.preOpenKeys = [...result.openKeys];
  } else {
    // 일치하는 메뉴가 없으면 기본값 설정
    state.selectedKeys = [];
    state.openKeys = [];
    state.preOpenKeys = [];
  }
};

const searchExpand = ref(false);
const searchInput = ref<HTMLInputElement | null>(null);

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    searchExpand.value = false;
  } else if (event.key === '/') {
    searchExpand.value = true;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  // 마운트 시 현재 경로에 맞는 메뉴 상태 설정
  setMenuState();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

// 라우트 변경 시에도 메뉴 상태 업데이트
watch(
  () => route.path,
  () => {
    setMenuState();
  }
);

const getFullPath = (link: string) => {
  // 현재 경로에 따라 링크를 완전한 경로로 변환
  if (link.startsWith('/')) {
    return link;
  }
  return `/${route.path.split('/')[1]}/${link}`;
};
</script>
