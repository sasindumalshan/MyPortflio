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