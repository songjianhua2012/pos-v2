function date() {}

date.getTime=function () {
  var date = new Date();
  return (date.getFullYear() + '年' +
   toDouble(date.getMonth() + 1) + '月' +
    toDouble(date.getDate()) + '日 ' +
    toDouble(date.getHours()) + ':' + toDouble(date.getMinutes()) +
     ':' + toDouble(date.getSeconds()));
};

function toDouble(num) {
  return num < 10 ? ('0' + num) : ('' + num);
}
