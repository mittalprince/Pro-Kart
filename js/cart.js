
// js for shopping cart

$(function(){
    total=0;
    item_price = [0,0,0,0,0,0,0,0,0,0,0,0]
    cart_list = $("#product_list");

    price = [100,200,300,400,500,600,700,800,900,1000,1100,1200];
    products = ["Product 1","Product 2","Product 3","Product 4","Product 5","Product 6","Product 7","Product 8","Product 9","Product 10","Product 11","Product 12"];

    retrieve_item();
    showcart();


})
// calculate the total price of each item
function cal_amt(){

    for(let i in item_price){
        item_price[i] = price[i]*qty[i];

    }
}

// calculate the total of prices of all items
function total_amt(){;
    for(let i in item_price){
        total += item_price[i]
    }
    console.log(total);
    return total;
}

//this function append the items to the HTML page
function showcart(){
    cart_list.empty();
    cal_amt();
    total_amt();

    for(i=0 ; i<12 ; i++){
        if(qty[i]){
            console.log("table will print")
            let trow = $(`<tr>`).attr('data-id',i)
            let col1 = $(`<td>`)
            let col2 = $(`<td>`)
            let col3 = $(`<td>`)
            let col4 = $(`<td>`)
            let col5 = $(`<td>`)
            trow.append(col1.append($(`<span class="col-1">${i+1}</span>`)));
            trow.append(col2.append($(`<span class="col-3">${products[i]}</span>`)));
            trow.append(col3.append($(`<span class="col-3">${price[i]}</span>`)));
            trow.append(col4.append($(`<i class="fa fa-minus-circle icn"></i>`)));
            trow.append(col4.append($(`<span class="col-3">${qty[i]}</span>`)));
            trow.append(col4.append($(`<i class="fa fa-plus-circle icn"></i>`)));
            trow.append(col5.append($(`<span class="col-2">${item_price[i]}</span>`)));
            cart_list.append(trow);
        }
    }

    let row2 = $(`<tr>`)
    let col6 = $(`<td colspan="4">`)
    let col7 = $(`<td colspan="2">`)
    row2.append(col6.append($(`<span>Total</span>`)));
    row2.append(col7.append($(`<span>${total}</span>`)));
    cart_list.append(row2)
}