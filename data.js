// 木材生产	原木*1	1	3
// 木板生产	木材*1	1	3
// 加强木板生产	木板*2，石材*3	1	6
// 木质框架生产	木棒*4，螺丝*6	1	6
// 铁质核心生产	加固铁板*1，C级能量块*1	1	10
// 木棒生产	木材*2	3	6
// 石材生产	石头*1	1	3
// 铁锭生产	铁矿石*2	1	3
// 铜锭生产	铜矿石*2	1	3
// 石砖生产	石材*2	1	6
// 铁板生产	铁锭*1	1	3
// 铁棒生产	铁锭*2	3	6
// 螺丝生产	铁棒*1	3	2
// 加固铁板生产	铁板*2，螺丝*4	1	6
// 铁质框架生产	铁棒*4，螺丝*6	1	6
// 铁质工具生产	铁棒*2，加固铁板*1	1	10
// 钢制核心生产	铁质工具*1，B级能量块*1	1	12
// 铜板生产	铜锭*1	1	3
// 铜线生产	铜锭*2	3	6
// 硅提纯	沙子*3	1	6
// 玻璃生产	沙子*3，石头*3	1	6
// 木纤维生产	原木*2	3	6
// 线生产	木纤维*2	1	6
// 布生产	线*2	1	6
// 纸生产	木材*1	2	3
// 油纸生产	纸*3，油*1	1	9
// 初级工具生产	木棒*2，石材*1	1	10
// 粮食酒酿造	粮食*4	1	15
// 粮食榨油	粮食*4	1	15
// 酒精提纯	酒*3	1	12
// 钢熔铸	铁矿石*2，煤矿石*2	1	4
// 钢管生产	钢锭*2	1	6
// 钢板生产	钢锭*3	2	12
// 钢筋混凝土生产	钢板*2，石材*5	1	15
// 电枢生产	铁棒*4，铜线*20	1	15
// 集电环生产	铜板*4，螺丝*25	1	15
// 燃料碳棒生产	煤矿石*1，木纤维*1	1	3
// 强力石砖	钢筋混凝土*1	2	15
// 精致皮革生产	兽皮*1，布*2	1	10
// 精致丝线生产	蛛丝*1，线*4	2	10
// 红色晶能生产	铁锭*3，铜锭*3	1	6
// 绿色晶能生产	布*3，初级工具*2	1	10
// 蓝色晶能生产	铁质核心*1，钢管*3	1	12
// 紫色晶能生产	控制器*1，电动机*1	1	15
// 芯片生产	提纯硅*10，铜板*15	1	30
// 控制器生产	芯片*1，钢制核心*1	1	30
// 电动机生产	电枢*5，集电环*5	2	30
// 高级工具生产	工业结构体*1，控制器*1， 电动机*1	2	20
// 帐篷制造	布*10，木棒*8，加固铁板*1	1
// 天机石制造	提纯硅*5，铁质工具*2，铁质核心*10	1	12
// 防御磁盾	工业结构体*1，提纯硅*6	1
// C级能量块生产	铜板*3，木质框架*1	1	20
// B级能量块生产	钢管*4，提纯硅*10	1	30
// 工业结构体生产	铁质框架*3，钢管*5， 强力石砖*5	2	30
// 塑料生产	桶装石油*3，煤矿石*2	1	5
// 橡胶生产	桶装石油*3，粮食*2	1	5
// 电路板生产	橡胶*5，铜板*20，工业结构体*2	1	30
// 大型计算机生产	电路板*1，芯片*5，控制器*5	1	30
// 燃油能量块生产	燃料碳棒*2，桶装石油*2	1	10
// 高性能地板生产	橡胶*3，塑料*3，强力石砖*4	1	10
// 抗生素生产	酒*5，油*5	1
// 香皂生产	油*2，酒精*2	1	6
// 铜镜生产	木质框架*1，铜板*3	1	6
// 油纸伞生产	木棒*2，油纸*3	1	6
// 医药箱生产	布*2，酒精*2，铁质框架*1	1	12
// 手表生产	玻璃*5，芯片*2，电路板*1	1	15
// 建造胶囊生产	木质框架*1，钢筋混凝土*1	3	15
// 烤箱生产	工业结构体*1，高级工具*1，大型计算机*1	1	20

export default [
  // 原始材料
  {
    name: '原木',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  {
    name: '铁矿石',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  // 铜矿石
  {
    name: '铜矿石',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  // 石头
  {
    name: '石头',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  // 煤矿石
  {
    name: '煤矿石',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  // 沙子
  {
    name: '沙子',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  // 粮食
  {
    name: '粮食',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  // 桶装石油
  {
    name: '桶装石油',
    time: 1,
    output: 1,
    source: [],
    raw: true,
  },
  // 生產材料
  {
    name: '木材',
    time: 3,
    output: 1,
    source: [{ name: '原木', amount: 1 }],
    raw: false,
  },
  {
    name: '木板',
    time: 3,
    output: 1,
    source: [{ name: '木材', amount: 1 }],
    raw: false,
  },
  {
    name: '加强木板',
    time: 6,
    output: 1,
    source: [{ name: '木板', amount: 2 }, { name: '石材', amount: 3 }],
    raw: false,
  },
  {
    name: '木质框架',
    time: 6,
    output: 1,
    source: [{ name: '木棒', amount: 4 }, { name: '螺丝', amount: 6 }],
    raw: false,
  },
  {
    name: '铁质核心',
    time: 10,
    output: 1,
    source: [{ name: '加固铁板', amount: 1 }, { name: 'C级能量块', amount: 1 }],
    raw: false,
  },
  {
    name: '木棒',
    time: 6,
    output: 3,
    source: [{ name: '木材', amount: 2 }],
    raw: false,
  },
  {
    name: '石材',
    time: 3,
    output: 1,
    source: [{ name: '石头', amount: 1 }],
    raw: false,
  },
  {
    name: '铁锭',
    time: 3,
    output: 1,
    source: [{ name: '铁矿石', amount: 2 }],
    raw: false,
  },
  {
    name: '铜锭',
    time: 3,
    output: 1,
    source: [{ name: '铜矿石', amount: 2 }],
    raw: false,
  },
  {
    name: '石砖',
    time: 6,
    output: 1,
    source: [{ name: '石材', amount: 2 }],
    raw: false,
  },
  {
    name: '铁板',
    time: 3,
    output: 1,
    source: [{ name: '铁锭', amount: 1 }],
    raw: false,
  },
  {
    name: '铁棒',
    time: 6,
    output: 3,
    source: [{ name: '铁锭', amount: 2 }],
    raw: false,
  },
  {
    name: '螺丝',
    time: 2,
    output: 3,
    source: [{ name: '铁棒', amount: 1 }],
    raw: false,
  },
  {
    name: '加固铁板',
    time: 6,
    output: 1,
    source: [{ name: '铁板', amount: 2 }, { name: '螺丝', amount: 4 }],
    raw: false,
  },
  {
    name: '铁质框架',
    time: 6,
    output: 1,
    source: [{ name: '铁棒', amount: 4 }, { name: '螺丝', amount: 6 }],
    raw: false,
  },
  {
    name: '铁质工具',
    time: 10,
    output: 1,
    source: [{ name: '铁棒', amount: 2 }, { name: '加固铁板', amount: 1 }],
    raw: false,
  },
  {
    name: '钢制核心',
    time: 12,
    output: 1,
    source: [{ name: '铁质工具', amount: 1 }, { name: 'B级能量块', amount: 1 }],
    raw: false,
  },
  {
    name: '铜板',
    time: 3,
    output: 1,
    source: [{ name: '铜锭', amount: 1 }],
    raw: false,
  },
  {
    name: '铜线',
    time: 6,
    output: 3,
    source: [{ name: '铜锭', amount: 2 }],
    raw: false,
  },
  {
    name: '提纯硅',
    time: 6,
    output: 1,
    source: [{ name: '沙子', amount: 3 }],
    raw: false,
  },
  {
    name: '玻璃',
    time: 6,
    output: 1,
    source: [{ name: '沙子', amount: 3 }, { name: '石头', amount: 3 }],
    raw: false,
  },
  {
    name: '木纤维',
    time: 6,
    output: 3,
    source: [{ name: '原木', amount: 2 }],
    raw: false,
  },
  {
    name: '线',
    time: 6,
    output: 1,
    source: [{ name: '木纤维', amount: 2 }],
    raw: false,
  },
  {
    name: '布',
    time: 6,
    output: 1,
    source: [{ name: '线', amount: 2 }],
    raw: false,
  },
  {
    name: '纸',
    time: 3,
    output: 2,
    source: [{ name: '木材', amount: 1 }],
    raw: false,
  },
  {
    name: '油纸',
    time: 9,
    output: 1,
    source: [{ name: '纸', amount: 3 }, { name: '油', amount: 1 }],
    raw: false,
  },
  {
    name: '初级工具',
    time: 10,
    output: 1,
    source: [{ name: '木棒', amount: 2 }, { name: '石材', amount: 1 }],
    raw: false,
  },
  {
    name: '酒',
    time: 15,
    output: 1,
    source: [{ name: '粮食', amount: 4 }],
    raw: false,
  },
  {
    name: '油',
    time: 15,
    output: 1,
    source: [{ name: '粮食', amount: 4 }],
    raw: false,
  },
  {
    name: '酒精',
    time: 12,
    output: 1,
    source: [{ name: '酒', amount: 3 }],
    raw: false,
  },
  {
    name: '钢锭',
    time: 4,
    output: 1,
    source: [{ name: '铁矿石', amount: 2 }, { name: '煤矿石', amount: 2 }],
    raw: false,
  },
  {
    name: '钢管',
    time: 6,
    output: 1,
    source: [{ name: '钢锭', amount: 2 }],
    raw: false,
  },
  {
    name: '钢板',
    time: 12,
    output: 2,
    source: [{ name: '钢锭', amount: 3 }],
    raw: false,
  },
  {
    name: '钢筋混凝土',
    time: 15,
    output: 1,
    source: [{ name: '钢板', amount: 2 }, { name: '石材', amount: 5 }],
    raw: false,
  },
  {
    name: '电枢',
    time: 15,
    output: 1,
    source: [{ name: '铁棒', amount: 4 }, { name: '铜线', amount: 20 }],
    raw: false,
  },
  {
    name: '集电环',
    time: 15,
    output: 1,
    source: [{ name: '铜板', amount: 4 }, { name: '螺丝', amount: 25 }],
    raw: false,
  },
  {
    name: '燃料碳棒',
    time: 3,
    output: 1,
    source: [{ name: '煤矿石', amount: 1 }, { name: '木纤维', amount: 1 }],
    raw: false,
  },
  {
    name: '强力石砖',
    time: 15,
    output: 2,
    source: [{ name: '钢筋混凝土', amount: 1 }],
    raw: false,
  },
  {
    name: '精致皮革',
    time: 10,
    output: 1,
    source: [{ name: '兽皮', amount: 1 }, { name: '布', amount: 2 }],
    raw: false,
  },
  {
    name: '精致丝线',
    time: 10,
    output: 2,
    source: [{ name: '蛛丝', amount: 1 }, { name: '线', amount: 4 }],
    raw: false,
  },
  {
    name: '红色晶能',
    time: 6,
    output: 1,
    source: [{ name: '铁锭', amount: 3 }, { name: '铜锭', amount: 3 }],
    raw: false,
  },
  {
    name: '绿色晶能',
    time: 10,
    output: 1,
    source: [{ name: '布', amount: 3 }, { name: '初级工具', amount: 2 }],
    raw: false,
  },
  {
    name: '蓝色晶能',
    time: 12,
    output: 1,
    source: [{ name: '铁质核心', amount: 1 }, { name: '钢管', amount: 3 }],
    raw: false,
  },
  {
    name: '紫色晶能',
    time: 15,
    output: 1,
    source: [{ name: '控制器', amount: 1 }, { name: '电动机', amount: 1 }],
    raw: false,
  },
  {
    name: '芯片',
    time: 30,
    output: 1,
    source: [{ name: '提纯硅', amount: 10 }, { name: '铜板', amount: 15 }],
    raw: false,
  },
  {
    name: '控制器',
    time: 30,
    output: 1,
    source: [{ name: '芯片', amount: 1 }, { name: '钢制核心', amount: 1 }],
    raw: false,
  },
  {
    name: '电动机',
    time: 30,
    output: 2,
    source: [{ name: '电枢', amount: 5 }, { name: '集电环', amount: 5 }],
    raw: false,
  },
  {
    name: '高级工具',
    time: 20,
    output: 1,
    source: [{ name: '工业结构体', amount: 1 }, { name: '控制器', amount: 1 }, { name: '电动机', amount: 1 }],
    raw: false,
  },
  {
    name: '帐篷',
    time: 1,
    output: 1,
    source: [{ name: '布', amount: 10 }, { name: '木棒', amount: 8 }, { name: '加固铁板', amount: 1 }],
    raw: false,
  },
  {
    name: '天机石',
    time: 12,
    output: 1,
    source: [{ name: '提纯硅', amount: 5 }, { name: '铁质工具', amount: 2 }, { name: '铁质核心', amount: 10 }],
    raw: false,
  },
  {
    name: '防御磁盾',
    time: 1,
    output: 1,
    source: [{ name: '工业结构体', amount: 1 }, { name: '提纯硅', amount: 6 }],
    raw: false,
  },
  {
    name: 'C级能量块',
    time: 20,
    output: 1,
    source: [{ name: '铜板', amount: 3 }, { name: '木质框架', amount: 1 }],
    raw: false,
  },
  {
    name: 'B级能量块',
    time: 30,
    output: 1,
    source: [{ name: '钢管', amount: 4 }, { name: '提纯硅', amount: 10 }],
    raw: false,
  },
  {
    name: '工业结构体',
    time: 30,
    output: 2,
    source: [{ name: '铁质框架', amount: 3 }, { name: '钢管', amount: 5 }, { name: '强力石砖', amount: 5 }],
    raw: false,
  },
  {
    name: '塑料',
    time: 5,
    output: 1,
    source: [{ name: '桶装石油', amount: 3 }, { name: '煤矿石', amount: 2 }],
    raw: false,
  },
  {
    name: '橡胶',
    time: 5,
    output: 1,
    source: [{ name: '桶装石油', amount: 3 }, { name: '粮食', amount: 2 }],
    raw: false,
  },
  {
    name: '电路板',
    time: 30,
    output: 1,
    source: [{ name: '橡胶', amount: 5 }, { name: '铜板', amount: 20 }, { name: '工业结构体', amount: 2 }],
    raw: false,
  },
  {
    name: '大型计算机',
    time: 30,
    output: 1,
    source: [{ name: '电路板', amount: 1 }, { name: '芯片', amount: 5 }, { name: '控制器', amount: 5 }],
    raw: false,
  },
  {
    name: '燃油能量块',
    time: 10,
    output: 1,
    source: [{ name: '燃料碳棒', amount: 2 }, { name: '桶装石油', amount: 2 }],
    raw: false,
  },
  {
    name: '高性能地板',
    time: 10,
    output: 1,
    source: [{ name: '橡胶', amount: 3 }, { name: '塑料', amount: 3 }, { name: '强力石砖', amount: 4 }],
    raw: false,
  },
  {
    name: '抗生素',
    time: 1,
    output: 1,
    source: [{ name: '酒', amount: 5 }, { name: '油', amount: 5 }],
    raw: false,
  },
  {
    name: '香皂',
    time: 6,
    output: 1,
    source: [{ name: '油', amount: 2 }, { name: '酒精', amount: 2 }],
    raw: false,
  },
  {
    name: '铜镜',
    time: 6,
    output: 1,
    source: [{ name: '木质框架', amount: 1 }, { name: '铜板', amount: 3 }],
    raw: false,
  },
  {
    name: '油纸伞',
    time: 6,
    output: 1,
    source: [{ name: '木棒', amount: 2 }, { name: '油纸', amount: 3 }],
    raw: false,
  },
  {
    name: '医药箱',
    time: 12,
    output: 1,
    source: [{ name: '布', amount: 2 }, { name: '酒精', amount: 2 }, { name: '铁质框架', amount: 1 }],
    raw: false,
  },
  {
    name: '手表',
    time: 15,
    output: 1,
    source: [{ name: '玻璃', amount: 5 }, { name: '芯片', amount: 2 }, { name: '电路板', amount: 1 }],
    raw: false,
  },
  {
    name: '建造胶囊',
    time: 15,
    output: 3,
    source: [{ name: '木质框架', amount: 1 }, { name: '钢筋混凝土', amount: 1 }],
    raw: false,
  },
  {
    name: '烤箱',
    time: 20,
    output: 1,
    source: [{ name: '工业结构体', amount: 1 }, { name: '高级工具', amount: 1 }, { name: '大型计算机', amount: 1 }],
    raw: false,
  },
]