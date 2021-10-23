<script>
  import { indexOverview } from './indexOverview'
  import { returnPolicy } from './returnPolicy'
  import { signals } from './signals'

  const blocks = [indexOverview, returnPolicy, signals]
</script>

<section class="section">
  <h2 class="h2">Unearth the on-chain alpha</h2>
  <p class="body-1 mrg-l mrg--t description">
    Our rebalancing strategy combines on-chain and financial signals for top
    DeFi assets. A hybrid approach that’s more than the sum of its parts.
  </p>

  {#each blocks as { title, text, items }}
    <div class="block body-2 mrg-l mrg--t">
      <h4 class="h4 txt-m">{title}</h4>
      {#if text} <p>{text}</p> {/if}
      {#if items}
        <ol>
          {#each items as { title, text, points }}
            <li>
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
    </div>
  {/each}
</section>

<style>
  section {
    padding: 82px 0;
  }

  .description {
    color: var(--fiord);
    max-width: 574px;
  }

  .block {
    padding: 32px 48px;
    background: var(--whale);
    color: var(--fiord);
    border-radius: 4px;
  }
  .block:first-of-type {
    margin-top: 64px;
  }

  .h4 {
    margin: 0 0 20px;
  }

  ol {
    margin-left: 18px;
  }
  li {
    list-style-type: decimal;
    padding-left: 20px;
  }
  li + li {
    margin-top: 16px;
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
</style>
