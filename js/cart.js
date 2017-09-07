
// js for shopping cart

$(function(){
    total;
    item_price = [0,0,0,0,0,0,0,0,0,0,0,0]
    cart_list = $("#product_list");

    price = [100,200,300,400,500,600,700,800,900,1000,1100,1200];
    products = ["Product 1","Product 2","Product 3","Product 4","Product 5","Product 6","Product 7","Product 8","Product 9","Product 10","Product 11","Product 12"];

    retrieve_item();


})

function cal_amt(){

    for(let i in item_price){
        item_price[i] = price[i]*qty[i];

    }
}

function total_amt(){

    for(let i in item_price){
        total += item_price[i]
    }
}