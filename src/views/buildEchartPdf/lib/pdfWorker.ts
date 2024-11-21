/**
 * 使用worker线程构建pdf
 */
import SourceHanSansNormal from './source-han-sans-normal'
import { jsPDF } from 'jspdf'

const pdf = new jsPDF('p', 'pt', 'a4')
pdf.addFileToVFS('SourceHanSans', SourceHanSansNormal())
pdf.addFont('SourceHanSans', 'SourceHanSans-Normal', 'normal')
pdf.setFont('SourceHanSans-Normal')

onmessage = (e) => {
  if (e.data.type === 'text') {
    pdf.setFontSize(e.data.fontSize)
    pdf.text(e.data.text, e.data.x, e.data.y, { align: e.data.align })
  } else if (e.data.type === 'addPage') {
    pdf.addPage()
  } else if (e.data.type === 'addImage') {
    pdf.addImage(e.data.image, e.data.format, e.data.x, e.data.y, e.data.width, e.data.height)
  } else if (e.data.type === 'getBlog') {
    postMessage(pdf.output('blob'))
  }
}
