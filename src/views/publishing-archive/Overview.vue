<template>
  <a-flex
    vertical
    gap="20"
    style="width: 100%; overflow: hidden; margin-bottom: 40px"
  >
    <a-flex vertical gap="20">
      <a-flex vertical gap="8" align="flex-start">
        <!-- 퍼블 확인 용 페이지로 검수/리뷰 기간에 잠시 주석-->
        <router-link to="layout">
          <a-button class="primary"> 레이아웃(Max) 보기 </a-button>
        </router-link>
        <a-typography-title :level="3" style="display: block; width: 100%">
          레이아웃_대시보드
        </a-typography-title>
        <a-flex gap="6">
          <router-link to="layout/dashboard">
            <a-button class="primary"> 기본 </a-button>
          </router-link>
        </a-flex>
        <a-typography-title :level="3" style="display: block; width: 100%">
          레이아웃_목록 (타이틀, 탭, 세그먼트, sider, 테이블 등)
        </a-typography-title>
        <a-flex gap="6">
          <router-link to="layout/list">
            <a-button class="primary"> 기본 </a-button>
          </router-link>
          <router-link to="layout/listTab">
            <a-button class="primary"> 탭 </a-button>
          </router-link>
          <router-link to="layout/listTabSideView">
            <a-button class="primary"> 탭, Sider </a-button>
          </router-link>
          <router-link to="layout/listSideView">
            <a-button class="primary"> Sider </a-button>
          </router-link>
          <router-link to="layout/listExpandTable">
            <a-button class="primary">
              세그먼트, 확장 테이블, 필터 패널
            </a-button>
          </router-link>
        </a-flex>
        <a-typography-title :level="3" style="display: block; width: 100%">
          레이아웃_상세
        </a-typography-title>
        <a-flex gap="6">
          <router-link to="layout/detail">
            <a-button class="primary"> 기본 </a-button>
          </router-link>
          <router-link to="layout/detailPanel">
            <a-button class="primary"> 패널 </a-button>
          </router-link>
          <router-link to="layout/detailTreeView">
            <a-button class="primary"> 트리뷰 </a-button>
          </router-link>
        </a-flex>
        <a-typography-title :level="3" style="display: block; width: 100%">
          레이아웃_생성
        </a-typography-title>
        <a-flex gap="6">
          <router-link to="layout/create">
            <a-button class="primary"> 기본 </a-button>
          </router-link>
          <router-link to="layout/createStep">
            <a-button class="primary"> 스텝 </a-button>
          </router-link>
          <router-link to="layout/createStepPanel">
            <a-button class="primary"> 스텝, 패널 </a-button>
          </router-link>
        </a-flex>
      </a-flex>
    </a-flex>
  </a-flex>

  <!-- <div class="grid-wrap">
    <RouterLink
      v-for="item in flatComponentList"
      :key="item.key"
      :to="`/archive/${item.link}`"
      class="component-tile"
    >
      <div class="thumbnail">
        <div class="preview-wrapper">
          <component
            :is="loadedComponents[item.name]"
            v-if="loadedComponents[item.name]"
          />
        </div>
      </div>
      <div class="label">
        {{ prettifyName(item.name) }}
        <Icon>
          <template #name>arrow_forward_ios</template>
        </Icon>
      </div>
    </RouterLink>
  </div> -->
</template>

<script setup lang="ts">
import { shallowReactive } from 'vue';
import menuItemList from '@/assets/data/MenuItemList.json';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const modules = import.meta.glob(
  '@/views/publishing-archive/compoÓnentView/*.vue'
);

const flatComponentList = menuItemList.flatMap((group) =>
  group.subMenuItems ? group.subMenuItems : []
);

const loadedComponents: Record<string, any> = shallowReactive({});

flatComponentList.forEach((item) => {
  const name = item.name;
  const fileName = `${name.charAt(0).toUpperCase()}${name.slice(1)}.vue`;
  const modulePath = Object.keys(modules).find((path) =>
    path.endsWith(fileName)
  );
  if (modulePath) {
    modules[modulePath]().then((mod: any) => {
      loadedComponents[name] = mod.default;
    });
  }
});

function prettifyName(name: string) {
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}
</script>

<style scoped>
.grid-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  max-width: 1400px;
  margin: 0 auto;
  gap: 30px 80px;
}
.component-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.thumbnail {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: var(--layer-02);
}
.label {
  width: 100%;
  padding: var(--spacing-16) 0;
  color: var(--text-default);
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  padding-left: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.preview-wrapper {
  all: initial;
  * {
    all: unset;
  }

  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  position: relative;

  transform: scale(0.7);
  transform-origin: 80px center;
}
</style>
