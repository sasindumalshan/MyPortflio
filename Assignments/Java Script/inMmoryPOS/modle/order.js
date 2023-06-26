import {cart, cust,orderDetails,orders} from "../controller/db.js";
import {items} from "../controller/db.js";

export class OrderModel {
  static getCustomerName(id){
      for (const customer of cust) {
          if(customer.getCustomerId()==id){
              return customer.getFistName()+" "+customer.getLastName();
          }
      }
       return "xxxxxx xxxxxxxx";
   }

    static getItemName(code) {
        for (const item of items) {
            if(item.getCode()==code){
                return item.getDescription();
            }
        }
        return "xxxxxx xxxxxxxx";
    }

    static getItemQTY(code) {
        for (const item of items) {
            if(item.getCode()==code){
                return item.getQty();
            }
        }
        return "00";
    }

    static getPrice(code) {
        for (const item of items) {
            if(item.getCode()==code){
                return item.getPrice();
            }
        }
        return "00";
    }

    static addToCart(orderDetails) {
        cart.push(orderDetails);
    }

    static PlaceOrder(order) {
        orderDetails.push(cart);
        console.log(orderDetails);
        orders.push(order);

        while(cart.length > 0) {
            cart.pop();
        }
    }
}