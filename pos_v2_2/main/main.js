//TODO: Please write code in this file.
function printReceipt(inputs) {
  var cart = [];
  var subCart = new Cart();
  for(var i = 0; i < inputs.length; i++) {
    var subScanner = new Scanner(inputs[i]);
    //cart.push(subScanner);
    subCart.addItem(subScanner);
    //cart.push(subCart);
    //console.log(cart[i]);
  }

  var subCartItem = new CartItem();
  subCartItem.getInfo(subCart);
  var receipt = new Receipt();
  receipt.print(subCartItem.products);
}
