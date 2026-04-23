<template>
  <TopTitle
    title="리스트 (List)"
    text="리스트는 vertical, horizontal로 구분됩니다.
        vertical은 아이템이 세로로 쌓이고, horizontal은 가로로 나열됩니다.
        텍스트의 경우 3줄까지 노출되는 더보기 옵션이 제공됩니다."
  />
  <a-flex gap="16" vertical>
    <a-typography-title :level="3"> Vertical </a-typography-title>
    <a-list :data-source="listData">
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
            <a-button class="link accent" target="_blank" v-if="item.key.link">
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
            <!-- <CopyButton
              :textToCopy="item.value[0].text"
              v-if="item.key.isCopy === true"
              size="xs"
            /> -->
          </div>
          <div class="value-area">
            <!-- viewTooltipText 타입 추가: 말줄임, 다수 텍스트 값에 툴팁으로 대응 가능한 (컴포넌트 내부에서 반복 처리) -->
            <!-- <template v-if="item.value[0]?.type === 'viewTooltipText'">
              <CopyButton
                :textToCopy="item.value[0].text"
                v-if="item.key.isCopy === true"
                size="xs"
              />
              <div class="text">
                <BasicViewText
                  :title="item.key.title"
                  :value="item.value"
                  :viewType="'tooltip'"
                />
              </div>
            </template> -->

            <!-- viewTooltipText 타입 추가 : 말줄임, 다수 텍스트 노출 시 더보기/접기 기능 제공 (컴포넌트 내부에서 반복 처리) -->
            <!-- <template v-if="item.value[0]?.type === 'viewMoreText'">
              <div class="text">
                <BasicViewText
                  :title="item.key.title"
                  :value="item.value"
                  :viewType="'more'"
                />
              </div>
            </template> -->

            <!--  text와 viewMoreText가 아닌 타입들은 기존 v-for로 처리 -->
            <template v-for="(value, index) in item.value" :key="index">
              <div class="text" v-if="value.type === 'text'">
                {{ value.text }}
              </div>
              <div class="text-accent" v-if="value.type === 'textAccent'">
                {{ value.text }}
              </div>
              <div class="copy" v-if="value.type === 'copy'">
                {{ value.text }}
                <CopyButton :textToCopy="value.text" size="xs" />
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
              <div class="link-button" v-if="value.type === 'linkButton'">
                <a-button class="link" target="_blank">
                  {{ value.text }}
                  <Icon color="default">
                    <template #name>open_in_new</template>
                  </Icon>
                </a-button>
              </div>
              <div class="progress" v-if="value.type === 'progress'">
                <div class="progress-box green">
                  <a-progress
                    :percent="value.percent"
                    :size="8"
                    :show-info="false"
                  />
                  <div class="ant-progress-label">
                    <span class="ant-progress-label-item"> Label </span>
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
    <a-divider />
    <a-typography-title :level="3">
      Vertical + horizontal-item
    </a-typography-title>
    <a-list :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item class="horizontal-item">
          <div class="key-area">
            {{ item.key.title }}
            <!-- 개수 노출 추가 (isCount) -->
            <template v-if="item.key.isCount">
              <span class="count-text">
                {{ item.value.length }}
              </span>
            </template>
            <a-button class="link accent" target="_blank" v-if="item.key.link">
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
            <!-- <CopyButton
              :textToCopy="item.value[0].text"
              v-if="item.key.isCopy === true"
              size="xs"
            /> -->
          </div>
          <div class="value-area">
            <!-- viewTooltipText 타입 추가: 말줄임, 다수 텍스트 값에 툴팁으로 대응 가능한 (컴포넌트 내부에서 반복 처리) -->
            <!-- <template v-if="item.value[0]?.type === 'viewTooltipText'">
              <div class="text">
                <BasicViewText
                  :title="item.key.title"
                  :value="item.value"
                  :viewType="'tooltip'"
                />
              </div>
            </template> -->

            <template v-for="(value, index) in item.value" :key="index">
              <div class="text" v-if="value.type === 'text'">
                {{ value.text }}
              </div>
              <div class="text" v-if="value.type === 'viewMoreText'">
                <a-typography-text type="danger">
                  컨텐츠 영역에서는 제공하지 않음
                </a-typography-text>
              </div>
              <div class="text-accent" v-if="value.type === 'textAccent'">
                {{ value.text }}
              </div>
              <div class="copy" v-if="value.type === 'copy'">
                {{ value.text }}
                <CopyButton :textToCopy="value.text" size="xs" />
              </div>
              <div class="tag-wrap" v-if="value.type === 'tag'">
                <a-tag
                  v-for="(tag, tagIndex) in value.tags"
                  :key="tagIndex"
                  :color="tag.color"
                  :class="[tag.color, 'small']"
                >
                  <p class="tag-wrap-text">
                    {{ tag.text }}
                  </p>
                </a-tag>
              </div>
              <div class="button" v-if="value.type === 'button'">
                <a-button class="secondary small">
                  {{ value.text }}
                </a-button>
              </div>
              <div class="link-button" v-if="value.type === 'linkButton'">
                <a-button class="link" target="_blank">
                  {{ value.text }}
                  <Icon color="default">
                    <template #name>open_in_new</template>
                  </Icon>
                </a-button>
              </div>
              <div class="progress" v-if="value.type === 'progress'">
                <div class="progress-box green">
                  <a-progress
                    :percent="value.percent"
                    :size="8"
                    :show-info="false"
                  />
                  <div class="ant-progress-label">
                    <span class="ant-progress-label-item"> Label </span>
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
    <a-divider />
    <a-typography-title :level="3"> Horizontal </a-typography-title>
    <a-list :data-source="listData" class="horizontal-list">
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
            <a-button class="link accent" target="_blank" v-if="item.key.link">
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
            <!-- <CopyButton
              :textToCopy="item.value[0].text"
              v-if="item.key.isCopy === true"
              size="xs"
            /> -->
          </div>
          <div class="value-area">
            <!-- viewTooltipText 타입 추가: 말줄임, 다수 텍스트 값에 툴팁으로 대응 가능한 (컴포넌트 내부에서 반복 처리) -->
            <!-- <template v-if="item.value[0]?.type === 'viewTooltipText'">
              <div class="text">
                <BasicViewText
                  :title="item.key.title"
                  :value="item.value"
                  :viewType="'tooltip'"
                />
              </div>
            </template> -->

            <template v-for="(value, index) in item.value" :key="index">
              <div class="text" v-if="value.type === 'text'">
                {{ value.text }}
              </div>
              <div class="text" v-if="value.type === 'viewMoreText'">
                <a-typography-text type="danger">
                  컨텐츠 영역에서는 제공하지 않음
                </a-typography-text>
              </div>
              <div class="text-accent" v-if="value.type === 'textAccent'">
                {{ value.text }}
              </div>
              <div class="copy" v-if="value.type === 'copy'">
                {{ value.text }}
                <CopyButton :textToCopy="value.text" size="xs" />
              </div>
              <div class="tag-wrap" v-if="value.type === 'tag'">
                <a-tag
                  v-for="(tag, tagIndex) in value.tags"
                  :key="tagIndex"
                  :color="tag.color"
                  :class="[tag.color, 'small']"
                >
                  <p class="tag-wrap-text">
                    {{ tag.text }}
                  </p>
                </a-tag>
              </div>
              <div class="button" v-if="value.type === 'button'">
                <a-button class="secondary small">
                  {{ value.text }}
                </a-button>
              </div>
              <div class="link-button" v-if="value.type === 'linkButton'">
                <a-button class="link" target="_blank">
                  {{ value.text }}
                  <Icon color="default">
                    <template #name>open_in_new</template>
                  </Icon>
                </a-button>
              </div>
              <div class="progress" v-if="value.type === 'progress'">
                <div class="progress-box green">
                  <a-progress
                    :percent="value.percent"
                    :size="8"
                    :show-info="false"
                  />
                  <div class="ant-progress-label">
                    <span class="ant-progress-label-item"> Label </span>
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
        <a-divider type="vertical" />
      </template>
    </a-list>
  </a-flex>
  <a-divider class="size-large" style="margin: 20px 0" />
  <TopTitle
    title="일반 리스트 (Native List)"
    text="native-list에는 default와 divider가 구분됩니다."
  />
  <a-flex gap="16" vertical>
    <a-typography-title :level="3"> Ordered List </a-typography-title>
    <ol class="default-list">
      <li>Placeholder</li>
      <li>
        Placeholder
        <ol class="default-list">
          <li>
            Placeholder
            <ol class="default-list">
              <li>Placeholder</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    <a-divider />
    <a-typography-title :level="3"> Unordered List </a-typography-title>
    <ul class="default-list">
      <li>Placeholder</li>
      <li>
        Placeholder
        <ul class="default-list">
          <li>
            Placeholder
            <ul class="default-list">
              <li>Placeholder</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <a-divider />
    <a-typography-title :level="3"> Divider List </a-typography-title>
    <ul class="divider-list">
      <li>Placeholder</li>
      <li>Placeholder</li>
      <li>Placeholder</li>
      <li>Placeholder</li>
      <li>Placeholder</li>
    </ul>
    <ul class="divider-list flex">
      <li>Placeholder</li>
      <li>Placeholder</li>
      <li>Placeholder</li>
      <li>Placeholder</li>
      <li>Placeholder</li>
    </ul>
  </a-flex>
  <a-divider class="size-large" style="margin: 20px 0" />
  <TopTitle
    title="커스텀 리스트 (Custom List)"
    text="리스트박스의 자식으로 들어갈 수 있는 컴포넌트입니다."
  />
  <a-flex gap="16" vertical>
    <a-typography-title :level="3"> Checkbox with Collapse </a-typography-title>
    <article class="listbox-wrap" style="width: 400px">
      <Filter filterIcon />
      <div class="listbox-group">
        <div class="listbox-list">
          <a-collapse
            v-model:activeKey="activeKey1"
            :collapsible="isCollapseMode ? '' : 'disabled'"
            :bordered="false"
          >
            <template #expandIcon="{ isActive }" v-if="isCollapseMode">
              <span :class="{ rotate: isActive }">
                <Icon size="md" color="default">
                  <template #name>keyboard_arrow_right</template>
                </Icon>
              </span>
            </template>
            <a-collapse-panel key="a1" tabIndex="0">
              <template #header>
                <Icon color="default" v-if="!isCollapseMode">
                  <template #name>counter_1</template>
                </Icon>
                Category A <span class="number">총 99</span>
              </template>
              <div class="listbox-list-body">
                <div class="title-box">
                  <a-checkbox
                    v-model:checked="listState.checkAll"
                    :indeterminate="listState.indeterminate"
                    @change="onCheckAllChange"
                  >
                    전체 선택(다수 선택 기능)
                    <span class="description">{{
                      listState.checkedList.length
                    }}</span>
                  </a-checkbox>
                </div>
                <div class="item-box">
                  <a-checkbox-group v-model:value="listState.checkedList">
                    <a-checkbox
                      v-for="option in plainOptions"
                      :key="option.value"
                      :value="option.value"
                    >
                      <div class="ellipsis-box">
                        <span class="label">{{ option.label }}</span>
                        <span class="description">{{
                          option.description
                        }}</span>
                      </div>
                      <a-tag
                        v-if="option.state"
                        :class="[['small', tagStateConverter(option.state)]]"
                      >
                        <p class="tag-wrap-text">
                          {{ option.state.toUpperCase() }}
                        </p>
                      </a-tag>
                    </a-checkbox>
                  </a-checkbox-group>
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </article>
    <a-divider />
    <a-typography-title :level="3"> Radio with Count </a-typography-title>
    <article class="listbox-wrap" style="width: 400px">
      <Filter filterIcon />
      <div class="listbox-group">
        <div class="listbox-list">
          <a-collapse
            v-model:activeKey="activeKey1"
            :collapsible="isCollapseMode2 ? '' : 'disabled'"
            :bordered="false"
          >
            <template #expandIcon="{ isActive }" v-if="isCollapseMode2">
              <span :class="{ rotate: isActive }">
                <Icon size="md" color="default">
                  <template #name>keyboard_arrow_right</template>
                </Icon>
              </span>
            </template>
            <a-collapse-panel key="a1" tabIndex="0">
              <template #header>
                <Icon color="default" v-if="!isCollapseMode2">
                  <template #name>counter_1</template>
                </Icon>
                Category A <span class="number">총 99</span>
              </template>
              <div class="listbox-list-body">
                <div class="title-box">
                  <span class="spacing-indent">
                    {자원} 전체(=Radio)
                    <span class="description">디스크립션</span>
                  </span>
                </div>
                <div class="item-box">
                  <a-radio-group v-model:value="listState.radioValue">
                    <a-radio value="a">
                      <div class="ellipsis-box">
                        <span class="label">Option 1</span>
                        <span class="description">Description 1</span>
                      </div>
                      <a-tag :class="[['small', tagStateConverter('info')]]">
                        <p class="tag-wrap-text">INFO</p>
                      </a-tag>
                    </a-radio>
                    <a-radio value="b">
                      <div class="ellipsis-box">
                        <span class="label">Option 2</span>
                        <span class="description">Description 2</span>
                      </div>
                      <a-tag :class="[['small', tagStateConverter('warning')]]">
                        <p class="tag-wrap-text">WARNING</p>
                      </a-tag>
                    </a-radio>
                    <a-radio value="c">
                      <div class="ellipsis-box">
                        <span class="label">Option 3</span>
                        <span class="description">Description 3</span>
                      </div>
                      <a-tag :class="[['small', tagStateConverter('default')]]">
                        <p class="tag-wrap-text">DEFAULT</p>
                      </a-tag>
                    </a-radio>
                    <a-radio value="d">
                      <div class="ellipsis-box">
                        <span class="label">Option 4</span>
                        <span class="description">Description 4</span>
                      </div>
                      <a-tag :class="[['small', tagStateConverter('success')]]">
                        <p class="tag-wrap-text">SUCCESS</p>
                      </a-tag>
                    </a-radio>
                    <a-radio value="e">
                      <div class="ellipsis-box">
                        <span class="label">Option 5</span>
                        <span class="description">Description 5</span>
                      </div>
                      <a-tag :class="[['small', tagStateConverter('error')]]">
                        <p class="tag-wrap-text">ERROR</p>
                      </a-tag>
                    </a-radio>
                    <a-radio value="f">
                      <div class="ellipsis-box">
                        <span class="label">Option 6</span>
                        <span class="description">Description 6</span>
                      </div>
                    </a-radio>
                    <a-radio value="g">
                      <div class="ellipsis-box">
                        <span class="label">Option 7</span>
                        <span class="description">Description 7</span>
                      </div>
                    </a-radio>
                  </a-radio-group>
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </article>
  </a-flex>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue';
import { Icon } from '@/components/icons';
import { NoData } from '@/components/no-data';
import { TopTitle } from '@/components/layouts';
import { Filter } from '@/components/table';
import {
  BasicEllipsisText,
  BasicViewText,
  BasicTitle,
} from '@/components/layouts';
import { CopyButton } from '@/components/solution/common';

const listData = computed(() => [
  {
    key: {
      title: '일반 텍스트, 강조 텍스트',
      tooltip: 'Key의 Tooltip',
      link: {
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
      title: '복사 가능한 텍스트',
      tooltip: 'Key의 Tooltip',
      link: {
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
      title: '태그',
    },
    value: [
      {
        type: 'tag',
        tags: [
          {
            text: 'Tag 1',
            color: 'blue',
          },
          {
            text: 'Tag 2',
            color: 'green',
          },
        ],
      },
    ],
  },
  {
    key: {
      title: '버튼',
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
      title: '링크 버튼',
    },
    value: [
      {
        type: 'linkButton',
        text: 'Link Button',
      },
    ],
  },
  {
    key: {
      title: '프로그레스',
    },
    value: [
      {
        type: 'progress',
        percent: 50,
      },
    ],
  },
  // {
  //   key: {
  //     title: 'sider 텍스트 단일 value',
  //     tooltip: 'Key의 Tooltip',
  //     isCopy: true,
  //   },
  //   value: [
  //     {
  //       type: 'viewMoreText',
  //       text: 'viewMoreText',
  //     },
  //   ],
  // },
  // {
  //   key: {
  //     title: 'sider 텍스트 단일 value 말줄임',
  //     isCopy: true,
  //   },
  //   value: [
  //     {
  //       type: 'viewMoreText',
  //       text: 'viewMoreText ellipsis text viewMoreText viewMoreText ellipsis text viewMoreText ellipsis text ellipsis text viewMoreText ellipsis text viewMoreText ellipsis text viewMoreText ellipsis text viewMoreText ellipsis text viewMoreText ellipsis text viewMoreText ellipsis text',
  //     },
  //   ],
  // },
  // {
  //   key: {
  //     title: 'sider 텍스트 다수 value',
  //     tooltip: 'Key의 Tooltip',
  //     isCount: true,
  //     isCopy: true,
  //   },
  //   value: [
  //     {
  //       type: 'viewMoreText',
  //       text: 'viewMoreText 1 ellipsis text viewMoreText viewMoreText ellipsis text',
  //     },
  //     {
  //       type: 'viewMoreText',
  //       text: 'viewMoreText 2',
  //     },
  //     {
  //       type: 'viewMoreText',
  //       text: 'viewMoreText 3',
  //     },
  //     {
  //       type: 'viewMoreText',
  //       text: 'viewMoreText 4',
  //     },
  //     {
  //       type: 'viewMoreText',
  //       text: 'viewMoreText 5',
  //     },
  //   ],
  // },
  // {
  //   key: {
  //     title: '일반 텍스트 다수 value',
  //     isCount: true,
  //   },
  //   value: [
  //     {
  //       type: 'viewTooltipText',
  //       text: 'Value 1 ellipsis text Value 1 ellipsis text Value 1 ellipsis text',
  //     },
  //     {
  //       type: 'viewTooltipText',
  //       text: 'Value 2',
  //     },
  //     {
  //       type: 'viewTooltipText',
  //       text: 'Value 3',
  //     },
  //     {
  //       type: 'viewTooltipText',
  //       text: 'Value 4',
  //     },
  //     {
  //       type: 'viewTooltipText',
  //       text: 'Value 5',
  //     },
  //   ],
  // },
  // {
  //   key: {
  //     title: '일단 텍스트 단일 value 말줄임',
  //     isCount: true,
  //     isCopy: true,
  //   },
  //   value: [
  //     {
  //       type: 'viewTooltipText',
  //       text: 'Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test',
  //     },
  //   ],
  // },
  // {
  //   key: {
  //     title: '일반 텍스트 단일 value',
  //   },
  //   value: [
  //     {
  //       type: 'viewTooltipText',
  //       text: 'Value 3 Line Clamp Ellipsis Test Value 3 Line Clamp Ellipsis Test',
  //     },
  //   ],
  // },
]);

const activeKey1 = ref<string[]>(['a1']);

const isCollapseMode = ref(true);
const isCollapseMode2 = ref(false);

const plainOptions = [
  {
    label: 'Option1',
    value: 'value1',
    state: 'info',
    description:
      '옵션 부가 설명 및 최대 1줄까지 가능함 옵션 부가 설명 및 최대 1줄까지 가능함',
  },
  {
    label: 'Option2',
    value: 'value2',
    state: 'warning',
    description: 'Description',
  },
  {
    label: 'Option3',
    value: 'value3',
    state: 'default',
    description: 'Description',
  },
  {
    label: 'Option4',
    value: 'value4',
    state: 'success',
    description: 'Description',
  },
  {
    label: 'Option5',
    value: 'value5',
    state: 'error',
    description: 'Description',
  },
  {
    label: 'Option6',
    value: 'value6',
  },
  {
    label: 'Option7',
    value: 'value7',
  },
];

const listState = reactive({
  indeterminate: false,
  checkAll: false,
  checkedList: [] as string[],
  radioValue: 'a',
});

const onCheckAllChange = (e: { target: { checked: boolean } }) => {
  Object.assign(listState, {
    checkedList: e.target.checked
      ? plainOptions.map((option) => option.value)
      : [],
    indeterminate: true,
  });
};

watch(
  () => listState.checkedList,
  (val) => {
    listState.indeterminate = !!val.length && val.length < plainOptions.length;
    listState.checkAll = val.length === plainOptions.length;
  }
);

const tagStateConverter = (state: string) => {
  return (
    {
      info: 'blue',
      warning: 'orange',
      success: 'green',
      error: 'red',
      default: 'gray',
    }[state] || ''
  );
};
</script>
<style scopped>
.ant-list:not(.horizontal-list) {
  width: 300px;
}
</style>
