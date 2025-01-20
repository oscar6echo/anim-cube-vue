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
  const handle = AnimCube3(html_elt, props.paramsAsStr);
  //   const { uid_active, n_mouse_down, actions } = AnimCube3(html_elt, props.paramsAsStr);

  const uid = handle.actions.get_var('uid') as number;
  console.log('MOUNTED', { uid });

  // test
  console.log('test put_var');
  handle.actions.put_var('bgColor', 'skyblue', 's');
  handle.actions.paint();

  // test
  console.log('test get_var');
  console.log(handle.actions.get_var('uid'));

  watch(handle.n_mouse_down, () => {
    emit('update', uid);
    console.log('EMIT uid:', uid);
  });

  watch(active, () => {
    console.log('WATCH active:', active);
    handle.uid_active = active.value;
    // uid_active.value = active.value;
  });

  onUnmounted(() => {
    handle.actions.removeListeners();
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
