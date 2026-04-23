<template>
  <TopTitle
    title="카드 (Dashboard 대응)"
    text="타이틀 컴포넌트를 활용하여 대시보드 템플릿 유형에 대응 가능한 컴포넌트들의 예시입니다.
    카드 컬럼 내부는 다양한 요소들이 조합될 수 있으며, 개수를 특정할 수 없기 때문에 정렬 및 카드 삽입은 a-row, a-col 을 사용하여 구현합니다.
    대시보드 페이지의 특성 상 다양한 사이즈의 폰트/아이콘 등이 적용될 수 있기 때문에 타이포그래피 클래스를 활용하도록 합니다.
    
    카드 유형의 경우 상태에 따라 제어될 수 있는 요소를 특정할 수 없기 때문에
    상위 부모 요소의 상태 클래스에 따라 본인, 혹은 자식 요소들의 컬러(background-color,border-color,color)값이 제어될 수 있는 클래스를 기준으로 스타일링이 되어 있습니다."
  />
  <h2 class="typography-body-1">카드 내부 자식 요소로 카드가 삽입될 경우</h2>
  <a-row :gutter="[16, 16]">
    <a-col :span="12">
      <a-card :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
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
        <a-row :gutter="12">
          <a-col :span="8">
            <a-card size="small" :bordered="true">
              <template #title>
                <span>ONLINE</span>
              </template>
              <a-typography-text> 서버 정상 작동 </a-typography-text>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card size="small" :bordered="true" class="status-warning">
              <template #title>
                <span>WARNING</span>
              </template>
              <a-typography-text> 일부 서버 오프라인 </a-typography-text>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card size="small" :bordered="true">
              <template #title>
                <span>ERROR</span>
              </template>
              <a-typography-text> 즉시 대응 필요 </a-typography-text>
            </a-card>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
  <h2 class="typography-body-1">vertical : a-row, a-col 구성</h2>
  <a-row :gutter="[16, 16]">
    <a-col :span="4">
      <a-card :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
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
                <BasicEllipsisText text="Card Title Placeholder" />
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
                <BasicEllipsisText text="Card Title Placeholder" />
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
              <a-typography-title :level="3"> Key </a-typography-title>
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
              <a-typography-title :level="3"> Key </a-typography-title>
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
              <a-typography-title :level="3"> Key </a-typography-title>
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
    <a-col :span="4">
      <a-card :bordered="true">
        <a-flex vertical :gap="22">
          <!-- 카드 내부의 div로 구성 (카드,리스트 등으로 대체 불가) -->
          <a-flex vertical :gap="10">
            <a-flex :gap="4" align="center">
              <Icon size="md" color="default" fill>
                <template #name>data_table</template>
              </Icon>
              <a-typography-title :level="3"> Key </a-typography-title>
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
              <a-typography-title :level="3"> Key </a-typography-title>
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
              <a-typography-title :level="3"> Key </a-typography-title>
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
              <a-typography-title :level="3"> Key </a-typography-title>
            </a-flex>
            <a-typography-text class="typography-display-1">
              1,900
            </a-typography-text>
          </a-flex>
        </a-flex>
      </a-card>
    </a-col>
  </a-row>
  <a-divider class="size-large" style="margin-top: 20px" />
  <TopTitle
    title="카드 별 상태 적용"
    text="보다 직관적이며, 직접적으로 스타일 변경이 필요한 요소를 셀렉팅 하기 위해 카드의 경우는 기본적으로 클래스를 기준으로 셀렉팅합니다.
    상태 클래스(부모 혹은 자신)에 따라 컬러 변경이 필요한 객체에 상태 변경 클래스를 적용해주면 됩니다.
    변경이 필요한 객체는 나 자신이 될 수도 있고, 모든 자식에게도 적용할 수 있습니다.

    - 상태 클래스명 규칙 : status-{success, warning, error, down}
    - 상태 값에 따라 변경이 필요한 타겟과 옵션 클래스명 규칙 : status-item-{bg, bd, color}
    "
    style="margin-top: 20px"
  />
  <h2 class="typography-body-1">
    status-success, waring, error 와 상태별 옵션 변경 타겟 셀렉팅
  </h2>
  <a-row :gutter="[16, 16]">
    <a-col :span="12">
      <a-card :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
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
              <a-typography-text> 서버 정상 작동 </a-typography-text>
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
              <a-typography-text> 일부 서버 오프라인 </a-typography-text>
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
              <a-typography-text> 즉시 대응 필요 </a-typography-text>
            </a-card>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card size="small" :bordered="true" class="status-error">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill class="status-item-color">
                <template #name>error</template>
              </Icon>
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
            <a-typography-title :level="1"> 51.34 </a-typography-title>
            <a-divider type="vertical" />
            <a-typography-text class="typography-body-2 ant-typography-subtle">
              55.12 GiB
            </a-typography-text>
          </a-flex>
          <a-typography-text class="typography-display-1 status-item-color">
            90
          </a-typography-text>
        </a-flex>
      </a-card>
    </a-col>
  </a-row>
  <h2 class="typography-body-1">status-down</h2>
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
              <p class="tag-wrap-text">TAG</p>
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
              <p class="tag-wrap-text">TAG</p>
            </a-tag>
          </div>
        </template>
        <a-flex :gap="4" vertical>
          <a-typography-text class="status-item-color">
            Ubuntu is a Debian-based Linux apple operating system that runs from
            the desktop to the cloud, to all your internet connected things.
          </a-typography-text>
        </a-flex>
      </a-card>
    </a-col>
  </a-row>

  <h2 class="typography-body-1">
    중앙 정렬(card-header X), 카드 별 상태 적용 케이스
  </h2>
  <a-flex :gap="16" vertical>
    <a-row :gutter="[16, 16]">
      <a-col :span="6">
        <a-card size="small" :bordered="true" class="justify-center">
          <div class="title-group">
            <div class="group-items">
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="디스크 사용량" />
              </a-typography-title>
            </div>
            <div class="group-items items-end">
              <a-typography-text class="typography-body-2">
                단위 (%)
              </a-typography-text>
            </div>
          </div>
          <a-flex justify="space-between" align="center" :gap="4">
            <a-flex align="center" :gap="5">
              <a-typography-title :level="1"> 51.34 </a-typography-title>
              <a-divider type="vertical" />
              <a-typography-text
                class="typography-body-2 ant-typography-subtle"
              >
                55.12 GiB
              </a-typography-text>
            </a-flex>
            <a-typography-text class="typography-display-1 status-item-color">
              75%
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
      <a-col
        v-for="(card, index) in cardKeyValueList.disk"
        :key="index"
        :span="6"
      >
        <a-card
          :bordered="true"
          :class="card.status ? `status-${card.status}` : ''"
        >
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText :text="card.title" />
                </a-typography-title>
              </div>
              <div class="group-items items-end">
                <a-button v-if="card.link && card.link.path" class="link">
                  {{ card.detailsLink }}
                  <Icon size="md" color="default" fill>
                    <template #name>open_in_new</template>
                  </Icon>
                </a-button>
              </div>
            </div>
          </template>

          <a-flex vertical :gap="12">
            <template v-for="(item, i) in card.items" :key="i">
              <a-card size="small" :bordered="false">
                <template #title>
                  <div class="tag-wrap">
                    <a-tag :class="[item.color, 'medium']">
                      <p class="tag-wrap-text">
                        {{ item.tag.toUpperCase() }}
                      </p>
                    </a-tag>
                  </div>
                </template>
                <template #extra>
                  <a-typography-title :level="1" class="item-title">
                    {{ item.value }}
                  </a-typography-title>
                </template>
              </a-card>
              <a-divider v-if="i === 0" />
            </template>
          </a-flex>
        </a-card>
      </a-col>
      <a-col
        v-for="(card, index) in cardNearFullList.osDisk"
        :key="index"
        :span="6"
      >
        <a-card
          size="small"
          :bordered="true"
          :class="card.status ? `status-${card.status}` : ''"
          class="status-item-border status-item-bg justify-center"
        >
          <a-flex :gap="4" align="center">
            <Icon
              size="md"
              :color="
                card.status === 'error'
                  ? 'error'
                  : card.status === 'info'
                    ? 'info'
                    : 'warning'
              "
              fill
              v-if="
                card.status === 'error' ||
                card.status === 'warning' ||
                card.status === 'info'
              "
            >
              <template #name>{{
                card.status === 'error'
                  ? 'error'
                  : card.status === 'info'
                    ? 'info'
                    : 'warning'
              }}</template>
            </Icon>
            <a-typography-title :level="3" class="item-title">
              <BasicEllipsisText :text="card.title" />
            </a-typography-title>
          </a-flex>

          <a-flex
            justify="space-between"
            align="center"
            :gap="4"
            :class="!card.count ? 'mt-auto' : ''"
          >
            <a-flex align="center" :gap="8">
              <template v-if="card.count">
                <a-typography-title :level="1">
                  {{ card.count }}
                </a-typography-title>
                <a-typography-text
                  class="typography-body-2 ant-typography-subtle"
                >
                  {{ card.unit }}
                </a-typography-text>
              </template>
              <template v-else>
                <a-typography-text
                  class="typography-body-2 ant-typography-subtle"
                  >없음
                </a-typography-text>
              </template>
            </a-flex>
            <!-- <a-typography-text
                          class="typography-display-1 status-item-color"
                        >
                          {{ card.percentage }}
                        </a-typography-text> -->
          </a-flex>
        </a-card>
      </a-col>
    </a-row>
  </a-flex>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
import { BasicEllipsisText } from '@/components/layouts';

const formState = reactive({
  name: '',
  nameError: '',
  selected: null,
  multiple: [],
  multipleMaxTagCount: [],
  number: null,
  numberError: null,
  password: '',
  textarea: '',
});

const cardKeyValueList = {
  disk: [
    {
      title: '실행 상태',
      status: 'warning',
      items: [
        { tag: 'UP', color: 'green', value: 2 },
        { tag: 'DOWN', color: 'red', value: 2 },
      ],
    },
  ],
  osds: [
    {
      title: '가용 상태',
      status: 'warning',
      items: [
        { tag: 'IN', color: 'green', value: 2 },
        { tag: 'OUT', color: 'red', value: 2 },
      ],
    },
    {
      title: '실행 상태',
      status: 'warning',
      items: [
        { tag: 'UP', color: 'green', value: 2 },
        { tag: 'DOWN', color: 'red', value: 2 },
      ],
    },
  ],
};
const cardNearFullList = {
  osDisk: [
    {
      title: 'Near Full(80%) OS Disks',
      count: 33,
      unit: '개',
      percentage: '30%',
      status: 'warning',
    },
    {
      title: 'Full(85%) OS Disks',
      count: 33,
      unit: '개',
      percentage: '85%',
      status: 'error',
    },
  ],
  osds: [
    {
      title: 'Near Full(80%) OSDs',
      count: 33,
      unit: '개',
      percentage: '30%',
      status: 'warning',
    },
    {
      title: 'Full(85%) OSDs',
      count: 33,
      unit: '개',
      percentage: '85%',
      status: 'error',
    },
  ],
};
</script>
<style scoped>
h2 {
  display: block;
  margin: 20px 0 10px !important;
}
</style>
