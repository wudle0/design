<template>
  <div class="page-container dashboard">
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
            <a-button class="ghost">
              <Icon color="default">
                <template #name>refresh</template>
              </Icon>
              yyyy.mm.dd hh:mm:ss 기준
            </a-button>
          </template>
        </BasicTitle>
      </div>
      <!-- 패널 컨텐츠 영역 -->
      <div class="panel-body">
        <!-- 중앙 컨텐츠 (가변) -->
        <div class="main-content">
          <!-- case Card width chart -->
          <div class="content">
            <div class="content-header">
              <BasicTitle level="content" title="1. content title component" />
            </div>
            <div class="content-body">
              <a-row :gutter="[16, 16]">
                <a-col :span="6">
                  <BarChart
                    height="208px"
                    :barData="barData"
                    tableSize="medium"
                    orient="vertical"
                    vertical
                  >
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>bar_chart</template>
                          </Icon>
                          <a-typography-title :level="3">
                            범례 : 하단 (테이블 리스트) / 차트 : 세로
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="small green">
                              <p class="tag-wrap-text">tag</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                  </BarChart>
                </a-col>
                <a-col :span="6">
                  <PieChart
                    :pieData="pieData2"
                    height="100%"
                    legendSize="medium"
                    orient="vertical"
                    :pieRadius="'58px'"
                  >
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>pie_chart</template>
                          </Icon>
                          <a-typography-title :level="3">
                            범례 : 하단 (커스텀 리스트)
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="small red">
                              <p class="tag-wrap-text">tag</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                  </PieChart>
                </a-col>
                <a-col :span="6">
                  <LineChart
                    :lineData="lineData"
                    height="100%"
                    legendSize="medium"
                    vertical
                    orient="vertical"
                  >
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>bar_chart</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Card Title Placeholder
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="error small">
                              <p class="tag-wrap-text">value description</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                  </LineChart>
                </a-col>
                <a-col :span="6">
                  <a-card :bordered="true">
                    <a-flex vertical :gap="22">
                      <!-- 카드 내부의 div로 구성 (카드,리스트 등으로 대체 불가) -->
                      <a-flex vertical :gap="10">
                        <a-flex :gap="4" align="center">
                          <Icon size="md" color="default" fill>
                            <template #name>data_table</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Key
                          </a-typography-title>
                        </a-flex>
                        <a-typography-text class="typography-display-1">
                          1,900
                        </a-typography-text>
                      </a-flex>
                      <a-flex vertical :gap="10">
                        <a-flex :gap="4" align="center">
                          <Icon size="md" color="default" fill>
                            <template #name>database</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Key
                          </a-typography-title>
                        </a-flex>
                        <a-typography-text class="typography-display-1">
                          131
                        </a-typography-text>
                      </a-flex>
                      <a-flex vertical :gap="10">
                        <a-flex :gap="4" align="center">
                          <Icon size="md" color="default" fill>
                            <template #name>communities</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Key
                          </a-typography-title>
                        </a-flex>
                        <a-typography-text class="typography-display-1">
                          1,900
                        </a-typography-text>
                      </a-flex>
                      <a-flex vertical :gap="10">
                        <a-flex :gap="4" align="center">
                          <Icon size="md" color="default" fill>
                            <template #name>hive</template>
                          </Icon>
                          <a-typography-title :level="3">
                            Key
                          </a-typography-title>
                        </a-flex>
                        <a-typography-text class="typography-display-1">
                          1,900
                        </a-typography-text>
                      </a-flex>
                    </a-flex>
                  </a-card>
                </a-col>

                <!-- case Status Card in Card, Card vertical -->

                <a-col :span="12">
                  <a-card :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText
                              text="2. Card Title Placeholder"
                            />
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">TAG</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <a-row :gutter="12">
                      <a-col :span="8">
                        <a-card
                          size="small"
                          :bordered="true"
                          class="status-success status-item-border status-item-bg"
                        >
                          <template #title>
                            <span class="status-item-color">ONLINE</span>
                          </template>
                          <a-typography-text>
                            서버 정상 작동
                          </a-typography-text>
                        </a-card>
                      </a-col>
                      <a-col :span="8">
                        <a-card
                          size="small"
                          :bordered="true"
                          class="status-warning status-item-border status-item-bg"
                        >
                          <template #title>
                            <span class="status-item-color">WARNING</span>
                          </template>
                          <a-typography-text>
                            일부 서버 오프라인
                          </a-typography-text>
                        </a-card>
                      </a-col>
                      <a-col :span="8">
                        <a-card
                          size="small"
                          :bordered="true"
                          class="status-error status-item-border status-item-bg"
                        >
                          <template #title>
                            <span class="status-item-color">ERROR</span>
                          </template>
                          <a-typography-text>
                            즉시 대응 필요
                          </a-typography-text>
                        </a-card>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
                <a-col :span="4">
                  <a-card :bordered="true">
                    <!-- 타이틀이 있을 경우 주석 해제 -->
                    <!-- <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                    </template> -->
                    <a-flex vertical :gap="10">
                      <!-- 카드 내부의 div로 구성 (카드,리스트 등으로 대체 불가) -->
                      <a-flex justify="space-between" align="center">
                        <a-flex :gap="8" align="center">
                          <a-typography-title :level="3">
                            Key 2-1
                          </a-typography-title>
                          <a-divider type="vertical" />
                          <a-typography-text
                            class="typography-body-2 ant-typography-subtle"
                          >
                            <BasicEllipsisText text="description" />
                          </a-typography-text>
                        </a-flex>
                        <a-typography-text class="typography-display-1">
                          4
                        </a-typography-text>
                      </a-flex>
                      <a-flex justify="space-between" align="center">
                        <a-flex :gap="8" align="center">
                          <a-typography-title :level="3">
                            Key 2-2
                          </a-typography-title>
                          <a-divider type="vertical" />
                          <a-typography-text
                            class="typography-body-2 ant-typography-subtle"
                          >
                            description
                          </a-typography-text>
                        </a-flex>
                        <a-typography-text class="typography-display-1">
                          4
                        </a-typography-text>
                      </a-flex>
                      <a-flex justify="space-between" align="center">
                        <a-flex :gap="8" align="center">
                          <a-typography-title :level="3">
                            Key 2-3
                          </a-typography-title>
                          <a-divider type="vertical" />
                          <a-typography-text
                            class="typography-body-2 ant-typography-subtle"
                          >
                            description
                          </a-typography-text>
                        </a-flex>
                        <a-typography-text class="typography-display-1">
                          4
                        </a-typography-text>
                      </a-flex>
                    </a-flex>
                  </a-card>
                </a-col>
              </a-row>

              <!-- case multiple Card, status, etc... -->
              <BasicTitle
                level="card"
                title="3. card group title component"
                :tooltip="{
                  title: 'card group component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'blue' }]"
              >
                <template #extra>
                  <a-button class="link accent">
                    link
                    <Icon size="md" color="default" fill>
                      <template #name>keyboard_arrow_right</template>
                    </Icon>
                  </a-button>
                </template>
              </BasicTitle>
              <a-row :gutter="[16, 16]">
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <a-tooltip overlayClassName="plain">
                            <template #title>help ghost 버튼 툴팁</template>
                            <a-button class="auto">
                              <Icon size="md" color="default">
                                <template #name>help</template>
                              </Icon>
                            </a-button>
                          </a-tooltip>
                        </div>
                      </div>
                    </template>
                    <template #extra> 단위 (%) </template>
                    <a-flex justify="space-between" align="center" :gap="16">
                      <a-progress :percent="50" :size="12" :show-info="false" />
                      <a-typography-text
                        class="typography-display-1 status-item-color"
                      >
                        90
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <a-tooltip overlayClassName="plain">
                            <template #title>help ghost 버튼 툴팁</template>
                            <a-button class="auto">
                              <Icon size="md" color="default">
                                <template #name>help</template>
                              </Icon>
                            </a-button>
                          </a-tooltip>
                        </div>
                      </div>
                    </template>
                    <template #extra> 단위 (%) </template>
                    <a-flex justify="space-between" align="center" :gap="4">
                      <a-flex align="center" :gap="5">
                        <a-typography-title :level="1">
                          51.34
                        </a-typography-title>
                        <a-divider type="vertical" />
                        <a-typography-text
                          class="typography-body-2 ant-typography-subtle"
                        >
                          55.12 GiB
                        </a-typography-text>
                      </a-flex>
                      <a-typography-text
                        class="typography-display-1 status-item-color"
                      >
                        90
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <a-tooltip overlayClassName="plain">
                            <template #title>help ghost 버튼 툴팁</template>
                            <a-button class="auto">
                              <Icon size="md" color="default">
                                <template #name>help</template>
                              </Icon>
                            </a-button>
                          </a-tooltip>
                        </div>
                      </div>
                    </template>
                    <template #extra> 단위 (%) </template>
                    <a-flex justify="space-between" align="center" :gap="4">
                      <a-flex align="center" :gap="5">
                        <a-typography-title :level="1">
                          51.34
                        </a-typography-title>
                        <a-divider type="vertical" />
                        <a-typography-text
                          class="typography-body-2 ant-typography-subtle"
                        >
                          55.12 GiB
                        </a-typography-text>
                      </a-flex>
                      <a-typography-text
                        class="typography-display-1 status-item-color"
                      >
                        90
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <a-tooltip overlayClassName="plain">
                            <template #title>help ghost 버튼 툴팁</template>
                            <a-button class="auto">
                              <Icon size="md" color="default">
                                <template #name>help</template>
                              </Icon>
                            </a-button>
                          </a-tooltip>
                        </div>
                      </div>
                    </template>
                    <template #extra> 단위 (%) </template>
                    <a-flex justify="flex-end" align="center" :gap="4">
                      <a-typography-text
                        class="typography-display-1 status-item-color"
                      >
                        90
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>

          <!-- card Card Group 3 columns, no-border -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="2. content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'blue' }]"
              >
                <template #extra>
                  <a-form>
                    <a-form-item :rules="[{ required: false }]">
                      <a-select
                        v-model:value="formState.selected"
                        placeholder="Select 선택 Placeholder"
                        size="medium"
                      >
                        <a-select-option value="a">Select 01</a-select-option>
                        <a-select-option value="b">Select 02</a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-form>
                </template>
              </BasicTitle>
            </div>
            <div class="content-body">
              <a-flex class="card-group">
                <a-row>
                  <a-col :span="8">
                    <a-card size="small" :bordered="false">
                      <template #title>
                        <div class="title-group">
                          <div class="group-items">
                            <a-typography-title :level="3" class="item-title">
                              <BasicEllipsisText
                                text="Card Title Placeholder"
                              />
                            </a-typography-title>
                            <a-divider type="vertical" />
                            <a-typography-text
                              class="typography-body-2 ant-typography-subtle"
                            >
                              100%
                            </a-typography-text>
                          </div>
                        </div>
                      </template>
                      <template #extra>
                        <a-flex align="center" :gap="8">
                          <a-typography-text class="typography-display-1">
                            50
                          </a-typography-text>
                          <a-typography-text
                            class="typography-body-2 ant-typography-subtle"
                          >
                            개
                          </a-typography-text>
                        </a-flex>
                      </template>
                    </a-card>
                  </a-col>
                  <a-col :span="8">
                    <a-card size="small" :bordered="false">
                      <template #title>
                        <div class="title-group">
                          <div class="group-items">
                            <div class="tag-wrap">
                              <a-tag class="green medium">
                                <p class="tag-wrap-text">RUNNING</p>
                              </a-tag>
                            </div>
                            <a-typography-title :level="3" class="item-title">
                              <BasicEllipsisText
                                text="Card Title Placeholder"
                              />
                            </a-typography-title>
                            <a-divider type="vertical" />
                            <a-typography-text
                              class="typography-body-2 ant-typography-subtle"
                            >
                              100%
                            </a-typography-text>
                          </div>
                        </div>
                      </template>
                      <template #extra>
                        <a-flex align="center" :gap="8" class="status-success">
                          <a-typography-text
                            class="typography-display-1 status-item-color"
                          >
                            49
                          </a-typography-text>
                          <a-typography-text
                            class="typography-body-2 ant-typography-subtle"
                          >
                            개
                          </a-typography-text>
                        </a-flex>
                      </template>
                    </a-card>
                  </a-col>
                  <a-col :span="8">
                    <a-card size="small" :bordered="false">
                      <template #title>
                        <div class="title-group">
                          <div class="group-items">
                            <a-typography-title :level="3" class="item-title">
                              <BasicEllipsisText
                                text="Card Title Placeholder"
                              />
                            </a-typography-title>
                            <a-typography-title :level="1">
                              2
                            </a-typography-title>
                            <a-divider type="vertical" />
                            <a-typography-text
                              class="typography-body-2 ant-typography-subtle"
                            >
                              100%
                            </a-typography-text>
                          </div>
                        </div>
                      </template>
                      <template #extra>
                        <a-flex align="center" :gap="8">
                          <a-typography-text class="typography-display-1">
                            1
                          </a-typography-text>
                          <a-typography-text
                            class="typography-body-2 ant-typography-subtle"
                          >
                            개
                          </a-typography-text>
                          <a-tooltip overlayClassName="plain">
                            <template #title>help ghost 버튼 툴팁</template>
                            <a-button class="auto">
                              <Icon size="md" color="default">
                                <template #name>help</template>
                              </Icon>
                            </a-button>
                          </a-tooltip>
                        </a-flex>
                      </template>
                    </a-card>
                  </a-col>
                </a-row>
              </a-flex>
            </div>
          </div>

          <!-- card Card in card, vertical -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="3. content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'red' }]"
              >
                <template #extra>
                  <a-form>
                    <a-form-item :rules="[{ required: false }]">
                      <a-select
                        v-model:value="formState.selected"
                        placeholder="Select 선택 Placeholder"
                        size="medium"
                      >
                        <a-select-option value="a">Select 01</a-select-option>
                        <a-select-option value="b">Select 02</a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-form>
                </template>
              </BasicTitle>
            </div>
            <div class="content-body">
              <a-flex vertical :gap="16">
                <a-row :gutter="[16, 16]">
                  <a-col :span="4">
                    <a-card :bordered="true">
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
                      <a-flex vertical :gap="12">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="green medium">
                                <p class="tag-wrap-text">BOUND</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                        <a-divider />
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="blue medium">
                                <p class="tag-wrap-text">PENDING</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                        <a-divider />
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="red medium">
                                <p class="tag-wrap-text">LOST</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                      </a-flex>
                    </a-card>
                  </a-col>
                  <a-col :span="4">
                    <a-card :bordered="true">
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
                      <a-flex vertical :gap="12">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="green medium">
                                <p class="tag-wrap-text">RUNNING</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                        <a-divider />
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="orange medium">
                                <p class="tag-wrap-text">WARNING</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                        <a-divider />
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="red medium">
                                <p class="tag-wrap-text">ERROR</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                        <a-divider />
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="down medium">
                                <p class="tag-wrap-text">SHUT-DOWN</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                      </a-flex>
                    </a-card>
                  </a-col>
                  <a-col :span="4">
                    <a-card :bordered="true">
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
                      <a-flex vertical :gap="12">
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="green medium">
                                <p class="tag-wrap-text">NORMAL</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                        <a-divider />
                        <a-card size="small" :bordered="false">
                          <template #title>
                            <div class="tag-wrap">
                              <a-tag class="orange medium">
                                <p class="tag-wrap-text">WARNING</p>
                              </a-tag>
                            </div>
                          </template>
                          <template #extra>
                            <a-typography-title :level="1" class="item-title">
                              Value
                            </a-typography-title>
                          </template>
                        </a-card>
                      </a-flex>
                    </a-card>
                  </a-col>
                </a-row>
                <a-row :gutter="[16, 16]">
                  <a-col :span="6">
                    <a-card size="small" class="align-center">
                      <template #title>
                        <div class="title-group">
                          <div class="group-items">
                            <a-typography-text class="typography-body-2">
                              <BasicEllipsisText text="Near Full (80%) OSDs" />
                            </a-typography-text>
                          </div>
                        </div>
                      </template>

                      <a-flex justify="space-between" :gap="4" align="center">
                        <a-typography-title :level="1">
                          <BasicEllipsisText text="33" />
                        </a-typography-title>
                        <a-typography-text
                          class="typography-body-2 ant-typography-subtle"
                        >
                          개
                        </a-typography-text>
                      </a-flex>
                    </a-card>
                  </a-col>

                  <a-col :span="6">
                    <a-card size="small" class="align-center">
                      <template #title>
                        <div class="title-group">
                          <div class="group-items">
                            <a-typography-text class="typography-body-2">
                              <BasicEllipsisText text="Near Full (80%) OSDs" />
                            </a-typography-text>
                          </div>
                        </div>
                      </template>

                      <a-flex justify="space-between" :gap="4" align="center">
                        <a-typography-title :level="1">
                          <BasicEllipsisText text="33" />
                        </a-typography-title>
                        <a-typography-text
                          class="typography-body-2 ant-typography-subtle"
                        >
                          개
                        </a-typography-text>
                      </a-flex>
                    </a-card>
                  </a-col>
                  <a-col :span="12">
                    <a-card size="small" :bordered="true" class="status-error">
                      <template #title>
                        <div class="title-group">
                          <div class="group-items">
                            <Icon
                              color="default"
                              size="md"
                              fill
                              class="status-item-color"
                            >
                              <template #name>error</template>
                            </Icon>
                            <a-typography-title :level="3" class="item-title">
                              <BasicEllipsisText
                                text="Card Title Placeholder"
                              />
                            </a-typography-title>
                            <a-tooltip overlayClassName="plain">
                              <template #title>help ghost 버튼 툴팁</template>
                              <a-button class="auto">
                                <Icon size="md" color="default">
                                  <template #name>help</template>
                                </Icon>
                              </a-button>
                            </a-tooltip>
                          </div>
                        </div>
                      </template>
                      <template #extra> 단위 (%) </template>
                      <a-flex justify="space-between" align="center" :gap="4">
                        <a-flex align="center" :gap="5">
                          <a-typography-title :level="1">
                            51.34
                          </a-typography-title>
                          <a-divider type="vertical" />
                          <a-typography-text
                            class="typography-body-2 ant-typography-subtle"
                          >
                            55.12 GiB
                          </a-typography-text>
                        </a-flex>
                        <a-typography-text
                          class="typography-display-1 status-item-color"
                        >
                          90
                        </a-typography-text>
                      </a-flex>
                    </a-card>
                  </a-col>
                </a-row>
              </a-flex>
            </div>
          </div>

          <!-- case multiple Card for viola, status down -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="4. content title component"
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
            <!-- content-body 내부에 level:card 컴포넌트 사용 시 padding-top 제거 -->
            <!-- 직관적으로 클래스를 활용한 여백 제어 -->
            <div class="content-body pt-0">
              <BasicTitle
                level="card"
                title="card title component"
                :tooltip="{
                  title: 'card title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'blue' }]"
              />
              <a-row :gutter="16">
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <!-- 커스텀 아이콘/이미지 삽입 -->
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <div class="tag-wrap">
                        <a-tag class="green small">
                          <p class="tag-wrap-text">UP</p>
                        </a-tag>
                      </div>
                    </template>
                    <a-flex :gap="4" vertical>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card
                    size="small"
                    :bordered="true"
                    class="status-down status-item-bg status-item-bg"
                  >
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <!-- 커스텀 아이콘/이미지 삽입 -->
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <div class="tag-wrap">
                        <a-tag class="down small">
                          <p class="tag-wrap-text">DOWN</p>
                        </a-tag>
                      </div>
                    </template>
                    <a-flex :gap="4" vertical>
                      <a-typography-text class="item-desc status-item-color">
                        Ubuntu is a Debian-based Linux apple operating system
                        that runs from the desktop to the cloud, to all your
                        internet connected things.
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <!-- 커스텀 아이콘/이미지 삽입 -->
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <a-button class="link accent">
                            link
                            <Icon size="md" color="brand" fill>
                              <template #name>open_in_new</template>
                            </Icon>
                          </a-button>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <div class="tag-wrap">
                        <a-tag class="green small">
                          <p class="tag-wrap-text">GOOD</p>
                        </a-tag>
                      </div>
                    </template>
                    <a-flex :gap="4" vertical>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <!-- 커스텀 아이콘/이미지 삽입 -->
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <div class="tag-wrap">
                        <a-tag class="green small">
                          <p class="tag-wrap-text">UP</p>
                        </a-tag>
                      </div>
                    </template>
                    <a-flex :gap="4" vertical>
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          :lineClamp="2"
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                    </a-flex>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>

          <!-- case Card Group -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="5. content title component"
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
            <div class="content-body pt-0">
              <a-row :gutter="[16, 0]">
                <a-col :span="12">
                  <BasicTitle
                    level="card"
                    title="card title component"
                    :tooltip="{
                      title: 'card title component 도움말 툴팁',
                      icon: 'info',
                    }"
                    :tags="[{ text: 'TAG', color: 'blue' }]"
                  />
                  <a-flex class="card-group align-center">
                    <a-row>
                      <a-col :span="6">
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
                          <a-flex justify="space-between" :gap="4">
                            <a-typography-text class="typography-display-1">
                              13
                            </a-typography-text>
                          </a-flex>
                        </a-card>
                      </a-col>
                      <a-col :span="6">
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
                          <a-flex justify="space-between" :gap="4">
                            <a-typography-text class="typography-display-1">
                              13
                            </a-typography-text>
                          </a-flex>
                        </a-card>
                      </a-col>
                      <a-col :span="6">
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
                          <a-flex justify="space-between" :gap="4">
                            <a-typography-text class="typography-display-1">
                              13
                            </a-typography-text>
                          </a-flex>
                        </a-card>
                      </a-col>
                      <a-col :span="6">
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
                          <a-flex justify="space-between" :gap="4">
                            <a-typography-text class="typography-display-1">
                              13
                            </a-typography-text>
                          </a-flex>
                        </a-card>
                      </a-col>
                    </a-row>
                  </a-flex>
                </a-col>
                <a-col :span="6">
                  <BasicTitle
                    level="card"
                    title="card title component"
                    :tooltip="{
                      title: 'card title component 도움말 툴팁',
                      icon: 'info',
                    }"
                    :tags="[{ text: 'TAG', color: 'orange' }]"
                  />
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
                    <template #extra>
                      <div class="tag-wrap">
                        <a-tag class="green small">
                          <p class="tag-wrap-text">TAG</p>
                        </a-tag>
                      </div>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <BasicTitle
                    level="card"
                    title="card title component"
                    :tooltip="{
                      title: 'card title component 도움말 툴팁',
                      icon: 'info',
                    }"
                    :tags="[{ text: 'TAG', color: 'blue' }]"
                  />
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
                    <template #extra>
                      <a-button class="secondary small"> primary </a-button>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-text class="item-desc">
                        <BasicEllipsisText
                          text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                        />
                      </a-typography-text>
                      <ul class="divider-list">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                      </ul>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="24">
                  <BasicTitle
                    level="card"
                    title="card title component"
                    :tooltip="{
                      title: 'card title component 도움말 툴팁',
                      icon: 'info',
                    }"
                    :tags="[{ text: 'TAG', color: 'blue' }]"
                  />
                  <a-row :gutter="16">
                    <a-col :span="8">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <Icon color="default" size="md" fill>
                                <template #name>error</template>
                              </Icon>
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                          <ul class="divider-list">
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                          </ul>
                        </template>
                        <template #extra>
                          <a-button class="primary small"> primary </a-button>
                        </template>
                        <a-flex :gap="4" vertical>
                          <a-flex :gap="4">
                            <a-typography-text class="item-desc">
                              <BasicEllipsisText
                                :lineClamp="2"
                                text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                              />
                            </a-typography-text>
                            <div class="tag-wrap">
                              <a-tag class="green small">
                                <p class="tag-wrap-text">TAG</p>
                              </a-tag>
                            </div>
                          </a-flex>
                          <ul class="divider-list">
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                          </ul>
                        </a-flex>
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <Icon color="default" size="md" fill>
                                <template #name>error</template>
                              </Icon>
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                          <ul class="divider-list">
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                          </ul>
                        </template>
                        <a-flex :gap="4" vertical>
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
                        </a-flex>
                      </a-card>
                    </a-col>
                    <a-col :span="8">
                      <a-card size="small" :bordered="true">
                        <template #title>
                          <div class="title-group">
                            <div class="group-items">
                              <Icon color="default" size="md" fill>
                                <template #name>error</template>
                              </Icon>
                              <a-typography-title :level="3" class="item-title">
                                <BasicEllipsisText
                                  text="Card Title Placeholder"
                                />
                              </a-typography-title>
                            </div>
                          </div>
                          <ul class="divider-list">
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                          </ul>
                        </template>
                        <a-flex :gap="4" vertical>
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
                        </a-flex>
                      </a-card>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </div>
          </div>

          <!-- case multiple Card 7 colunms (ant 에서 제공하지 않으므로 클래스 필수 .columns-7) -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="6. content title component"
                :tooltip="{
                  title: 'content title component 도움말 툴팁',
                  icon: 'info',
                }"
                :tags="[{ text: 'TAG', color: 'green' }]"
              >
                <template #extra>
                  <a-button class="primary"> primary </a-button>
                  <a-button class="secondary">secondary</a-button>
                </template>
              </BasicTitle>
            </div>
            <div class="content-body">
              <!-- 7 컬럼 예외 클래스 (안트에 없음) -->
              <a-row :gutter="[16, 16]" class="columns-7">
                <a-col>
                  <a-card size="small" class="align-center">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-text class="typography-body-2">
                            <BasicEllipsisText text="Card Text Placeholder" />
                          </a-typography-text>
                        </div>
                      </div>
                    </template>

                    <a-flex justify="space-between" :gap="4">
                      <a-typography-title :level="1">
                        <BasicEllipsisText text="Ubuntu 20.04 LTS" />
                      </a-typography-title>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card size="small" class="align-center">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-text class="typography-body-2">
                            <BasicEllipsisText text="Card Text Placeholder" />
                          </a-typography-text>
                        </div>
                      </div>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-title :level="1">
                        <BasicEllipsisText text="Ubuntu 20.04 LTS" />
                      </a-typography-title>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card size="small" class="align-center">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-text class="typography-body-2">
                            <BasicEllipsisText text="Card Text Placeholder" />
                          </a-typography-text>
                        </div>
                      </div>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-title :level="1">
                        <BasicEllipsisText text="Ubuntu 20.04 LTS" />
                      </a-typography-title>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card size="small" class="align-center">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-text class="typography-body-2">
                            <BasicEllipsisText text="Card Text Placeholder" />
                          </a-typography-text>
                        </div>
                      </div>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-title :level="1">
                        <BasicEllipsisText text="Ubuntu 20.04 LTS" />
                      </a-typography-title>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card size="small" class="align-center">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-text class="typography-body-2">
                            <BasicEllipsisText text="Card Text Placeholder" />
                          </a-typography-text>
                        </div>
                      </div>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-title :level="1">
                        <BasicEllipsisText text="Ubuntu 20.04 LTS" />
                      </a-typography-title>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card size="small" class="align-center">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-text class="typography-body-2">
                            <BasicEllipsisText text="Card Text Placeholder" />
                          </a-typography-text>
                        </div>
                      </div>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-title :level="1">
                        <BasicEllipsisText text="Ubuntu 20.04 LTS" />
                      </a-typography-title>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card size="small" class="align-center">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <a-typography-text class="typography-body-2">
                            <BasicEllipsisText text="Card Text Placeholder" />
                          </a-typography-text>
                        </div>
                      </div>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-typography-title :level="1">
                        <BasicEllipsisText text="Ubuntu 20.04 LTS" />
                      </a-typography-title>
                    </a-flex>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>

          <!-- case Card Group 3 colunms -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="7. content title component"
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
            <div class="content-body">
              <a-flex class="card-group">
                <a-row>
                  <a-col :span="8">
                    <a-card size="small" :bordered="false" class="align-center">
                      <template #title>
                        <a-flex vertical :gap="4">
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3">
                                Card Text Placeholder (h3)
                              </a-typography-title>
                            </div>
                          </div>
                          <a-typography-text class="item-desc">
                            <BasicEllipsisText
                              :lineClamp="2"
                              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                            />
                          </a-typography-text>
                        </a-flex>
                      </template>
                      <a-flex justify="space-between" :gap="4">
                        <a-typography-text class="typography-display-1">
                          12,000
                        </a-typography-text>
                      </a-flex>
                    </a-card>
                  </a-col>
                  <a-col :span="8">
                    <a-card size="small" :bordered="false" class="align-center">
                      <template #title>
                        <a-flex vertical :gap="4">
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3">
                                Card Text Placeholder (h3)
                              </a-typography-title>
                            </div>
                          </div>
                          <a-typography-text class="item-desc">
                            <BasicEllipsisText
                              :lineClamp="2"
                              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                            />
                          </a-typography-text>
                        </a-flex>
                      </template>
                      <a-flex justify="space-between" :gap="4">
                        <a-typography-text class="typography-display-1">
                          12,000
                        </a-typography-text>
                      </a-flex>
                    </a-card>
                  </a-col>
                  <a-col :span="8">
                    <a-card size="small" :bordered="false" class="align-center">
                      <template #title>
                        <a-flex vertical :gap="4">
                          <div class="title-group">
                            <div class="group-items">
                              <a-typography-title :level="3">
                                Card Text Placeholder (h3)
                              </a-typography-title>
                            </div>
                          </div>
                          <a-typography-text class="item-desc">
                            <BasicEllipsisText
                              :lineClamp="2"
                              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
                            />
                          </a-typography-text>
                        </a-flex>
                      </template>
                      <a-flex justify="space-between" :gap="4">
                        <a-typography-text class="typography-display-1">
                          12,000
                        </a-typography-text>
                      </a-flex>
                    </a-card>
                  </a-col>
                </a-row>
              </a-flex>
            </div>
          </div>

          <!-- case multiple Card space-between -->
          <a-divider class="size-large" />
          <div class="content">
            <div class="content-header">
              <BasicTitle
                level="content"
                title="8. content title component"
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
            <div class="content-body">
              <a-row :gutter="[16, 16]">
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
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">TAG</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <a-button class="link"> link </a-button>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true" class="">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">TAG</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <a-button class="link"> link </a-button>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true" class="">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">TAG</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <a-button class="link"> link </a-button>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                    </a-flex>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card size="small" :bordered="true" class="">
                    <template #title>
                      <div class="title-group">
                        <div class="group-items">
                          <Icon color="default" size="md" fill>
                            <template #name>error</template>
                          </Icon>
                          <a-typography-title :level="3" class="item-title">
                            <BasicEllipsisText text="Card Title Placeholder" />
                          </a-typography-title>
                          <div class="tag-wrap">
                            <a-tag class="green small">
                              <p class="tag-wrap-text">TAG</p>
                            </a-tag>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template #extra>
                      <a-button class="link"> link </a-button>
                    </template>
                    <a-flex justify="space-between" :gap="4">
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                      <a-flex :gap="4" vertical>
                        <a-typography-text class="typography-display-1">
                          <BasicEllipsisText text="Display Text" />
                        </a-typography-text>
                        <ul class="divider-list">
                          <li>Placeholder</li>
                          <li>Placeholder</li>
                        </ul>
                      </a-flex>
                    </a-flex>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>

          <!-- collapse -->
          <div class="content">
            <a-collapse :bordered="false">
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
                    </a-flex>
                    <a-flex class="group-items items-end">
                      <a-button class="secondary" @click.stop>
                        Tab-function
                      </a-button>
                      <a-button class="ghost">
                        <Icon color="default">
                          <template #name>refresh</template>
                        </Icon>
                        yyyy.mm.dd hh:mm:ss 기준
                      </a-button>
                    </a-flex>
                  </a-flex>
                </template>
                <div class="collapse-content-body">collapse</div>
              </a-collapse-panel>
            </a-collapse>
          </div>
          <a-divider class="size-large" />
          <div class="content">
            <a-collapse :bordered="false">
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
                    </a-flex>
                    <a-flex class="group-items items-end">
                      <a-button class="secondary" @click.stop>
                        Tab-function
                      </a-button>
                      <a-button class="ghost">
                        <Icon color="default">
                          <template #name>refresh</template>
                        </Icon>
                        yyyy.mm.dd hh:mm:ss 기준
                      </a-button>
                    </a-flex>
                  </a-flex>
                </template>
                <div class="collapse-content-body">collapse</div>
              </a-collapse-panel>
            </a-collapse>
          </div>
          <a-divider class="size-large" />
          <div class="content">
            <a-collapse :bordered="false">
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
                    </a-flex>
                    <a-flex class="group-items items-end">
                      <a-button class="secondary" @click.stop>
                        Tab-function
                      </a-button>
                      <a-button class="ghost">
                        <Icon color="default">
                          <template #name>refresh</template>
                        </Icon>
                        yyyy.mm.dd hh:mm:ss 기준
                      </a-button>
                    </a-flex>
                  </a-flex>
                </template>
                <div class="collapse-content-body">collapse</div>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue';
import { Icon } from '@/components/icons';
import { BasicTitle, BasicEllipsisText } from '@/components/layouts';
import { BarChart, PieChart, LineChart } from '@/components/chart';

// 타입
interface SeriesItem {
  name: string;
  type: string;
  data: number[];
}
interface PieItem {
  name: string;
  value: number;
}

const barData = reactive({
  xAxis: ['A', 'B', 'C'],
  name: ['Legend 1', 'Legend 2', 'Legend 3', 'Legend 4', 'Legend 5'],
  data: [
    [12, 20, 10],
    [15, 25, 8],
    [10, 18, 12],
    [8, 22, 15],
    [20, 16, 9],
  ],
});

// 공통 Composable
function useLegendToggle<T extends SeriesItem | PieItem>(
  optionRef: any,
  type: 'pie' | 'series'
) {
  const originalData = ref<T[]>([]);
  const visibility = ref<boolean[]>([]);

  // 초기 복사
  if (type === 'pie') {
    originalData.value = optionRef.value.series[0].data.map((d: any) => ({
      ...d,
    }));
  } else {
    originalData.value = optionRef.value.series.map((s: any) => ({
      ...s,
      data: [...s.data],
    }));
  }
  visibility.value = originalData.value.map(() => true);

  const legendList = computed(() =>
    originalData.value.map((item, i) => ({
      key: String(i + 1),
      label:
        type === 'pie' ? (item as PieItem).name : (item as SeriesItem).name,
      value:
        type === 'pie'
          ? String((item as PieItem).value)
          : String((item as SeriesItem).data.slice(-1)[0] ?? 0),
      visible: visibility.value[i],
    }))
  );

  function toggle(index: number) {
    visibility.value[index] = !visibility.value[index];
    if (type === 'pie') {
      const filtered = originalData.value.filter((_, i) => visibility.value[i]);
      optionRef.value = {
        ...optionRef.value,
        series: [{ ...optionRef.value.series[0], data: filtered }],
      };
    } else {
      const filtered = originalData.value.filter((_, i) => visibility.value[i]);
      optionRef.value = {
        ...optionRef.value,
        series: filtered,
      };
    }
  }

  return { legendList, toggle };
}

const pieData2 = reactive({
  name: [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
  ],
  data: [12, 15, 10, 8, 20, 16, 9, 22, 18],
});

const lineData = reactive({
  xAxis: ['05', '06', '07', '08', '09', '10', '11', '12', '13'],
  name: [
    'CPU 사용량',
    '메모리 사용량',
    'Disk IO',
    'Network In',
    'Network Out',
    'File Descriptor',
    'Thread 수',
  ],
  data: [
    [60, 30, 80, 60, 70, 30, 50, 90, 20], // CPU 사용량
    [20, 35, 25, 40, 45, 67, 34, 78, 82], // 메모리 사용량
    [18, 28, 22, 35, 31, 38, 30, 40, 33],
    [25, 30, 27, 32, 29, 34, 31, 36, 33],
    [15, 22, 18, 25, 21, 26, 23, 28, 25],
    [40, 50, 48, 55, 53, 58, 54, 60, 57],
    [65, 58, 70, 60, 75, 62, 78, 64, 80],
  ],
});

// formState
const formState = reactive({
  name: '',
  selected: null,
});

const fixedColumnCount = ref(0);

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
