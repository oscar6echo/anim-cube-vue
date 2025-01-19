<script setup lang="ts">
import { ref } from 'vue';
import AnimCube from './components/AnimCube.vue';

const active_cube = ref(0);

const _params_1 = [
  //   ["config", "myconfig.txt"],
  //   ['id', 'mycube'],
  ['colorscheme', 'wygbor'],
  ['move', 'M2S2U2M2S2D2'],
  ['hint', '12'],
  ['scale', '4'],
  ['align', '20'],
  ['position', 'll' + 'u'.repeat(24 - 2)],
  ['position', 'll' + 'u'.repeat(2)],
  ['movetext', '6'],
  ['yz', '1'],
  ['movetextspace', '1'],
  ['borderwidth', '7'],
  ['slidercolor', 'ffff00'],
  ['troughcolor', '0000ff'],
  //   ["facelets", "LLLLLLLLLLLLLLLLLLLWLWYWLWLLLLLLLLLLLLLLLLLLLLLLLLLLL2"],
];
const params_as_str_1 = _params_1.map((e) => `${e[0]}=${e[1]}`).join('&');
const params_1 = ref(params_as_str_1);

const _params_2 = [
  ['colorscheme', 'wygbor'],
  ['move', 'R2U2'],
  ['hint', '12'],
  ['scale', '4'],
  ['align', '20'],
  ['position', 'll' + 'u'.repeat(24 - 2)],
  //   ['position', 'll' + 'u'.repeat(2)],
  ['movetext', '6'],
  ['yz', '1'],
  ['movetextspace', '1'],
  ['borderwidth', '7'],
  //   ['slidercolor', 'ffff00'],
  //   ['troughcolor', '0000ff'],
];
const params_as_str_2 = _params_2.map((e) => `${e[0]}=${e[1]}`).join('&');
const params_2 = ref(params_as_str_2);

const setActive = (uid_active: number) => {
  active_cube.value = uid_active;
};
</script>

<template>
  <h4>AnimCubeJS in Vue</h4>

  <AnimCube :params-as-str="params_1" :active="active_cube" @update="setActive"></AnimCube>

  <br />

  <AnimCube :params-as-str="params_2" :active="active_cube" @update="setActive"></AnimCube>
</template>

<style scoped></style>
