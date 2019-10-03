<template lang="pug">
    .VueToNuxtLogo
        | {{ msg }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AppLogo extends Vue {
    msg = 'ssssssssssss';
}
</script>
