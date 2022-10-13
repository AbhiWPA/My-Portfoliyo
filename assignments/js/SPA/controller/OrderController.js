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
let subTot;
function genarateTotal() {
    var orQty = $("#qtyOrder").val();
    var pr = $("#unitPrice").val();

    subTot = orQty * pr;

    alert("total ::" + subTot)

    subTotArr.push(subTot);

}

function loadCartTable() {
    $("#tblOrder").empty();
    for(var cartObj of cartArr){
        console.log(cartObj);

        var row = `<tr class='bg-dark text-light'><td>${cartObj.code}</td><td>${cartObj.descr}</td><td>${cartObj.unitPrice}</td><td>${cartObj.qty}</td><td>${cartObj.tot}</td></tr>`;
        $("#tblOrder").append(row);
    }
}

let cartArr = [];
var orQty2;
var qtyH2;
$("#btnAddToCart").click(function () {
    genarateTotal();
    var cartObj = {
        code : iCode,
        descr : $("#descriptionOrder").val(),
        unitPrice : $("#unitPrice").val(),
        qty : $("#qtyOrder").val(),
        tot : subTot
    }

    cartArr.push(cartObj);

    var orQty = $("#orderQty").val();
    var qtyH = $("#qtyOnH").val();

    orQty2 = parseInt(orQty);
    qtyH2 = parseInt(qtyH);

        loadCartTable();
        calculateTotal();
        updateQty();

        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Something went wrong! Please Check Quantity',

})

var orderTotal;
function calculateTotal() {
    let total =0;
    for (var i=0; i<subTotArr.length; i++ ){
        total += subTotArr[i];
    }
    $("#lblTotal").text(total)
    orderTotal = total;
}

function makeDiscount() {
    var discount = $("#discount").val();

    var newTotal = orderTotal - discount;
    $("#lblSubTotal").text(newTotal);
}

$("#discount").on('keydown', function (event) {
    if (event.key == "Enter") {
        makeDiscount()
    }
})

let orderDetailsArr = [];
$("#btnPlaceOrder").click(function () {
    var orderId = genarateOrderId();
    var date = catchCurrentDate();

    let orderDetails = {
        orID: orderId,
        custName : $("#orderInputName").val(),
        amount : orderTotal,
        date : date
    }

    orderDetailsArr.push(orderDetails);
    console.log(orderDetailsArr);

    $("#tblOrder").empty();
    $("#descriptionOrder").val("")
    $("#unitPrice").val("")
    $("#qtyOrder").val("")
    $("#qtyOnH").val("")
    $("#orderInputName").val("");
    $("#orderInputContact").val("");
    $("#orderInputAddress2").val("");
    orderTotal=0;
    cartArr.length = 0;
    subTotArr.length = 0;

})

function updateQty() {
    var oldQty = $("#qtyOnH").val();
    var qty = $("#qtyOrder").val();

    alert(oldQty)
    alert(qty)

    var newQty = oldQty - qty;
    alert(newQty)

    $("#qtyOnH").val(newQty);


    let item = searchItem(iCode);
    item.qty = newQty;
    loadAllItems();
    loadAllItemIds();
}

function genarateOrderId() {
    var y = 0;
    var orId = 'Or-00';

    if (orderDetailsArr.length == 0) {
        y=y+1;
        return orId+y;
    } else {
       var detail = orderDetailsArr[orderDetailsArr.length-1];

       var id = detail.orID;
       var z = id.substr(4,);
       var intZ = parseInt(z);
       intZ = intZ +1;
       var newID = 'Or-00'+intZ;
       return newID;
    }
}

function catchCurrentDate() {
    const date = new Date().toLocaleDateString("de-DE");
    console.log(date);
    return date;
}

function loadOrderDetails() {
    $("#tblOrderDetails").empty();
    for(var details of orderDetailsArr){

        var row = `<tr class='bg-dark text-light'><td>${details.orID}</td><td>${details.custName}</td><td>${details.amount}</td><td>${details.date}</td></tr>`;
        $("#tblOrderDetails").append(row);
    }
}

$("#detailsBtn").click(function () {
    loadOrderDetails();
})

$("#btnClearOrderDetailTbl").click(function () {
    $("#tblOrderDetails").empty();
    orderDetailsArr.length = 0;
})