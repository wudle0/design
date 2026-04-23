<template>
  <article class="select-solution">
    <div class="select-solution-btns">
      <a-flex vertical gap="20">
        <h1 class="title">솔루션 선택</h1>
        <a-flex vertical gap="6">
          <router-link :to="'/contrabass'"> IaaS </router-link>
          <router-link :to="'/viola'"> VIOLA </router-link>
          <router-link :to="'/cicd'"> DevOps Tools </router-link>
          <router-link :to="'/ceph'"> SDS </router-link>
          <router-link to="/archive/overview"> 3.0.5 컴포넌트 </router-link>
        </a-flex>
      </a-flex>
    </div>
  </article>
</template>

<script lang="ts" setup></script>

<style scoped>
.select-solution {
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  background: black;
  color: #fff;
  text-align: center;

  a {
    background: #fff;
    color: #000;
    padding: 20px;
    font-size: 26px;
  }

  h1 {
    font-size: 26px;
    font-weight: 400;
  }
}
</style>
