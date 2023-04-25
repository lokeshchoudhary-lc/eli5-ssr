<script>
  import axios from 'axios';

  // axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
  // axios.defaults.baseURL = 'http://localhost:8080/api/v1';
   axios.defaults.baseURL = 'https://backend.eli5.club/api/v1';
  //axios.defaults.baseURL = 'http://localhost:3000/api/v1';
  axios.defaults.withCredentials = true;
</script>

<slot />
