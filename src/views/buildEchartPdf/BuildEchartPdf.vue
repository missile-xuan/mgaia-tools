<script setup lang="ts">
import { ref } from 'vue'
import { jsPDF } from 'jspdf'
import * as echarts from 'echarts'
import SourceHanSansNormal from './source-han-sans-normal'
// echart导出pdf
interface EchartData {
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
                warn_level: '0',
                index_id: '1',
                d_date: '2024-10-09'
              },
              {
                value: 1177371726.2675,
                warn_level: '0',
                index_id: '1',
                d_date: '2024-10-10'
              },
              {
                value: 1179109425.7325,
                warn_level: '0',
                index_id: '1',
                d_date: '2024-10-11'
              },
              {
                value: 1177702402.765,
                warn_level: '0',
                index_id: '1',
                d_date: '2024-10-14'
              },
              {
                value: 1177051448.0125,
                warn_level: '1',
                index_id: '1',
                d_date: '2024-10-15'
              },
              {
                value: 1163528133.8025,
                warn_level: '1',
                index_id: '1',
                d_date: '2024-10-18'
              },
              {
                value: 1178933825.5825,
                warn_level: '1',
                index_id: '1',
                d_date: '2024-10-25'
              },
              {
                value: 4692188275.95,
                warn_level: '0',
                index_id: '1',
                d_date: '2024-10-31'
              },
              {
                value: 4674760101.68,
                warn_level: '0',
                index_id: '1',
                d_date: '2024-11-01'
              },
              {
                value: 4683822173.1,
                warn_level: '0',
                index_id: '1',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 4683822173.1,
            business_module: '1',
            index_unit: '万',
            index_id: '1',
            name: '在管总规模',
            limit_level: '4'
          },
          {
            list: [
              {
                value: 0.25,
                warn_level: '1',
                index_id: '2',
                d_date: '2024-10-09'
              },
              {
                value: 0.25,
                warn_level: '1',
                index_id: '2',
                d_date: '2024-10-10'
              },
              {
                value: 0.25,
                warn_level: '1',
                index_id: '2',
                d_date: '2024-10-11'
              },
              {
                value: 0.25,
                warn_level: '1',
                index_id: '2',
                d_date: '2024-10-14'
              },
              {
                value: 0.25,
                warn_level: '0',
                index_id: '2',
                d_date: '2024-10-15'
              },
              {
                value: 0.25,
                warn_level: '0',
                index_id: '2',
                d_date: '2024-10-18'
              },
              {
                value: 0.25,
                warn_level: '0',
                index_id: '2',
                d_date: '2024-10-25'
              },
              {
                value: 14,
                warn_level: '0',
                index_id: '2',
                d_date: '2024-10-31'
              },
              {
                value: 14,
                warn_level: '0',
                index_id: '2',
                d_date: '2024-11-01'
              },
              {
                value: 14,
                warn_level: '0',
                index_id: '2',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 14,
            business_module: '1',
            index_id: '2',
            name: '【T+1】触及预警线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '22',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '2',
                index_id: '22',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            warn_level: '预警',
            index_id: '22',
            name: '交易所强平客户数',
            limit_level: '2'
          },
          {
            list: [
              {
                value: 92713.93,
                warn_level: '1',
                index_id: '29',
                d_date: '2024-10-09'
              },
              {
                value: 92713.93,
                warn_level: '1',
                index_id: '29',
                d_date: '2024-10-10'
              },
              {
                value: 92713.93,
                warn_level: '1',
                index_id: '29',
                d_date: '2024-10-11'
              },
              {
                value: 92713.93,
                warn_level: '1',
                index_id: '29',
                d_date: '2024-10-14'
              },
              {
                value: 92713.93,
                warn_level: '2',
                index_id: '29',
                d_date: '2024-10-15'
              },
              {
                value: 92713.93,
                warn_level: '1',
                index_id: '29',
                d_date: '2024-10-18'
              },
              {
                value: 92713.93,
                warn_level: '0',
                index_id: '29',
                d_date: '2024-10-25'
              },
              {
                value: 605833.72,
                warn_level: '0',
                index_id: '29',
                d_date: '2024-10-31'
              },
              {
                value: 605833.72,
                warn_level: '0',
                index_id: '29',
                d_date: '2024-11-01'
              },
              {
                value: 605833.72,
                warn_level: '2',
                index_id: '29',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 605833.72,
            business_module: '3',
            warn_level: '预警',
            index_unit: '万',
            index_id: '29',
            name: '穿仓金额222',
            limit_level: '2'
          },
          {
            list: [
              {
                value: 1149.885275,
                warn_level: '1',
                index_id: '3',
                d_date: '2024-10-09'
              },
              {
                value: 11482437.225,
                warn_level: '1',
                index_id: '3',
                d_date: '2024-10-10'
              },
              {
                value: 11466510.98,
                warn_level: '1',
                index_id: '3',
                d_date: '2024-10-11'
              },
              {
                value: 11458800.6575,
                warn_level: '1',
                index_id: '3',
                d_date: '2024-10-14'
              },
              {
                value: 11461289.725,
                warn_level: '0',
                index_id: '3',
                d_date: '2024-10-15'
              },
              {
                value: 11446773.71,
                warn_level: '0',
                index_id: '3',
                d_date: '2024-10-18'
              },
              {
                value: 11456972.8775,
                warn_level: '0',
                index_id: '3',
                d_date: '2024-10-25'
              },
              {
                value: 46083762.06,
                warn_level: '0',
                index_id: '3',
                d_date: '2024-10-31'
              },
              {
                value: 46100250.24,
                warn_level: '0',
                index_id: '3',
                d_date: '2024-11-01'
              },
              {
                value: 46139560.48,
                warn_level: '0',
                index_id: '3',
                d_date: '2024-11-05'
              }
            ],
            value: 46139560.48,
            business_module: '1',
            index_unit: '万',
            index_id: '3',
            name: '【T+1】触及预警线产品规模（万元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '4',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '1',
            index_id: '4',
            name: '【T+1】触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.032,
                warn_level: '0',
                index_id: '40',
                d_date: '2024-10-09'
              },
              {
                value: 0.0376,
                warn_level: '0',
                index_id: '40',
                d_date: '2024-10-10'
              },
              {
                value: 0.0386,
                warn_level: '0',
                index_id: '40',
                d_date: '2024-10-11'
              },
              {
                value: 0.041375,
                warn_level: '0',
                index_id: '40',
                d_date: '2024-10-14'
              },
              {
                value: 0.04775,
                warn_level: '0',
                index_id: '40',
                d_date: '2024-10-15'
              },
              {
                value: 0.044075,
                warn_level: '0',
                index_id: '40',
                d_date: '2024-10-18'
              },
              {
                value: 0.022475,
                warn_level: '1',
                index_id: '40',
                d_date: '2024-10-25'
              },
              {
                value: 13.1019,
                warn_level: '1',
                index_id: '40',
                d_date: '2024-10-31'
              },
              {
                value: 13.0827,
                warn_level: '1',
                index_id: '40',
                d_date: '2024-11-01'
              },
              {
                value: 13.1237,
                warn_level: '0',
                index_id: '40',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13.1237,
            business_module: '4',
            index_id: '40',
            name: '场外授信使用率',
            limit_level: '2'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '5',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '1',
            index_id: '5',
            name: '【T+1】触及止损线产品规模（万元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '6',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '1',
            index_id: '6',
            name: '【T+1】本年度累计触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '7',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '1',
            index_id: '7',
            name: '【T+1】本年度累计触及止损线产品规模（万元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2,
                warn_level: '1',
                index_id: '8',
                d_date: '2024-10-09'
              },
              {
                value: 2.25,
                warn_level: '1',
                index_id: '8',
                d_date: '2024-10-10'
              },
              {
                value: 2.25,
                warn_level: '1',
                index_id: '8',
                d_date: '2024-10-11'
              },
              {
                value: 2,
                warn_level: '1',
                index_id: '8',
                d_date: '2024-10-14'
              },
              {
                value: 2,
                warn_level: '0',
                index_id: '8',
                d_date: '2024-10-15'
              },
              {
                value: 2.5,
                warn_level: '1',
                index_id: '8',
                d_date: '2024-10-18'
              },
              {
                value: 2,
                warn_level: '0',
                index_id: '8',
                d_date: '2024-10-25'
              },
              {
                value: 22,
                warn_level: '1',
                index_id: '8',
                d_date: '2024-10-31'
              },
              {
                value: 22,
                warn_level: '1',
                index_id: '8',
                d_date: '2024-11-01'
              },
              {
                value: 21,
                warn_level: '2',
                index_id: '8',
                d_date: '2024-11-05'
              }
            ],
            value: 21,
            business_module: '1',
            warn_level: '预警',
            index_id: '8',
            name: '单位净值低于1产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.611,
                warn_level: '1',
                index_id: '9',
                d_date: '2024-10-09'
              },
              {
                value: 64064072.05,
                warn_level: '1',
                index_id: '9',
                d_date: '2024-10-10'
              },
              {
                value: 64274965.75,
                warn_level: '1',
                index_id: '9',
                d_date: '2024-10-11'
              },
              {
                value: 60540394.6,
                warn_level: '1',
                index_id: '9',
                d_date: '2024-10-14'
              },
              {
                value: 60745063.635,
                warn_level: '0',
                index_id: '9',
                d_date: '2024-10-15'
              },
              {
                value: 101450452.4075,
                warn_level: '0',
                index_id: '9',
                d_date: '2024-10-18'
              },
              {
                value: 52197265.205,
                warn_level: '0',
                index_id: '9',
                d_date: '2024-10-25'
              },
              {
                value: 391361077.45,
                warn_level: '0',
                index_id: '9',
                d_date: '2024-10-31'
              },
              {
                value: 391728580.99,
                warn_level: '0',
                index_id: '9',
                d_date: '2024-11-01'
              },
              {
                value: 207460377.88,
                warn_level: '0',
                index_id: '9',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 207460377.88,
            business_module: '1',
            index_id: '9',
            name: '【T+1】单位净值低于1产品规模（亿元）',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '12',
                d_date: '2024-10-09'
              },
              {
                value: 0.5,
                warn_level: '1',
                index_id: '12',
                d_date: '2024-10-10'
              },
              {
                value: 0.25,
                warn_level: '1',
                index_id: '12',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '12',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '12',
                d_date: '2024-10-15'
              },
              {
                value: 0.25,
                warn_level: '0',
                index_id: '12',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '12',
                d_date: '2024-10-25'
              }
            ],
            business_module: '1',
            index_id: '12',
            name: '【T+1】全产品投资占单资产比例超限资产个数'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '11',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '11',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '11',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '11',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '11',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '11',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '11',
                d_date: '2024-10-25'
              }
            ],
            limit_range: '1',
            business_module: '1',
            index_id: '11',
            name: '【T+1】单资产投资占单产品比例超限产品个数',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '1',
            index_id: '346',
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
                warn_level: '1',
                index_id: '26',
                d_date: '2024-10-09'
              },
              {
                value: 12.5,
                warn_level: '1',
                index_id: '26',
                d_date: '2024-10-10'
              },
              {
                value: 37,
                warn_level: '1',
                index_id: '26',
                d_date: '2024-10-11'
              },
              {
                value: 5,
                warn_level: '1',
                index_id: '26',
                d_date: '2024-10-14'
              },
              {
                value: 3.5,
                warn_level: '1',
                index_id: '26',
                d_date: '2024-10-15'
              },
              {
                value: 2.5,
                warn_level: '2',
                index_id: '26',
                d_date: '2024-10-18'
              },
              {
                value: 3,
                warn_level: '2',
                index_id: '26',
                d_date: '2024-10-25'
              },
              {
                value: 153,
                warn_level: '1',
                index_id: '26',
                d_date: '2024-10-31'
              },
              {
                value: 35,
                warn_level: '1',
                index_id: '26',
                d_date: '2024-11-01'
              },
              {
                value: 56,
                warn_level: '2',
                index_id: '26',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 56,
            business_module: '3',
            warn_level: '预警',
            index_id: '26',
            name: '已成交强平手数',
            limit_level: '3'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '31',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            index_id: '31',
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
                warn_level: '1',
                index_id: '15',
                d_date: '2024-10-09'
              },
              {
                value: 4,
                warn_level: '1',
                index_id: '15',
                d_date: '2024-10-10'
              },
              {
                value: 3.75,
                warn_level: '1',
                index_id: '15',
                d_date: '2024-10-11'
              },
              {
                value: 4.25,
                warn_level: '1',
                index_id: '15',
                d_date: '2024-10-14'
              },
              {
                value: 4,
                warn_level: '2',
                index_id: '15',
                d_date: '2024-10-15'
              },
              {
                value: 3.5,
                warn_level: '2',
                index_id: '15',
                d_date: '2024-10-18'
              },
              {
                value: 3,
                warn_level: '2',
                index_id: '15',
                d_date: '2024-10-25'
              },
              {
                value: 26,
                warn_level: '0',
                index_id: '15',
                d_date: '2024-10-31'
              },
              {
                value: 26,
                warn_level: '0',
                index_id: '15',
                d_date: '2024-11-01'
              },
              {
                value: 26,
                warn_level: '0',
                index_id: '15',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 26,
            business_module: '2',
            index_id: '15',
            name: '触及预警线产品个数',
            limit_level: '4'
          },
          {
            list: [
              {
                value: 9.25,
                warn_level: '1',
                index_id: '24',
                d_date: '2024-10-09'
              },
              {
                value: 3.5,
                warn_level: '1',
                index_id: '24',
                d_date: '2024-10-10'
              },
              {
                value: 7.25,
                warn_level: '1',
                index_id: '24',
                d_date: '2024-10-11'
              },
              {
                value: 2.5,
                warn_level: '1',
                index_id: '24',
                d_date: '2024-10-14'
              },
              {
                value: 1.25,
                warn_level: '0',
                index_id: '24',
                d_date: '2024-10-15'
              },
              {
                value: 1.75,
                warn_level: '0',
                index_id: '24',
                d_date: '2024-10-18'
              },
              {
                value: 2.75,
                warn_level: '1',
                index_id: '24',
                d_date: '2024-10-25'
              },
              {
                value: 63,
                warn_level: '1',
                index_id: '24',
                d_date: '2024-10-31'
              },
              {
                value: 22,
                warn_level: '1',
                index_id: '24',
                d_date: '2024-11-01'
              },
              {
                value: 22,
                warn_level: '0',
                index_id: '24',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 22,
            business_module: '3',
            index_id: '24',
            name: '已成交强平客户数',
            limit_level: '4'
          }
        ],
        title: '三级风险限额指标'
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
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-09'
              },
              {
                value: 2566715066.6,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-10'
              },
              {
                value: 2563931537.3625,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-11'
              },
              {
                value: 2562987447.0225,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-14'
              },
              {
                value: 2558949965.3125,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-15'
              },
              {
                value: 2549682232.55,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-18'
              },
              {
                value: 2552189220.7475,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-25'
              },
              {
                value: 10180326519.63,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-10-31'
              },
              {
                value: 10162762082.49,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-11-01'
              },
              {
                value: 10335825697.95,
                warn_level: '0',
                index_id: '13',
                d_date: '2024-11-05'
              }
            ],
            value: 10335825697.95,
            business_module: '2',
            index_unit: '万',
            index_id: '13',
            name: '存续基金销售总规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 6915.10345,
                warn_level: '1',
                index_id: '16',
                d_date: '2024-10-09'
              },
              {
                value: 69151034.623775,
                warn_level: '1',
                index_id: '16',
                d_date: '2024-10-10'
              },
              {
                value: 69425932.624925,
                warn_level: '1',
                index_id: '16',
                d_date: '2024-10-11'
              },
              {
                value: 70745684.688025,
                warn_level: '1',
                index_id: '16',
                d_date: '2024-10-14'
              },
              {
                value: 71024434.647725,
                warn_level: '0',
                index_id: '16',
                d_date: '2024-10-15'
              },
              {
                value: 37487698.808025,
                warn_level: '0',
                index_id: '16',
                d_date: '2024-10-18'
              },
              {
                value: 34450809.93835,
                warn_level: '0',
                index_id: '16',
                d_date: '2024-10-25'
              },
              {
                value: 182934378.1996,
                warn_level: '0',
                index_id: '16',
                d_date: '2024-10-31'
              },
              {
                value: 182934378.1996,
                warn_level: '0',
                index_id: '16',
                d_date: '2024-11-01'
              },
              {
                value: 182609718.6138,
                warn_level: '0',
                index_id: '16',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 182609718.6138,
            business_module: '2',
            index_id: '16',
            name: '触及预警线产品规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.75,
                warn_level: '1',
                index_id: '17',
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                warn_level: '1',
                index_id: '17',
                d_date: '2024-10-10'
              },
              {
                value: 0.5,
                warn_level: '1',
                index_id: '17',
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                warn_level: '1',
                index_id: '17',
                d_date: '2024-10-14'
              },
              {
                value: 0.5,
                warn_level: '0',
                index_id: '17',
                d_date: '2024-10-15'
              },
              {
                value: 0.5,
                warn_level: '0',
                index_id: '17',
                d_date: '2024-10-18'
              },
              {
                value: 0.75,
                warn_level: '0',
                index_id: '17',
                d_date: '2024-10-25'
              },
              {
                value: 15,
                warn_level: '0',
                index_id: '17',
                d_date: '2024-10-31'
              },
              {
                value: 15,
                warn_level: '0',
                index_id: '17',
                d_date: '2024-11-01'
              },
              {
                value: 16,
                warn_level: '0',
                index_id: '17',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 16,
            business_module: '2',
            index_id: '17',
            name: '触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 61.816775,
                warn_level: '1',
                index_id: '18',
                d_date: '2024-10-09'
              },
              {
                value: 618167.766825,
                warn_level: '1',
                index_id: '18',
                d_date: '2024-10-10'
              },
              {
                value: 233617.766825,
                warn_level: '1',
                index_id: '18',
                d_date: '2024-10-11'
              },
              {
                value: 233617.766825,
                warn_level: '1',
                index_id: '18',
                d_date: '2024-10-14'
              },
              {
                value: 232160.266825,
                warn_level: '0',
                index_id: '18',
                d_date: '2024-10-15'
              },
              {
                value: 232160.266825,
                warn_level: '0',
                index_id: '18',
                d_date: '2024-10-18'
              },
              {
                value: 446284.30025,
                warn_level: '0',
                index_id: '18',
                d_date: '2024-10-25'
              },
              {
                value: 1169669.0673,
                warn_level: '0',
                index_id: '18',
                d_date: '2024-10-31'
              },
              {
                value: 1169669.0673,
                warn_level: '0',
                index_id: '18',
                d_date: '2024-11-01'
              },
              {
                value: 1993799.5687,
                warn_level: '0',
                index_id: '18',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 1993799.5687,
            business_module: '2',
            index_id: '18',
            name: '触及止损线产品规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2.25,
                warn_level: '1',
                index_id: '19',
                d_date: '2024-10-09'
              },
              {
                value: 2.25,
                warn_level: '1',
                index_id: '19',
                d_date: '2024-10-10'
              },
              {
                value: 2.25,
                warn_level: '1',
                index_id: '19',
                d_date: '2024-10-11'
              },
              {
                value: 2.25,
                warn_level: '1',
                index_id: '19',
                d_date: '2024-10-14'
              },
              {
                value: 2.25,
                warn_level: '0',
                index_id: '19',
                d_date: '2024-10-15'
              },
              {
                value: 2.25,
                warn_level: '0',
                index_id: '19',
                d_date: '2024-10-18'
              },
              {
                value: 2.5,
                warn_level: '0',
                index_id: '19',
                d_date: '2024-10-25'
              },
              {
                value: 23,
                warn_level: '0',
                index_id: '19',
                d_date: '2024-10-31'
              },
              {
                value: 23,
                warn_level: '0',
                index_id: '19',
                d_date: '2024-11-01'
              },
              {
                value: 23,
                warn_level: '0',
                index_id: '19',
                d_date: '2024-11-05'
              }
            ],
            value: 23,
            business_module: '2',
            index_id: '19',
            name: '本年度累计触及止损线产品个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 584.89395,
                warn_level: '1',
                index_id: '20',
                d_date: '2024-10-09'
              },
              {
                value: 5848939.58915,
                warn_level: '1',
                index_id: '20',
                d_date: '2024-10-10'
              },
              {
                value: 5848939.58915,
                warn_level: '1',
                index_id: '20',
                d_date: '2024-10-11'
              },
              {
                value: 5848939.58915,
                warn_level: '1',
                index_id: '20',
                d_date: '2024-10-14'
              },
              {
                value: 5848939.58915,
                warn_level: '0',
                index_id: '20',
                d_date: '2024-10-15'
              },
              {
                value: 5848939.58915,
                warn_level: '0',
                index_id: '20',
                d_date: '2024-10-18'
              },
              {
                value: 6042676.179975,
                warn_level: '0',
                index_id: '20',
                d_date: '2024-10-25'
              },
              {
                value: 24405682.7199,
                warn_level: '0',
                index_id: '20',
                d_date: '2024-10-31'
              },
              {
                value: 24405682.7199,
                warn_level: '0',
                index_id: '20',
                d_date: '2024-11-01'
              },
              {
                value: 24405682.7199,
                warn_level: '0',
                index_id: '20',
                d_date: '2024-11-05'
              }
            ],
            value: 24405682.7199,
            business_module: '2',
            index_id: '20',
            name: '本年度累计触及止损线产品规模',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '2',
            index_id: '287',
            name: '代销产品投向非标资产规模'
          },
          {
            list: [
              {
                value: 132.5,
                warn_level: '0',
                index_id: '14',
                d_date: '2024-10-09'
              },
              {
                value: 755000,
                warn_level: '0',
                index_id: '14',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '14',
                d_date: '2024-10-11'
              },
              {
                value: 250000,
                warn_level: '0',
                index_id: '14',
                d_date: '2024-10-14'
              },
              {
                value: 500000,
                warn_level: '0',
                index_id: '14',
                d_date: '2024-10-15'
              },
              {
                value: 500000,
                warn_level: '0',
                index_id: '14',
                d_date: '2024-10-18'
              },
              {
                value: 1375000,
                warn_level: '0',
                index_id: '14',
                d_date: '2024-10-25'
              }
            ],
            limit_range: '1',
            business_module: '2',
            index_id: '14',
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
                warn_level: '0',
                index_id: '21',
                d_date: '2024-10-09'
              },
              {
                value: 10129220608.0925,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-10-10'
              },
              {
                value: 10215171084.5725,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-10-11'
              },
              {
                value: 10246787193.62,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-10-14'
              },
              {
                value: 9912938578.64,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-10-15'
              },
              {
                value: 10104445198.69,
                warn_level: '1',
                index_id: '21',
                d_date: '2024-10-18'
              },
              {
                value: 9742962635.5675,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-10-25'
              },
              {
                value: 38365338757.69,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-10-31'
              },
              {
                value: 38656033082.22,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-11-01'
              },
              {
                value: 38812180467.61,
                warn_level: '0',
                index_id: '21',
                d_date: '2024-11-05'
              }
            ],
            value: 38812180467.61,
            business_module: '3',
            index_unit: '万',
            index_id: '21',
            name: '期货权益总规模',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '23',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            index_id: '23',
            name: '交易所强平手数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '25',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '25',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '25',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '25',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '25',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '25',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '25',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '1',
                index_id: '25',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '1',
                index_id: '25',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '1',
                index_id: '25',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 13,
            business_module: '3',
            warn_level: '超限',
            index_id: '25',
            name: '已报未成交强平客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '27',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            index_id: '27',
            name: '已报未成交强平手数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '30',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            index_id: '30',
            name: '【T】新增穿仓客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '32',
                d_date: '2024-11-05'
              }
            ],
            value: 13,
            business_module: '3',
            index_id: '32',
            name: '【T】新增入金客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '33',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            index_id: '33',
            name: '新增入金金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '34',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            index_id: '34',
            name: '保证金连续两日不足客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '65',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 13,
            business_module: '3',
            index_id: '65',
            name: '已报未成交强平客户人次',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '3',
            index_id: '344',
            name: '产业客户数'
          },
          {
            list: [],
            business_module: '3',
            index_id: '343',
            name: '股票期权权益总规模'
          },
          {
            list: [],
            business_module: '3',
            index_id: '345',
            name: '浙江产业客户数'
          }
        ],
        title: '期货经纪'
      }
    ]
  }
]
function buildEchartPdf (buildData: EchartData[]) {
  const A4_WIDTH = 595.28 // A4纸宽度
  const A4_HEIGHT = 841.89 // A4纸高度
  const pageMargin = 40 // 页边距
  const lineHeight = 20 // 行高
  const echartWidth = (A4_WIDTH - pageMargin * 2) / 2 - lineHeight // echart宽度
  const echartHeight = echartWidth * 0.9 // echart高度

  const canvas = document.createElement('canvas')
  canvas.width = echartWidth
  canvas.height = echartHeight
  const echartObj = echarts.init(canvas)
  // eslint-disable-next-line new-cap
  const pdf = new jsPDF('p', 'pt', 'a4')
  pdf.addFileToVFS('SourceHanSans', SourceHanSansNormal())
  pdf.addFont('SourceHanSans', 'SourceHanSans-Normal', 'normal')
  pdf.setFont('SourceHanSans-Normal')
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
      pdf.addPage()
      currentY = pageMargin
    }
    // 写入标题
    currentY += lineHeight
    pdf.setFontSize(20)
    pdf.text(category.title, pageMargin, currentY)

    for (const group of category.list) {
      // 写入分组标题
      currentY += lineHeight
      pdf.setFontSize(15)
      pdf.text(group.title, A4_WIDTH / 2, currentY, { align: 'center' })
      for (let i = 0; i < group.list.length; i++) {
        const item = group.list[i]
        chartOptions.title.text = `${item.name}: ${item.value} ${item.index_unit ? item.index_unit : ''}   ${item.limit_level ? ('等级:' + item.limit_level) : ''}`
        chartOptions.xAxis.data = item.list.map(i => i.d_date)
        chartOptions.series[0].data = item.list.map(i => i.value)
        chartOptions.grid.left = Math.max(...chartOptions.series[0].data).toFixed(0).toString().length * 10
        echartObj.setOption(chartOptions)
        const image = echartObj.getDataURL({
          type: 'png',
          pixelRatio: 2,
          backgroundColor: '#fff'
        })
        if (currentY + lineHeight + echartHeight > A4_HEIGHT - pageMargin) {
          pdf.addPage()
          currentY = pageMargin
        }
        const x = i % 2 === 0 ? pageMargin : (pageMargin + echartWidth + lineHeight)
        pdf.addImage(image, 'PNG', x, currentY + lineHeight, echartWidth, echartHeight)
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
  pdf.save('echart.pdf')
}
const imgUrl = ref('')
function build () {
  buildEchartPdf(res)
}
</script>

<template>
  <div class="global-c-main-content">
    echart导出pdf
    <el-button type="primary" @click="build">导出</el-button>
    <img :src="imgUrl" />
  </div>
</template>

<style scoped lang="scss"></style>
