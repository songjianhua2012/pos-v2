function Cart() {
  this.item = [];

  //this.totalCount = getTotalCount();
  //this.realCount = 0.00;
}

Cart.prototype.addItem=function(itemA) {
  for(var i = 0; i < this.item.length; i++) {
      if(itemA.barcode === this.item[i].barcode) {
        this.item[i].count += itemA.count;

        return;
      }
  }
  this.item.push(itemA);
};

/*function getTotalCount(item) {

}*/

/*Cart.prototype.getTotalMoney = function() {
  this.totalMoney += this.cartitem.realPayCount * this.cartitem.price;
};

Cart.prototype.getSaveMoney = function() {
  this.saveMoney += (this.cartitem.shouldPayCount - this.cartitem.realPayCount) * this.cartitem.price;
};
*/
/*Cart.prototype.getRealCount = function() {
  //this.realCount += (this.Item).barcode.length > 10 ? 1 : parseInt(Item);
  var allItems = loadAllItems();

  for(var y = 0; y < allItems.length; y++) {
    if(comp(Item,allItems[y].barcode)) {
      realCount += Item.barcode.length == 10 ? 1 : parseInt(Item.barcode[Item.barcode.length-1]);
      return;
    }
  }
};

Cart.prototype.getPayCount = function() {
  var allPromotions = loadPromotions()[0].barcodes;
    for (var x = 0; x < allPromotions.length; x++) {
      if ((allPromotions[x] == this.Item.barcode) && (this.payCount >= 3)) {
        this.payCount -= Math.floor(this.payCount / 3);
      }
    }
};

function comp(itemA,itemB) {
  for(var m = 0; m < itemB.length; m++) {
   if(itemA.barcode[m] !== itemB[m]) {
     return;
   }
 }
 return true;
}*/
