<template>
  <a-flex vertical gap="8">
    <TopTitle
      title="태그 목록"
      text="bullet은 태그 형태로만 사용됩니다. (별도 사용 금지)"
    />
    <div class="tag-wrap">
      <!-- 체크 가능한 태그 -->
      <a-checkable-tag
        v-for="(tag, index) in tagsData"
        :key="tag"
        v-model:checked="selectTags[index]"
        :class="[tag.varient, { disabled: tag.disabled }]"
      >
        <Icon v-if="tag.icon" size="md" color="default" fill>
          <template #name>{{ tag.icon }}</template>
        </Icon>
        <p class="tag-wrap-text">
          {{ tag.name }}
        </p>
      </a-checkable-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="blue large">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="blue large">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="blue medium">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="blue medium">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="blue small">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="blue small">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="green large">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="green large">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="green medium">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="green medium">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="green small">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="green small">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="orange large">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="orange large">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="orange medium">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="orange medium">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="orange small">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="orange small">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="red large">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="red large">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="red medium">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="red medium">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="red small">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="red small">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="down large">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="down large">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="down medium">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="down medium">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="down small">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="down small">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="gray large">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="gray large">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="gray medium">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="gray medium">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="gray small">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">태그</p>
      </a-tag>
      <a-tag class="gray small">
        <p class="tag-wrap-text">태그</p>
      </a-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="close large">
        <Icon size="md" color="default" fill>
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">삭제 태그</p>
        <Icon size="md" color="default" fill class="btn-close">
          <template #name>close</template>
        </Icon>
      </a-tag>
      <a-tag class="close medium">
        <p class="tag-wrap-text">삭제 태그</p>
        <Icon size="md" color="default" fill class="btn-close">
          <template #name>close</template>
        </Icon>
      </a-tag>
      <a-tag class="close small">
        <p class="tag-wrap-text">삭제 태그</p>
        <Icon size="md" color="default" fill class="btn-close">
          <template #name>close</template>
        </Icon>
      </a-tag>
      <a-tag class="close disabled">
        <Icon size="md" color="default" fill class="btn-close">
          <template #name>add</template>
        </Icon>
        <p class="tag-wrap-text">삭제 태그</p>
        <Icon size="md" color="default" fill class="btn-close">
          <template #name>close</template>
        </Icon>
      </a-tag>
    </div>
    <div class="tag-wrap">
      <a-tag class="bullet blue">
        <p class="tag-wrap-text">bullet blue</p>
      </a-tag>
      <a-tag class="bullet green">
        <p class="tag-wrap-text">bullet green</p>
      </a-tag>
      <a-tag class="bullet orange">
        <p class="tag-wrap-text">bullet orange</p>
      </a-tag>
      <a-tag class="bullet red">
        <p class="tag-wrap-text">bullet red</p>
      </a-tag>
      <a-tag class="bullet gray">
        <p class="tag-wrap-text">bullet gray</p>
      </a-tag>
    </div>

    <div class="tag-wrap">
      <a-tag class="traffic blue">
        <p class="tag-wrap-text">traffic chart용 blue</p>
      </a-tag>
      <a-tag class="traffic green">
        <p class="tag-wrap-text">traffic chart용 green</p>
      </a-tag>
      <a-tag class="traffic orange">
        <p class="tag-wrap-text">traffic chart용 orange</p>
      </a-tag>
      <a-tag class="traffic red">
        <p class="tag-wrap-text">traffic chart용 red</p>
      </a-tag>
      <a-tag class="traffic gray">
        <p class="tag-wrap-text">traffic chart용 gray</p>
      </a-tag>
    </div>

    <!-- dot 케이스 잠시 주석 -->
    <!-- <div class="tag-wrap">
      <a-tag class="dot blue">
        <p class="tag-wrap-text">bullet blue</p>
      </a-tag>
      <a-tag class="dot green">
        <p class="tag-wrap-text">bullet green</p>
      </a-tag>
      <a-tag class="dot orange">
        <p class="tag-wrap-text">bullet orange</p>
      </a-tag>
      <a-tag class="dot red">
        <p class="tag-wrap-text">bullet red</p>
      </a-tag>
      <a-tag class="dot gray">
        <p class="tag-wrap-text">bullet gray</p>
      </a-tag>
    </div> -->
  </a-flex>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

// 선택 가능한 태그
const tagsData = reactive([
  {
    name: 'icon',
    varient: 'large',
    icon: 'add',
  },
  {
    name: 'large',
    varient: 'large',
  },
  {
    name: 'medium',
    varient: 'medium',
  },
  {
    name: 'small',
    varient: 'small',
  },
  {
    name: 'disabled',
    varient: 'large',
    disabled: true,
  },
]);
const selectTags = reactive([false, false, false, false]);
</script>
