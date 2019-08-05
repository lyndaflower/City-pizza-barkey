function Order(crust, size, topping, number){
    this.crust = crust;
    this.size = size;
    this.topping = topping;
    this.number = number;
}
Order.prototype.myOrder = function(){
    return "thanks, you have ordered "+ this.crust + this.topping + this.number ;
}