<script>
  import Nav from '@cmp/Nav.svelte'
</script>

<svelte:head>
  <title>SanX</title>
</svelte:head>

<Nav />

<div class="content">
  <div class="header">
    <h1 class="txt-b">
      <span>SanX:</span> actively traded index based on crypto-native metrics
    </h1>
    <form class="border body-2 row request">
      <input name="email" type="email" value="" />
      <button type="submit" class="btn btn-1">Leave request</button>
    </form>
  </div>

  <img src="eth-coin.svg" alt="eth" class="eth" />
  <img src="uni-coin.svg" alt="uni" class="uni" />
  <img src="avi-coin.svg" alt="avi" class="avi" />
</div>

<style>
  .content {
    margin: 0 auto;
    max-width: 1152px;
    background: url(elephant.svg) no-repeat right center;
    position: relative;
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

  .request {
    padding: 5px;
    max-width: 406px;
  }

  input {
    padding: 0px 12px;
    flex: 1;
  }

  .btn {
    --bg: var(--purple);
    --bg-hover: var(--purple-hover);
    --color: var(--white);
  }
</style>
