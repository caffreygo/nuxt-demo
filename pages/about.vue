<template>
  <div class="container">
    {{profileName}}
    <el-button type="primary" @click="onNameUpdate">更新名字</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default {
  data() {
    return {
      text: '123',
    };
  },
  mounted() {
    console.log(window); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  },
  computed: {
    profileName() {
      return this.$store.state.profile.name;
    },
  },
  methods: {
    onNameUpdate() {
      this.$store.commit('profile/SET_NAME', 'new name');
    },
  },
};
</script>

<style>
</style>
