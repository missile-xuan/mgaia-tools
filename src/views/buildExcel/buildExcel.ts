import * as ExcelJS from 'exceljs'
import lodash from 'lodash'

// 数据结构中表格单元格数据字段
export interface TableCellData {
  value: null|string;
  colSpan: number;
  rowSpan: number;
}

// sheet页数据结构
export interface SheetData{
  sheetName: string // sheet名字
  mergeCoordinate: [number, number, number, number][] // 需要合并的单元格数据
  tableData: TableCellData[][] // 数据
  columnsCount: number // 列数
}

// dom->sheet->sheet合并

/**
 * 通过tableDom构建sheet页数据
 * @param tableDom HTMLTableElement
 * @param sheetName string
 * @returns SheetData
 */
export function tableDomToSheetData (tableDom:HTMLTableElement, sheetName: string):SheetData {
  const trDomList = tableDom.querySelectorAll('tr')

  // 构造数据
  const tableData:TableCellData[][] = []
  // 表头长度计数
  let columnsCount = 0
  for (let tri = 0; tri < trDomList!.length; tri++) {
    let tempColumnsCount = 0
    const tdList = trDomList![tri].querySelectorAll<HTMLTableCellElement>('th,td')
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
  const mergeCoordinate:[number, number, number, number][] = []
  for (const rowIndex in tableData) {
    const rowData = []
    for (const colIndex in tableData[rowIndex]) {
      rowData.push(tableData[rowIndex][colIndex]?.value)
      console.log()
      if (tableData[rowIndex][colIndex]?.colSpan !== 1 || tableData[rowIndex][colIndex]?.rowSpan !== 1) {
        // 如果行列合并存在不为1的情况则需要进行合并单元格操作
        // 按开始行，开始列，结束行，结束列合并（相当于 K10:M12）
        mergeCoordinate.push(
          [
            parseInt(rowIndex) + 1, parseInt(colIndex) + 1,
            parseInt(rowIndex) + tableData[rowIndex][colIndex]!.rowSpan,
            parseInt(colIndex) + tableData[rowIndex][colIndex]!.colSpan
          ]
        )
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

export function mergeSheetData (sheetDataList: SheetData[], sheetName:string = 'sheet1') {
  // 行偏移量
  let rowOffset = 0

  // 最大列数
  let maxColumnsCount = 0

  
}

/**
 * 通过sheet页构建表格对象
 * @param sheetDataList
 * @returns ExcelJS.Workbook
 */
export function sheetDataListToExcel (sheetDataList:SheetData[]) {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook()
  for (const sheetData of sheetDataList) {
    // 添加sheet页
    const sheet = workbook.addWorksheet(sheetData.sheetName)
    // 创建表头
    const columns = []
    for (let i = 0; i < sheetData.columnsCount; i++) {
      columns.push(
        { header: undefined, key: i + 1 + '' }
      )
    }
    // 载入数据
    for (const rowDataList of sheetData.tableData) {
      sheet.addRow(rowDataList.map(row => { return row.value }))
    }
    // 合并单元格
    for (const mergeData of sheetData.mergeCoordinate) {
      sheet.mergeCells(mergeData[0], mergeData[1], mergeData[2], mergeData[3])
    }
  }
  return workbook
}

/**
 * 通过tabledom构建excel
 * @param tableDom HTMLTableElement
 * @returns ExcelJS.Workbook
 */
export function tableDomToExcel (tableDom:HTMLTableElement, sheetName:string = 'sheet1') {
  return sheetDataListToExcel([tableDomToSheetData(tableDom, sheetName)])
}

/**
 * 导出excel下载
 * @param workbook ExcelJS.Workbook
 */
export async function downloadExcel (workbook:ExcelJS.Workbook) {
  // 导出
  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer])
  const aLink = document.createElement('a')
  aLink.download = 'exceljs.xlsx'
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
  aLink.remove()
}
