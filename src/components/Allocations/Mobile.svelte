<script>
  import Table from 'webkit/ui/Table/svelte'
  import Project from './Project.svelte'
  import Quantity from './Quantity.svelte'
  import { queryIndexTokens } from './utils'

  const columns = [
    {
      title: 'Project',
      Component: Project,
    },
    {
      title: 'Quantity',
      Component: Quantity,
    },
    {
      title: 'Allocation',
      format: ({ allocation }) =>
        allocation ? +(allocation * 100).toFixed(2) + '%' : 'No data',
    },
  ]

  let items = []
  let isLoading = true

  if (process.browser) {
    queryIndexTokens().then((tokens) => {
      items = tokens
      isLoading = false
    })
  }
</script>

<div class="wrapper">
  <div class="body-1 txt-m mrg-l mrg--b">Allocations</div>

  <Table
    {isLoading}
    {columns}
    {items}
    keyProp="slug"
    class="$style.table"
    minRows={8} />
</div>

<style lang="scss">
  .wrapper {
    padding: 32px 0 64px;
  }

  .table {
    :global {
      th {
        border: 0 !important;
        background: none !important;
        padding: 0 0 8px !important;
      }

      td {
        padding: 4px 0 !important;
        height: 48px;
      }
    }
  }
</style>
