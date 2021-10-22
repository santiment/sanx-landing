<script>
  const blocks = [
    {
      title: 'Rebalance Policy',
      items: [
        {
          title: 'MVRV Signal-based rebalancing',
          text: 'SANX assets inclusions and removals are based on MVRV 30d opportunity/danger zone signals provided via Santiment Oracle.',
          points: [
            {
              title: 'Repeating signals',
              text: 'Assets are added once their MVRV metric crosses the opportunity zone and removed in case of the danger zone signal. We respond on the first signal fired.',
            },
          ],
        },
        {
          title: "Assets' shares in the portfolio (marketcap based)",
          text: 'The portfolio is rebalanced when a new asset is added to the index due to buy-signal. Portfolio assets are weighted according to the market capitalization.',
        },
        {
          title: "Assets' removal",
          text: 'Assets are removed from the index after the MVRV danger zone crossing. The whole asset position is removed from the index by exchanging it into the other assets in the portfolio having shares based on market capitalization.',
        },
        {
          title: "Assets' inclusion",
          text: 'When a buy-signal is fired for the asset that can be added to the index the portfolio is sold and on the next step is bought again into the same set of assets plus the new one.',
        },
        {
          title: 'Governance',
          points: [
            {
              title: 'Governance',
              text: 'Assets are added once their MVRV metric crosses the opportunity zone and removed in case of the danger zone signal. We respond on the first signal fired.',
            },
            {
              title: 'Delay',
              text: 'The index exchanges are done in several days after actual entering of the opportunity or danger zone - the period of signals calculation and verification.',
            },
          ],
        },
      ],
    },
  ]
</script>

<section class="section">
  <h2 class="h2">Unearth the on-chain alpha</h2>
  <p class="body-1 mrg-l mrg--t description">
    Our rebalancing strategy combines on-chain and financial signals for top
    DeFi assets. A hybrid approach that’s more than the sum of its parts.
  </p>

  <div class="block">
    <h4 class="h4 txt-m">Index overview</h4>
    <p class="body-2">
      SANX Index is supposed to track DeFi tokens which are weighted by market
      capitalization. Assets' inclusions and removals are based on the Santiment
      Oracle Network signals.
    </p>
  </div>

  {#each blocks as { title, description, items }}
    <div class="block body-2">
      <h4 class="h4 txt-m">{title}</h4>
      {#if description} <p>{description}</p> {/if}
      {#if items}
        <ol>
          {#each items as { title, text, points }}
            <li>
              <h5 class="txt-m mrg-s mrg--b black">{title}</h5>
              {#if text}<p class="mrg-s mrg--b">{text}</p>{/if}
              {#if points}
                <ol>
                  {#each points as { title, text }}
                    <li class="point">
                      <h6 class="black">{title}</h6>
                      <p>{text}</p>
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
    margin-top: 64px;
    padding: 32px 48px;
    background: var(--whale);
    color: var(--fiord);
    border-radius: 4px;
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
</style>
