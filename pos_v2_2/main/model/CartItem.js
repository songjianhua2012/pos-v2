function CartItem() {
  this.products = [];
}

CartItem.prototype.getInfo = function(subCartItem) {
  var allItems = loadAllItems();
  var that = this;
  for(var i = 0; i < allItems.length; i++) {
    for (var j= 0; j < subCartItem.item.length;j++) {
      if(subCartItem.item[j].barcode === allItems[i].barcode) {
          that.products.push({name:allItems[i].name,
            count:subCartItem.item[j].count,
            unit:allItems[i].unit,
            price:allItems[i].price});
      }
    }
  }
};
/*CartItem.prototype.getRealPayCount = function() {
  var allPromotions = loadPromotions()[0].barcodes;
    for (var x = 0; x < allPromotions.length; x++) {
      if ((allPromotions[x] == this.barcode) && (this.shouldPayCount >= 3)) {
        this.realPayCount = this.shouldPayCount - Math.floor(this.shouldPayCount / 3);
      }
    }
};

CartItem.prototype.getshouldPayCount = function() {
  var allItems = loadAllItems();
  var that = this;
  for(var y = 0; y < allItems.length; y++) {
    if(comp(that.barcode,allItems[y].barcode)) {
      that.shouldPayCount += that.barcode.length == 10 ? 1 : parseInt(that.barcode[that.barcode.length-1]);
      return;
    }
  }
};

function comp(itemA,itemB){
  for(var m = 0; m < itemB.length; m++){
    if(itemA[m] !== itemB[m]){
      return;
    }
  }
  return true;
}
*/
