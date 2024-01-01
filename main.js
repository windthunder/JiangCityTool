// 江城產量計算機
// 先定義各種產品的資料結構
// [
//   {
//   name: '產品名稱',
//   time: '製造時間',
//   output: '產量',
//   source: [{ name: '原料名稱', amount: '原料數量' }, ...],
//   raw: 是否為基礎原料(boolean)
//   },
//  ...
// ]

// 定義 一日時間為960秒 所以如果有任何階段需時超過則需要兩座建築
// 輸入 目標產品名稱 與 目標產量
// 輸出 所需建築數量與所需原料數量 以樹狀方式呈現
// EX: 輸入 螺丝 10
// 輸出
// 需時 8秒
// 建造： 螺丝廠1 <- 铁棒廠1 <- 铁锭廠1
// 材料： 鐵棒 4 <- 铁锭8 <- 铁矿石 16

import $ from 'jquery';
import data from './data.js'
import * as Plot from "@observablehq/plot";
import './main.css';

// 一天只有960秒
const dayLong = 960;
const graph = document.getElementById('graph');

function getProductInfo(product) {
  return data.find((item) => item.name === product);
}

// 計算處理
function calc(product, amount) {
  // 輸出結果
  return traverse({name: product, amount});
}

// 遞迴本體
function traverse({name, amount}) {
  let target = getProductInfo(name);
  if(target.raw) {
    return {name: `${name}${amount}個`};
  }
  // 計算需要幾輪生產
  let round = Math.ceil(amount / target.output);
  // 計算總需時
  let time = round * target.time;
  // 計算工廠數量
  let factory = Math.ceil(time / dayLong);
  // 將結果存入output
  let self = {name: `${name}${amount}個(${factory})`};

  // 處理原料
  self.children = target.source.map((item) => {
    // 計算原料數量
    let sourceAmount = item.amount * round;
    return traverse({name: item.name, amount: sourceAmount});
  });

  return self;
}

// 將輸出轉換成plot需要的東西
// 遞迴的把output的name轉換成parent1/parent2/parent3/.../name
let output2 = [];

function traverse2({name, children}, parent = null) {
  let self = `${parent ? parent + '/' : ''}${name}`;
  output2.push(self);
  children && children.forEach((item) => {
    traverse2(item, self);
  });
}

// 產品名稱
data.filter((item) => !item.raw).forEach((item) => {
  $('#product').append(`<option value="${item.name}">${item.name}</option>`);
});

// 計算
$('#calc').on('click', () => {
  // graph && graph.destroy();
  let product = $('#product').val();
  let amount = parseInt($('#amount').val());
  // check amount is number
  if(isNaN(amount)) {
    alert('請輸入數字');
    return;
  }

  // 計算各個中間產品的數量 直到raw: true
  let output = calc(product, amount);
  console.log(output);

  output2 = [];
  traverse2(output);

  let tree = Plot.plot({
    axis: null,
    marginTop: 100,
    marginBottom: 100,
    marginRight: 200,
    marginLeft: 200,
    width: 1000,
    marks: [
      Plot.cluster(output2, {
        fontSize: 16,
        stroke: '#666',
        strokeWidth: 2,
        strokeOpacity: 1,
        curve: "step-before",
        markerStart: false,
        markerEnd: 'arrow',
        markerMid: false,
      })
    ]
  })

  graph.innerHTML = '';
  graph.appendChild(tree);
});

$('#max').on('click', () => {
  let d = getProductInfo($('#product').val());
  $('#amount').val(Math.floor(dayLong / d.time) * d.output);
});


