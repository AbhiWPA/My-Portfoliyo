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

function bindRowDetails() {
    $('#tblItem>tr').click(function () {
        let code = $(this).children(":eq(0)").text();
        let desc = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        $("#inputCode").val(code);
        $("#inputDescription").val(desc);
        $("#inputPrice").val(price);
        $("#inputQty").val(qty);
    });
}

$("#txtItemSearch").on('keyup', function (event) {
    if (event.code == "Enter") {
        var id = $("#txtItemSearch").val();

        for(var item of items){
            if (id === item.code){
                $("#inputCode").val(item.code);
                $("#inputDescription").val(item.description);
                $("#inputPrice").val(item.price);
                $("#inputQty").val(item.qty);
            } else {
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: 'ID or Name Not at the database, Try again!',
                // });
            }
        }
    }
});

$("#btnItemSearch").click(function () {
    var id = $("#txtItemSearch").val();

    for(var item of items){
        if (id === item.code){
            $("#inputCode").val(item.code);
            $("#inputDescription").val(item.description);
            $("#inputPrice").val(item.price);
            $("#inputQty").val(item.qty);
        } else {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'ID or Name Not at the database, Try again!',
            // });
        }
    }

});