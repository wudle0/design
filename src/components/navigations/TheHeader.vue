<template>
  <header>
    <a-flex class="inner-header" justify="spacebetween" align="center">
      <a-flex class="header-group">
        <div class="group-items">
          <TheBreadCrumb :route="breadRoute" />
        </div>
        <div class="group-items items-end">
          <TheNavigator :navigator-list="navigatorList" />
          <a-button
            class="ghost btn-cloudview"
            :class="{ 'btn-cloudview-active': viewSwitch }"
            @click="viewSwitch = !viewSwitch"
            v-if="cloudview"
          >
            <CloudViewIcon />
            Cloud view
          </a-button>
        </div>
      </a-flex>
    </a-flex>
  </header>
  <TheCloudView
    v-model:onoff="viewSwitch"
    :alert="alertContent"
    tooltip="툴팁 설명란"
  >
    <template #content>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
      explicabo fuga error, doloribus impedit eius delectus aspernatur quidem!
      Voluptate nostrum nisi recusandae neque corporis quas iusto minus
      delectus, ut nam aliquam obcaecati, corrupti adipisci molestias, beatae id
      molestiae quidem. Esse cum possimus animi delectus ad expedita distinctio
      reprehenderit incidunt vitae dolores libero dignissimos ab, explicabo
      atque tempore officia ducimus deserunt debitis totam sit fuga consequatur.
      Consequuntur incidunt iure pariatur assumenda soluta officiis beatae illum
      quidem distinctio, itaque, laboriosam voluptatum maiores perferendis ullam
      error quo cumque esse iste cum nobis eligendi ab doloribus obcaecati
      voluptates! Maxime dolorum delectus iure, fugiat obcaecati ipsam
      consequatur quasi consectetur ab deserunt fugit, cumque reiciendis? Totam,
      aspernatur dolores! Fugiat facere sapiente, velit vitae molestias
      consectetur a hic qui ea aliquid commodi illum iure possimus odio, odit
      ducimus impedit cumque ab rerum est? Quo tempora quas alias vitae non
      facere fuga suscipit consequatur impedit nulla quos explicabo iusto
      mollitia dolores, qui iste. Nulla, placeat accusantium natus magni
      aliquid, dolor mollitia voluptatibus distinctio aut esse eveniet amet
      officiis! Laborum totam repudiandae aut beatae exercitationem distinctio,
      soluta corporis nostrum consequatur ratione rem necessitatibus atque ut
      optio hic quos et, enim dolor neque, maxime dicta. Possimus mollitia
      eligendi beatae sapiente!
    </template>
  </TheCloudView>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TheBreadCrumb from '@/components/navigations/TheBreadCrumb.vue';
import TheNavigator from '@/components/navigations/TheNavigator.vue';
import TheCloudView from '@/views/publishing-archive/componentView/TheCloudView.vue';
import { CloudViewIcon } from '@/components/icons';
import NavigatorList from '@/assets/data/navigatorList.json';

// CLOUD VIEW MODE
const viewSwitch = ref(false);

// 현재 라우트 정보 가져오기
const route = useRoute();
const router = useRouter();

// 동적 breadcrumb 생성
const breadRoute = computed(() => {
  const matched = route.matched;
  const breadcrumbs = [];

  // 매치된 라우트들을 순회하면서 breadcrumb 생성
  for (let i = 0; i < matched.length; i++) {
    const matchedRoute = matched[i];
    const meta = matchedRoute.meta;

    if (meta && meta.title) {
      // 첫 번째 라우트(솔루션명)는 건너뛰기
      const isFirst = i === 0;

      if (!isFirst) {
        breadcrumbs.push({
          path: matchedRoute.path,
          name: meta.title as string,
          disabled: false,
        });
      }
    }
  }

  return breadcrumbs;
});

const navigatorList = ref(NavigatorList);

const alertContent = {
  status: 'warning',
  title: 'Warning',
  description: '입력한 데이터가 있습니다. 정말 취소하시겠습니까?',
  actions: [
    {
      title: 'Confirm',
    },
  ],
};

const props = defineProps({
  cloudview: { type: Boolean, default: false },
});
</script>
