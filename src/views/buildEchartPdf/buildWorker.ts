/**
 * 使用worker线程构建echart图片
 */
import { buildEchartPdf } from './buildEchartPdf'

onmessage = e => {
  debugger
  var global = self
  buildEchartPdf(e.data)
  postMessage('done')
}
