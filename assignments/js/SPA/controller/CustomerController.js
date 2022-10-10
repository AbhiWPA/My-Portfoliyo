/*
* @Created by: Abhishek Ashinsa
* @Date: 10/10/2022
* @Project: My-Portfolio
* */

var customers = [];

$(window).on('keydown', function (event) {
    if (event.key == 'Tab') {
        event.preventDefault();
    }
});


$("#txtCustomerID").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#txtCustomerName").focus();
    }
});

$("#txtCustomerName").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#txtCustomerAddress").focus();
    }
});

$("#txtCustomerAddress").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#txtCustomerContact").focus();
    }
});

$("#txtCustomerContact").on('keydown', function (event) {
    if (event.key == 'Enter') {
        $("#btnSaveCustomer").click();
    }
});