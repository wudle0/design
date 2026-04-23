<template>
  <TopTitle
    title="모달(Modal)"
    text="small, medium, large, full의 사이즈를 가집니다."
  />
  <a-flex :gap="8">
    <a-button class="primary" @click="showModal('modalBasicSmall')">
      모달 버튼 (small)
    </a-button>
    <a-button class="primary" @click="showModal('modalBasicMedium')">
      모달 버튼 (medium)
    </a-button>
    <a-button class="primary" @click="showModal('modalBasicLarge')">
      모달 버튼 (large)
    </a-button>
    <a-button class="primary" @click="showModal('modalBasicFull')">
      모달 버튼 (full)
    </a-button>
  </a-flex>
  <a-flex vertical style="margin-top: 40px">
    <TopTitle
      title="알림 모달 (NotiModal)"
      text="간단한 삭제 등 자주 쓰이는 모달입니다."
    />
    <a-flex gap="8">
      <a-button class="primary" @click="showModal('modalDelete')">
        알림 모달 버튼 (delete)
      </a-button>
      <a-button class="primary" @click="showModal('modalMultiDelete')">
        알림 모달 버튼 (multiDelete)
      </a-button>
      <a-button class="primary" @click="showModal('modalSingleInputDelete')">
        알림 모달 버튼 (singleinputDelete)
      </a-button>
    </a-flex>
  </a-flex>
  <a-flex vertical style="margin-top: 40px">
    <TopTitle
      title="솔루션 전용 모달 (NotiModal)"
      text="간단한 삭제 등 자주 쓰이는 모달입니다."
    />
    <a-flex gap="8">
      <a-button class="primary" @click="showModal('modalSolutionDesc')">
        솔루션 전용 버튼 (icon + desc)
      </a-button>
      <a-button class="primary" @click="showModal('modalSolutionSubDesc')">
        솔루션 전용 버튼 (icon + subdesc)
      </a-button>
      <a-button class="primary" @click="showModal('modalSolutionExtended')">
        솔루션 전용 버튼 (icon + desc + subdesc)
      </a-button>
    </a-flex>
  </a-flex>
  <Modal
    :open="open.modalBasicSmall"
    :ok-close="closeModal"
    size="small"
    :notification="{
      title: '인스턴스',
      variant: '생성',
      status: 'error',
      detailAction: showAlert,
    }"
    :alert="{
      title: 'error',
      description: '에러 상태입니다.',
      button1: 'button01',
      button1Action: showAlert,
      status: 'error',
    }"
  >
    <template #title>
      <BasicTitle
        level="modal"
        title="modal title component"
        description="description"
      />
    </template>
    <template #alert>
      <Alert
        variant="info"
        title="title"
        description="description"
        buttonFirst="button1"
        :buttonFirstAction="showAlert"
        buttonSecond="button2"
        :buttonSecondAction="showAlert"
        showIcon
        banner
      />
    </template>
    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      voluptatibus quae exercitationem dolore consequatur quos ex. Natus,
      veritatis corporis reiciendis quis minus est! Aperiam reprehenderit illo
      eum rem vitae voluptatum, quo itaque libero minima cumque magnam assumenda
      harum quae omnis repudiandae autem voluptate exercitationem similique, cum
      ipsum error? Facilis esse exercitationem in temporibus aut suscipit.
      Quibusdam sunt odio saepe recusandae? Minima obcaecati consequatur eos hic
      excepturi exercitationem assumenda harum ut deserunt quaerat, culpa
      accusamus illum. Expedita in iste nisi? Voluptatem, illo illum explicabo
      enim, impedit dolore unde odit saepe fugiat ipsam laborum asperiores
      debitis magni hic libero dolor aliquam atque iste. Magni in minima
      recusandae aut atque quia maiores delectus voluptates nesciunt nisi
      officia quos pariatur adipisci eligendi dicta reiciendis nostrum ipsam
      velit earum incidunt, enim, perspiciatis architecto laboriosam deserunt.
      Doloremque, odio. Fugit consequatur sequi doloribus et autem, accusantium
      laudantium fugiat nam obcaecati, distinctio provident rem? Animi saepe
      porro laborum nam iste, sequi vero quo earum explicabo perferendis ex
      exercitationem ad perspiciatis adipisci modi at labore aperiam quae ullam
      inventore? Animi officiis quae consequatur sequi suscipit eaque obcaecati
      aspernatur natus recusandae optio quasi dolore perferendis minima sed iure
      reiciendis blanditiis quidem omnis, aliquam excepturi repellat libero
      quisquam? Ratione, totam illo.
    </template>
  </Modal>
  <Modal
    :open="open.modalBasicMedium"
    :ok-close="closeModal"
    size="medium"
    :notification="{
      title: '인스턴스',
      variant: '생성',
      status: 'info',
      detailAction: showAlert,
    }"
  >
    <template #title>
      <BasicTitle
        level="modal"
        title="modal title component"
        description="description"
      />
    </template>
    <template #alert>
      <Alert
        variant="warning"
        title="title"
        description="description"
        buttonFirst="button1"
        :buttonFirstAction="showAlert"
        buttonSecond="button2"
        :buttonSecondAction="showAlert"
        showIcon
        banner
      />
    </template>
    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      voluptatibus quae exercitationem dolore consequatur quos ex. Natus,
      veritatis corporis reiciendis quis minus est! Aperiam reprehenderit illo
      eum rem vitae voluptatum, quo itaque libero minima cumque magnam assumenda
      harum quae omnis repudiandae autem voluptate exercitationem similique, cum
      ipsum error? Facilis esse exercitationem in temporibus aut suscipit.
      Quibusdam sunt odio saepe recusandae? Minima obcaecati consequatur eos hic
      excepturi exercitationem assumenda harum ut deserunt quaerat, culpa
      accusamus illum. Expedita in iste nisi? Voluptatem, illo illum explicabo
      enim, impedit dolore unde odit saepe fugiat ipsam laborum asperiores
      debitis magni hic libero dolor aliquam atque iste. Magni in minima
      recusandae aut atque quia maiores delectus voluptates nesciunt nisi
      officia quos pariatur adipisci eligendi dicta reiciendis nostrum ipsam
      velit earum incidunt, enim, perspiciatis architecto laboriosam deserunt.
      Doloremque, odio. Fugit consequatur sequi doloribus et autem, accusantium
      laudantium fugiat nam obcaecati, distinctio provident rem? Animi saepe
      porro laborum nam iste, sequi vero quo earum explicabo perferendis ex
      exercitationem ad perspiciatis adipisci modi at labore aperiam quae ullam
      inventore? Animi officiis quae consequatur sequi suscipit eaque obcaecati
      aspernatur natus recusandae optio quasi dolore perferendis minima sed iure
      reiciendis blanditiis quidem omnis, aliquam excepturi repellat libero
      quisquam? Ratione, totam illo.
    </template>
  </Modal>
  <Modal
    :open="open.modalBasicLarge"
    :ok-close="closeModal"
    size="large"
    :notification="{
      title: '인스턴스',
      variant: '생성',
      status: 'warning',
      detailAction: showAlert,
    }"
  >
    <template #title>
      <BasicTitle
        level="modal"
        title="modal title component"
        description="description"
      />
    </template>
    <template #alert>
      <Alert
        variant="success"
        title="title"
        description="description"
        buttonFirst="button1"
        :buttonFirstAction="showAlert"
        buttonSecond="button2"
        :buttonSecondAction="showAlert"
        showIcon
        banner
      />
    </template>
    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      voluptatibus quae exercitationem dolore consequatur quos ex. Natus,
      veritatis corporis reiciendis quis minus est! Aperiam reprehenderit illo
      eum rem vitae voluptatum, quo itaque libero minima cumque magnam assumenda
      harum quae omnis repudiandae autem voluptate exercitationem similique, cum
      ipsum error? Facilis esse exercitationem in temporibus aut suscipit.
      Quibusdam sunt odio saepe recusandae? Minima obcaecati consequatur eos hic
      excepturi exercitationem assumenda harum ut deserunt quaerat, culpa
      accusamus illum. Expedita in iste nisi? Voluptatem, illo illum explicabo
      enim, impedit dolore unde odit saepe fugiat ipsam laborum asperiores
      debitis magni hic libero dolor aliquam atque iste. Magni in minima
      recusandae aut atque quia maiores delectus voluptates nesciunt nisi
      officia quos pariatur adipisci eligendi dicta reiciendis nostrum ipsam
      velit earum incidunt, enim, perspiciatis architecto laboriosam deserunt.
      Doloremque, odio. Fugit consequatur sequi doloribus et autem, accusantium
      laudantium fugiat nam obcaecati, distinctio provident rem? Animi saepe
      porro laborum nam iste, sequi vero quo earum explicabo perferendis ex
      exercitationem ad perspiciatis adipisci modi at labore aperiam quae ullam
      inventore? Animi officiis quae consequatur sequi suscipit eaque obcaecati
      aspernatur natus recusandae optio quasi dolore perferendis minima sed iure
      reiciendis blanditiis quidem omnis, aliquam excepturi repellat libero
      quisquam? Ratione, totam illo.
    </template>
  </Modal>
  <Modal :open="open.modalBasicFull" :ok-close="closeModal" size="full">
    <template #title>
      <BasicTitle
        level="modal"
        title="modal title component"
        description="description"
      />
    </template>
    <template #alert>
      <Alert
        title="title"
        description="description"
        buttonFirst="button1"
        :buttonFirstAction="showAlert"
        buttonSecond="button2"
        :buttonSecondAction="showAlert"
        showIcon
        banner
      />
    </template>
    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      voluptatibus quae exercitationem dolore consequatur quos ex. Natus,
      veritatis corporis reiciendis quis minus est! Aperiam reprehenderit illo
      eum rem vitae voluptatum, quo itaque libero minima cumque magnam assumenda
      harum quae omnis repudiandae autem voluptate exercitationem similique, cum
      ipsum error? Facilis esse exercitationem in temporibus aut suscipit.
      Quibusdam sunt odio saepe recusandae? Minima obcaecati consequatur eos hic
      excepturi exercitationem assumenda harum ut deserunt quaerat, culpa
      accusamus illum. Expedita in iste nisi? Voluptatem, illo illum explicabo
      enim, impedit dolore unde odit saepe fugiat ipsam laborum asperiores
      debitis magni hic libero dolor aliquam atque iste. Magni in minima
      recusandae aut atque quia maiores delectus voluptates nesciunt nisi
      officia quos pariatur adipisci eligendi dicta reiciendis nostrum ipsam
      velit earum incidunt, enim, perspiciatis architecto laboriosam deserunt.
      Doloremque, odio. Fugit consequatur sequi doloribus et autem, accusantium
      laudantium fugiat nam obcaecati, distinctio provident rem? Animi saepe
      porro laborum nam iste, sequi vero quo earum explicabo perferendis ex
      exercitationem ad perspiciatis adipisci modi at labore aperiam quae ullam
      inventore? Animi officiis quae consequatur sequi suscipit eaque obcaecati
      aspernatur natus recusandae optio quasi dolore perferendis minima sed iure
      reiciendis blanditiis quidem omnis, aliquam excepturi repellat libero
      quisquam? Ratione, totam illo.
    </template>
  </Modal>

  <NotiModal
    :open="open.modalDelete"
    :ok-close="closeModal"
    :info="{
      title: '인스턴스',
      target: 'instance1',
      variant: '삭제',
      status: 'success',
    }"
    okDangerText
  />
  <NotiModal
    :open="open.modalMultiDelete"
    :ok-close="closeModal"
    :info="{
      title: '인스턴스',
      target: 'instance1',
      variant: '삭제',
      status: 'success',
      count: 10,
    }"
    okDangerText
  />

  <NotiModal
    :open="open.modalSingleInputDelete"
    :ok-close="closeModal"
    :info="{
      title: '백업',
      target: `'${selectedRecord?.link?.name || '백업파일명'}'`,
      variant: '삭제',
      status: '삭제',
    }"
    :show-input="true"
    okDangerText
  />

  <!-- 솔루션 전용 NotiModal 컴포넌트들 -->

  <NotiModal
    :open="open.modalSolutionDesc"
    :ok-close="closeModal"
    :ok-action="closeModal"
    :info="{
      title: '백업 복원',
      variant: '확인',
      content: {
        icon: {
          type: 'success',
        },
        desc: '백업 파일이 성공적으로 복원되었습니다.',
      },
    }"
  />

  <NotiModal
    :open="open.modalSolutionSubDesc"
    :ok-close="closeModal"
    :ok-action="closeModal"
    :info="{
      title: '네트워크 생성',
      variant: '확인',
      status: 'success',
      content: {
        icon: {
          type: 'info',
        },
        subDesc: '네트워크 설정은 5분 후에 완료됩니다.',
      },
    }"
  />

  <NotiModal
    :open="open.modalSolutionExtended"
    :ok-close="closeModal"
    :ok-action="closeModal"
    :info="{
      title: '복제 불가',
      variant: '확인',
      content: {
        icon: {
          type: 'error',
        },
        desc: 'OS 볼륨이 없는 인스턴스는 복제할 수 없습니다.',
        subDesc:
          '이미지 선택 후 OS 볼륨을 생성하거나, 부팅 가능한 볼륨으로 인스턴스를 생성해 주세요.',
      },
    }"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Modal, NotiModal } from '@/components/popup';
import { TopTitle, BasicTitle } from '@/components/layouts';
import { Alert } from '@/components/alert';

/**
 * 모달
 */
const open = ref({
  modalBasicSmall: false,
  modalBasicMedium: false,
  modalBasicLarge: false,
  modalBasicFull: false,
  modalDelete: false,
  modalMultiDelete: false,
  modalSingleInputDelete: false,
  // 솔루션 전용 NotiModal 상태들
  modalSolutionDesc: false,
  modalSolutionSubDesc: false,
  modalSolutionExtended: false,
});

const showModal = (param: string) => {
  open.value = {
    ...open.value,
    [param]: true,
  };
};

const closeModal = () => {
  open.value = {
    modalBasicSmall: false,
    modalBasicMedium: false,
    modalBasicLarge: false,
    modalBasicFull: false,
    modalDelete: false,
    modalMultiDelete: false,
    modalSingleInputDelete: false,
    modalSolutionDesc: false,
    modalSolutionSubDesc: false,
    modalSolutionExtended: false,
  };
};

const showAlert = () => {
  alert('예시 이벤트입니다.');
};
</script>
