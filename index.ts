
import products from './products';

let productName: string = 'beanie';

const product = products.filter(product => product.name === productName)[0];

// console.log(product);

if (product.preOrder) {
  console.log('We will send you a message when your product is on its way.');
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = '1598 west ave Ny, Ny';



if (Number(product.price)>25) {
    console.log('This item will recieve free shiping.');
    shipping= 0; 
} else {
        shipping = 5;
    }


    if (shippingAddress.match('NY')) {
        taxPercent = 0.1;
    } else {
        taxPercent = 0.05;
    }

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

    console.log(`
    Product:  ${product.name}
    Address: ${shippingAddress}
    Price:  $${product.price}
    Tax:  $${taxTotal.toFixed(2)}
    Shipping: $${shipping.toFixed(2)}
    Total: $${total.toFixed(2)}  
    `);
