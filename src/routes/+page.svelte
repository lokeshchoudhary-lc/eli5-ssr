<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { profileUrl } from '../lib/vars';

  import Footer from '$lib/footer.svelte';
  import Right from '$lib/right.svelte';
  import Left from '$lib/left.svelte';
  import Nav from '$lib/navbar.svelte';

  export let data;

  let greet;
  let icon;

  let bestAnswer = data.feed.data.bestAnswer;
  let topTags = data.feed.data.topTags;
  let topQuestions = data.feed.data.topQuestions;
  let banners = data.feed.data.banner;

  let page = 1;
  let loadMore = data.loadMore;
  $: allTags = data.tags.data;

  async function loadMoreTags() {
    try {
      if (loadMore == false) {
        return;
      }
      page++;
      const response = await axios.get(`/tags?page=${page}`);
      // console.log(response);

      if (response.status == 204) {
        loadMore = false;
        return;
      }
      if (response.data.length < 10) {
        loadMore = false;
      }

      allTags = [...allTags, ...response.data];
    } catch (error) {
      console.log(error);
    }
  }

  function greetUser() {
    let today = new Date();
    let curHr = today.getHours();
    if (curHr < 12) {
      icon = 'brightness-alt-high';
      greet = 'Good morning';
    } else if (curHr < 18) {
      icon = 'brightness-high';
      greet = 'Good afternoon';
    } else {
      icon = 'moon';
      greet = 'Good evening';
    }
  }

  function makeUrl(q, i) {
    let res = q.trim().replace(/\s/g, '-');
    return res + '--' + i;
  }

  onMount(() => {
    greetUser();
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Nav {data} />

<div class="container mt-3">
  <div class="row">
    <div class="col-sm-3" id="slide">
      <Left />
    </div>
    <div class="col-sm-6">
      <!-- New design start -->
      <div class="container px-0">
        <!-- Desktop -->
        <div class="d-flex flex-nowrap justify-content-start overflow-auto">
          <a
            href="/explore"
            class="btn btn-outline-secondary mx-1 my-1 rounded-pill explore text-decoration-none"
            >Explore</a
          >

          <!-- activate it later (CA) -->
          <!-- <a
            href="/org"
            class="btn btn-outline-warning mx-1 my-1 rounded-pill text-decoration-none"
            >🔥 Engineering College Bikaner</a
          > -->

          <!-- {#each allTags as tag}
            <input type="button" class="btn-check" id={tag.tag} />
              <label class="btn btn-outline-primary mx-2 my-2" for={tag.tag}
                >{tag.tag}</label
              >
            <a
              href={`/${tag.tag}`}
              class="btn btn btn-outline-primary mx-2 my-2">{tag.tag}</a
            >
          {/each}
          {#if loadMore != false}
            <button
              type="button"
              on:click={loadMoreTags}
              class="btn btn-outline-primary mx-1 rounded-pill explore"
              >More..</button
            >
          {/if} -->
        </div>
      </div>

      <p class="fw-normal"><i class="bi bi-{icon} fs-4" /> {greet}</p>

      <!-- carousel start here -->
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {#each banners as banner, i}
            {#if i == 0}
              <div class="carousel-item active">
                <a
                  class="text-decoration-none link-secondary"
                  href={banner.cta}
                >
                  <div class="card mb-3 shadow-sm round">
                    <div class="row g-0 p-2">
                      <div class="col-2 my-auto">
                        <img
                          src={banner.imageUrl}
                          class="img-fluid rounded-start"
                          width="50px"
                          alt=""
                        />
                      </div>
                      <div class="col-10">
                        <div class="card-body">
                          <p class="card-text small">
                            {banner.contentText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            {:else}
              <div class="carousel-item">
                <a
                  class="text-decoration-none link-secondary"
                  href={banner.cta}
                >
                  <div class="card mb-3 shadow-sm round">
                    <div class="row g-0 p-2">
                      <div class="col-2 my-auto">
                        <img
                          src={banner.imageUrl}
                          class="img-fluid rounded-start"
                          width="50px"
                          alt=""
                        />
                      </div>
                      <div class="col-10">
                        <div class="card-body">
                          <p class="card-text small">
                            {banner.contentText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            {/if}
          {/each}
        </div>
      </div>
      <!-- carousel end here -->
      <p class="fw-normal mb-0">
        <i class="bi bi-sunglasses fs-4" /> Trending categories
      </p>

      <div class="card mb-0 border-0">
        <div class="row g-0">
          <div class="col-12">
            <div class="card-body">
              {#each topTags as tag}
                <!-- <button
                  id={tag}
                  type="button"
                  style="background: #F3F6FF"
                  class="btn btn-outline-primary mb-2 mx-1">{tag}</button
                > -->
                <a href={`/${tag}`} class="btn btn-primary mb-2 mx-1">{tag}</a>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <p class="fw-normal">
        <i class="bi bi-hash fs-4 bold" /> Trending questions
      </p>

      {#each topQuestions as question, i}
        <a
          href={`/${question.tag}/${makeUrl(question.question, question.id)}`}
          class="text-decoration-none"
        >
          <div id={question.id} class="card mb-3 shadow-sm round">
            <div class="row g-0 p-2">
              <div class="col-2 my-auto text-center">
                <p class="lead fw-bold fs-2" style="color:#3366FF">#{i + 1}</p>
              </div>
              <div class="col-10">
                <div class="card-body">
                  <p class="card-text small text-dark">
                    {question.question}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}

      <p class="fw-normal mt-4"><i class="bi bi-suit-heart" /> Best answer</p>

      <a
        href={`/${bestAnswer.tag}/${makeUrl(
          bestAnswer.question,
          bestAnswer.questionId
        )}`}
        class="text-decoration-none"
      >
        <div class="card mb-3 shadow-sm round">
          <h5 class="card-header fs-6 bg-white">
            <img
              src={profileUrl + 'pic' + bestAnswer.profilePictureCode + '.png'}
              alt=""
              height="30"
            />
            {bestAnswer.answeredBy} &ensp;
            <i style="color: #3366FF;" class="bi bi-heart-fill fs-6" />
            <small class="text-muted"> {bestAnswer.likeNumber} likes</small>
          </h5>
          <div class="card-body mt-1 pt-0">
            <small
              ><span class="badge rounded-pill text-bg-primary">Question</span
              ></small
            >
            <h5 class="card-title fs-6 border-bottom py-2">
              {bestAnswer.question}?
            </h5>
            <p class="card-text text-secondary">
              <small>
                <span class="badge rounded-pill text-bg-success mb-1"
                  >Answer</span
                >
                <div>{@html bestAnswer.answer}</div>
              </small>
            </p>
          </div>
        </div>
      </a>

     

      <!-- New design end -->
    </div>
    <div class="col-sm-3 d-none d-lg-block">
      <Right />
    </div>
  </div>
</div>

<Footer />

<style>
  .tags {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .tags::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .explore {
    background: linear-gradient(-45deg, #3366ff, #ffffff, #3366ff, #3366ff);
    background-size: 400% 400%;
    animation: gradient 2s ease infinite;
    animation-iteration-count: 10;
    color: white;
    border-color: #3366ff;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
