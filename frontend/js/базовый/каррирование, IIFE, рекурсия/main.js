



let final = 0 ;
const name ='dhhd';

if (name ==='Alex'){
    const product=createProduct('Арбуз',100,1);
    const alexCart=[product];

    const debt=150;
    
    final = calculateFinalPrice(alexCart);
    final+=debt;
    
    
}
else if (name==='John'){
    const product=createProduct('Хлеб',30,2);
    const johnCart=[product];

    const debt=50;
    
    final = calculateFinalPrice(johnCart);
    console.log(`Финальная ценя ${final+=debt}`);
    

}
else{
    const product=createProduct('Арбуз',10,1);
    const userCart =[product]

   

    final = calculateFinalPrice(userCart);
    console.log(`Финальная ценя ${final}`);
    
}


function createProduct(name, price, count){
    if(name===''){
        name='Неизвестный продукт'
        console.log('Вы не правильно задали имя продукта');
    }
    if(typeof price!=='number'){
        price=0;
        console.log('Вы не правильно задали цену');
    }
    if(typeof count !=='number'){
        count=0;
        console.log('Вы не правильно задали количество');
        
    }
    return{
        name,
        price,
        count
    };
};

function calculateFinalPrice(cart){
    let finalPrice=0;
    if (!cart || cart.length===0){
        return finalPrice
    }
    else{
        for (let i=0; i<cart.length; i++){
            const product=cart[i];
        
            finalPrice+=(product.price*product.count);
        }
        return finalPrice;
    };
}
const log=(time)=>{
    return(message)=>{
        return time
    }
}

    
