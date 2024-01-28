import { getShoppingCart } from "../utilities/fakedb";

const CartLoader= async ()=>{
    const product= await fetch('products.json')
    const products=await product.json()

    const storeCart= getShoppingCart()
    const saveCart=[];
   for(const id in storeCart){
    const addedProducts= products.find(product => product.id === id);
    
    if(addedProducts){
        const quantity=storeCart[id]
        addedProducts.quantity=quantity;
        saveCart.push(addedProducts);
    }
   }



    return saveCart;


}

export default CartLoader;