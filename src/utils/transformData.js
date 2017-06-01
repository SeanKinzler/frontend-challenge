//feel free to use lodash; it provides alot of type methods that are native to other languages
import {forEach} from 'lodash';

//transform data if needed here
const transformData = (data) => {
  let toRet = {}
  forEach(data, (order) => {
    forEach(order.products, (item) => {
      if (toRet[item.product_id] === undefined) {
        toRet[item.product_id] = {};
        toRet[item.product_id].count = 1;
        toRet[item.product_id].name = item.name;
        let tempRev = calcRevenue(item);
        toRet[item.product_id].revenue = tempRev;
      } else {
        toRet[item.product_id].count = toRet[item.product_id].count + 1;
        let tempRev = calcRevenue(item);
        toRet[item.product_id].revenue = toRet[item.product_id].revenue + tempRev;
      }
    })
  })
  let toRetArr = [];
  forEach(toRet, (val) => {
    toRetArr.push(val);
  })
  toRetArr.sort((a, b) => {
    return b.revenue - a.revenue
  })
  return toRetArr;
};

const calcRevenue = (item) => {
  let tempRev = item.order_count * item.vendor_price.value;
  for (let i = 1; i <= item.vendor_price.scale; i++) {
    tempRev = tempRev / 10;
  }

  return Math.round(tempRev * 100)/100;
}

export default transformData