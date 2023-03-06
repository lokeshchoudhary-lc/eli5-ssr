<script>
  import Right from '$lib/right.svelte';
  import Left from '$lib/left.svelte';
  import Signup from '$lib/signup.svelte';
  import Nav from '$lib/navbar.svelte';
</script>

<Signup />

<Nav />

<div class="container mt-3">
  <div class="row">
    <div class="col-sm-3">
      <Left />
    </div>

    <div class="col-sm-6">
      <div class="d-flex flex-nowrap justify-content-start overflow-auto">
        <a
          href="/explore"
          class="btn btn-outline-primary mx-1 my-1 rounded-pill text-decoration-none"
          >Explore</a
        >
        <a
          href="/explore"
          class="btn btn-warning mx-1 my-1 rounded-pill text-decoration-none"
          >🔥 Engineering College Bikaner</a
        >
      </div>

      <ul class="nav nav-tabs d-flex flex-nowrap mt-2 overflow-auto" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#tech"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true">Technology</button
          >
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#ent"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false">Entertainment</button
          >
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#startup"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false">Startups</button
          >
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#career"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false">Career</button
          >
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#lifestyle"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false">Lifestyle</button
          >
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#travel"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false">Travel</button
          >
        </li>
        <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#travel"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false">Travel</button
            >
          </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="tech"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="list-group w-auto">
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="ent"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="list-group w-auto">
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="startup"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="list-group w-auto">
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="career"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="list-group w-auto">
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="lifestyle"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="list-group w-auto">
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="travel"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="list-group w-auto">
            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
            </div>

            <div
              class="list-group-item list-group-item-action d-flex gap-3 py-3 border rounded my-1"
              aria-current="true"
            >
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <p class="mb-0 opacity-75">Questions will appear here</p>
                </div>
                <small class="text-nowrap"
                  ><i
                    class="bi bi-chevron-right"
                    style="font-size: 1.5rem; color: #3366FF;"
                  />
                </small>
              </div>
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
