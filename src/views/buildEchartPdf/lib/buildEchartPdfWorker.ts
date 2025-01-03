import * as echarts from 'echarts'
import PdfWorker from './pdfWorker.ts?worker'
// 数据结构
export interface EchartData {
  title: string // 外层标题
  list: {
    title: string // 分组标题
    list: {
      value?: number, // 指标值
      index_unit?: string, // 指标单位
      name?: string, // 指标名称
      limit_level?: string // 预警等级
      list: {
        value: number,
        d_date: string
      }[]
    }[]
  }[]
}

export function buildEchartPdfWorker (buildData: EchartData[]) {
  const time = new Date().getTime()
  const worker = new PdfWorker()
  worker.onmessage = e => {
    blobToFile(e.data, 'worker导出.pdf')
    worker.terminate() // 终止操作
    console.log('worker线程导出', new Date().getTime() - time)

  }
  const A4_WIDTH = 595.28 // A4纸宽度 （jspdf的定义）
  const A4_HEIGHT = 841.89 // A4纸高度
  const pageMargin = 40 // 页边距
  const lineHeight = 20 // 行高
  // echart图片宽度 = (A4宽度 - 页边距 * 2) / 2 - 行高
  const echartWidth = (A4_WIDTH - pageMargin * 2) / 2 - lineHeight // echart宽度
  const echartHeight = echartWidth * 0.9 // echart高度

  // const canvas = document.createElement('canvas')
  // canvas.width = echartWidth
  // canvas.height = echartHeight
  const canvas = new OffscreenCanvas(echartWidth, echartHeight)
  const echartObj = echarts.init(canvas as unknown as HTMLCanvasElement)

  const chartOptions = {
    title: {
      text: 'Echart导出pdf',
      textStyle: {
        fontSize: 12
      }
    },
    grid: {
      top: 30,
      left: 50
    },
    animation: false,
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }

  let currentY = pageMargin
  for (const category of buildData) {
    if (currentY > A4_HEIGHT - echartHeight - pageMargin - lineHeight * 2) {
      worker.postMessage({ type: 'addPage' })
      currentY = pageMargin
    }
    // 写入标题
    currentY += lineHeight
    worker.postMessage({ type: 'text', fontSize: 20, text: category.title, x: pageMargin, y: currentY, align: 'left' })

    for (const group of category.list) {
      // 写入分组标题
      currentY += lineHeight
      worker.postMessage({ type: 'text', fontSize: 15, text: group.title, x: A4_WIDTH / 2, y: currentY, align: 'center' })
      for (let i = 0; i < group.list.length; i++) {
        const item = group.list[i]
        chartOptions.title.text = `${item.name}: ${item.value} ${item.index_unit ? item.index_unit : ''}   ${item.limit_level ? ('等级:' + item.limit_level) : ''}`
        chartOptions.xAxis.data = item.list.map(i => i.d_date)
        chartOptions.series[0].data = item.list.map(i => i.value)
        // 数值差距过大 需要动态计算y轴宽度
        chartOptions.grid.left = Math.max(...chartOptions.series[0].data).toFixed(0).toString().length * 10
        echartObj.setOption(chartOptions)
        const image = echartObj.getDataURL({
          type: 'png',
          pixelRatio: 2,
          backgroundColor: '#fff'
        })
        if (currentY + lineHeight + echartHeight > A4_HEIGHT - pageMargin) {
          worker.postMessage({ type: 'addPage' })
          currentY = pageMargin
        }
        const x = i % 2 === 0 ? pageMargin : (pageMargin + echartWidth + lineHeight)
        worker.postMessage({ type: 'addImage', image, format: 'PNG', x, y: currentY + lineHeight, width: echartWidth, height: echartHeight })
        if (i % 2 === 1) {
          currentY += echartHeight
          // currentY += lineHeight
        }
      }
      if (group.list.length % 2 === 1) {
        currentY += echartHeight
        currentY += lineHeight
      }
    }
  }
  worker.postMessage({ type: 'getBlog' })
}

function blobToFile (blob: Blob, fileName: string) {
  const a = document.createElement('a')
  const url = URL.createObjectURL(blob)
  a.href = url
  a.download = fileName
  a.click()
  URL.revokeObjectURL(url)
  a.remove()
}
