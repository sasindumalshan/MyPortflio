export class Order {

    constructor() {
    var order_id;
    var order_date;
    var total;
    var customer_id;
    }
    getOrder_id(){
        return this.order_id;
    }
    setOder_id(order_id)
    {
        this.order_id=order_id;
    }
    getOrder_date(){
        return this.order_date;
    }
    setOrder_date(order_date){
        this.order_date=order_date;
    }
    getTotal(){
        return this.total;
    }
    setTotal(total){
        this.total=total;
    }
    getCustomer_id(){
        return this.customer_id;
    }
    setCustomer_id(customer_id){
        this.customer_id=customer_id;
    }

}