<script setup lang="ts">
// 卫生要用此二次封装 https://github.com/protobi/js-xlsx/issues/163

import * as XLSX from 'xlsx'
// import * as XLSX from ' sheetjs-style-v2'
import { ref } from 'vue'
// 构建excel
const testTableData = [
  { id: 1, name: 'a', data: 'aa' },
  { id: 2, name: 'b', data: 'bb' },
  { id: 3, name: 'c', data: 'cc' },
  { id: 4, name: '超长测试', data: 'c超长测试超长测试超长测试超长测试超长测试超长测试超长测试超长测试' }
]

const spanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const tabeDiv = ref<HTMLElement>()

// 导出eltable表格测试
const build1 = () => {
  const workbook = XLSX.utils.book_new()
  // Extract Data (create a workbook object from the table)
  // 以表头创建table
  const tableSheet = XLSX.utils.table_to_sheet(tabeDiv.value?.$el.querySelector('.el-table__header'))
  // 表头设置样式
  for (const index in tableSheet) {
    if (tableSheet[index].v) {
      tableSheet[index].s = {
        fill: {
          fgColor: {
            rgb: 'ececec'
            // rgb: '11111111'
          }
          // bgColor: {
          //   rgb: '11111111'
          // }
        },
        alignment: { // 居中方式
          horizontal: 'center',
          vertical: 'center'
        },
        font: {
          // color: { rgb: '909399' }
          bold: true
        }
      }
    }
  }
  debugger
  XLSX.utils.sheet_add_dom(tableSheet, tabeDiv.value?.$el.querySelector('.el-table__body'), { origin: -1 })
  XLSX.utils.book_append_sheet(workbook, tableSheet)
  XLSX.writeFile(workbook, 'eltable.xlsx')
}

// 导出普通table表格测试
const build2 = () => {
  // Extract Data (create a workbook object from the table)
  const workbook = XLSX.utils.table_to_book(document.querySelector('#textTable'))
  // Package and Release Data (`writeFile` tries to write and save an XLSB file)
  XLSX.writeFile(workbook, 'table.xlsx')
}

</script>

<template>
  <div class="content">
    <el-table ref="tabeDiv" :data="testTableData" style="width: 100%" :span-method="spanMethod" border>
      <el-table-column align="center" prop="id" label="编号" width="180" />
      <el-table-column label="多级嵌套表头测试" >
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="data" label="数据" />
      </el-table-column>
    </el-table>
    <el-button type="primary"  @click="build1">导出eltable测试</el-button>
    <table id="textTable">
      <tr>
        <td>1</td><td>a</td><td>aaa</td>
      </tr>
      <tr>
        <td>2</td><td>b</td><td>bbb</td>
      </tr>
      <tr>
        <td>3</td><td>c</td><td>ccc</td>
      </tr>
    </table>
    <el-button type="primary"  @click="build2">导出eltable测试</el-button>
  </div>
</template>

<style scoped lang="scss">
.content{
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
}

</style>
