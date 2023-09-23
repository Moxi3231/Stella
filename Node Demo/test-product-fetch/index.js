const getProductData = require("../product-fetch");

//getProductData().then(res => res.json()).then(res => console.log(res));
var data; 
getProductData().then(res => {data = res['products']}).then(() => {
    data.forEach(element => {
        console.log(element)
    });
});

