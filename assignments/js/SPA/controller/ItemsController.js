/*
* @Created by: Abhishek Ashinsa
* @Date: 08/10/2022
* @Project: My-Portfolio
* */

$(window).on('keydown', function (event) {
    if (event.key == 'Tab') {
        event.preventDefault();
    }
});


$("#itemCode").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#Description").focus();
    }
});

$("#Description").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#price").focus();
    }
});

$("#price").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#qty").focus();
    }
});

$("#qty").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#btnSaveItem").click();
    }
});

var items = [];
$("#btnSaveItem").click(function () {

    let itemCode = $("#itemCode").val();
    let description = $("#Description").val();
    let itemPrice = $("#price").val();
    let itemQty = $("#qty").val();

    var item = {
        code: itemCode,
        description: description,
        price: itemPrice,
        qty: itemQty
    };

    items.push(item);
    console.log(items);
    loadAllItems();
    bindRowDetails();
});

function loadAllItems(){
    $("#tblItem").empty();
    for(var item of items){
        console.log(item);

        var row = `<tr class='bg-dark text-light'><td>${item.code}</td><td>${item.description}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;
        $("#tblItem").append(row);
    }
}