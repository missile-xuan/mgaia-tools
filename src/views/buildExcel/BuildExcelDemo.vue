<script setup lang="ts">
// 为什么要用此二次封装 https://github.com/protobi/js-xlsx/issues/163
import TableCount from './TableCount.vue'
import * as ExcelJS from 'exceljs'
// import lodash from 'lodash'
import { ref } from 'vue'
import {
  jsonToSheetData,
  sheetDataListToExcel,
  mergeDownSheetData,
  mergeRightSheetData,
  tableDomToSheetData,
  tableDomToExcel,
  downloadExcel
} from './lib/buildExcel'
// 构建excel
const testTableData = [
  { id: 1, name: 'a', data: 'aa' },
  { id: 2, name: 'b', data: 'bb' },
  { id: 3, name: 'c', data: 'cc' },
  {
    id: 4,
    name: '超长测试',
    data: 'c超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试'
  }
]

const spanMethod = ({ row, column, rowIndex, columnIndex }: any) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

// /////////////////////////////////
interface HTMLElementPlus extends HTMLElement {
  $el: HTMLElement
}
const tabeDiv = ref<HTMLElementPlus>()

// 导出eltable表格测试
const build1 = () => {
  const headerSheet = tableDomToSheetData(
    tabeDiv.value!.$el!.querySelector('.el-table__header')!,
    true
  )
  const dataSheet = tableDomToSheetData(
    tabeDiv.value!.$el!.querySelector('.el-table__body')!,
    true
  )
  const sheet = mergeDownSheetData([headerSheet, dataSheet])
  console.log(sheet)
  downloadExcel(sheetDataListToExcel([sheet]))
}

// 导出普通table表格测试
const build2 = async () => {
  // downloadExcel(tableDomToExcel(document.querySelector('#textTable')!))

  const sheet1 = tableDomToSheetData(document.querySelector('#textTable')!)
  const sheet2 = tableDomToSheetData(document.querySelector('#textTable')!)
  const sheet3 = tableDomToSheetData(document.querySelector('#textTable')!)
  const sheet = mergeRightSheetData([sheet1, sheet2, sheet3])
  downloadExcel(sheetDataListToExcel([sheet]))
}

const build3 = async () => {
  downloadExcel(tableDomToExcel(document.querySelector('#textTable')!))
}

// 基础导出测试
const excelBuild = async () => {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook()
  // 添加sheet页
  const sheet1 = workbook.addWorksheet('sheet1')

  // 创建表头(必须要创建表头)
  sheet1.columns = [
    // { header: 'Id', key: 'id', width: 10 },
    // { header: 'Name', key: 'name', width: 32 },
    // { header: 'D.O.B.', key: 'dob', width: 10, outlineLevel: 1 }

    // header 可以是undefined 就没有首行了
    { header: undefined, key: 'id', width: 10 },
    { header: undefined, key: 'name', width: 32 },
    { header: undefined, key: 'dob', width: 10, outlineLevel: 1 }
  ]

  // 构造数据
  sheet1.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1), a: 123 })
  sheet1.addRow({ id: 2, name: 'John Doe1', dob: new Date(1970, 1, 12) })
  sheet1.addRow({ id: 3, name: 'John Doe2', dob: new Date(1970, 1, 13) })
  // 合并单元格
  // sheet1.mergeCells('A1:B2')
  sheet1.mergeCells(1, 1, 2, 2)
  // 需要写入buffer后导出
  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer])
  const aLink = document.createElement('a')
  aLink.download = 'exceljs.xlsx'
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
  aLink.remove()
}

// json数据导出excel
const jsonExcelBuild = () => {
  const data = [
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3 }
  ]
  downloadExcel(sheetDataListToExcel([jsonToSheetData(['a', 'b', 'c'], data)]))
}
</script>

<template>
  <div class="global-c-main-content">
    <el-table
      ref="tabeDiv"
      :data="testTableData"
      style="width: 100%"
      :span-method="spanMethod"
      border
    >
      <el-table-column
        align="center"
        prop="id"
        label="编号编号编号编号编号"
        width="180"
      />
      <el-table-column align="center" label="多级嵌套表头测试">
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="data" label="数据" />
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="build1">导出eltable测试</el-button>
    <table id="textTable">
      <tbody>
        <tr>
          <td>1</td>
          <td rowspan="2" colspan="2">a</td>
          <td>aaa</td>
          <td rowspan="2" colspan="2">2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>b</td>
          <td>bbb</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>c</td>
          <td>3</td>
          <td>ccc</td>
        </tr>
      </tbody>
    </table>
    <el-button type="primary" @click="build2">导出table多sheet页合并</el-button>
    <el-button type="primary" @click="build3">直接导出tableDom</el-button>
    <el-button type="primary" @click="excelBuild"
      >exceljs数据导出测试</el-button
    >
    <el-button type="primary" @click="jsonExcelBuild"
      >json数据导出excel</el-button
    >

    <TableCount />
  </div>
</template>

<style scoped lang="scss">
#textTable {
  td {
    border: 1px solid rgb(207, 146, 23);
  }
}
</style>
