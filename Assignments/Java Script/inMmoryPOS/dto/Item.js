
export class Item {

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