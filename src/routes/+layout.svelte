<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  // axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
  // axios.defaults.baseURL = 'http://localhost:8080/api/v1';
  axios.defaults.baseURL = 'http://localhost:3000/api/v1';
  // axios.defaults.baseURL = 'https://backend.eli5.club/api/v1';
  axios.defaults.withCredentials = true;

  export let data;
  let url = '';
  let textAreaAskQuestion = '';

  async function askQuestion() {
    try {
      textAreaAskQuestion = textAreaAskQuestion.trim();
      if (textAreaAskQuestion.trim() == '') {
        return;
      }
      await axios.post('/question/ask', {
        question: textAreaAskQuestion,
        askedBy: data.userDetails?.userId ? data.userDetails.userId : 'guest',
      });
      textAreaAskQuestion = '';
    } catch (error) {
      console.log(error);
    }
  }

  // let currentPath = '';

  onMount(() => {
    // let client = new EventSource(
    //   'http://localhost:3000/api/v1/sse/leaderboard',
    //   { withCredentials: true }
    // );
    // client.onmessage = function (msg) {
    //   console.log(JSON.parse(msg.data));
    // };

    url = window.location.href;

    // currentPath = window.location.pathname;

    
  });
</script>

<slot />

<!-- ask question button -->

<!-- {#if url != ''}
  {#if !url.includes('/auth')}
  <div
      class="fixed-bottom m-2 d-flex justify-content-center text-center shadow-sm mx-auto"
      style="max-width: 170px;"
    >
      <button
        type="button"
        class="btn btn-primary btn-lg fs-6"
        data-bs-toggle="modal"
        data-bs-target="#suggest"
      >
        <img class="me-2" height="30" src="/assets/images/askq.png" alt="" />Ask
        Question
      </button>
    </div>
    {/if}
{/if} -->

  <div
    class="fixed-bottom m-2 d-flex justify-content-center text-center shadow-sm mx-auto"
    style="max-width: 170px;"
  >
    <button
      type="button"
      class="btn btn-primary btn-lg fs-6"
      data-bs-toggle="modal"
      data-bs-target="#suggest"
    >
      <img class="me-2" height="30" src="/assets/images/askq.png" alt="" />Ask
      Question
    </button>
  </div>


<!-- suggest to login -->
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

<!-- Suggest question -->

<div
  class="modal fade"
  id="suggest"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Share your thoughts
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"
              >What do you want to learn as five year old ?</label
            >
            <div class="mb-3 mt-1">
              <label for="message-text" class="col-form-label">Question:</label>
              <textarea
                class="form-control"
                id="message-text"
                bind:value={textAreaAskQuestion}
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
        <button
          on:click={askQuestion}
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal">Send message</button
        >
      </div>
    </div>
  </div>
</div>
