<template lang="pug">
    section.container
        div
            AppLogo(
                :msg="msg"
            )

            h1.title
                | nuxt_project

            h2.subtitle
                | Nuxt.js project

            .links
                a.button--green(
                    href="https://nuxtjs.org/"
                    target="_blank"
                )
                    | Documentation

                a.button--grey(
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                )
                    | GitHub
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

import AppLogo from '@/components/AppLogo.vue';

const mockStore = namespace('mock');

@Component({
    components: {
        AppLogo
    }
})
export default class App extends Vue {
    @mockStore.Action('setMock') setMock!: (payload: string) => void;
    @mockStore.Getter('getMock') getMock!: string;

    msg = '';

    created() {
        this.setMock('123assd399');
        this.msg = this.getMock;
    }
}
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
