
// js for shopping portal

$(function (){

    var qty = [0,0,0,0,0,0,0,0,0,0,0,0];

    $('.btn-outline-primary').click( function(ev){
        let id = $(ev.target).parent().attr('data-id');
        // this will aceess the data-id of parent div of button Add to cart
        console.log(id);
        add_and_save(id);
    })

});

// to store items in local storage
function save_item() {
    localStorage.setItem('Qty', JSON.stringify(qty))
}

// to access the item form the local storage
function retrieve_item() {
    let qty_in_store = localStorage.getItem('Qty');
    if(qty_in_store){
        qty = JSON.parse(qty_in_store);
    }
}

// to increase the quantity of particular data-id and save in the local storage
function add_and_save(id) {
    retrieve_item();
   // console.log(qty);
    qty[id]++;
    //console.log(qty);
    save_item();
}