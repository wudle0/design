<template>
  <TopTitle
    title="아코디언 (collapse)"
    text="콜랩스의 header slot에는 아이콘, 텍스트, 태그 등이 삽입될 수 있으며, 우측은 별도 기능 버튼이 삽입될 수 있습니다.
    콜랩스 내용은 필수적으로 collapse-content-body 컨테이너 내에 삽입합니다. 
    콜랩스는 공통적으로 타이틀의 모든 영역이 클릭 영역이며, 버튼 삽입 시 버튼 영역만 콜랩스의 클릭 영역에서 제외됩니다."
    style="margin-bottom: 40px"
  />
  <TopTitle
    title="Type : border false"
    text="bordered:false일 경우 반복되는 콜랩스는 하단을 기준으로 분리선이 노출됩니다. (border-top)"
  />
  <a-collapse :bordered="false">
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
            <!-- 아이콘 들어갈 경우 -->
            <!-- <Icon size="md" color="default">
              <template #name>supervisor_account</template>
            </Icon> -->
            <a-typography-text class="item-title">
              콜랩스 헤더 타이틀 콜랩스 헤더 타이틀 콜랩스 헤더 타이틀 콜랩스
              헤더 타이틀 콜랩스 헤더 타이틀 콜랩스 헤더 타이틀 콜랩스 헤더
              타이틀
            </a-typography-text>
            <div class="tag-wrap">
              <a-tag class="green small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
              <a-tag class="blue small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
          <a-flex class="group-items items-end">
            <a-button class="secondary" @click.stop> Tab-function </a-button>
          </a-flex>
        </a-flex>
      </template>
      <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
      <div class="collapse-content-body">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </div>
    </a-collapse-panel>
    <a-collapse-panel tabIndex="0">
      <template #header>
        <a-flex class="header-group">
          <a-flex class="group-items">
            <!-- 아이콘 들어갈 경우 -->
            <!-- <Icon size="md" color="default">
              <template #name>preview</template>
            </Icon> -->
            <a-typography-text class="item-title">
              콜랩스 헤더 타이틀 (좌측 아이콘)
            </a-typography-text>
            <div class="tag-wrap">
              <a-tag class="orange small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
          <a-flex class="group-items"></a-flex>
        </a-flex>
      </template>
      <!-- header/body 에 소속되지 않고 같은 레벨로 삽입 -->
      <div class="segment-wrap">
        <a-segmented v-model:value="segmentValue" :options="segmentOptions" />
      </div>
      <section class="section">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </section>
    </a-collapse-panel>
    <a-collapse-panel tabIndex="0">
      <template #header>
        <a-flex class="header-group">
          <a-flex class="group-items">
            <!-- 아이콘 들어갈 경우 -->
            <Icon size="md" color="default">
              <template #name>preview</template>
            </Icon>
            <a-typography-text class="item-title">
              콜랩스 헤더 타이틀 (좌측 아이콘)
            </a-typography-text>
          </a-flex>
          <a-flex class="group-items"></a-flex>
        </a-flex>
      </template>
      <section class="section">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </section>
    </a-collapse-panel>
  </a-collapse>
  <a-divider class="size-large" />
  <TopTitle
    title="Type : border false, 클래스 : divider-size-large 적용 (패널 사이 ant-divder.size-large 스타일 적용)"
    text="bordered:false일 경우 반복되는 콜랩스는 상단을 기준으로 분리선이 노출됩니다. (border-top)"
  />
  <a-collapse :bordered="false" class="divider-size-large">
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
            <!-- 아이콘 들어갈 경우 -->
            <!-- <Icon size="md" color="default">
              <template #name>supervisor_account</template>
            </Icon> -->
            <a-typography-text class="item-title">
              콜랩스 헤더 타이틀 콜랩스 헤더 타이틀 콜랩스 헤더 타이틀 콜랩스
              헤더 타이틀 콜랩스 헤더 타이틀 콜랩스 헤더 타이틀 콜랩스 헤더
              타이틀
            </a-typography-text>
            <div class="tag-wrap">
              <a-tag class="green small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
              <a-tag class="blue small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
          <a-flex class="group-items items-end">
            <a-button class="secondary" @click.stop> Tab-function </a-button>
          </a-flex>
        </a-flex>
      </template>
      <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
      <div class="collapse-content-body">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </div>
    </a-collapse-panel>
    <a-collapse-panel tabIndex="0">
      <template #header>
        <a-flex class="header-group">
          <a-flex class="group-items">
            <!-- 아이콘 들어갈 경우 -->
            <!-- <Icon size="md" color="default">
              <template #name>preview</template>
            </Icon> -->
            <a-typography-text class="item-title">
              콜랩스 헤더 타이틀 (좌측 아이콘)
            </a-typography-text>
            <div class="tag-wrap">
              <a-tag class="orange small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
          <a-flex class="group-items"></a-flex>
        </a-flex>
      </template>
      <!-- header/body 에 소속되지 않고 같은 레벨로 삽입 -->
      <div class="segment-wrap">
        <a-segmented v-model:value="segmentValue" :options="segmentOptions" />
      </div>
      <section class="section">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </section>
    </a-collapse-panel>
    <a-collapse-panel tabIndex="0">
      <template #header>
        <a-flex class="header-group">
          <a-flex class="group-items">
            <!-- 아이콘 들어갈 경우 -->
            <Icon size="md" color="default">
              <template #name>preview</template>
            </Icon>
            <a-typography-text class="item-title">
              콜랩스 헤더 타이틀 (좌측 아이콘)
            </a-typography-text>
          </a-flex>
          <a-flex class="group-items"></a-flex>
        </a-flex>
      </template>
      <section class="section">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </section>
    </a-collapse-panel>
  </a-collapse>
  <a-divider class="size-large" />
  <TopTitle
    title="Type : border true, expandIconPosition end"
    text="bordered:true일 경우 반복되는 콜랩스를 감싸는 radius(8px) border 아웃라인이 적용됩니다. <br>expandIconPosition:end 정의 시 콜랩스 확장 아이콘은 우측에 배치됩니다."
  />
  <a-flex :gap="8" vertical>
    <a-collapse expandIconPosition="end">
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
              <!-- 아이콘 들어갈 경우 -->
              <!-- <Icon size="md" color="default">
              <template #name>notes</template>
            </Icon> -->
              <a-typography-text class="item-title">
                콜랩스 헤더 타이틀 (우측 아이콘)
              </a-typography-text>
              <div class="tag-wrap">
                <a-tag class="orange small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </a-flex>
            <a-flex class="group-items"></a-flex>
          </a-flex>
        </template>
        <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
        <div class="collapse-content-body">
          <section class="section">
            <div class="section-body">
              <a-typography-text class="item-title">
                컨텐츠 내용
              </a-typography-text>
            </div>
          </section>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <a-collapse expandIconPosition="end">
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
              <!-- 아이콘 들어갈 경우 -->
              <!-- <Icon size="md" color="default">
              <template #name>notes</template>
            </Icon> -->
              <a-typography-text class="item-title">
                콜랩스 헤더 타이틀 (우측 아이콘)
              </a-typography-text>
              <div class="tag-wrap">
                <a-tag class="orange small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </a-flex>
            <a-flex class="group-items"></a-flex>
          </a-flex>
        </template>
        <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
        <div class="collapse-content-body">
          <section class="section">
            <div class="section-body">
              <a-typography-text class="item-title">
                컨텐츠 내용
              </a-typography-text>
            </div>
          </section>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </a-flex>
  <a-divider class="size-large" />
  <TopTitle
    title="Type : has helper Text"
    text="모든 콜랩스는 공통적으로 타이틀 우측에 헬퍼 텍스트를 삽입할 수 있습니다. 헬퍼 텍스트는 순서 배치를 통해 타이틀, 혹은 태그의 우측에도 삽입이 가능합니다."
  />

  <a-collapse :bordered="false" style="margin-bottom: 20px">
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
              콜랩스 헤더 타이틀
            </a-typography-text>
            <a-divider type="vertical" />
            <a-typography-text class="item-desc">
              ant-typography-secondary (helper Text)
            </a-typography-text>
            <div class="tag-wrap">
              <a-tag class="green small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
              <a-tag class="blue small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
          <a-flex class="group-items items-end">
            <a-button class="secondary" @click.stop> Tab-function </a-button>
          </a-flex>
        </a-flex>
      </template>
      <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
      <div class="collapse-content-body">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </div>
    </a-collapse-panel>
  </a-collapse>
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
              콜랩스 헤더 타이틀
            </a-typography-text>
            <a-divider type="vertical" />
            <a-typography-text class="item-desc">
              ant-typography-secondary (helper Text)
            </a-typography-text>
          </a-flex>
        </a-flex>
      </template>
      <div class="collapse-content-body">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </div>
    </a-collapse-panel>
  </a-collapse>

  <a-divider class="size-large" />
  <a-collapse :bordered="false" expandIconPosition="end">
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
            <a-typography-title :level="2" class="item-title">
              콜랩스 헤더 타이틀 (a-typograpy-title level:2)
            </a-typography-title>
            <div class="tag-wrap">
              <a-tag class="green small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
              <a-tag class="blue small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
          <a-flex class="group-items items-end">
            <a-button class="secondary" @click.stop> Tab-function </a-button>
          </a-flex>
        </a-flex>
      </template>
      <!-- 콜랩스 컨텐츠 내용 .collapse-content-body 에 필수 삽입할 것 -->
      <div class="collapse-content-body">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </div>
    </a-collapse-panel>
    <a-collapse-panel tabIndex="0">
      <template #header>
        <a-flex class="header-group">
          <a-flex class="group-items">
            <a-typography-title :level="2" class="item-title">
              콜랩스 헤더 타이틀
            </a-typography-title>
            <div class="tag-wrap">
              <a-tag class="orange small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
          <a-flex class="group-items"></a-flex>
        </a-flex>
      </template>
      <!-- header/body 에 소속되지 않고 같은 레벨로 삽입 -->
      <div class="segment-wrap">
        <a-segmented v-model:value="segmentValue" :options="segmentOptions" />
      </div>
      <section class="section">
        <section class="section">
          <div class="section-body">
            <a-typography-text class="item-title">
              컨텐츠 내용
            </a-typography-text>
          </div>
        </section>
      </section>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';

const formState = reactive({
  name: '',
  selected: null,
  multiple: [],
  multipleMaxTagCount: [],
});
const segmentOptions = reactive([
  'Segment-1',
  'Segment-2',
  'Segment-3',
  'Segment-4',
  'Segment-5',
]);
const segmentValue = ref(segmentOptions[0]);
</script>
<style scoped>
.section {
  height: 200px;
  background-color: #eeeeee;
}
.ant-divider.size-large {
  margin: 20px 0 !important;
}
</style>
