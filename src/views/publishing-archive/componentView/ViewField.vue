<template>
  <TopTitle
    title=" Input field (text, number, password, textarea)"
    text="필드는 입력과 선택으로 동작이 구분됩니다.

입력 필드는 사용자가 자유 형식으로 텍스트 데이터를 입력할 수 있습니다. 
선택 필드는 값 목록에서 하나 이상의 옵션을 선택할 수 있는 구성 요소로, 드롭다운과 호환됩니다."
  />
  <a-form
    :model="formState"
    autocomplete="off"
    layout="vertical"
    style="gap: 32px"
  >
    <!-- Input field -->
    <div class="form-item-group-title">
      <a-typography-title :level="3">
        Default / IsIncludedLabel
      </a-typography-title>
      <a-typography-text class="ant-typography-secondary">
        필드 라벨은 기본(Default)과 포함형(IsIncludedLabel) 두 가지 유형으로
        나뉩니다. <br />포함형 라벨은 좁은 공간의 필터 영역이나 상위 라벨 내
        다수의 인풋 정의가 필요한 경우에 사용됩니다.<br />필드는 수직 또는
        수평으로 조합 구성할 수 있으며, 기본적으로 캡션이 포함될 수 있으나
        선택적으로 사용 가능합니다.
      </a-typography-text>
    </div>
    <a-form-item :rules="[{ required: true }]" label="기본 Input">
      <a-input
        v-model:value="formState.name"
        placeholder="{Input}을 입력해 주세요."
        type="text"
      >
      </a-input>
    </a-form-item>
    <a-form-item :rules="[{ required: false }]" label="input read only">
      <a-input
        v-model:value="formState.nameRead"
        placeholder="{input}를 입력해 주세요."
        type="text"
        readonly
      >
      </a-input>
    </a-form-item>

    <a-form-item :rules="[{ required: true }]">
      <template #label>
        unit
        <a-tooltip>
          <template #title>
            도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
            아이콘 도움말 아이콘 도움말 아이콘
          </template>
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
      >
        <template #suffix>
          <span class="suffix-text">Unit</span>
        </template>
      </a-input>
    </a-form-item>

    <a-form-item :rules="[{ required: true }]">
      <a-input
        v-model:value="formState.name"
        placeholder="{label}을(를) 입력해 주세요."
        type="text"
        size="large"
      />
    </a-form-item>
    <a-form-item label="input unit" :rules="[{ required: true }]">
      <a-input-group compact>
        <div>http://</div>

        <a-input v-model:value="formState.name" />

        <div>com</div>
      </a-input-group>
    </a-form-item>

    <a-form-item label="select unit" :rules="[{ required: true }]">
      <a-input-group compact>
        <a-select v-model:value="formState.unitLeft">
          <a-select-option value="http://">http://</a-select-option>
          <a-select-option value="https://">https://</a-select-option>
        </a-select>
        <a-input v-model:value="formState.name" />

        <a-select v-model:value="formState.unitRight">
          <a-select-option value=".com">.com</a-select-option>
          <a-select-option value=".co.kr">.co.kr</a-select-option>
        </a-select>
      </a-input-group>
    </a-form-item>

    <a-form-item label="select unit (no left)" :rules="[{ required: true }]">
      <a-input-group compact class="select-group-compact">
        <a-input v-model:value="formState.name" />

        <a-select v-model:value="formState.unitRight">
          <a-select-option value=".com">GiB</a-select-option>
          <a-select-option value=".co.kr">MiB</a-select-option>
        </a-select>
      </a-input-group>
    </a-form-item>

    <a-form-item :rules="[{ required: false }]">
      <template #label> success</template>
      <a-input
        v-model:value="formState.name"
        placeholder="{label}을(를) 입력해 주세요."
        type="text"
        status="success"
      >
      </a-input>
    </a-form-item>
    <a-form-item :rules="[{ required: false }]">
      <template #label> Disabled</template>
      <a-input
        v-model:value="formState.name"
        placeholder="{label}을(를) 입력해 주세요."
        type="text"
        disabled
      >
      </a-input>
    </a-form-item>

    <a-form-item
      :rules="[{ required: false }]"
      extra="number 필드는 숫자만 입력 가능합니다."
    >
      <template #label> Number </template>
      <a-input-number
        v-model:value="formState.number"
        placeholder="{label}을(를) 입력해 주세요."
        :class="{ 'hide-controls': true }"
        @keypress="onKeyPressNumberOnly"
      >
      </a-input-number>
    </a-form-item>
    <a-form-item :rules="[{ required: false }]">
      <template #label> Number Largeeeeee</template>
      <a-input-number
        v-model:value="formState.number"
        placeholder="{label}을(를) 입력해 주세요."
        :class="{ 'hide-controls': true }"
        size="large"
        @keypress="onKeyPressNumberOnly"
      >
      </a-input-number>
    </a-form-item>

    <a-form-item :validate-status="hasError ? 'error' : ''">
      <template #label> Number Error </template>

      <a-input-number
        v-model:value="formState.numberError"
        placeholder="{label}을(를) 입력해 주세요."
        :class="{ 'hide-controls': true }"
        @keypress="onKeyPressNumberOnly"
      />

      <template #help v-if="hasError">
        <a-flex gap="4">
          <Icon size="xs" color="error" fill>
            <template #name>info</template>
          </Icon>
          Error Text
        </a-flex>
        <p class="helper">Helper Text</p>
      </template>
    </a-form-item>

    <a-form-item :rules="[{ required: false }]">
      <template #label> Number Disabled </template>
      <a-input-number
        v-model:value="formState.number"
        placeholder="{label}을(를) 입력해 주세요."
        :class="{ 'hide-controls': true }"
        @keypress="onKeyPressNumberOnly"
        disabled
      >
      </a-input-number>
    </a-form-item>

    <a-form-item :rules="[{ required: false }]">
      <template #label> Number Icon</template>
      <a-input-number
        v-model:value="formState.number"
        placeholder="{label}을(를) 입력해 주세요."
        @keypress="onKeyPressNumberOnly"
      >
      </a-input-number>
    </a-form-item>

    <a-form-item :rules="[{ required: false }]">
      <template #label> Password </template>
      <a-input-password
        v-model:value="formState.password"
        placeholder="{label}을(를) 입력해 주세요."
        :visibility-toggle="true"
      >
        <template #iconRender="visible">
          <Icon size="xs" color="default">
            <template #name>{{
              visible ? 'visibility' : 'visibility_off'
            }}</template>
          </Icon>
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item :rules="[{ required: false }]">
      <template #label> Password </template>
      <a-input-group>
        <a-input-password
          v-model:value="formState.password"
          placeholder="{label}을(를) 입력해 주세요."
          :visibility-toggle="true"
        >
          <template #iconRender="visible">
            <Icon size="xs" color="default">
              <template #name>{{
                visible ? 'visibility' : 'visibility_off'
              }}</template>
            </Icon>
          </template>
        </a-input-password>

        <a-button class="secondary">버튼</a-button>
      </a-input-group>
    </a-form-item>

    <a-form-item label="textarea">
      <a-textarea
        v-model:value="formState.textarea"
        placeholder="{label}을(를) 입력해 주세요."
        :rows="2"
        show-count
        :maxlength="100"
      />
    </a-form-item>
    <a-form-item label="textarea error" validate-status="error">
      <a-textarea
        v-model:value="formState.textarea"
        placeholder="{label}을(를) 입력해 주세요."
        :rows="2"
        show-count
        :maxlength="10"
      />
    </a-form-item>
    <a-form-item
      label="textarea 사이즈 medium"
      class="is-include-label"
      :rules="[{ required: true }]"
    >
      <a-textarea
        v-model:value="formState.textarea"
        placeholder="{label}을(를) 입력해 주세요."
        :rows="2"
        show-count
        :maxlength="10"
        class="md"
      />
    </a-form-item>
    <a-form-item :rules="[{ required: false }]">
      <a-textarea
        v-model:value="formState.textarea"
        placeholder="{label}을(를) 입력해 주세요."
        :rows="2"
        show-count
        :maxlength="10"
        class="lg"
      />
    </a-form-item>

    <!-- form-item을 감싸고 있는 라벨 -->
    <a-flex vertical>
      <a-flex class="field-label-wrap">
        <a-typography-text class="typography-label-3">
          Field Label
        </a-typography-text>
        <a-typography-text class="typography-label-5 ant-typography-secondary">
          a-form-item을 감싸는 상위의 라벨 개념
        </a-typography-text></a-flex
      >
      <a-form-item :rules="[{ required: true }]" class="is-include-label">
        <template #label>
          이름
          <a-tooltip>
            <template #title>
              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
              아이콘 도움말 아이콘 도움말 아이콘
            </template>
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

      <a-form-item :rules="[{ required: true }]" class="is-include-label">
        <template #label>
          이름
          <a-tooltip>
            <template #title>
              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
              아이콘 도움말 아이콘 도움말 아이콘
            </template>
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

      <a-form-item :rules="[{ required: true }]" class="is-include-label">
        <template #label>
          이름
          <a-tooltip>
            <template #title>
              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
              아이콘 도움말 아이콘 도움말 아이콘
            </template>
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

    <a-form-item :rules="[{ required: true }]" class="is-include-label">
      <template #label
        >사이즈 라지
        <a-tooltip>
          <template #title>
            도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
            아이콘 도움말 아이콘 도움말 아이콘
          </template>
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
        size="large"
      />
    </a-form-item>

    <a-form-item :rules="[{ required: false }]" class="is-include-label">
      <template #label> Is Included Label Number </template>
      <a-input-number
        v-model:value="formState.number"
        placeholder="{label}을(를) 입력해 주세요."
        :class="{ 'hide-controls': true }"
        @keypress="onKeyPressNumberOnly"
      >
      </a-input-number>
    </a-form-item>
    <a-form-item :rules="[{ required: false }]" class="is-include-label">
      <template #label> Is Included Label Number </template>
      <a-input-number
        v-model:value="formState.number"
        placeholder="{label}을(를) 입력해 주세요."
        @keypress="onKeyPressNumberOnly"
      >
      </a-input-number>
    </a-form-item>

    <a-form-item :rules="[{ required: false }]" class="is-include-label">
      <template #label> Password </template>
      <a-input-password
        v-model:value="formState.password"
        placeholder="{label}을(를) 입력해 주세요."
        :visibility-toggle="true"
      >
        <template #iconRender="visible">
          <Icon size="xs" color="default">
            <template #name>{{
              visible ? 'visibility' : 'visibility_off'
            }}</template>
          </Icon>
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item label="textarea" class="is-include-label">
      <a-textarea
        v-model:value="formState.textarea"
        placeholder="{label}을(를) 입력해 주세요."
        :rows="2"
        show-count
        :maxlength="100"
      />
    </a-form-item>

    <div class="form-item-group-title">
      <a-typography-title :level="3">
        Select Field, Dropdown
      </a-typography-title>
      <a-typography-text class="ant-typography-secondary">
        Single Collapsed와 Multiple Option은 다중 선택이 가능한 Select Field에서
        선택된 항목의 표시 방식에 대한 차이입니다. <br />
        Single Collapsed는 첫 번째 옵션만 노출하고 나머지는 축약(외 n) 형태로
        처리하며, Multiple Option은 모든 선택 항목을 개별 태그로 펼쳐
        보여줍니다. <br />
        사용 영역의 너비나 정보 구성에 따라 구분해 사용합니다.<br />
        다중 선택이 가능하며 체크박스가 표현되는 멀티플 옵션은 Dropdown 메뉴에서
        보실 수 있습니다.
      </a-typography-text>
    </div>

    <!-- Select field -->
    <a-flex gap="20" vertical>
      <a-form-item :rules="[{ required: true }]">
        <template #label> 기본 single Select </template>

        <a-select
          v-model:value="formState.selected"
          placeholder="{label}을(를) 선택해 주세요."
        >
          <a-select-option value="a"><span>Select 01</span></a-select-option>
          <a-select-option value="b"><span>Select 02</span></a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item :rules="[{ required: false }]">
        <template #label>텍스트로 검색할 수 있는 Select</template>
        <a-select
          v-model:value="selectValue"
          show-search
          placeholder="{label}을(를) 선택해 주세요."
          :default-active-first-option="false"
          :show-arrow="true"
          :filter-option="false"
          :options="filteredOptions"
          @search="handleSearch"
        >
          <template #notFoundContent>
            <NoData />
          </template>
        </a-select>
      </a-form-item>

      <a-form-item :rules="[{ required: false }]">
        <template #label>combobox</template>
        <a-select
          v-model:value="value"
          placeholder="{label}을(를) 선택해 주세요."
          :options="items.map((item: any) => ({ value: item }))"
        >
          <template #dropdownRender="{ menuNode: menu }">
            <v-nodes :vnodes="menu" />
            <a-divider />
            <a-flex class="multiple-footer">
              <a-input
                ref="inputRef"
                v-model:value="name"
                placeholder="{label}을(를) 입력해 주세요."
                size="small"
              />
              <a-button class="ghost small" @click="addItem">
                <template #icon>
                  <Icon size="md" color="default" fill>
                    <template #name>add</template>
                  </Icon>
                </template>
                Add
              </a-button>
            </a-flex>
          </template>
        </a-select>
      </a-form-item>

      <a-form-item :rules="[{ required: false }]" validate-status="error">
        <template #help>
          <a-flex gap="4">
            <Icon size="xs" color="error" fill>
              <template #name>info</template>
            </Icon>
            Error Text</a-flex
          >
          <p class="helper">Helper Text</p>
        </template>
        <template #label> 유효성 검사 텍스트 위치 </template>

        <a-select
          v-model:value="formState.selected"
          placeholder="{label}을(를) 선택해 주세요."
        >
          <a-select-option value="a"><span>Select 01</span></a-select-option>
          <a-select-option value="b"><span>Select 02</span></a-select-option>
        </a-select>
      </a-form-item>

      <!-- multiple은 무조건 체크박스 있는것으로! ViewDropdown 참고-->
      <!-- <a-form-item :rules="[{ required: true }]">
        <template #label> select multiple large </template>
        <a-select
          v-model:value="formState.multiple"
          placeholder="{label}을(를) 선택해 주세요."
          mode="multiple"
          size="large"
        >
          <a-select-option value="a-01"
            >SelectSelectSelectSelect 01</a-select-option
          >
          <a-select-option value="a-02">Select 02</a-select-option>
          <a-select-option value="a-03">Select 03</a-select-option>
          <a-select-option value="a-04">Select 04</a-select-option>
          <a-select-option value="a-05">Select 05</a-select-option>
          <a-select-option value="a-06">Select 06</a-select-option>
          <a-select-option value="a-07">Select 07</a-select-option>
          <a-select-option value="a-08">Select 08</a-select-option>
          <a-select-option value="a-09">Select 09</a-select-option>
          <a-select-option value="a-10">Select 10</a-select-option>
          <a-select-option value="a-11">Select 11</a-select-option>
          <a-select-option value="a-12">Select 12</a-select-option>
          <a-select-option value="a-13">Select 13</a-select-option>
          <a-select-option value="a-14">Select 14</a-select-option>
          <a-select-option value="a-15">Select 15</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :rules="[{ required: true }]">
        <template #label> select multiple </template>
        <a-select
          v-model:value="formState.multiple"
          placeholder="{label}을(를) 선택해 주세요."
          mode="multiple"
        >
          <a-select-option value="a-01">Select 01</a-select-option>
          <a-select-option value="a-02">Select 02</a-select-option>
          <a-select-option value="a-03">Select 03</a-select-option>
          <a-select-option value="a-04">Select 04</a-select-option>
          <a-select-option value="a-05">Select 05</a-select-option>
          <a-select-option value="a-06">Select 06</a-select-option>
          <a-select-option value="a-07">Select 07</a-select-option>
          <a-select-option value="a-08">Select 08</a-select-option>
          <a-select-option value="a-09">Select 09</a-select-option>
          <a-select-option value="a-10">Select 10</a-select-option>
          <a-select-option value="a-11">Select 11</a-select-option>
          <a-select-option value="a-12">Select 12</a-select-option>
          <a-select-option value="a-13">Select 13</a-select-option>
          <a-select-option value="a-14">Select 14</a-select-option>
          <a-select-option value="a-15">Select 15</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :rules="[{ required: true }]">
        <template #label> select multiple max count</template>
        <a-select
          v-model:value="formState.multipleMaxTagCount"
          placeholder="{label}을(를) 선택해 주세요."
          mode="multiple"
          :max-tag-count="maxTagCount"
          placeholder="{label}을(를) 선택해 주세요."
        >
          <a-select-option value="a-01">Select 01</a-select-option>
          <a-select-option value="a-02">Select 02</a-select-option>
          <a-select-option value="a-03">Select 03</a-select-option>
          <a-select-option value="a-04">Select 04</a-select-option>
          <a-select-option value="a-05">Select 05</a-select-option>
          <a-select-option value="a-06">Select 06</a-select-option>
          <a-select-option value="a-07">Select 07</a-select-option>
          <a-select-option value="a-08">Select 08</a-select-option>
          <a-select-option value="a-09">Select 09</a-select-option>
          <a-select-option value="a-10">Select 10</a-select-option>
          <a-select-option value="a-11">Select 11</a-select-option>
          <a-select-option value="a-12">Select 12</a-select-option>
          <a-select-option value="a-13">Select 13</a-select-option>
          <a-select-option value="a-14">Select 14</a-select-option>
          <a-select-option value="a-15">Select 15</a-select-option>
        </a-select>
      </a-form-item> -->
      <a-form-item :rules="[{ required: true }]" class="is-include-label">
        <template #label>
          is include label Select

          <a-tooltip>
            <template #title>
              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
              아이콘 도움말 아이콘 도움말 아이콘
            </template>
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
          <a-select-option value="a"><span>Select 01</span></a-select-option>
          <a-select-option value="b"><span>Select 02</span></a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :rules="[{ required: true }]" class="is-include-label">
        <template #label>
          Large is include label Select

          <a-tooltip>
            <template #title>
              도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말 아이콘 도움말
              아이콘 도움말 아이콘 도움말 아이콘
            </template>
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
          size="large"
        >
          <a-select-option value="a"><span>Select 01</span></a-select-option>
          <a-select-option value="b"><span>Select 02</span></a-select-option>
        </a-select>
      </a-form-item>
    </a-flex>
  </a-form>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, defineComponent, inject } from 'vue';
import { Icon } from '@/components/icons';
import { NoData } from '@/components/no-data';
import { TopTitle } from '@/components/layouts';

const formState = reactive({
  name: '',
  nameRead: '읽기 전용 입력값',
  nameError: '',
  selected: null,
  multiple: [],
  multipleMaxTagCount: [],
  number: null,
  numberError: null,
  password: '',
  textarea: '',
  unitLeft: 'http://',
  unitRight: '.com',
});

const maxTagCount = ref(2);

const options = ref([
  { value: '가나다라마', label: '가나다라마' },
  { value: 'option', label: 'Option' },
  { value: 'text', label: 'Text' },
  { value: 'title', label: 'Title' },
  { value: 'filter', label: 'Filter' },
]);

const filteredOptions = ref([...options.value]);
const selectValue = ref<string>();

const handleSearch = (input: string) => {
  filteredOptions.value = options.value.filter((item) =>
    item.label.toLowerCase().includes(input.toLowerCase())
  );
};

const hasError = computed(() => {
  // 예: number가 null이거나 음수면 에러
  return formState.numberError === null || formState.numberError < 0;
});

const customPlaceholder = (omittedValues: any[]) => {
  return `외 ${omittedValues.length}`;
};

const VNodes = defineComponent({
  props: {
    vnodes: {
      type: Object,
      required: true,
    },
  },
  render() {
    return this.vnodes;
  },
});

let index = 0;
const items = ref(['option 1 ', 'option 2', 'option 3', 'option 4']);
const value = ref();
const inputRef = ref();
const name = ref();

const addItem = (e: any) => {
  e.preventDefault();
  console.log('addItem');
  items.value.push(name.value || `New item ${(index += 1)}`);
  name.value = '';
  setTimeout(() => {
    inputRef.value?.focus();
  }, 0);
};

const onKeyPressNumberOnly = inject('onKeyPressNumberOnly') as (
  e: KeyboardEvent
) => void;
</script>
