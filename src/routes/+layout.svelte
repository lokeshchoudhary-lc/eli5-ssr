<script>
  import axios from 'axios';
  import { onMount } from 'svelte';

  export let data;

  let print = data.userDetails;

  // axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
  // axios.defaults.baseURL = 'http://localhost:8080/api/v1';
  // axios.defaults.baseURL = 'http://localhost:3000/api/v1';
  axios.defaults.baseURL = 'https://backend.eli5.club/api/v1';
  axios.defaults.withCredentials = true;

  onMount(() => {
    console.log(print);
    // let client = new EventSource(
    //   'http://localhost:3000/api/v1/sse/leaderboard',
    //   { withCredentials: true }
    // );
    // client.onmessage = function (msg) {
    //   console.log(JSON.parse(msg.data));
    // };
  });
</script>

<slot />

<div
  class="modal fade"
  id="OpenWriteLoginModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Like an answer or want to answer; To share the love Sing-in
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <lead>Eli5 is a place to share answers and get ♥s.</lead> <br /> <br />
        <button
          onclick="window.location.href='/auth'"
          type="button"
          class="btn btn-primary btn-lg"
          data-bs-dismiss="modal"
          ><i class="bi bi-google" /> Sign in with Google</button
        >
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>
