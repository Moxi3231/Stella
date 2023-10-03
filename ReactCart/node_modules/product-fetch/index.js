async function getProductData()
{
    const products_link = "https://dummyjson.com/products";
    const data = await fetch(products_link).then(res => res.json());
    return data;
}

module.exports = getProductData;