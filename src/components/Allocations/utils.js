import { queryProjects } from '@/api/projects'
import data from './allocations.json'

const decimalFormatter = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
const smallDecimalFormatter = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
})

export function usdFormatter(value) {
  if (!Number.isFinite(+value)) return 'No data'

  return (
    '$' + (value >= 2 ? decimalFormatter : smallDecimalFormatter).format(value)
  )
}

const SlugData = {}
const SLUGS = data.tokens.map(({ slug, unit }) => {
  SlugData[slug] = { slug, unit }
  return slug
})

function mapProjectsData(projects) {
  let totalPrice = 0
  projects.forEach((project) => {
    const data = SlugData[project.slug]
    const pricePerToken = data.unit * project.priceUsd
    data.pricePerToken = pricePerToken

    Object.assign(data, project)
    totalPrice += pricePerToken
  })

  const items = Object.values(SlugData)
  items.forEach((item) => {
    item.allocation = item.pricePerToken / totalPrice
  })
  return items
}

export const queryIndexTokens = () => queryProjects(SLUGS).then(mapProjectsData)
