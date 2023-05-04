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
  alignment: {}
}

// 数据结构中表格单元格数据字段
export interface TableCellData {
  value: null | string
  colSpan: number
  rowSpan: number
  style?: CellStyle
}

// sheet页数据结构
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
  const tableData: TableCellData[][] = []
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
      // 横向行数据添加
      // 因为涉及到之前上方行的纵向合并但原告导致的挤占问题 所以直接从第一个开始插空就好
      // 数据模型不存在空单元 所以没问题
      if (lodash.isNil(tableData[tri])) tableData[tri] = []
      while (!lodash.isNil(tableData[tri][addTdI])) {
        addTdI++
      }
      tableData[tri][addTdI] = {
        value: tdList[tdi].innerText,
        colSpan: tdList[tdi].colSpan,
        rowSpan: tdList[tdi].rowSpan
      }
      // 如果开启样式获取 加载样式
      if (domStyle) setDomStyle(tableData[tri][addTdI], tdList[tdi])
      // 横向合并单元格补充空数据
      for (let i = 1; i < tdList[tdi].colSpan; i++) {
        addTdI++
        tableData[tri][addTdI] = {
          value: null,
          colSpan: 1,
          rowSpan: 1
        }
      }
      // 纵向合并单元格补充数据
      for (let i = 1; i < tdList[tdi].rowSpan; i++) {
        for (let j = 0; j < tdList[tdi].colSpan; j++) {
          if (lodash.isNil(tableData[tri + i])) tableData[tri + i] = []
          tableData[tri + i][tdi + j] = {
            value: null,
            colSpan: 1,
            rowSpan: 1
          }
        }
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
        tableData[rowIndex][colIndex]?.colSpan !== 1 ||
        tableData[rowIndex][colIndex]?.rowSpan !== 1
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
      alignment: {},
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
  // 文字颜色
  // 对齐样式
  return cellData
}

/**
 * 合并sheet页数据
 * @param sheetDataList 需要合并的sheet页数据列表
 * @param sheetName 合并后sheet页名
 * @returns SheetData
 */
export function mergeSheetData (
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

// 设置单元格样式
function setCellStyle (cell: ExcelJS.Cell, style?: CellStyle) {
  if (lodash.isNil(style)) return
  cell.font = style.font
  cell.fill = style.fill
  cell.border = style.border
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
export async function downloadExcel (workbook: ExcelJS.Workbook) {
  // 导出
  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer])
  const aLink = document.createElement('a')
  aLink.download = 'exceljs.xlsx'
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
  aLink.remove()
}
