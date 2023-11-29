<template>
  <van-nav-bar fixed placeholder z-index="999" :title="title" left-arrow @click-left="onClickLeft" />
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  title: { type: String, default: '' }
})

const emits = defineEmits(['goback'])

const onClickLeft = () => emits('goback');

onMounted(async() => {
  console.log('2---onMounted---------', props.title);
})
</script>

<style scoped>
:deep(.van-nav-bar__left), :deep(.van-nav-bar__right) {
  padding: 0 var(--van-padding-sm);
}
</style>