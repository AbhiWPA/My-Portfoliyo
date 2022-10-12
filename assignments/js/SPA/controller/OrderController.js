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
    $("#cmbCustomerID").append(`<option></option>`);
    for (let cus of customers){
        $("#cmbCustomerID").append(`<option>${cus.id}</option>`);
    }
}

function loadAllItemIds() {
    $("#itemCodeOrder").empty();
    $("#itemCodeOrder").append(`<option></option>`);
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
let iCode;
$("#itemCodeOrder").on('change', function () {
    iCode = $(this).val();
    fillItemsDetails(iCode)
})

function fillItemsDetails(itemCode) {
    let item = searchItem(itemCode);
    $("#descriptionOrder").val(item.description);
    $("#unitPrice").val(item.price);
    $("#qtyOnH").val(item.qty);
}

$("#btnCancelCustomer").click(function () {
    $("#orderInputName").val("");
    $("#orderInputContact").val("");
    $("#orderInputAddress2").val("");
})

$("#btnCancelitem").click(function () {
    $("#descriptionOrder").val("");
    $("#unitPrice").val("");
    $("#qtyOnH").val("");
})

$("#btnAddNewCustomer").click(function () {
    $("#DashboardContent").css('display','none');
    $("#customerContent").css('display', 'block');
    $("#ItemsContent").css('display','none');
    $("#OrderContent").css('display','none');
})

let subTotArr = [];
function genarateTotal() {
    var orQty = $("#orderQty").val();
    var pr = $("#unitPrice").val();

    var subTot = orQty * pr;

    subTotArr.push(subTot);
    return subTot;

}

let cartArr = [];

$("#btnAddToCart").click(function () {
    var cartObj = {
        code : iCode,
        descr : $("#descriptionOrder").val(),
        unitPrice : $("#unitPrice").val(),
        qty : $("#orderQty").val(),
        tot : genarateTotal()
    }

    cartArr.push(cartObj);

    loadCartTable();
})

function loadCartTable() {
    $("#tblOrder").empty();
    for(var cartObj of cartArr){
        console.log(cartObj);

        var tblRow = `<tr class="bg-dark text-light"><td>${cartObj.code}</td><td>${cartObj.descr}</td><td>${cartObj.unitPrice}</td><td>${cartObj.qty}</td><td>${cartObj.tot}</td></tr>`;
        $("#tblOrder").append(tblRow);
    }
}
