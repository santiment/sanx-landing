<script>
  import Table from 'webkit/ui/Table.svelte'
  import Project from './Project.svelte'
  import Change from './Change.svelte'
  import Quantity from './Quantity.svelte'

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
      format: () => '$88.39',
    },
    {
      title: 'Token Price',
      format: () => '$88.39',
    },
    {
      title: 'Allocation',
      format: () => '24.46%',
    },
    {
      title: 'Change, 24h %',
      /* format: () => '24.46%', */
      Component: Change,
      className: '$style.change',
    },
  ]

  const items = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
</script>

<div class="border allocations">
  <div class="body-1 txt-m top">Allocations</div>

  <Table {columns} {items} keyProp="id" class="$style.table" />
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
