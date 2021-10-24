<script>
  let className = ''
  export { className as class }
  export let label = 'Leave request'
</script>

<form class="border row {className}">
  <input name="email" type="email" value="" placeholder="Enter your email" />
  <button type="submit" class="btn btn-1">{label}</button>
</form>

<style>
  form {
    color: var(--black);
    padding: 5px;
    max-width: var(--max-width, 406px);
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
