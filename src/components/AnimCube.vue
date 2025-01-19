<template>
  <div class="cube" ref="mycube"></div>
</template>

<script setup lang="ts">
import AnimCube3 from '@/assets/js/AnimCube3.js';
import { onMounted, onUnmounted, ref, toRef, watch } from 'vue';

const mycube = ref<HTMLElement | null>(null);

const props = defineProps<{
  paramsAsStr: string;
  active: number;
}>();

const emit = defineEmits<{
  update: [value: number];
}>();

const active = toRef(() => props.active);

onMounted(() => {
  const html_elt = mycube.value as HTMLElement;
  const { uid, uid_active, n_mouse_down, actions } = AnimCube3(html_elt, props.paramsAsStr);

  console.log('MOUNTED', { uid });

  watch(n_mouse_down, () => {
    emit('update', uid);
    console.log('EMIT uid:', uid);
  });

  watch(active, () => {
    console.log('WATCH active:', active);
    uid_active.value = active.value;
  });

  onUnmounted(() => {
    actions.removeListeners();
  });
});
</script>

<style>
.cube {
  width: 340px;
  height: 323px;
  border: 1px darkgray solid;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #222;
}
</style>
