<script>
  import Table from 'webkit/ui/Table/svelte'
  import { queryAllocations } from '@/api/allocations'
  import Project from './Project.svelte'
  import Quantity from './Quantity.svelte'
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
      sortAccessor: ({ quantityPerToken }) => quantityPerToken,
    },
    {
      title: 'Price per token',
      format: ({ pricePerToken }) => usdFormatter(pricePerToken),
      sortAccessor: ({ pricePerToken }) => pricePerToken,
    },
    {
      title: 'Token Price',
      format: ({ priceUsd }) => usdFormatter(priceUsd),
      sortAccessor: ({ priceUsd }) => priceUsd,
    },
    {
      title: 'Allocation',
      format: ({ allocation }) =>
        allocation ? +(allocation * 100).toFixed(2) + '%' : 'No data',
      sortAccessor: ({ allocation }) => allocation,
    },
  ]

  let items = []
  let isLoading = true

  if (process.browser) {
    queryAllocations().then((data) => {
      items = data
      isLoading = false
    })
  }
</script>

<div class="border allocations">
  <div class="body-1 txt-m top">Allocations</div>

  <Table
    {isLoading}
    {columns}
    {items}
    sortedColumn={columns[2]}
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
</style>
