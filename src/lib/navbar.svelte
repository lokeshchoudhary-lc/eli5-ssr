<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import {
    loginState,
    firstName,
    profilePictureCode,
    totalLikes,
    streak,
    totalAnswers,
  } from '$lib/store';
  import { profileUrl } from '$lib/vars';

  export let data;

  let login = data.loginedIn;
  let userFirstName = data.userDetails?.firstName;
  let userProfilePictureCode = data.userDetails?.profilePictureCode;
  let userRank = 100;
  let userTotalAnswers = data.userDetails?.totalAnswers;
  let userTotalLikes = data.userDetails?.totalLikes;
  let userStreak = data.userDetails?.streak;

  function eraseCookie(name) {
    document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  function logout() {
    axios
      .get('/logout')
      .then(function (response) {
        eraseCookie('loginState');
        loginState.set(false);
        //redirect to home ?
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMount(async () => {
    if (login == true) {
      loginState.set(login);
      streak.set(userStreak);
      totalAnswers.set(userTotalAnswers);

      loginState.subscribe((value) => {
        login = value;
      });

      streak.subscribe((value) => {
        userStreak = value;
      });

      totalAnswers.subscribe((value) => {
        userTotalAnswers = value;
      });
    }
  });
</script>

<nav
  class="navbar navbar-expand-md sticky-top"
  style="background-color: #3366FF"
  aria-label="Fourth navbar example"
>
  {#if login == false}
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="/assets/images/navlogo.png"
          alt="Logo"
          height="40"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler border-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="text-light fs-2"><i class="bi bi-list" /></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0 text-light">
          <li class="nav-item">
            <p class="fs-4 mb-0">Stay on top of the latest happenings</p>
            <p class="fs-6 mb-0">
              The Eli5 community is always ahead of the curve
            </p>
          </li>
        </ul>
        <form class="form mb-2">
          <a href="/auth" type="button" class="btn btn-outline-light">Log-In</a>
          <a
            href="/auth"
            type="button"
            class="btn btn-light"
            style="color:#3366FF">Sign-Up</a
          >
        </form>

        <ul
          class="navbar-nav mt-2 mb-2 text-light border-bottom border-top border-light d-block d-md-none"
        >
          <li class="nav-item mb-2">Ask Question</li>
          <li onclick="window.location.href='/'" class="nav-item mb-2">Home</li>
          <li onclick="window.location.href='/explore'" class="nav-item mb-2">
            Explore
          </li>
          <li
            onclick="window.location.href='/leaderboard'"
            class="nav-item mb-2"
          >
            Leaderboard
          </li>
          <li onclick="window.location.href='/share'" class="nav-item mb-2">
            Share with friends
          </li>
          <li onclick="window.location.href='/eli5'" class="nav-item mb-2">
            How it works
          </li>
        </ul>

        <ul
          class="navbar-nav mt-2 mb-2 text-light border-bottom border-light d-block d-md-none"
        >
          <li
            onclick="window.location.href='https://tally.so/r/nW2D4k'"
            class="nav-item mb-2"
          >
            Need Help
          </li>
        </ul>

        <ul
          class="navbar-nav mt-2 mb-2 text-light border-bottom border-light d-block d-md-none"
        >
          <li onclick="window.location.href='/privacy'" class="nav-item mb-2">
            Privacy Policy
          </li>
          <li onclick="window.location.href='/rules'" class="nav-item mb-2">
            Rules
          </li>
          <li onclick="window.location.href='/faq'" class="nav-item mb-2">
            FAQ
          </li>
        </ul>
      </div>
    </div>
  {/if}
  {#if login == true}
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src={profileUrl + 'pic' + userProfilePictureCode + '.png'}
          alt="Logo"
          height="40"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler border-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class=" text-light fs-2"><i class="bi bi-list" /></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <p class="h5 text-light mt-3 fw-bold">
          Hi {userFirstName}
          <!-- <span style="background:#D6E0FF" class="badge rounded-pill text-light"
            >#{userRank}</span
          > -->
        </p>

        <div class="row mt-3 d-md-none">
          <div class="col text-light">
            {userTotalAnswers} <i class="bi bi-pen" />
          </div>
          <div class="col text-light">
            {userStreak} <i class="bi bi-calendar-day" />
          </div>
          <div class="col text-light">
            {userTotalLikes} <i class="bi bi-heart-fill" />
          </div>
        </div>
        <!-- <ul class="list-group list-group-horizontal">
                <li class="list-group-item">300 <i class="bi bi-pen"></i></li>
                <li class="list-group-item">60 <i class="bi bi-calendar-day"></i></li>
                <li class="list-group-item">5K <i class="bi bi-heart-fill"></i></li>
                <li class="list-group-item">100 <i class="bi bi-patch-question"></i></li>
              </ul> -->

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav text-light">
            <li class="nav-item mx-1 ">
              <a class="nav-link active text-light" aria-current="page" href="#"
                >{userTotalAnswers} <i class="bi bi-pen" /></a
              >
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link active text-light" aria-current="page" href="#"
                >{userStreak} <i class="bi bi-calendar-day" /></a
              >
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link active text-light" aria-current="page" href="#"
                >{userTotalLikes} <i class="bi bi-heart-fill" /></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/"
                >Home</a
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link text-light" href="#">Ask Question</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link text-light" href="/explore">Explore</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/leaderboard">Leaderboard</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/eli5">How it works</a></li>
                <!-- <li>
                  <a class="dropdown-item" href="/share">Share with friends</a>
                </li> -->
                <li>
                  <a class="dropdown-item" href="https://tally.so/r/nW2D4k"
                    >Need help</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-primary" href="/rules">Rules</a>
                </li>
                <li>
                  <a class="dropdown-item text-primary" href="/faq">FAQ</a>
                </li>
                <li>
                  <a class="dropdown-item text-primary" href="/privacy"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    on:click={logout}
                    class="dropdown-item text-danger"
                    href={null}>Logout</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <ul
          class="navbar-nav mt-3 mb-2 text-light border-bottom border-top border-light d-block d-md-none"
        >
          <!-- <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Ask Question</a>
          </li> -->
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Explore</a>
          </li>
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Leaderboard</a>
          </li>
          <!-- <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Share with friends</a>
          </li> -->
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">How it works</a>
          </li>
        </ul>

        <ul
          class="navbar-nav mt-2 mb-2 text-light border-bottom border-light d-block d-md-none"
        >
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Need Help</a>
          </li>
          <li class="nav-item mb-2">
            <a on:click={logout} class="nav-link text-light" href={null}
              >Logout</a
            >
          </li>
        </ul>

        <ul
          class="navbar-nav mt-2 mb-2 text-light border-bottom border-light d-block d-md-none"
        >
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Privacy Policy</a>
          </li>
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">Rules</a>
          </li>
          <li class="nav-item mb-2">
            <a class="nav-link text-light" href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  {/if}
</nav>

<style>
  .navbar-toggler:focus {
    outline: none;
    box-shadow: none;
  }
  .navbar-toggler:active {
    outline: none;
    box-shadow: none;
  }
</style>
