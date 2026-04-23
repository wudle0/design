<template>
  <TopTitle
    title="Dropdown"
    text="드롭다운은 하나 또는 다수의 선택 가능한 옵션 목록을 제공합니다. 
드롭다운을 통해 항목을 선택하거나 필터 조건을 지정하여, 콘텐츠를 정렬하고 특정 항목을 필터링할 수 있습니다."
  />
  <a-form autocomplete="off" layout="vertical">
    <a-flex gap="32" vertical>
      <a-form-item
        :rules="[{ required: false }]"
        label="전체 선택 가능 + 외 몇개"
      >
        <a-select
          v-model:value="formState.selected"
          placeholder="Placeholder"
          :options="[]"
          mode="multiple"
          :max-tag-count="maxTagCount"
          :max-tag-placeholder="customPlaceholder"
        >
          <template #dropdownRender="{ menuNode }">
            <!-- 전체 선택 -->
            <div
              class="multiple-content"
              @mousedown.stop.prevent="toggleSelectAll"
            >
              <a-checkbox :checked="isAllSelected" /> 전체
            </div>

            <a-divider />

            <!-- 개별 리스트 -->
            <div class="multiple-list">
              <div
                v-for="item in items"
                :key="item"
                class="multiple-content"
                @mousedown.stop.prevent="toggleItem(item)"
              >
                <a-checkbox
                  :checked="formState.selected.includes(item)"
                  :value="item"
                />
                <span> {{ item }}</span>
              </div>
            </div>
          </template>
        </a-select>
      </a-form-item>

      <a-form-item
        :rules="[{ required: false }]"
        label="multi select + input 추가 기능"
      >
        <a-select
          v-model:value="formState.selected"
          placeholder="Placeholder"
          :options="[]"
          mode="multiple"
        >
          <template #dropdownRender="{ menuNode }">
            <!-- 전체 선택 -->
            <div
              class="multiple-content"
              @mousedown.stop.prevent="toggleSelectAll"
            >
              <a-checkbox :checked="isAllSelected" /> 전체
            </div>

            <a-divider />

            <!-- 개별 리스트 -->
            <div class="multiple-list">
              <div
                v-for="item in items"
                :key="item"
                class="multiple-content"
                @mousedown.stop.prevent="toggleItem(item)"
              >
                <a-checkbox
                  :checked="formState.selected.includes(item)"
                  :value="item"
                />
                <span> {{ item }}</span>
              </div>
            </div>

            <a-divider />

            <!-- 추가 리스트 -->
            <a-flex class="multiple-footer">
              <a-flex vertical gap="4">
                <a-input
                  ref="inputRef"
                  v-model:value="name"
                  placeholder="add new item"
                  size="small"
                />

                <div class="caption-wrap error" v-if="inputError">
                  <Icon fill size="xs" color="error">
                    <template #name>error</template>
                  </Icon>
                  <p class="caption-wrap-text">Error Text</p>
                </div>
              </a-flex>
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

      <a-form-item :rules="[{ required: false }]">
        <template #label> Multi lines</template>

        <a-select
          v-model:value="formState.selectedDescription"
          placeholder="Placeholder"
          option-label-prop="value"
        >
          <a-select-option
            value="Select I temS elect ItemSelect ItemSelectItem Select Item Select ItemSe lect ItemSe lect"
          >
            <span>
              Select Item Select Item Select Item Select Item Select Item Select
              Item Select Item Select Item Select Item Select Item Select Item
              Select Item Select Item Select Item Select Item Select Item Select
              Item</span
            >

            <span class="description"
              >The shape of the component that allows up to a maximum of one
              line when the description overflows.</span
            >
          </a-select-option>
          <a-select-option value="Select Item 02">
            <span>Select Item 02</span>
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item :rules="[{ required: false }]">
        <template #label>버튼 일 때 드롭다운</template>

        <a-dropdown trigger="click">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> 1st menu item </a-menu-item>
              <a-menu-item key="2"> 2nd menu item </a-menu-item>
              <a-menu-item key="3"> 3rd item </a-menu-item>
            </a-menu>
          </template>
          <a-button class="secondary">
            <Icon size="md" color="default" fill>
              <template #name>more_horiz</template>
            </Icon>
          </a-button>
        </a-dropdown>
      </a-form-item>
      <a-form-item
        :rules="[{ required: false }]"
        label="multi select"
        class="is-include-label"
      >
        <a-select
          v-model:value="formState.selected"
          placeholder="Placeholder"
          :options="[]"
          mode="multiple"
        >
          <template #dropdownRender="{ menuNode }">
            <!-- 전체 선택 -->
            <div
              class="multiple-content"
              @mousedown.stop.prevent="toggleSelectAll"
            >
              <a-checkbox :checked="isAllSelected" /> 전체
            </div>

            <a-divider />

            <!-- 개별 리스트 -->
            <div class="multiple-list">
              <div
                v-for="item in items"
                :key="item"
                class="multiple-content"
                @mousedown.stop.prevent="toggleItem(item)"
              >
                <a-checkbox
                  :checked="formState.selected.includes(item)"
                  :value="item"
                />
                <span> {{ item }}</span>
              </div>
            </div>
          </template>
        </a-select>
      </a-form-item>

      <a-form-item
        :rules="[{ required: false }]"
        label="multi select + input 추가 기능"
        class="is-include-label"
      >
        <a-select
          v-model:value="formState.selected"
          placeholder="Placeholder"
          :options="[]"
          mode="multiple"
        >
          <template #dropdownRender="{ menuNode }">
            <!-- 전체 선택 -->
            <div
              class="multiple-content"
              @mousedown.stop.prevent="toggleSelectAll"
            >
              <a-checkbox :checked="isAllSelected" /> 전체
            </div>

            <a-divider />

            <!-- 개별 리스트 -->
            <div class="multiple-list">
              <div
                v-for="item in items"
                :key="item"
                class="multiple-content"
                @mousedown.stop.prevent="toggleItem(item)"
              >
                <a-checkbox
                  :checked="formState.selected.includes(item)"
                  :value="item"
                />
                <span> {{ item }}</span>
              </div>
            </div>

            <a-divider />

            <!-- 추가 리스트 -->
            <a-flex class="multiple-footer">
              <a-flex vertical gap="4">
                <a-input
                  ref="inputRef"
                  v-model:value="name"
                  placeholder="add new item"
                  size="small"
                />

                <div class="caption-wrap error" v-if="inputError">
                  <Icon fill size="xs" color="error">
                    <template #name>error</template>
                  </Icon>
                  <p class="caption-wrap-text">Error Text</p>
                </div>
              </a-flex>
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

      <a-form-item :rules="[{ required: false }]" class="is-include-label">
        <template #label>텍스트로 검색할 수 있는 Select</template>
        <a-select
          v-model:value="selectValue"
          show-search
          placeholder="Input Search text"
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

      <a-form-item
        :rules="[{ required: false }]"
        class="is-include-label"
        :validate-status="touched && hasError ? 'error' : ''"
      >
        <template #help>
          <p class="helper">태그는 최대 5개까지 설정 가능합니다.</p>
        </template>
        <template #label>태그 설정.. 솔루션만 해당</template>
        <a-select
          v-model:value="formState.selectedTagValues"
          show-search
          placeholder="태그를 설정해 주세요."
          :default-active-first-option="false"
          :show-arrow="false"
          :filter-option="false"
          :options="tagFilteredOptions"
          mode="multiple"
          :searchValue="formState.tagInputValue"
          @search="handleTagSearch"
          @change="handleTagChange"
          @dropdownVisibleChange="handleTagDropdown"
          @input="handleTagInput"
          class="md"
        >
          <template #dropdownRender="{ menuNode }">
            <!-- 검색 결과 또는 전체 옵션 -->
            <div class="multiple-list">
              <div
                v-for="item in tagFilteredOptions"
                :key="item.value"
                class="multiple-content"
                @mousedown.stop.prevent="toggleTagItem(item.value)"
              >
                <a-checkbox
                  :checked="formState.selectedTagValues.includes(item.value)"
                  :value="item.value"
                  :disabled="
                    formState.selectedTagValues.length >= 5 &&
                    !formState.selectedTagValues.includes(item.value)
                  "
                />
                <span>{{ item.label }}</span>
              </div>
            </div>

            <!-- 검색 결과가 없거나 새 항목 추가 영역 -->
            <div
              v-if="tagFilteredOptions.length === 0 || formState.tagInputValue"
            >
              <p
                class="typography-label-3 ant-typography-disabled"
                v-if="tagOptions.length === 0"
              >
                설정된 태그가 없습니다.
              </p>
              <NoData
                v-else-if="tagFilteredOptions.length === 0"
                title="일치하는 태그가 없습니다."
                text="다시 검색하거나 새 태그를 추가해 보세요."
              />
              <a-divider />
              <a-flex class="multiple-footer">
                <a-flex vertical gap="4">
                  <a-input
                    ref="tagInputRef"
                    v-model:value="formState.tagInputValue"
                    placeholder="태그를 설정해 주세요."
                    size="small"
                    :disabled="isTagAddDisabled"
                  />

                  <div
                    v-if="formState.tagInputError || isTagAddDisabled"
                    class="caption-wrap error"
                  >
                    <a-flex
                      v-for="(line, idx) in (isTagAddDisabled
                        ? '태그는 최대 5개까지 설정 가능합니다.'
                        : formState.tagInputError
                      ).split('\n')"
                      :key="idx"
                    >
                      <Icon fill size="xs" color="error">
                        <template #name>error</template>
                      </Icon>
                      <p class="caption-wrap-text">{{ line }}</p>
                    </a-flex>
                  </div>
                </a-flex>
                <a-button
                  class="ghost small"
                  @click="addTagItem"
                  :disabled="isTagAddDisabled"
                >
                  <template #icon>
                    <Icon size="md" color="default" fill>
                      <template #name>add</template>
                    </Icon>
                  </template>
                  Add
                </a-button>
              </a-flex>
            </div>
          </template>
        </a-select>
      </a-form-item>
    </a-flex>
  </a-form>
</template>
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { NoData } from '@/components/no-data';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const formState = reactive({
  selected: [] as string[],
  selectedDescription: [],
  selectedTagValues: [] as string[], // multi select
  tagInputValue: '', // input
  tagInputError: '', // error
});

const maxTagCount = ref(2);

let index = 0;
const items = ref([
  'option01 option01 option01 option01 option01 option01 option01 option01 option01 option01 option01',
  'option02',
  'option03',
  'option04',
]);
const value = ref();
const inputRef = ref();
const name = ref();
const inputError = ref('');

const addItem = (e: Event) => {
  e.preventDefault();
  if (!name.value) {
    inputError.value = '값을 입력하세요';
    inputRef.value?.focus();
    return;
  }
  // 정상 처리
  items.value.push(name.value);
  name.value = '';
  inputError.value = '';
  setTimeout(() => {
    inputRef.value?.focus();
  }, 0);
};

const toggleItem = (item: string) => {
  const i = formState.selected.indexOf(item);
  if (i > -1) {
    formState.selected.splice(i, 1);
  } else {
    formState.selected.push(item);
  }
};

const isAllSelected = computed(
  () =>
    items.value.length > 0 &&
    items.value.every((item) => formState.selected.includes(item))
);

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    formState.selected = [];
  } else {
    formState.selected = [...items.value];
  }
};

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

// 태그 설정(검색+추가)
const tagOptions = ref([
  // { value: '가나다', label: '가나다' },
  // { value: '라마바', label: '라마바' },
  // { value: '사아자', label: '사아자' },
  // { value: '차차차차', label: '차차차차' },
]);
const tagFilteredOptions = ref([...tagOptions.value]);
const tagInputRef = ref();

// 검색
const handleTagSearch = (input: string) => {
  tagFilteredOptions.value = tagOptions.value.filter((item) =>
    item.label.toLowerCase().includes(input.toLowerCase())
  );
  if (tagFilteredOptions.value.length === 0 && !isTagAddDisabled.value) {
    formState.tagInputValue = input;
  }
};

// 체크박스 토글
const toggleTagItem = (value: string) => {
  const i = formState.selectedTagValues.indexOf(value);

  if (i > -1) {
    // 이미 선택되어 있으면 제거
    formState.selectedTagValues.splice(i, 1);
  } else {
    // 선택 안된 항목인데 이미 5개 선택했으면 막기
    if (
      formState.selectedTagValues.length >= 5 &&
      !formState.selectedTagValues.includes(value)
    ) {
      formState.tagInputError = '태그는 최대 5개까지 선택할 수 있습니다.';
      return;
    }

    formState.selectedTagValues.push(value);
  }

  // 상태 초기화
  formState.tagInputValue = '';
  formState.tagInputError = '';
};

const touched = ref(false);
const isTagAddDisabled = computed(() => tagOptions.value.length >= 5);
// 새 항목 추가
const addTagItem = (e: Event) => {
  e.preventDefault();
  touched.value = true;

  if (isTagAddDisabled.value) {
    formState.tagInputError = '태그를 추가할 수 없습니다.';
    return;
  }

  // 규칙: 영문, 숫자, 특수문자(-, .), 20자 이하
  const valid = /^[A-Za-z0-9가-힣\\-\\.]{1,20}$/.test(formState.tagInputValue);

  if (!formState.tagInputValue.trim() || !valid) {
    formState.tagInputError =
      '영문자, 숫자, 특수문자(-, .)만 입력 가능합니다.\n최대 20자까지 입력 가능합니다';
    tagInputRef.value?.focus();
    return;
  }

  // 중복 체크
  const exists = tagOptions.value.some(
    (item) => item.label.toLowerCase() === formState.tagInputValue.toLowerCase()
  );
  if (exists) {
    formState.tagInputError = '이미 존재하는 항목입니다';
    tagInputRef.value?.focus();
    return;
  }
  // 새 항목 추가
  const newItem = {
    value: formState.tagInputValue.toLowerCase().replace(/\\s+/g, '_'),
    label: formState.tagInputValue,
  };
  tagOptions.value.push(newItem);
  formState.selectedTagValues.push(newItem.value);

  formState.tagInputValue = '';

  tagFilteredOptions.value = [...tagOptions.value];
  formState.tagInputError = '';
  touched.value = false;

  setTimeout(() => {
    tagInputRef.value?.focus();
    formState.tagInputValue = '';
  }, 0);
};

// 드롭다운 열릴 때/닫힐 때 전체 옵션, 검색어 초기화
const handleTagDropdown = (open: boolean) => {
  if (open) {
    tagFilteredOptions.value = [...tagOptions.value];
    formState.tagInputValue = '';
  } else {
    formState.tagInputValue = '';
  }
};

// 셀렉트 값이 바뀔 때(외부에서 조작 등) 검색어 초기화
const handleTagChange = (values: string[]) => {
  if (values.length > 5) {
    values = values.slice(0, 5);
  }
  formState.selectedTagValues = values;
  formState.tagInputValue = '';
};

// input 이벤트에서 실제 옵션에 있는 값만 남기기(검색어 태그화 방지)
const handleTagInput = (val: string[] | string) => {
  if (Array.isArray(val)) {
    const validValues = tagOptions.value.map((opt) => opt.value);
    formState.selectedTagValues = val.filter((v) => validValues.includes(v));
  }
};

const customPlaceholder = (omittedValues: any[]) => {
  return `외 ${omittedValues.length}`;
};

const hasError = computed(() => {
  const value = formState.tagInputValue;
  const valid = /^[A-Za-z0-9가-힣\-\.]{1,20}$/.test(value);
  return !value.trim() || !valid;
});
</script>
