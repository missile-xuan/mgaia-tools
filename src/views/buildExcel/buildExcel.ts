import * as ExcelJS from 'exceljs'
import lodash from 'lodash'

// 单元格样式
export interface CellStyle {
  // 字体样式
  font: ExcelJS.Font
  // 填充样式
  fill: ExcelJS.Fill
  // 边框样式
  border: Partial<ExcelJS.Borders>
  // 对齐样式
  alignment: Partial<ExcelJS.Alignment>
}

/**
 * 数据结构中表格单元格数据字段
 */
export interface TableCellData {
  value: null | string | number
  style?: CellStyle
}

/**
 * 数据结构中 通过dom获取到单元格数据字段
 * colSpan rowSpan 用于计算合并
 */
export interface TableDomCellData extends TableCellData {
  colSpan: number
  rowSpan: number
}

/**
 * sheet页数据结构
 */
export interface SheetData {
  sheetName: string // sheet名字
  // 按开始行，开始列，结束行，结束列合并（相当于 K10:M12）
  // worksheet.mergeCells(10,11,12,13);
  mergeCoordinate: [number, number, number, number][] // 需要合并的单元格数据
  tableData: TableCellData[][] // 数据
  columnsCount: number // 列数
}

// dom->sheet->sheet合并

/**
 * 通过tableDom构建sheet页数据
 * @param tableDom HTMLTableElement
 * @param domStyle boolean 是否启用样式
 * @param sheetName string
 * @returns SheetData
 */
export function tableDomToSheetData (
  tableDom: HTMLTableElement,
  domStyle: boolean = false,
  sheetName: string = 'sheet1'
): SheetData {
  const trDomList = tableDom.querySelectorAll('tr')

  // 构造数据
  const tableData: TableDomCellData[][] = []
  // 表头长度计数
  let columnsCount = 0
  for (let tri = 0; tri < trDomList!.length; tri++) {
    let tempColumnsCount = 0
    const tdList =
      trDomList![tri].querySelectorAll<HTMLTableCellElement>('th,td')
    // 当前插入的td坐标
    let addTdI = 0
    for (let tdi = 0; tdi < tdList.length; tdi++) {
      // 长度计数
      tempColumnsCount += tdList[tdi].colSpan as number
      if (lodash.isNil(tableData[tri])) tableData[tri] = []

      // 添加当前数据格子
      // 如果当前位置被挤占向后偏移
      while (!lodash.isNil(tableData[tri][addTdI])) { addTdI++ }
      // 设置当前数据
      tableData[tri][addTdI] = {
        value: tdList[tdi].textContent,
        colSpan: tdList[tdi].colSpan,
        rowSpan: tdList[tdi].rowSpan
      }
      // 如果开启样式获取 加载样式
      if (domStyle) setDomStyle(tableData[tri][addTdI], tdList[tdi])
      // 如果涉及合并单元格先纵向补空数据格子 因为 先进行横向的话会导致下一行偏移量丢失
      // 合并单元格补充数据
      for (let colOffset = 0; colOffset < tdList[tdi].colSpan; colOffset++) {
        // 先找纵向
        for (let i = 1; i < tdList[tdi].rowSpan; i++) {
          if (lodash.isNil(tableData[tri + i])) tableData[tri + i] = []
          tableData[tri + i][addTdI] = {
            value: null,
            colSpan: 1,
            rowSpan: 1
          }
        }
        // 跳过原始数据格
        if (colOffset === 0) {
          addTdI++
          continue
        }
        // 再处理横向
        tableData[tri][addTdI] = {
          value: null,
          colSpan: 1,
          rowSpan: 1
        }
        addTdI++
      }
    }
    if (columnsCount < tempColumnsCount) columnsCount = tempColumnsCount
  }
  // 构造数据
  // 需要合并单元格的坐标数组
  const mergeCoordinate: [number, number, number, number][] = []
  for (const rowIndex in tableData) {
    const rowData = []
    for (const colIndex in tableData[rowIndex]) {
      rowData.push(tableData[rowIndex][colIndex]?.value)
      console.log()
      if (
        tableData[rowIndex][colIndex].colSpan !== 1 ||
        tableData[rowIndex][colIndex].rowSpan !== 1
      ) {
        // 如果行列合并存在不为1的情况则需要进行合并单元格操作
        // 按开始行，开始列，结束行，结束列合并（相当于 K10:M12）
        mergeCoordinate.push([
          parseInt(rowIndex) + 1,
          parseInt(colIndex) + 1,
          parseInt(rowIndex) + tableData[rowIndex][colIndex]!.rowSpan,
          parseInt(colIndex) + tableData[rowIndex][colIndex]!.colSpan
        ])
      }
    }
  }
  return {
    sheetName,
    mergeCoordinate,
    tableData,
    columnsCount
  }
}

export interface JsonData {
  [key:string]:string|number,
}
/**
 * json数据转SheetData
 * @param selectedList 选中需要导出的key值
 * @param jsonData json数据体
 * @param sheetName sheet页名字 可选
 * @returns ExcelJS.Workbook
 */
export function jsonToSheetData (
  selectedList:string[],
  jsonData:JsonData[],
  sheetName: string = 'sheet1'
) {
  const sheetData:SheetData = {
    sheetName,
    mergeCoordinate: [],
    tableData: [],
    columnsCount: 0
  }
  // 创建工作簿
  for (const data of jsonData) {
    const rowData:TableCellData[] = []
    for (const key of selectedList) {
      rowData.push({
        value: data[key]
      })
    }
    sheetData.tableData.push(rowData)
  }
  return sheetData
}
/**
 * 初始化单元格样式参数
 * @param cellData
 * @returns
 */
function initCellDataStyle (cellData: TableCellData) {
  if (!cellData.style) {
    cellData.style = {
      font: {
        name: 'Arial',
        size: 16,
        family: 2,
        scheme: 'major',
        charset: 1,
        color: { argb: 'FFFF0000' },
        bold: false,
        italic: false,
        underline: false,
        vertAlign: 'subscript',
        strike: false,
        outline: false
      },
      alignment: {
        vertical: 'bottom', horizontal: 'left'
      },
      fill: {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {}
      },
      border: {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      }
    }
  }
  return cellData
}
/**
 * 将要dom中样式设置到单元格数据中
 * @param cellData 表格单元格数据对象
 * @param cellDom 表格单元格dom
 * @returns TableCellData
 */
function setDomStyle (cellData: TableCellData, cellDom: HTMLTableCellElement) {
  // 初始化单元格中的style对象
  initCellDataStyle(cellData)
  // 加粗
  console.log(cellDom.style)
  if (parseInt(getComputedStyle(cellDom).fontWeight) > 500) {
    cellData.style!.font.bold = true
  }
  // 字体颜色
  cellData.style!.font.color.argb = rgbaToArgbHEX(getComputedStyle(cellDom).color)
  // 背景色
  const fgColor = rgbaToArgbHEX(getComputedStyle(cellDom).backgroundColor)
  if (fgColor !== '00000000') {
    (cellData.style!.fill as ExcelJS.FillPattern).fgColor!.argb = fgColor
  }
  // 边框颜色
  cellData.style!.border.top!.color = { argb: rgbaToArgbHEX(getComputedStyle(cellDom).borderLeftColor) }
  cellData.style!.border.right!.color = { argb: rgbaToArgbHEX(getComputedStyle(cellDom).borderLeftColor) }
  cellData.style!.border.bottom!.color = { argb: rgbaToArgbHEX(getComputedStyle(cellDom).borderLeftColor) }
  cellData.style!.border.left!.color = { argb: rgbaToArgbHEX(getComputedStyle(cellDom).borderLeftColor) }
  // 对齐样式
  // @ts-ignore
  cellData.style!.alignment.horizontal = getComputedStyle(cellDom).textAlign

  return cellData
}

/**
 * 向下方追加合并sheet页数据
 * @param sheetDataList 需要合并的sheet页数据列表
 * @param sheetName 合并后sheet页名
 * @returns SheetData
 */
export function mergeDownSheetData (
  sheetDataList: SheetData[],
  sheetName: string = 'sheet1'
) {
  // 行偏移量
  let rowOffset = 0

  // 汇总sheet
  const summarySheet: SheetData = {
    sheetName,
    mergeCoordinate: [],
    tableData: [],
    columnsCount: 0
  }

  // 进行循环合并
  for (let i = 0; i < sheetDataList.length; i++) {
    const sheet = sheetDataList[i]
    // 设置最大的表头
    if (summarySheet.columnsCount < sheet.columnsCount) summarySheet.columnsCount = sheet.columnsCount
    // 追加数据
    summarySheet.tableData = [...summarySheet.tableData, ...sheet.tableData]
    // 追加合并单元格数据
    for (const merge of sheet.mergeCoordinate) {
      summarySheet.mergeCoordinate.push([
        merge[0] + rowOffset,
        merge[1],
        merge[2] + rowOffset,
        merge[3]
      ])
    }
    // 调整行偏移量
    rowOffset += sheet.tableData.length
  }

  return summarySheet
}

/**
 * 向右追加合并sheet页数据
 * @param sheetDataList
 * @param sheetName
 */
export function mergeRightSheetData (
  sheetDataList: SheetData[],
  sheetName: string = 'sheet1'
) {
  // 列偏移量
  let columnOffest = 0
  // 汇总sheet
  const summarySheet: SheetData = {
    sheetName,
    mergeCoordinate: [],
    tableData: [],
    columnsCount: 0
  }

  // 对传入sheet页列表进行循环
  for (let i = 0; i < sheetDataList.length; i++) {
    const sheet = sheetDataList[i]
    summarySheet.columnsCount += sheet.columnsCount
    // 循环sheet页每一行进行数据添加
    for (let rowIndex = 0; rowIndex < sheet.tableData.length; rowIndex++) {
      const row = sheet.tableData[rowIndex]
      // 如果汇总sheet此行为空 可直接添加
      if (lodash.isNil(summarySheet.tableData[rowIndex])) {
        summarySheet.tableData[rowIndex] = row
      } else {
        // 否则逐个添加
        // 注意不能直接向后追加 因为行数据不一定齐
        for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
          // 注意要加columnOffest偏移
          summarySheet.tableData[rowIndex][columnOffest + cellIndex] = row[cellIndex]
        }
      }
    }

    // 追加合并单元格数据
    for (const merge of sheet.mergeCoordinate) {
      summarySheet.mergeCoordinate.push([
        merge[0],
        merge[1] + columnOffest,
        merge[2],
        merge[3] + columnOffest
      ])
    }
    // 调整行偏移量
    columnOffest += sheet.columnsCount
  }
  return summarySheet
}

/**
 * 通过sheet页构建表格对象
 * @param sheetDataList
 * @returns ExcelJS.Workbook
 */
export function sheetDataListToExcel (sheetDataList: SheetData[]) {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook()
  for (const sheetData of sheetDataList) {
    // 添加sheet页
    const sheet = workbook.addWorksheet(sheetData.sheetName)
    // 创建表头
    const columns = []
    for (let i = 0; i < sheetData.columnsCount; i++) {
      columns.push({ header: undefined, key: i + 1 + '' })
    }
    // 载入数据
    // for (const rowDataList of sheetData.tableData) {
    for (const rowIndex in sheetData.tableData) {
      const row = sheet.addRow(
        sheetData.tableData[rowIndex].map(row => {
          return row.value
        })
      )
      // 设置样式
      for (const cellIndex in sheetData.tableData[rowIndex]) {
        // 数组从0开始 getCell从1开始
        setCellStyle(
          row.getCell(parseInt(cellIndex) + 1),
          sheetData.tableData[rowIndex][cellIndex].style
        )
      }
    }
    // 合并单元格
    for (const mergeData of sheetData.mergeCoordinate) {
      sheet.mergeCells(mergeData[0], mergeData[1], mergeData[2], mergeData[3])
    }
  }
  return workbook
}

/**
 * 将rgba转换为十六进制表示的argb
 * @param rgba
 * @returns
 */
function rgbaToArgbHEX (rgba: string) {
  let result = ''
  const reg = /\(.*\)/ // 字符串匹配括号内的子串
  let rgbaArr:(string)[] = []
  result = reg.exec(rgba)![0] // 截取'(255,255,255,0.6)'
  result = result.substr(1, result.length - 2) // 截取十进制的'255,255,255,0.6'
  rgbaArr = result.split(',') // 字符串切割 ['255','255','255','0.6']
  const a = Math.floor(parseFloat(rgbaArr[3] ? rgbaArr[3] : '0') * 255).toString(16)
  const r = parseFloat(rgbaArr[0]).toString(16)
  const g = parseFloat(rgbaArr[1]).toString(16)
  const b = parseFloat(rgbaArr[2]).toString(16)
  return [
    parseInt(a) < 10 ? '0' + a : a,
    parseInt(r) < 10 ? '0' + r : r,
    parseInt(g) < 10 ? '0' + g : g,
    parseInt(b) < 10 ? '0' + b : b
  ].join('')
}

/**
 * 设置单元格样式 将传入样式设置到单元格
 * @param cell 单元格
 * @param style 样式
 * @returns ExcelJS.Cell
 */
function setCellStyle (cell: ExcelJS.Cell, style?: CellStyle) {
  if (lodash.isNil(style)) return
  cell.font = style.font
  cell.fill = style.fill
  cell.border = style.border
  // 设置宽度
  let nowColWidth = cell.worksheet.getColumn(cell.col).width
  // debugger
  // if (cell.col.toString() === '1') {
  //   debugger
  // }
  if (lodash.isNil(nowColWidth)) nowColWidth = 0
  let cellWidth = cell.text.length * 2
  if (cellWidth < 6) cellWidth = 6
  if (nowColWidth < cellWidth) {
    cell.worksheet.getColumn(cell.col).width = cellWidth
    // * cell.font.size!
  }

  // 设置对齐样式
  cell.alignment = style.alignment
  return cell
}
/**
 * 通过tabledom构建excel
 * @param tableDom HTMLTableElement
 * @param domStyle boolean 是否启用样式
 * @returns ExcelJS.Workbook
 */
export function tableDomToExcel (
  tableDom: HTMLTableElement,
  styleType?: boolean,
  sheetName: string = 'sheet1'
) {
  return sheetDataListToExcel([
    tableDomToSheetData(tableDom, styleType, sheetName)
  ])
}

/**
 * 导出excel下载
 * @param workbook ExcelJS.Workbook
 */
export async function downloadExcel (workbook: ExcelJS.Workbook, name:string = 'exceljs') {
  // 导出
  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer])
  const aLink = document.createElement('a')
  aLink.download = name + '.xlsx'
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
  aLink.remove()
}
