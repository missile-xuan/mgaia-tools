<script setup lang="ts">
import { ref } from 'vue'
import { buildEchartPdf, type EchartData } from './lib/buildEchartPdf'
import { buildEchartPdfWorker } from './lib/buildEchartPdfWorker'
// echart导出pdf

const res: EchartData[] = [
  {
    title: '风险限额指标监控',
    list: [
      {
        list: [
          {
            list: [
              {
                value: 11.8114,
                d_date: '2024-10-09'
              },
              {
                value: 1177371726.2675,
                d_date: '2024-10-10'
              },
              {
                value: 1179109425.7325,
                d_date: '2024-10-11'
              },
              {
                value: 1177702402.765,
                d_date: '2024-10-14'
              },
              {
                value: 1177051448.0125,
                d_date: '2024-10-15'
              },
              {
                value: 1163528133.8025,
                d_date: '2024-10-18'
              },
              {
                value: 1178933825.5825,
                d_date: '2024-10-25'
              },
              {
                value: 4692188275.95,
                d_date: '2024-10-31'
              },
              {
                value: 4674760101.68,
                d_date: '2024-11-01'
              },
              {
                value: 4683822173.1,
                d_date: '2024-11-05'
              }
            ],
            value: 4683822173.1,
            index_unit: '万',
            name: '在管总规模',
            limit_level: '4'
          },
          {
            list: [
              {
                value: 0.25,
                d_date: '2024-10-09'
              },
              {
                value: 0.25,
                d_date: '2024-10-10'
              },
              {
                value: 0.25,
                d_date: '2024-10-11'
              },
              {
                value: 0.25,
                d_date: '2024-10-14'
              },
              {
                value: 0.25,
                d_date: '2024-10-15'
              },
              {
                value: 0.25,
                d_date: '2024-10-18'
              },
              {
                value: 0.25,
                d_date: '2024-10-25'
              },
              {
                value: 14,
                d_date: '2024-10-31'
              },
              {
                value: 14,
                d_date: '2024-11-01'
              },
              {
                value: 14,
                d_date: '2024-11-05'
              }
            ],
            value: 14,
            name: '【T+1】触及预警线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '交易所强平客户数',
            limit_level: '2'
          },
          {
            list: [
              {
                value: 92713.93,
                d_date: '2024-10-09'
              },
              {
                value: 92713.93,
                d_date: '2024-10-10'
              },
              {
                value: 92713.93,
                d_date: '2024-10-11'
              },
              {
                value: 92713.93,
                d_date: '2024-10-14'
              },
              {
                value: 92713.93,
                d_date: '2024-10-15'
              },
              {
                value: 92713.93,
                d_date: '2024-10-18'
              },
              {
                value: 92713.93,
                d_date: '2024-10-25'
              },
              {
                value: 605833.72,
                d_date: '2024-10-31'
              },
              {
                value: 605833.72,
                d_date: '2024-11-01'
              },
              {
                value: 605833.72,
                d_date: '2024-11-05'
              }
            ],
            value: 605833.72,
            index_unit: '万',
            name: '穿仓金额222',
            limit_level: '2'
          },
          {
            list: [
              {
                value: 1149.885275,
                d_date: '2024-10-09'
              },
              {
                value: 11482437.225,
                d_date: '2024-10-10'
              },
              {
                value: 11466510.98,
                d_date: '2024-10-11'
              },
              {
                value: 11458800.6575,
                d_date: '2024-10-14'
              },
              {
                value: 11461289.725,
                d_date: '2024-10-15'
              },
              {
                value: 11446773.71,
                d_date: '2024-10-18'
              },
              {
                value: 11456972.8775,
                d_date: '2024-10-25'
              },
              {
                value: 46083762.06,
                d_date: '2024-10-31'
              },
              {
                value: 46100250.24,
                d_date: '2024-11-01'
              },
              {
                value: 46139560.48,
                d_date: '2024-11-05'
              }
            ],
            value: 46139560.48,
            index_unit: '万',
            name: '【T+1】触及预警线产品规模（万元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '【T+1】触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.032,
                d_date: '2024-10-09'
              },
              {
                value: 0.0376,
                d_date: '2024-10-10'
              },
              {
                value: 0.0386,
                d_date: '2024-10-11'
              },
              {
                value: 0.041375,
                d_date: '2024-10-14'
              },
              {
                value: 0.04775,
                d_date: '2024-10-15'
              },
              {
                value: 0.044075,
                d_date: '2024-10-18'
              },
              {
                value: 0.022475,
                d_date: '2024-10-25'
              },
              {
                value: 13.1019,
                d_date: '2024-10-31'
              },
              {
                value: 13.0827,
                d_date: '2024-11-01'
              },
              {
                value: 13.1237,
                d_date: '2024-11-05'
              }
            ],
            value: 13.1237,
            name: '场外授信使用率',
            limit_level: '2'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '【T+1】触及止损线产品规模（万元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '【T+1】本年度累计触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '【T+1】本年度累计触及止损线产品规模（万元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2,
                d_date: '2024-10-09'
              },
              {
                value: 2.25,
                d_date: '2024-10-10'
              },
              {
                value: 2.25,
                d_date: '2024-10-11'
              },
              {
                value: 2,
                d_date: '2024-10-14'
              },
              {
                value: 2,
                d_date: '2024-10-15'
              },
              {
                value: 2.5,
                d_date: '2024-10-18'
              },
              {
                value: 2,
                d_date: '2024-10-25'
              },
              {
                value: 22,
                d_date: '2024-10-31'
              },
              {
                value: 22,
                d_date: '2024-11-01'
              },
              {
                value: 21,
                d_date: '2024-11-05'
              }
            ],
            value: 21,
            name: '单位净值低于1产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.611,
                d_date: '2024-10-09'
              },
              {
                value: 64064072.05,
                d_date: '2024-10-10'
              },
              {
                value: 64274965.75,
                d_date: '2024-10-11'
              },
              {
                value: 60540394.6,
                d_date: '2024-10-14'
              },
              {
                value: 60745063.635,
                d_date: '2024-10-15'
              },
              {
                value: 101450452.4075,
                d_date: '2024-10-18'
              },
              {
                value: 52197265.205,
                d_date: '2024-10-25'
              },
              {
                value: 391361077.45,
                d_date: '2024-10-31'
              },
              {
                value: 391728580.99,
                d_date: '2024-11-01'
              },
              {
                value: 207460377.88,
                d_date: '2024-11-05'
              }
            ],
            value: 207460377.88,
            name: '【T+1】单位净值低于1产品规模（亿元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0.5,
                d_date: '2024-10-10'
              },
              {
                value: 0.25,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0.25,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              }
            ],
            name: '【T+1】全产品投资占单资产比例超限资产个数'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              }
            ],
            name: '【T+1】单资产投资占单产品比例超限产品个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '在管总产品只数'
          }
        ],
        title: '一级风险限额指标'
      },
      {
        list: [
          {
            list: [
              {
                value: 23,
                d_date: '2024-10-09'
              },
              {
                value: 12.5,
                d_date: '2024-10-10'
              },
              {
                value: 37,
                d_date: '2024-10-11'
              },
              {
                value: 5,
                d_date: '2024-10-14'
              },
              {
                value: 3.5,
                d_date: '2024-10-15'
              },
              {
                value: 2.5,
                d_date: '2024-10-18'
              },
              {
                value: 3,
                d_date: '2024-10-25'
              },
              {
                value: 153,
                d_date: '2024-10-31'
              },
              {
                value: 35,
                d_date: '2024-11-01'
              },
              {
                value: 56,
                d_date: '2024-11-05'
              }
            ],
            value: 56,
            name: '已成交强平手数',
            limit_level: '3'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '新增穿仓金额',
            limit_level: '3'
          }
        ],
        title: '二级风险限额指标'
      },
      {
        list: [
          {
            list: [
              {
                value: 4,
                d_date: '2024-10-09'
              },
              {
                value: 4,
                d_date: '2024-10-10'
              },
              {
                value: 3.75,
                d_date: '2024-10-11'
              },
              {
                value: 4.25,
                d_date: '2024-10-14'
              },
              {
                value: 4,
                d_date: '2024-10-15'
              },
              {
                value: 3.5,
                d_date: '2024-10-18'
              },
              {
                value: 3,
                d_date: '2024-10-25'
              },
              {
                value: 26,
                d_date: '2024-10-31'
              },
              {
                value: 26,
                d_date: '2024-11-01'
              },
              {
                value: 26,
                d_date: '2024-11-05'
              }
            ],
            value: 26,
            name: '触及预警线产品个数',
            limit_level: '4'
          },
          {
            list: [
              {
                value: 9.25,
                d_date: '2024-10-09'
              },
              {
                value: 3.5,
                d_date: '2024-10-10'
              },
              {
                value: 7.25,
                d_date: '2024-10-11'
              },
              {
                value: 2.5,
                d_date: '2024-10-14'
              },
              {
                value: 1.25,
                d_date: '2024-10-15'
              },
              {
                value: 1.75,
                d_date: '2024-10-18'
              },
              {
                value: 2.75,
                d_date: '2024-10-25'
              },
              {
                value: 63,
                d_date: '2024-10-31'
              },
              {
                value: 22,
                d_date: '2024-11-01'
              },
              {
                value: 22,
                d_date: '2024-11-05'
              }
            ],
            value: 22,
            name: '已成交强平客户数',
            limit_level: '4'
          }
        ],
        title: '三级风险限额指标'
      },
      {
        list: [
          {
            list: [
              {
                value: 9.5,
                d_date: '2024-10-09'
              },
              {
                value: 3.5,
                d_date: '2024-10-10'
              },
              {
                value: 8.25,
                d_date: '2024-10-11'
              },
              {
                value: 2.75,
                d_date: '2024-10-14'
              },
              {
                value: 1.25,
                d_date: '2024-10-15'
              },
              {
                value: 1.75,
                d_date: '2024-10-18'
              },
              {
                value: 2.75,
                d_date: '2024-10-25'
              },
              {
                value: 72,
                d_date: '2024-10-31'
              },
              {
                value: 22,
                d_date: '2024-11-01'
              },
              {
                value: 23,
                d_date: '2024-11-05'
              }
            ],
            value: 23,
            name: '已成交强平客户人次',
            limit_level: '2'
          }
        ],
        title: '子公司一级限额指标'
      },
      {
        list: [
          {
            list: [
              {
                value: 6,
                d_date: '2024-10-09'
              },
              {
                value: 6,
                d_date: '2024-10-10'
              },
              {
                value: 6,
                d_date: '2024-10-11'
              },
              {
                value: 6,
                d_date: '2024-10-14'
              },
              {
                value: 6,
                d_date: '2024-10-15'
              },
              {
                value: 6,
                d_date: '2024-10-18'
              },
              {
                value: 6,
                d_date: '2024-10-25'
              },
              {
                value: 36,
                d_date: '2024-10-31'
              },
              {
                value: 36,
                d_date: '2024-11-01'
              },
              {
                value: 36,
                d_date: '2024-11-05'
              }
            ],
            value: 36,
            name: '穿仓客户数222',
            limit_level: '3'
          }
        ],
        title: '子公司二级限额指标'
      }
    ]
  },
  {
    title: '各业务风险指标监控',
    list: [
      {
        list: [
          {
            list: [
              {
                value: 25.719475,
                d_date: '2024-10-09'
              },
              {
                value: 2566715066.6,
                d_date: '2024-10-10'
              },
              {
                value: 2563931537.3625,
                d_date: '2024-10-11'
              },
              {
                value: 2562987447.0225,
                d_date: '2024-10-14'
              },
              {
                value: 2558949965.3125,
                d_date: '2024-10-15'
              },
              {
                value: 2549682232.55,
                d_date: '2024-10-18'
              },
              {
                value: 2552189220.7475,
                d_date: '2024-10-25'
              },
              {
                value: 10180326519.63,
                d_date: '2024-10-31'
              },
              {
                value: 10162762082.49,
                d_date: '2024-11-01'
              },
              {
                value: 10335825697.95,
                d_date: '2024-11-05'
              }
            ],
            value: 10335825697.95,
            index_unit: '万',
            name: '存续基金销售总规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 6915.10345,
                d_date: '2024-10-09'
              },
              {
                value: 69151034.623775,
                d_date: '2024-10-10'
              },
              {
                value: 69425932.624925,
                d_date: '2024-10-11'
              },
              {
                value: 70745684.688025,
                d_date: '2024-10-14'
              },
              {
                value: 71024434.647725,
                d_date: '2024-10-15'
              },
              {
                value: 37487698.808025,
                d_date: '2024-10-18'
              },
              {
                value: 34450809.93835,
                d_date: '2024-10-25'
              },
              {
                value: 182934378.1996,
                d_date: '2024-10-31'
              },
              {
                value: 182934378.1996,
                d_date: '2024-11-01'
              },
              {
                value: 182609718.6138,
                d_date: '2024-11-05'
              }
            ],
            value: 182609718.6138,
            name: '触及预警线产品规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.75,
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                d_date: '2024-10-10'
              },
              {
                value: 0.5,
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                d_date: '2024-10-14'
              },
              {
                value: 0.5,
                d_date: '2024-10-15'
              },
              {
                value: 0.5,
                d_date: '2024-10-18'
              },
              {
                value: 0.75,
                d_date: '2024-10-25'
              },
              {
                value: 15,
                d_date: '2024-10-31'
              },
              {
                value: 15,
                d_date: '2024-11-01'
              },
              {
                value: 16,
                d_date: '2024-11-05'
              }
            ],
            value: 16,
            name: '触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 61.816775,
                d_date: '2024-10-09'
              },
              {
                value: 618167.766825,
                d_date: '2024-10-10'
              },
              {
                value: 233617.766825,
                d_date: '2024-10-11'
              },
              {
                value: 233617.766825,
                d_date: '2024-10-14'
              },
              {
                value: 232160.266825,
                d_date: '2024-10-15'
              },
              {
                value: 232160.266825,
                d_date: '2024-10-18'
              },
              {
                value: 446284.30025,
                d_date: '2024-10-25'
              },
              {
                value: 1169669.0673,
                d_date: '2024-10-31'
              },
              {
                value: 1169669.0673,
                d_date: '2024-11-01'
              },
              {
                value: 1993799.5687,
                d_date: '2024-11-05'
              }
            ],
            value: 1993799.5687,
            name: '触及止损线产品规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2.25,
                d_date: '2024-10-09'
              },
              {
                value: 2.25,
                d_date: '2024-10-10'
              },
              {
                value: 2.25,
                d_date: '2024-10-11'
              },
              {
                value: 2.25,
                d_date: '2024-10-14'
              },
              {
                value: 2.25,
                d_date: '2024-10-15'
              },
              {
                value: 2.25,
                d_date: '2024-10-18'
              },
              {
                value: 2.5,
                d_date: '2024-10-25'
              },
              {
                value: 23,
                d_date: '2024-10-31'
              },
              {
                value: 23,
                d_date: '2024-11-01'
              },
              {
                value: 23,
                d_date: '2024-11-05'
              }
            ],
            value: 23,
            name: '本年度累计触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 584.89395,
                d_date: '2024-10-09'
              },
              {
                value: 5848939.58915,
                d_date: '2024-10-10'
              },
              {
                value: 5848939.58915,
                d_date: '2024-10-11'
              },
              {
                value: 5848939.58915,
                d_date: '2024-10-14'
              },
              {
                value: 5848939.58915,
                d_date: '2024-10-15'
              },
              {
                value: 5848939.58915,
                d_date: '2024-10-18'
              },
              {
                value: 6042676.179975,
                d_date: '2024-10-25'
              },
              {
                value: 24405682.7199,
                d_date: '2024-10-31'
              },
              {
                value: 24405682.7199,
                d_date: '2024-11-01'
              },
              {
                value: 24405682.7199,
                d_date: '2024-11-05'
              }
            ],
            value: 24405682.7199,
            name: '本年度累计触及止损线产品规模',
            limit_level: '1'
          },
          {
            list: [],
            name: '代销产品投向非标资产规模'
          },
          {
            list: [
              {
                value: 132.5,
                d_date: '2024-10-09'
              },
              {
                value: 755000,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 250000,
                d_date: '2024-10-14'
              },
              {
                value: 500000,
                d_date: '2024-10-15'
              },
              {
                value: 500000,
                d_date: '2024-10-18'
              },
              {
                value: 1375000,
                d_date: '2024-10-25'
              }
            ],
            name: '【T】新增基金销售规模（万元）',
            limit_level: '1'
          }
        ],
        title: '基金销售'
      },
      {
        list: [
          {
            list: [
              {
                value: 107.684775,
                d_date: '2024-10-09'
              },
              {
                value: 10129220608.0925,
                d_date: '2024-10-10'
              },
              {
                value: 10215171084.5725,
                d_date: '2024-10-11'
              },
              {
                value: 10246787193.62,
                d_date: '2024-10-14'
              },
              {
                value: 9912938578.64,
                d_date: '2024-10-15'
              },
              {
                value: 10104445198.69,
                d_date: '2024-10-18'
              },
              {
                value: 9742962635.5675,
                d_date: '2024-10-25'
              },
              {
                value: 38365338757.69,
                d_date: '2024-10-31'
              },
              {
                value: 38656033082.22,
                d_date: '2024-11-01'
              },
              {
                value: 38812180467.61,
                d_date: '2024-11-05'
              }
            ],
            value: 38812180467.61,
            index_unit: '万',
            name: '期货权益总规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '交易所强平手数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '已报未成交强平客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '已报未成交强平手数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '【T】新增穿仓客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '【T】新增入金客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '新增入金金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '保证金连续两日不足客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '已报未成交强平客户人次',
            limit_level: '1'
          },
          {
            list: [],
            name: '产业客户数'
          },
          {
            list: [],
            name: '股票期权权益总规模'
          },
          {
            list: [],
            name: '浙江产业客户数'
          }
        ],
        title: '期货经纪'
      },
      {
        list: [
          {
            list: [
              {
                value: -5861308.5275,
                d_date: '2024-10-09'
              },
              {
                value: 9461111.9825,
                d_date: '2024-10-10'
              },
              {
                value: -1705852.6525,
                d_date: '2024-10-11'
              },
              {
                value: 524989.1,
                d_date: '2024-10-14'
              },
              {
                value: -879822.03,
                d_date: '2024-10-15'
              },
              {
                value: -494230.5275,
                d_date: '2024-10-18'
              },
              {
                value: -338559.195,
                d_date: '2024-10-25'
              },
              {
                value: 3794015.33,
                d_date: '2024-10-31'
              },
              {
                value: 5906710.3,
                d_date: '2024-11-01'
              },
              {
                value: 2560700.83,
                d_date: '2024-11-05'
              }
            ],
            value: 2560700.83,
            name: '【T+1】当日盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -7301734.335,
                d_date: '2024-10-09'
              },
              {
                value: 2388794.1125,
                d_date: '2024-10-10'
              },
              {
                value: -1500523.19,
                d_date: '2024-10-11'
              },
              {
                value: 543101.145,
                d_date: '2024-10-14'
              },
              {
                value: -1483297.6975,
                d_date: '2024-10-15'
              },
              {
                value: -1753364.1675,
                d_date: '2024-10-18'
              },
              {
                value: 348200.2925,
                d_date: '2024-10-25'
              },
              {
                value: 3253986.73,
                d_date: '2024-10-31'
              },
              {
                value: 9897734.6,
                d_date: '2024-11-01'
              },
              {
                value: 6852001.58,
                d_date: '2024-11-05'
              }
            ],
            value: 6852001.58,
            name: '【T+1】当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 77864679.4175,
                d_date: '2024-10-09'
              },
              {
                value: 80213266.26,
                d_date: '2024-10-10'
              },
              {
                value: 82005954.185,
                d_date: '2024-10-11'
              },
              {
                value: 83702859.9775,
                d_date: '2024-10-14'
              },
              {
                value: 85396208.91,
                d_date: '2024-10-15'
              },
              {
                value: 77558399.6925,
                d_date: '2024-10-18'
              },
              {
                value: 72426464.9975,
                d_date: '2024-10-25'
              },
              {
                value: 286991400.16,
                d_date: '2024-10-31'
              },
              {
                value: 279387089.14,
                d_date: '2024-11-01'
              },
              {
                value: 279013797.22,
                d_date: '2024-11-05'
              }
            ],
            value: 279013797.22,
            name: '【T+1】负权益应追保证金总额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1.5,
                d_date: '2024-10-09'
              },
              {
                value: 2.25,
                d_date: '2024-10-10'
              },
              {
                value: 2.5,
                d_date: '2024-10-11'
              },
              {
                value: 2.75,
                d_date: '2024-10-14'
              },
              {
                value: 2.25,
                d_date: '2024-10-15'
              },
              {
                value: 2.25,
                d_date: '2024-10-18'
              },
              {
                value: 1.5,
                d_date: '2024-10-25'
              },
              {
                value: 19,
                d_date: '2024-10-31'
              },
              {
                value: 19,
                d_date: '2024-11-01'
              },
              {
                value: 18,
                d_date: '2024-11-05'
              }
            ],
            value: 18,
            name: '【T+1】负权益应追保证金客户数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【权益类】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【总计】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '市场风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            name: '非同业客户授信使用率',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外业务资金分配量'
          },
          {
            list: [],
            name: '【个股】重度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】轻度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '【自营】年度累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【有色金属】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '应追保证金客户数',
            limit_level: '1'
          },
          {
            list: [],
            name: '触及强平线的待追保客户数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【黑色金属】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】中度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '负权益待追保客户数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【个股】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            name: '【delta1】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '信用风险资本准备'
          },
          {
            list: [],
            name: '【商品】重度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '【个股期权】单笔交易最大规模',
            limit_level: '1'
          },
          {
            list: [],
            name: '权益类期权单一客户集中度最大值',
            limit_level: '1'
          },
          {
            list: [],
            name: '中度压力-违约预期损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '负自有资金客户数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【delta1】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外财务型投资规模'
          },
          {
            list: [],
            name: '【股指期权】单笔交易最大规模',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外业务资金占比'
          },
          {
            list: [],
            name: '触及强平线的待追保总额',
            limit_level: '1'
          },
          {
            list: [],
            name: '【雪球期权】单标的存续最大规模',
            limit_level: '1'
          },
          {
            list: [],
            name: '【股指】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '商品类单一客户集中度最大值',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.75,
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                d_date: '2024-10-10'
              },
              {
                value: 0.5,
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                d_date: '2024-10-14'
              },
              {
                value: 0.5,
                d_date: '2024-10-15'
              },
              {
                value: 0.5,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】客户集中度超限个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 117046078.71,
                d_date: '2024-10-09'
              },
              {
                value: 121629852.45,
                d_date: '2024-10-10'
              },
              {
                value: 100444617.6,
                d_date: '2024-10-11'
              },
              {
                value: 119574901.8225,
                d_date: '2024-10-14'
              },
              {
                value: 133733954.16,
                d_date: '2024-10-15'
              },
              {
                value: 100229407.8625,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】应追保证金总额',
            limit_level: '1'
          },
          {
            list: [],
            name: '产业客户授信占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '负权益待追保总额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1,
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                d_date: '2024-10-10'
              },
              {
                value: 0.75,
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                d_date: '2024-10-14'
              },
              {
                value: 0.75,
                d_date: '2024-10-15'
              },
              {
                value: 0.25,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】Delta敞口指标超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【权益】年度累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【农产品】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '前十大客户存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '同业客户授信占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '【自营】板块盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外业务资金分配量',
            limit_level: '1'
          },
          {
            list: [],
            name: '【个股】VaR(1)_99%',
            limit_level: '1'
          },
          {
            list: [],
            name: '【delta1】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '费用及分红',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            name: '【股指】轻度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '标的年度累计最大亏损',
            limit_level: '1'
          },
          {
            list: [],
            name: '【能源化工】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【黑色金属】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【个股】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【个股】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '【个股】中度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '操作风险资本准备'
          },
          {
            list: [],
            name: '【股指】中度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '【权益】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '【权益】新增名义金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】商品类衍生品占全品类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【跨境南向】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '【农产品】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外业务资金占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【股指】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外财务型投资总损失限额'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】权益类衍生品占全品类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【其他】存续规模占比',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 10.75,
                d_date: '2024-10-09'
              },
              {
                value: 11.25,
                d_date: '2024-10-10'
              },
              {
                value: 9.75,
                d_date: '2024-10-11'
              },
              {
                value: 12.25,
                d_date: '2024-10-14'
              },
              {
                value: 11.25,
                d_date: '2024-10-15'
              },
              {
                value: 9.75,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】应追保证金客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 4807804877.5825,
                d_date: '2024-10-09'
              },
              {
                value: 4904298289.9375,
                d_date: '2024-10-10'
              },
              {
                value: 4788593539.9475,
                d_date: '2024-10-11'
              },
              {
                value: 4895126013.76,
                d_date: '2024-10-14'
              },
              {
                value: 4964032942.99,
                d_date: '2024-10-15'
              },
              {
                value: 4473237361.5925,
                d_date: '2024-10-18'
              }
            ],
            index_unit: '万',
            name: '【T+1】场外名义持仓金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '标的年度累计最大盈利',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外授信总额',
            limit_level: '1'
          },
          {
            list: [],
            name: '个股期权单一标的集中度最大值',
            limit_level: '1'
          },
          {
            list: [],
            name: '负自有资金总额',
            limit_level: '1'
          },
          {
            list: [],
            name: '【个股】轻度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '【有色金属】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '市场风险资本准备'
          },
          {
            list: [],
            name: '【其他】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【贵金属】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【香草期权】单标的市值[80亿,100亿)存续最大规模',
            limit_level: '1'
          },
          {
            list: [],
            name: '应追保证金总额',
            limit_level: '1'
          },
          {
            list: [],
            name: '信用风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            name: '操作风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            name: '【跨境】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】商品类衍生品占商品类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】年度累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【跨境】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '场外客户授信使用率',
            limit_level: '1'
          },
          {
            list: [],
            name: '前十大关联客户存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '【delta1】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】VaR(1)_99%',
            limit_level: '1'
          },
          {
            list: [],
            name: '【贵金属】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【跨境北向】存续规模占比',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】Vega敞口指标超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '商品类单一标的集中度最大值',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '【跨境】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【其他】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '【香草期权】单标的市值(>100亿)存续最大规模',
            limit_level: '1'
          },
          {
            list: [],
            name: '轻度压力-违约预期损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '【权益】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【能源化工】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            name: '【其他】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '盈亏调整',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.5,
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                d_date: '2024-10-10'
              },
              {
                value: 0.75,
                d_date: '2024-10-11'
              },
              {
                value: 1,
                d_date: '2024-10-14'
              },
              {
                value: 1,
                d_date: '2024-10-15'
              },
              {
                value: 1,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】单客户授信使用率>=100%客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-09'
              },
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              }
            ],
            name: '【T+1】权益类衍生品占权益类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '重度压力-违约预期损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '前五大二级行业存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '【股指】重度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            name: '前十大标的存续规模占比',
            limit_level: '1'
          }
        ],
        title: '场外衍生品'
      },
      {
        list: [
          {
            list: [
              {
                value: 6355992.1275,
                d_date: '2024-10-09'
              },
              {
                value: 4802737.015,
                d_date: '2024-10-10'
              },
              {
                value: 4359348.0025,
                d_date: '2024-10-11'
              },
              {
                value: 4365840.31,
                d_date: '2024-10-14'
              },
              {
                value: 4374887.1575,
                d_date: '2024-10-15'
              },
              {
                value: 4207528.1275,
                d_date: '2024-10-18'
              },
              {
                value: 4427394.685,
                d_date: '2024-10-25'
              },
              {
                value: 17143258.09,
                d_date: '2024-10-31'
              },
              {
                value: 16955488.87,
                d_date: '2024-11-01'
              },
              {
                value: 17017225.83,
                d_date: '2024-11-05'
              }
            ],
            value: 17017225.83,
            name: '【T+1】当日虚盘盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -1482733.73,
                d_date: '2024-10-09'
              },
              {
                value: -1553255.1125,
                d_date: '2024-10-10'
              },
              {
                value: -443389.0125,
                d_date: '2024-10-11'
              },
              {
                value: 6492.3075,
                d_date: '2024-10-14'
              },
              {
                value: 8170.0575,
                d_date: '2024-10-15'
              },
              {
                value: 25233.0925,
                d_date: '2024-10-18'
              },
              {
                value: 72121.7275,
                d_date: '2024-10-25'
              },
              {
                value: -666155.12,
                d_date: '2024-10-31'
              },
              {
                value: -187756.22,
                d_date: '2024-11-01'
              },
              {
                value: 350876.2,
                d_date: '2024-11-05'
              }
            ],
            value: 350876.2,
            name: '【T+1】当年累计盈亏',
            limit_level: '1'
          }
        ],
        title: '期现业务'
      },
      {
        list: [
          {
            list: [
              {
                value: 111344.99925,
                d_date: '2024-10-09'
              },
              {
                value: 1188077097.5,
                d_date: '2024-10-10'
              },
              {
                value: 1840935622.5,
                d_date: '2024-10-11'
              },
              {
                value: 1848832595,
                d_date: '2024-10-14'
              },
              {
                value: 2067761026.25,
                d_date: '2024-10-15'
              },
              {
                value: 2664196681.25,
                d_date: '2024-10-18'
              },
              {
                value: 1555958415,
                d_date: '2024-10-25'
              },
              {
                value: 3913577563,
                d_date: '2024-10-31'
              },
              {
                value: 4458982773,
                d_date: '2024-11-01'
              },
              {
                value: 4454659863,
                d_date: '2024-11-05'
              }
            ],
            value: 4454659863,
            name: '【商品期货】当日成交额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2.152,
                d_date: '2024-10-09'
              },
              {
                value: 26294.5,
                d_date: '2024-10-10'
              },
              {
                value: 37005,
                d_date: '2024-10-11'
              },
              {
                value: 35156,
                d_date: '2024-10-14'
              },
              {
                value: 38605,
                d_date: '2024-10-15'
              },
              {
                value: 49503,
                d_date: '2024-10-18'
              },
              {
                value: 30513.5,
                d_date: '2024-10-25'
              },
              {
                value: 328646,
                d_date: '2024-10-31'
              },
              {
                value: 333060,
                d_date: '2024-11-01'
              },
              {
                value: 333906,
                d_date: '2024-11-05'
              }
            ],
            value: 333906,
            name: '【商品期货】当日成交量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 37.061375,
                d_date: '2024-10-09'
              },
              {
                value: 286643.75,
                d_date: '2024-10-10'
              },
              {
                value: 118955,
                d_date: '2024-10-11'
              },
              {
                value: 195322.5,
                d_date: '2024-10-14'
              },
              {
                value: 518207.5,
                d_date: '2024-10-15'
              },
              {
                value: 238508.75,
                d_date: '2024-10-18'
              },
              {
                value: 157058.75,
                d_date: '2024-10-25'
              },
              {
                value: 750033,
                d_date: '2024-10-31'
              },
              {
                value: 1272778,
                d_date: '2024-11-01'
              },
              {
                value: 735068,
                d_date: '2024-11-05'
              }
            ],
            value: 735068,
            index_unit: '万',
            name: '【商品期权】当日成交额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.0178,
                d_date: '2024-10-09'
              },
              {
                value: 166,
                d_date: '2024-10-10'
              },
              {
                value: 107.75,
                d_date: '2024-10-11'
              },
              {
                value: 337.75,
                d_date: '2024-10-14'
              },
              {
                value: 556.25,
                d_date: '2024-10-15'
              },
              {
                value: 249.5,
                d_date: '2024-10-18'
              },
              {
                value: 159.25,
                d_date: '2024-10-25'
              },
              {
                value: 552,
                d_date: '2024-10-31'
              },
              {
                value: 724,
                d_date: '2024-11-01'
              },
              {
                value: 483,
                d_date: '2024-11-05'
              }
            ],
            value: 483,
            name: '【商品期权】当日成交量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 3041.1189,
                d_date: '2024-10-09'
              },
              {
                value: 30325666.6,
                d_date: '2024-10-10'
              },
              {
                value: 30252166.5125,
                d_date: '2024-10-11'
              },
              {
                value: 30109016.665,
                d_date: '2024-10-14'
              },
              {
                value: 29992689.5625,
                d_date: '2024-10-15'
              },
              {
                value: 38354585.275,
                d_date: '2024-10-18'
              },
              {
                value: 37810187.855,
                d_date: '2024-10-25'
              },
              {
                value: 149417726.4,
                d_date: '2024-10-31'
              },
              {
                value: 149038489.66,
                d_date: '2024-11-01'
              },
              {
                value: 148383015.24,
                d_date: '2024-11-05'
              }
            ],
            value: 148383015.24,
            name: '【商品期货】当日市值权益',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1891.396575,
                d_date: '2024-10-09'
              },
              {
                value: 22199819.23,
                d_date: '2024-10-10'
              },
              {
                value: 20133893.79,
                d_date: '2024-10-11'
              },
              {
                value: 24059936.065,
                d_date: '2024-10-14'
              },
              {
                value: 24888237.2575,
                d_date: '2024-10-15'
              },
              {
                value: 33582359.33,
                d_date: '2024-10-18'
              },
              {
                value: 32290139.5425,
                d_date: '2024-10-25'
              },
              {
                value: 82385632.42,
                d_date: '2024-10-31'
              },
              {
                value: 128824670.1,
                d_date: '2024-11-01'
              },
              {
                value: 102033105.29,
                d_date: '2024-11-05'
              }
            ],
            value: 102033105.29,
            name: '【商品期货】当日持仓保证金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1149.72235,
                d_date: '2024-10-09'
              },
              {
                value: 8125847.37,
                d_date: '2024-10-10'
              },
              {
                value: 10118272.7225,
                d_date: '2024-10-11'
              },
              {
                value: 6049080.6,
                d_date: '2024-10-14'
              },
              {
                value: 5104452.305,
                d_date: '2024-10-15'
              },
              {
                value: 4772225.945,
                d_date: '2024-10-18'
              },
              {
                value: 5520048.3125,
                d_date: '2024-10-25'
              },
              {
                value: 67267071.98,
                d_date: '2024-10-31'
              },
              {
                value: 20448797.56,
                d_date: '2024-11-01'
              },
              {
                value: 46584887.95,
                d_date: '2024-11-05'
              }
            ],
            value: 46584887.95,
            name: '【商品期货】当日可用资金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 15.548525,
                d_date: '2024-10-09'
              },
              {
                value: 18.301175,
                d_date: '2024-10-10'
              },
              {
                value: 16.6384,
                d_date: '2024-10-11'
              },
              {
                value: 19.97735,
                d_date: '2024-10-14'
              },
              {
                value: 20.74525,
                d_date: '2024-10-15'
              },
              {
                value: 21.8894,
                d_date: '2024-10-18'
              },
              {
                value: 21.35015,
                d_date: '2024-10-25'
              },
              {
                value: 68.0671,
                d_date: '2024-10-31'
              },
              {
                value: 99.4158,
                d_date: '2024-11-01'
              },
              {
                value: 81.7138,
                d_date: '2024-11-05'
              }
            ],
            value: 81.7138,
            name: '【商品期货】当日风险率',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 493.861,
                d_date: '2024-10-09'
              },
              {
                value: 4917077.3075,
                d_date: '2024-10-10'
              },
              {
                value: 4948710.06,
                d_date: '2024-10-11'
              },
              {
                value: 4962547.6175,
                d_date: '2024-10-14'
              },
              {
                value: 4983930.245,
                d_date: '2024-10-15'
              },
              {
                value: 3495680.23,
                d_date: '2024-10-18'
              },
              {
                value: 3473770.1075,
                d_date: '2024-10-25'
              },
              {
                value: 14242212.73,
                d_date: '2024-10-31'
              },
              {
                value: 14234998.68,
                d_date: '2024-11-01'
              },
              {
                value: 14274555.85,
                d_date: '2024-11-05'
              }
            ],
            value: 14274555.85,
            index_unit: '亿',
            name: '【商品期权】当日市值权益',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 227.892475,
                d_date: '2024-10-09'
              },
              {
                value: 2078482.555,
                d_date: '2024-10-10'
              },
              {
                value: 1843595.0275,
                d_date: '2024-10-11'
              },
              {
                value: 1804029.2425,
                d_date: '2024-10-14'
              },
              {
                value: 643064.695,
                d_date: '2024-10-15'
              },
              {
                value: 946865.4275,
                d_date: '2024-10-18'
              },
              {
                value: 1588130.83,
                d_date: '2024-10-25'
              },
              {
                value: 6308568.6,
                d_date: '2024-10-31'
              },
              {
                value: 6439143.94,
                d_date: '2024-11-01'
              },
              {
                value: 8195212.97,
                d_date: '2024-11-05'
              }
            ],
            value: 8195212.97,
            name: '【商品期权】当日持仓保证金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 245.220775,
                d_date: '2024-10-09'
              },
              {
                value: 2682062.2525,
                d_date: '2024-10-10'
              },
              {
                value: 2918247.5325,
                d_date: '2024-10-11'
              },
              {
                value: 3070442.125,
                d_date: '2024-10-14'
              },
              {
                value: 4250978.05,
                d_date: '2024-10-15'
              },
              {
                value: 2491376.0525,
                d_date: '2024-10-18'
              },
              {
                value: 1879853.0275,
                d_date: '2024-10-25'
              },
              {
                value: 8004152.13,
                d_date: '2024-10-31'
              },
              {
                value: 7907802.74,
                d_date: '2024-11-01'
              },
              {
                value: 6607525.88,
                d_date: '2024-11-05'
              }
            ],
            value: 6607525.88,
            index_unit: '万',
            name: '【商品期权】当日可用资金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 12.042175,
                d_date: '2024-10-09'
              },
              {
                value: 10.91515,
                d_date: '2024-10-10'
              },
              {
                value: 9.679,
                d_date: '2024-10-11'
              },
              {
                value: 9.252425,
                d_date: '2024-10-14'
              },
              {
                value: 3.284925,
                d_date: '2024-10-15'
              },
              {
                value: 6.8848,
                d_date: '2024-10-18'
              },
              {
                value: 11.448525,
                d_date: '2024-10-25'
              },
              {
                value: 56.8756,
                d_date: '2024-10-31'
              },
              {
                value: 57.7083,
                d_date: '2024-11-01'
              },
              {
                value: 68.5387,
                d_date: '2024-11-05'
              }
            ],
            value: 68.5387,
            name: '【商品期权】当日风险率',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 4.5,
                d_date: '2024-10-09'
              },
              {
                value: 4.5,
                d_date: '2024-10-10'
              },
              {
                value: 4.5,
                d_date: '2024-10-11'
              },
              {
                value: 4.5,
                d_date: '2024-10-14'
              },
              {
                value: 3.25,
                d_date: '2024-10-15'
              },
              {
                value: 4.5,
                d_date: '2024-10-18'
              },
              {
                value: 4.75,
                d_date: '2024-10-25'
              },
              {
                value: 31,
                d_date: '2024-10-31'
              },
              {
                value: 31,
                d_date: '2024-11-01'
              },
              {
                value: 31,
                d_date: '2024-11-05'
              }
            ],
            value: 31,
            name: '【T+1】期货做市品种数量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1,
                d_date: '2024-10-09'
              },
              {
                value: 1,
                d_date: '2024-10-10'
              },
              {
                value: 1,
                d_date: '2024-10-11'
              },
              {
                value: 1,
                d_date: '2024-10-14'
              },
              {
                value: 1,
                d_date: '2024-10-15'
              },
              {
                value: 1,
                d_date: '2024-10-18'
              },
              {
                value: 1,
                d_date: '2024-10-25'
              },
              {
                value: 17,
                d_date: '2024-10-31'
              },
              {
                value: 17,
                d_date: '2024-11-01'
              },
              {
                value: 17,
                d_date: '2024-11-05'
              }
            ],
            value: 17,
            name: '【T+1】期权做市品种数量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -44899.98,
                d_date: '2024-10-09'
              },
              {
                value: -107055.195,
                d_date: '2024-10-10'
              },
              {
                value: -99849.19,
                d_date: '2024-10-11'
              },
              {
                value: -71330.435,
                d_date: '2024-10-14'
              },
              {
                value: -94944.475,
                d_date: '2024-10-15'
              },
              {
                value: -138484.22,
                d_date: '2024-10-18'
              },
              {
                value: -93315.1675,
                d_date: '2024-10-25'
              },
              {
                value: -389637.14,
                d_date: '2024-10-31'
              },
              {
                value: -386437.79,
                d_date: '2024-11-01'
              },
              {
                value: -284767.28,
                d_date: '2024-11-05'
              }
            ],
            value: -284767.28,
            name: '【T+1】当日盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -2205854.059,
                d_date: '2024-10-09'
              },
              {
                value: -2312909.254,
                d_date: '2024-10-10'
              },
              {
                value: -2412758.444,
                d_date: '2024-10-11'
              },
              {
                value: -2484088.879,
                d_date: '2024-10-14'
              },
              {
                value: -2579033.354,
                d_date: '2024-10-15'
              },
              {
                value: -2955387.6565,
                d_date: '2024-10-18'
              },
              {
                value: -884387.98825,
                d_date: '2024-10-25'
              },
              {
                value: -5483387.673,
                d_date: '2024-10-31'
              },
              {
                value: -5869838.463,
                d_date: '2024-11-01'
              },
              {
                value: -6485755.713,
                d_date: '2024-11-05'
              }
            ],
            value: -6485755.713,
            name: '【T+1】当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【合约减收】交易盈亏'
          },
          {
            list: [],
            name: '操作风险资本准备'
          },
          {
            list: [],
            name: '【商品期权】交易盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【合约减收】当日盈亏'
          },
          {
            list: [],
            name: '【T+1】期货做市敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【T+1】期权做市Gamma敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期货】返还',
            limit_level: '1'
          },
          {
            list: [],
            name: '当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期权】服务费激励'
          },
          {
            list: [],
            name: '【商品期货】服务费激励'
          },
          {
            list: [],
            name: '【合约减收】返还'
          },
          {
            list: [],
            name: '市场风险资本准备'
          },
          {
            list: [],
            name: '【商品期权】手续费',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期权】返还',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期货】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期货】做市品种个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期权】做市品种个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '做市业务资金占比'
          },
          {
            list: [],
            name: '【商品期权】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            name: '做市业务资金分配量'
          },
          {
            list: [],
            name: '【T+1】期权做市Vega敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '市场风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期货】手续费',
            limit_level: '1'
          },
          {
            list: [],
            name: '【做市】当日盈亏'
          },
          {
            list: [],
            name: '【合约减收】手续费'
          },
          {
            list: [],
            name: '【总计】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            name: '【T+1】期货做市敞口超限金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '操作风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            name: '做市业务资金分配量',
            limit_level: '1'
          },
          {
            list: [],
            name: '【T+1】期权做市Delta敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            name: '做市业务资金占比',
            limit_level: '1'
          },
          {
            list: [],
            name: '【商品期货】交易盈亏',
            limit_level: '1'
          }
        ],
        title: '做市业务'
      },
      {
        list: [
          {
            list: [
              {
                value: 63123.3025,
                d_date: '2024-10-10'
              },
              {
                value: 59564.3325,
                d_date: '2024-10-11'
              },
              {
                value: 59564.3325,
                d_date: '2024-10-14'
              },
              {
                value: 56304.495,
                d_date: '2024-10-15'
              },
              {
                value: 62668.635,
                d_date: '2024-10-18'
              },
              {
                value: 65866.73,
                d_date: '2024-10-25'
              },
              {
                value: 497397.43,
                d_date: '2024-10-31'
              },
              {
                value: 505063.25,
                d_date: '2024-11-01'
              },
              {
                value: 504530.87,
                d_date: '2024-11-05'
              }
            ],
            value: 504530.87,
            name: '总库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 286096375.7,
                d_date: '2024-10-10'
              },
              {
                value: 283930986.2075,
                d_date: '2024-10-11'
              },
              {
                value: 283929696.75,
                d_date: '2024-10-14'
              },
              {
                value: 281196040.1975,
                d_date: '2024-10-15'
              },
              {
                value: 289518368.27,
                d_date: '2024-10-18'
              },
              {
                value: 308850414.04,
                d_date: '2024-10-25'
              },
              {
                value: 1245683054.24,
                d_date: '2024-10-31'
              },
              {
                value: 1265694178.78,
                d_date: '2024-11-01'
              },
              {
                value: 1257069792.42,
                d_date: '2024-11-05'
              }
            ],
            value: 1257069792.42,
            name: '总库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 87462.08245,
                d_date: '2024-10-10'
              },
              {
                value: 86994.029,
                d_date: '2024-10-11'
              },
              {
                value: 86476.48755,
                d_date: '2024-10-14'
              },
              {
                value: 85978.1143,
                d_date: '2024-10-15'
              },
              {
                value: 84497.69145,
                d_date: '2024-10-18'
              },
              {
                value: 82664.937575,
                d_date: '2024-10-25'
              },
              {
                value: 561546.6258,
                d_date: '2024-10-31'
              },
              {
                value: 560589.1751,
                d_date: '2024-11-01'
              },
              {
                value: 558979.728,
                d_date: '2024-11-05'
              }
            ],
            value: 558979.728,
            name: '近一年日均库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 429940987.35955,
                d_date: '2024-10-10'
              },
              {
                value: 427174744.82765,
                d_date: '2024-10-11'
              },
              {
                value: 424472032.40085,
                d_date: '2024-10-14'
              },
              {
                value: 421869396.555475,
                d_date: '2024-10-15'
              },
              {
                value: 414529688.0782,
                d_date: '2024-10-18'
              },
              {
                value: 404398594.595575,
                d_date: '2024-10-25'
              },
              {
                value: 1594482134.0997,
                d_date: '2024-10-31'
              },
              {
                value: 1589276177.6839,
                d_date: '2024-11-01'
              },
              {
                value: 1579897599.7354,
                d_date: '2024-11-05'
              }
            ],
            value: 1579897599.7354,
            name: '近一年日均库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 26,
                d_date: '2024-10-10'
              },
              {
                value: 26.25,
                d_date: '2024-10-11'
              },
              {
                value: 26.25,
                d_date: '2024-10-14'
              },
              {
                value: 26.75,
                d_date: '2024-10-15'
              },
              {
                value: 27,
                d_date: '2024-10-18'
              },
              {
                value: 28,
                d_date: '2024-10-25'
              },
              {
                value: 127,
                d_date: '2024-10-31'
              },
              {
                value: 127,
                d_date: '2024-11-01'
              },
              {
                value: 123,
                d_date: '2024-11-05'
              }
            ],
            value: 123,
            name: '在存仓库数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1.5,
                d_date: '2024-10-10'
              },
              {
                value: 1.5,
                d_date: '2024-10-11'
              },
              {
                value: 1.5,
                d_date: '2024-10-14'
              },
              {
                value: 1.75,
                d_date: '2024-10-15'
              },
              {
                value: 1.5,
                d_date: '2024-10-18'
              },
              {
                value: 1.25,
                d_date: '2024-10-25'
              },
              {
                value: 20,
                d_date: '2024-10-31'
              },
              {
                value: 23,
                d_date: '2024-11-01'
              },
              {
                value: 19,
                d_date: '2024-11-05'
              }
            ],
            value: 19,
            name: '在存仓库合同异常数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 17641112.5,
                d_date: '2024-10-10'
              },
              {
                value: 17641112.5,
                d_date: '2024-10-11'
              },
              {
                value: 17641112.5,
                d_date: '2024-10-14'
              },
              {
                value: 17641112.5,
                d_date: '2024-10-15'
              },
              {
                value: 17641112.5,
                d_date: '2024-10-18'
              },
              {
                value: 18028955,
                d_date: '2024-10-25'
              },
              {
                value: 76490596,
                d_date: '2024-10-31'
              },
              {
                value: 73623844,
                d_date: '2024-11-01'
              },
              {
                value: 73623844,
                d_date: '2024-11-05'
              }
            ],
            value: 73623844,
            name: '仓库集中度',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 67124023.9275,
                d_date: '2024-10-10'
              },
              {
                value: 63155814.1525,
                d_date: '2024-10-11'
              },
              {
                value: 63155177.7025,
                d_date: '2024-10-14'
              },
              {
                value: 59987163.095,
                d_date: '2024-10-15'
              },
              {
                value: 57542691.6575,
                d_date: '2024-10-18'
              },
              {
                value: 61953471.4775,
                d_date: '2024-10-25'
              },
              {
                value: 245688568.93,
                d_date: '2024-10-31'
              },
              {
                value: 255020478.03,
                d_date: '2024-11-01'
              },
              {
                value: 263457155,
                d_date: '2024-11-05'
              }
            ],
            value: 263457155,
            name: '部门集中度',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 35325649.795,
                d_date: '2024-10-10'
              },
              {
                value: 35083012.615,
                d_date: '2024-10-11'
              },
              {
                value: 35083012.615,
                d_date: '2024-10-14'
              },
              {
                value: 34025027.64,
                d_date: '2024-10-15'
              },
              {
                value: 33769494.46,
                d_date: '2024-10-18'
              },
              {
                value: 36327683.7575,
                d_date: '2024-10-25'
              },
              {
                value: 145545713.03,
                d_date: '2024-10-31'
              },
              {
                value: 145545713.03,
                d_date: '2024-11-01'
              },
              {
                value: 138195700,
                d_date: '2024-11-05'
              }
            ],
            value: 138195700,
            name: '品种集中度',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 20.985575,
                d_date: '2024-10-10'
              },
              {
                value: 21.0454,
                d_date: '2024-10-11'
              },
              {
                value: 21.0454,
                d_date: '2024-10-14'
              },
              {
                value: 21.339225,
                d_date: '2024-10-15'
              },
              {
                value: 20.95035,
                d_date: '2024-10-18'
              },
              {
                value: 21.54155,
                d_date: '2024-10-25'
              },
              {
                value: 97.8569,
                d_date: '2024-10-31'
              },
              {
                value: 98.7424,
                d_date: '2024-11-01'
              },
              {
                value: 99.3573,
                d_date: '2024-11-05'
              }
            ],
            value: 99.3573,
            name: '总体仓库资信得分',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.5,
                d_date: '2024-10-10'
              },
              {
                value: 0.5,
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                d_date: '2024-10-14'
              },
              {
                value: 0.25,
                d_date: '2024-10-15'
              },
              {
                value: 0.5,
                d_date: '2024-10-18'
              },
              {
                value: 0.25,
                d_date: '2024-10-25'
              },
              {
                value: 16,
                d_date: '2024-10-31'
              },
              {
                value: 17,
                d_date: '2024-11-01'
              },
              {
                value: 15,
                d_date: '2024-11-05'
              }
            ],
            value: 15,
            name: '未评分仓库数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '[部门]仓库资信评分最低',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                d_date: '2024-10-10'
              },
              {
                value: 0,
                d_date: '2024-10-11'
              },
              {
                value: 0,
                d_date: '2024-10-14'
              },
              {
                value: 0,
                d_date: '2024-10-15'
              },
              {
                value: 0,
                d_date: '2024-10-18'
              },
              {
                value: 0,
                d_date: '2024-10-25'
              },
              {
                value: 13,
                d_date: '2024-10-31'
              },
              {
                value: 13,
                d_date: '2024-11-01'
              },
              {
                value: 13,
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            name: '[品种]仓库资信评分最低',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 6.75,
                d_date: '2024-10-10'
              },
              {
                value: 7,
                d_date: '2024-10-11'
              },
              {
                value: 7,
                d_date: '2024-10-14'
              },
              {
                value: 7.5,
                d_date: '2024-10-15'
              },
              {
                value: 7.75,
                d_date: '2024-10-18'
              },
              {
                value: 8,
                d_date: '2024-10-25'
              },
              {
                value: 45,
                d_date: '2024-10-31'
              },
              {
                value: 46,
                d_date: '2024-11-01'
              },
              {
                value: 45,
                d_date: '2024-11-05'
              }
            ],
            value: 45,
            name: '超90天未盘查仓库数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 12.863325,
                d_date: '2024-10-10'
              },
              {
                value: 12.608725,
                d_date: '2024-10-11'
              },
              {
                value: 12.853675,
                d_date: '2024-10-14'
              },
              {
                value: 13.1701,
                d_date: '2024-10-15'
              },
              {
                value: 10.15265,
                d_date: '2024-10-18'
              },
              {
                value: 9.6487,
                d_date: '2024-10-25'
              },
              {
                value: 52.5211,
                d_date: '2024-10-31'
              },
              {
                value: 48.0822,
                d_date: '2024-11-01'
              },
              {
                value: 49.6199,
                d_date: '2024-11-05'
              }
            ],
            value: 49.6199,
            name: '总体库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1963.645,
                d_date: '2024-10-10'
              },
              {
                value: 1947.6575,
                d_date: '2024-10-11'
              },
              {
                value: 1947.655,
                d_date: '2024-10-14'
              },
              {
                value: 1947.6575,
                d_date: '2024-10-15'
              },
              {
                value: 1253.9325,
                d_date: '2024-10-18'
              },
              {
                value: 1253.9125,
                d_date: '2024-10-25'
              },
              {
                value: 239993.65,
                d_date: '2024-10-31'
              },
              {
                value: 239993.65,
                d_date: '2024-11-01'
              },
              {
                value: 239993.65,
                d_date: '2024-11-05'
              }
            ],
            value: 239993.65,
            name: '库龄超一年库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 5148094.9,
                d_date: '2024-10-10'
              },
              {
                value: 5083580.2075,
                d_date: '2024-10-11'
              },
              {
                value: 5083580.2075,
                d_date: '2024-10-14'
              },
              {
                value: 5083580.2075,
                d_date: '2024-10-15'
              },
              {
                value: 2533259.38,
                d_date: '2024-10-18'
              },
              {
                value: 2533168.7025,
                d_date: '2024-10-25'
              },
              {
                value: 10367652.81,
                d_date: '2024-10-31'
              },
              {
                value: 10367652.81,
                d_date: '2024-11-01'
              },
              {
                value: 10367652.81,
                d_date: '2024-11-05'
              }
            ],
            value: 10367652.81,
            name: '库龄超一年库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2427874.56,
                d_date: '2024-10-10'
              },
              {
                value: 2415029.76,
                d_date: '2024-10-11'
              },
              {
                value: 2415029.76,
                d_date: '2024-10-14'
              },
              {
                value: 2415029.76,
                d_date: '2024-10-15'
              },
              {
                value: 2225323.375,
                d_date: '2024-10-18'
              },
              {
                value: 2225323.375,
                d_date: '2024-10-25'
              },
              {
                value: 9136271.5,
                d_date: '2024-10-31'
              },
              {
                value: 9136271.5,
                d_date: '2024-11-01'
              },
              {
                value: 9136271.5,
                d_date: '2024-11-05'
              }
            ],
            value: 9136271.5,
            index_unit: '万',
            name: '[仓库]库龄超一年最大库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2622748.5975,
                d_date: '2024-10-10'
              },
              {
                value: 2558233.905,
                d_date: '2024-10-11'
              },
              {
                value: 2558233.905,
                d_date: '2024-10-14'
              },
              {
                value: 2558233.905,
                d_date: '2024-10-15'
              },
              {
                value: 2225323.375,
                d_date: '2024-10-18'
              },
              {
                value: 2225323.375,
                d_date: '2024-10-25'
              },
              {
                value: 9136271.5,
                d_date: '2024-10-31'
              },
              {
                value: 9136271.5,
                d_date: '2024-11-01'
              },
              {
                value: 9136271.5,
                d_date: '2024-11-05'
              }
            ],
            value: 9136271.5,
            name: '[部门]库龄超一年最大库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2487263.31,
                d_date: '2024-10-10'
              },
              {
                value: 2450604.51,
                d_date: '2024-10-11'
              },
              {
                value: 2450604.51,
                d_date: '2024-10-14'
              },
              {
                value: 2450604.51,
                d_date: '2024-10-15'
              },
              {
                value: 2225323.375,
                d_date: '2024-10-18'
              },
              {
                value: 2225323.375,
                d_date: '2024-10-25'
              },
              {
                value: 9136271.5,
                d_date: '2024-10-31'
              },
              {
                value: 9136271.5,
                d_date: '2024-11-01'
              },
              {
                value: 9136271.5,
                d_date: '2024-11-05'
              }
            ],
            value: 9136271.5,
            name: '[品种]库龄超一年最大库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 182.25,
                d_date: '2024-10-10'
              },
              {
                value: 183,
                d_date: '2024-10-11'
              },
              {
                value: 183.25,
                d_date: '2024-10-14'
              },
              {
                value: 183.5,
                d_date: '2024-10-15'
              },
              {
                value: 185,
                d_date: '2024-10-18'
              },
              {
                value: 186.5,
                d_date: '2024-10-25'
              },
              {
                value: 763,
                d_date: '2024-10-31'
              },
              {
                value: 766,
                d_date: '2024-11-01'
              },
              {
                value: 768,
                d_date: '2024-11-05'
              }
            ],
            value: 768,
            name: '[仓库]最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 503,
                d_date: '2024-10-10'
              },
              {
                value: 503.75,
                d_date: '2024-10-11'
              },
              {
                value: 504,
                d_date: '2024-10-14'
              },
              {
                value: 504.25,
                d_date: '2024-10-15'
              },
              {
                value: 505.75,
                d_date: '2024-10-18'
              },
              {
                value: 507.25,
                d_date: '2024-10-25'
              },
              {
                value: 237011,
                d_date: '2024-10-31'
              },
              {
                value: 237014,
                d_date: '2024-11-01'
              },
              {
                value: 237016,
                d_date: '2024-11-05'
              }
            ],
            value: 237016,
            name: '[部门]最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 503,
                d_date: '2024-10-10'
              },
              {
                value: 503.75,
                d_date: '2024-10-11'
              },
              {
                value: 504,
                d_date: '2024-10-14'
              },
              {
                value: 504.25,
                d_date: '2024-10-15'
              },
              {
                value: 505.75,
                d_date: '2024-10-18'
              },
              {
                value: 507.25,
                d_date: '2024-10-25'
              },
              {
                value: 237011,
                d_date: '2024-10-31'
              },
              {
                value: 237014,
                d_date: '2024-11-01'
              },
              {
                value: 237016,
                d_date: '2024-11-05'
              }
            ],
            value: 237016,
            name: '[品种]最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 3.707525,
                d_date: '2024-10-10'
              },
              {
                value: 3.7311,
                d_date: '2024-10-11'
              },
              {
                value: 3.76855,
                d_date: '2024-10-14'
              },
              {
                value: 3.822825,
                d_date: '2024-10-15'
              },
              {
                value: 3.8673,
                d_date: '2024-10-18'
              },
              {
                value: 4.010525,
                d_date: '2024-10-25'
              },
              {
                value: 29.5169,
                d_date: '2024-10-31'
              },
              {
                value: 29.5965,
                d_date: '2024-11-01'
              },
              {
                value: 29.7099,
                d_date: '2024-11-05'
              }
            ],
            value: 29.7099,
            name: '存货周转次数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 6.153025,
                d_date: '2024-10-10'
              },
              {
                value: 6.114175,
                d_date: '2024-10-11'
              },
              {
                value: 6.053375,
                d_date: '2024-10-14'
              },
              {
                value: 5.96745,
                d_date: '2024-10-15'
              },
              {
                value: 5.898825,
                d_date: '2024-10-18'
              },
              {
                value: 5.68815,
                d_date: '2024-10-25'
              },
              {
                value: 35.0985,
                d_date: '2024-10-31'
              },
              {
                value: 34.9926,
                d_date: '2024-11-01'
              },
              {
                value: 34.8434,
                d_date: '2024-11-05'
              }
            ],
            value: 34.8434,
            name: '存货单次周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1.8875,
                d_date: '2024-10-10'
              },
              {
                value: 1.8825,
                d_date: '2024-10-11'
              },
              {
                value: 1.8975,
                d_date: '2024-10-14'
              },
              {
                value: 1.8925,
                d_date: '2024-10-15'
              },
              {
                value: 1.8775,
                d_date: '2024-10-18'
              },
              {
                value: 9.425,
                d_date: '2024-10-25'
              },
              {
                value: 22.07,
                d_date: '2024-10-31'
              },
              {
                value: 22.12,
                d_date: '2024-11-01'
              },
              {
                value: 22.22,
                d_date: '2024-11-05'
              }
            ],
            value: 22.22,
            name: '库存金额最大仓库周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 32.3425,
                d_date: '2024-10-10'
              },
              {
                value: 31.9975,
                d_date: '2024-10-11'
              },
              {
                value: 31.94,
                d_date: '2024-10-14'
              },
              {
                value: 30.845,
                d_date: '2024-10-15'
              },
              {
                value: 30.2025,
                d_date: '2024-10-18'
              },
              {
                value: 5.2175,
                d_date: '2024-10-25'
              },
              {
                value: 33.41,
                d_date: '2024-10-31'
              },
              {
                value: 51.6,
                d_date: '2024-11-01'
              },
              {
                value: 53.21,
                d_date: '2024-11-05'
              }
            ],
            value: 53.21,
            name: '库存金额最大部门周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 10.1975,
                d_date: '2024-10-10'
              },
              {
                value: 10.155,
                d_date: '2024-10-11'
              },
              {
                value: 10.065,
                d_date: '2024-10-14'
              },
              {
                value: 9.9575,
                d_date: '2024-10-15'
              },
              {
                value: 10.2625,
                d_date: '2024-10-18'
              },
              {
                value: 8.3775,
                d_date: '2024-10-25'
              },
              {
                value: 45.03,
                d_date: '2024-10-31'
              },
              {
                value: 45.03,
                d_date: '2024-11-01'
              },
              {
                value: 44.82,
                d_date: '2024-11-05'
              }
            ],
            value: 44.82,
            name: '库存金额最大品种周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 10043.245,
                d_date: '2024-10-10'
              },
              {
                value: 7543.245,
                d_date: '2024-10-11'
              },
              {
                value: 7543.245,
                d_date: '2024-10-14'
              },
              {
                value: 5043.245,
                d_date: '2024-10-15'
              },
              {
                value: 12699.62,
                d_date: '2024-10-18'
              },
              {
                value: 2543.245,
                d_date: '2024-10-25'
              },
              {
                value: 245150.98,
                d_date: '2024-10-31'
              },
              {
                value: 285776.48,
                d_date: '2024-11-01'
              },
              {
                value: 285776.48,
                d_date: '2024-11-05'
              }
            ],
            value: 285776.48,
            name: '港上存货量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 7531494.675,
                d_date: '2024-10-10'
              },
              {
                value: 5685244.675,
                d_date: '2024-10-11'
              },
              {
                value: 5685244.675,
                d_date: '2024-10-14'
              },
              {
                value: 3885244.675,
                d_date: '2024-10-15'
              },
              {
                value: 9406584.675,
                d_date: '2024-10-18'
              },
              {
                value: 2047744.675,
                d_date: '2024-10-25'
              },
              {
                value: 8425956.7,
                d_date: '2024-10-31'
              },
              {
                value: 38271316.7,
                d_date: '2024-11-01'
              },
              {
                value: 38271316.7,
                d_date: '2024-11-05'
              }
            ],
            value: 38271316.7,
            name: '港上存货金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 12.25,
                d_date: '2024-10-10'
              },
              {
                value: 13,
                d_date: '2024-10-11'
              },
              {
                value: 13.25,
                d_date: '2024-10-14'
              },
              {
                value: 13.5,
                d_date: '2024-10-15'
              },
              {
                value: 15,
                d_date: '2024-10-18'
              },
              {
                value: 16.5,
                d_date: '2024-10-25'
              },
              {
                value: 83,
                d_date: '2024-10-31'
              },
              {
                value: 86,
                d_date: '2024-11-01'
              },
              {
                value: 88,
                d_date: '2024-11-05'
              }
            ],
            value: 88,
            name: '港上存货最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 3.75,
                d_date: '2024-10-10'
              },
              {
                value: 3.75,
                d_date: '2024-10-11'
              },
              {
                value: 3.75,
                d_date: '2024-10-14'
              },
              {
                value: 4,
                d_date: '2024-10-15'
              },
              {
                value: 4.25,
                d_date: '2024-10-18'
              },
              {
                value: 4,
                d_date: '2024-10-25'
              },
              {
                value: 27,
                d_date: '2024-10-31'
              },
              {
                value: 26,
                d_date: '2024-11-01'
              },
              {
                value: 26,
                d_date: '2024-11-05'
              }
            ],
            value: 26,
            name: '零星库存个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 72.076,
                d_date: '2024-10-10'
              },
              {
                value: 70.92425,
                d_date: '2024-10-11'
              },
              {
                value: 70.92425,
                d_date: '2024-10-14'
              },
              {
                value: 76.10175,
                d_date: '2024-10-15'
              },
              {
                value: 82.06975,
                d_date: '2024-10-18'
              },
              {
                value: 72.076,
                d_date: '2024-10-25'
              },
              {
                value: 300.773,
                d_date: '2024-10-31'
              },
              {
                value: 441.1905,
                d_date: '2024-11-01'
              },
              {
                value: 441.1905,
                d_date: '2024-11-05'
              }
            ],
            value: 441.1905,
            name: '零星库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 195100.142225,
                d_date: '2024-10-10'
              },
              {
                value: 197108.02375,
                d_date: '2024-10-11'
              },
              {
                value: 197108.02375,
                d_date: '2024-10-14'
              },
              {
                value: 213497.29875,
                d_date: '2024-10-15'
              },
              {
                value: 295326.29645,
                d_date: '2024-10-18'
              },
              {
                value: 236048.01145,
                d_date: '2024-10-25'
              },
              {
                value: 1197577.6126,
                d_date: '2024-10-31'
              },
              {
                value: 1276681.5893,
                d_date: '2024-11-01'
              },
              {
                value: 1276681.5893,
                d_date: '2024-11-05'
              }
            ],
            value: 1276681.5893,
            name: '零星库存总金额',
            limit_level: '1'
          },
          {
            list: [],
            name: '海上船货金额'
          },
          {
            list: [],
            name: '海上船货量'
          }
        ],
        title: '仓储物流'
      },
      {
        list: [
          {
            list: [],
            name: '净资本与净资产的比例'
          },
          {
            list: [],
            name: '净资本'
          },
          {
            list: [],
            name: '结算准备金额'
          },
          {
            list: [],
            name: '负债与净资产的比例'
          },
          {
            list: [],
            name: '流动资产与流动负债的比例'
          },
          {
            list: [],
            name: '净资本与风险资本准备总额的比例'
          }
        ],
        title: '核心监管'
      },
      {
        list: [
          {
            list: [],
            name: '【种子基金】单管理人投资规模'
          },
          {
            list: [],
            name: '【二级】自有资金投资总规模'
          },
          {
            list: [],
            name: '【财务型】单产品年度损失限额(非固收类)'
          },
          {
            list: [],
            name: '【财务型】投资标的数'
          },
          {
            list: [],
            name: '【财务型】封闭期大于一年的投资规模'
          },
          {
            list: [],
            name: '【量化公募】投资总损失限额'
          },
          {
            list: [],
            name: '【永安资管】投资总规模'
          },
          {
            list: [],
            name: '【种子基金】单产品累计损失限额(固收类)'
          },
          {
            list: [],
            name: '【永安资管】单产品累计损失限额(固收类)'
          },
          {
            list: [],
            name: '【二级】自有资金投资总损失限额'
          },
          {
            list: [],
            name: '【量化公募】投资总规模'
          },
          {
            list: [],
            name: '【种子基金】单产品年度损失限额(固收类)'
          },
          {
            list: [],
            name: '【永安资管】封闭期大于一年的投资规模'
          },
          {
            list: [],
            name: '单一管理人集中度'
          },
          {
            list: [],
            name: '【种子基金】投资总规模'
          },
          {
            list: [],
            name: '【财务型】投资总损失限额'
          },
          {
            list: [],
            name: '【种子基金】单产品年度损失限额(非固收类)'
          },
          {
            list: [],
            name: '【财务型】单产品累计损失限额(非固收类)'
          },
          {
            list: [],
            name: '【永安资管】单产品年度损失限额(非固收类)'
          },
          {
            list: [],
            name: '【财务型】单管理人投资规模'
          },
          {
            list: [],
            name: '【种子基金】封闭期大于一年的投资规模'
          },
          {
            list: [],
            name: '【永安资管】投资总损失限额'
          },
          {
            list: [],
            name: '【永安资管】单产品累计损失限额(非固收类)'
          },
          {
            list: [],
            name: '【财务型】投资总规模'
          },
          {
            list: [],
            name: '【一级】自有资金投资总损失限额'
          },
          {
            list: [],
            name: '【种子基金】单产品累计损失限额(非固收类)'
          },
          {
            list: [],
            name: '【种子基金】投资总损失限额'
          },
          {
            list: [],
            name: '【一级】自有资金投资总规模'
          },
          {
            list: [],
            name: '【财务型】单产品累计损失限额(固收类)'
          },
          {
            list: [],
            name: '【永安资管】单产品年度损失限额(固收类)'
          },
          {
            list: [],
            name: '封闭期大于一年(不含)比例'
          },
          {
            list: [],
            name: '【财务型】单产品年度损失限额(固收类)'
          }
        ],
        title: '自有资金投资'
      },
      {
        list: [
          {
            list: [],
            name: '【二级】战略投资总损失限额'
          },
          {
            list: [],
            name: '【三级】战略投资总损失限额'
          },
          {
            list: [],
            name: '【三级】战略投资总规模'
          },
          {
            list: [],
            name: '【二级】战略投资总规模'
          },
          {
            list: [],
            name: '战略投资单笔投资累计损失限额'
          },
          {
            list: [],
            name: '战略投资标的数'
          }
        ],
        title: '战略投资'
      },
      {
        list: [
          {
            list: [],
            name: '【子公司一级】中邦实业投资总规模'
          },
          {
            list: [],
            name: '【子公司一级】中邦实业投资总损失限额'
          },
          {
            list: [],
            name: '中邦实业投资同一管理人集中度'
          },
          {
            list: [],
            name: '【子公司二级】中邦实业投资总亏损限额'
          },
          {
            list: [],
            name: '中邦实业投资单行业集中度'
          },
          {
            list: [],
            name: '【子公司二级】中邦实业投资总规模'
          }
        ],
        title: '中邦实业'
      },
      {
        list: [
          {
            list: [],
            name: '永安资本净资本与净资产的比例'
          },
          {
            list: [],
            name: '永安资本资产负债率'
          },
          {
            list: [],
            name: '永安资本净资产'
          },
          {
            list: [],
            name: '场外衍生品业务最大亏损'
          },
          {
            list: [],
            name: '永安资本流动性覆盖率'
          },
          {
            list: [],
            name: '做市业务最大亏损'
          },
          {
            list: [],
            name: '永安资本风险覆盖率'
          },
          {
            list: [],
            name: '永安资本信用风险资本准备'
          },
          {
            list: [],
            name: '永安资本市场风险资本准备'
          },
          {
            list: [],
            name: '永安资本操作风险资本准备'
          },
          {
            list: [],
            name: '永安资本净资本'
          },
          {
            list: [],
            name: '永安资本风险资本准备'
          }
        ],
        title: '核心监管（资本）'
      },
      {
        list: [
          {
            list: [],
            name: '重大损失金额'
          },
          {
            list: [],
            name: '新永安投资总损失限额'
          },
          {
            list: [],
            name: '重大损失指标'
          },
          {
            list: [],
            name: '新永安投资总规模'
          },
          {
            list: [],
            name: '受境外监管处罚指标'
          },
          {
            list: [],
            name: '新永安单产品年度损失限额(固收类)'
          },
          {
            list: [],
            name: '新永安单产品年度损失限额(非固收类)'
          }
        ],
        title: '新永安国际'
      }
    ]
  }
]

const runType = ref(false)
function build () {
  runType.value = true
  const time = new Date().getTime()
  buildEchartPdf(res)
  console.log('ui线程导出', new Date().getTime() - time)
  // runType.value = false
}
function buildWorker () {
  runType.value = true
  buildEchartPdfWorker(res)
}

</script>

<template>
  <div class="global-c-main-content">
    echart导出pdf
    <el-button type="primary" @click="build">ui线程导出</el-button>
    <el-button type="primary" @click="buildWorker">worker线程导出</el-button>
    <img v-show="runType" src="@/assets/loading/loading.gif" />
  </div>
</template>

<style scoped lang="scss"></style>
