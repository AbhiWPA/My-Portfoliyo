/*
* @Created by: Abhishek Ashinsa
* @Date: 10/10/2022
* @Project: My-Portfolio
* */

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



var customers = [];
$("#btnSaveCustomer").click(function () {

    let customerID = $("#txtCustomerID").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerContact = $("#txtCustomerContact").val();

    var customer = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        contact: customerContact
    };

    // console.log(customer.id+ " "+ customer.name+ " " + customer.address+ " " + customer.contact)
    customers.push(customer);
    console.log(customers);
    loadAllCustomers();
    bindRowDetails();
});

function bindRowDetails() {
    $('#tblCustomer>tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();
        console.log(id+" "+name+" "+address+" "+contact);

        $("#inputState").val(id);
        $("#updateName").val(name);
        $("#updateAddress").val(address);
        $("#updateContact").val(contact);
    });
}

function loadAllCustomers(){
    $("#tblCustomer").empty();
    for(var customer of customers){
        console.log(customer);

        var row= "<tr class='bg-dark text-light'><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.contact+"</td></tr>";

        $("#tblCustomer").append(row);
    }
}


$("#txtSearch").on('keyup', function (event) {
    if (event.code == "Enter") {
        var id = $("#txtSearch").val();

        for(var customer of customers){
            if (id === customer.id || id === customer.name){
                $("#txtSearchName").val(customer.name);
                $("#txtSearchAddress").val(customer.address);
                $("#txtSearchContact").val(customer.contact);
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

$("#btnSearch").click(function () {
    var id = $("#txtSearch").val();

    for(var customer of customers){
        if (id === customer.id || id === customer.name){
            $("#txtSearchName").val(customer.name);
            $("#txtSearchAddress").val(customer.address);
            $("#txtSearchContact").val(customer.contact);
        } else {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'ID or Name Not at the database, Try again!',
            // });
        }
    }

});

function loadAllCustomerIds() {

}