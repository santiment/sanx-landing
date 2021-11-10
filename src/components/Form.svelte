<script>
  import { track } from 'webkit/analytics'

  let className = ''
  export { className as class }

  function onClick() {
    track.event('leave request')
  }
</script>

<a
  type="submit"
  class="btn btn-1 {className}"
  href="https://forms.gle/sdg7LMbqzzTKZV5T7"
  rel="noopener noreferrer"
  target="_blank"
  on:click={onClick}>Leave request</a>

<style>
  .btn {
    display: inline-block;
    --bg: var(--purple);
    --bg-hover: var(--purple-hover);
    --color: var(--white);
  }
</style>
