<template>
  <TopTitle
    title="트리"
    text="트리는 기본 트리와 드래그&드롭 기능을 포함한 형태를 모두 제공합니다. 
    트리는 폴더 아이콘, 화살표 아이콘의 2가지 형태를 사용합니다.
    트리 노드가 버튼(편집,제거 등)이 있을 경우 해당 버튼은 호버 시 노출됩니다."
  />
  <!-- <a-typography-title :level="3">
    디렉토리 트리 (드래그 지원 안함, 우측 버튼있을 경우 호버 시 노출)
  </a-typography-title> -->
  <!-- <div class="temp-wrap">
    <a-directory-tree
      :show-line="true"
      :show-icon="true"
      :default-expanded-keys="['0-0-0']"
      :tree-data="treeDirectoryData"
      @select="onSelect"
    >
      <template #switcherIcon>
        <span style="display: none"></span>
      </template>
      <template #title="{ dataRef }">
        <a-flex class="tree-title-group">
          <div class="group-items">
            <a-typography-title :level="4" class="item-title">
              {{ dataRef.title }}
            </a-typography-title>
            <div class="tag-wrap" v-if="dataRef.tag">
              <a-tag class="gray small">
                <p class="tag-wrap-text">
                  {{ dataRef.tag.toUpperCase() }}
                </p>
              </a-tag>
            </div>
          </div>
          <a-flex class="group-items items-end">
            <a-button class="auto">
              <Icon size="xs" color="default">
                <template #name>edit</template>
              </Icon>
            </a-button>
            <a-button class="auto">
              <Icon size="xs" color="default">
                <template #name>delete</template>
              </Icon>
            </a-button>
          </a-flex>
        </a-flex>
      </template>
    </a-directory-tree>
  </div> -->

  <!-- <a-divider class="size-large" /> -->
  <a-typography-title :level="3">
    일반 트리 (아이콘 삽입(switcherIcon 슬롯 공백))
  </a-typography-title>
  <div class="temp-wrap">
    <a-tree
      :show-line="true"
      :show-icon="true"
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      v-model:treeData="treeData"
      v-model:selectedKeys="selectedKeys"
      block-node
      @expand="onExpand"
      :default-expanded-keys="['0-0-0']"
    >
      <template #switcherIcon> </template>
      <template #title="{ dataRef }">
        <a-flex class="tree-title-group">
          <div class="group-items">
            <a-typography-title :level="4" class="item-title">
              {{ dataRef.title }}
            </a-typography-title>
            <div class="tag-wrap" v-if="dataRef.tag">
              <a-tag class="gray small">
                <p class="tag-wrap-text">{{ dataRef.tag.toUpperCase() }}</p>
              </a-tag>
            </div>
          </div>
          <a-flex class="group-items items-end">
            <div class="btn-wrap">
              <a-button class="auto" @click.stop>
                <Icon size="xs" color="default">
                  <template #name>edit</template>
                </Icon>
              </a-button>
              <a-button class="auto" @click.stop>
                <Icon size="xs" color="default">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </div>
          </a-flex>
        </a-flex>
      </template>
    </a-tree>
  </div>

  <a-divider class="size-large" />
  <a-typography-title :level="3">
    일반 트리 (드래그 지원, 아이콘 강제 삽입(switcherIcon 슬롯 공백))
  </a-typography-title>
  <div class="temp-wrap">
    <a-tree
      :show-line="true"
      :show-icon="true"
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      v-model:treeData="treeData"
      v-model:selectedKeys="selectedKeys"
      block-node
      draggable
      @expand="onExpand"
      @dragenter="onDragEnter"
      @drop="onDrop"
    >
      <template #switcherIcon>
        <!-- <span style="display: none"></span> -->
      </template>
      <template #title="{ dataRef }">
        <a-flex class="tree-title-group">
          <div class="group-items">
            <a-typography-title :level="4" class="item-title">
              {{ dataRef.title }}
            </a-typography-title>
            <div class="tag-wrap" v-if="dataRef.tag">
              <a-tag class="gray small">
                <p class="tag-wrap-text">{{ dataRef.tag.toUpperCase() }}</p>
              </a-tag>
            </div>
          </div>
        </a-flex>
      </template>
    </a-tree>
  </div>

  <a-divider class="size-large" />
  <a-typography-title :level="3">
    일반 화살표 트리 (show-line:true 일 경우 화살표 아이콘 제거되므로, 별도의
    화살표 커스텀 아이콘 삽입, 마지막 자식 노드 별도 써클아이콘 적용)
  </a-typography-title>
  <div class="temp-wrap">
    <a-tree
      :show-line="{ showLeafIcon: true }"
      :show-icon="true"
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      v-model:treeData="treeData"
      v-model:selectedKeys="selectedKeys"
      block-node
      @expand="onExpand"
      @select="handleSelect"
      class="custom-arrow-tree"
    >
      <template #switcherIcon="{ isLeaf }">
        <span class="custom-icon">
          {{ isLeaf }}
          <Icon size="xs" color="default">
            <template #name> arrow_drop_down </template>
          </Icon>
        </span>
      </template>
      <template #title="{ dataRef }">
        <a-flex class="tree-title-group">
          <div class="group-items">
            <a-typography-title :level="4" class="item-title">
              {{ dataRef.title }}
            </a-typography-title>
            <div class="tag-wrap" v-if="dataRef.tag">
              <a-tag class="gray small">
                <p class="tag-wrap-text">
                  {{ dataRef.tag.toUpperCase() }}
                </p>
              </a-tag>
            </div>
          </div>
          <a-flex class="group-items items-end">
            <div class="btn-wrap">
              <a-button class="auto" @click.stop>
                <Icon size="xs" color="default">
                  <template #name>edit</template>
                </Icon>
              </a-button>
              <a-button class="auto" @click.stop>
                <Icon size="xs" color="default">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </div>
          </a-flex>
        </a-flex>
      </template>
    </a-tree>
  </div>

  <a-divider class="size-large" />
  <a-typography-title :level="3">
    tree-wrap 내부에서 트리 노드 사이 구분선 적용
  </a-typography-title>
  <div class="tree-wrap">
    <a-tree
      :show-line="{ showLeafIcon: true }"
      :show-icon="true"
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      :tree-data="virtualTreeDataNode"
      v-model:selectedKeys="selectedKeys"
      block-node
      @expand="onExpand"
      @select="handleSelect"
      class="custom-arrow-tree"
    >
      <template #switcherIcon="{ isLeaf }">
        <span class="custom-icon">
          {{ isLeaf }}
          <Icon size="xs" color="default">
            <template #name> arrow_drop_down </template>
          </Icon>
        </span>
      </template>
      <template #title="{ dataRef }">
        <a-flex
          class="tree-title-group"
          :class="dataRef.isRoot ? 'root-node' : ''"
        >
          <div class="group-items">
            <a-checkbox
              v-model:checked="checked"
              @click.stop
              v-if="segmentValue === '세그먼트 다중 선택'"
            />
            <i
              :class="`ico-monitor-${dataRef.key.toString().split('-').length}dp`"
            >
            </i>
            <a-typography-title :level="4" class="item-title">
              {{ dataRef.title }}
            </a-typography-title>
            <a-divider type="vertical" />
            <a-typography-text class="typography-label-5 ant-typography-subtle">
              {{ dataRef.label }}
            </a-typography-text>
            <!-- 첫번째 노드일 경우 자식 노드 개수 표시 -->
            <div class="tag-wrap" v-if="!dataRef.key.toString().includes('-')">
              <a-tag class="gray small">
                <p class="tag-wrap-text">
                  +{{ dataRef.children?.length || 0 }}
                </p>
              </a-tag>
            </div>
          </div>
          <a-flex class="group-items items-end">
            <div class="tag-wrap" v-if="dataRef.status">
              <a-tag
                :class="[
                  'small',
                  dataRef.status === 'active'
                    ? 'green'
                    : dataRef.status === 'warning'
                      ? 'orange'
                      : dataRef.status === 'error'
                        ? 'red'
                        : 'gray',
                ]"
              >
                <p class="tag-wrap-text">
                  {{ dataRef.status.toUpperCase() }}
                </p>
              </a-tag>
            </div>
            <a-dropdown trigger="click">
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1"> 삭제 </a-menu-item>
                </a-menu>
              </template>
              <a-button class="auto">
                <Icon size="xs" color="default">
                  <template #name>more_vert</template>
                </Icon>
              </a-button>
            </a-dropdown>
          </a-flex>
        </a-flex>
      </template>
    </a-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TreeProps } from 'ant-design-vue';
import type { AntTreeNodeDropEvent } from 'ant-design-vue/es/tree';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

type Key = string | number;
const selectedKeys = ref<Key[]>(['0']);
const expandedKeys = ref<Key[]>(['0-0-0']);
const autoExpandParent = ref<boolean>(true);
const onExpand = (keys: string[]) => {
  expandedKeys.value = keys;
  autoExpandParent.value = false;
};
const handleSelect: TreeProps['onSelect'] = (selectedKeysList, { node }) => {
  const key = node.key as string;
  selectedKeys.value = selectedKeysList;

  // 자식이 있는 경우 열고 닫기 toggle
  if (node.children && node.children.length > 0) {
    const index = expandedKeys.value.indexOf(key);
    if (index > -1) {
      expandedKeys.value.splice(index, 1);
    } else {
      expandedKeys.value.push(key);
    }
  }
};

const treeDirectoryData = ref<TreeProps['treeData']>([
  {
    title: 'tree directory node 1',
    key: '0-0',
    children: [
      {
        title: 'tree node 1-0',
        key: '0-0-0',
        children: [
          { title: 'label', key: '0-0-0-0', tag: 'tag' },
          {
            title: 'label',
            key: '0-0-0-1',
          },
          { title: 'label', key: '0-0-0-2' },
        ],
      },
      {
        title: 'tree node 1-1',
        key: '0-0-1',
        children: [{ title: 'label', key: '0-0-1-0' }],
      },
      {
        title: 'tree node 1-2',
        key: '0-0-2',
        children: [
          { title: 'label 1', key: '0-0-2-0' },
          {
            title: 'label 2',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
  {
    title: 'tree node 2',
    key: '0-1',
    children: [
      {
        title: 'tree node 2-0',
        key: '0-1-0',
        children: [
          { title: 'label', key: '0-1-0-0' },
          { title: 'label', key: '0-1-0-1' },
        ],
      },
    ],
  },
  {
    title: 'tree node 3',
    key: '0-2',
    children: [
      {
        title: 'tree node 3-0',
        key: '0-2-0',
        children: [
          { title: 'label', key: '0-2-0-0' },
          { title: 'label', key: '0-2-0-1' },
        ],
      },
    ],
  },
]);
const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
  console.log('selected', selectedKeys, info);
};

interface TreeDataNode {
  key: string | number;
  title: string;
  tag?: string;
  children?: TreeDataNode[];
}

const treeData = ref<TreeDataNode[]>([
  {
    title: 'tree node 1',
    key: '0',
    children: [
      {
        title: 'tree node 1-0',
        key: '0-0',
        children: [
          { title: 'label 1-1', key: '0-0-0', tag: 'tag' },
          { title: 'label 1-2', key: '0-0-1' },
        ],
      },
      {
        title: 'tree node 1-1',
        key: '0-1',
        children: [{ title: 'label 1-1', key: '0-1-0' }],
      },
    ],
  },
  {
    title: 'tree node 2',
    key: '1',
    children: [
      {
        title: 'tree node 2-0',
        key: '1-0',
        children: [
          { title: 'label 2-1', key: '1-0-0', tag: 'tag' },
          { title: 'label 2-2', key: '1-0-1' },
        ],
      },
    ],
  },
]);

const onDragEnter = (info: any) => {
  console.log('onDragEnter', info);
};

const onDrop = (info: AntTreeNodeDropEvent) => {
  const dropKey = info.node.key;
  const dragKey = info.dragNode.key;
  const dropPosition = info.dropPosition;

  const data = [...treeData.value];

  let dragObj: TreeDataNode;

  const loop = (
    data: TreeDataNode[],
    key: string | number,
    callback: (item: TreeDataNode, index: number, arr: TreeDataNode[]) => void
  ) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.key === key) {
        callback(item, i, data);
        return;
      }
      if (item.children) {
        loop(item.children, key, callback);
      }
    }
  };

  // 드래그 대상 제거
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1);
    dragObj = item;
  });

  if (!info.dropToGap) {
    // 노드 안에 드롭
    loop(data, dropKey, (item) => {
      item.children = item.children || [];
      item.children.unshift(dragObj!);
    });
  } else {
    // 노드 사이에 드롭
    let ar: TreeDataNode[] = [];
    let i = 0;
    loop(data, dropKey, (_item, index, arr) => {
      ar = arr;
      i = index;
    });
    if (dropPosition < 0) {
      ar.splice(i, 0, dragObj!); // 위에 삽입
    } else {
      ar.splice(i + 1, 0, dragObj!); // 아래에 삽입
    }
  }

  // treeData.value = data;
  treeData.value = [...data];
};

interface VirtualTreeDataNode {
  key: string | number;
  title: string;
  label?: string;
  tag?: string;
  isRoot?: boolean;
  status?: string;
  children?: VirtualTreeDataNode[];
}

const virtualTreeDataNode = ref<VirtualTreeDataNode[]>([
  {
    title: 'Vlan A',
    key: '0',
    label: 'label',
    status: 'active',
    isRoot: true,
    children: [
      {
        title: 'Host 1-0',
        key: '0-0',
        label: '192.168.10.0/24',
        status: 'active',
        children: [
          {
            title: '장비 1-1',
            key: '0-0-0',
            label: '192.168.10.10',
            status: 'active',
          },
          {
            title: '장비 1-2',
            key: '0-0-1',
            label: '192.168.10.11',
            status: 'active',
          },
        ],
      },
      {
        title: 'Host 1-2',
        key: '0-1',
        label: '192.168.20.0/24',
        status: 'active',
        children: [
          {
            title: 'label 2-1',
            key: '0-1-0',
            label: '192.168.20.10',
            status: 'active',
          },
        ],
      },
    ],
  },
  {
    title: 'Vlan 2',
    key: '1',
    label: 'label',
    status: 'active',
    isRoot: true,
    children: [
      {
        title: 'Host 2-0',
        key: '1-0',
        label: '192.168.30.0/24',
        status: 'active',
        children: [
          {
            title: 'label 2-1',
            key: '1-0-0',
            label: '192.168.30.10',
            status: 'active',
          },
          {
            title: 'label 2-2',
            key: '1-0-1',
            label: '192.168.30.11',
            status: 'active',
          },
        ],
      },
    ],
  },
  {
    title: 'Vlan 3 ellipsis test ellipsis test ellipsis test',
    key: '2',
    label: 'label',
    status: 'active',
    isRoot: true,
    children: [
      {
        title: 'Host 3-0',
        key: '2-0',
        label: '192.168.40.0/24',
        status: 'active',
        children: [
          {
            title: 'label 3-1 ellipsis test ellipsis test',
            key: '2-0-0',
            label: '192.168.40.10',
            status: 'active',
          },
          {
            title: 'label 3-2',
            key: '2-0-1',
            label: '192.168.40.11',
            status: 'active',
          },
        ],
      },
    ],
  },
  {
    title: 'Vlan 4',
    key: '3',
    label: 'label',
    status: 'active',
    isRoot: true,
    children: [
      {
        title: 'Host 4-0',
        key: '3-0',
        label: '192.168.50.0/24',
        status: 'active',
        children: [
          {
            title: '장비 4-1',
            key: '3-0-0',
            label: '192.168.50.10',
            status: 'active',
          },
          {
            title: '장비 4-2',
            key: '3-0-1',
            label: '192.168.50.11',
            status: 'active',
          },
        ],
      },
    ],
  },
  {
    title: 'Vlan 5',
    key: '4',
    label: 'label',
    status: 'active',
    isRoot: true,
    children: [
      {
        title: 'Host 5-0',
        key: '4-0',
        label: '192.168.60.0/24',
        status: 'active',
        children: [
          {
            title: '장비 5-1',
            key: '4-0-0',
            label: '192.168.60.10',
            status: 'active',
          },
          {
            title: '장비 5-2',
            key: '4-0-1',
            label: '192.168.60.11',
            status: 'active',
          },
        ],
      },
    ],
  },
  {
    title: 'Vlan 6',
    key: '5',
    label: 'label',
    status: 'active',
    isRoot: true,
    children: [
      {
        title: 'Host 6-0',
        key: '5-0',
        label: '192.168.70.0/24',
        status: 'active',
        children: [
          {
            title: '장비 6-1',
            key: '5-0-0',
            label: '192.168.70.10',
            status: 'active',
          },
          {
            title: '장비 6-2',
            key: '5-0-1',
            label: '192.168.70.11',
            status: 'active',
          },
        ],
      },
    ],
  },
]);
</script>
<style scoped>
h2 {
  display: block;
  margin: 20px 0 10px !important;
}
.ant-divider.size-large {
  margin: 20px 0 !important;
}
.temp-wrap {
  width: 320px;
}
</style>
