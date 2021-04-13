import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#fff',
                secondary: '#b0bec5',
                text: '#000',
                accent: '#ff7600',
                error: '#b71c1c',
                background: '#fff'
            },
            dark: {
                primary: '#111',
                secondary: '#b0bec5',
                text: '#fff',
                accent: '#48d1e0',
                error: '#b71c1c',
                background: '#111'
            }
        },
    },
});
