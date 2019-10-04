<template lang="pug">
    .VueToNuxtLogo
        | {{ msg }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class AppLogo extends Vue {
    @Prop({
        required: true,
        type: String,
        default: ''
    })
    msg!: string;
}
</script>
