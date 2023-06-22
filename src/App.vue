<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { getGithubInfo } from '@/api/user'
import type { PrivateUser, PublicUser } from '@/api/model/user'
import('~icons/flat-color-icons/android-os')

const state = reactive({
  userInfo: {} as PrivateUser | PublicUser,
  userName: ''
})

const getUserInfo = async () => {
  try {
    state.userInfo = await getGithubInfo('kazimics')
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(() => {
  getUserInfo()
})

let dateValue = ref('')
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div>
      <i-flat-color-icons-android-os
        style="font-size: 2em; color: red"
        class="mx-auto"
      />
      <el-breadcrumb separator="/" class="flex flex-row justify-center pt-8">
        <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/helloWorld' }">
          HelloWorld
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/chart' }">chart</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <img
      alt="Vue logo"
      :src="state.userInfo.avatar_url"
      class="mx-auto py-8"
      @click="getUserInfo"
    />
    <el-date-picker
      v-model="dateValue"
      type="date"
      placeholder="Pick a day"
    ></el-date-picker>
    <router-view />
  </el-config-provider>
</template>

<style>
:root {
  --main-color: #f0f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
