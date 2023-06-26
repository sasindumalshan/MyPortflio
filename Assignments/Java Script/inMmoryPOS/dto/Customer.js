export class Customer {

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