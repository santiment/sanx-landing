export const SlugColor = {
  uniswap: '#FF5BAA',
  sushi: '#000',
  'synthetix-network-token': '#24D2FC',
  aave: '#6097B9',
  compound: '#22D398',
  maker: '#5AB3A5',
  'yearn-finance': '#1373EE',
  weth: '#BF2065',
}

export function applyColors(assets) {
  for (let i = assets.length - 1; i > -1; i--) {
    const asset = assets[i]
    const color = SlugColor[asset.slug]
    if (color) asset.color = color
  }
}
