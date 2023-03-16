<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import {
    loginState,
    firstName,
    profilePictureCode,
    totalLikes,
    streak,
    totalAnswers,
  } from '$lib/store';
  // axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
  // axios.defaults.baseURL = 'http://localhost:8080/api/v1';
  axios.defaults.baseURL = 'http://localhost:3000/api/v1';
  axios.defaults.withCredentials = true;

  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  onMount(async () => {
    const loginStateCookie = getCookie('loginState');

    if (loginStateCookie != null) {
      await axios.get(`/userDetails`).then(function (response) {
        firstName.set(response.data.firstName);
        profilePictureCode.set(response.data.profilePictureCode);
        streak.set(response.data.streak);
        totalAnswers.set(response.data.totalAnswers);
        totalLikes.set(response.data.totalLikes);
        loginState.set(true);
      });
    } else {
      loginState.set(false);
    }
  });
</script>

<slot />
