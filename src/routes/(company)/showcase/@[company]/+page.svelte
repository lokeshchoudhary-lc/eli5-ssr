<script>
  import axios from 'axios';
  import { onMount } from 'svelte';

  export let data;

  let login = data.logedIn;

  let uniqueAliasOfUser = data?.uniqueAlias;
  let companyName = data.companyName;

  let name = data.companyDetails.name;
  let bio = data.companyDetails.bio;
  let brandColor = data.companyDetails.brandColor;
  let websiteUrl = data.companyDetails.websiteUrl;
  let twitterUrl = data.companyDetails.twitterUrl;
  let linkedinUrl = data.companyDetails.linkedinUrl;
  let facebookUrl = data.companyDetails.facebookUrl;
  let youtubeUrl = data.companyDetails.youtubeUrl;
  let instagramUrl = data.companyDetails.instagramUrl;
  let otherUrl = data.companyDetails.otherUrl;
  let uniqueAlias = data.companyDetails.uniqueAlias;
  let totalLikes = data.companyDetails.totalLikes;
  let profilePictureUrl = data.companyDetails.profilePictureUrl;

  let editname = '';
  let editbio = bio;
  let editbrandColor = '';
  let editwebsiteUrl = '';
  let edittwitterUrl = '';
  let editlinkedinUrl = '';
  let editfacebookUrl = '';
  let edityoutubeUrl = '';
  let editinstagramUrl = '';
  let editotherUrl = '';
  let edituniqueAlias = '';
  let editprofilePictureUrl = '';

  let showRules = false;
  let brandColorOp = brandColor.concat('10');

  let companyId = data.companyDetails.id;

  $: questions = [];

  let textAreaAskQuestion = '';

  async function askQuestion() {
    try {
      textAreaAskQuestion = textAreaAskQuestion.trim();
      if (textAreaAskQuestion.trim() == '') {
        return;
      }
      await axios.post('/question/ask', {
        question: textAreaAskQuestion,
        askedFor: companyId,
      });
      textAreaAskQuestion = '';
    } catch (error) {
      console.log(error);
    }
  }

  function canclSubmitProfile() {
    editname = '';
    editbio = bio;
    editbrandColor = '';
    editwebsiteUrl = '';
    edittwitterUrl = '';
    editlinkedinUrl = '';
    editfacebookUrl = '';
    edityoutubeUrl = '';
    editinstagramUrl = '';
    editotherUrl = '';
    editprofilePictureUrl = '';
    edituniqueAlias = '';
  }

  async function likeCompany() {
    await axios
      .post(`/company/like/${uniqueAlias}`)
      .then(function (response) {
        totalLikes = totalLikes + 1;
      })
      .catch(function (error) {});
  }

  async function submitProfile() {
    //only special character underscore , dot
    //no underscore at start or last
    // no double underscore
    //no dot at start or last
    //no double dot
    let usernameReg =
      /^[a-zA-Z0-9](?!.*?\_{2})(?!.*?\.{2})[\w.]{1,28}[a-zA-Z0-9]$/;
    let numberReg = /^\d+$/;

    let editProfile = {};
    editProfile.bio = editbio;

    if (edituniqueAlias != '') {
      edituniqueAlias = edituniqueAlias.trim();
      if (usernameReg.test(edituniqueAlias) == false) {
        alert('Username is not Correct');
        return;
      }
      if (numberReg.test(edituniqueAlias)) {
        alert('Username cannot have all numbers');
        return;
      }
      editProfile.uniqueAlias = edituniqueAlias;
    }
    if (editprofilePictureUrl != '') {
      editProfile.profilePictureUrl = editprofilePictureUrl;
    }

    if (editname != '') {
      // if (edittwitterUrl.includes('twitter.com/') == false) {
      //   alert('Wrong twitter url');
      //   return;
      // }
      editProfile.name = editname;
    }
    if (editbrandColor != '') {
      // if (edittwitterUrl.includes('twitter.com/') == false) {
      //   alert('Wrong twitter url');
      //   return;
      // }
      editProfile.brandColor = editbrandColor;
    }
    if (editwebsiteUrl != '') {
      // if (edittwitterUrl.includes('twitter.com/') == false) {
      //   alert('Wrong twitter url');
      //   return;
      // }
      editProfile.websiteUrl = editwebsiteUrl;
    }

    if (edittwitterUrl != '') {
      // if (edittwitterUrl.includes('twitter.com/') == false) {
      //   alert('Wrong twitter url');
      //   return;
      // }
      editProfile.twitterUrl = edittwitterUrl;
    }
    if (editlinkedinUrl != '') {
      // if (editlinkedinUrl.includes('linkedin.com/') == false) {
      //   alert('Wrong linkedIn url');
      //   return;
      // }
      editProfile.linkedinUrl = editlinkedinUrl;
    }
    if (editinstagramUrl != '') {
      // if (editinstagramUrl.includes('instagram.com/') == false) {
      //   alert('Wrong instagram url');
      //   return;
      // }
      editProfile.instagramUrl = editinstagramUrl;
    }
    if (edityoutubeUrl != '') {
      // if (edityoutubeUrl.includes('instagram.com/') == false) {
      //   alert('Wrong instagram url');
      //   return;
      // }
      editProfile.youtubeUrl = edityoutubeUrl;
    }
    if (editfacebookUrl != '') {
      // if (editinstagramUrl.includes('instagram.com/') == false) {
      //   alert('Wrong instagram url');
      //   return;
      // }
      editProfile.facebookUrl = editfacebookUrl;
    }
    if (editotherUrl != '') {
      // if (editinstagramUrl.includes('instagram.com/') == false) {
      //   alert('Wrong instagram url');
      //   return;
      // }
      editProfile.otherUrl = editotherUrl;
    }

    await axios
      .put(`/company`, editProfile)
      .then(function (response) {
        uniqueAlias = edituniqueAlias != '' ? edituniqueAlias : uniqueAlias;

        // goto(`@${uniqueAlias}`, { replaceState: true });

        window.location.replace(`/showcase/@${uniqueAlias}`);
        // show successfull toast
      })
      .catch(function (error) {
        // error.response.data == 'exist'
        console.log(error);
        if (error.response.status == 400) {
          alert('Username already exist');
          return;
        }
      });
  }

  onMount(async () => {
    const questionsRes = await axios.get(`/companyQuestions/${companyId}`);

    if (questionsRes.status == 204) {
      return;
    }
    questions = [...questionsRes.data];
  });
</script>

<svelte:head>
  <title>{name} Eli5</title>
  <!-- Get clear, concise explanations of -->
  <meta name="description" content="Know how {name} works in Eli5 way. {bio}" />
  <!-- Google / Search Engine Tags -->
  <meta
    itemprop="name"
    content="{name} Eli5"
  />
  <meta itemprop="description" content="Know how {name} works in Eli5 way. {bio}" />
  <meta
    itemprop="image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1682400348/Frame_46_dltexa.webp"
  />
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://eli5.club/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="{name} Eli5"
  />
  <meta property="og:description" content="Know how {name} works in Eli5 way. {bio}" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1682400348/Frame_46_dltexa.webp"
  />
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="{name} Eli5"
  />
  <meta name="twitter:description" content="Know how {name} works in Eli5 way. {bio}" />
  <meta
    name="twitter:image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1682400348/Frame_46_dltexa.webp"
  />
</svelte:head>


<section
  class="h-100 gradient-custom-2"
  style="--brand-color: {brandColor}; --brand-color-op: {brandColorOp}"
>
  <div class="container pt-3 pb-5 h-100">
    <nav
      style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a
            href="/showcase"
            class="link-primary link-offset-2 link-underline-opacity-100-hover"
            >Explore</a
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">{name}</li>
      </ol>
    </nav>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-10 position-relative">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row backdrop">
            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img
                src={profilePictureUrl}
                alt="Generic placeholder"
                class="img-fluid img-thumbnail margin-top mb-2"
                style="width: 150px; z-index: 1"
              />
            </div>
          </div>
          <div class="p-3 text-black">
            <div class="d-flex justify-content-end text-center py-0">
              <div class="m-1 position-absolute top-0 end-0">
                {#if login == true}
                  {#if uniqueAliasOfUser == companyName}
                    <button
                      type="button"
                      class="btn btn-outline-danger like-btn"
                      style="z-index: 1;"
                      data-bs-toggle="modal"
                      data-bs-target="#profileModal"
                    >
                      <i class="bi bi-pen" />
                    </button>
                  {/if}
                {/if}
              </div>
              <div class="mx-1">
                <button
                  type="button"
                  on:click={likeCompany}
                  class="btn btn-outline-danger like-btn"
                  style="z-index: 1;"
                >
                  <i class="bi bi-heart-fill" />
                  {totalLikes} Love
                </button>
              </div>
            </div>
          </div>

          <div class="card-body py-0">
            <div class="ms-3">
              <h3 class="fw-bolder">
                {name}
                <i
                  onclick={`window.location.href = '${websiteUrl}'`}
                  class="website bi bi-box-arrow-up-right fs-6 align-top"
                />
              </h3>

              <lead>@{uniqueAlias}</lead>
            </div>
          </div>

          <div class="card-body">
            <div class="mb-2 border border-light rounded p-4 shadow-sm">
              <p class="lead fw-bold mb-1">
                Eli5 what does <span class="brand-name"> {name} </span> do?
              </p>
              <div>
                <p class="font-italic mb-1">
                  {bio}
                </p>
              </div>
            </div>

            <div class="container my-4">
              <div class="row g-2">
                {#if instagramUrl}
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                      <a href={instagramUrl} class="text-decoration-none">
                        <i class="bi bi-instagram" style="color:#D02C77" /> Instagram
                      </a>
                    </div>
                  </div>
                {/if}
                {#if twitterUrl}
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                      <a href={twitterUrl} class="text-decoration-none">
                        <i class="bi bi-twitter" style="color:#00acee" /> Twitter
                      </a>
                    </div>
                  </div>
                {/if}
                {#if linkedinUrl}
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                      <a href={linkedinUrl} class="text-decoration-none">
                        <i class="bi bi-linkedin" style="color:#0072b1" /> Linkedin
                      </a>
                    </div>
                  </div>
                {/if}
                {#if facebookUrl}
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                      <a href={facebookUrl} class="text-decoration-none">
                        <i class="bi bi-facebook" style="color:#3b5998" /> Facebook
                      </a>
                    </div>
                  </div>
                {/if}

                {#if youtubeUrl}
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                      <a href={youtubeUrl} class="text-decoration-none">
                        <i class="bi bi-youtube" style="color:#FF0000" /> Youtube
                      </a>
                    </div>
                  </div>
                {/if}

                {#if otherUrl}
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                      <a href={otherUrl} class="text-decoration-none">
                        <i class="bi bi-link-45deg" style="color:#FF0000" /> Other
                        link
                      </a>
                    </div>
                  </div>
                {/if}
              </div>
            </div>

            {#if questions.length > 0}
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <p class="lead fw-bold mb-0">Member also asked?</p>
                <!-- <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p> -->
              </div>
            {/if}

            <div class="container p-0">
              {#each questions as question}
                <div class="card my-2 border border-secondary-subtle">
                  <div class="card-header border-0 pb-1">
                    <span class="badge rounded-pill tags"
                      >{question?.tag ? question.tag : 'Eli5'}</span
                    >
                  </div>
                  <div class="card-body pt-2">
                    <h6 class="card-title fw-normal">
                      {question.question}?
                    </h6>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container text-center mb-5 pb-5">
    <p><a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Logout</a></p>
  </div> -->
</section>

<!-- Profile edit modal -->
<div
  class="modal fade"
  id="profileModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          on:click={canclSubmitProfile}
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <div class="row justify-content-center">
          <div class="col">
            <h3 class="mb-2">Enter Company Profile Details</h3>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  bind:value={editname}
                  placeholder={name}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  bind:value={edituniqueAlias}
                  placeholder={uniqueAlias}
                  on:focusin={() => (showRules = true)}
                  on:focusout={() => (showRules = false)}
                  required
                />
                {#if showRules == true}
                  <p class="small mt-2 text-primary">Username rules</p>
                  <blockquote class="blockquote-footer">
                    <ul>
                      <li class="my-0">
                        only specail characters allowed are "_" or "."
                      </li>
                      <li class="my-0">
                        username can't have two or more consecutive "_" or "."
                      </li>
                      <li class="my-0">
                        username can't start or end with "_" or "."
                      </li>
                      <li class="my-0">
                        username can't have spaces(white-space character)
                      </li>
                    </ul>
                  </blockquote>
                {/if}
              </div>
              <div class="mb-3">
                <label for="urlInput">Website Url</label>
                <input
                  type="url"
                  class="form-control"
                  id="urlInput"
                  placeholder={websiteUrl
                    ? websiteUrl
                    : 'https://www.example.com'}
                  bind:value={editwebsiteUrl}
                />
              </div>
              <div class="mb-3">
                <label for="logo" class="form-label">Logo Url <small class="text-primary"> - Please upload a square logo</small></label>
                <input
                  type="url"
                  class="form-control"
                  id="logoUrl"
                  placeholder={profilePictureUrl}
                  bind:value={editprofilePictureUrl}
                />
                <!-- <input
                  type="file"
                  class="form-control"
                  id="logo"
                  name="logo"
                  bind:value={editprofilePictureUrl}
                  accept=".png"
                /> -->
                <!-- <small class="text-muted"
                  >File must be in PNG format and under 1MB.</small
                > -->
              </div>
              <div class="mb-3">
                <label for="exampleColorInput" class="form-label"
                  >Color picker</label
                >
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="exampleColorInput"
                  title="Choose your color"
                  bind:value={editbrandColor}
                />
              </div>
              <div class="mb-3">
                <label for="bio" class="form-label">Bio</label>
                <textarea
                  class="form-control"
                  id="bio"
                  name="bio"
                  rows="3"
                  bind:value={editbio}
                />
              </div>
              <div class="mb-3">
                <label for="instagram" class="form-label">Instagram URL</label>
                <input
                  type="url"
                  class="form-control"
                  id="instagram"
                  name="instagram"
                  placeholder={instagramUrl
                    ? instagramUrl
                    : 'https://www.instagram.com/username'}
                  bind:value={editinstagramUrl}
                />
              </div>
              <div class="mb-3">
                <label for="twitter" class="form-label">Twitter URL</label>
                <input
                  type="url"
                  class="form-control"
                  id="twitter"
                  name="twitter"
                  placeholder={twitterUrl
                    ? twitterUrl
                    : 'https://twitter.com/username'}
                  bind:value={edittwitterUrl}
                />
              </div>
              <div class="mb-3">
                <label for="linkedin" class="form-label">LinkedIn URL</label>
                <input
                  type="url"
                  class="form-control"
                  id="linkedin"
                  name="linkedin"
                  placeholder={linkedinUrl
                    ? linkedinUrl
                    : 'https://www.linkedin.com/in/username'}
                  bind:value={editlinkedinUrl}
                />
              </div>
              <div class="mb-3">
                <label for="facebook" class="form-label">Facebook URL</label>
                <input
                  type="url"
                  class="form-control"
                  id="facebook"
                  name="facebook"
                  placeholder={facebookUrl
                    ? facebookUrl
                    : 'https://www.facebook.com/username'}
                  bind:value={editfacebookUrl}
                />
              </div>
              <div class="mb-3">
                <label for="youtube" class="form-label">YouTube URL</label>
                <input
                  type="url"
                  class="form-control"
                  id="youtube"
                  name="youtube"
                  placeholder={youtubeUrl
                    ? youtubeUrl
                    : 'https://www.youtube.com/channel/username'}
                  bind:value={edityoutubeUrl}
                />
              </div>
              <div class="mb-3">
                <label for="other" class="form-label">Other Links</label>
                <input
                  type="url"
                  class="form-control"
                  id="other"
                  name="other"
                  placeholder={otherUrl ? otherUrl : 'https://www.example.com'}
                  bind:value={editotherUrl}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          on:click={canclSubmitProfile}
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal">Close</button
        >
        <button
          on:click={submitProfile}
          class="btn btn-success"
          type="button"
          data-bs-dismiss="modal">Submit</button
        >
      </div>
    </div>
  </div>
</div>

<!-- ask question button -->
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
    <img class="me-2" height="30" src="/assets/images/askq.webp" alt="" />Ask
    Question
  </button>
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
              >What do you want to ask {name} as five year old ?</label
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

<style>
  .margin-top {
    margin-top: 3rem;
  }

  .backdrop {
    background: var(--brand-color-op);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
  }

  .like-btn {
    border-color: var(--brand-color);
    color: var(--brand-color);
  }
  .like-btn:hover {
    border-color: var(--brand-color);
    background-color: var(--brand-color);
    color: white;
  }

  .brand-name {
    color: var(--brand-color);
  }

  .website {
    color: var(--brand-color);
  }

  .tags {
    color: var(--brand-color);
    border-color: var(--brand-color);
    border-style: solid;
    border-width: 1px;
  }
</style>
