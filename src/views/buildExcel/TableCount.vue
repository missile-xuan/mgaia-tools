<template>
  <el-table ref="tabe1Div" :data="tableData" border show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" sortable label="Amount 1" />
    <el-table-column prop="amount2" sortable label="Amount 2" />
    <el-table-column prop="amount3" sortable label="Amount 3" />
  </el-table>
  <el-button type="primary"  @click="build1">导出</el-button>
  <el-table
    ref="tabe2Div"
    :data="tableData"
    border
    height="200"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px"
  >
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Cost 1 ($)" />
    <el-table-column prop="amount2" label="Cost 2 ($)" />
    <el-table-column prop="amount3" label="Cost 3 ($)" />
  </el-table>
  <el-button type="primary"  @click="build2">导出</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx } from 'element-plus'
import { sheetDataListToExcel, mergeDownSheetData, tableDomToSheetData, tableDomToExcel, downloadExcel } from './buildExcel'

const tabe1Div = ref()
const build1 = () => {
  const headerSheet = tableDomToSheetData(tabe1Div.value!.$el!.querySelector('.el-table__header')!, true)
  const dataSheet = tableDomToSheetData(tabe1Div.value!.$el!.querySelector('.el-table__body')!, true)
  const footerSheet = tableDomToSheetData(tabe1Div.value!.$el!.querySelector('.el-table__footer')!, true)
  const sheet = mergeDownSheetData([headerSheet, dataSheet, footerSheet])
  console.log(sheet)
  downloadExcel(sheetDataListToExcel([sheet]))
}
const tabe2Div = ref()
const build2 = () => {
  const headerSheet = tableDomToSheetData(tabe2Div.value!.$el!.querySelector('.el-table__header')!, true)
  const dataSheet = tableDomToSheetData(tabe2Div.value!.$el!.querySelector('.el-table__body')!, true)
  const footerSheet = tableDomToSheetData(tabe2Div.value!.$el!.querySelector('.el-table__footer')!, true)
  const sheet = mergeDownSheetData([headerSheet, dataSheet, footerSheet])
  console.log(sheet)
  downloadExcel(sheetDataListToExcel([sheet]))
}

interface Product {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SummaryMethodProps<T = Product> {
  columns: TableColumnCtx<T>[]
  data: T[]
}

const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param
  const sums: string[] = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = 'Total Cost'
      return
    }
    // @ts-ignore
    const values = data.map(item => Number(item[column.property]))
    if (!values.every(value => Number.isNaN(value))) {
      sums[index] = `$ ${values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!Number.isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)}`
    } else {
      sums[index] = 'N/A'
    }
  })

  return sums
}

const tableData: Product[] = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15
  }
]
</script>
