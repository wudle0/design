<template>
  <TopTitle
    title="슬라이더 (Slider)"
    text="슬라이더는 사용자가 특정값을 마우스 드래그로 선택할 수 있도록 하는 입력 컴포넌트입니다."
  />
  <a-flex gap="16" vertical>
    <a-typography-title :level="3"> 색상별 슬라이더 </a-typography-title>
    <a-flex gap="8" align="center" wrap="wrap">
      <div class="slider-group">
        <span class="min">{{ min }}</span>
        <a-slider
          v-model:value="formState.sliderValueDefault"
          :min="min"
          :max="max"
        />
        <span class="max">{{ max }}</span>
      </div>
      <div class="slider-group">
        <span class="min">{{ min }}</span>
        <a-slider
          v-model:value="formState.sliderValueError"
          :min="min"
          :max="max"
          class="error"
        />
        <span class="max">{{ max }}</span>
      </div>
      <div class="slider-group">
        <span class="min">{{ min }}</span>
        <a-slider
          v-model:value="formState.sliderValueWarning"
          :min="min"
          :max="max"
          class="warning"
        />
        <span class="max">{{ max }}</span>
      </div>
      <div class="slider-group">
        <span class="min">{{ min }}</span>
        <a-slider
          v-model:value="formState.sliderValueSuccess"
          :min="min"
          :max="max"
          class="success"
        />
        <span class="max">{{ max }}</span>
      </div>
      <div class="slider-group">
        <span class="min">{{ min }}</span>
        <a-slider
          v-model:value="formState.sliderValueSmall"
          :min="min"
          :max="max"
          class="small"
        />
        <span class="max">{{ max }}</span>
      </div>
    </a-flex>
    <a-divider />
    <a-typography-title :level="3"> With Input </a-typography-title>
    <a-flex gap="8" align="center" wrap="wrap">
      <div class="slider-wrap">
        <div class="slider-group">
          <span class="min">{{ min }}</span>
          <a-slider
            v-model:value="formState.sliderValueDefault"
            :min="min"
            :max="max"
          />
          <span class="max">{{ max }}</span>
        </div>
        <a-input
          v-model:value="formState.sliderValueDefault"
          placeholder="Placeholder text"
        />
      </div>
      <div class="slider-wrap">
        <div class="slider-group">
          <span class="min">{{ min }}</span>
          <a-slider
            v-model:value="formState.sliderValueDefault"
            :min="min"
            :max="max"
            class="small"
          />
          <span class="max">{{ max }}</span>
        </div>
        <a-input
          v-model:value="formState.sliderValueDefault"
          placeholder="Placeholder text"
        />
      </div>
    </a-flex>
    <a-divider />
    <a-typography-title :level="3"> With Form </a-typography-title>
    <a-form autocomplete="off" layout="vertical" class="pd-0">
      <a-form-item
        :rules="[{ required: true }]"
        :validate-status="error ? 'error' : ''"
      >
        <template #label> Label </template>
        <div class="slider-wrap">
          <div class="slider-group">
            <span class="min">{{ min }}</span>
            <a-slider
              v-model:value="formState.sliderValueDefault"
              :min="min"
              :max="max"
            />
            <span class="max">{{ max }}</span>
          </div>
          <a-input
            v-model:value="formState.sliderValueDefault"
            placeholder="Placeholder text"
          />
        </div>
        <template #help>
          <a-flex gap="4">
            <Icon size="xs" color="error" fill>
              <template #name>info</template>
            </Icon>
            Error Text
          </a-flex>
          <p class="helper">Helper Text</p>
        </template>
      </a-form-item>
      <a-form-item
        :rules="[{ required: true }]"
        :validate-status="error ? 'error' : ''"
      >
        <template #label> Label </template>
        <div class="slider-wrap">
          <div class="slider-group">
            <span class="min">{{ min }}</span>
            <a-slider
              v-model:value="formState.sliderValueDefault"
              :min="min"
              :max="max"
              class="small"
            />
            <span class="max">{{ max }}</span>
          </div>
          <a-input
            v-model:value="formState.sliderValueDefault"
            placeholder="Placeholder text"
          />
        </div>
        <template #help>
          <a-flex gap="4">
            <Icon size="xs" color="error" fill>
              <template #name>info</template>
            </Icon>
            Error Text
          </a-flex>
          <p class="helper">Helper Text</p>
        </template>
      </a-form-item>
    </a-form>
    <a-divider />
    <a-typography-title :level="3"> Range </a-typography-title>
    <a-flex gap="8" align="center" wrap="wrap">
      <div class="slider-wrap">
        <a-input
          v-model:value="formState.sliderValueRage[0]"
          placeholder="Placeholder text"
        />
        <div class="slider-group">
          <span class="min">{{ min }}</span>
          <a-slider
            v-model:value="formState.sliderValueRage"
            :min="min"
            :max="max"
            range
          />
          <span class="max">{{ max }}</span>
        </div>
        <a-input
          v-model:value="formState.sliderValueRage[1]"
          placeholder="Placeholder text"
        />
      </div>
      <div class="slider-wrap">
        <a-input
          v-model:value="formState.sliderValueRage[0]"
          placeholder="Placeholder text"
        />
        <div class="slider-group">
          <span class="min">{{ min }}</span>
          <a-slider
            v-model:value="formState.sliderValueRage"
            :min="min"
            :max="max"
            range
            class="small"
          />
          <span class="max">{{ max }}</span>
        </div>
        <a-input
          v-model:value="formState.sliderValueRage[1]"
          placeholder="Placeholder text"
        />
      </div>
    </a-flex>
  </a-flex>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const formState = reactive({
  sliderValueDefault: 50,
  sliderValueError: 50,
  sliderValueWarning: 50,
  sliderValueSuccess: 50,
  sliderValueSmall: 50,
  sliderValueRage: [20, 50],
});

const min = ref(0);
const max = ref(100);

const error = ref(true);
</script>
