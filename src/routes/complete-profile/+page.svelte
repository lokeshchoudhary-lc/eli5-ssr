<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import TempNavBar from '$lib/temp_navbar.svelte';

  import { firstName, email, loginState } from '$lib/store';
  import { websiteUrl } from '$lib/vars';
  import { adjectivesList } from '$lib/adjectivesList';
  import axios from 'axios';

  let gmail = '';
  let username = '';
  let uniqueAlias = '';
  let selectedPic = '';

  function onChange(event) {
    selectedPic = event.currentTarget.value;
  }

  async function onSubmit(event) {
    event.preventDefault();

    if (selectedPic === '') {
      //TODO:TOAST
      alert('Please select a picture');
      return;
    }

    await axios
      .post('/completeProfile', {
        firstName: username,
        email: gmail,
        uniqueAlias: uniqueAlias,
        profilePictureCode: selectedPic,
      })
      .then(function (response) {
        // loginState.set(true);

        // goto('/', { replaceState: true });
        window.location.replace(websiteUrl);
      })
      .catch(function (error) {
        // uniqueAlias exists already ,  generate new
        if (error.response.status == 400) {
          generateUniqueAlias();
        }
      });
  }

  function generate(n) {
    var add = 1,
      max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (n > max) {
      return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ('' + number).substring(add);
  }

  function generateUniqueAlias() {
    let adjective =
      adjectivesList[Math.floor(Math.random() * adjectivesList.length)];
    const randomNumber = generate(6);
    uniqueAlias = adjective + '-' + username + ':' + randomNumber;
  }

  onMount(async () => {
    firstName.subscribe((value) => {
      username = value;
    });

    email.subscribe((value) => {
      gmail = value;
    });

    if (username == null && gmail == null) {
      goto('/', { replaceState: true });
    }

    generateUniqueAlias();
  });
</script>

<svelte:head>
  <title>Complete Profile</title>
</svelte:head>

<TempNavBar />

<div class="container">
  <form>
    <!-- //TODO:CSS:Make This text big but not too big -->
    <legend class="">Complete your profile and start explaining. </legend>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
      <i class="bi bi-check-circle" />
      <div>&nbsp;{gmail}</div>
    </div>

    <div class="input-group mb-3">
      <span
        class="input-group-text"
        id="basic-addon1"
        on:click={generateUniqueAlias}
        on:keydown={null}><i class="bi bi-arrow-repeat" /></span
      >
      <input
        type="text"
        bind:value={uniqueAlias}
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        readonly
      />
    </div>

    <div class="mb-3 d-none d-lg-block">
      <label for="exampleInputEmail1" class="form-label small"
        >Select Avatar</label
      >
      <div class="container parent">
        <div class="row grid-row">
          <!-- first 8 col -->
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img1"
              class="d-none imgbgchk"
              value="1"
            />
            <label for="img1">
              <img src="/assets/images/profile/pic1.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img2"
              class="d-none imgbgchk"
              value="2"
            />
            <label for="img2">
              <img src="/assets/images/profile/pic2.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img3"
              class="d-none imgbgchk"
              value="3"
            />
            <label for="img3">
              <img src="/assets/images/profile/pic3.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img4"
              class="d-none imgbgchk"
              value="4"
            />
            <label for="img4">
              <img src="/assets/images/profile/pic4.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>

          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img5"
              class="d-none imgbgchk"
              value="5"
            />
            <label for="img5">
              <img src="/assets/images/profile/pic5.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img6"
              class="d-none imgbgchk"
              value="6"
            />
            <label for="img6">
              <img src="/assets/images/profile/pic6.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img7"
              class="d-none imgbgchk"
              value="7"
            />
            <label for="img7">
              <img src="/assets/images/profile/pic7.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img8"
              class="d-none imgbgchk"
              value="8"
            />
            <label for="img8">
              <img src="/assets/images/profile/pic8.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
        </div>

        <!-- Next 8 column -->

        <div class="row mt-3">
          <!-- first 8 col -->
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img9"
              class="d-none imgbgchk"
              value="9"
            />
            <label for="img9">
              <img src="/assets/images/profile/pic9.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img10"
              class="d-none imgbgchk"
              value="10"
            />
            <label for="img10">
              <img src="/assets/images/profile/pic10.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img11"
              class="d-none imgbgchk"
              value="11"
            />
            <label for="img11">
              <img src="/assets/images/profile/pic11.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img12"
              class="d-none imgbgchk"
              value="12"
            />
            <label for="img12">
              <img src="/assets/images/profile/pic12.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>

          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img13"
              class="d-none imgbgchk"
              value="13"
            />
            <label for="img13">
              <img src="/assets/images/profile/pic13.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img14"
              class="d-none imgbgchk"
              value="14"
            />
            <label for="img14">
              <img src="/assets/images/profile/pic14.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img15"
              class="d-none imgbgchk"
              value="15"
            />
            <label for="img15">
              <img src="/assets/images/profile/pic15.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackground"
              id="img16"
              class="d-none imgbgchk"
              value="16"
            />
            <label for="img16">
              <img src="/assets/images/profile/pic16.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Avatar -->

    <div class="mb-3 d-block d-sm-none">
      <label for="exampleInputEmail1" class="form-label small"
        >Select Avatar</label
      >
      <div class="container parent">
        <div class="row grid-row">
          <!-- first 8 col -->
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm1"
              class="d-none imgbgchk"
              value="1"
            />
            <label for="imgm1">
              <img src="/assets/images/profile/pic1.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm2"
              class="d-none imgbgchk"
              value="2"
            />
            <label for="imgm2">
              <img src="/assets/images/profile/pic2.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm3"
              class="d-none imgbgchk"
              value="3"
            />
            <label for="imgm3">
              <img src="/assets/images/profile/pic3.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
        </div>
        <div class="row grid-row">
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm4"
              class="d-none imgbgchk"
              value="4"
            />
            <label for="imgm4">
              <img src="/assets/images/profile/pic4.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>

          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm5"
              class="d-none imgbgchk"
              value="5"
            />
            <label for="imgm5">
              <img src="/assets/images/profile/pic5.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm6"
              class="d-none imgbgchk"
              value="6"
            />
            <label for="imgm6">
              <img src="/assets/images/profile/pic6.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
        </div>

        <div class="row grid-row">
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm7"
              class="d-none imgbgchk"
              value="7"
            />
            <label for="imgm7">
              <img src="/assets/images/profile/pic7.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm8"
              class="d-none imgbgchk"
              value="8"
            />
            <label for="imgm8">
              <img src="/assets/images/profile/pic8.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>

          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm9"
              class="d-none imgbgchk"
              value="9"
            />
            <label for="imgm9">
              <img src="/assets/images/profile/pic9.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
        </div>

        <!-- Next 8 column -->

        <div class="row grid-row mt-3">
          <!-- first 8 col -->

          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm10"
              class="d-none imgbgchk"
              value="10"
            />
            <label for="imgm10">
              <img src="/assets/images/profile/pic10.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm11"
              class="d-none imgbgchk"
              value="11"
            />
            <label for="imgm11">
              <img src="/assets/images/profile/pic11.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm12"
              class="d-none imgbgchk"
              value="12"
            />
            <label for="imgm12">
              <img src="/assets/images/profile/pic12.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
        </div>
        <div class="row grid-row">
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm13"
              class="d-none imgbgchk"
              value="13"
            />
            <label for="imgm13">
              <img src="/assets/images/profile/pic13.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm14"
              class="d-none imgbgchk"
              value="14"
            />
            <label for="imgm14">
              <img src="/assets/images/profile/pic14.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col text-center">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm15"
              class="d-none imgbgchk"
              value="15"
            />
            <label for="imgm15">
              <img src="/assets/images/profile/pic15.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
        </div>
        <div class="row grid-row">
          <div class="col text-center" />

          <div class="col">
            <input
              type="radio"
              on:change={onChange}
              name="imgbackgroundm"
              id="imgm16"
              class="d-none imgbgchk"
              value="16"
            />
            <label for="imgm16">
              <img src="/assets/images/profile/pic16.png" alt="" />
              <div class="tick_container">
                <div class="tick"><i class="bi bi-check" /></div>
              </div>
            </label>
          </div>
          <div class="col" />
        </div>
      </div>
    </div>

    <!-- Mobile Avatar end -->

    <nav class="navbar fixed-bottom justify-content-center" style="z-index: 9999;">
      <button
        on:click={onSubmit}
        style="width:90%"
        class="btn btn-primary btn-lg"
      >
        Submit <i class="bi bi-arrow-right-circle-fill" />
      </button>
    </nav>
    
  </form>
</div>

<style>
  .col img {
    height: 10%;
    width: 100%;
    cursor: pointer;
    transition: transform 1s;
    object-fit: cover;
  }
  .col label {
    overflow: hidden;
    position: relative;
  }
  .imgbgchk:checked + label > .tick_container {
    opacity: 1;
  }
  /*         aNIMATION */
  .imgbgchk:checked + label > img {
    opacity: 0.3;
  }
  .tick_container {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    cursor: pointer;
    text-align: center;
  }
  .tick {
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    padding: 6px 12px;
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }

  @media (max-width: 575.98px) {
    .col img {
      height: 100%;
      width: 100%;
      object-fit: fill;
    }
  }
</style>
