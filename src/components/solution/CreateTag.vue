<template>
  <a-form-item
    :rules="[{ required: false }]"
    :validate-status="touched && hasError ? 'error' : ''"
    :label="props.label"
    class="tag-form-item"
  >
    <template #help>
      <p class="helper">{{ props.helperText }}</p>
    </template>
    <a-select
      v-model:value="selectedTagValues"
      show-search
      :placeholder="props.placeholder"
      :default-active-first-option="false"
      :show-arrow="false"
      :filter-option="false"
      :options="tagFilteredOptions"
      mode="multiple"
      :searchValue="tagInputValue"
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
              :checked="selectedTagValues.includes(item.value)"
              :value="item.value"
              :disabled="
                selectedTagValues.length >= props.maxTags &&
                !selectedTagValues.includes(item.value)
              "
            />
            <span>{{ item.label }}</span>
          </div>
        </div>

        <!-- 검색 결과가 없거나 새 항목 추가 영역 -->
        <div v-if="tagFilteredOptions.length === 0 || tagInputValue">
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
                v-model:value="tagInputValue"
                placeholder="태그를 설정해 주세요."
                size="small"
                :disabled="isTagAddDisabled"
              />

              <div
                v-if="tagInputError || isTagAddDisabled"
                class="caption-wrap error"
              >
                <a-flex
                  v-for="(line, idx) in (isTagAddDisabled
                    ? '태그는 최대 5개까지 추가할 수 있습니다.'
                    : tagInputError
                  ).split('\n')"
                  :key="idx"
                >
                  <Icon fill size="xs" color="error">
                    <template #name>error</template>
                  </Icon>
                  <p class="caption-wrap-text">
                    {{ line }}
                  </p>
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
</template>

<script lang="ts" setup>
import { ref, computed, defineEmits, defineProps, watch } from 'vue';
import { Icon } from '@/components/icons';
import { NoData } from '@/components/no-data';

// Props
interface Props {
  modelValue?: string[];
  maxTags?: number;
  placeholder?: string;
  helperText?: string;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  maxTags: 5,
  placeholder: '태그를 설정해 주세요.',
  helperText: '태그는 최대 5개까지 설정 가능합니다.',
  label: '',
});

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: string[]];
}>();

// Local state
const selectedTagValues = ref<string[]>([...props.modelValue]);
const tagInputValue = ref('');
const tagInputError = ref('');
const touched = ref(false);
const tagOptions = ref<{ value: string; label: string }[]>([]);
const tagFilteredOptions = ref([...tagOptions.value]);
const tagInputRef = ref();

// Computed
const isTagAddDisabled = computed(
  () => selectedTagValues.value.length >= props.maxTags
);

const hasError = computed(() => {
  const value = tagInputValue.value;
  const valid = /^[A-Za-z0-9가-힣\-\.]{1,20}$/.test(value);
  return !value.trim() || !valid;
});

// Watch props changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(selectedTagValues.value)) {
      selectedTagValues.value = [...newValue];
    }
  },
  { deep: true }
);

// Watch local changes and emit
watch(
  selectedTagValues,
  (newValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(props.modelValue)) {
      emit('update:modelValue', newValue);
    }
  },
  { deep: true }
);

// Methods
const handleTagSearch = (input: string) => {
  tagFilteredOptions.value = tagOptions.value.filter((item) =>
    item.label.toLowerCase().includes(input.toLowerCase())
  );
  if (tagFilteredOptions.value.length === 0 && !isTagAddDisabled.value) {
    tagInputValue.value = input;
  }
};

const toggleTagItem = (value: string) => {
  const i = selectedTagValues.value.indexOf(value);

  if (i > -1) {
    // 이미 선택되어 있으면 제거
    selectedTagValues.value.splice(i, 1);
  } else {
    // 선택 안된 항목인데 이미 최대 개수 선택했으면 막기
    if (
      selectedTagValues.value.length >= props.maxTags &&
      !selectedTagValues.value.includes(value)
    ) {
      tagInputError.value = `태그는 최대 ${props.maxTags}개까지 선택할 수 있습니다.`;
      return;
    }

    selectedTagValues.value.push(value);
  }

  // 상태 초기화
  tagInputValue.value = '';
  tagInputError.value = '';
};

const addTagItem = (e: Event) => {
  e.preventDefault();
  touched.value = true;

  if (isTagAddDisabled.value) {
    tagInputError.value = '태그를 추가할 수 없습니다.';
    return;
  }

  // 규칙: 영문, 숫자, 특수문자(-, .), 20자 이하
  const valid = /^[A-Za-z0-9가-힣\-\.]{1,20}$/.test(tagInputValue.value);

  if (!tagInputValue.value.trim() || !valid) {
    tagInputError.value =
      '영문자, 숫자, 특수문자(-, .)만 입력 가능합니다.\n최대 20자까지 입력 가능합니다';
    tagInputRef.value?.focus();
    return;
  }

  // 중복 체크
  const exists = tagOptions.value.some(
    (item) => item.label.toLowerCase() === tagInputValue.value.toLowerCase()
  );
  if (exists) {
    tagInputError.value = '이미 존재하는 항목입니다';
    tagInputRef.value?.focus();
    return;
  }

  // 새 항목 추가 전 개수 한 번 더 체크
  if (selectedTagValues.value.length >= props.maxTags) {
    tagInputError.value = `태그는 최대 ${props.maxTags}개까지 선택할 수 있습니다.`;
    return;
  }

  // 새 항목 추가
  const newItem = {
    value: tagInputValue.value.toLowerCase().replace(/\s+/g, '_'),
    label: tagInputValue.value,
  };
  tagOptions.value.push(newItem);
  selectedTagValues.value.push(newItem.value);

  tagInputValue.value = '';
  tagFilteredOptions.value = [...tagOptions.value];
  tagInputError.value = '';
  touched.value = false;

  setTimeout(() => {
    tagInputRef.value?.focus();
    tagInputValue.value = '';
  }, 0);
};

const handleTagDropdown = (open: boolean) => {
  if (open) {
    tagFilteredOptions.value = [...tagOptions.value];
    tagInputValue.value = '';
  } else {
    tagInputValue.value = '';
  }
};

const handleTagChange = (values: string[]) => {
  if (values.length > props.maxTags) {
    values = values.slice(0, props.maxTags);
  }
  selectedTagValues.value = values;
  tagInputValue.value = '';
};

const handleTagInput = (val: string[] | string) => {
  if (Array.isArray(val)) {
    const validValues = tagOptions.value.map((opt) => opt.value);
    selectedTagValues.value = val.filter((v) => validValues.includes(v));
  }
};
</script>
