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

    })
})