// @ts-check

import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  //   vueTsConfigs.recommended,
  vueTsConfigs.strict,
  //   vueTsConfigs.recommendedTypeChecked,
  //   vueTsConfigs.strictTypeChecked,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    },
  },
);
