<template>
  <div class='hello'>
    <h1 class='view-header'>Secure Page</h1>
    <h5>Data from GET /secure-data:</h5>
    <div class="results">
      <pre>{{ data }}</pre>
    </div>
    <div>
      <router-link to="/">Go back</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    const accessToken = await this.$auth.getAccessToken();
    const client = axios.create({
      baseURL: 'http://localhost:8081',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { data } = await client.get('/secure-data');
    this.data = data;
  },
};
</script>

