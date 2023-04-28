<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { companyFirstName, companyEmail, loginState } from '$lib/store';

  let gmail = '';
  let name = '';
  let bio = ' ';
  let brandColor = '#3366ff';
  let websiteUrl = '';
  let twitterUrl = '';
  let linkedinUrl = '';
  let facebookUrl = '';
  let youtubeUrl = '';
  let instagramUrl = '';
  let otherUrl = '';
  let uniqueAlias = '';
  let profilePictureUrl = '';

  let showRules = false;

  async function onSubmit(event) {
    event.preventDefault();

    let usernameReg =
      /^[a-zA-Z0-9](?!.*?\_{2})(?!.*?\.{2})[\w.]{1,28}[a-zA-Z0-9]$/;
    let numberReg = /^\d+$/;

    let editProfile = {};
    editProfile.email = gmail;
    editProfile.name = name;
    editProfile.bio = bio;
    editProfile.brandColor = brandColor;
    editProfile.websiteUrl = websiteUrl;
    editProfile.twitterUrl = twitterUrl;
    editProfile.linkedinUrl = linkedinUrl;
    editProfile.facebookUrl = facebookUrl;
    editProfile.youtubeUrl = youtubeUrl;
    editProfile.instagramUrl = instagramUrl;
    editProfile.otherUrl = otherUrl;
    editProfile.profilePictureUrl = profilePictureUrl;

    uniqueAlias = uniqueAlias.trim();
    if (usernameReg.test(uniqueAlias) == false) {
      alert('Username is not Correct');
      return;
    }
    if (numberReg.test(uniqueAlias)) {
      alert('Username cannot have all numbers');
      return;
    }
    editProfile.uniqueAlias = uniqueAlias;

    name = name.trim();
    if (name == '') {
      alert('Name cannot be empty');
      return;
    }

    await axios
      .post('/company/completeProfile', editProfile)
      .then(function (response) {
        // loginState.set(true);

        // goto('/showcase', { replaceState: true });
        window.location.replace('/showcase');
      })
      .catch(function (error) {
        // uniqueAlias exists already
        if (error.response.status == 400) {
          return alert('Username Already exist');
        }
      });
  }

  onMount(async () => {
    companyEmail.subscribe((value) => {
      gmail = value;
    });

    if (gmail == null) {
      goto('/showcase', { replaceState: true });
    }
  });
</script>

<div class="container-fluid mt-3 mb-5">
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
      <h3 class="mb-2">Enter Company Profile Details</h3>
      <p class="mb-2 text-secondary small">
        Note: You can edit this in the future as well
      </p>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control border border-primary bg-light"
            id="email"
            name="email"
            placeholder={gmail}
            disabled
          />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            bind:value={name}
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
            bind:value={uniqueAlias}
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
            bind:value={websiteUrl}
          />
        </div>
        <div class="mb-3">
          <label for="logo" class="form-label"
            >Logo Url <small class="text-primary">
              - Please upload a square logo</small
            ></label
          >
          <input
            type="url"
            class="form-control"
            id="logoUrl"
            bind:value={profilePictureUrl}
          />
          <!-- <input
            type="file"
            class="form-control"
            id="logo"
            name="logo"
            accept=".png"
          /> -->
          <!-- <small class="text-muted"
            >File must be in PNG format and under 1MB.</small
          > -->
        </div>
        <div class="mb-3">
          <label for="exampleColorInput" class="form-label">Color picker</label>
          <input
            type="color"
            class="form-control form-control-color"
            id="exampleColorInput"
            bind:value={brandColor}
            title="Choose your color"
          />
        </div>
        <div class="mb-3">
          <label for="bio" class="form-label">Bio</label>
          <textarea
            class="form-control"
            id="bio"
            name="bio"
            rows="3"
            bind:value={bio}
            required
          />
        </div>
        <div class="mb-3">
          <label for="instagram" class="form-label">Instagram URL</label>
          <input
            type="url"
            class="form-control"
            id="instagram"
            name="instagram"
            bind:value={instagramUrl}
            placeholder="https://www.instagram.com/username"
          />
        </div>
        <div class="mb-3">
          <label for="twitter" class="form-label">Twitter URL</label>
          <input
            type="url"
            class="form-control"
            id="twitter"
            name="twitter"
            bind:value={twitterUrl}
            placeholder="https://twitter.com/username"
          />
        </div>
        <div class="mb-3">
          <label for="linkedin" class="form-label">LinkedIn URL</label>
          <input
            type="url"
            class="form-control"
            id="linkedin"
            name="linkedin"
            bind:value={linkedinUrl}
            placeholder="https://www.linkedin.com/in/username"
          />
        </div>
        <div class="mb-3">
          <label for="facebook" class="form-label">Facebook URL</label>
          <input
            type="url"
            class="form-control"
            id="facebook"
            name="facebook"
            bind:value={facebookUrl}
            placeholder="https://www.facebook.com/username"
          />
        </div>
        <div class="mb-3">
          <label for="youtube" class="form-label">YouTube URL</label>
          <input
            type="url"
            class="form-control"
            id="youtube"
            name="youtube"
            bind:value={youtubeUrl}
            placeholder="https://www.youtube.com/channel/username"
          />
        </div>
        <div class="mb-3">
          <label for="other" class="form-label">Other Links</label>
          <input
            type="url"
            class="form-control"
            id="other"
            name="other"
            bind:value={otherUrl}
            placeholder="https://www.example.com"
          />
        </div>
        <div class="d-grid pb-5">
          <button on:click={onSubmit} class="btn btn-success" type="button"
            >Submit</button
          >
        </div>
      </form>
    </div>
  </div>
</div>
