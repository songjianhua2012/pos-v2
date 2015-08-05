
function Pos() {
  this.total = 0;
  this.save = 0;
  this.giveProducts = [];
}
Pos.prototype.print=function(cart) {
  var subCart = cart.products;

  var str = '***<没钱赚商店>收据***\n';
  str += '打印时间：' + date.getTime() + '\n';
  str += '----------------------\n';

  for(var i=0; i<subCart.length; i++) {
    subCart[i].getInfo();
    str += '名称：' + subCart[i].name + '，数量：' +
    subCart[i].count + subCart[i].unit + '，单价：' +
     subCart[i].price.toFixed(2) + '(元)，小计：'+
     subCart[i].getSubtotal()+'\n';
  }
  str += '----------------------\n';
  str += '挥泪赠送商品：\n';
  str += '----------------------\n';
  str+='总计：'+(cart.getSubtotalPrice()).toFixed(2)+'\n';
  str+='节省：'+(cart.getSaving()).toFixed(2)+'\n';
  str += '**********************';
  console.log(str);
};
