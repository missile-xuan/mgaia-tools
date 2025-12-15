import { buildEchartPdf } from "./buildEchartPdfTest"
onmessage = (e) => {

  postMessage(buildEchartPdf(e.data))
}
