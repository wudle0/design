<template>
  <!-- 생성의 경우 정렬이 달라질 수 있기 때문에 유니크 클래스 확인 필요 -->
  <div class="page-container create">
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
        <!-- side step (고정 너비 : 236px)-->
        <TheSideStep :steps="steps" />

        <!-- 중앙 컨텐츠 (가변) -->
        <div class="main-content">
          <div class="content">
            <div class="content-body">
              <!-- alert : 안내문구 표시-->
              <Alert
                variant="info"
                title="form information"
                description="    - form-item-group > form-item > item-label, item-ant-form 구조
                  필수 (+여백) <br />
                  - form-item.required 클래스를 통한 필수 체크 표시 추가"
                showIcon
                banner
                vertical
              />
              <!-- vertical 타입 아니어도 : 안보이게 -->
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
                <div class="form-item-group">
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                        :tooltip="{
                          title: '라벨 타이틀 컴포넌트 도움말 툴팁',
                          icon: 'info',
                        }"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item
                        :rules="[{ required: true }]"
                        class="is-include-label"
                      >
                        <template #label>
                          Label명
                          <a-tooltip>
                            <template #title>
                              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘</template
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
                          placeholder="{label}을(를) 입력해 주세요."
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
                              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘</template
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
                          placeholder="{label}을(를) 입력해 주세요."
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
                              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘</template
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
                          placeholder="{label}을(를) 입력해 주세요."
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
                              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘</template
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
                          placeholder="{label}을(를) 입력해 주세요."
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
                              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘</template
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
                          placeholder="{label}을(를) 입력해 주세요."
                          type="text"
                        />
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item
                        :rules="[{ required: false }]"
                        extra="description"
                      >
                        <a-radio-group v-model:value="formState.radioValue">
                          <a-radio
                            v-for="item in radioCardOptions"
                            :key="item.value"
                            :value="item.value"
                            class="radio-container"
                          >
                            <div class="radio-contents">
                              <div class="title">
                                <Icon
                                  size="md"
                                  color="default"
                                  v-if="item.value === 'a'"
                                >
                                  <template #name>info</template>
                                </Icon>
                                <span>{{ item.label }}</span>
                              </div>
                              <div class="description">
                                {{ item.description }}
                              </div>
                            </div>
                          </a-radio>
                        </a-radio-group>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: true }]">
                        <a-radio-group v-model:value="formState.radioValue">
                          <a-radio
                            v-for="item in radioCardLabelOptions"
                            :key="item.value"
                            :value="item.value"
                            class="radio-container"
                          >
                            <div class="radio-contents">
                              <div class="title">
                                <Icon
                                  size="md"
                                  color="default"
                                  v-if="item.value === 'a'"
                                >
                                  <template #name>info</template>
                                </Icon>
                                <span>{{ item.label }}</span>
                              </div>
                            </div>
                          </a-radio>
                        </a-radio-group>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item
                        :rules="[{ required: true }]"
                        class="is-include-label"
                      >
                        <template #label>
                          Label명
                          <a-tooltip>
                            <template #title>
                              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘</template
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
                          placeholder="{label}을(를) 입력해 주세요."
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
                              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘 도움말 아이콘 도움말 아이콘 도움말
                              아이콘</template
                            >
                            <span class="icon">
                              <Icon size="xs" color="default">
                                <template #name>info</template>
                              </Icon>
                            </span>
                          </a-tooltip>
                        </template>
                        <a-select
                          v-model:value="formState.selected"
                          placeholder="{label}을(를) 선택해 주세요."
                        >
                          <a-select-option value="a">Select 01</a-select-option>
                          <a-select-option value="b">Select 02</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: true }]">
                        <a-input
                          v-model:value="formState.name"
                          placeholder="{label}을(를) 입력해 주세요."
                          type="text"
                        >
                        </a-input>
                      </a-form-item>
                      <a-form-item :rules="[{ required: true }]">
                        <a-select
                          v-model:value="formState.selected"
                          placeholder="{label}을(를) 선택해 주세요."
                        >
                          <a-select-option value="a">Select 01</a-select-option>
                          <a-select-option value="b">Select 02</a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-flex>
                        <a-form-item
                          :rules="[{ required: true }]"
                          class="is-include-label"
                        >
                          <template #label>
                            Select Label명

                            <a-tooltip>
                              <template #title>
                                도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                                아이콘 도움말 아이콘 도움말 아이콘 도움말
                                아이콘</template
                              >
                              <span class="icon">
                                <Icon size="xs" color="default">
                                  <template #name>info</template>
                                </Icon>
                              </span>
                            </a-tooltip>
                          </template>

                          <a-select
                            v-model:value="formState.selected"
                            placeholder="{label}을(를) 선택해 주세요."
                          >
                            <a-select-option value="a"
                              >Select 01</a-select-option
                            >
                            <a-select-option value="b"
                              >Select 02</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                        <a-form-item
                          :rules="[{ required: true }]"
                          class="is-include-label"
                        >
                          <template #label>
                            Select Label명

                            <a-tooltip>
                              <template #title>
                                도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
                                아이콘 도움말 아이콘 도움말 아이콘 도움말
                                아이콘</template
                              >
                              <span class="icon">
                                <Icon size="xs" color="default">
                                  <template #name>info</template>
                                </Icon>
                              </span>
                            </a-tooltip>
                          </template>
                          <a-select
                            v-model:value="formState.selected"
                            placeholder="{label}을(를) 선택해 주세요."
                          >
                            <a-select-option value="a"
                              >Select 01</a-select-option
                            >
                            <a-select-option value="b"
                              >Select 02</a-select-option
                            >
                          </a-select>
                        </a-form-item>
                      </a-flex>
                      <Alert
                        variant="error"
                        title="alert message"
                        description="alert description"
                        showIcon
                      />
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-list :data-source="listData">
                        <template #renderItem="{ item }">
                          <a-list-item>
                            <div class="key-area">
                              {{ item.key.title }}
                              <a-button
                                class="link accent"
                                :href="item.key.link.target"
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
                              </template>
                            </div>
                          </a-list-item>
                        </template>
                      </a-list>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: false }]">
                        <a-radio-group
                          v-model:value="formState.radioValue"
                          class="horizontal"
                        >
                          <a-radio value="a" disabled>option a</a-radio>
                          <a-radio value="b" disabled
                            >option b (disabled)</a-radio
                          >
                          <a-radio value="c">option c</a-radio>
                          <a-radio value="d">option d</a-radio>
                          <a-radio value="e">option e</a-radio>
                        </a-radio-group>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: false }]">
                        <a-textarea
                          v-model:value="formState.textarea"
                          placeholder="{label}을(를) 입력해 주세요."
                          :rows="4"
                          show-count
                          :maxlength="100"
                          class="md"
                        />
                      </a-form-item>
                    </a-flex>
                  </a-flex>

                  <!-- case Radio-group, Table-content -->
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: true }]">
                        <a-radio-group v-model:value="formState.radioValue">
                          <a-radio
                            v-for="item in radioCardLabelTableOptions"
                            :key="item.value"
                            :value="item.value"
                            class="radio-container"
                          >
                            <div class="radio-contents">
                              <div class="title">
                                <Icon
                                  size="md"
                                  color="default"
                                  v-if="item.value === 'a'"
                                >
                                  <template #name>info</template>
                                </Icon>
                                <span>{{ item.label }}</span>
                              </div>
                            </div>
                          </a-radio>
                        </a-radio-group>
                      </a-form-item>
                      <Table
                        :columns="contentGroupColumns"
                        :data="contentGroupData"
                        :show-filter="true"
                        :show-pagination="true"
                        :row-selection="tableRowSelection"
                        v-model:selectedKeys="selectedRowKeys"
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
                                  <p class="tag-wrap-text">
                                    {{ record?.status }}
                                  </p>
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
                    </a-flex>
                  </a-flex>

                  <!-- case Checkbox -->
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: false }]">
                        <a-checkbox-group
                          v-model:value="formState.checkedValueHorizontal"
                        >
                          <a-checkbox value="a"> checkbox option 1 </a-checkbox>
                          <a-checkbox value="b"> checkbox option 2</a-checkbox>
                          <a-checkbox value="c"> checkbox option 3</a-checkbox>
                          <a-checkbox value="d"> checkbox option 4</a-checkbox>
                          <a-checkbox value="e"> checkbox option 5</a-checkbox>
                        </a-checkbox-group>
                        <template #help>
                          <p class="helper">Helper Text</p>
                        </template>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                  <a-flex class="form-item">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: false }]">
                        <a-checkbox-group
                          v-model:value="formState.checkedValueHorizontal"
                          class="horizontal"
                        >
                          <a-checkbox value="a"> checkbox option 1 </a-checkbox>
                          <a-checkbox value="b"> checkbox option 2</a-checkbox>
                          <a-checkbox value="c"> check 3</a-checkbox>
                          <a-checkbox value="d"> check 4</a-checkbox>
                          <a-checkbox value="e"> check 5</a-checkbox>
                          <a-checkbox value="f"> checkbox option 6</a-checkbox>
                          <a-checkbox value="g"> checkbox option 7</a-checkbox>
                          <a-checkbox value="h"> checkbox option 8</a-checkbox>
                        </a-checkbox-group>
                        <template #help>
                          <p class="helper">Helper Text</p>
                        </template>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                </div>
                <BasicTitle
                  level="form"
                  title="form title component"
                  description="description"
                />
                <div class="form-item-group">
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                        :tooltip="{
                          title: '라벨 타이틀 컴포넌트 도움말 툴팁',
                          icon: 'info',
                        }"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-form-item :rules="[{ required: false }]">
                        <a-flex gap="6" align="center">
                          <span class="ant-switch-text">Off</span>
                          <a-switch v-model:checked="formState.switched" />
                          <span class="ant-switch-text">On</span>
                        </a-flex>
                      </a-form-item>
                    </a-flex>
                  </a-flex>
                </div>

                <!-- collapse 를 form 에 넣어야할 지 collapse 내부에 form 을 배치해야 할 지 고민 중-->
                <BasicTitle
                  level="form"
                  title="form title component"
                  description="description / level : form 으로 설정 (섹션 타이틀과 스타일 동일)"
                  :tooltip="{
                    title: '패널 타이틀 컴포넌트 도움말 툴팁',
                    icon: 'info',
                  }"
                  :tags="[
                    { text: 'success', color: 'green' },
                    { text: 'warning', color: 'red' },
                  ]"
                />
                <div class="form-collapse-group">
                  <a-collapse :bordered="false">
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
                          </a-flex>
                        </a-flex>
                      </template>
                      <div class="collapse-content-body">
                        <a-flex class="item-ant-form">
                          <a-form-item
                            :rules="[{ required: true }]"
                            class="is-include-label"
                          >
                            <template #label>
                              Label명
                              <a-tooltip>
                                <template #title>
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘</template
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
                              placeholder="{label}을(를) 입력해 주세요."
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
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘</template
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
                              placeholder="{label}을(를) 입력해 주세요."
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
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘</template
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
                              placeholder="{label}을(를) 입력해 주세요."
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
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘</template
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
                              placeholder="{label}을(를) 입력해 주세요."
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
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘 도움말 아이콘 도움말 아이콘
                                  도움말 아이콘</template
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
                              placeholder="{label}을(를) 입력해 주세요."
                              type="text"
                            />
                          </a-form-item>
                        </a-flex>
                      </div>
                    </a-collapse-panel>
                  </a-collapse>
                  <a-divider class="size-large" />
                  <a-collapse :bordered="false">
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
                          </a-flex>
                        </a-flex>
                      </template>
                      <div class="collapse-content-body">
                        <a-form-item
                          :rules="[{ required: true }]"
                          label="Label (Optional)"
                        >
                          <a-checkbox-group
                            v-model:value="formState.checkedValueHorizontal"
                            class="horizontal"
                          >
                            <a-checkbox value="a">default check 1</a-checkbox>
                            <a-checkbox value="b">default check 2</a-checkbox>
                            <a-checkbox value="c" disabled
                              >default check 3</a-checkbox
                            >
                          </a-checkbox-group>
                        </a-form-item>
                      </div>
                    </a-collapse-panel>
                  </a-collapse>
                  <a-divider class="size-large" />
                  <a-collapse :bordered="false">
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
                          </a-flex>
                        </a-flex>
                      </template>
                      <div class="collapse-content-body">내용</div>
                    </a-collapse-panel>
                  </a-collapse>
                  <a-divider class="size-large" />
                </div>

                <!-- case Collapse bordered-->
                <div class="form-item-group">
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-collapse :bordered="true">
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
                                <a-typography-text class="item-title">
                                  collapse header title
                                </a-typography-text>
                                <a-divider type="vertical" />
                                <a-typography-text class="item-desc">
                                  description (helper Text)
                                </a-typography-text>
                              </a-flex>
                            </a-flex>
                          </template>
                          <div class="collapse-content-body">
                            <Table
                              :columns="contentGroupColumns"
                              :data="contentGroupData"
                              :show-filter="false"
                              :show-pagination="true"
                              :row-selection="tableRowSelectionRadio"
                              v-model:selectedKeys="selectedRowKeys"
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
                                        <p class="tag-wrap-text">
                                          {{ record?.status }}
                                        </p>
                                      </a-tag>
                                    </div>
                                  </div>
                                </template>
                                <template
                                  v-else-if="column.dataIndex === 'tag'"
                                >
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
                            <div class="section">
                              <a-flex vertical :gap="16">
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                              </a-flex>
                            </div>
                          </div>
                        </a-collapse-panel>
                      </a-collapse>
                    </a-flex>
                  </a-flex>
                </div>
                <div class="form-item-group">
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <a-collapse :bordered="true">
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
                                <a-typography-text class="item-title">
                                  collapse header title
                                </a-typography-text>
                                <a-divider type="vertical" />
                                <a-typography-text class="item-desc">
                                  description (helper Text)
                                </a-typography-text>
                              </a-flex>
                            </a-flex>
                          </template>
                          <div class="collapse-content-body">
                            <Table
                              :columns="contentGroupColumns"
                              :data="contentGroupData"
                              :show-filter="false"
                              :show-pagination="true"
                              :row-selection="tableRowSelectionRadio"
                              v-model:selectedKeys="selectedRowKeys"
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
                                        <p class="tag-wrap-text">
                                          {{ record?.status }}
                                        </p>
                                      </a-tag>
                                    </div>
                                  </div>
                                </template>
                                <template
                                  v-else-if="column.dataIndex === 'tag'"
                                >
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
                            <div class="section">
                              <a-flex vertical :gap="16">
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                                <a-form-item
                                  :rules="[{ required: true }]"
                                  class="is-include-label"
                                >
                                  <template #label>
                                    이름
                                    <a-tooltip>
                                      <template #title>도움말 아이콘</template>
                                      <span class="icon">
                                        <Icon size="xs" color="default">
                                          <template #name>info</template>
                                        </Icon>
                                      </span>
                                    </a-tooltip></template
                                  >
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                              </a-flex>
                            </div>
                          </div>
                        </a-collapse-panel>
                      </a-collapse>
                    </a-flex>
                  </a-flex>
                </div>

                <BasicTitle
                  level="form"
                  title="form title component"
                  description="description / level : form 으로 설정 (섹션 타이틀과 스타일 동일)"
                  :tooltip="{
                    title: '패널 타이틀 컴포넌트 도움말 툴팁',
                    icon: 'info',
                  }"
                  :tags="[
                    { text: 'success', color: 'green' },
                    { text: 'warning', color: 'red' },
                  ]"
                />
                <div class="form-item-group">
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                        :tooltip="{
                          title: '라벨 타이틀 컴포넌트 도움말 툴팁',
                          icon: 'info',
                        }"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <div class="add-table">
                        <Table :columns="addColumns" :data="addData" noPadding>
                          <template #empty>
                            <NoData text="검색 결과가 없습니다.">
                              <template #icon>
                                <Icon size="md" color="brand" fill>
                                  <template #name>info</template>
                                </Icon>
                              </template>
                            </NoData>
                          </template>
                          <template #headerCell="{ column }">
                            <template v-if="column?.dataIndex === 'setting'">
                            </template>
                          </template>
                          <template #bodyCell="{ column, text, record }">
                            <template v-if="column.dataIndex === 'label'">
                              <a-flex gap="16" class="ant-table-inner">
                                <a-form-item>
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                              </a-flex>
                            </template>
                            <template v-if="column.dataIndex === 'label2'">
                              <a-flex gap="16" class="ant-table-inner">
                                <a-form-item>
                                  <a-input
                                    v-model:value="formState.name"
                                    placeholder="{label}을(를) 입력해 주세요."
                                    type="text"
                                  />
                                </a-form-item>
                              </a-flex>
                            </template>
                            <template
                              v-else-if="column.dataIndex === 'setting'"
                            >
                              <a-button
                                class="ghost btn-setting"
                                @click="handleDelete(record.key)"
                                :disabled="addData.length === 1"
                              >
                                <Icon size="md" color="default">
                                  <template #name>delete</template>
                                </Icon>
                              </a-button>
                            </template>
                            <template v-else>
                              {{ text }}
                            </template>
                          </template>
                        </Table>
                        <a-flex class="add-table-btns">
                          <div class="add-table-btn left">
                            <Icon size="xs" color="brand" fill>
                              <template #name>add</template>
                            </Icon>
                            <a-button class="link accent" @click="handleAdd"
                              >Add Row</a-button
                            >
                          </div>
                        </a-flex>
                      </div>
                    </a-flex>
                  </a-flex>
                </div>

                <!-- <BasicTitle
                  level="form"
                  title="form title component"
                  description="description / level : form 으로 설정 (섹션 타이틀과 스타일 동일)"
                  :tooltip="{
                    title: '패널 타이틀 컴포넌트 도움말 툴팁',
                    icon: 'info',
                  }"
                  :tags="[
                    { text: 'success', color: 'green' },
                    { text: 'warning', color: 'red' },
                  ]"
                />
                <div class="form-item-group">
                  <a-flex class="form-item required">
                    <a-flex class="item-label">
                      <BasicTitle
                        level="label"
                        title="label title component"
                        description="description"
                        :tooltip="{
                          title: '라벨 타이틀 컴포넌트 도움말 툴팁',
                          icon: 'info',
                        }"
                      />
                    </a-flex>
                    <a-flex class="item-ant-form">
                      <article class="listbox-wrap" style="width: 800px">
                        <Filter filterIcon />
                        <div class="listbox-group">
                          <div class="listbox-list">
                            <a-collapse
                              v-model:activeKey="activeKey1"
                              :collapsible="isCollapseMode ? '' : 'disabled'"
                              :bordered="false"
                            >
                              <template
                                #expandIcon="{ isActive }"
                                v-if="isCollapseMode"
                              >
                                <span :class="{ rotate: isActive }">
                                  <Icon size="md" color="default">
                                    <template #name
                                      >keyboard_arrow_right</template
                                    >
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
                                    <a-checkbox-group
                                      v-model:value="listState.checkedList"
                                    >
                                      <a-checkbox
                                        v-for="option in plainOptions"
                                        :key="option.value"
                                        :value="option.value"
                                      >
                                        <div class="ellipsis-box">
                                          <span class="label">{{
                                            option.label
                                          }}</span>
                                          <span class="description">{{
                                            option.description
                                          }}</span>
                                        </div>
                                        <a-tag
                                          v-if="option.state"
                                          :class="[
                                            [
                                              'small',
                                              tagStateConverter(option.state),
                                            ],
                                          ]"
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
                          <div class="listbox-list">
                            <a-collapse
                              v-model:activeKey="activeKey2"
                              :collapsible="isCollapseMode ? '' : 'disabled'"
                              :bordered="false"
                            >
                              <template
                                #expandIcon="{ isActive }"
                                v-if="isCollapseMode"
                              >
                                <span :class="{ rotate: isActive }">
                                  <Icon size="md" color="default">
                                    <template #name
                                      >keyboard_arrow_right</template
                                    >
                                  </Icon>
                                </span>
                              </template>
                              <a-collapse-panel key="a1" tabIndex="0">
                                <template #header>
                                  <Icon color="default" v-if="!isCollapseMode">
                                    <template #name>counter_2</template>
                                  </Icon>
                                  Category A <span class="number">총 99</span>
                                </template>
                                <div
                                  class="listbox-list-body"
                                  v-if="selectedList.length"
                                >
                                  <div class="title-box">
                                    <span class="spacing-indent"
                                      >그룹명 (optional)</span
                                    >
                                  </div>
                                  <div class="item-box">
                                    <span
                                      class="spacing-indent"
                                      v-for="(item, index) in selectedList"
                                      :key="index"
                                    >
                                      <div class="ellipsis-box">
                                        <span class="label">{{
                                          item.label
                                        }}</span>
                                        <span class="description">{{
                                          item.description
                                        }}</span>
                                      </div>
                                      <a-flex gap="6" align="center">
                                        <a-tag
                                          v-if="item.state"
                                          :class="[
                                            [
                                              'small',
                                              tagStateConverter(item.state),
                                            ],
                                          ]"
                                        >
                                          <p class="tag-wrap-text">
                                            {{ item.state.toUpperCase() }}
                                          </p>
                                        </a-tag>
                                        <a-button
                                          class="auto"
                                          @click="handleDelete(item.value)"
                                        >
                                          <Icon color="default">
                                            <template #name>close</template>
                                          </Icon>
                                        </a-button>
                                      </a-flex>
                                    </span>
                                  </div>
                                </div>
                                <div class="listbox-list-body" v-else>
                                  <NoData
                                    title="선택된 {카테고리/데이터명}이(가) 없습니다."
                                    text="{카테고리/데이터명}을(를) 먼저 선택해 주세요."
                                  >
                                    <template #icon>
                                      <Icon size="md" color="brand" fill>
                                        <template #name>info</template>
                                      </Icon>
                                    </template>
                                  </NoData>
                                </div>
                              </a-collapse-panel>
                            </a-collapse>
                          </div>
                        </div>
                      </article>
                    </a-flex>
                  </a-flex>
                </div> -->
              </a-form>
            </div>
            <div class="content-footer">
              <div class="footer-group">
                <a-flex class="group-items items-end">
                  <a-button class="ghost">취소</a-button>
                  <a-button class="secondary">이전 (2 Step 부터 노출)</a-button>
                  <a-button class="primary" @click="notificationOpen">
                    다음 or 생성
                  </a-button>
                </a-flex>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue';
import { Icon } from '@/components/icons';
import {
  TheSideStep,
  TheGuidePanel,
  BasicTitle,
  BasicEllipsisText,
} from '@/components/layouts';
import { NoData } from '@/components/no-data';
import { useRouter } from 'vue-router';
import { useNotification } from '@/hooks/modal/useNoti';
import { Filter, Table } from '@/components/table';
import { Alert } from '@/components/alert';

const collapsed = ref<boolean>(false);

// formState
const formState = reactive({
  name: '',
  selected: 'a',
  radioValue: 'a',
  textarea: '',
  switched: '',
  checkedValueHorizontal: ['a', 'b'],
  checkedValueDefault: ['a', 'b'],
});
const radioCardOptions = [
  {
    value: 'a',
    label:
      'Radio Group Option Title Radio Group Option Title Radio Group Option Title Radio Group Option Title',
    description:
      'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description ',
  },
  { value: 'b', label: 'Radio Group Option Title', description: 'Description' },
  { value: 'c', label: 'Radio Group Option Title', description: 'Description' },
  { value: 'd', label: 'Radio Group Option Title', description: 'Description' },
  { value: 'e', label: 'Radio Group Option Title', description: 'Description' },
];
const radioCardLabelOptions = [
  { value: 'a', label: 'Title A' },
  { value: 'b', label: 'Title B' },
  { value: 'c', label: 'Title c' },
  { value: 'd', label: 'Title d' },
  { value: 'e', label: 'Title e' },
  { value: 'f', label: 'Title f' },
];
const radioCardLabelTableOptions = [
  { value: 'a', label: 'Title A' },
  { value: 'b', label: 'Title B' },
  { value: 'c', label: 'Title c' },
];

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

// table
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
    tag: ['tag', 'tag'],
  },
  {
    key: '2',
    name: 'label',
    project: 'label',
    tag: ['tag'],
  },
  {
    key: '3',
    name: 'label',
    project: 'label',
    tag: ['tag'],
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
    tag: ['tag'],
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
]);

// tree
type Key = string | number;
const expandedKeys = ref<Key[]>(['0-0-0']);
const autoExpandParent = ref<boolean>(true);
const onExpand = (keys: string[]) => {
  expandedKeys.value = keys;
  autoExpandParent.value = false;
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
        title: 'tree node 1-2',
        key: '0-1',
        children: [{ title: 'label 2-1', key: '0-1-0' }],
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
          { title: 'label 2-1', key: '0-0-0', tag: 'tag' },
          { title: 'label 2-2', key: '0-0-1' },
        ],
      },
    ],
  },
  {
    title: 'tree node 3',
    key: '2',
    children: [
      {
        title: 'tree node 3-0',
        key: '0-0',
        children: [
          { title: 'label 3-1', key: '0-0-0', tag: 'tag' },
          { title: 'label 3-2', key: '0-0-1' },
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
// listbox
const activeKey1 = ref<string[]>(['a1']);
const activeKey2 = ref<string[]>(['b1']);
const isCollapseMode = ref(true);
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
});
const selectedList = computed(() => {
  return listState.checkedList
    .map((val) => plainOptions.find((option) => option.value === val))
    .filter((option): option is (typeof plainOptions)[number] => !!option);
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

// 테이블 상태 관리
const selectedRowKeys = ref<string[]>([]);
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

// add 테이블 데이터 및 기능
const addColumns = ref([
  {
    title: 'label',
    dataIndex: 'label',
    ellipsis: true,
  },
  {
    title: 'label2',
    dataIndex: 'label2',
    ellipsis: true,
  },
  {
    title: '작업',
    dataIndex: 'setting',
    width: 58,
    align: 'center',
    fixed: 'right',
  },
]);
const addData = ref([
  {
    key: '1',
    label: '',
    label2: '',
  },
  {
    key: '2',
    label: '',
    label2: '',
  },
]);
const count = computed(() => addData.value.length + 1);
const handleAdd = () => {
  const newData = {
    key: `${count.value}`,
    label: '',
    label2: '',
  };
  addData.value.push(newData);
};
const handleDelete = (key: string) => {
  const indexToRemove = addData.value.findIndex((item) => item.key === key);
  if (indexToRemove !== -1) {
    addData.value.splice(indexToRemove, 1);
  }
};

const formatText = (percent: number) => `${percent}%`;
</script>
