<template>
  <TopTitle
    title="Notification"
    text="작업에 대한 상태나 서비스의 다른 곳에서 발생한 상황에 대한 피드백을 할 때 사용합니다."
  />
  <a-flex vertical gap="20" style="width: 320px">
    <a-button class="primary" @click="openDefault"
      >title, icon은 필수!
    </a-button>
    <a-button class="primary" @click="openDefault2"
      >설명글 없이 타이틀만 작성 가능!
    </a-button>
    <a-button class="primary" @click="openDefault3"
      >링크복사 or 상세보기 버튼
    </a-button>
    <a-button class="primary" @click="openMessage">메시지 사용 안내 </a-button>
  </a-flex>
</template>
<script lang="ts" setup>
import {
  openNotification,
  openNotificationMessage,
} from '@/hooks/notification/useNotification';
import { TopTitle } from '@/components/layouts';

const openDefault = () => {
  openNotification({
    title: '토스트 메시지는 타이틀과 좌측 아이콘이 필수',
    iconName: 'warning',
  });
};
const openDefault2 = () => {
  openNotification({
    title: '인스턴스 생성이 완료되었습니다.',
    iconName: 'check_circle',
  });
};

const openDefault3 = () => {
  openNotification({
    iconName: 'error',
    title: '생성 실패',
    description: '인스턴스 생성이 실패했습니다.',
    btnText: '상세보기',
    btnClass: 'link ',
    onBtnClick: () => {
      console.log('상세보기 클릭');
    },
  });
};

const openMessage = () => {
  openNotificationMessage({
    iconName: 'info',
    title: '메시지 사용 안내',
    description:
      '메시지와 함께 올 수 있는 컴포넌트로는 버튼(최대 2개)만 가능합니다. 버튼 형태는 세컨더리 혹은 링크 버튼을 권장합니다.',
    buttons: [
      {
        text: '확인',
        onClick: () => console.log('확인 클릭'),
        btnClass: 'secondary small',
      },
      {
        text: '취소',
        onClick: () => console.log('취소 클릭'),
        btnClass: 'secondary small',
      },
    ],
  });
};
</script>
