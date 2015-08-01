function Scanner(itemA) {
  this.barcode = getBarcode(itemA);
  this.count   = getCount(itemA);
}

function getBarcode(itemA) {
  var barcode=itemA.split('-');
  return barcode[0];
}

function getCount(itemA) {
  var count=itemA.split('-');
  if(!isNaN(count[1])) {
    return count[1];
  }
  else {
    return 1;
  }
}
