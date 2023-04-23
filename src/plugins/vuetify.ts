import Vue from 'vue';
import ThemeDefinition from 'vuetify';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
Vue.use(ThemeDefinition);

export default new Vuetify({
	theme: { dark: false },
});
