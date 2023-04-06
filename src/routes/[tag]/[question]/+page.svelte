<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { profanity } from '@2toad/profanity';
  import {
    textEditorHtml,
    loginState,
    profilePictureCode,
    streak,
    totalAnswers,
  } from '$lib/store';

  import Right from '$lib/right.svelte';
  import Left from '$lib/left.svelte';
  import Nav from '$lib/navbar.svelte';
  import Footer from '$lib/footer.svelte';

  // import Answers from './components/Answers.svelte';
  import TipTapEditor from '$lib/TipTapEditor.svelte';

  export let data;

  let reRenderTipTapeditor = false;
  let textAreaAnswer = '';
  let textAreaAskQuestion = '';

  let login = data.loginedIn;
  let userProfilePictureCode = data.userDetails?.profilePictureCode;
  let boolAnswered;

  let profileUrl = '/assets/images/profile/';

  let userAnswer = {};
  let gptAnswer = {};

  let sortType = data.sortType;
  let userChoosenTag = data.userChoosenTag;
  let noAnswer = data.noAnswerContent;
  let loadMore = data.loadMore;
  let selectedQuestion = data.question.question;
  let selectedQuestionId = data.question.id;
  let questionUrl = data.questionUrl;
  // let userId = data.userDetails.userId;
  $: answers = [];

  let nextPage = 1;
  let backPage = 1;
  let page = 1;

  let questionFeed = new Map();
  let counter = 0;

  function copyClipboard() {
    navigator.clipboard.writeText(window.location.href);
  }

  function findLikeClassAndTime() {
    answers.forEach((answer) => {
      if (answer.liked == true) {
        answer.likeClass = 'bi bi-heart-fill';
      } else {
        answer.likeClass = 'bi bi-heart';
      }

      let time = Math.floor(Date.now() / 1000);
      let newTime = time - answer.createdAt;
      let timehrs = Math.floor(newTime / 3600);
      let timemin = Math.floor(newTime / 60);
      let timedays = Math.floor(timehrs / 24);
      let timemonth = Math.floor(timedays / 30);
      let timeyear = Math.floor(timemonth / 12);

      if (timemin <= 59) {
        if (timemin == 1) {
          answer.createdAt = timemin + ' minute ago';
        } else {
          answer.createdAt = timemin + ' minutes ago';
        }
      } else if (timehrs <= 24) {
        if (timehrs == 1) {
          answer.createdAt = timehrs + ' hour ago';
        } else {
          answer.createdAt = timehrs + ' hours ago';
        }
      } else if (timedays <= 30) {
        if (timedays == 1) {
          answer.createdAt = timedays + ' day ago';
        } else {
          answer.createdAt = timedays + ' days ago';
        }
      } else if (timemonth <= 12) {
        if (timemonth == 1) {
          answer.createdAt = timemonth + ' month ago';
        } else {
          answer.createdAt = timemonth + ' months ago';
        }
      } else {
        if (timeyear == 1) {
          answer.createdAt = timeyear + ' year ago';
        } else {
          answer.createdAt = timeyear + ' years ago';
        }
      }
    });
  }

  async function getAnswers() {
    try {
      let response;
      if (login == true) {
        response = await axios.get(
          `/answers/${selectedQuestionId}?sort=${sortType}`
        );
      } else {
        response = await axios.get(
          `/guestAnswers/${selectedQuestionId}?sort=${sortType}`
        );
      }

      // console.log(response);
      if (response.status == 204) {
        loadMore = false;
        noAnswer = true;
        return;
      }
      if (response.data.length < 10) {
        loadMore = false;
      }
      noAnswer = false;

      answers = [...response.data];
      findLikeClassAndTime();
    } catch (error) {
      console.log(error);
    }
  }

  async function loadMoreAnswers() {
    try {
      if (loadMore == false) {
        return;
      }
      page++;

      const response = await axios.get(
        `/answers/${selectedQuestionId}?sort=${sortType}&page=${page}`
      );
      // console.log(response);

      if (response.status == 204) {
        loadMore = false;
        return;
      }
      if (response.data.length < 10) {
        loadMore = false;
      }

      answers = [...answers, ...response.data];
      findLikeClassAndTime();
    } catch (error) {
      console.log(error);
    }
  }

  async function likeAnswer(answerId, answeredBy) {
    try {
      let tmp = answeredBy.split('#');
      let name = tmp[0];
      let number = tmp[1];
      await axios.put(`/like/${answerId}?answeredBy=${name}&number=${number}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function cancellikeAnswer(answerId, answeredBy) {
    try {
      let tmp = answeredBy.split('#');

      let name = tmp[0];
      let number = tmp[1];
      await axios.put(
        `/cancelLike/${answerId}?answeredBy=${name}&number=${number}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  function toggleLike(event) {
    //get answer id from event
    let answerId = event.currentTarget.id;

    let index = answers.findIndex((answer) => answer.id == answerId);

    if (answers[index].liked == true) {
      answers[index].liked = false;
      answers[index].likeNumber -= 1;
      answers[index].likeClass = 'bi bi-heart';
      cancellikeAnswer(answerId, answers[index].answeredBy);
    } else {
      answers[index].liked = true;
      answers[index].likeNumber += 1;
      answers[index].likeClass = 'bi bi-heart-fill';
      likeAnswer(answerId, answers[index].answeredBy);
    }
  }

  async function getUserAnswer(questionId) {
    try {
      const response = await axios.get(`/userAnswer/${questionId}`);
      // console.log(response);
      userAnswer = response.data;
      if (response.data.message != 'no_answer') {
        boolAnswered = true;
      } else {
        boolAnswered = false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getGptAnswer(questionId) {
    try {
      const response = await axios.get(`/gptAnswer/${questionId}`);
      // console.log(response);
      gptAnswer = response.data;
      if (response.data.message == 'no_answer') {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function submitGptAnswer(event) {
    textEditorHtml.subscribe((value) => {
      textAreaAnswer = value.getHTML();
    });

    if (profanity.exists(textAreaAnswer)) {
      alert('Usage of Bad Words Found');
      return;
    }
    let id = event.currentTarget.id;

    await axios
      .post(`/admin/gptAnswer/${id}`, {
        answer: textAreaAnswer,
        questionId: id,
      })
      .then(async function (response) {
        // console.log(response);
        reRenderTipTapeditor = true;
        textAreaAnswer = '';
        boolAnswered = true;
        userAnswer = response.data.gptAnswer;
        // streak.set(response.data.streak);
        // totalAnswers.update((n) => n + 1);
        // await getAnswers();
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 400) {
          boolAnswered = true;
        }
      });
  }

  function chooseSort(event) {
    sortType = event.currentTarget.value;
    getAnswers();
  }

  function makeUrl(q, i) {
    let res = q.trim().replace(/\s/g, '-');
    let url = res + '--' + i;
    goto(url, { replaceState: true });
  }

  async function nextQuestion() {
    try {
      let tmpCounter = counter;
      tmpCounter++;
      if (questionFeed.has(tmpCounter)) {
        if (questionFeed.get(tmpCounter) == 'no_content') {
          return;
        }
        counter = tmpCounter;
        let result = questionFeed.get(counter);
        selectedQuestion = result.question;
        selectedQuestionId = result.id;
        makeUrl(selectedQuestion, selectedQuestionId);
        answers = [];
        //check if user is loggedin
        if (login == true) {
          await getUserAnswer(selectedQuestionId);
        }

        await getAnswers();
      } else {
        const response = await axios.get(
          `/changeQuestion/${selectedQuestionId}?tag=${userChoosenTag}&page=${nextPage}&action=next`
        );
        // console.log(response);
        if (response.status == 204) {
          questionFeed.set(tmpCounter, 'no_content');
          return;
        }
        nextPage++;
        response.data.forEach((element) => {
          counter++;
          questionFeed.set(counter, element);
        });
        counter = tmpCounter;
        let result = questionFeed.get(counter);
        selectedQuestion = result.question;
        selectedQuestionId = result.id;
        makeUrl(selectedQuestion, selectedQuestionId);
        answers = [];
        //check if user is loggedin
        if (login == true) {
          await getUserAnswer(selectedQuestionId);
        }

        await getAnswers();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function previousQuestion() {
    try {
      let tmpCounter = counter;
      tmpCounter--;
      if (questionFeed.has(tmpCounter)) {
        if (questionFeed.get(tmpCounter) == 'no_content') {
          return;
        }
        counter = tmpCounter;
        let result = questionFeed.get(counter);
        selectedQuestion = result.question;
        selectedQuestionId = result.id;
        makeUrl(selectedQuestion, selectedQuestionId);
        answers = [];
        //check if user is loggedin
        if (login == true) {
          await getUserAnswer(selectedQuestionId);
        }

        await getAnswers();
      } else {
        const response = await axios.get(
          `/changeQuestion/${selectedQuestionId}?tag=${userChoosenTag}&page=${backPage}&action=back`
        );
        // console.log(response);
        if (response.status == 204) {
          questionFeed.set(tmpCounter, 'no_content');
          return;
        }
        backPage++;
        response.data.forEach((element) => {
          counter--;
          questionFeed.set(counter, element);
        });
        counter = tmpCounter;
        let result = questionFeed.get(counter);
        selectedQuestion = result.question;
        selectedQuestionId = result.id;
        makeUrl(selectedQuestion, selectedQuestionId);
        answers = [];
        //check if user is loggedin
        if (login == true) {
          await getUserAnswer(selectedQuestionId);
        }

        await getAnswers();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function askQuestion() {
    try {
      if (textAreaAskQuestion == '') {
        return;
      }
      await axios.post('/question/ask', {
        question: textAreaAskQuestion,
      });
      textAreaAskQuestion = '';
    } catch (error) {
      console.log(error);
    }
  }

  onMount(async () => {
    if (login == true) {
      await getUserAnswer(selectedQuestionId);

      loginState.set(login);

      loginState.subscribe((value) => {
        login = value;
      });
    }

    await getGptAnswer(selectedQuestionId);

    // sortType = 'trending';
    // await getUserAnswer(selectedQuestionId);

    // Intialize answers array for client side render , this only work on client side
    answers = [...data.answers];
    findLikeClassAndTime();
  });
</script>

<svelte:head>
  <title>{selectedQuestion}? Eli5</title>
  <meta
    name="description"
    content="Question: {selectedQuestion}? Looking for answers to your questions? We have information you need in a easy-to-understand format."
  />
  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content="{selectedQuestion}? Eli5" />
  <meta
    itemprop="description"
    content="Question: {selectedQuestion}? Looking for answers to your questions? We have information you need in a easy-to-understand format."
  />
  <meta
    itemprop="image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1680284821/Frame_17_dvf6ds.png"
  />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://eli5.club/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{selectedQuestion}? Eli5" />
  <meta
    property="og:description"
    content="Question: {selectedQuestion}? Looking for answers to your questions? We have information you need in a easy-to-understand format."
  />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1680284821/Frame_17_dvf6ds.png"
  />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{selectedQuestion}? Eli5" />
  <meta
    name="twitter:description"
    content="Question: {selectedQuestion}? Looking for answers to your questions? We have information you need in a easy-to-understand format."
  />
  <meta
    name="twitter:image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1680284821/Frame_17_dvf6ds.png"
  />
  <!-- can add : dateCreated , answerCount , more than one acceptedAnswer when data.answers have more -->

  {#if data.answers.length > 0}
    {@html `<script type="application/ld+json">${JSON.stringify(
      [
        {
          '@context': 'http://schema.org/',
          '@type': 'QAPage',
          name: selectedQuestion,
          image:
            'https://res.cloudinary.com/djffn8uxx/image/upload/v1680284821/Frame_17_dvf6ds.png',
          mainEntity: {
            '@context': 'http://schema.org',
            '@type': 'Question',
            name: selectedQuestion,
            text: selectedQuestion,
            answerCount: 1,
            acceptedAnswer: {
              '@type': 'Answer',
              upvoteCount: data.answers[0].likeNumber,
              text: data.answers[0].answer,
              url: `https://eli5.club/${questionUrl}`,
              author: {
                '@type': 'Person',
                name: data.answers[0].answeredBy,
              },
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: {
            '@type': 'ListItem',
            position: 1,
            name: userChoosenTag,
            item: `https://eli5.club/${userChoosenTag}`,
          },
        },
      ],
      null,
      2
    )}</script>`}
  {/if}
</svelte:head>

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
        {#if login == true}
          <button
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#suggest"
            ><i class="bi bi-question-circle" /> Ask Question</button
          >
        {/if}
      </h4>

      <nav
        class="navbar navbar-light bg-light fixed-bottom d-lg-none px-4 py-2 shadow-lg border-top rounded"
      >
        <a
          on:click={previousQuestion}
          href={null}
          class="btn btn-primary border-0"
          ><i class="bi bi-arrow-left fs-4" /></a
        >
        {#if login == true}
          <a
            href={null}
            class="btn btn-outline-primary border-0"
            data-bs-toggle="modal"
            data-bs-target="#suggest"
            ><i class="bi bi-plus-circle fs-2" style="color: #0d6efd" /></a
          >
        {/if}
        <a on:click={nextQuestion} href={null} class="btn btn-primary border-0"
          ><i class="bi bi-arrow-right fs-4" /></a
        >
      </nav>

      <!-- <div class="container">

        <div
          class="container mt-3 px-0 mx-0 overflow-auto"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <a
            href="/explore"
            class="btn btn-outline-secondary mx-1 rounded-pill explore text-decoration-none"
            >Explore</a
          >
          <label class="btn btn-outline-primary mx-1" for={userChoosenTag}
            >{userChoosenTag}</label
          >
        </div>

      </div> -->

      <div class="container mt-3">
        <div class="row mb-5">
          <div class="col-sm mb-4 px-0">
            <!-- Deskptop -->
            <div
              class="container p-0 shadow-sm rounded d-none d-lg-block"
              style="background-color: #F3F6FF; border-style: solid; border-color: #3366FF;"
            >
              <div class="row align-items-center py-1">
                <div class="col-2 text-center fs-2 px-0">
                  <a
                    on:click={previousQuestion}
                    class="btn btn-primary"
                    href={null}><i class="bi bi-arrow-left" /></a
                  >
                </div>
                <div class="col-5">
                  <p class="fs-5 fw-bolder my-0">{selectedQuestion} ?</p>
                  <!-- <span class="badge text-bg-primary">Explain like I'm five</span> -->
                </div>
                <div class="col-3 text-end">
                  <button
                    type="button"
                    class={boolAnswered ? 'btn btn-disable' : 'btn btn-primary'}
                    data-bs-toggle="modal"
                    data-bs-target={boolAnswered ? '' : '#writeelif'}
                    ><i class="bi bi-pen" /> Eli5Gpt</button
                  >
                </div>
                <div class="col-2 text-center fs-2 px-0">
                  <a on:click={nextQuestion} class="btn btn-primary" href={null}
                    ><i class="bi bi-arrow-right" /></a
                  >
                </div>
              </div>
            </div>
            <!-- Mobile -->
            <div
              class="container p-2 shadow-sm rounded d-lg-none"
              style="background-color: #F3F6FF; border-style: solid; border-color: #3366FF;"
            >
              <div class="row align-items-center">
                <div class="col-9">
                  <b>{selectedQuestion} ?</b>
                  <span class="badge text-bg-primary"
                    >Explain like I'm five</span
                  >
                </div>
                <div class="col-3 text-end">
                  {#if login == false}
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#OpenWriteLoginModal"
                      ><i class="bi bi-pen" />
                    </button>
                  {:else}
                    <button
                      type="button"
                      class={boolAnswered
                        ? 'btn btn-disable'
                        : 'btn btn-primary'}
                      data-bs-toggle="modal"
                      data-bs-target={boolAnswered ? '' : '#writeelif'}
                      ><i class="bi bi-pen" />
                    </button>
                  {/if}
                </div>
              </div>
            </div>

            <!-- eli5 gpt answer -->
            {#if gptAnswer.answer !== undefined}
              <div class="accordion mt-2" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style="color:#AE5A78"
                        fill="currentColor"
                        class="bi bi-stars me-3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
                        />
                      </svg>
                      <span class="fs-6"> @Eli5GPT</span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {@html gptAnswer.answer}
                    </div>
                  </div>
                </div>
              </div>
            {/if}
            <!-- end here -->

            <!-- user answer for the above question -->
            {#if userAnswer.answer !== undefined && login == true}
              <div class="card border-success mt-2 shadow-sm rounded">
                <div class="card-header bg-white border-light">
                  <img
                    src={profileUrl + 'pic' + userProfilePictureCode + '.png'}
                    alt=""
                    height="30"
                  />
                  <b class="small">{userAnswer.answeredBy}</b> &emsp;
                  <span class="badge rounded-pill bg-success">Your Answer</span>
                </div>
                <div class="card-body text-secondary my-0 py-0">
                  <p class="card-text m-0 py-0 small text-secondary">
                    {@html userAnswer.answer}
                  </p>
                </div>
                <div class="card-body text-secondary my-1 py-0">
                  <input
                    type="button"
                    class="btn-check"
                    id={userAnswer.id}
                    autocomplete="off"
                  />
                  <small class="text-muted">{userAnswer.likeNumber} likes</small
                  > &ensp;
                </div>
              </div>
            {/if}
            <!-- end here user answer  -->
            {#if noAnswer != true}
              <div class="container mt-3">
                <div class="row align-items-center">
                  <div class="col-12">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        on:change={chooseSort}
                        class="btn-check"
                        name="radio"
                        id="radio1"
                        value="trending"
                        autocomplete="off"
                        checked
                      />
                      <label class="btn btn-outline-primary" for="radio1"
                        >Trending</label
                      >

                      <input
                        type="radio"
                        on:change={chooseSort}
                        class="btn-check"
                        name="radio"
                        id="radio3"
                        value="lastest"
                        autocomplete="off"
                      />
                      <label class="btn btn-outline-primary" for="radio3"
                        >Latest</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            {/if}

            {#if noAnswer == true}
              <div class="containe pt-2">
                <img
                  src="/assets/images/noanswer.png"
                  class="img-fluid"
                  alt="noanswer"
                />
              </div>
            {/if}

            {#each answers as answer}
              <div class="card border-light mt-4 shadow-sm rounded">
                <div class="card-header bg-white border-light">
                  <img
                    src={profileUrl +
                      'pic' +
                      answer.profilePictureCode +
                      '.png'}
                    alt=""
                    height="30"
                  />
                  <b class="small">{answer.answeredBy}</b> &emsp;
                  <small class="text-muted">{answer.createdAt}</small>
                </div>
                <div class="card-body text-secondary pb-1">
                  <p class="card-text small text-secondary">
                    {@html answer.answer}
                  </p>
                </div>
                <div class="card-body text-secondary pt-0">
                  {#if login == true}
                    <input type="button" class="btn-check" id={answer.id} />
                    <label
                      style="border-radius: 100%;"
                      class="btn btn-outline-primary"
                      for={answer.id}
                      id={answer.id}
                      on:click={toggleLike}
                      on:keydown={null}><i class={answer.likeClass} /></label
                    >
                    <small class="text-muted">{answer.likeNumber} likes</small>
                  {:else}
                    <input type="button" class="btn-check" id={answer.id} />
                    <label
                      style="border-radius: 100%;"
                      class="btn btn-outline-primary"
                      for={answer.id}
                      id={answer.id}
                      data-bs-toggle="modal"
                      data-bs-target="#OpenWriteLoginModal"
                      on:keydown={null}><i class={answer.likeClass} /></label
                    >
                    <small class="text-muted">{answer.likeNumber} likes</small>
                  {/if}

                  <!-- like button for answer , that capture png  -->
                  <!-- start here -->
                  <!-- &ensp; -->
                  <!-- <label
                    style="border-radius: 100%;"
                    class="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#share"
                  >
                    <i class="bi bi-share" />
                  </label>
                  <small class="text-muted">Share</small> &ensp; -->
                  <!-- end here -->
                </div>
              </div>
            {/each}

            {#if loadMore != false}
              <div class="container text-center mt-3 mb-4">
                <button
                  on:click={loadMoreAnswers}
                  type="button"
                  class="btn btn-outline-primary mx-2 rounded-pill"
                  ><i class="bi bi-plus" />See More</button
                >
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-3">
      <Right />
    </div>
  </div>
</div>

<!-- Mobile Bootom NavBar -->

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

<Footer />

{#if login == true}
  <!-- Write Elif Modal -->
  <div
    class="modal fade"
    id="writeelif"
    tabindex="-1"
    aria-labelledby="writeeliflabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <img
            src={profileUrl + 'pic' + userProfilePictureCode + '.png'}
            alt=""
            height="30"
          />
          <h6 class="modal-title mx-1 ms-2" id="exampleModalLabel">
            {selectedQuestion} ?
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          {#key reRenderTipTapeditor}
            <TipTapEditor />
          {/key}

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              id={selectedQuestionId}
              on:click={submitGptAnswer}>Eli5Gpt it</button
            >
          </div>
          <div
            class="alert alert-primary alert-dismissible fade show mt-3"
            role="alert"
            style=" border-style: solid; border-color: #3366FF;"
          >
            <strong>Approach to write the Answer</strong>

            <ul>
              <li>State it: State the idea clearly, in a few sentences.</li>
              <li>
                Elaborate: Explain the idea further in your own words. Elaborate
                on the concept in a paragraph or less.
              </li>
              <li>
                Exemplify: Provide concrete examples (and counter-examples, if
                necessary).
              </li>
              <li>Summarise: Summarise your explanation.</li>
            </ul>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Answers share button modal  -->

<!-- <div
  class="modal fade"
  id="share"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          Break it down like a funky beat: Share this ELI5!
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <div class="card">
          <div class="card-body">
            <div class="contianer">
              <img
                src="/assets/images/profile/pic1.png"
                width="10%"
                class="img-fluid"
              /> <span>@ritik_cool</span>
            </div>
            <h5 class="card-title">
              Why do we have different timezones within the same country ?
            </h5>
            <p class="card-text">
              Earth is divided into 24 Time zones so a large country can be part
              of multiple time zones. That is the main reason why some countries
              have multiple time zones. For example, if a country passes through
              GMT, 15 degrees east, 30 degrees west then the time zones will be
              GMT, GMT + 1, GMT -2.
            </p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#" class="btn btn-primary">Share</a>
      </div>
    </div>
  </div>
</div> -->
<style>
  .tags {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .tags::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  /* .toast-container {
    z-index: 10000;
  }
  .toast {
    color: #0f5132;
    background: #d1e7dd;
  }
  .toast-header {
    color: #0f5132;
    background: #ffffff;
  }
  .toastclose {
    color: #ffffff;
  } */
</style>
