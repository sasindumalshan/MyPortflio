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

var cust=[];
var items=[];

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

$('#NewCustAdd').click(function () {
    var customer=new Customer();
    customer.setFistName($('#FName').val());
    customer.setLastName($('#LName').val());
    customer.setAddress($('#Address').val());
    customer.setEmail($('#Gmail').val());
    customer.setContact($('#ContactNumber').val());

    cust.push(customer);

    $('#myCustomerTable').append('<tr>' +
        '<td><b>0</td>' +
        '<td>'+customer.getFistName()+'</td>' +
        '<td>'+customer.getLastName()+'</td>' +
        '<td>'+customer.getAddress()+'</td>' +
        '<td>'+customer.getContact()+'</td>' +
        '<td>'+customer.getEmail()+"@gmail.com"+'</td>' +
        '</tr>');
   /* $('#FName').val("");
    $('#LName').val("");
    $('#Address').val("");
    $('#Gmail').val("");
    $('#ContactNumber').val("");*/
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
        '<td><b>0</td>' +
        '<td>'+item.getCode()+'</td>' +
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

}

class Customer {

    constructor() {
        var fistName;
        var lastName;
        var address;
        var contact;
        var gmail;
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


