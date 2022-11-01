const customerData = [ 
    { firstname : "Haley", 
        lastname : "Fisher", 
        phone : "813-507-7840", 
        email: "haleynfisher018@gmail.com", 
        address: "2252 N 44th ST", 
        orderData: {
            ordernumber: 1,
            orderdate: "Nov, 1, 2022",
            totalqty: 2,
            totalamount: 5,
            itemData: [
                {
                    itemnumber: 1234,
                    itemname: "",
                    qty: 1,
                    price: "25.99"
                },
                {
                    itemnumber: 1235,
                    itemname: "",
                    qty: 1,
                    price: "26.99" 
                },
                {
                    itemnumber: 1236,
                    itemname: "",
                    qty: 1,
                    price: "27.99"
                }
            ]
        }
            
    },

        { firstname : "Bella", 
          lastname : "Dechard", 
          phone : "813-333-2222", 
          email: "bellaiscool@gmail.com", 
          address: "2345 Casey Rd", 
          orderData: {
            ordernumber: 1,
            orderdate: "",
            totalqty: 2,
            totalamount: 5,
            itemData: [
                {
                    itemnumber: 1234,
                    itemname: "",
                    qty: 1,
                    price: "25.99"
                },
                {
                    itemnumber: 1235,
                    itemname: "",
                    qty: 1,
                    price: "26.99" 
                },
                {
                    itemnumber: 1236,
                    itemname: "",
                    qty: 1,
                    price: "27.99"
                }
            ]
            
        }
    }
    ]

console.log(customerData);