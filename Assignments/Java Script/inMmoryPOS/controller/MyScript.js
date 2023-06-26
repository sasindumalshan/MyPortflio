import {cust} from "./db.js";
import {items} from "./db.js";
import {cart,orderDetails,orders} from "./db.js";
// import {orderDetails} from "./db.js";
import {OrderModel} from "../modle/order.js"
import {OrderDetails} from "../dto/OrderDetails.js"
import {Order} from "../dto/Order.js"
import {Item} from "../dto/Item.js"

document.getElementById("D-Bord").style.display = 'block';
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

$('#FName').keydown(function (e) {
    const reg=/^[a-zA-Z-'`]+[ a-zA-Z-'`]$/;
    $('#FName').css('color',"black");
    if (e.key=="Enter" && reg.test($('#FName').val())){
        $('#FName').css('color',"black")
        $('#LName').focus();
    }else {
        $('#FName').css('color',"red");
    }
});

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
    $('#code').val("");
    $('#Description').val("");
    $('#Price').val("");
    $('#QTY').val("");


});

$('#Customer').click(function () {

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
        let custElement = orders[orders.length-1];
        let customerId = custElement.getCustomerId();
        console.log(customerId)
        let splitText = customerId.split("O");
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
    for (const order of orders) {
        console.log(order)
        $('#myCustomerOrder').append('<tr>' +
            '<td><b>'+parseInt(orders.length)+'</td>' +
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

class Customer {

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

}




