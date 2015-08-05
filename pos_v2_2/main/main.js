function printReceipt(inputs) {
  var subScanner = new Scanner();
  var subCart = new Cart();

for(var i=0; i<inputs.length; ++i) {
  subScanner.addItem(inputs[i]);
  subCart.addProduct(subScanner.barcode,subScanner.count);
}

  var subPos = new Pos();
//CartItem.loadAllItems(subfind.loadAllItems());
  subPos.print(subCart);
}
