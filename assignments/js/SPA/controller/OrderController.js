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

function loadAllCustomerIds() {
    $("#cmbCustomerID").empty();
    for (let cus of customers){
        $("#cmbCustomerID").append(`<option>${cus.id}</option>`);
    }
}

function loadAllItemIds() {
    $("#itemCodeOrder").empty();
    for (let item of items){
        $("#itemCodeOrder").append(`<option>${item.code}</option>`);
    }
}

$("#cmbCustomerID").click(function () {
    loadAllCustomerIds();
});

$("#itemCodeOrder").click(function () {
    loadAllItemIds();
})

$("#cmbCustomerID").on('change', function () {
    let cId = $(this).val();
    fillCustomerTextField(cId);
})

function fillCustomerTextField(cId) {
    let customer = searchCustomer(cId);
    $("#orderInputName").val(customer.name);
    $("#orderInputContact").val(customer.contact);
    $("#orderInputAddress2").val(customer.address);
}

$("#itemCodeOrder").click(function () {
    let iCode = $(this).val();
    fillItemsDetails(iCode);
})

function fillItemsDetails(itemCode) {
    let item = searchItem(itemCode);
    console.log(item.code);
    console.log(item.description);
    console.log(item.price);
    console.log(item.qty);
    $("#descriptionOrder").val(item.description);
    $("#unitPrice").val(item.price);
    $("#qtyOnH").val(item.qty);
}

// function searchItemCode(iCode) {
//     for (item of items)
// }