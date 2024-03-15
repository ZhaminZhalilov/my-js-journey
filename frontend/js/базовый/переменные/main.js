function century(year) {
    if(year % 100>=1){
    return Math.floor(year/100)+1;
  }}
console.log(century(2742))
