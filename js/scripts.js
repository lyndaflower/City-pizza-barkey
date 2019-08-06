function Order(crust, size, topping){
    this.crust = crust;
    this.size = size;
    this.topping = topping;
}
Order.prototype.myOrder = function(){
    return "thanks, you have ordered "+ this.crust + " and " +this.topping ;
}
$(document).ready(function(){
    $("#send").click(function(event){
        event.preventDafault();
        var crust = $("select#deep").val();
        var size = $("select#lar").val();
        var topping = $("select#onio").val();
if((crust == 'pepperoni') && (size == 'large')){
       
}
else if((crust == 'pepperoni') && (size == 'small')){

}
else if((crust == 'pepperoni') && (size == 'medium')) {

}
if((crust == 'mushrooms') && (size == 'large')){
    
}
else if((crust == 'mushrooms') && (size == 'small')) {

}
else if((crust == 'mushrooms') && (size == 'medium')) {

}
if((crust == 'onions') && (size == 'large')){

}
else if((crust == 'onion') && (size == 'large'))
    })
})