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
    $('#myCustomerTable>tbody>tr>td').click(function () {



    })
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
        '<td>'+customer.getEmail()+'</td>' +
        '</tr>');
    $('#FName').val("");
    $('#LName').val("");
    $('#Address').val("");
    $('#Gmail').val("");
    $('#ContactNumber').val("");

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


