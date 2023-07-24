<script setup lang="ts">
// 为什么要用此二次封装 https://github.com/protobi/js-xlsx/issues/163
// import lodash from 'lodash'
import { ref } from 'vue'
import type { TableCellData } from './buildExcel'
// ========配置面板========
// 表格公共配置
const tableOption = ref({
  rows: 3,
  cols: 7
})

// 表格单元格结构数据
const tableCellData = ref<TableCellData[][]>([])
// 需要合并的单元格
const mergeCoordinate = ref<[number, number, number, number][]>([])
// 设置表格
const setTableOption = () => {
  const tableCellDataCopy = JSON.parse(JSON.stringify(tableCellData.value))
  tableCellData.value = []
  for (let rowIndex = 0; tableOption.value.rows > rowIndex; rowIndex++) {
    tableCellData.value[rowIndex] = []
    for (let colIndex = 0; tableOption.value.cols > colIndex; colIndex++) {
      let cellValue = 'text'
      let cellStyle
      if (tableCellDataCopy[rowIndex] && tableCellDataCopy[rowIndex][colIndex]) {
        cellValue = tableCellDataCopy[rowIndex][colIndex].value
        cellStyle = tableCellDataCopy[rowIndex][colIndex].style
      }
      tableCellData.value[rowIndex][colIndex] = {
        value: cellValue,
        style: cellStyle
      }
    }
  }
}
setTableOption()
// ========动作状态========
// 当前焦点单元格
const focusCell = ref([0, 0])
// 单元格点击事件 传入所点击单元格的坐标
const clickCell = (rowIndex:number, colIndex:number) => {
  focusCell.value[0] = rowIndex
  focusCell.value[1] = colIndex
}
// 是否正在拖拽
let isDragging = false

</script>

<template>
  <div class="global-c-main-content">
    <div class="left">
      <div>
        <div class="show-row" v-for="(row,rowIndex) in tableCellData" :key="rowIndex">
          <div
            class="show-cell"
            v-for="(cel,colIndex) in row"
            :key="rowIndex+','+colIndex"
            @click="clickCell(rowIndex, colIndex)"
          >{{ cel.value }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title row">表格属性</div>
      <div class="row"><span>行: </span><el-input-number size="small" v-model="tableOption.rows" :min="1" :step="1" step-strictly /></div>
      <div class="row"><span>列: </span><el-input-number size="small" v-model="tableOption.cols" :min="1" :step="1" step-strictly /></div>
      <div class="row"><span>边框颜色: </span></div>
      <div class="row"><span>边框粗细: </span></div>
      <div class="row" style="text-align: right;"><el-button size="small" @click="setTableOption">应用</el-button></div>
      <div class="line row"></div>
      <div class="title row">单元格属性</div>
      <div class="row">{{ focusCell }}</div>
      <div class="row"><span>显示值: </span></div>
      <div class="row"><span>绑定值: </span></div>
      <div class="row"><span>字号: </span></div>
      <div class="row"><span>字体色: </span></div>
      <div class="row"><span>背景色: </span></div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.global-c-main-content {
  flex-direction: row;
  .left{
    height: 100%;
    flex-grow: 1;
    background-color: aqua;
    display: flex;
    justify-content: center;

    .show-row{
      display: flex;
      justify-content: center;
    }
    .show-cell{
      height: 20px;
      min-width: 20px;
      border-right: 1px solid #dcdfe6;
      border-bottom: 1px solid #dcdfe6;
      cursor: pointer;
    }
  }
  .right{
    height: 100%;
    width: 400px;
    padding: 0 20px;

    .row{
      margin-bottom: 10px;
    }
    .title{
      font-size: 16px;
    }
    .line{
      border-bottom: 1px solid #dcdfe6;
    }
  }
}
</style>
