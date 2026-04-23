<template>
  <div class="page-container detail">
    <div class="main-panel">
      <!-- 패널 타이틀 영역 -->
      <div class="panel-header">
        <BasicTitle
          level="panel"
          title="panel-header (panel(page) title component)"
          :backbutton="true"
          :tooltip="{ title: '패널 타이틀 컴포넌트 도움말 툴팁', icon: 'info' }"
          :tags="[
            { text: 'success', color: 'green' },
            { text: 'warning', color: 'red' },
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

                        <!--  text와 viewMoreText가 아닌 타입들은 기존 v-for로 처리 -->
                        <template
                          v-for="(value, index) in item.value"
                          :key="index"
                        >
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

        <!-- 중앙 컨텐츠 (가변) -->
        <div class="main-content">
          <!-- case Expand Table -->
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'blue' }]"
              />
            </div>
            <div class="content-body">
              <Table
                :columns="secondColumns"
                :data="secondData"
                :show-filter="true"
                :show-pagination="true"
                noPadding
                layout="auto"
              >
                <template #empty>
                  <NoData
                    title="상세 데이터가 없습니다"
                    text="데이터를 선택해 주세요"
                  >
                    <template #icon>
                      <Icon size="md" color="brand" fill>
                        <template #name>info</template>
                      </Icon>
                    </template>
                  </NoData>
                </template>

                <!-- 필터 내부 버튼 -->
                <template #filter-buttons>
                  <a-button class="secondary danger"> Function </a-button>
                  <a-button class="secondary"> Function </a-button>
                </template>
                <!-- 설정 예시 -->
                <template #setting="{ record }">
                  <a-dropdown>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item key="1">수정</a-menu-item>
                        <a-menu-item key="2">삭제</a-menu-item>
                      </a-menu>
                    </template>
                    <a-button class="ghost btn-setting">
                      <Icon size="md" color="default" fill>
                        <template #name>more_horiz</template>
                      </Icon>
                    </a-button>
                  </a-dropdown>
                </template>
                <template #expandedRowRender>
                  <Table :columns="innerColumns" :data="innerData">
                    <template #expandedRowRender>
                      <Table :columns="innerColumns" :data="innerData">
                        <template #expandedRowRender>
                          <Table :columns="innerColumns" :data="innerData">
                            <template #expandedRowRender>
                              <Table
                                :columns="innerColumns"
                                :data="innerData"
                                :selectable="true"
                                v-model:selectedKeys="selectedKeys"
                              />
                            </template>
                          </Table>
                        </template>
                      </Table>
                    </template>
                  </Table>
                </template>
              </Table>
            </div>
          </div>

          <!-- case Card Group -->
          <a-divider class="size-large" />
          <div class="content-group">
            <a-row class="divide-column-group">
              <a-col :span="18">
                <div class="content-header">
                  <BasicTitle
                    level="content"
                    title="content title component"
                    :tooltip="{
                      title: 'content title component 도움말 툴팁',
                      icon: 'info',
                    }"
                    :tags="[{ text: 'TAG', color: 'blue' }]"
                  />
                </div>
                <div class="content-body">
                  <a-flex class="card-group align-center">
                    <a-row>
                      <a-col :span="4">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="title-group">
                              <div class="group-items">
                                <Icon color="default" size="md" fill>
                                  <template #name>error</template>
                                </Icon>
                                <a-typography-title
                                  :level="3"
                                  class="item-title"
                                >
                                  <BasicEllipsisText
                                    text="Card Title Placeholder"
                                  />
                                </a-typography-title>
                              </div>
                            </div>
                          </template>
                          <div>
                            <a-typography-text class="typography-display-1">
                              <BasicEllipsisText text="130130" />
                            </a-typography-text>
                          </div>
                        </a-card>
                      </a-col>
                      <a-col :span="4">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="title-group">
                              <div class="group-items">
                                <Icon color="default" size="md" fill>
                                  <template #name>error</template>
                                </Icon>
                                <a-typography-title
                                  :level="3"
                                  class="item-title"
                                >
                                  <BasicEllipsisText
                                    text="Card Title Placeholder"
                                  />
                                </a-typography-title>
                              </div>
                            </div>
                          </template>
                          <div>
                            <a-typography-text class="typography-display-1">
                              <BasicEllipsisText text="13" />
                            </a-typography-text>
                          </div>
                        </a-card>
                      </a-col>
                      <a-col :span="4">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="title-group">
                              <div class="group-items">
                                <Icon color="default" size="md" fill>
                                  <template #name>error</template>
                                </Icon>
                                <a-typography-title
                                  :level="3"
                                  class="item-title"
                                >
                                  <BasicEllipsisText
                                    text="Card Title Placeholder"
                                  />
                                </a-typography-title>
                              </div>
                            </div>
                          </template>
                          <div>
                            <a-typography-text class="typography-display-1">
                              <BasicEllipsisText text="13" />
                            </a-typography-text>
                          </div>
                        </a-card>
                      </a-col>
                      <a-col :span="4">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="title-group">
                              <div class="group-items">
                                <Icon color="default" size="md" fill>
                                  <template #name>error</template>
                                </Icon>
                                <a-typography-title
                                  :level="3"
                                  class="item-title"
                                >
                                  <BasicEllipsisText
                                    text="Card Title Placeholder"
                                  />
                                </a-typography-title>
                              </div>
                            </div>
                          </template>
                          <div>
                            <a-typography-text class="typography-display-1">
                              <BasicEllipsisText text="13" />
                            </a-typography-text>
                          </div>
                        </a-card>
                      </a-col>
                      <a-col :span="4">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="title-group">
                              <div class="group-items">
                                <Icon color="default" size="md" fill>
                                  <template #name>error</template>
                                </Icon>
                                <a-typography-title
                                  :level="3"
                                  class="item-title"
                                >
                                  <BasicEllipsisText
                                    text="Card Title Placeholder"
                                  />
                                </a-typography-title>
                              </div>
                            </div>
                          </template>
                          <div>
                            <a-typography-text class="typography-display-1">
                              <BasicEllipsisText text="13" />
                            </a-typography-text>
                          </div>
                        </a-card>
                      </a-col>
                      <a-col :span="4">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="title-group">
                              <div class="group-items">
                                <Icon color="default" size="md" fill>
                                  <template #name>error</template>
                                </Icon>
                                <a-typography-title
                                  :level="3"
                                  class="item-title"
                                >
                                  <BasicEllipsisText
                                    text="Card Title Placeholder"
                                  />
                                </a-typography-title>
                              </div>
                            </div>
                          </template>
                          <div>
                            <a-typography-text class="typography-display-1">
                              <BasicEllipsisText text="13" />
                            </a-typography-text>
                          </div>
                        </a-card>
                      </a-col>
                    </a-row>
                  </a-flex>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="content-header">
                  <BasicTitle
                    level="content"
                    title="content title component"
                    :tooltip="{
                      title: 'content title component 도움말 툴팁',
                      icon: 'info',
                    }"
                    :tags="[{ text: 'TAG', color: 'blue' }]"
                  />
                </div>
                <div class="content-body">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </template>
                    <div>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </div>
                  </a-card>
                </div>
              </a-col>
            </a-row>
          </div>

          <!-- case Card-->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'orange' }]"
              >
                <template #extra>
                  <a-button class="primary"> primary </a-button>
                  <a-button class="secondary">secondary</a-button>
                </template>
              </BasicTitle>
            </div>
            <div class="content-body">
              <a-row :gutter="16">
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </template>
                    <div>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </div>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </template>
                    <div>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </div>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </template>
                    <div>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </div>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </template>
                    <div>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </div>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>

          <!-- case horizontal List(divide lineX) 정렬/배치 확인 -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'blue' }]"
              />
            </div>
            <div class="content-body">
              <a-list :data-source="listTextData1" class="horizontal-list">
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

                      <template
                        v-for="(value, index) in item.value"
                        :key="index"
                      >
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
                        <div class="progress" v-if="value.type === 'progress'">
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
          </div>
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'blue' }]"
              />
            </div>
            <div class="content-body">
              <a-list :data-source="listTextData2" class="horizontal-list">
                <template #renderItem="{ item }">
                  <a-list-item>
                    <div class="key-area">
                      {{ item.key.title }}
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
                        <template #title> {{ item.key.tooltip }} </template>
                        <Icon size="xs" color="default">
                          <template #name>help</template>
                        </Icon>
                      </a-tooltip>
                    </div>
                    <div class="value-area">
                      <template
                        v-for="(value, index) in item.value"
                        :key="index"
                      >
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
                        <div class="progress" v-if="value.type === 'progress'">
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
          </div>

          <!-- case Segment, horizontal List(divide lineX) -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="content title component"
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
            </div>
            <div class="segment-wrap">
              <a-segmented
                v-model:value="segmentValue"
                :options="segmentOptions"
              />
            </div>
            <div class="content-body">
              <a-list :data-source="listData" class="horizontal-list">
                <template #renderItem="{ item }">
                  <a-list-item>
                    <div class="key-area">
                      {{ item.key.title }}
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
                        <template #title> {{ item.key.tooltip }} </template>
                        <Icon size="xs" color="default">
                          <template #name>help</template>
                        </Icon>
                      </a-tooltip>
                    </div>
                    <div class="value-area">
                      <template
                        v-for="(value, index) in item.value"
                        :key="index"
                      >
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
                        <div class="progress" v-if="value.type === 'progress'">
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
          </div>

          <!-- case form : form-item-group 사용하지 않음, 좌우 레이아웃은 생성 페이지에만 사용 -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'blue' }]"
              >
                <template #extra>
                  <a-button class="secondary">Tab-function</a-button>
                </template>
              </BasicTitle>
            </div>
            <a-form autocomplete="off" layout="vertical">
              <BasicTitle
                level="form"
                title="form title component"
                description="description"
                :tooltip="{
                  title: '폼 타이틀 컴포넌트 도움말 툴팁',
                  icon: 'info',
                }"
              />
              <a-flex class="item-ant-form">
                <a-form-item
                  :rules="[{ required: true }]"
                  class="is-include-label"
                >
                  <template #label>
                    Label명
                    <a-tooltip>
                      <template #title>
                        도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘
                        도움말 아이콘 도움말 아이콘 도움말 아이콘</template
                      >
                      <span class="icon">
                        <Icon size="xs" color="default">
                          <template #name>info</template>
                        </Icon>
                      </span>
                    </a-tooltip>
                  </template>
                  <a-input
                    v-model:value="formState.name"
                    placeholder="Is Included Label"
                    type="text"
                  />
                </a-form-item>
                <a-form-item
                  :rules="[{ required: true }]"
                  class="is-include-label"
                >
                  <template #label>
                    Label명
                    <a-tooltip>
                      <template #title>
                        도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘
                        도움말 아이콘 도움말 아이콘 도움말 아이콘</template
                      >
                      <span class="icon">
                        <Icon size="xs" color="default">
                          <template #name>info</template>
                        </Icon>
                      </span>
                    </a-tooltip>
                  </template>
                  <a-input
                    v-model:value="formState.name"
                    placeholder="Is Included Label"
                    type="text"
                  />
                </a-form-item>
                <a-form-item
                  :rules="[{ required: true }]"
                  class="is-include-label"
                >
                  <template #label>
                    Label명
                    <a-tooltip>
                      <template #title>
                        도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘
                        도움말 아이콘 도움말 아이콘 도움말 아이콘</template
                      >
                      <span class="icon">
                        <Icon size="xs" color="default">
                          <template #name>info</template>
                        </Icon>
                      </span>
                    </a-tooltip>
                  </template>
                  <a-input
                    v-model:value="formState.name"
                    placeholder="Is Included Label"
                    type="text"
                  />
                </a-form-item>
                <a-form-item
                  :rules="[{ required: true }]"
                  class="is-include-label"
                >
                  <template #label>
                    Label명
                    <a-tooltip>
                      <template #title>
                        도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘
                        도움말 아이콘 도움말 아이콘 도움말 아이콘</template
                      >
                      <span class="icon">
                        <Icon size="xs" color="default">
                          <template #name>info</template>
                        </Icon>
                      </span>
                    </a-tooltip>
                  </template>
                  <a-input
                    v-model:value="formState.name"
                    placeholder="Is Included Label"
                    type="text"
                  />
                </a-form-item>
                <a-form-item
                  :rules="[{ required: true }]"
                  extra="Helper Text"
                  class="is-include-label"
                >
                  <template #label>
                    Label명
                    <a-tooltip>
                      <template #title>
                        도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘
                        도움말 아이콘 도움말 아이콘 도움말 아이콘</template
                      >
                      <span class="icon">
                        <Icon size="xs" color="default">
                          <template #name>info</template>
                        </Icon>
                      </span>
                    </a-tooltip>
                  </template>
                  <a-input
                    v-model:value="formState.name"
                    placeholder="Is Included Label"
                    type="text"
                  />
                </a-form-item>
              </a-flex>
            </a-form>
          </div>

          <!-- case Segment, Table -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle level="content" title="content title component" />
            </div>
            <!-- header/body 에 소속되지 않고 같은 레벨로 삽입 -->
            <div class="segment-wrap">
              <a-segmented
                v-model:value="segmentValue"
                :options="segmentOptions"
              />
            </div>
            <div class="content-body">
              <Table
                :columns="columns"
                :data="baseData"
                :show-filter="true"
                :show-pagination="true"
                :row-selection="tableRowSelection"
                v-model:selectedKeys="selectedKeys"
                v-model:fixedColumn="fixedColumnCount"
                noPadding
              >
                <template #empty>
                  <!-- 노데이터 -->
                  <NoData>
                    <template #button>
                      <a-button class="primary ant-empty-btn">
                        <Icon size="md" color="default" fill>
                          <template #name>add</template>
                        </Icon>
                        생성
                      </a-button>
                    </template>
                  </NoData>
                </template>
                <!-- 필터 내부 버튼 -->
                <template #filter-buttons>
                  <a-range-picker format="YYYY-MM-DD ">
                    <template #suffixIcon>
                      <Icon size="md" color="default">
                        <template #name>calendar_month</template>
                      </Icon>
                    </template>
                  </a-range-picker>
                  <a-button class="secondary">
                    <Icon size="md" color="default">
                      <template #name>download</template>
                    </Icon>
                    엑셀 다운로드
                  </a-button>
                  <a-button class="primary">
                    <Icon size="md" color="inverse" fill>
                      <template #name>add</template>
                    </Icon>
                    생성
                  </a-button>
                </template>
                <template #headerCell="{ column }">
                  <template v-if="column?.dataIndex === 'status'">
                    <a-flex gap="4" justify="space-between">
                      <span class="help-text">{{ column.title }}</span>
                      <a-tooltip autoAdjustOverflow>
                        <template #title>
                          <div class="ant-tooltip-head">Header</div>
                          <dl class="ant-tooltip-list">
                            <div class="ant-tooltip-list-item">
                              <dt>삭제됨</dt>
                              <dd>
                                <a-tag class="down small">
                                  <p class="tag-wrap-text">DELETED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>사용 불가</dt>
                              <dd>
                                <a-tag class="down small">
                                  <p class="tag-wrap-text">DEACTIVATED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>업로드 에러</dt>
                              <dd>
                                <a-tag class="red small">
                                  <p class="tag-wrap-text">KILLED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>업로드 대기 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">KQUEUEDILLED</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>업로드 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">UPLOADING</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>저장 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">SAVING</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>사용 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">IMPORTING</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>삭제 중</dt>
                              <dd>
                                <a-tag class="blue small">
                                  <p class="tag-wrap-text">PENDING_DELETE</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>준비 완료</dt>
                              <dd>
                                <a-tag class="green small">
                                  <p class="tag-wrap-text">ACTIVE</p>
                                </a-tag>
                              </dd>
                            </div>
                            <div class="ant-tooltip-list-item">
                              <dt>유지 보수 모드</dt>
                              <dd>
                                <a-tag class="orange small">
                                  <p class="tag-wrap-text">MAINTENANCE</p>
                                </a-tag>
                              </dd>
                            </div>
                          </dl>
                        </template>
                        <Icon size="md" color="default">
                          <template #name>help</template>
                        </Icon>
                      </a-tooltip>
                    </a-flex>
                  </template>
                  <template v-else>
                    {{ column.title }}
                  </template>
                </template>
                <template #bodyCell="{ column, text, record }">
                  <template v-if="column.dataIndex === 'name'">
                    <a-flex justify="space-between" align="center">
                      <span>{{ record.name }}</span>
                      <Icon size="md" color="default" class="edit-icon">
                        <template #name>edit</template>
                      </Icon>
                    </a-flex>
                  </template>
                  <template v-else-if="column.dataIndex === 'inner'">
                    <a-flex gap="16" class="ant-table-inner">
                      <a-form-item>
                        <a-input
                          v-model:value="formState.name"
                          placeholder="Placeholder"
                          type="text"
                          allow-clear
                        >
                          <template #suffix v-if="formState.name">
                            <a-button class="secondary small">완료</a-button>
                          </template>
                          <template #clearIcon>
                            <Icon size="md" color="default" fill>
                              <template #name>cancel</template>
                            </Icon>
                          </template>
                        </a-input>
                      </a-form-item>
                    </a-flex>
                  </template>
                  <template v-else-if="column.dataIndex === 'select'">
                    <a-flex class="ant-table-inner error">
                      <a-form-item>
                        <a-select
                          v-model:value="formState.selected"
                          placeholder="Placeholder"
                        >
                          <a-select-option value="a"
                            >Select Item 01</a-select-option
                          >
                          <a-select-option value="b"
                            >Select Item 02</a-select-option
                          >
                        </a-select>
                      </a-form-item>
                    </a-flex>
                  </template>
                  <template v-else-if="column.dataIndex === 'status'">
                    <div class="ant-table-double-inner">
                      <div class="tag-wrap">
                        <a-tag
                          class="small"
                          :class="{
                            blue: record?.status === 'RUN',
                            red: record?.status === 'ERROR',
                          }"
                        >
                          <p class="tag-wrap-text">{{ record?.status }}</p>
                        </a-tag>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.dataIndex === 'tag'">
                    <div class="ant-table-double-inner">
                      <div class="tag-wrap">
                        <a-tag
                          class="small"
                          :class="{
                            blue: record?.tag[index] === 'tag1',
                            red: record?.tag[index] === 'tag2',
                            orange: record?.tag[index] === 'tag3',
                          }"
                          v-for="(item, index) in record?.tag"
                          :key="index"
                        >
                          <p class="tag-wrap-text">{{ item }}</p>
                        </a-tag>
                        <a-tag class="gray small">
                          <p class="tag-wrap-text">+N</p>
                        </a-tag>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.dataIndex === 'progress'">
                    <div class="progress-box gray">
                      <a-progress
                        :percent="100"
                        :size="8"
                        :format="formatText"
                      />
                    </div>
                  </template>
                  <template v-else-if="column.dataIndex === 'link'">
                    <router-link :to="record?.link">
                      <a-button class="link">{{ record?.link }}</a-button>
                    </router-link>
                  </template>
                  <template v-else-if="column.dataIndex === 'accentLink'">
                    <router-link :to="record.accentLink">
                      <a-button class="link accent">중요 링크</a-button>
                    </router-link>
                  </template>
                  <template v-else-if="column.dataIndex === 'setting'">
                    <a-dropdown>
                      <template #overlay>
                        <a-menu>
                          <a-menu-item key="1">수정</a-menu-item>
                          <a-menu-item key="2">삭제</a-menu-item>
                        </a-menu>
                      </template>
                      <a-button class="ghost btn-setting">
                        <Icon size="md" color="default" fill>
                          <template #name>more_horiz</template>
                        </Icon>
                      </a-button>
                    </a-dropdown>
                  </template>
                  <template v-else>
                    {{ text }}
                  </template>
                </template>
              </Table>
            </div>
          </div>

          <!-- case devide-column-group : Table, (onShow)vertical List-->
          <a-divider class="size-large" />
          <div class="content-group">
            <a-row class="divide-column-group">
              <a-col :span="isSideColumn ? 12 : 24">
                <div class="content-header">
                  <BasicTitle level="content" title="content title component" />
                </div>
                <div class="content-body">
                  <Table
                    :columns="contentGroupColumns"
                    :data="contentGroupData"
                    :show-filter="true"
                    :show-pagination="true"
                    v-model:selectedKeys="selectedKeys"
                    noPadding
                    layout="auto"
                  >
                    <template #empty>
                      <!-- 노데이터 -->
                      <NoData>
                        <template #button>
                          <a-button class="primary ant-empty-btn">
                            <Icon size="md" color="default" fill>
                              <template #name>add</template>
                            </Icon>
                            생성
                          </a-button>
                        </template>
                      </NoData>
                    </template>
                    <template #bodyCell="{ column, text, record }">
                      <template v-if="column?.dataIndex === 'name'">
                        <a-button
                          class="link accent"
                          @click.prevent="isSideColumn = record"
                          >{{ record.name }}</a-button
                        >
                      </template>
                      <template v-else-if="column.dataIndex === 'status'">
                        <div class="ant-table-double-inner">
                          <div class="tag-wrap">
                            <a-tag
                              class="small"
                              :class="{
                                blue: record?.status === 'RUN',
                                red: record?.status === 'ERROR',
                              }"
                            >
                              <p class="tag-wrap-text">{{ record?.status }}</p>
                            </a-tag>
                          </div>
                        </div>
                      </template>
                      <template v-else-if="column.dataIndex === 'tag'">
                        <div class="ant-table-double-inner">
                          <div class="tag-wrap">
                            <a-tag
                              class="small"
                              :class="{
                                blue: record?.tag[index] === 'tag1',
                                red: record?.tag[index] === 'tag2',
                                orange: record?.tag[index] === 'tag3',
                              }"
                              v-for="(item, index) in record?.tag"
                              :key="index"
                            >
                              <p class="tag-wrap-text">{{ item }}</p>
                            </a-tag>
                            <a-tag class="gray small">
                              <p class="tag-wrap-text">+N</p>
                            </a-tag>
                          </div>
                        </div>
                      </template>
                      <template v-else>
                        {{ text }}
                      </template>
                    </template>
                  </Table>
                </div>
              </a-col>
              <a-col :span="12" v-if="isSideColumn">
                <div class="content-header">
                  <BasicTitle level="content" title="content title component" />
                </div>
                <div class="content-body">
                  <a-list :data-source="listData" class="vertical-list">
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <div class="key-area">
                          {{ item.key.title }}
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
                            <template #title> {{ item.key.tooltip }} </template>
                            <Icon size="xs" color="default">
                              <template #name>help</template>
                            </Icon>
                          </a-tooltip>
                        </div>
                        <div class="value-area">
                          <template
                            v-for="(value, index) in item.value"
                            :key="index"
                          >
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
              </a-col>
            </a-row>
          </div>

          <!-- case divide-column-group : Table, vertical List -->
          <a-divider class="size-large" />
          <div class="content-group">
            <a-row class="divide-column-group">
              <a-col :span="12">
                <div class="content-header">
                  <BasicTitle level="content" title="content title component" />
                </div>
                <div class="content-body">
                  <Table
                    :columns="contentGroupColumns"
                    :data="contentGroupData"
                    :show-filter="true"
                    :show-pagination="true"
                    v-model:selectedKeys="selectedKeys"
                    noPadding
                    layout="auto"
                  >
                    <template #empty>
                      <!-- 노데이터 -->
                      <NoData>
                        <template #button>
                          <a-button class="primary ant-empty-btn">
                            <Icon size="md" color="default" fill>
                              <template #name>add</template>
                            </Icon>
                            생성
                          </a-button>
                        </template>
                      </NoData>
                    </template>
                    <template #bodyCell="{ column, text, record }">
                      <template v-if="column.dataIndex === 'status'">
                        <div class="ant-table-double-inner">
                          <div class="tag-wrap">
                            <a-tag
                              class="small"
                              :class="{
                                blue: record?.status === 'RUN',
                                red: record?.status === 'ERROR',
                              }"
                            >
                              <p class="tag-wrap-text">{{ record?.status }}</p>
                            </a-tag>
                          </div>
                        </div>
                      </template>
                      <template v-else-if="column.dataIndex === 'tag'">
                        <div class="ant-table-double-inner">
                          <div class="tag-wrap">
                            <a-tag
                              class="small"
                              :class="{
                                blue: record?.tag[index] === 'tag1',
                                red: record?.tag[index] === 'tag2',
                                orange: record?.tag[index] === 'tag3',
                              }"
                              v-for="(item, index) in record?.tag"
                              :key="index"
                            >
                              <p class="tag-wrap-text">{{ item }}</p>
                            </a-tag>
                            <a-tag class="gray small">
                              <p class="tag-wrap-text">+N</p>
                            </a-tag>
                          </div>
                        </div>
                      </template>
                      <template v-else>
                        {{ text }}
                      </template>
                    </template>
                  </Table>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="content-header">
                  <BasicTitle level="content" title="content title component" />
                </div>
                <div class="content-body">
                  <a-list :data-source="listDataVertical" class="vertical-list">
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <div class="key-area">
                          {{ item.key.title }}
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
                            <template #title> {{ item.key.tooltip }} </template>
                            <Icon size="xs" color="default">
                              <template #name>help</template>
                            </Icon>
                          </a-tooltip>
                        </div>
                        <div class="value-area">
                          <template
                            v-for="(value, index) in item.value"
                            :key="index"
                          >
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
              </a-col>
            </a-row>
          </div>

          <!-- case divide-column-group : Table, 2 columns card -->
          <a-divider class="size-large" />
          <div class="content-group">
            <a-row class="divide-column-group">
              <a-col :span="16">
                <div class="content-header">
                  <BasicTitle level="content" title="content title component" />
                </div>
                <div class="content-body">
                  <Table
                    :columns="contentGroupColumns"
                    :data="contentGroupData"
                    :show-filter="false"
                    :show-pagination="true"
                    v-model:selectedKeys="selectedKeys"
                    noPadding
                    layout="auto"
                  >
                    <template #headerCell="{ column }">
                      <template v-if="column?.dataIndex === 'name'">
                        <a-flex gap="4" justify="space-between">
                          <span class="help-text">{{ column.title }}</span>
                          <a-tooltip>
                            <template #title>툴팁 텍스트</template>
                            <Icon size="md" color="default">
                              <template #name>help</template>
                            </Icon>
                          </a-tooltip>
                        </a-flex>
                      </template>
                      <template v-else>
                        {{ column.title }}
                      </template>
                    </template>
                    <template #bodyCell="{ column, text, record }">
                      <template v-if="column?.dataIndex === 'tag'">
                        <div class="tag-wrap">
                          <a-tag
                            class="blue medium"
                            v-for="(item, index) in record?.tag"
                            :key="index"
                          >
                            <p class="tag-wrap-text">{{ item }}</p>
                          </a-tag>
                        </div>
                      </template>
                    </template>
                  </Table>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="content-header">
                  <BasicTitle level="content" title="content title component" />
                </div>
                <div class="content-body">
                  <a-row :gutter="[16, 16]">
                    <a-col :span="12">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                        </template>
                        <div>
                          <a-flex :gap="4" vertical>
                            <a-typography-text> description </a-typography-text>
                            <ul class="divider-list">
                              <li>Placeholder</li>
                              <li>Placeholder</li>
                            </ul>
                          </a-flex>
                        </div>
                      </a-card>
                    </a-col>
                    <a-col :span="12">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                        </template>
                        <div>
                          <a-flex :gap="4" vertical>
                            <a-typography-text> description </a-typography-text>
                            <ul class="divider-list">
                              <li>Placeholder</li>
                              <li>Placeholder</li>
                            </ul>
                          </a-flex>
                        </div>
                      </a-card>
                    </a-col>
                    <a-col :span="12">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                        </template>
                        <div>
                          <a-flex :gap="4" vertical>
                            <!-- <a-typography-text> description </a-typography-text> -->
                            <ul class="divider-list">
                              <li>Placeholder</li>
                              <li>Placeholder</li>
                            </ul>
                          </a-flex>
                        </div>
                      </a-card>
                    </a-col>
                    <a-col :span="12">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                        </template>
                        <div>
                          <a-flex :gap="4" vertical>
                            <!-- <a-typography-text> description </a-typography-text> -->
                            <ul class="divider-list">
                              <li>Placeholder</li>
                              <li>Placeholder</li>
                            </ul>
                          </a-flex>
                        </div>
                      </a-card>
                    </a-col>
                    <a-col :span="12">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                        </template>
                        <div>
                          <a-flex :gap="4" vertical>
                            <!-- <a-typography-text> description </a-typography-text> -->
                            <ul class="divider-list">
                              <li>Placeholder</li>
                              <li>Placeholder</li>
                            </ul>
                          </a-flex>
                        </div>
                      </a-card>
                    </a-col>
                    <a-col :span="12">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                        </template>
                        <div>
                          <a-flex :gap="4" vertical>
                            <a-typography-text> description </a-typography-text>
                            <ul class="divider-list">
                              <li>Placeholder</li>
                              <li>Placeholder</li>
                            </ul>
                          </a-flex>
                        </div>
                      </a-card>
                    </a-col>
                  </a-row>
                </div>
              </a-col>
            </a-row>
          </div>

          <!-- case collapse : 동일 콜랩스 2개 나열 -->
          <a-divider class="size-large" />
          <a-collapse v-model:activeKey="guideActiveKey" :bordered="false">
            <template #expandIcon="{ isActive }">
              <span :class="{ rotate: isActive }">
                <Icon size="md" color="default">
                  <template #name>keyboard_arrow_right</template>
                </Icon>
              </span>
            </template>
            <a-collapse-panel key="1">
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
                <div class="content">
                  <div class="content-header">
                    <BasicTitle
                      level="content"
                      title="content title component"
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
                  </div>
                  <div class="segment-wrap">
                    <a-segmented
                      v-model:value="segmentValue"
                      :options="segmentOptions"
                    />
                  </div>
                  <div class="content-body">
                    <a-list :data-source="listData" class="horizontal-list">
                      <template #renderItem="{ item }">
                        <a-list-item>
                          <div class="key-area">
                            {{ item.key.title }}
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
                          </div>
                          <div class="value-area">
                            <template
                              v-for="(value, index) in item.value"
                              :key="index"
                            >
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
                              <div
                                class="button"
                                v-if="value.type === 'button'"
                              >
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
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
          <a-divider class="size-large" />
          <a-collapse v-model:activeKey="guideActiveKey" :bordered="false">
            <template #expandIcon="{ isActive }">
              <span :class="{ rotate: isActive }">
                <Icon size="md" color="default">
                  <template #name>keyboard_arrow_right</template>
                </Icon>
              </span>
            </template>
            <a-collapse-panel key="1">
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
                <div class="content">
                  <div class="content-header">
                    <BasicTitle
                      level="content"
                      title="content title component"
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
                  </div>
                  <div class="segment-wrap">
                    <a-segmented
                      v-model:value="segmentValue"
                      :options="segmentOptions"
                    />
                  </div>
                  <div class="content-body">
                    <a-list :data-source="listData" class="horizontal-list">
                      <template #renderItem="{ item }">
                        <a-list-item>
                          <div class="key-area">
                            {{ item.key.title }}
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
                          </div>
                          <div class="value-area">
                            <template
                              v-for="(value, index) in item.value"
                              :key="index"
                            >
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
                              <div
                                class="button"
                                v-if="value.type === 'button'"
                              >
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
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue';
import { Icon } from '@/components/icons';
import {
  TheSider,
  TheGuidePanel,
  BasicTitle,
  BasicEllipsisText,
  BasicViewText,
} from '@/components/layouts';
import { NoData } from '@/components/no-data';
import { useRouter } from 'vue-router';
import { Table } from '@/components/table';
import { CopyButton } from '@/components/solution/common';

// sider
const siderCollapsed = ref(false);
const handleSiderCollapse = (value: boolean) => {
  siderCollapsed.value = value;
};

// formState
const formState = reactive({
  name: '',
  selected: '',
});

// table simple data
const contentGroupColumns = [
  {
    title: 'label',
    dataIndex: 'name',
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: 'label',
    dataIndex: 'project',
    sorter: true,
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: 'status',
    dataIndex: 'tag',
    sorter: true,
    filterSearch: true,
  },
];
const contentGroupData = [
  {
    key: '1',
    name: 'label',
    project: 'label',
    tag: ['tag1', 'tag2'],
  },
  {
    key: '2',
    name: 'label',
    project: 'label',
    tag: ['tag1', 'tag2', 'tag3'],
  },
  {
    key: '3',
    name: 'label',
    project: 'label',
    tag: ['tag1'],
  },
  {
    key: '4',
    name: 'label',
    project: 'label',
    tag: ['tag'],
  },
  {
    key: '5',
    name: 'label',
    project: 'label',
    tag: ['tag3'],
  },
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
const listTextData1 = computed(() => [
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'textAccent',
        text: 'Accent Value 1',
      },
    ],
  },
  {
    key: {
      title: 'Key',
      tooltip: 'Key의 Tooltip',
      isCopy: true,
      isCount: true,
    },
    value: [
      {
        type: 'viewTooltipText',
        text: 'viewTooltipText ellipsis text viewTooltipText ellipsis text viewTooltipText ellipsis text viewTooltipText ellipsis text viewTooltipText ellipsis text viewTooltipText ellipsis text ',
      },
    ],
  },
  {
    key: {
      title: 'Key',
    },
    value: [
      {
        type: 'text',
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
        type: 'text',
        text: 'Value 1',
      },
    ],
  },
]);
const listTextData2 = computed(() =>
  Array.from({ length: 8 }, (_, i) => ({
    key: {
      title: `Key ${i + 1}`,
    },
    value: [
      {
        type: 'text',
        text: `Value ${i + 1}`,
      },
    ],
  }))
);

// button active
const isSideColumn = ref(null);

// collapse
const guideActiveKey = ref(['1']);

/* Table */
// 테이블 상태 관리
const selectedKeys = ref<string[]>([]);
const selectedRowKeys = ref<string[]>([]);
const fixedColumnCount = ref(0);
/**
 * 선택 (체크박스, 라디오) 관련
 */
const tableRowSelection = computed(() =>
  selectedRowKeys !== undefined
    ? {
        type: 'checkbox',
        columnWidth: 52,
        selectedRowKeys: selectedRowKeys.value,
        onChange: (keys: string[]) => {
          selectedRowKeys.value = keys;
        },
      }
    : undefined
);

/**
 * 선택 (체크박스, 라디오) 관련
 */
const tableRowSelectionRadio = computed(() =>
  selectedRowKeys !== undefined
    ? {
        type: 'radio',
        columnWidth: 52,
        selectedRowKeys: selectedRowKeys.value,
        onChange: (keys: string[]) => {
          selectedRowKeys.value = keys;
        },
      }
    : undefined
);
interface Column {
  title: string;
  dataIndex: string;
  ellipsis?: boolean;
  filterSearch?: boolean;
  sorter?: boolean;
  filters?: { text: string; value: string }[];
  width?: number;
  align?: string;
  fixed?: boolean | 'left' | 'right';
  isOrFilter?: boolean;
}

// 메인 테이블 데이터
const columns = ref<Column[]>([
  {
    title: '이름',
    dataIndex: 'name',
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '프로젝트',
    dataIndex: 'project',
    sorter: true,
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '성별',
    dataIndex: 'gender',
    isOrFilter: true,
    sorter: true,
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
      { text: 'XX', value: 'xx' },
      { text: 'XY', value: 'xy' },
    ],
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '아이콘',
    dataIndex: 'icon',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '체크 레이블',
    dataIndex: 'checkLabel',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '버튼',
    dataIndex: 'button',
    sorter: true,
  },
  {
    title: '기본',
    dataIndex: 'default',
    sorter: true,
    filterSearch: true,
  },
  {
    title: 'numeric',
    dataIndex: 'numeric',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '인풋 셀',
    dataIndex: 'inner',
    sorter: true,
  },
  {
    title: '셀렉트 셀',
    dataIndex: 'select',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '태그',
    dataIndex: 'tag',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '진행',
    dataIndex: 'progress',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '링크',
    dataIndex: 'link',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '중요 링크',
    dataIndex: 'accentLink',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '알림',
    dataIndex: 'notification',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '작업',
    dataIndex: 'setting',
    width: 52,
    align: 'center',
    fixed: 'right',
  },
]);
const baseData = [
  {
    key: '1',
    name: '테이블1',
    project: '프로젝트',
    gender: 'male',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
    inner: '',
    tag: ['tag1', 'tag2'],
    progress: 50,
    link: 'http://',
    accentLink: 'http://',
    notification: 'notification',
  },
  {
    key: '2',
    name: '테이블2',
    project: '프로젝트',
    gender: 'female',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
    tag: ['tag1', 'tag2'],
    progress: 50,
    link: 'http://',
    accentLink: 'http://',
    notification: 'notification',
  },
  {
    key: '3',
    name: '테이블3',
    project: '프로젝트',
    gender: 'male',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
    tag: ['tag1', 'tag2'],
    progress: 50,
    link: 'http://',
    accentLink: 'http://',
    notification: 'notification',
  },
  ...Array.from({ length: 95 }, (_, i) => {
    const index = i + 6;
    return {
      key: String(index),
      name: '테이블',
      project: '프로젝트',
      gender: 'male',
      inner: '',
      icon: 'icon',
      checkLabel: 'checkLabel',
      button: 'button',
      default: 'default',
      numeric: 'numeric',
      tag: ['tag1', 'tag2'],
      progress: 50,
      link: 'http://',
      accentLink: 'http://',
      notification: 'notification',
    };
  }),
];

// fixedColumnCount 변경 감지해서 columns 업데이트
watch(fixedColumnCount, (newCount) => {
  columns.value = columns.value.map((col, index) => {
    // 이미 fixed: 'right'인 컬럼은 그대로 두기
    if (col.fixed === 'right') return { ...col, fixed: 'right' };
    // 나머지는 왼쪽 고정 처리
    return {
      ...col,
      fixed: index < newCount ? 'left' : false,
    };
  });
});
const formatText = (percent: number) => `${percent}%`;

// 확장 테이블 데이터
const secondColumns = ref([
  {
    title: '이름',
    dataIndex: 'name',
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '프로젝트',
    dataIndex: 'project',
    sorter: true,
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '성별',
    dataIndex: 'gender',
    isOrFilter: true,
    sorter: true,
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
      { text: 'XX', value: 'xx' },
      { text: 'XY', value: 'xy' },
    ],
    ellipsis: true,
    filterSearch: true,
  },
  {
    title: '아이콘',
    dataIndex: 'icon',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '체크 레이블',
    dataIndex: 'checkLabel',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '버튼',
    dataIndex: 'button',
    sorter: true,
  },
  {
    title: '기본',
    dataIndex: 'default',
    sorter: true,
    filterSearch: true,
  },
  {
    title: 'numeric',
    dataIndex: 'numeric',
    sorter: true,
    filterSearch: true,
  },
  {
    title: '작업',
    dataIndex: 'setting',
    width: 58,
    align: 'center',
    fixed: 'right',
  },
]);
const secondData = [
  {
    key: '1',
    name: '테이블1',
    project: '프로젝트',
    gender: 'male',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
    inner: '',
  },
  {
    key: '2',
    name: '테이블2',
    project: '프로젝트',
    gender: 'female',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
  },
  {
    key: '3',
    name: '테이블3',
    project: '프로젝트',
    gender: 'male',
    inner: '',
    icon: 'icon',
    checkLabel: 'checkLabel',
    button: 'button',
    default: 'default',
    numeric: 'numeric',
  },
  ...Array.from({ length: 95 }, (_, i) => {
    const index = i + 6;
    return {
      key: String(index),
      name: '테이블',
      project: '프로젝트',
      gender: 'male',
      inner: '',
      icon: 'icon',
      checkLabel: 'checkLabel',
      button: 'button',
      default: 'default',
      numeric: 'numeric',
    };
  }),
];

// 내부 테이블 데이터
const innerColumns = ref([
  {
    title: '상세 이름',
    dataIndex: 'detailName',
    ellipsis: true,
  },
  {
    title: '상세 설명',
    dataIndex: 'description',
    ellipsis: true,
  },
  {
    title: '상태',
    dataIndex: 'status',
    ellipsis: true,
  },
]);
const innerData = ref([
  {
    key: '1',
    detailName: '상세 데이터 1',
    description: '설명 1',
    status: '활성',
  },
  {
    key: '2',
    detailName: '상세 데이터 2',
    description: '설명 2',
    status: '비활성',
  },
]);
</script>
