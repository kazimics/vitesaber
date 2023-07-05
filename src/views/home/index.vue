<script lang="ts" setup>
import { useCounterStore } from '@/stores/counters'
const counter = useCounterStore()
</script>

<template>
  <div>
    hello
    <span>vue3</span>
  </div>
  <div>count now is {{ counter.count }}</div>
  <el-button type="primary" class="my-[8px]" @click="counter.reset()">
    reset
  </el-button>
  <input type="text" placeholder="请输入" />
</template>

<style lang="scss" scoped>
div {
  background-color: var(--main-color);
  box-shadow: 0 0 0 1px red;

  span {
    color: #0f0;
  }
}
</style>
