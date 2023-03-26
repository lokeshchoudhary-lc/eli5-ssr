<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import Right from '$lib/right.svelte';
  import Left from '$lib/left.svelte';
  import Nav from '$lib/navbar.svelte';
  import Footer from '$lib/footer.svelte';

  export let data;

  $: questions = data.questions;
  let loadMore = data.loadMore;
  let userChoosenTag = data.userChoosenTag;
  let likeCount = data.stats.likeCount ? data.stats.likeCount : 0;
  let answerCount = data.stats.answerCount ? data.stats.answerCount : 0;
  let page = 1;

  function makeUrl(q, i) {
    let res = q.trim().replace(/\s/g, '-');
    return res + '--' + i;
  }

  function copyClipboard() {
    navigator.clipboard.writeText(window.location.href);
  }

  async function loadMoreQuestions() {
    try {
      if (loadMore == false) {
        return;
      }
      page++;
      const response = await axios.get(
        `/questions/${userChoosenTag}?page=${page}`
      );
      // console.log(response);
      if (response.status == 204) {
        loadMore = false;
        return;
      }
      if (response.data.length < 10) {
        loadMore = false;
      }
      response.data.forEach((data, i) => {
        response.data[i].slug = makeUrl(data.question, data.id);
      });
      questions = [...questions, ...response.data];
    } catch (error) {
      console.log(error);
    }
  }
</script>

<Nav {data} />

<div class="container mt-2">
  <div class="row">
    <div class="col-sm-3">
      <Left {data} />
    </div>

    <div class="col-sm-6">
      <h4>
        # {userChoosenTag}
        <button on:click={copyClipboard} class="btn btn-outline-primary"
          ><i class="bi bi-share-fill" /></button
        >
      </h4>

      <div class="container my-3">
        <div class="container pt-0 border-bottom mb-2" id="icon-grid">
          <div class="row row-cols-1 mt-2 p-0">
            <div
              class="col d-flex align-items-start p-2 border border-primary shadow-sm text-primary rounded my-1 mx-1 mx-1 stats"
            >
              <i class="bi bi-pen-fill flex-shrink-0 me-3" />
              <div>
                <p>{answerCount} answers for #{userChoosenTag}</p>
              </div>
            </div>

            <div
              class="col d-flex align-items-start p-2 border border-primary shadow-sm text-primary rounded my-1 mx-1 stats"
            >
              <i class="bi bi-heart-fill flex-shrink-0 me-3" />
              <div>
                <p>{likeCount} likes for #{userChoosenTag}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <p class="lead">
            
          </p> -->
        <div class="list-group w-auto">
          {#each questions as question}
            <a
              href={`/${userChoosenTag}/${question.slug}`}
              class="text-decoration-none"
            >
              <div
                class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
                aria-current="true"
              >
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <p class="mb-0 opacity-75">
                      {question.question}
                    </p>
                  </div>
                  <small class="text-nowrap"
                    ><i
                      class="bi bi-chevron-right"
                      style="font-size: 1.5rem; color: #3366FF;"
                    /></small
                  >
                </div>
              </div>
            </a>
          {/each}
        </div>
        {#if loadMore != false}
          <div class="text-center mt-3">
            <button
              on:click={loadMoreQuestions}
              type="button"
              class="btn btn-outline-primary mx-2 rounded-pill"
              ><i class="bi bi-plus" />See More</button
            >
          </div>
        {/if}
      </div>
    </div>

    <div class="col-sm-3">
      <Right />
    </div>
  </div>
</div>

<Footer />

<style>
  .stats:hover {
    background: #ebf0ff;
  }
</style>
