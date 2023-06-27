import {cust} from "../db/db.js";
import {items} from "../db/db.js";
import {cart,orderDetails,orders} from "../db/db.js";
// import {orderDetails} from "./db.js";
import {OrderModel} from "../modle/order.js"
import {OrderDetails} from "../dto/OrderDetails.js"
import {Order} from "../dto/Order.js"
import {Item} from "../dto/Item.js"
import {Customer} from "../dto/Customer.js"
import {Regex} from "../controller/Regex.js"

document.getElementById("loader").style.display = "block";

document.getElementById("D-Bord").style.display = 'none';
document.getElementById("main").style.display = 'none';
document.getElementById("customer-form").style.display = 'none';
document.getElementById("Item-from").style.display = 'none';
document.getElementById("order-from").style.display = 'none';
document.getElementById("PlaceOrder").style.display = 'none';


document.getElementById("Home").addEventListener('click', function () {
    document.getElementById("D-Bord").style.display = 'block';
    document.getElementById("customer-form").style.display = 'none';
    document.getElementById("Item-from").style.display = 'none';
    document.getElementById("order-from").style.display = 'none';
    document.getElementById("PlaceOrder").style.display = 'none';
});
document.getElementById("Customer").addEventListener('click', function () {
    document.getElementById("D-Bord").style.display = 'none';
    document.getElementById("customer-form").style.display = 'block';
    document.getElementById("Item-from").style.display = 'none';
    document.getElementById("order-from").style.display = 'none';
    document.getElementById("PlaceOrder").style.display = 'none';
});
document.getElementById("Item").addEventListener('click', function () {
    document.getElementById("D-Bord").style.display = 'none';
    document.getElementById("customer-form").style.display = 'none';
    document.getElementById("Item-from").style.display = 'block';
    document.getElementById("order-from").style.display = 'none';
    document.getElementById("PlaceOrder").style.display = 'none';
});
document.getElementById("Orders").addEventListener('click', function () {
    document.getElementById("D-Bord").style.display = 'none';
    document.getElementById("customer-form").style.display = 'none';
    document.getElementById("Item-from").style.display = 'none';
    document.getElementById("order-from").style.display = 'block';
    document.getElementById("PlaceOrder").style.display = 'none';
});
document.getElementById("P-Order").addEventListener('click', function () {
    document.getElementById("D-Bord").style.display = 'none';
    document.getElementById("customer-form").style.display = 'none';
    document.getElementById("Item-from").style.display = 'none';
    document.getElementById("order-from").style.display = 'none';
    document.getElementById("PlaceOrder").style.display = 'block';
});

function setItemProperty() {
    $('#MyItemTable>tbody>tr').click(function () {

        let code=$(this).children().eq(0).text();
        let description=$(this).children().eq(1).text();
        let price=$(this).children().eq(2).text();
        let qty=$(this).children().eq(3).text();


        $("#code").val(code);
        $("#Description").val(description);
        $("#Price").val(price);
        $("#QTY").val(qty);


    });
}

$('#itemUpdate').click(function () {

});

function setPropety() {
    $('#myCustomerTable>tbody>tr').click(function () {

        let id=$(this).children().eq(1).text();
        let fastName=$(this).children().eq(1).text();
        let lastName=$(this).children().eq(2).text();
        let Address=$(this).children().eq(3).text();
        let Contact=$(this).children().eq(4).text();
        let mail=$(this).children().eq(5).text();

        $("#FName").val(fastName);
        $("#LName").val(lastName);
        $("#Address").val(Address);
        $("#Gmail").val(mail);
        $("#ContactNumber").val(Contact);

    })
}

function clearCustomerInput() {
    $('#FName').val("");
    $('#LName').val("");
    $('#Address').val("");
    $('#Gmail').val("");
    $('#ContactNumber').val("");
}

$('#NewCustRemov').click(function () {

    for (let i = 0; i <cust.length; i++) {
        if ($('#FName').val()==cust[i].getFistName()){
            cust.splice(cust.indexOf(cust[i]),1);
        }
    }
    $('#myCustomerTable>tbody>tr').remove();
    for (var customer of cust) {
        $('#myCustomerTable').append('<tr>' +
            '<td><b>0</td>' +
            '<td>'+customer.getFistName()+'</td>' +
            '<td>'+customer.getLastName()+'</td>' +
            '<td>'+customer.getAddress()+'</td>' +
            '<td>'+customer.getContact()+'</td>' +
            '<td>'+customer.getEmail()+'</td>' +
            '</tr>');
    }

    clearCustomerInput();
});

$('#NewCustUpdate').click(function () {

    for (let i = 0; i <cust.length; i++) {
        if ($('#FName').val()==cust[i].getFistName()){
            cust[i].setFistName($("#FName").val());
            cust[i].setLastName($("#LName").val());
            cust[i].setAddress($("#Address").val());
            cust[i].setEmail($("#Gmail").val());
            cust[i].setContact($("#ContactNumber").val());
        }
    }
    $('#myCustomerTable>tbody>tr').remove();
    for (var customer of cust) {
        $('#myCustomerTable').append('<tr>' +
            '<td><b>0</td>' +
            '<td>'+customer.getFistName()+'</td>' +
            '<td>'+customer.getLastName()+'</td>' +
            '<td>'+customer.getAddress()+'</td>' +
            '<td>'+customer.getContact()+'</td>' +
            '<td>'+customer.getEmail()+'</td>' +
            '</tr>');
    }

    clearCustomerInput();
    setPropety();


});

function customerCount() {
    $('#AllCustomer').text("+ "+cust.length);
}


function getNextId() {
    if (cust.length==0){
        return "C1";
    }else {
        let custElement = cust[cust.length-1];
        let customerId = custElement.getCustomerId();
        console.log(customerId)
        let splitText = customerId.split("C");
        console.log(splitText)
        let number = parseInt(splitText[1]);
        console.log(number)
        number++;
        console.log(number)
        return "C"+number;
    }
}

$('#NewCustAdd').click(function () {
    var customer=new Customer();
    customer.setCustomerId(getNextId());
    customer.setFistName($('#FName').val());
    customer.setLastName($('#LName').val());
    customer.setAddress($('#Address').val());
    customer.setEmail($('#Gmail').val());
    customer.setContact($('#ContactNumber').val());

    cust.push(customer);

    $('#myCustomerTable').append('<tr>' +
        '<td><b>'+customer.getCustomerId()+'</td>' +
        '<td>'+customer.getFistName()+'</td>' +
        '<td>'+customer.getLastName()+'</td>' +
        '<td>'+customer.getAddress()+'</td>' +
        '<td>'+customer.getContact()+'</td>' +
        '<td>'+customer.getEmail()+"@gmail.com"+'</td>' +
        '</tr>');
    console.log(cust)
    clearCustomerInput();
    customerCount();
    setPropety();

});

function clearItemInputs() {
    $('#code').val("");
    $('#Description').val("");
    $('#Price').val("");
    $('#QTY').val("");
}

$('#NewItem').click(function () {
    var item=new Item();
    item.setCode( $('#code').val());
    item.setDescription( $('#Description').val());
    item.setPrice( $('#Price').val());
    item.setQty(  $('#QTY').val());


    items.push(item);

    $('#MyItemTable').append('<tr>' +
        // '<td><b>0</td>' +
        '<td><b>'+item.getCode()+'</td>' +
        '<td>'+item.getDescription()+'</td>' +
        '<td>'+item.getPrice()+'</td>' +
        '<td>'+item.getQty()+'</td>' +
        '</tr>');

    clearItemInputs();

    setItemProperty();


});

$('#itemUpdate').click(function () {
    for (let i = 0; i <items.length; i++) {
        if ($('#code').val()==items[i].getCode()){
            items[i].setCode($("#code").val());
            items[i].setDescription($("#Description").val());
            items[i].setPrice($("#Price").val());
            items[i].setQty($("#QTY").val());

        }
    }
    $('#MyItemTable>tbody>tr').remove();
    for (var item of items) {
        $('#MyItemTable').append('<tr>' +
            '<td><b>'+item.getCode()+'</td>' +
            '<td>'+item.getDescription()+'</td>' +
            '<td>'+item.getPrice()+'</td>' +
            '<td>'+item.getQty()+'</td>' +
            '</tr>');
    }
    clearItemInputs();
    setItemProperty();
});

$('#itemRemove').click(function () {
    for (let i = 0; i <items.length; i++) {
        if ($('#code').val()==items[i].getCode()){
            items.splice(items.indexOf(items[i]),1);
        }
    }
    $('#MyItemTable>tbody>tr').remove();
    for (var item of items) {
        $('#MyItemTable').append('<tr>' +
            '<td><b>'+item.getCode()+'</td>' +
            '<td>'+item.getDescription()+'</td>' +
            '<td>'+item.getPrice()+'</td>' +
            '<td>'+item.getQty()+'</td>' +
            '</tr>');
    }

    clearItemInputs();
});

$('#customer_id').on("keyup",function () {
    let customerName = OrderModel.getCustomerName($('#customer_id').val());
    $('#customer_name').text(customerName);
});

$('#item_code').on("keyup",function () {
    let itemName = OrderModel.getItemName($('#item_code').val());
    $('#discription').text(itemName);
    let qty = OrderModel.getItemQTY($('#item_code').val());
    $('#item_qty').text(qty);
});

function setTotal() {
    let total=0;
    for (const price of cart) {
        total+=parseInt(price.getPrice());
    }
    console.log(total)
    $('#total').text(total);
}

$('#add_to_cart').on('click',function () {
    let orderDetails = new OrderDetails();
    orderDetails.setCode($('#item_code').val());
    orderDetails.setQty($('#order_qty').val());
    orderDetails.setDescription($('#discription').text());
    let price = OrderModel.getPrice($('#item_code').val());
    let number = parseInt($('#order_qty').val())*parseInt(price);
    orderDetails.setPrice(number);

    OrderModel.addToCart(orderDetails);
    // cart.push(orderDetails);

    $('#myCustomerOrderDetails').append('<tr>' +
        '<td><b>'+parseInt(cart.length)+'</td>' +
        '<td>'+orderDetails.getCode()+'</td>' +
        '<td>'+orderDetails.getDescription()+'</td>'+
        '<td>'+orderDetails.getPrice()+'</td>' +
        '<td>'+orderDetails.getQty()+'</td>' +
        '</tr>');
    setTotal();
});

$("#amount").on('keyup',function () {
    if (parseInt($('#amount').val())<parseInt($('#total').text())){
        $('#place_order').attr("disabled",true);
        $('#amount').css("color","red");
    }else {
        $('#place_order').attr("disabled",false);
        $('#amount').css("color","black");
    }
});

function nextNewOrderID() {
    if (orders.length==0){
        return "O1";
    }else {
        let order = orders[orders.length-1];
        let orderId = order.getOrder_id();
        console.log(orderId)
        let splitText = orderId.split("O");
        console.log(splitText)
        let number = parseInt(splitText[1]);
        console.log(number)
        number++;
        console.log(number)
        return "O"+number;
    }

}

$('#place_order').on('click',function () {

    let o = new Order();
    o.setOder_id(nextNewOrderID());
    o.setCustomer_id($('#customer_id').val());
    o.setTotal($('#total').text());
    o.setOrder_date(new Date().toLocaleDateString());
    OrderModel.PlaceOrder(o);
});

$('#Orders').on('click',function () {
    $('#myCustomerOrder>tbody>tr').remove();
    let num=0;
    for (const order of orders) {
        num++;
        console.log(order)
        $('#myCustomerOrder').append('<tr>' +
            '<td><b>'+num+'</td>' +
            '<td>'+order.getOrder_id()+'</td>' +
            '<td>'+order.getCustomer_id()+'</td>'+
            '<td>'+order.getTotal()+'</td>' +
            '<td>'+order.getOrder_date()+'</td>' +
            '</tr>');
    }


});
/*
class Item {

    constructor() {
        var code;
        var description;
        var price;
        var qty;
    }
    getCode()
    {
        return this.code;
    }
    setCode(code)
    {
        this.code=code;
    }
    getDescription()
    {
        return this.description;
    }
    setDescription(description)
    {
        this.description=description;
    }

    getPrice()
    {
        return this.price;
    }
    setPrice(price)
    {
        this.price=price;
    }
    getQty()
    {
        return this.qty;
    }
    setQty(qty)
    {
        this.qty=qty;
    }

}*/

/*class Customer {

    constructor() {
        var customer_id;
        var fistName;
        var lastName;
        var address;
        var contact;
        var gmail;
    }
    getCustomerId()
    {
        return this.customer_id;
    }
    setCustomerId(customer_id)
    {
        this.customer_id=customer_id;
    }
    getFistName()
    {
        return this.fistName;
    }
    setFistName(name)
    {
        this.fistName=name;
    }
    getLastName()
    {
        return this.lastName;
    }
    setLastName(name)
    {
        this.lastName=name;
    }
    getAddress()
    {
        return this.address;
    }
    setAddress(address)
    {
        this.address=address;
    }
    getContact()
    {
        return this.contact;
    }
    setContact(contact)
    {
        this.contact=contact;
    }
    getEmail()
    {
        return this.gmail;
    }
    setEmail(gmail)
    {
        this.gmail=gmail;
    }

}*/

/*$('#FName').keydown(function (e) {
    const reg=/^[a-zA-Z-'`]+[ a-zA-Z-'`]$/;
    $('#FName').css('color',"black");
    if (e.key=="Enter" && reg.test($('#FName').val())){
        $('#FName').css('color',"black")
        $('#LName').focus();
    }else {
        $('#FName').css('color',"red");
    }
});*/

$('#amount').keyup(function () {
  Regex.test(/^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/ ,$('#amount'),$('#place_order'));
});

$('#order_qty').keyup(function () {
    Regex.test(/(^\d{1,10}$)/ ,$('#order_qty'),$('#add_to_cart'));
});
//===================Customer==========================
$('#FName').keyup(function () {
    Regex.test(/^[A-Za-z ]{5,}$/ ,$('#FName'),$('#NewCustAdd'));
});
$('#LName').keyup(function () {
    Regex.test(/^[A-Za-z ]{5,}$/ ,$('#LName'),$('#NewCustAdd'));
});
$('#ContactNumber').keyup(function () {
    Regex.test(/^[0-9]{2,}([.][0-9]{2})?$/ ,$('#ContactNumber'),$('#NewCustAdd'));
});
$('#Gmail').keyup(function () {
    Regex.test(/[a-zA-Z0-9_%+-]/ ,$('#Gmail'),$('#NewCustAdd'));
});
$('#QTY').keyup(function () {
    Regex.test(/(^\d{1,10}$)/ ,$('#QTY'),$('#NewItem'));
});
$('#Price').keyup(function () {
    Regex.test(/^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/ ,$('#Price'),$('#NewItem'));
});
$('#Description').keyup(function () {
    Regex.test(/^[A-Za-z ]{5,}$/ ,$('#Description'),$('#NewItem'));
});


/*const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_R
EGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
// const CUS_EMAIL_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;
const CUS_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;*/


//================================================Loader++++++++++++++++++++
$('body').ready(function () {
    document.getElementById("loader").style.display = "block";

    document.getElementById("D-Bord").style.display = 'none';
    document.getElementById("main").style.display = 'none';
    document.getElementById("customer-form").style.display = 'none';
    document.getElementById("Item-from").style.display = 'none';
    document.getElementById("order-from").style.display = 'none';
    document.getElementById("PlaceOrder").style.display = 'none';
    myFunction();
    }
);
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = 'block';
    document.getElementById("D-Bord").style.display = 'block';
    document.getElementById("customer-form").style.display = 'none';
    document.getElementById("Item-from").style.display = 'none';
    document.getElementById("order-from").style.display = 'none';
    document.getElementById("PlaceOrder").style.display = 'none';

}