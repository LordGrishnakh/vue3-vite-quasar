<script setup lang="ts">
import { ref } from 'vue';
import {QSelect} from 'quasar'

import styles from "./index.module.scss"

const model = ref(null)
const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
</script>

<template>
  <div :class="styles.container">
    <span :class="`${styles.rogi} ${styles.container}`">Rogi</span> was here
  </div>
  <q-select v-model="model" :options="options" label="Standard" />
</template>