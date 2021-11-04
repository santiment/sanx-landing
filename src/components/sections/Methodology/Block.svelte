<script>
  import Svg from 'webkit/ui/Svg.svelte'

  export let title, text, items
  export let isAlwaysOpened

  let isOpened = isAlwaysOpened || false
</script>

<div class="block body-2 mrg-l mrg--t">
  <h4
    class="h4 txt-m row justify v-center"
    class:opened={isOpened}
    on:click={isAlwaysOpened ? undefined : () => (isOpened = !isOpened)}>
    {title}
    {#if !isAlwaysOpened}
      <Svg id="arrow" w="10" h="6" class="$style.arrow" />
    {/if}
  </h4>
  {#if isOpened}
    {#if text} <p>{text}</p> {/if}
    {#if items}
      <ol>
        {#each items as { title, text, points }, i}
          <li class="item" data-i={i + 1}>
            <h5 class="txt-m mrg-s mrg--b black">{title}</h5>
            {#if text}<p class="mrg-s mrg--b">{text}</p>{/if}
            {#if points}
              <ol>
                {#each points as { title, text, subpoints }}
                  <li class="point">
                    {#if title}<h6 class="black">{title}</h6>{/if}
                    {#if text}<p>{text}</p>{/if}
                    {#if subpoints}
                      <ul>
                        {#each subpoints as { title, text }}
                          <li class="subpoint">
                            <h7>{title}</h7>
                            <p>{text}</p>
                          </li>
                        {/each}
                      </ul>
                    {/if}
                  </li>
                {/each}
              </ol>
            {/if}
          </li>
        {/each}
      </ol>
    {/if}
  {/if}
</div>

<style>
  .block {
    color: var(--fiord);
    border-bottom: 1px solid var(--porcelain);
    margin: 0 -16px;
    padding: 24px 16px;
  }
  .block:first-of-type {
    margin-top: 64px;
  }
  :global(.desktop) .block {
    padding: 32px 48px;
    background: var(--whale);
    border: none;
    border-radius: 4px;
    margin-left: 0;
    margin-right: 0;
  }

  .h4 {
    color: var(--black);
  }
  .opened {
    margin: 0 0 20px;
  }

  ol {
    margin-left: 18px;
  }
  .item {
    padding-left: 20px;
    position: relative;
  }
  .item + .item {
    margin-top: 16px;
  }
  .item::before {
    content: attr(data-i);
    background: var(--athens);
    border-radius: 50%;
    position: absolute;
    left: -16px;
    width: 24px;
    height: 24px;
    text-align: center;
  }

  .black {
    color: var(--black);
  }

  .point {
    list-style-type: lower-alpha;
    padding-left: 8px;
  }
  .point + .point {
    margin-top: 8px;
  }
  .point::marker {
    color: var(--waterloo);
  }

  ul {
    margin-left: 16px;
  }
  .subpoint {
    list-style-type: disc;
    padding-left: 0;
  }
  .subpoint + .subpoint {
    margin-top: 6px;
  }

  .arrow {
    transform: rotate(90deg);
  }
  .opened .arrow {
    transform: rotate(180deg);
  }
</style>
