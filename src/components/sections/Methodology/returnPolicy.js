export const returnPolicy = {
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
}
