<script>
  import axios from 'axios';
  axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
  axios.defaults.withCredentials = true;
</script>

<slot />
