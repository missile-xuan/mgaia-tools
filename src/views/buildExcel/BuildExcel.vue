<script setup lang="ts">
// 为什么要用此二次封装 https://github.com/protobi/js-xlsx/issues/163
// import lodash from 'lodash'
import { computed, nextTick, ref, watch } from 'vue'
import { downloadExcel, rgbaToArgbHEX, argbHEXToRgba, sheetDataListToExcel } from './buildExcel'
import type { TableCellData, CellStyle } from './buildExcel'

// ========配置面板========
// 表格公共配置
const tableOption = ref({
  rows: 3,
  cols: 7,
  border: true,
  borderColor: 'rgba(0, 0, 0, 1)'
})
// 应用前暂存
const border = ref(true)
const borderColor = ref('rgba(0, 0, 0, 1)')
let rowsForComputed = 3
let colsForComputed = 7

// 单元格属性
// 对齐方式
const alignOptions = [{
  value: 'left',
  label: 'left'
},
{
  value: 'center',
  label: 'center'
},
{
  value: 'right',
  label: 'right'
}]
// 单元格配置（颜色）
const fontColor = ref('rgba(1,1,1,1)')
const backgroundColor = ref('rgba(255,255,255,1)')
const changeFontColor = () => {
  tableCellData.value[focusCell.value[0]][focusCell.value[1]].style!.font.color = { argb: rgbaToArgbHEX(fontColor.value) }
}
const changeBackgroundColor = () => {
  // @ts-ignore
  tableCellData.value[focusCell.value[0]][focusCell.value[1]].style!.fill.fgColor = { argb: rgbaToArgbHEX(backgroundColor.value) }
}

// 初始化样式
const initStyle: CellStyle = {
  // @ts-ignore：引用包的声明有问题
  font: {
    name: 'Arial',
    size: 16,
    family: 2,
    scheme: 'minor',
    charset: 1,
    color: { argb: 'FF000000' },
    bold: false,
    italic: false,
    underline: false,
    // vertAlign: 'superscript',
    strike: false,
    outline: false
  },
  alignment: {
    vertical: 'middle', horizontal: 'left'
  },
  fill: {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFFFFFFF' }
  },
  border: {
    top: { style: 'thin', color: { argb: 'FF000000' } },
    left: { style: 'thin', color: { argb: 'FF000000' } },
    bottom: { style: 'thin', color: { argb: 'FF000000' } },
    right: { style: 'thin', color: { argb: 'FF000000' } }
  }
}

// 表格单元格结构数据
const tableCellData = ref<TableCellData[][]>([])
// 需要合并的单元格
const mergeCoordinate = ref<[number, number, number, number][]>([])

// 设置表格-数据驱动
const setTableOption = () => {
  const tableCellDataCopy = JSON.parse(JSON.stringify(tableCellData.value))
  border.value = tableOption.value.border
  borderColor.value = tableOption.value.borderColor
  rowsForComputed = tableOption.value.rows
  colsForComputed = tableOption.value.cols
  tableCellData.value = []
  for (let rowIndex = 0; tableOption.value.rows > rowIndex; rowIndex++) {
    tableCellData.value[rowIndex] = []
    for (let colIndex = 0; tableOption.value.cols > colIndex; colIndex++) {
      // 初始化
      let cellValue = 'text'
      let cellStyle = JSON.parse(JSON.stringify(initStyle))
      // 从原有数据重新赋值
      if (tableCellDataCopy[rowIndex] && tableCellDataCopy[rowIndex][colIndex]) {
        cellValue = tableCellDataCopy[rowIndex][colIndex].value
        cellStyle = tableCellDataCopy[rowIndex][colIndex].style
      }
      // 公共样式赋值部分
      cellStyle.border.top!.style = tableOption.value.border ? 'thin' : undefined
      cellStyle.border.right!.style = tableOption.value.border ? 'thin' : undefined
      cellStyle.border.bottom!.style = tableOption.value.border ? 'thin' : undefined
      cellStyle.border.left!.style = tableOption.value.border ? 'thin' : undefined
      cellStyle.border.top!.color = { argb: rgbaToArgbHEX(tableOption.value.borderColor) }
      cellStyle.border.right!.color = { argb: rgbaToArgbHEX(tableOption.value.borderColor) }
      cellStyle.border.bottom!.color = { argb: rgbaToArgbHEX(tableOption.value.borderColor) }
      cellStyle.border.left!.color = { argb: rgbaToArgbHEX(tableOption.value.borderColor) }
      // cellStyle.border = tableOption.value.borderColor
      tableCellData.value[rowIndex][colIndex] = {
        value: cellValue,
        // @ts-ignore
        style: cellStyle
      }
    }
  }
}
setTableOption()

// 动态单元格样式
const styleCell = (cel: TableCellData, rowIndex: number, colIndex: number): any => {
  const style = {
    top: sum(maxHeight.value, 0, rowIndex - 1) + 'px',
    left: sum(maxWidth.value, 0, colIndex - 1) + 'px',
    minWidth: maxWidth.value[colIndex] + 'px',
    minHeight: maxHeight.value[rowIndex] + 'px',
    border: border.value ? '1px solid' : '',
    borderColor: borderColor.value,
    color: argbHEXToRgba(cel.style?.font.color.argb),
    fontSize: cel.style?.font.size + 'px',
    textAlign: cel.style?.alignment.horizontal,
    // @ts-ignore
    backgroundColor: argbHEXToRgba(cel.style!.fill.fgColor.argb)
  }
  return style
}

// const reSize = () => {
//   const childNodesRows = table.value.childNodes
//   // 子元素第一位不是节点
//   debugger
//   const childNodesCols = childNodesRows[focusCell.value[0] + 1].childNodes
//   childNodesCols[focusCell.value[1] + 1].style.width = maxWidth.value[focusCell.value[1]] + 'px'
//   childNodesCols[focusCell.value[1] + 1].style.height = maxHeight.value[focusCell.value[1]] + 'px'
// }

// 计算单元格最大宽度与最大高度 依据性能考虑是否节流
const maxWidth = computed(() => {
  const maxList = []
  for (let cols = 0; cols < colsForComputed; cols++) {
    let maxLenth = 30
    for (let rows = 0; rows < rowsForComputed; rows++) {
      const temp = tableCellData.value[rows][cols].value!.toString().length * tableCellData.value[rows][cols].style!.font.size / 1.6
      maxLenth = Math.max(maxLenth, temp)
    }
    maxList.push(maxLenth)
  }
  return maxList
})
const maxHeight = computed(() => {
  const maxList = []
  for (let rows = 0; rows < rowsForComputed; rows++) {
    let maxLenth = 20
    for (let cols = 0; cols < colsForComputed; cols++) {
      const temp = tableCellData.value[rows][cols].style!.font.size + 6
      maxLenth = Math.max(maxLenth, temp)
    }
    maxList.push(maxLenth)
  }
  return maxList
})
const computeMerge = () => {
  for (const item of mergeCoordinate.value) {
    const childNodesRows = table.value.childNodes
    // 子元素第一位不是节点
    const childNodesCols = childNodesRows[item[0]].childNodes
    childNodesCols[item[1]].style.width = sum(maxWidth.value, item[1] - 1, item[3] - 1) - 1 + 'px'
    childNodesCols[item[1]].style.height = sum(maxHeight.value, item[0] - 1, item[2] - 1) - 1 + 'px'
  }
}

const whetherMerge = (row: number, col: number) => {
  return focusCell.value[0] <= row && focusCell.value[1] <= col && focusLastCell.value[0] >= row && focusLastCell.value[1] >= col
}

// ========动作状态========
// 当前焦点单元格
const focusCell = ref([0, 0])
const focusLastCell = ref([-1, -1])
const table = ref()

// 右键菜单属性
const rightVisible = ref(false)
const rightDiv = ref()
// 合并单元格
const merge = () => {
  if (!(focusCell.value[0] === focusLastCell.value[0] && focusCell.value[1] === focusLastCell.value[1])) {
    for (const item of mergeCoordinate.value) {
      if (focusCell.value[0] + 1 === item[0] && focusCell.value[1] + 1 === item[1]) {
        if (focusLastCell.value[1] + 1 >= item[3] && focusLastCell.value[0] + 1 >= item[2]) {
          mergeCoordinate.value = mergeCoordinate.value.filter((cell) => {
            return cell !== item
          })
        } else {
          console.log('无法合并单元格')
          return 0
        }
      }
    }
    mergeCoordinate.value.push([focusCell.value[0] + 1, focusCell.value[1] + 1, focusLastCell.value[0] + 1, focusLastCell.value[1] + 1])
    const childNodesRows = table.value.childNodes
    // 子元素第一位不是节点
    const childNodesCols = childNodesRows[focusCell.value[0] + 1].childNodes
    childNodesCols[focusCell.value[1] + 1].style.width = sum(maxWidth.value, focusCell.value[1], focusLastCell.value[1]) - 1 + 'px'
    childNodesCols[focusCell.value[1] + 1].style.height = sum(maxHeight.value, focusCell.value[0], focusLastCell.value[0]) - 1 + 'px'
    childNodesCols[focusCell.value[1] + 1].style.zIndex = childNodesCols[focusCell.value[1] + 1].style.zIndex ? childNodesCols[focusCell.value[1] + 1].style.zIndex.number + 100 : '100'
    cancel()
    focusLastCell.value = [-1, -1]
  }
}

// 是否正在拖拽
let isDragging = false

const mouseDown = (rowIndex: number, colIndex: number, event: MouseEvent) => {
  if (event.button === 0) {
    isDragging = true
    focusCell.value[0] = rowIndex
    focusCell.value[1] = colIndex
    fontColor.value = argbHEXToRgba(tableCellData.value[focusCell.value[0]][focusCell.value[1]].style!.font.color.argb!)
    backgroundColor.value = ''
  } else if (event.button === 2) { // 鼠标右键菜单
    rightVisible.value = true
    nextTick(() => {
      const x = event.clientX
      const y = event.clientY
      rightDiv.value.style.top = `${y}px`
      rightDiv.value.style.left = `${x}px`
    })
  }
}
// 鼠标松开
const mouseUp = () => {
  isDragging = false
}
// 取消右键菜单
const cancel = () => {
  rightVisible.value = false
  focusLastCell.value[0] = -1
  focusLastCell.value[1] = -1
}

// 移入移出鼠标样式
const mouseenter = (rowIndex: number, colIndex: number) => {
  if (isDragging) {
    focusLastCell.value[0] = rowIndex
    focusLastCell.value[1] = colIndex
  }
}

// 导出excel
const createExcel = () => {
  const temp = { sheetName: 'test', mergeCoordinate: mergeCoordinate.value, tableData: tableCellData.value, columnsCount: tableOption.value.cols }
  downloadExcel(sheetDataListToExcel([temp]))
}

// 计算数组中前n个数之和
const sum = (arr: number[], first: number, index: number) => {
  let sumLeft = 0
  for (index; index >= first; index--) {
    sumLeft += arr[index]
  }
  return sumLeft
}

watch(tableCellData, () => {
  computeMerge()
}, { deep: true })

</script>

<template>
  <div class="global-c-main-content">
    <div class="left" @click="cancel">
      <div class="table" ref="table" @contextmenu.prevent @click.stop>
        <div class="show-row" v-for="(row, rowIndex) in tableCellData" :key="rowIndex">
          <div :class="['showCell', { merge: whetherMerge(rowIndex, colIndex) }]" v-for="(cel, colIndex) in row"
            :key="rowIndex + ',' + colIndex" @mousedown="mouseDown(rowIndex, colIndex, $event)" @mouseup="mouseUp"
            :style="styleCell(cel, rowIndex, colIndex)" @mouseenter="mouseenter(rowIndex, colIndex)">{{ cel.value }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title row">表格属性</div>
      <div class="row"><span>行: </span><el-input-number size="small" v-model="tableOption.rows" :min="1" :step="1"
          step-strictly /></div>
      <div class="row"><span>列: </span><el-input-number size="small" v-model="tableOption.cols" :min="1" :step="1"
          step-strictly /></div>
      <div class="row"><span>边框颜色: </span><el-color-picker v-model="tableOption.borderColor" show-alpha /></div>
      <div class="row"><span>边框粗细: </span>
        <el-radio-group v-model="tableOption.border">
          <el-radio :label="true">有边框</el-radio>
          <el-radio :label="false">无边框</el-radio>
        </el-radio-group>
      </div>
      <div class="row" style="text-align: right;"><el-button size="small" @click="setTableOption">应用</el-button></div>
      <div class="line row"></div>
      <div class="title row">单元格属性</div>
      <div class="row">{{ focusCell }}</div>
      <div class="row"><span>显示值: </span><el-input v-model="tableCellData[focusCell[0]][focusCell[1]].value"
          placeholder="Please input" /></div>
      <div class="row"><span>绑定值: </span><el-input placeholder="Please input" /></div>
      <div class="row"><span>字号: </span><el-input-number
          v-model="tableCellData[focusCell[0]][focusCell[1]].style!.font.size" :min="1" :max="72" :step="1"
          step-strictly /></div>
      <div class="row"><span>对齐方式: </span>
        <el-select v-model="tableCellData[focusCell[0]][focusCell[1]].style!.alignment.horizontal">
          <el-option v-for="item in alignOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="row"><span>字体色: </span><el-color-picker v-model="fontColor" @change="changeFontColor" show-alpha />
      </div>
      <div class="row"><span>背景色: </span><el-color-picker v-model="backgroundColor" @change="changeBackgroundColor"
          show-alpha /></div>
    </div>
  </div>
  <div ref="rightDiv" class="rightDiv" v-if="rightVisible">
    <div class='menu' @click="merge">合并单元格</div>
    <div class='menu' @click="merge">撤销</div>
    <div class='menu' @click="createExcel">生成</div>
  </div>
</template>

<style scoped lang="scss">
.rightDiv {
  position: absolute;
  border-radius: 5px;
  padding: 5px 3px;
  border: 1px solid #ddd;
  background-color: #ffffff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 -1px 1px rgba(0, 0, 0, .1);
  z-index: 1000;

  .menu {
    padding: 3px 10px;
    cursor: pointer;
    border-radius: 3px;
    color: #4e4e4e;
    font-size: 12px;
  }
}

.global-c-main-content {
  flex-direction: row;

  .left {
    height: 100%;
    flex-grow: 1;
    background-color: aqua;
    display: flex;
    justify-content: center;

    .table {
      position: relative;

      .showCell {
        position: absolute;
        height: 20px;
        min-width: 30px;
        // width: max-content;
        cursor: pointer;
        user-select: none;
        background-color: #ffffff;
      }

      .merge {
        background-color: #4e4e4e !important
      }
    }
  }

  .right {
    height: 100%;
    width: 400px;
    padding: 0 20px;

    .row {
      margin-bottom: 10px;
    }

    .title {
      font-size: 16px;
    }

    .line {
      border-bottom: 1px solid #dcdfe6;
    }
  }
}
</style>
