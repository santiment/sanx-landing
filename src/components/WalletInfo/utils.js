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

const UNUSED_COLORS = [
  '#FF8450',
  '#D4E763',
  '#FF6363',
  '#8358FF',
  '#AC948C',
  '#158A59',
]

export function newUnusedColorGenerator() {
  let i = 0
  return () => UNUSED_COLORS[i++]
}
