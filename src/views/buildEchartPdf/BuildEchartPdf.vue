<script setup lang="ts">
import { ref } from 'vue'
import { jsPDF } from 'jspdf'
import * as echarts from 'echarts'
import SourceHanSansNormal from './source-han-sans-normal'
// echart导出pdf

// 数据结构
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
      },
      {
        list: [
          {
            list: [
              {
                value: 9.5,
                warn_level: '0',
                index_id: '64',
                d_date: '2024-10-09'
              },
              {
                value: 3.5,
                warn_level: '0',
                index_id: '64',
                d_date: '2024-10-10'
              },
              {
                value: 8.25,
                warn_level: '0',
                index_id: '64',
                d_date: '2024-10-11'
              },
              {
                value: 2.75,
                warn_level: '0',
                index_id: '64',
                d_date: '2024-10-14'
              },
              {
                value: 1.25,
                warn_level: '0',
                index_id: '64',
                d_date: '2024-10-15'
              },
              {
                value: 1.75,
                warn_level: '0',
                index_id: '64',
                d_date: '2024-10-18'
              },
              {
                value: 2.75,
                warn_level: '0',
                index_id: '64',
                d_date: '2024-10-25'
              },
              {
                value: 72,
                warn_level: '1',
                index_id: '64',
                d_date: '2024-10-31'
              },
              {
                value: 22,
                warn_level: '1',
                index_id: '64',
                d_date: '2024-11-01'
              },
              {
                value: 23,
                warn_level: '1',
                index_id: '64',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 23,
            business_module: '3',
            warn_level: '超限',
            index_id: '64',
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
                warn_level: '1',
                index_id: '28',
                d_date: '2024-10-09'
              },
              {
                value: 6,
                warn_level: '1',
                index_id: '28',
                d_date: '2024-10-10'
              },
              {
                value: 6,
                warn_level: '1',
                index_id: '28',
                d_date: '2024-10-11'
              },
              {
                value: 6,
                warn_level: '1',
                index_id: '28',
                d_date: '2024-10-14'
              },
              {
                value: 6,
                warn_level: '0',
                index_id: '28',
                d_date: '2024-10-15'
              },
              {
                value: 6,
                warn_level: '1',
                index_id: '28',
                d_date: '2024-10-18'
              },
              {
                value: 6,
                warn_level: '2',
                index_id: '28',
                d_date: '2024-10-25'
              },
              {
                value: 36,
                warn_level: '1',
                index_id: '28',
                d_date: '2024-10-31'
              },
              {
                value: 36,
                warn_level: '1',
                index_id: '28',
                d_date: '2024-11-01'
              },
              {
                value: 36,
                warn_level: '1',
                index_id: '28',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 36,
            business_module: '3',
            warn_level: '超限',
            index_id: '28',
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
      },
      {
        list: [
          {
            list: [
              {
                value: -5861308.5275,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-09'
              },
              {
                value: 9461111.9825,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-10'
              },
              {
                value: -1705852.6525,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-11'
              },
              {
                value: 524989.1,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-14'
              },
              {
                value: -879822.03,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-15'
              },
              {
                value: -494230.5275,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-18'
              },
              {
                value: -338559.195,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-25'
              },
              {
                value: 3794015.33,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-10-31'
              },
              {
                value: 5906710.3,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-11-01'
              },
              {
                value: 2560700.83,
                warn_level: '0',
                index_id: '36',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 2560700.83,
            business_module: '4',
            index_id: '36',
            name: '【T+1】当日盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -7301734.335,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-09'
              },
              {
                value: 2388794.1125,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-10'
              },
              {
                value: -1500523.19,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-11'
              },
              {
                value: 543101.145,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-14'
              },
              {
                value: -1483297.6975,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-15'
              },
              {
                value: -1753364.1675,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-18'
              },
              {
                value: 348200.2925,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-25'
              },
              {
                value: 3253986.73,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-10-31'
              },
              {
                value: 9897734.6,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-11-01'
              },
              {
                value: 6852001.58,
                warn_level: '0',
                index_id: '37',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 6852001.58,
            business_module: '4',
            index_id: '37',
            name: '【T+1】当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 77864679.4175,
                warn_level: '1',
                index_id: '44',
                d_date: '2024-10-09'
              },
              {
                value: 80213266.26,
                warn_level: '1',
                index_id: '44',
                d_date: '2024-10-10'
              },
              {
                value: 82005954.185,
                warn_level: '1',
                index_id: '44',
                d_date: '2024-10-11'
              },
              {
                value: 83702859.9775,
                warn_level: '1',
                index_id: '44',
                d_date: '2024-10-14'
              },
              {
                value: 85396208.91,
                warn_level: '0',
                index_id: '44',
                d_date: '2024-10-15'
              },
              {
                value: 77558399.6925,
                warn_level: '0',
                index_id: '44',
                d_date: '2024-10-18'
              },
              {
                value: 72426464.9975,
                warn_level: '0',
                index_id: '44',
                d_date: '2024-10-25'
              },
              {
                value: 286991400.16,
                warn_level: '0',
                index_id: '44',
                d_date: '2024-10-31'
              },
              {
                value: 279387089.14,
                warn_level: '0',
                index_id: '44',
                d_date: '2024-11-01'
              },
              {
                value: 279013797.22,
                warn_level: '0',
                index_id: '44',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 279013797.22,
            business_module: '4',
            index_id: '44',
            name: '【T+1】负权益应追保证金总额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1.5,
                warn_level: '1',
                index_id: '45',
                d_date: '2024-10-09'
              },
              {
                value: 2.25,
                warn_level: '1',
                index_id: '45',
                d_date: '2024-10-10'
              },
              {
                value: 2.5,
                warn_level: '1',
                index_id: '45',
                d_date: '2024-10-11'
              },
              {
                value: 2.75,
                warn_level: '1',
                index_id: '45',
                d_date: '2024-10-14'
              },
              {
                value: 2.25,
                warn_level: '0',
                index_id: '45',
                d_date: '2024-10-15'
              },
              {
                value: 2.25,
                warn_level: '0',
                index_id: '45',
                d_date: '2024-10-18'
              },
              {
                value: 1.5,
                warn_level: '0',
                index_id: '45',
                d_date: '2024-10-25'
              },
              {
                value: 19,
                warn_level: '0',
                index_id: '45',
                d_date: '2024-10-31'
              },
              {
                value: 19,
                warn_level: '0',
                index_id: '45',
                d_date: '2024-11-01'
              },
              {
                value: 18,
                warn_level: '0',
                index_id: '45',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 18,
            business_module: '4',
            index_id: '45',
            name: '【T+1】负权益应追保证金客户数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '144',
            name: '【权益类】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '89',
            name: '【总计】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '66',
            name: '市场风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '120',
            name: '非同业客户授信使用率',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '4',
            index_id: '291',
            name: '场外业务资金分配量'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '154',
            name: '【个股】重度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '149',
            name: '【商品】轻度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '100',
            name: '【自营】年度累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '135',
            name: '【有色金属】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '121',
            name: '应追保证金客户数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '123',
            name: '触及强平线的待追保客户数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '136',
            name: '【黑色金属】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '150',
            name: '【商品】中度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '125',
            name: '负权益待追保客户数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '147',
            name: '【个股】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '73',
            name: '【delta1】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '4',
            index_id: '289',
            name: '信用风险资本准备'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '151',
            name: '【商品】重度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '81',
            name: '【个股期权】单笔交易最大规模',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '114',
            name: '权益类期权单一客户集中度最大值',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '130',
            name: '中度压力-违约预期损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '127',
            name: '负自有资金客户数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '92',
            name: '【delta1】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '4',
            index_id: '321',
            name: '场外财务型投资规模'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '82',
            name: '【股指期权】单笔交易最大规模',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '4',
            index_id: '292',
            name: '场外业务资金占比'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '124',
            name: '触及强平线的待追保总额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '85',
            name: '【雪球期权】单标的存续最大规模',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '143',
            name: '【股指】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '112',
            name: '商品类单一客户集中度最大值',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.75,
                warn_level: '1',
                index_id: '50',
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                warn_level: '1',
                index_id: '50',
                d_date: '2024-10-10'
              },
              {
                value: 0.5,
                warn_level: '1',
                index_id: '50',
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                warn_level: '1',
                index_id: '50',
                d_date: '2024-10-14'
              },
              {
                value: 0.5,
                warn_level: '0',
                index_id: '50',
                d_date: '2024-10-15'
              },
              {
                value: 0.5,
                warn_level: '0',
                index_id: '50',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '50',
            name: '【T+1】客户集中度超限个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 117046078.71,
                warn_level: '1',
                index_id: '42',
                d_date: '2024-10-09'
              },
              {
                value: 121629852.45,
                warn_level: '1',
                index_id: '42',
                d_date: '2024-10-10'
              },
              {
                value: 100444617.6,
                warn_level: '1',
                index_id: '42',
                d_date: '2024-10-11'
              },
              {
                value: 119574901.8225,
                warn_level: '1',
                index_id: '42',
                d_date: '2024-10-14'
              },
              {
                value: 133733954.16,
                warn_level: '0',
                index_id: '42',
                d_date: '2024-10-15'
              },
              {
                value: 100229407.8625,
                warn_level: '0',
                index_id: '42',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '42',
            name: '【T+1】应追保证金总额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '117',
            name: '产业客户授信占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '126',
            name: '负权益待追保总额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1,
                warn_level: '1',
                index_id: '38',
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                warn_level: '1',
                index_id: '38',
                d_date: '2024-10-10'
              },
              {
                value: 0.75,
                warn_level: '1',
                index_id: '38',
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                warn_level: '1',
                index_id: '38',
                d_date: '2024-10-14'
              },
              {
                value: 0.75,
                warn_level: '0',
                index_id: '38',
                d_date: '2024-10-15'
              },
              {
                value: 0.25,
                warn_level: '0',
                index_id: '38',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '38',
            name: '【T+1】Delta敞口指标超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '99',
            name: '【权益】年度累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '132',
            name: '【农产品】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '101',
            name: '前十大客户存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '118',
            name: '同业客户授信占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '95',
            name: '【自营】板块盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '69',
            name: '场外业务资金分配量',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '148',
            name: '【个股】VaR(1)_99%',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '108',
            name: '【delta1】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '96',
            name: '费用及分红',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '145',
            name: '【商品】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '155',
            name: '【股指】轻度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '87',
            name: '标的年度累计最大亏损',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '133',
            name: '【能源化工】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '141',
            name: '【黑色金属】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '142',
            name: '【个股】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '106',
            name: '【个股】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '153',
            name: '【个股】中度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '4',
            index_id: '290',
            name: '操作风险资本准备'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '156',
            name: '【股指】中度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '77',
            name: '【权益】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '72',
            name: '【权益】新增名义金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '47',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '47',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '47',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '47',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '47',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '47',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '47',
            name: '【T+1】商品类衍生品占全品类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '109',
            name: '【跨境南向】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '137',
            name: '【农产品】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '70',
            name: '场外业务资金占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '90',
            name: '【商品】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '107',
            name: '【股指】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '4',
            index_id: '322',
            name: '场外财务型投资总损失限额'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '49',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '49',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '49',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '49',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '49',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '49',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '49',
            name: '【T+1】权益类衍生品占全品类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '111',
            name: '【其他】存续规模占比',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 10.75,
                warn_level: '1',
                index_id: '43',
                d_date: '2024-10-09'
              },
              {
                value: 11.25,
                warn_level: '1',
                index_id: '43',
                d_date: '2024-10-10'
              },
              {
                value: 9.75,
                warn_level: '1',
                index_id: '43',
                d_date: '2024-10-11'
              },
              {
                value: 12.25,
                warn_level: '1',
                index_id: '43',
                d_date: '2024-10-14'
              },
              {
                value: 11.25,
                warn_level: '0',
                index_id: '43',
                d_date: '2024-10-15'
              },
              {
                value: 9.75,
                warn_level: '0',
                index_id: '43',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '43',
            name: '【T+1】应追保证金客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 4807804877.5825,
                warn_level: '0',
                index_id: '35',
                d_date: '2024-10-09'
              },
              {
                value: 4904298289.9375,
                warn_level: '0',
                index_id: '35',
                d_date: '2024-10-10'
              },
              {
                value: 4788593539.9475,
                warn_level: '0',
                index_id: '35',
                d_date: '2024-10-11'
              },
              {
                value: 4895126013.76,
                warn_level: '0',
                index_id: '35',
                d_date: '2024-10-14'
              },
              {
                value: 4964032942.99,
                warn_level: '0',
                index_id: '35',
                d_date: '2024-10-15'
              },
              {
                value: 4473237361.5925,
                warn_level: '1',
                index_id: '35',
                d_date: '2024-10-18'
              }
            ],
            business_module: '4',
            index_unit: '万',
            index_id: '35',
            name: '【T+1】场外名义持仓金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '86',
            name: '标的年度累计最大盈利',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '105',
            name: '【商品】存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '116',
            name: '场外授信总额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '115',
            name: '个股期权单一标的集中度最大值',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '128',
            name: '负自有资金总额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '152',
            name: '【个股】轻度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '140',
            name: '【有色金属】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '4',
            index_id: '288',
            name: '市场风险资本准备'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '94',
            name: '【其他】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '134',
            name: '【贵金属】Delta敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '84',
            name: '【香草期权】单标的市值[80亿,100亿)存续最大规模',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '122',
            name: '应追保证金总额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '67',
            name: '信用风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '68',
            name: '操作风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '74',
            name: '【跨境】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '88',
            name: '当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '46',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '46',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '46',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '46',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '46',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '46',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '46',
            name: '【T+1】商品类衍生品占商品类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '71',
            name: '【商品】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '98',
            name: '【商品】年度累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '79',
            name: '【跨境】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '119',
            name: '场外客户授信使用率',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '102',
            name: '前十大关联客户存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '78',
            name: '【delta1】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '146',
            name: '【商品】VaR(1)_99%',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '139',
            name: '【贵金属】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '110',
            name: '【跨境北向】存续规模占比',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '39',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '39',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '39',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '39',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '39',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '39',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '39',
            name: '【T+1】Vega敞口指标超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '113',
            name: '商品类单一标的集中度最大值',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '76',
            name: '【商品】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '93',
            name: '【跨境】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '80',
            name: '【其他】存续名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '83',
            name: '【香草期权】单标的市值(>100亿)存续最大规模',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '129',
            name: '轻度压力-违约预期损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '91',
            name: '【权益】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '138',
            name: '【能源化工】Vega敞口',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '75',
            name: '【其他】新增名义金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '97',
            name: '盈亏调整',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.5,
                warn_level: '1',
                index_id: '41',
                d_date: '2024-10-09'
              },
              {
                value: 0.75,
                warn_level: '1',
                index_id: '41',
                d_date: '2024-10-10'
              },
              {
                value: 0.75,
                warn_level: '1',
                index_id: '41',
                d_date: '2024-10-11'
              },
              {
                value: 1,
                warn_level: '1',
                index_id: '41',
                d_date: '2024-10-14'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '41',
                d_date: '2024-10-15'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '41',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '41',
            name: '【T+1】单客户授信使用率>=100%客户数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '48',
                d_date: '2024-10-09'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '48',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '48',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '48',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '48',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '48',
                d_date: '2024-10-18'
              }
            ],
            limit_range: '1',
            business_module: '4',
            index_id: '48',
            name: '【T+1】权益类衍生品占权益类集中度超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '131',
            name: '重度压力-违约预期损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '104',
            name: '前五大二级行业存续规模占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '157',
            name: '【股指】重度压力-潜在损失',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '4',
            index_id: '103',
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
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-09'
              },
              {
                value: 4802737.015,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-10'
              },
              {
                value: 4359348.0025,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-11'
              },
              {
                value: 4365840.31,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-14'
              },
              {
                value: 4374887.1575,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-15'
              },
              {
                value: 4207528.1275,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-18'
              },
              {
                value: 4427394.685,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-25'
              },
              {
                value: 17143258.09,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-10-31'
              },
              {
                value: 16955488.87,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-11-01'
              },
              {
                value: 17017225.83,
                warn_level: '0',
                index_id: '51',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 17017225.83,
            business_module: '5',
            index_id: '51',
            name: '【T+1】当日虚盘盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -1482733.73,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-09'
              },
              {
                value: -1553255.1125,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-10'
              },
              {
                value: -443389.0125,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-11'
              },
              {
                value: 6492.3075,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-14'
              },
              {
                value: 8170.0575,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-15'
              },
              {
                value: 25233.0925,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-18'
              },
              {
                value: 72121.7275,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-25'
              },
              {
                value: -666155.12,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-10-31'
              },
              {
                value: -187756.22,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-11-01'
              },
              {
                value: 350876.2,
                warn_level: '0',
                index_id: '54',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 350876.2,
            business_module: '5',
            index_id: '54',
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
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-09'
              },
              {
                value: 1188077097.5,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-10'
              },
              {
                value: 1840935622.5,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-11'
              },
              {
                value: 1848832595,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-14'
              },
              {
                value: 2067761026.25,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-15'
              },
              {
                value: 2664196681.25,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-18'
              },
              {
                value: 1555958415,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-25'
              },
              {
                value: 3913577563,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-10-31'
              },
              {
                value: 4458982773,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-11-01'
              },
              {
                value: 4454659863,
                warn_level: '0',
                index_id: '172',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 4454659863,
            business_module: '6',
            index_id: '172',
            name: '【商品期货】当日成交额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2.152,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-09'
              },
              {
                value: 26294.5,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-10'
              },
              {
                value: 37005,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-11'
              },
              {
                value: 35156,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-14'
              },
              {
                value: 38605,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-15'
              },
              {
                value: 49503,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-18'
              },
              {
                value: 30513.5,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-25'
              },
              {
                value: 328646,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-10-31'
              },
              {
                value: 333060,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-11-01'
              },
              {
                value: 333906,
                warn_level: '0',
                index_id: '173',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 333906,
            business_module: '6',
            index_id: '173',
            name: '【商品期货】当日成交量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 37.061375,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-10-09'
              },
              {
                value: 286643.75,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-10-10'
              },
              {
                value: 118955,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-10-11'
              },
              {
                value: 195322.5,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-10-14'
              },
              {
                value: 518207.5,
                warn_level: '1',
                index_id: '174',
                d_date: '2024-10-15'
              },
              {
                value: 238508.75,
                warn_level: '1',
                index_id: '174',
                d_date: '2024-10-18'
              },
              {
                value: 157058.75,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-10-25'
              },
              {
                value: 750033,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-10-31'
              },
              {
                value: 1272778,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-11-01'
              },
              {
                value: 735068,
                warn_level: '0',
                index_id: '174',
                d_date: '2024-11-05'
              }
            ],
            value: 735068,
            business_module: '6',
            index_unit: '万',
            index_id: '174',
            name: '【商品期权】当日成交额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.0178,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-09'
              },
              {
                value: 166,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-10'
              },
              {
                value: 107.75,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-11'
              },
              {
                value: 337.75,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-14'
              },
              {
                value: 556.25,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-15'
              },
              {
                value: 249.5,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-18'
              },
              {
                value: 159.25,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-25'
              },
              {
                value: 552,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-10-31'
              },
              {
                value: 724,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-11-01'
              },
              {
                value: 483,
                warn_level: '0',
                index_id: '175',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 483,
            business_module: '6',
            index_id: '175',
            name: '【商品期权】当日成交量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 3041.1189,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-09'
              },
              {
                value: 30325666.6,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-10'
              },
              {
                value: 30252166.5125,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-11'
              },
              {
                value: 30109016.665,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-14'
              },
              {
                value: 29992689.5625,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-15'
              },
              {
                value: 38354585.275,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-18'
              },
              {
                value: 37810187.855,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-25'
              },
              {
                value: 149417726.4,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-10-31'
              },
              {
                value: 149038489.66,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-11-01'
              },
              {
                value: 148383015.24,
                warn_level: '0',
                index_id: '176',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 148383015.24,
            business_module: '6',
            index_id: '176',
            name: '【商品期货】当日市值权益',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1891.396575,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-09'
              },
              {
                value: 22199819.23,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-10'
              },
              {
                value: 20133893.79,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-11'
              },
              {
                value: 24059936.065,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-14'
              },
              {
                value: 24888237.2575,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-15'
              },
              {
                value: 33582359.33,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-18'
              },
              {
                value: 32290139.5425,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-25'
              },
              {
                value: 82385632.42,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-10-31'
              },
              {
                value: 128824670.1,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-11-01'
              },
              {
                value: 102033105.29,
                warn_level: '0',
                index_id: '177',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 102033105.29,
            business_module: '6',
            index_id: '177',
            name: '【商品期货】当日持仓保证金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1149.72235,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-09'
              },
              {
                value: 8125847.37,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-10'
              },
              {
                value: 10118272.7225,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-11'
              },
              {
                value: 6049080.6,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-14'
              },
              {
                value: 5104452.305,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-15'
              },
              {
                value: 4772225.945,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-18'
              },
              {
                value: 5520048.3125,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-25'
              },
              {
                value: 67267071.98,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-10-31'
              },
              {
                value: 20448797.56,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-11-01'
              },
              {
                value: 46584887.95,
                warn_level: '0',
                index_id: '178',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 46584887.95,
            business_module: '6',
            index_id: '178',
            name: '【商品期货】当日可用资金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 15.548525,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-09'
              },
              {
                value: 18.301175,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-10'
              },
              {
                value: 16.6384,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-11'
              },
              {
                value: 19.97735,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-14'
              },
              {
                value: 20.74525,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-15'
              },
              {
                value: 21.8894,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-18'
              },
              {
                value: 21.35015,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-25'
              },
              {
                value: 68.0671,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-10-31'
              },
              {
                value: 99.4158,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-11-01'
              },
              {
                value: 81.7138,
                warn_level: '0',
                index_id: '179',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 81.7138,
            business_module: '6',
            index_id: '179',
            name: '【商品期货】当日风险率',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 493.861,
                warn_level: '0',
                index_id: '180',
                d_date: '2024-10-09'
              },
              {
                value: 4917077.3075,
                warn_level: '0',
                index_id: '180',
                d_date: '2024-10-10'
              },
              {
                value: 4948710.06,
                warn_level: '0',
                index_id: '180',
                d_date: '2024-10-11'
              },
              {
                value: 4962547.6175,
                warn_level: '0',
                index_id: '180',
                d_date: '2024-10-14'
              },
              {
                value: 4983930.245,
                warn_level: '0',
                index_id: '180',
                d_date: '2024-10-15'
              },
              {
                value: 3495680.23,
                warn_level: '0',
                index_id: '180',
                d_date: '2024-10-18'
              },
              {
                value: 3473770.1075,
                warn_level: '1',
                index_id: '180',
                d_date: '2024-10-25'
              },
              {
                value: 14242212.73,
                warn_level: '1',
                index_id: '180',
                d_date: '2024-10-31'
              },
              {
                value: 14234998.68,
                warn_level: '1',
                index_id: '180',
                d_date: '2024-11-01'
              },
              {
                value: 14274555.85,
                warn_level: '1',
                index_id: '180',
                d_date: '2024-11-05'
              }
            ],
            value: 14274555.85,
            business_module: '6',
            warn_level: '超限',
            index_unit: '亿',
            index_id: '180',
            name: '【商品期权】当日市值权益',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 227.892475,
                warn_level: '0',
                index_id: '181',
                d_date: '2024-10-09'
              },
              {
                value: 2078482.555,
                warn_level: '0',
                index_id: '181',
                d_date: '2024-10-10'
              },
              {
                value: 1843595.0275,
                warn_level: '0',
                index_id: '181',
                d_date: '2024-10-11'
              },
              {
                value: 1804029.2425,
                warn_level: '0',
                index_id: '181',
                d_date: '2024-10-14'
              },
              {
                value: 643064.695,
                warn_level: '0',
                index_id: '181',
                d_date: '2024-10-15'
              },
              {
                value: 946865.4275,
                warn_level: '0',
                index_id: '181',
                d_date: '2024-10-18'
              },
              {
                value: 1588130.83,
                warn_level: '1',
                index_id: '181',
                d_date: '2024-10-25'
              },
              {
                value: 6308568.6,
                warn_level: '1',
                index_id: '181',
                d_date: '2024-10-31'
              },
              {
                value: 6439143.94,
                warn_level: '1',
                index_id: '181',
                d_date: '2024-11-01'
              },
              {
                value: 8195212.97,
                warn_level: '1',
                index_id: '181',
                d_date: '2024-11-05'
              }
            ],
            value: 8195212.97,
            business_module: '6',
            warn_level: '超限',
            index_id: '181',
            name: '【商品期权】当日持仓保证金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 245.220775,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-10-09'
              },
              {
                value: 2682062.2525,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-10-10'
              },
              {
                value: 2918247.5325,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-10-11'
              },
              {
                value: 3070442.125,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-10-14'
              },
              {
                value: 4250978.05,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-10-15'
              },
              {
                value: 2491376.0525,
                warn_level: '1',
                index_id: '182',
                d_date: '2024-10-18'
              },
              {
                value: 1879853.0275,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-10-25'
              },
              {
                value: 8004152.13,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-10-31'
              },
              {
                value: 7907802.74,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-11-01'
              },
              {
                value: 6607525.88,
                warn_level: '0',
                index_id: '182',
                d_date: '2024-11-05'
              }
            ],
            value: 6607525.88,
            business_module: '6',
            index_unit: '万',
            index_id: '182',
            name: '【商品期权】当日可用资金',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 12.042175,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-09'
              },
              {
                value: 10.91515,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-10'
              },
              {
                value: 9.679,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-11'
              },
              {
                value: 9.252425,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-14'
              },
              {
                value: 3.284925,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-15'
              },
              {
                value: 6.8848,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-18'
              },
              {
                value: 11.448525,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-25'
              },
              {
                value: 56.8756,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-10-31'
              },
              {
                value: 57.7083,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-11-01'
              },
              {
                value: 68.5387,
                warn_level: '0',
                index_id: '183',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 68.5387,
            business_module: '6',
            index_id: '183',
            name: '【商品期权】当日风险率',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 4.5,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-10-09'
              },
              {
                value: 4.5,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-10-10'
              },
              {
                value: 4.5,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-10-11'
              },
              {
                value: 4.5,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-10-14'
              },
              {
                value: 3.25,
                warn_level: '1',
                index_id: '55',
                d_date: '2024-10-15'
              },
              {
                value: 4.5,
                warn_level: '1',
                index_id: '55',
                d_date: '2024-10-18'
              },
              {
                value: 4.75,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-10-25'
              },
              {
                value: 31,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-10-31'
              },
              {
                value: 31,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-11-01'
              },
              {
                value: 31,
                warn_level: '0',
                index_id: '55',
                d_date: '2024-11-05'
              }
            ],
            value: 31,
            business_module: '6',
            index_id: '55',
            name: '【T+1】期货做市品种数量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-09'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-10'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-11'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-14'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-15'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-18'
              },
              {
                value: 1,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-25'
              },
              {
                value: 17,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-10-31'
              },
              {
                value: 17,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-11-01'
              },
              {
                value: 17,
                warn_level: '0',
                index_id: '56',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 17,
            business_module: '6',
            index_id: '56',
            name: '【T+1】期权做市品种数量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -44899.98,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-09'
              },
              {
                value: -107055.195,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-10'
              },
              {
                value: -99849.19,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-11'
              },
              {
                value: -71330.435,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-14'
              },
              {
                value: -94944.475,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-15'
              },
              {
                value: -138484.22,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-18'
              },
              {
                value: -93315.1675,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-25'
              },
              {
                value: -389637.14,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-10-31'
              },
              {
                value: -386437.79,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-11-01'
              },
              {
                value: -284767.28,
                warn_level: '0',
                index_id: '57',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: -284767.28,
            business_module: '6',
            index_id: '57',
            name: '【T+1】当日盈亏',
            limit_level: '1'
          },
          {
            list: [
              {
                value: -2205854.059,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-09'
              },
              {
                value: -2312909.254,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-10'
              },
              {
                value: -2412758.444,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-11'
              },
              {
                value: -2484088.879,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-14'
              },
              {
                value: -2579033.354,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-15'
              },
              {
                value: -2955387.6565,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-18'
              },
              {
                value: -884387.98825,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-25'
              },
              {
                value: -5483387.673,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-10-31'
              },
              {
                value: -5869838.463,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-11-01'
              },
              {
                value: -6485755.713,
                warn_level: '0',
                index_id: '58',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: -6485755.713,
            business_module: '6',
            index_id: '58',
            name: '【T+1】当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '6',
            index_id: '337',
            name: '【合约减收】交易盈亏'
          },
          {
            list: [],
            business_module: '6',
            index_id: '294',
            name: '操作风险资本准备'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '167',
            name: '【商品期权】交易盈亏',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '6',
            index_id: '335',
            name: '【合约减收】当日盈亏'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '62',
            name: '【T+1】期货做市敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '61',
            name: '【T+1】期权做市Gamma敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '166',
            name: '【商品期货】返还',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '162',
            name: '当年累计盈亏',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '6',
            index_id: '340',
            name: '【商品期权】服务费激励'
          },
          {
            list: [],
            business_module: '6',
            index_id: '336',
            name: '【商品期货】服务费激励'
          },
          {
            list: [],
            business_module: '6',
            index_id: '339',
            name: '【合约减收】返还'
          },
          {
            list: [],
            business_module: '6',
            index_id: '293',
            name: '市场风险资本准备'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '168',
            name: '【商品期权】手续费',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '169',
            name: '【商品期权】返还',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '170',
            name: '【商品期货】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '184',
            name: '【商品期货】做市品种个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '185',
            name: '【商品期权】做市品种个数',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '6',
            index_id: '296',
            name: '做市业务资金占比'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '171',
            name: '【商品期权】VaR(1)_95%',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '6',
            index_id: '295',
            name: '做市业务资金分配量'
          },
          {
            list: [],
            business_module: '6',
            index_id: '60',
            name: '【T+1】期权做市Vega敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '158',
            name: '市场风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '165',
            name: '【商品期货】手续费',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '6',
            index_id: '334',
            name: '【做市】当日盈亏'
          },
          {
            list: [],
            business_module: '6',
            index_id: '338',
            name: '【合约减收】手续费'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '163',
            name: '【总计】当日盈亏',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '63',
            name: '【T+1】期货做市敞口超限金额',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '159',
            name: '操作风险资本准备',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '160',
            name: '做市业务资金分配量',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '59',
            name: '【T+1】期权做市Delta敞口超限个数',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '161',
            name: '做市业务资金占比',
            limit_level: '1'
          },
          {
            list: [],
            limit_range: '1',
            business_module: '6',
            index_id: '164',
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
                warn_level: '0',
                index_id: '201',
                d_date: '2024-10-10'
              },
              {
                value: 59564.3325,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-10-11'
              },
              {
                value: 59564.3325,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-10-14'
              },
              {
                value: 56304.495,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-10-15'
              },
              {
                value: 62668.635,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-10-18'
              },
              {
                value: 65866.73,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-10-25'
              },
              {
                value: 497397.43,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-10-31'
              },
              {
                value: 505063.25,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-11-01'
              },
              {
                value: 504530.87,
                warn_level: '0',
                index_id: '201',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 504530.87,
            business_module: '7',
            index_id: '201',
            name: '总库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 286096375.7,
                warn_level: '0',
                index_id: '202',
                d_date: '2024-10-10'
              },
              {
                value: 283930986.2075,
                warn_level: '0',
                index_id: '202',
                d_date: '2024-10-11'
              },
              {
                value: 283929696.75,
                warn_level: '0',
                index_id: '202',
                d_date: '2024-10-14'
              },
              {
                value: 281196040.1975,
                warn_level: '1',
                index_id: '202',
                d_date: '2024-10-15'
              },
              {
                value: 289518368.27,
                warn_level: '1',
                index_id: '202',
                d_date: '2024-10-18'
              },
              {
                value: 308850414.04,
                warn_level: '1',
                index_id: '202',
                d_date: '2024-10-25'
              },
              {
                value: 1245683054.24,
                warn_level: '1',
                index_id: '202',
                d_date: '2024-10-31'
              },
              {
                value: 1265694178.78,
                warn_level: '1',
                index_id: '202',
                d_date: '2024-11-01'
              },
              {
                value: 1257069792.42,
                warn_level: '1',
                index_id: '202',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 1257069792.42,
            business_module: '7',
            warn_level: '超限',
            index_id: '202',
            name: '总库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 87462.08245,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-10-10'
              },
              {
                value: 86994.029,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-10-11'
              },
              {
                value: 86476.48755,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-10-14'
              },
              {
                value: 85978.1143,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-10-15'
              },
              {
                value: 84497.69145,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-10-18'
              },
              {
                value: 82664.937575,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-10-25'
              },
              {
                value: 561546.6258,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-10-31'
              },
              {
                value: 560589.1751,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-11-01'
              },
              {
                value: 558979.728,
                warn_level: '0',
                index_id: '203',
                d_date: '2024-11-05'
              }
            ],
            value: 558979.728,
            business_module: '7',
            index_id: '203',
            name: '近一年日均库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 429940987.35955,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-10-10'
              },
              {
                value: 427174744.82765,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-10-11'
              },
              {
                value: 424472032.40085,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-10-14'
              },
              {
                value: 421869396.555475,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-10-15'
              },
              {
                value: 414529688.0782,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-10-18'
              },
              {
                value: 404398594.595575,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-10-25'
              },
              {
                value: 1594482134.0997,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-10-31'
              },
              {
                value: 1589276177.6839,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-11-01'
              },
              {
                value: 1579897599.7354,
                warn_level: '0',
                index_id: '204',
                d_date: '2024-11-05'
              }
            ],
            value: 1579897599.7354,
            business_module: '7',
            index_id: '204',
            name: '近一年日均库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 26,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-10-10'
              },
              {
                value: 26.25,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-10-11'
              },
              {
                value: 26.25,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-10-14'
              },
              {
                value: 26.75,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-10-15'
              },
              {
                value: 27,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-10-18'
              },
              {
                value: 28,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-10-25'
              },
              {
                value: 127,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-10-31'
              },
              {
                value: 127,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-11-01'
              },
              {
                value: 123,
                warn_level: '0',
                index_id: '205',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 123,
            business_module: '7',
            index_id: '205',
            name: '在存仓库数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1.5,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-10-10'
              },
              {
                value: 1.5,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-10-11'
              },
              {
                value: 1.5,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-10-14'
              },
              {
                value: 1.75,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-10-15'
              },
              {
                value: 1.5,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-10-18'
              },
              {
                value: 1.25,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-10-25'
              },
              {
                value: 20,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-10-31'
              },
              {
                value: 23,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-11-01'
              },
              {
                value: 19,
                warn_level: '0',
                index_id: '206',
                d_date: '2024-11-05'
              }
            ],
            value: 19,
            business_module: '7',
            index_id: '206',
            name: '在存仓库合同异常数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 17641112.5,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-10-10'
              },
              {
                value: 17641112.5,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-10-11'
              },
              {
                value: 17641112.5,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-10-14'
              },
              {
                value: 17641112.5,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-10-15'
              },
              {
                value: 17641112.5,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-10-18'
              },
              {
                value: 18028955,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-10-25'
              },
              {
                value: 76490596,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-10-31'
              },
              {
                value: 73623844,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-11-01'
              },
              {
                value: 73623844,
                warn_level: '0',
                index_id: '207',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 73623844,
            business_module: '7',
            index_id: '207',
            name: '仓库集中度',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 67124023.9275,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-10-10'
              },
              {
                value: 63155814.1525,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-10-11'
              },
              {
                value: 63155177.7025,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-10-14'
              },
              {
                value: 59987163.095,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-10-15'
              },
              {
                value: 57542691.6575,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-10-18'
              },
              {
                value: 61953471.4775,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-10-25'
              },
              {
                value: 245688568.93,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-10-31'
              },
              {
                value: 255020478.03,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-11-01'
              },
              {
                value: 263457155,
                warn_level: '0',
                index_id: '208',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 263457155,
            business_module: '7',
            index_id: '208',
            name: '部门集中度',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 35325649.795,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-10-10'
              },
              {
                value: 35083012.615,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-10-11'
              },
              {
                value: 35083012.615,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-10-14'
              },
              {
                value: 34025027.64,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-10-15'
              },
              {
                value: 33769494.46,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-10-18'
              },
              {
                value: 36327683.7575,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-10-25'
              },
              {
                value: 145545713.03,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-10-31'
              },
              {
                value: 145545713.03,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-11-01'
              },
              {
                value: 138195700,
                warn_level: '0',
                index_id: '209',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 138195700,
            business_module: '7',
            index_id: '209',
            name: '品种集中度',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 20.985575,
                warn_level: '0',
                index_id: '210',
                d_date: '2024-10-10'
              },
              {
                value: 21.0454,
                warn_level: '0',
                index_id: '210',
                d_date: '2024-10-11'
              },
              {
                value: 21.0454,
                warn_level: '0',
                index_id: '210',
                d_date: '2024-10-14'
              },
              {
                value: 21.339225,
                warn_level: '0',
                index_id: '210',
                d_date: '2024-10-15'
              },
              {
                value: 20.95035,
                warn_level: '0',
                index_id: '210',
                d_date: '2024-10-18'
              },
              {
                value: 21.54155,
                warn_level: '3',
                index_id: '210',
                d_date: '2024-10-25'
              },
              {
                value: 97.8569,
                warn_level: '1',
                index_id: '210',
                d_date: '2024-10-31'
              },
              {
                value: 98.7424,
                warn_level: '1',
                index_id: '210',
                d_date: '2024-11-01'
              },
              {
                value: 99.3573,
                warn_level: '1',
                index_id: '210',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 99.3573,
            business_module: '7',
            warn_level: '超限',
            index_id: '210',
            name: '总体仓库资信得分',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0.5,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-10-10'
              },
              {
                value: 0.5,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-10-11'
              },
              {
                value: 0.5,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-10-14'
              },
              {
                value: 0.25,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-10-15'
              },
              {
                value: 0.5,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-10-18'
              },
              {
                value: 0.25,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-10-25'
              },
              {
                value: 16,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-10-31'
              },
              {
                value: 17,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-11-01'
              },
              {
                value: 15,
                warn_level: '0',
                index_id: '211',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 15,
            business_module: '7',
            index_id: '211',
            name: '未评分仓库数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '212',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '212',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '212',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '2',
                index_id: '212',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '2',
                index_id: '212',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '212',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '212',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '212',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '1',
                index_id: '212',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 13,
            business_module: '7',
            warn_level: '超限',
            index_id: '212',
            name: '[部门]仓库资信评分最低',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 0,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-10-10'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-10-11'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-10-14'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-10-15'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-10-18'
              },
              {
                value: 0,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-10-25'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-10-31'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-11-01'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '213',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 13,
            business_module: '7',
            index_id: '213',
            name: '[品种]仓库资信评分最低',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 6.75,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-10-10'
              },
              {
                value: 7,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-10-11'
              },
              {
                value: 7,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-10-14'
              },
              {
                value: 7.5,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-10-15'
              },
              {
                value: 7.75,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-10-18'
              },
              {
                value: 8,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-10-25'
              },
              {
                value: 45,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-10-31'
              },
              {
                value: 46,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-11-01'
              },
              {
                value: 45,
                warn_level: '0',
                index_id: '214',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 45,
            business_module: '7',
            index_id: '214',
            name: '超90天未盘查仓库数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 12.863325,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-10-10'
              },
              {
                value: 12.608725,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-10-11'
              },
              {
                value: 12.853675,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-10-14'
              },
              {
                value: 13.1701,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-10-15'
              },
              {
                value: 10.15265,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-10-18'
              },
              {
                value: 9.6487,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-10-25'
              },
              {
                value: 52.5211,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-10-31'
              },
              {
                value: 48.0822,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-11-01'
              },
              {
                value: 49.6199,
                warn_level: '0',
                index_id: '215',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 49.6199,
            business_module: '7',
            index_id: '215',
            name: '总体库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1963.645,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-10-10'
              },
              {
                value: 1947.6575,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-10-11'
              },
              {
                value: 1947.655,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-10-14'
              },
              {
                value: 1947.6575,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-10-15'
              },
              {
                value: 1253.9325,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-10-18'
              },
              {
                value: 1253.9125,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-10-25'
              },
              {
                value: 239993.65,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-10-31'
              },
              {
                value: 239993.65,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-11-01'
              },
              {
                value: 239993.65,
                warn_level: '0',
                index_id: '216',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 239993.65,
            business_module: '7',
            index_id: '216',
            name: '库龄超一年库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 5148094.9,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-10-10'
              },
              {
                value: 5083580.2075,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-10-11'
              },
              {
                value: 5083580.2075,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-10-14'
              },
              {
                value: 5083580.2075,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-10-15'
              },
              {
                value: 2533259.38,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-10-18'
              },
              {
                value: 2533168.7025,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-10-25'
              },
              {
                value: 10367652.81,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-10-31'
              },
              {
                value: 10367652.81,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-11-01'
              },
              {
                value: 10367652.81,
                warn_level: '0',
                index_id: '217',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 10367652.81,
            business_module: '7',
            index_id: '217',
            name: '库龄超一年库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2427874.56,
                warn_level: '0',
                index_id: '218',
                d_date: '2024-10-10'
              },
              {
                value: 2415029.76,
                warn_level: '0',
                index_id: '218',
                d_date: '2024-10-11'
              },
              {
                value: 2415029.76,
                warn_level: '0',
                index_id: '218',
                d_date: '2024-10-14'
              },
              {
                value: 2415029.76,
                warn_level: '3',
                index_id: '218',
                d_date: '2024-10-15'
              },
              {
                value: 2225323.375,
                warn_level: '3',
                index_id: '218',
                d_date: '2024-10-18'
              },
              {
                value: 2225323.375,
                warn_level: '0',
                index_id: '218',
                d_date: '2024-10-25'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '218',
                d_date: '2024-10-31'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '218',
                d_date: '2024-11-01'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '218',
                d_date: '2024-11-05'
              }
            ],
            value: 9136271.5,
            business_module: '7',
            index_unit: '万',
            index_id: '218',
            name: '[仓库]库龄超一年最大库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2622748.5975,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-10-10'
              },
              {
                value: 2558233.905,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-10-11'
              },
              {
                value: 2558233.905,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-10-14'
              },
              {
                value: 2558233.905,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-10-15'
              },
              {
                value: 2225323.375,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-10-18'
              },
              {
                value: 2225323.375,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-10-25'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-10-31'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-11-01'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '219',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 9136271.5,
            business_module: '7',
            index_id: '219',
            name: '[部门]库龄超一年最大库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 2487263.31,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-10-10'
              },
              {
                value: 2450604.51,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-10-11'
              },
              {
                value: 2450604.51,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-10-14'
              },
              {
                value: 2450604.51,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-10-15'
              },
              {
                value: 2225323.375,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-10-18'
              },
              {
                value: 2225323.375,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-10-25'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-10-31'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-11-01'
              },
              {
                value: 9136271.5,
                warn_level: '0',
                index_id: '220',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 9136271.5,
            business_module: '7',
            index_id: '220',
            name: '[品种]库龄超一年最大库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 182.25,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-10-10'
              },
              {
                value: 183,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-10-11'
              },
              {
                value: 183.25,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-10-14'
              },
              {
                value: 183.5,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-10-15'
              },
              {
                value: 185,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-10-18'
              },
              {
                value: 186.5,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-10-25'
              },
              {
                value: 763,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-10-31'
              },
              {
                value: 766,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-11-01'
              },
              {
                value: 768,
                warn_level: '0',
                index_id: '221',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 768,
            business_module: '7',
            index_id: '221',
            name: '[仓库]最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 503,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-10-10'
              },
              {
                value: 503.75,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-10-11'
              },
              {
                value: 504,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-10-14'
              },
              {
                value: 504.25,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-10-15'
              },
              {
                value: 505.75,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-10-18'
              },
              {
                value: 507.25,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-10-25'
              },
              {
                value: 237011,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-10-31'
              },
              {
                value: 237014,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-11-01'
              },
              {
                value: 237016,
                warn_level: '0',
                index_id: '222',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 237016,
            business_module: '7',
            index_id: '222',
            name: '[部门]最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 503,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-10-10'
              },
              {
                value: 503.75,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-10-11'
              },
              {
                value: 504,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-10-14'
              },
              {
                value: 504.25,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-10-15'
              },
              {
                value: 505.75,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-10-18'
              },
              {
                value: 507.25,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-10-25'
              },
              {
                value: 237011,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-10-31'
              },
              {
                value: 237014,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-11-01'
              },
              {
                value: 237016,
                warn_level: '0',
                index_id: '223',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '3',
            value: 237016,
            business_module: '7',
            index_id: '223',
            name: '[品种]最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 3.707525,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-10-10'
              },
              {
                value: 3.7311,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-10-11'
              },
              {
                value: 3.76855,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-10-14'
              },
              {
                value: 3.822825,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-10-15'
              },
              {
                value: 3.8673,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-10-18'
              },
              {
                value: 4.010525,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-10-25'
              },
              {
                value: 29.5169,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-10-31'
              },
              {
                value: 29.5965,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-11-01'
              },
              {
                value: 29.7099,
                warn_level: '0',
                index_id: '224',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 29.7099,
            business_module: '7',
            index_id: '224',
            name: '存货周转次数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 6.153025,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-10-10'
              },
              {
                value: 6.114175,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-10-11'
              },
              {
                value: 6.053375,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-10-14'
              },
              {
                value: 5.96745,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-10-15'
              },
              {
                value: 5.898825,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-10-18'
              },
              {
                value: 5.68815,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-10-25'
              },
              {
                value: 35.0985,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-10-31'
              },
              {
                value: 34.9926,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-11-01'
              },
              {
                value: 34.8434,
                warn_level: '0',
                index_id: '225',
                d_date: '2024-11-05'
              }
            ],
            value: 34.8434,
            business_module: '7',
            index_id: '225',
            name: '存货单次周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1.8875,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-10-10'
              },
              {
                value: 1.8825,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-10-11'
              },
              {
                value: 1.8975,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-10-14'
              },
              {
                value: 1.8925,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-10-15'
              },
              {
                value: 1.8775,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-10-18'
              },
              {
                value: 9.425,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-10-25'
              },
              {
                value: 22.07,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-10-31'
              },
              {
                value: 22.12,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-11-01'
              },
              {
                value: 22.22,
                warn_level: '0',
                index_id: '226',
                d_date: '2024-11-05'
              }
            ],
            value: 22.22,
            business_module: '7',
            index_id: '226',
            name: '库存金额最大仓库周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 32.3425,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-10-10'
              },
              {
                value: 31.9975,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-10-11'
              },
              {
                value: 31.94,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-10-14'
              },
              {
                value: 30.845,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-10-15'
              },
              {
                value: 30.2025,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-10-18'
              },
              {
                value: 5.2175,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-10-25'
              },
              {
                value: 33.41,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-10-31'
              },
              {
                value: 51.6,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-11-01'
              },
              {
                value: 53.21,
                warn_level: '0',
                index_id: '227',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 53.21,
            business_module: '7',
            index_id: '227',
            name: '库存金额最大部门周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 10.1975,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-10-10'
              },
              {
                value: 10.155,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-10-11'
              },
              {
                value: 10.065,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-10-14'
              },
              {
                value: 9.9575,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-10-15'
              },
              {
                value: 10.2625,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-10-18'
              },
              {
                value: 8.3775,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-10-25'
              },
              {
                value: 45.03,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-10-31'
              },
              {
                value: 45.03,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-11-01'
              },
              {
                value: 44.82,
                warn_level: '0',
                index_id: '228',
                d_date: '2024-11-05'
              }
            ],
            value: 44.82,
            business_module: '7',
            index_id: '228',
            name: '库存金额最大品种周转天数',
            limit_level: '1'
          },
          {
            list: [
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-10-10'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-10-11'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-10-14'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-10-15'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-10-18'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-10-25'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-10-31'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-11-01'
              },
              {
                warn_level: '0',
                index_id: '229',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            business_module: '7',
            index_id: '229',
            name: '涉诉库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-10-10'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-10-11'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-10-14'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-10-15'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-10-18'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-10-25'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-10-31'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-11-01'
              },
              {
                warn_level: '0',
                index_id: '230',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            business_module: '7',
            index_id: '230',
            name: '涉诉库存金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 10043.245,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-10-10'
              },
              {
                value: 7543.245,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-10-11'
              },
              {
                value: 7543.245,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-10-14'
              },
              {
                value: 5043.245,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-10-15'
              },
              {
                value: 12699.62,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-10-18'
              },
              {
                value: 2543.245,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-10-25'
              },
              {
                value: 245150.98,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-10-31'
              },
              {
                value: 285776.48,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-11-01'
              },
              {
                value: 285776.48,
                warn_level: '0',
                index_id: '231',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '2',
            value: 285776.48,
            business_module: '7',
            index_id: '231',
            name: '港上存货量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 7531494.675,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-10-10'
              },
              {
                value: 5685244.675,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-10-11'
              },
              {
                value: 5685244.675,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-10-14'
              },
              {
                value: 3885244.675,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-10-15'
              },
              {
                value: 9406584.675,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-10-18'
              },
              {
                value: 2047744.675,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-10-25'
              },
              {
                value: 8425956.7,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-10-31'
              },
              {
                value: 38271316.7,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-11-01'
              },
              {
                value: 38271316.7,
                warn_level: '0',
                index_id: '232',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 38271316.7,
            business_module: '7',
            index_id: '232',
            name: '港上存货金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 12.25,
                warn_level: '0',
                index_id: '233',
                d_date: '2024-10-10'
              },
              {
                value: 13,
                warn_level: '0',
                index_id: '233',
                d_date: '2024-10-11'
              },
              {
                value: 13.25,
                warn_level: '0',
                index_id: '233',
                d_date: '2024-10-14'
              },
              {
                value: 13.5,
                warn_level: '1',
                index_id: '233',
                d_date: '2024-10-15'
              },
              {
                value: 15,
                warn_level: '1',
                index_id: '233',
                d_date: '2024-10-18'
              },
              {
                value: 16.5,
                warn_level: '1',
                index_id: '233',
                d_date: '2024-10-25'
              },
              {
                value: 83,
                warn_level: '1',
                index_id: '233',
                d_date: '2024-10-31'
              },
              {
                value: 86,
                warn_level: '1',
                index_id: '233',
                d_date: '2024-11-01'
              },
              {
                value: 88,
                warn_level: '1',
                index_id: '233',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 88,
            business_module: '7',
            warn_level: '超限',
            index_id: '233',
            name: '港上存货最大库龄',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 3.75,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-10-10'
              },
              {
                value: 3.75,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-10-11'
              },
              {
                value: 3.75,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-10-14'
              },
              {
                value: 4,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-10-15'
              },
              {
                value: 4.25,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-10-18'
              },
              {
                value: 4,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-10-25'
              },
              {
                value: 27,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-10-31'
              },
              {
                value: 26,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-11-01'
              },
              {
                value: 26,
                warn_level: '0',
                index_id: '234',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 26,
            business_module: '7',
            index_id: '234',
            name: '零星库存个数',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 72.076,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-10-10'
              },
              {
                value: 70.92425,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-10-11'
              },
              {
                value: 70.92425,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-10-14'
              },
              {
                value: 76.10175,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-10-15'
              },
              {
                value: 82.06975,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-10-18'
              },
              {
                value: 72.076,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-10-25'
              },
              {
                value: 300.773,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-10-31'
              },
              {
                value: 441.1905,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-11-01'
              },
              {
                value: 441.1905,
                warn_level: '0',
                index_id: '235',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 441.1905,
            business_module: '7',
            index_id: '235',
            name: '零星库存量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 195100.142225,
                warn_level: '0',
                index_id: '236',
                d_date: '2024-10-10'
              },
              {
                value: 197108.02375,
                warn_level: '0',
                index_id: '236',
                d_date: '2024-10-11'
              },
              {
                value: 197108.02375,
                warn_level: '0',
                index_id: '236',
                d_date: '2024-10-14'
              },
              {
                value: 213497.29875,
                warn_level: '0',
                index_id: '236',
                d_date: '2024-10-15'
              },
              {
                value: 295326.29645,
                warn_level: '0',
                index_id: '236',
                d_date: '2024-10-18'
              },
              {
                value: 236048.01145,
                warn_level: '1',
                index_id: '236',
                d_date: '2024-10-25'
              },
              {
                value: 1197577.6126,
                warn_level: '1',
                index_id: '236',
                d_date: '2024-10-31'
              },
              {
                value: 1276681.5893,
                warn_level: '1',
                index_id: '236',
                d_date: '2024-11-01'
              },
              {
                value: 1276681.5893,
                warn_level: '1',
                index_id: '236',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            value: 1276681.5893,
            business_module: '7',
            warn_level: '超限',
            index_id: '236',
            name: '零星库存总金额',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 100.8,
                warn_level: '0',
                index_id: '237',
                d_date: '2024-10-10'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-10-11'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-10-14'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-10-15'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-10-18'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-10-25'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-10-31'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-11-01'
              },
              {
                warn_level: '0',
                index_id: '237',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            business_module: '7',
            index_id: '237',
            name: '港上船货量',
            limit_level: '1'
          },
          {
            list: [
              {
                value: 1260011.229125,
                warn_level: '0',
                index_id: '238',
                d_date: '2024-10-10'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-10-11'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-10-14'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-10-15'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-10-18'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-10-25'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-10-31'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-11-01'
              },
              {
                warn_level: '0',
                index_id: '238',
                d_date: '2024-11-05'
              }
            ],
            limit_range: '1',
            business_module: '7',
            index_id: '238',
            name: '港上船货金额',
            limit_level: '1'
          },
          {
            list: [],
            business_module: '7',
            index_id: '342',
            name: '海上船货金额'
          },
          {
            list: [],
            business_module: '7',
            index_id: '341',
            name: '海上船货量'
          }
        ],
        title: '仓储物流'
      },
      {
        list: [
          {
            list: [],
            business_module: '8',
            index_id: '299',
            name: '净资本与净资产的比例'
          },
          {
            list: [],
            business_module: '8',
            index_id: '297',
            name: '净资本'
          },
          {
            list: [],
            business_module: '8',
            index_id: '302',
            name: '结算准备金额'
          },
          {
            list: [],
            business_module: '8',
            index_id: '301',
            name: '负债与净资产的比例'
          },
          {
            list: [],
            business_module: '8',
            index_id: '300',
            name: '流动资产与流动负债的比例'
          },
          {
            list: [],
            business_module: '8',
            index_id: '298',
            name: '净资本与风险资本准备总额的比例'
          }
        ],
        title: '核心监管'
      },
      {
        list: [
          {
            list: [],
            business_module: '9',
            index_id: '264',
            name: '【种子基金】单管理人投资规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '325',
            name: '【二级】自有资金投资总规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '253',
            name: '【财务型】单产品年度损失限额(非固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '329',
            name: '【财务型】投资标的数'
          },
          {
            list: [],
            business_module: '9',
            index_id: '332',
            name: '【财务型】封闭期大于一年的投资规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '273',
            name: '【量化公募】投资总损失限额'
          },
          {
            list: [],
            business_module: '9',
            index_id: '265',
            name: '【永安资管】投资总规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '262',
            name: '【种子基金】单产品累计损失限额(固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '270',
            name: '【永安资管】单产品累计损失限额(固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '326',
            name: '【二级】自有资金投资总损失限额'
          },
          {
            list: [],
            business_module: '9',
            index_id: '272',
            name: '【量化公募】投资总规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '260',
            name: '【种子基金】单产品年度损失限额(固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '267',
            name: '【永安资管】封闭期大于一年的投资规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '328',
            name: '单一管理人集中度'
          },
          {
            list: [],
            business_module: '9',
            index_id: '257',
            name: '【种子基金】投资总规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '331',
            name: '【财务型】投资总损失限额'
          },
          {
            list: [],
            business_module: '9',
            index_id: '261',
            name: '【种子基金】单产品年度损失限额(非固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '255',
            name: '【财务型】单产品累计损失限额(非固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '269',
            name: '【永安资管】单产品年度损失限额(非固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '256',
            name: '【财务型】单管理人投资规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '259',
            name: '【种子基金】封闭期大于一年的投资规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '266',
            name: '【永安资管】投资总损失限额'
          },
          {
            list: [],
            business_module: '9',
            index_id: '271',
            name: '【永安资管】单产品累计损失限额(非固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '330',
            name: '【财务型】投资总规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '324',
            name: '【一级】自有资金投资总损失限额'
          },
          {
            list: [],
            business_module: '9',
            index_id: '263',
            name: '【种子基金】单产品累计损失限额(非固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '258',
            name: '【种子基金】投资总损失限额'
          },
          {
            list: [],
            business_module: '9',
            index_id: '323',
            name: '【一级】自有资金投资总规模'
          },
          {
            list: [],
            business_module: '9',
            index_id: '254',
            name: '【财务型】单产品累计损失限额(固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '268',
            name: '【永安资管】单产品年度损失限额(固收类)'
          },
          {
            list: [],
            business_module: '9',
            index_id: '327',
            name: '封闭期大于一年(不含)比例'
          },
          {
            list: [],
            business_module: '9',
            index_id: '333',
            name: '【财务型】单产品年度损失限额(固收类)'
          }
        ],
        title: '自有资金投资'
      },
      {
        list: [
          {
            list: [],
            business_module: '10',
            index_id: '305',
            name: '【二级】战略投资总损失限额'
          },
          {
            list: [],
            business_module: '10',
            index_id: '307',
            name: '【三级】战略投资总损失限额'
          },
          {
            list: [],
            business_module: '10',
            index_id: '306',
            name: '【三级】战略投资总规模'
          },
          {
            list: [],
            business_module: '10',
            index_id: '304',
            name: '【二级】战略投资总规模'
          },
          {
            list: [],
            business_module: '10',
            index_id: '308',
            name: '战略投资单笔投资累计损失限额'
          },
          {
            list: [],
            business_module: '10',
            index_id: '303',
            name: '战略投资标的数'
          }
        ],
        title: '战略投资'
      },
      {
        list: [
          {
            list: [],
            business_module: '11',
            index_id: '274',
            name: '【子公司一级】中邦实业投资总规模'
          },
          {
            list: [],
            business_module: '11',
            index_id: '275',
            name: '【子公司一级】中邦实业投资总损失限额'
          },
          {
            list: [],
            business_module: '11',
            index_id: '279',
            name: '中邦实业投资同一管理人集中度'
          },
          {
            list: [],
            business_module: '11',
            index_id: '277',
            name: '【子公司二级】中邦实业投资总亏损限额'
          },
          {
            list: [],
            business_module: '11',
            index_id: '278',
            name: '中邦实业投资单行业集中度'
          },
          {
            list: [],
            business_module: '11',
            index_id: '276',
            name: '【子公司二级】中邦实业投资总规模'
          }
        ],
        title: '中邦实业'
      },
      {
        list: [
          {
            list: [],
            business_module: '12',
            index_id: '313',
            name: '永安资本净资本与净资产的比例'
          },
          {
            list: [],
            business_module: '12',
            index_id: '315',
            name: '永安资本资产负债率'
          },
          {
            list: [],
            business_module: '12',
            index_id: '310',
            name: '永安资本净资产'
          },
          {
            list: [],
            business_module: '12',
            index_id: '320',
            name: '场外衍生品业务最大亏损'
          },
          {
            list: [],
            business_module: '12',
            index_id: '314',
            name: '永安资本流动性覆盖率'
          },
          {
            list: [],
            business_module: '12',
            index_id: '319',
            name: '做市业务最大亏损'
          },
          {
            list: [],
            business_module: '12',
            index_id: '312',
            name: '永安资本风险覆盖率'
          },
          {
            list: [],
            business_module: '12',
            index_id: '317',
            name: '永安资本信用风险资本准备'
          },
          {
            list: [],
            business_module: '12',
            index_id: '316',
            name: '永安资本市场风险资本准备'
          },
          {
            list: [],
            business_module: '12',
            index_id: '318',
            name: '永安资本操作风险资本准备'
          },
          {
            list: [],
            business_module: '12',
            index_id: '309',
            name: '永安资本净资本'
          },
          {
            list: [],
            business_module: '12',
            index_id: '311',
            name: '永安资本风险资本准备'
          }
        ],
        title: '核心监管（资本）'
      },
      {
        list: [
          {
            list: [],
            business_module: '13',
            index_id: '285',
            name: '重大损失金额'
          },
          {
            list: [],
            business_module: '13',
            index_id: '281',
            name: '新永安投资总损失限额'
          },
          {
            list: [],
            business_module: '13',
            index_id: '284',
            name: '重大损失指标'
          },
          {
            list: [],
            business_module: '13',
            index_id: '280',
            name: '新永安投资总规模'
          },
          {
            list: [],
            business_module: '13',
            index_id: '286',
            name: '受境外监管处罚指标'
          },
          {
            list: [],
            business_module: '13',
            index_id: '282',
            name: '新永安单产品年度损失限额(固收类)'
          },
          {
            list: [],
            business_module: '13',
            index_id: '283',
            name: '新永安单产品年度损失限额(非固收类)'
          }
        ],
        title: '新永安国际'
      }
    ]
  }
]
function buildEchartPdf (buildData: EchartData[]) {
  const A4_WIDTH = 595.28 // A4纸宽度
  const A4_HEIGHT = 841.89 // A4纸高度
  const pageMargin = 40 // 页边距
  const lineHeight = 20 // 行高
  // echart图片宽度 = (A4宽度 - 页边距 * 2) / 2 - 行高
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
        // 数值差距过大 需要动态计算y轴宽度
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
