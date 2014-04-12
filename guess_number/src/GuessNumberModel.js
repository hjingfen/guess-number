function Number(){
    this.number = Math.floor(Math.random()*10000);
}
Number.prototype.create = function(){
    var numbers = JSON.parse(localStorage.numbers);
    this.id = JSON.stringify(numbers.length);
    numbers.push(this);
    localStorage.setItem('numbers',JSON.stringify(numbers));
    localStorage.setItem('current_number',this.number);
}