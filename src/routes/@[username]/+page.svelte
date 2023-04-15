<script>
  import Right from '$lib/right.svelte';
  import Left from '$lib/left.svelte';
  import Nav from '$lib/navbar.svelte';
  import { goto } from '$app/navigation';
  import { profileUrl } from '$lib/vars';
  import axios from 'axios';
  import { BaseUrl } from '../../lib/vars.js';
  import { onMount } from 'svelte';
  export let data;

  let login = data.loginedIn;

  let username = data.userName;
  let userJoinDate;
  let uniqueAliasOfUser = data.userDetails?.uniqueAlias;

  let firstName = data.userProfile.firstName;
  let uniqueAlias = data.userProfile.uniqueAlias;
  let profilePictureCode = data.userProfile.profilePictureCode;
  let bio = data.userProfile.bio;
  let createdAt = data.userProfile.createdAt;
  let totalAnswers = data.userProfile.totalAnswers;
  let totalLikes = data.userProfile.totalLikes;
  let streak = data.userProfile.streak;

  let twitterUrl = data.userProfile?.twitterUrl;
  let linkedinUrl = data.userProfile?.linkedinUrl;
  let instagramUrl = data.userProfile?.instagramUrl;

  let editUniqueAlias = '';
  let editTwitter = '';
  let editLinkedIn = '';
  let editInstagram = '';
  let editBio = bio;

  let inviteUrl = `eli5.club/?invite=${uniqueAlias}`;

  let showRules = false;

  function canclSubmitProfile() {
    editUniqueAlias = '';
    editTwitter = '';
    editLinkedIn = '';
    editInstagram = '';
    editBio = bio;
  }

  function copyClipboardShareProfile() {
    navigator.clipboard.writeText(window.location.href);
  }

  function copyClipboardShareInvite() {
    navigator.clipboard.writeText(inviteUrl);
    toastInstance1.show();
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
    editProfile.bio = editBio;

    if (editUniqueAlias != '') {
      editUniqueAlias = editUniqueAlias.trim();
      if (usernameReg.test(editUniqueAlias) == false) {
        alert('Username is not Correct');
        return;
      }
      if (numberReg.test(editUniqueAlias)) {
        alert('Username cannot have all numbers');
        return;
      }
      editProfile.uniqueAlias = editUniqueAlias;
    }
    if (editTwitter != '') {
      if (editTwitter.includes('twitter.com/') == false) {
        alert('Wrong twitter url');
        return;
      }
      editProfile.twitterUrl = editTwitter;
    }
    if (editLinkedIn != '') {
      if (editLinkedIn.includes('linkedin.com/') == false) {
        alert('Wrong linkedIn url');
        return;
      }
      editProfile.linkedinUrl = editLinkedIn;
    }
    if (editInstagram != '') {
      if (editInstagram.includes('instagram.com/') == false) {
        alert('Wrong instagram url');
        return;
      }
      editProfile.instagramUrl = editInstagram;
    }

    await axios
      .put(`${BaseUrl}/userDetails`, editProfile)
      .then(function (response) {
        uniqueAlias = editUniqueAlias != '' ? editUniqueAlias : uniqueAlias;

        // goto(`@${uniqueAlias}`, { replaceState: true });

        // bio = editBio;
        // twitterUrl = editTwitter != '' ? editTwitter : twitterUrl;
        // linkedinUrl = editLinkedIn != '' ? editLinkedIn : linkedinUrl;
        // instagramUrl = editInstagram != '' ? editInstagram : instagramUrl;
        // editUniqueAlias = '';
        // editTwitter = '';
        // editLinkedIn = '';
        // editInstagram = '';

        window.location.replace(`/@${uniqueAlias}`);
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

  // onMount(() => {
  //   let theDate = new Date(createdAt);
  //   userJoinDate = theDate.toDateString();
  // });

  let toastInstance1;

  onMount(() => {
    toastInstance1 = new bootstrap.Toast(
      document.querySelector('.invitetoast')
    );
  });

  if (bio == '') {
    bio =
      'Welcome to my social media page where I break down complex concepts in a way thats easy to understand. Ask me your questions and lets learn together!';
  }
</script>

<svelte:head>
  <title>{firstName}'s World - Thoughts, Answer and more @{uniqueAlias}</title>
  <!-- Get clear, concise explanations of -->
  <meta name="description" content={bio} />
  <!-- Google / Search Engine Tags -->
  <meta
    itemprop="name"
    content="{firstName}'s World -  Thoughts, Answer and more @{uniqueAlias}"
  />
  <meta itemprop="description" content={bio} />
  <meta
    itemprop="image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1681573467/Frame_45_q2keus.png"
  />
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://eli5.club/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="{firstName}'s World -  Thoughts, Answer and more @{uniqueAlias}"
  />
  <meta property="og:description" content={bio} />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1681573467/Frame_45_q2keus.png"
  />
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="{firstName}'s World -  Thoughts, Answer and more @{uniqueAlias}"
  />
  <meta name="twitter:description" content={bio} />
  <meta
    name="twitter:image"
    content="https://res.cloudinary.com/djffn8uxx/image/upload/v1681573467/Frame_45_q2keus.png"
  />
</svelte:head>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div
    class="toast align-items-center text-bg-success border-0 invitetoast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">Invite link copied start sharing NOW!</div>
      <button
        type="button"
        class="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      />
    </div>
  </div>
</div>

<Nav {data} />

<div class="container mt-2">
  <div class="row">
    <div class="col-sm-3">
      <Left {data} />
    </div>

    <div class="col-sm-6 mb-5">
      <div
        class="card mb-2 mt-2 shadow-sm border position-relative p-2 rounded-4"
      >
        <div class="row g-0 p-1">
          <div class="col-2 m-auto">
            <img
              src={profileUrl + 'pic' + profilePictureCode + '.png'}
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="col-10">
            <div class="card-body">
              <h5 class="card-title fw-bolder">{firstName}</h5>
              <p class="card-text my-1 fw-light">@{uniqueAlias}</p>
              <p class="card-text">
                <small class="text-primary"
                  >Joined On: {new Date(createdAt * 1000).toLocaleDateString(
                    'en-GB'
                  )}</small
                >
              </p>
            </div>
          </div>
        </div>
        <div class="container my-2">
          <lead class="text-secondary fw-semibold">Eli5'ed bio</lead>

          {#if bio == ''}
            <p class="card-text fw-light">
              I simplify complex topics in a way that even a 5-year-old can
              understand.I strive to explain things in a clear and concise
              manner.
            </p>
          {:else}
            <p class="card-text fw-light">{bio}</p>
          {/if}

          {#if login == true}
            {#if uniqueAliasOfUser == username}
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#editprofile"
                data-bs-whatever="@mdo"
                class="btn btn-outline-primary card-link position-absolute top-0 end-0 m-2"
                ><i class="bi bi-pen" /></a
              >
            {/if}
          {/if}
        </div>
      </div>

      <!-- <div class="card my-4 shadow-sm border-light">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Edit Bio</a>
          </div>
        </div> -->

      <div class="conatiner my-4 d-flex gap-2 justify-content-center flex-wrap">
        <span
          class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4"
        >
          <img
            class="me-1"
            height="30"
            src="/assets/images/curious.png"
            alt=""
          />Curious
        </span>
        <span
          class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4"
        >
          <img
            class="me-1"
            height="30"
            src="/assets/images/rookie.png"
            alt=""
          />Rookie
        </span>
        <span
          class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4"
        >
          <img
            class="me-1"
            height="30"
            src="/assets/images/brainy.png"
            alt=""
          />Brainy
        </span>
        {#if totalAnswers > 1}
          <span
            class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4"
          >
            <img
              class="me-1"
              height="30"
              src="/assets/images/expert.png"
              alt=""
            />Expert
          </span>
        {/if}
        {#if totalLikes > 1}
          <span
            class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4"
          >
            <img
              class="me-1"
              height="30"
              src="/assets/images/master.png"
              alt=""
            />Master
          </span>
        {/if}
        {#if streak > 2}
          <span
            class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4"
          >
            <img
              class="me-1"
              height="30"
              src="/assets/images/guru.png"
              alt=""
            />Guru
          </span>
        {/if}
      </div>

      <div class="container my-4">
        <div class="row g-2">
          <div class="col-4">
            <div class="p-3 border rounded-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="fill:#000"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pen-fill text-primary"
                viewBox="0 0 16 16"
              >
                <path
                  d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
                />
              </svg>
              {totalAnswers} Answers
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border rounded-4 shadow-sm">
              <i class="bi bi-heart-fill" style="color:#F44336" />
              {totalLikes} Love reacts
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border rounded-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="fill:#FC5620"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-fire text-primary"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
                />
              </svg>
              {streak} Streaks
            </div>
          </div>
        </div>
      </div>

      <div class="container my-4">
        <div
          on:click={copyClipboardShareInvite}
          on:keydown={null}
          style="cursor:pointer"
          class="alert alert-ligth text-primary shadow-sm border-primary rounded-4"
          role="alert"
        >
          <b
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clipboard-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"
              />
              <path
                fill-rule="evenodd"
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm4 5.982c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"
              />
            </svg>
          </b> <u> {inviteUrl}</u>
        </div>
      </div>

      <!-- <div class="container my-4">
          <h6>Member Joined via Invite</h6>
          <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Lokesh</div>
                  @deve-lokesh-18728
                </div>
                <span class="badge bg-success rounded-pill">Active</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Dhruv</div>
                  @lover-dhruv-18612
                </div>
                <span class="badge bg-success rounded-pill">Active</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Saurabh</div>
                  @sup-saurabh-1926
                </div>
                <span class="badge bg-danger rounded-pill">Inactive</span>
              </li>
            </ol>
      </div> -->

      <div class="container my-4">
        <div class="row g-2">
          <div class="col-4">
            <div class="p-3 border rounded-4 shadow-sm">
              {#if instagramUrl}
                <a href={instagramUrl} class="text-decoration-none text-dark">
                  <i class="bi bi-instagram" style="color:#D02C77" /> Instagram
                </a>
              {:else}
                <i class="bi bi-instagram" style="color:#808080" /> Instagram
              {/if}
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border rounded-4 shadow-sm">
              {#if twitterUrl}
                <a href={twitterUrl} class="text-decoration-none text-dark">
                  <i class="bi bi-twitter" style="color:#00acee" /> Twitter
                </a>
              {:else}
                <i class="bi bi-twitter" style="color:#808080" /> Twitter
              {/if}
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border rounded-4 shadow-sm">
              {#if linkedinUrl}
                <a href={linkedinUrl} class="text-decoration-none text-dark">
                  <i class="bi bi-linkedin" style="color:#0072b1" /> Linkedin
                </a>
              {:else}
                <i class="bi bi-linkedin" style="color:#808080" /> Linkedin
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-3">
      <Right />
    </div>
  </div>
</div>

<!-- Modal edit profile -->
<div
  class="modal fade"
  id="editprofile"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Explain yourself like I'm five
        </h1>
        <button
          on:click={canclSubmitProfile}
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              maxlength="30"
              placeholder={uniqueAlias}
              bind:value={editUniqueAlias}
              on:focusin={() => (showRules = true)}
              on:focusout={() => (showRules = false)}
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
            <label for="exampleFormControlTextarea1" class="form-label"
              >Eli5 your bio</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              maxlength="200"
              bind:value={editBio}
            />
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-instagram" /></span
              >
              <input
                type="text"
                class="form-control"
                id="instagram"
                bind:value={editInstagram}
                placeholder={instagramUrl ? instagramUrl : 'Instaram URL'}
              />
            </div>
            <p>Example: https://www.instagram.com/eli5/</p>
          </div>
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-linkedin" /></span>
              <input
                type="text"
                class="form-control"
                id="linkedin"
                placeholder={linkedinUrl ? linkedinUrl : 'Linkedin URL'}
                bind:value={editLinkedIn}
              />
            </div>
            <p>Example: https://www.linkedin.com/in/eli5/</p>
          </div>
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-twitter" /></span>
              <input
                type="text"
                class="form-control"
                id="twitter"
                placeholder={twitterUrl ? twitterUrl : 'Twitter URL'}
                bind:value={editTwitter}
              />
            </div>
            <p>Example: https://twitter.com/eli5</p>
          </div>
          <div class="modal-footer">
            <button
              on:click={canclSubmitProfile}
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal">Close</button
            >
            <button
              on:click={submitProfile}
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal">Submit</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Modal edit profile end -->
