import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-60sqg8pq5sd7is8l.us.auth0.com",
    clientId: "9rnAeo4yxSaAYfFaO4P6ctEsNMmcLndA",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app');
