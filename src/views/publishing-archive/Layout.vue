<template>
  <div class="page-container">
    <div class="main-panel">
      <!-- 패널 타이틀 영역 -->
      <div class="panel-header">
        <BasicTitle
          level="panel"
          title="panel-header (panel(page) title component)"
          description="panel-header-description"
          :backbutton="true"
          :tooltip="{ title: '패널 타이틀 컴포넌트 도움말 툴팁', icon: 'info' }"
          :tags="[
            { text: 'success', color: 'green', size: 'large' },
            { text: 'warning', color: 'red', size: 'large' },
          ]"
        >
          <template #extra>
            <a-button class="primary"> primary </a-button>
            <a-button class="secondary">secondary</a-button>
            <a-button class="secondary danger">secondary danger</a-button>
            <a-button class="tertiary" disabled>tertiary disabled</a-button>
          </template>
        </BasicTitle>
      </div>
      <!-- 패널 컨텐츠 영역 -->
      <div class="panel-body">
        <!-- sider (고정 너비 : 320px) -->
        <TheSider
          v-model:collapsed="siderCollapsed"
          @update:collapsed="handleSiderCollapse"
        >
          <template #header="{ onToggle }">
            <BasicTitle
              level="content"
              title="sider-content (content title component)"
              :siderButton="true"
              :onToggle="onToggle"
              :tooltip="{
                title: 'content title component 도움말 툴팁',
                icon: 'info',
              }"
              :tags="[{ text: 'TAG', color: 'blue' }]"
            >
              <template #extra>
                <a-button class="primary"> primary </a-button>
                <a-button class="secondary">secondary</a-button>
              </template>
            </BasicTitle>
          </template>
          <template #body>
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
                <a-list :data-source="listDataVertical">
                  <template #renderItem="{ item }">
                    <a-list-item>
                      <div class="key-area">
                        {{ item.key.title }}
                        <!-- 개수 노출 추가 (isCount) -->
                        <template v-if="item.key.isCount">
                          <span class="count-text">
                            {{ item.value.length }}
                          </span>
                        </template>
                        <a-button
                          class="link accent"
                          target="_blank"
                          v-if="item.key.link"
                        >
                          {{ item.key.link.text }}
                          <Icon color="default" v-if="item.key.link.icon">
                            <template #name>open_in_new</template>
                          </Icon>
                        </a-button>
                        <a-tooltip v-if="item.key.tooltip">
                          <template #title>
                            {{ item.key.tooltip }}
                          </template>
                          <Icon size="xs" color="default">
                            <template #name>help</template>
                          </Icon>
                        </a-tooltip>
                        <!-- key 우측에 카피 버튼 추가 (isCopy) -->
                        <CopyButton
                          :textToCopy="item.value[0].text"
                          v-if="item.key.isCopy === true"
                          size="xs"
                        />
                      </div>
                      <div class="value-area">
                        <!-- viewTooltipText 타입 추가: 말줄임, 다수 텍스트 값에 툴팁으로 대응 가능한 (컴포넌트 내부에서 반복 처리) -->
                        <template
                          v-if="item.value[0]?.type === 'viewTooltipText'"
                        >
                          <div class="text">
                            <BasicViewText
                              :title="item.key.title"
                              :value="item.value"
                              :viewType="'tooltip'"
                            />
                          </div>
                        </template>

                        <!-- viewTooltipText 타입 추가 : 말줄임, 다수 텍스트 노출 시 더보기/접기 기능 제공 (컴포넌트 내부에서 반복 처리) -->
                        <template v-if="item.value[0]?.type === 'viewMoreText'">
                          <div class="text">
                            <BasicViewText
                              :title="item.key.title"
                              :value="item.value"
                              :viewType="'more'"
                            />
                          </div>
                        </template>

                        <template
                          v-for="(value, index) in item.value"
                          :key="index"
                        >
                          <!-- 텍스트 유형의 value 가 2개 미만일 경우에만 전체 텍스트 노출, 말줄임+팝오버 제공 -->
                          <!-- <div class="text" v-if="value.type === 'text'">
                            <template v-if="item.value.length < 2">
                              <BasicEllipsisText
                                :title="item.key.title"
                                :text="value.text"
                                tooltipView
                              />
                            </template>
                            <template v-else>
                              {{ value.text }}
                            </template>
                          </div> -->
                          <div class="text" v-if="value.type === 'text'">
                            {{ value.text }}
                          </div>
                          <div
                            class="text-accent"
                            v-if="value.type === 'textAccent'"
                          >
                            {{ value.text }}
                          </div>
                          <div class="copy" v-if="value.type === 'copy'">
                            {{ value.text }}
                            <a-button class="auto">
                              <Icon size="xs" color="default">
                                <template #name>content_copy</template>
                              </Icon>
                            </a-button>
                          </div>
                          <div class="tag-wrap" v-if="value.type === 'tag'">
                            <a-tag
                              v-for="(tag, tagIndex) in value.tags"
                              :key="tagIndex"
                              :color="tag.color"
                              :class="[tag.color, 'small']"
                            >
                              <p class="tag-wrap-text">{{ tag.text }}</p>
                            </a-tag>
                          </div>
                          <div class="button" v-if="value.type === 'button'">
                            <a-button class="secondary small">
                              {{ value.text }}
                            </a-button>
                          </div>
                          <div
                            class="link-button"
                            v-if="value.type === 'linkButton'"
                          >
                            <a-button class="link" target="_blank">
                              {{ value.text }}
                              <Icon color="default">
                                <template #name>open_in_new</template>
                              </Icon>
                            </a-button>
                          </div>
                          <div
                            class="progress"
                            v-if="value.type === 'progress'"
                          >
                            <div class="progress-box green">
                              <a-progress
                                :percent="value.percent"
                                :size="8"
                                :show-info="false"
                              />
                              <div class="ant-progress-label">
                                <span class="ant-progress-label-item">
                                  Label
                                </span>
                                <span class="ant-progress-label-item">
                                  Label
                                  <span class="require">*</span>
                                </span>
                                <span class="ant-progress-label-item">
                                  <span>
                                    <div class="tag-wrap">
                                      <a-tag class="bullet blue">
                                        <p class="tag-wrap-text">Label</p>
                                      </a-tag>
                                    </div>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                    </a-list-item>
                  </template>
                </a-list>
              </div>
            </section>
          </template>
        </TheSider>

        <!-- side view (고정 너비 : 320px) -->
        <TheSideView>
          <template #header>
            <BasicTitle
              level="content"
              title="side-view-content (content title component)"
              :tags="[{ text: 'TAG', color: 'blue' }]"
            />
          </template>
          <template #body>
            <a-form :model="formState" autocomplete="off" layout="vertical">
              <BasicTitle
                level="form"
                title="form title component"
                description="description"
                :tooltip="{
                  title: '폼 타이틀 컴포넌트 도움말 툴팁',
                  icon: 'info',
                }"
              />
              <!-- 수직 정렬일 경우 form-item-group 제외 (생성에서만 사용) -->
              <a-form-item :rules="[{ required: true }]" label="label">
                <a-checkbox-group
                  v-model:value="formState.checkedValueDefault"
                  class="vertical"
                >
                  <a-checkbox value="a">vertical check 1</a-checkbox>
                  <a-checkbox value="b">vertical check 2</a-checkbox>
                  <a-checkbox value="c">vertical check 3</a-checkbox>
                  <a-checkbox value="d" disabled>vertical check 4</a-checkbox>
                  <a-checkbox value="e" disabled>vertical check 5</a-checkbox>
                </a-checkbox-group>
              </a-form-item>
              <a-form-item :rules="[{ required: true }]" label="label">
                <a-checkbox-group
                  v-model:value="formState.checkedValueDefault"
                  class="vertical"
                >
                  <a-checkbox value="a">vertical check 1</a-checkbox>
                  <a-checkbox value="b">vertical check 2</a-checkbox>
                  <a-checkbox value="c">vertical check 3</a-checkbox>
                  <a-checkbox value="d" disabled>vertical check 4</a-checkbox>
                  <a-checkbox value="e" disabled>vertical check 5</a-checkbox>
                </a-checkbox-group>
              </a-form-item>
            </a-form>
            <a-divider class="size-large" />
            <section class="section">
              <div class="section-header">
                <BasicTitle level="section" title="section title component" />
              </div>
              <div class="section-body">
                <Filter size="medium" />
                <div class="tree-wrap">
                  <a-tree
                    :show-line="{ showLeafIcon: true }"
                    :show-icon="true"
                    :expanded-keys="expandedKeys"
                    :auto-expand-parent="autoExpandParent"
                    :tree-data="treeData"
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
                          <a-typography-title :level="4" class="item-title">
                            {{ dataRef.title }}
                          </a-typography-title>
                          <!-- <a-divider type="vertical" />
                          <a-typography-text
                            class="typography-label-5 ant-typography-subtle"
                          >
                            {{ dataRef.label }}
                          </a-typography-text> -->
                          <!-- 첫번째 노드일 경우 자식 노드 개수 표시 -->
                          <div
                            class="tag-wrap"
                            v-if="!dataRef.key.toString().includes('-')"
                          >
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
              </div>
            </section>
            <a-divider class="size-large" />
            <section class="section">
              <div class="section-header">
                <BasicTitle level="section" title="section title component" />
              </div>
              <div class="section-body">
                <Filter size="medium" />
                <div class="tree-wrap">
                  <a-tree
                    :key="index"
                    :show-line="true"
                    :show-icon="true"
                    :expanded-keys="expandedKeys"
                    :auto-expand-parent="autoExpandParent"
                    v-model:treeData="treeData"
                    v-model:selectedKeys="selectedKeys"
                    block-node
                    @expand="onExpand"
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
                  </a-tree>
                </div>
              </div>
            </section>
          </template>
        </TheSideView>

        <!-- side step (고정 너비 : 236px)-->
        <TheSideStep :steps="steps" />

        <!-- 중앙 컨텐츠 (가변) -->
        <div class="main-content">
          <!-- content or section 삽입 예정 -->
        </div>
      </div>
    </div>

    <!-- 패널 사이즈 가이드
      필터 : xs (panel-size-xs)
      가이드 : md (panel-size-md) 
      추후 가이드/필터 패널 컴포넌트로 변경 예정
    -->
    <!-- 공통 THeFixPanel => Guide, Filter 패널 컴포넌트로 분리 -->
    <!-- <TheFixPanel size="md" class="panel-guide">
      <template #title>
        <BasicTitle
          level="panel"
          title="panel-header (panel(page) title component)"
          :tooltip="{
            title: 'panel(page) tiitle component 도움말 툴팁',
            icon: 'info',
          }"
        />
      </template>
      <template #header>
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
      </template>
      <template #body>
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
            <a-typography-title :level="2"> section-body </a-typography-title>
          </div>
        </section>
        <a-divider class="size-large" />
        <a-collapse
          v-model:activeKey="guideActiveKey"
          
          :bordered="false"
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
                  <a-button class="secondary"> Tab-function </a-button>
                </a-flex>
              </a-flex>
            </template>
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
                      element.dataset; const label = (data.label) ?data.label :
                      ''; const previousValue = (data.previousValue) ?
                      data.previousValue : ''; const initialEvt = evt;
                      this.changeState({ group: data.event, element, label,
                      previousValue, initialEvt, toggleState = (element, evt) =>
                      { const data = element.dataset; const label = (data.label)
                      ?data.label : ''; const previousValue =
                      (data.previousValue) ? data.previousValue : ''; const
                      initialEvt = evt; this.changeState({ group: data.event,
                      element, label, previousValue, initialEvt, }); }
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </a-collapse-panel>
        </a-collapse>
        <a-divider class="size-large" />
        <a-collapse  :bordered="false">
          <template #expandIcon="{ isActive }">
            <span :class="{ rotate: isActive }">
              <Icon size="md" color="default">
                <template #name>keyboard_arrow_right</template>
              </Icon>
            </span>
          </template>
          <a-collapse-panel tabIndex="0">
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
                  <a-button class="secondary"> Tab-function </a-button>
                </a-flex>
              </a-flex>
            </template>
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
        <a-divider class="size-large" />
        <a-collapse  :bordered="false">
          <template #expandIcon="{ isActive }">
            <span :class="{ rotate: isActive }">
              <Icon size="md" color="default">
                <template #name>keyboard_arrow_right</template>
              </Icon>
            </span>
          </template>
          <a-collapse-panel tabIndex="0">
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
                  <a-button class="secondary"> Tab-function </a-button>
                </a-flex>
              </a-flex>
            </template>
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
      </template>
    </TheFixPanel> -->

    <TheGuidePanel size="md" />
    <TheFilterPanel size="xs" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { Icon } from '@/components/icons';
import {
  TheSider,
  TheSideView,
  TheSideStep,
  TheFixPanel,
  TheGuidePanel,
  TheFilterPanel,
  BasicTitle,
  BasicEllipsisText,
  BasicViewText,
} from '@/components/layouts';
import ViewTable from '@/views/publishing-archive/componentView/ViewTable.vue';
import { Filter } from '@/components/table';
import { useRouter } from 'vue-router';
import { useNotification } from '@/hooks/modal/useNoti';
import { CopyButton } from '@/components/solution/common';

// sider
const siderCollapsed = ref(false);
const handleSiderCollapse = (value: boolean) => {
  siderCollapsed.value = value;
};

// formState
const formState = reactive({
  name: '',
  checkedValueDefault: [] as string[],
  selected: 'a',
  radioValue: 'a',
  textarea: '',
  switched: '',
});

// step
const steps = [
  { title: 'step name', status: 'finish' },
  { title: 'step name', status: 'error' },
  { title: 'step name', status: 'process' },
  { title: 'step name', status: 'wait' },
  { title: 'step name', status: 'wait' },
  { title: 'step name', status: 'wait', disabled: true },
  { title: 'step name', status: 'wait', disabled: true },
  { title: 'wait', status: 'wait', disabled: true },
];

// segment
const segmentOptions = reactive([
  'Segment-1',
  'Segment-2',
  'Segment-3',
  'Segment-4',
  'Segment-5',
]);
const segmentValue = ref(segmentOptions[0]);

// list
const listDataVertical = computed(() => [
  {
    key: {
      title: 'Key',
      tooltip: 'Key의 Tooltip',
      link: {
        target: 'https://example.com',
        text: '{Link Text}',
        icon: true,
      },
    },
    value: [
      {
        type: 'text',
        text: 'Value 1',
      },
      {
        type: 'textAccent',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
      tooltip: 'Key의 Tooltip',
      linkTarget: 'https://example.com',
      link: {
        target: 'https://example.com',
        text: '{Link Text}',
        icon: false,
      },
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'tag',
        tags: [
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag value pladeholder', color: 'blue', size: 'small' },
          {
            text: 'tag value pladeholder tag value pladeholder tag value pladeholder tag value pladeholder ',
            color: 'blue',
            size: 'small',
          },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag value pladeholder', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
        ],
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'button',
        text: 'Button',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key_Progress',
    },
    value: [
      {
        type: 'progress',
        percent: 50,
      },
    ],
  },
  {
    key: {
      title: 'viewMoreText',
      tooltip: 'Key의 Tooltip',
      isCount: true,
      isCopy: true,
    },
    value: [
      {
        type: 'viewMoreText',
        text: 'Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test',
      },
    ],
  },
  {
    key: {
      title: 'viewMoreText',
      isCopy: true,
    },
    value: [
      {
        type: 'viewMoreText',
        text: 'Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
      tooltip: 'Key의 Tooltip',
      link: {
        target: 'https://example.com',
        text: '{Link Text}',
        icon: true,
      },
    },
    value: [
      {
        type: 'text',
        text: 'Value 1',
      },
      {
        type: 'textAccent',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
      tooltip: 'Key의 Tooltip',
      linkTarget: 'https://example.com',
      link: {
        target: 'https://example.com',
        text: '{Link Text}',
        icon: false,
      },
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'tag',
        tags: [
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag value pladeholder', color: 'blue', size: 'small' },
          {
            text: 'tag value pladeholder tag value pladeholder tag value pladeholder tag value pladeholder ',
            color: 'blue',
            size: 'small',
          },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag value pladeholder', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
          { text: 'tag', color: 'blue', size: 'small' },
        ],
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
]);
const listData = computed(() => [
  {
    key: {
      title: 'Key',
      tooltip: 'Key의 Tooltip',
      link: {
        target: 'https://example.com',
        text: '{Link Text}',
        icon: true,
      },
    },
    value: [
      {
        type: 'text',
        text: 'Value 1',
      },
      {
        type: 'textAccent',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
      tooltip: 'Key의 Tooltip',
      linkTarget: 'https://example.com',
      link: {
        target: 'https://example.com',
        text: '{Link Text}',
        icon: false,
      },
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'button',
        text: 'Button',
      },
    ],
  },
  {
    key: {
      title: 'Key_Progress',
    },
    value: [
      {
        type: 'progress',
        percent: 50,
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'copy',
        text: 'Value 1',
      },
    ],
  },
]);

// tree
type Key = string | number;
const selectedKeys = ref(['0']);
const expandedKeys = ref<Key[]>(['0-0-0']);
const autoExpandParent = ref<boolean>(true);
const onExpand = (keys: string[]) => {
  expandedKeys.value = keys;
  autoExpandParent.value = false;
};
const treeData = ref([
  {
    title: 'tree node 1',
    key: '0',
    tag: 'tag',
    isRoot: true,
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
        title: 'tree node 1-2',
        key: '0-1',
        children: [{ title: 'label 2-1', key: '0-1-0' }],
      },
    ],
  },
  {
    title: 'tree node 2',
    key: '1',
    isRoot: true,
    children: [
      {
        title: 'tree node 2-0',
        key: '1-0',
        children: [
          { title: 'label 2-1', key: '0-0-0', tag: 'tag' },
          { title: 'label 2-2', key: '0-0-1' },
        ],
      },
    ],
  },
  {
    title: 'tree node 3 ellipsis test ellipsis test ellipsis test',
    key: '2',
    isRoot: true,
    children: [
      {
        title: 'tree node 3-0',
        key: '2-0',
        children: [
          {
            title: 'label 3-1 ellipsis test ellipsis test',
            key: '2-0-0',
            tag: 'tag',
          },
          { title: 'label 3-2', key: '2-0-1' },
        ],
      },
    ],
  },
]);

const isGnbVisible = ref(false);

// collapse
const guideActiveKey = ref(['1']);

// notification
const { notificationOpen } = useNotification(
  `{Title} + {작업명}`,
  true,
  false,
  () => {},
  ''
);
</script>

<style scoped>
em {
  background-color: rgba(173, 255, 47, 0.5);
  display: inline !important;
  padding: 0 !important;
  font-style: normal !important;
}
em.page {
  background-color: rgba(0, 255, 255, 0.5);
}
em.contenth {
  background-color: rgba(255, 192, 203, 0.5);
}
em.section {
  background-color: rgba(255, 255, 0, 0.5);
}
</style>
