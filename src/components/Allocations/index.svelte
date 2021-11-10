<script>
  import Table from 'webkit/ui/Table.svelte'
  import { queryProjects } from '@/api/projects'
  import Project from './Project.svelte'
  //import Change from './Change.svelte'
  import Quantity from './Quantity.svelte'
  import data from './allocations.json'
  import { usdFormatter } from './utils'

  const columns = [
    {
      title: '#',
      className: 'cell-min $style.number',
      format: (_, i) => i + 1,
    },
    {
      title: 'Project',
      Component: Project,
    },
    {
      title: 'Quantity per token',
      Component: Quantity,
    },
    {
      title: 'Price per token',
      format: ({ pricePerToken }) => usdFormatter(pricePerToken),
    },
    {
      title: 'Token Price',
      format: ({ priceUsd }) => usdFormatter(priceUsd),
    },
    {
      title: 'Allocation',
      format: ({ allocation }) =>
        allocation ? +(allocation * 100).toFixed(2) + '%' : 'No data',
    },
    // {
    //   title: 'Change, 24h %',
    //   Component: Change,
    //   className: '$style.change',
    // },
  ]

  const SlugData = {}
  const slugs = data.tokens.map(({ slug, unit }) => {
    SlugData[slug] = { slug, unit }
    return slug
  })

  let items = []
  let isLoading = true

  if (process.browser) {
    queryProjects(slugs).then(updateTokens)
  }

  function updateTokens(projects) {
    let totalPrice = 0
    projects.forEach((project) => {
      const data = SlugData[project.slug]
      const pricePerToken = data.unit * project.priceUsd
      data.pricePerToken = pricePerToken

      Object.assign(data, project)
      totalPrice += pricePerToken
    })
    items = Object.values(SlugData)

    items.forEach((item) => {
      item.allocation = item.pricePerToken / totalPrice
    })
    isLoading = false
  }
</script>

<div class="border allocations">
  <div class="body-1 txt-m top">Allocations</div>

  <Table
    {isLoading}
    {columns}
    {items}
    keyProp="slug"
    class="$style.table"
    minRows={8} />
</div>

<style lang="scss">
  .allocations {
    margin-top: 48px;
  }

  .top {
    padding: 24px 32px;
  }

  .table {
    :global {
      th {
        border: 0 !important;
      }

      td {
        padding: 20px 15px !important;
        height: 60px;
      }
    }
  }
  .table .number {
    padding-left: 32px !important;
    color: var(--waterloo);
  }
  .table .change {
    padding-right: 32px;
  }
</style>
