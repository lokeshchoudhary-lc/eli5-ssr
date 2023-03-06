

<div class="fixed-bottom">
    <div class="row">
        <div class="col">
            <a on:click={previousQuestion} class="btn btn-primary" href={null}
                      ><i class="bi bi-arrow-left" /></a>
        </div>
        <div class="col">
            <button
            type="button"
            class={boolAnswered ? 'btn btn-disable' : 'btn btn-primary'}
            data-bs-toggle="modal"
            data-bs-target={boolAnswered ? '' : '#writeelif'}
            ><i class="bi bi-pen" /> Eli5</button
          >
        </div>
        <div class="col">
            <a on:click={nextQuestion} class="btn btn-primary" href={null}
                      ><i class="bi bi-arrow-right" /></a
                    >
        </div>
    </div>
</div>