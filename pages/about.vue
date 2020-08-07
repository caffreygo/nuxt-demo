<template>
  <div class="container">
    {{text}}
    <el-button type="primary">按钮</el-button>
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
};
</script>

<style>
</style>
