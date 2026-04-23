<template>
  <TopTitle
    title="Alert"
    text="Alert은 화면 및 콘텐츠에 대한 일시적인 정보를 전달할 때 사용합니다.
    
    In-page와 Full-width 두 가지 레이아웃을 사용할 수 있습니다.
In-page는 콘텐츠 영역이 가진 패딩 값에 영향을 받고, Full-widh 타입은 패딩 값에 영향 받지 않고 화면 전체 너비를 차지합니다."
  />
  <a-flex gap="20" vertical>
    <div class="form-item-group-title">
      <a-typography-title :level="3"> In Page </a-typography-title>
      <a-typography-text class="ant-typography-secondary">
        In Page 타입은 화면 내 콘텐츠 “일부”에 한정한 정보를 전달할 때
        사용합니다. 모달 내에서도 동일하게 사용합니다.
      </a-typography-text>
    </div>

    <Alert
      variant="info"
      title="타이틀"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
    >
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>
    <Alert
      variant="warning"
      title="타이틀"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
    />
    <Alert
      variant="error"
      title="타이틀2"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
      vertical
    >
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>
    <Alert
      variant="success"
      title="타이틀"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
    />
    <Alert title="타이틀" description="중요도가 낮은곳에서 default가 쓰입니다.">
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>

    <div class="form-item-group-title">
      <a-typography-title :level="3"> Full Width </a-typography-title>
      <a-typography-text class="ant-typography-secondary">
        Full Width 타입은 화면 내 콘텐츠 전체에 대한 정보를 전달할 때
        사용합니다. 모달 내에서도 동일하게 사용합니다.
      </a-typography-text>
    </div>
    <Alert
      variant="info"
      title="fill 타입"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
      banner
    >
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>
    <Alert
      variant="warning"
      title="fill 타입"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
      banner
    >
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>
    <Alert
      variant="error"
      title="fill 타입"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
      vertical
      banner
    >
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>
    <Alert
      variant="success"
      title="fill 타입"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
      banner
    >
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>
    <Alert
      title="fill 타입"
      description="중요도에 따라 타이틀 없이 설명글만 작성할 수 있습니다."
      banner
    >
      <template #button>
        <a-flex :gap="8">
          <a-button class="secondary small" @click="showAlert">
            button1
          </a-button>
          <a-button class="secondary small" @click="showAlert"
            >button2
          </a-button>
        </a-flex>
      </template>
    </Alert>
  </a-flex>
</template>
<script lang="ts" setup>
import { TopTitle } from '@/components/layouts';
import { Alert } from '@/components/alert';

const showAlert = () => {
  alert('예시 이벤트입니다.');
};
</script>
