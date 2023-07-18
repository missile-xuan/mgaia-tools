<script setup lang="ts">
// 为什么要用此二次封装 https://github.com/protobi/js-xlsx/issues/163
// import lodash from 'lodash'
import { ref } from 'vue'
import { sheetDataListToExcel, tableDomToSheetData, tableDomToExcel, downloadExcel } from './buildExcel'
// 构建excel
const jsonText = ref()
const tableOption = ref({
  rows: 3,
  cols: 7
})
const textTable = ref()
const createTable = () => {
  const tableElement: HTMLElement = textTable.value
  // 清空表格内容
  while (tableElement.firstChild) {
    tableElement.removeChild(tableElement.firstChild)
  }
  // 生成新的表格内容
  for (let rowIndex = 1; rowIndex <= tableOption.value.rows; rowIndex++) {
    const row = document.createElement('tr')
    row.style.border = '1px solid black'
    for (let colIndex = 1; colIndex <= tableOption.value.cols; colIndex++) {
      const cell = document.createElement('td')
      cell.style.border = '1px solid black'
      cell
      cell.textContent = `${rowIndex}, ${colIndex}`
      row.appendChild(cell)
    }
    tableElement.appendChild(row)
  }
}
const addRight = () => {
}
const addBelow = () => {
}
let selectedCells = [] // 二维数组，用于存储选中状态
let isDragging = false // 是否正在拖拽
let startRowIndex = -1 // 拖拽开始的行索引
let startColIndex = -1 // 拖拽开始的列索引

const toggleCellSelection = (rowIndex, colIndex) => {
  // 取反选中状态

}
const isCellSelected = (rowIndex, colIndex) => {
  // 检查选中状态

}
const handleCellMouseDown = (rowIndex, colIndex) => {
  isDragging = true
  startRowIndex = rowIndex
  startColIndex = colIndex
  toggleCellSelection(rowIndex, colIndex)
}
const handleCellMouseMove = (rowIndex, colIndex) => {
  if (isDragging) {
    // 鼠标移动过程中，更新拖拽区域内的选中状态
    for (let row = Math.min(rowIndex, startRowIndex); row <= Math.max(rowIndex, startRowIndex); row++) {
      for (let col = Math.min(colIndex, startColIndex); col <= Math.max(colIndex, startColIndex); col++) {
        toggleCellSelection(row, col)
      }
    }
  }
}
const handleCellMouseUp = () => {
  isDragging = false
  startRowIndex = -1
  startColIndex = -1
}
const updateTable = () => {
  // 更新表格内容和样式
  selectedCells = []
}
</script>

<template>
  <div class="global-c-main-content">
    <div class="left">
      <table class="header" ref="textTable">
        <tr>
          <td v-for="colIndex in tableOption.rows" :key="colIndex">
            列{{ colIndex }}
          </td>
        </tr>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <th>行{{ rowIndex + 1 }}</th>
          <td v-for="(col, colIndex) in row" :key="colIndex" @mousedown="handleCellMouseDown(rowIndex, colIndex)"
            @mousemove="handleCellMouseMove(rowIndex, colIndex)" @mouseup="handleCellMouseUp(rowIndex, colIndex)"
            :class="{ selected: isCellSelected(rowIndex, colIndex) }">
            {{ col }}
          </td>
        </tr>
      </table>
      <div class="json">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="jsonText">
        </el-input>
      </div>
    </div>
    <div class="right">
      <div class="TableOption">
        <el-form :inline="true" :model="tableOption" class="demo-form-inline">
          <el-form-item label="表头行数">
            <el-input v-model="tableOption.rows" placeholder="表头行数"></el-input>
          </el-form-item>
          <el-form-item label="表头列数">
            <el-input v-model="tableOption.cols" placeholder="表头列数">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="createTable">生成</el-button>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="tableOption" class="demo-form-inline">
          <el-form-item>
            <el-button @click="addRight">向右添加一行</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="addBelow">向下添加一行</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="cellOption">
        <!-- <el-form :model="tableOption" class="demo-form-inline">
          <el-form-item label="key">
            <el-input v-model="cellOptionArray.key" placeholder="数据键值"></el-input>
          </el-form-item>
          <el-form-item label="表头列数">
            <el-input v-model="cellOptionArray.babel" placeholder="表头列数">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="apply">应用样式到全部</el-button>
          </el-form-item>
        </el-form> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.global-c-main-content {
  flex-direction: row;

  .header {
    // border: 1px solid black;
  }

  .json {}

  .right {
    .TableOption {
      display: flex;
    }
  }
}
</style>
