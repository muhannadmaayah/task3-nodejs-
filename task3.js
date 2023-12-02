//! task-003(1)

function countDigits(arr,type){
   let count=0;
   let index=0;
   let Arr=[];
    for (let element of arr){
        element=element.toString();
        for (let i=0;i<element.length;i++){
           
            const digit=parseInt(element[i]);

          if(type.toLowerCase()==="odd"){
            if(digit%2==1){
                count++;
            }
          }
          if(type.toLowerCase()==='even'){
            if(digit%2==0){
                count++;
            }
          }
        }
     
     Arr[index]=count;
     index++;
     count=0;
    }

 return Arr;
}

console.log(countDigits([22, 53, 99, 61, 777, 8], "even"));

//!Task-0003 (2)
function getTotalPrice(groceries) {
     
    let totalPrice=0;

    for(element of groceries){
       
        totalPrice+=parseFloat(element.quantity)*parseFloat(element.price);
    }

    return totalPrice;
}

const groceries = [
    {product: 'Milk', quantity: 1, price: 2},
    {product: 'Milk', quantity: 1, price: 2},
    {product: 'Cereals', quantity: 1, price: 2},
    {product: 'Milk', quantity: 2, price: 2},
    {product: 'Milk', quantity: 1, price: 2},
    {product: 'Eggs', quantity: 10, price: 2},
    {product: 'Bread', quantity: 2, price: 2},
    {product: 'Cheese', quantity: 1, price: 2},
    {product: 'Chocolate', quantity: 1, price: 2},
    {product: 'Lollipop', quantity: 1, price: 2},
];

console.log(getTotalPrice(groceries));