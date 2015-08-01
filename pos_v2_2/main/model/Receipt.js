function Receipt() {
  this.totalMoney = 0;
  this.saveMoney = 0;
}

Receipt.prototype.print = function(allProducts) {
  var str = '***<没钱赚商店>收据***\n';
  str += '打印时间：' + getTime() + '\n';
  str += '----------------------\n';
  for(var i = 0; i < allProducts.length; i++) {
    str += '名称：'+allProducts[i].name+
            '，数量：'+allProducts[i].count+allProducts[i].unit+
            '，单价：'+(allProducts[i].price).toFixed(2)+'(元)'+
            '，小计：'+(xiaoji(allProducts[i].barcode,allProducts[i].count,allProducts[i].price)).toFixed(2)+'(元)'+'\n';
    this.totalMoney += (xiaoji(allProducts[i].barcode,allProducts[i].count,allProducts[i].price));
  }
  //console.log(this.totalMoney);
  str += '----------------------\n';
  str += '挥泪赠送商品：\n';

  var promotionProducts = loadPromotions();
  for(var i = 0; i < promotionProducts.length; i++) {
    for(var j = 0; j < allProducts.length; j++) {
      if(allProducts[j].barcode === promotionProducts[i].barcode && allProducts[j].count >= 3) {
      str += '名称：'+allProducts[j].name+
              '，数量：'+Math.floor(allProducts[j].count/3)+allProducts[j].unit+'\n';
      this.saveMoney += (Math.floor(allProducts[j].count/3) * allProducts[j].price);
      }
    }
  }
  str += '----------------------\n';
  str += '总计：'+(this.totalMoney).toFixed(2)+'(元)'+'\n'+ '节省：'+(this.saveMoney).toFixed(2)+'(元)'+'\n';
  str +='**********************';

  console.log(str);
};

function xiaoji(barcode,count,price) {
  var promotionProducts = loadPromotions();
  for(var i = 0; i < promotionProducts.length; i++) {
      if(barcode === promotionProducts[i].barcode && count >= 3) {
        return ((count - Math.floor(count/3))*price);
      }
    }
  return (count * price);
}



function getTime() {
  var date = new Date();
  return (date.getFullYear() + '年' +
    toDouble(date.getMonth() + 1) + '月' +
    toDouble(date.getDate()) + '日 ' +
    toDouble(date.getHours()) + ':' +
    toDouble(date.getMinutes()) + ':' +
    toDouble(date.getSeconds()));
}
function toDouble(num) {
      return num < 10 ? ('0' + num) : ('' + num);
}
