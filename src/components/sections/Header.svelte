<script>
  import Form from '../Form.svelte'
</script>

<section class="section">
  <div class="header">
    <h1 class="txt-b">
      <span>SanX:</span> actively traded index based on crypto-native metrics
    </h1>
    <Form class="body-2" />
  </div>

  <div class="illustration">
    <img src="elephant.svg" alt="Elephant" class="elephant" />
    <img src="eth-coin.svg" alt="eth" class="eth" />
    <img src="uni-coin.svg" alt="uni" class="uni" />
    <img src="avi-coin.svg" alt="avi" class="avi" />
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
  }

  .illustration {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .eth,
  .uni,
  .avi {
    position: absolute;
    transform-origin: center;
    animation: float 7s infinite;
  }

  .eth {
    right: 336px;
    top: 278px;
  }
  .uni {
    right: 398px;
    top: 359px;
  }
  .avi {
    right: 276px;
    top: 359px;
  }

  @keyframes float {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .header {
    padding: 148px 0 164px;
    max-width: 690px;
  }

  h1 {
    font-size: 48px;
    line-height: 60px;
    margin-bottom: 48px;
  }

  span {
    color: var(--purple);
  }

  :global(.tablet),
  :global(.phone),
  :global(.phone-xs) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }

    section {
      background-position: center 30px;
      background-size: 327px 210px;
    }

    .header {
      padding: 268px 0 44px;
      margin: 0 auto;
      max-width: 450px;
    }

    .illustration {
      left: 50%;
      top: 30px;
      right: initial;
      transform: translateX(-50%);
    }

    .elephant {
      width: 327px;
    }

    .eth {
      width: 47px;
      right: 57%;
      top: 51%;
    }
    .uni {
      width: 35px;
      right: 66%;
      top: 74%;
    }
    .avi {
      width: 46px;
      right: 44%;
      top: 69%;
    }
  }
</style>
