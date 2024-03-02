let allProducts;
function getAll(){
if(localStorage.getItem("products")===null){
    allProducts=[];
}else{
    allProducts=JSON.parse(localStorage.getItem("products"));
}
allProducts.forEach((product) => {
  let table=document.querySelector("tbody")  ;
  table.innerHTML +=`
  <tr>
  <td>${product.id}</td>
  <td>${product.name}</td>
  <td>${product.price}</td>
  </tr>
  `;
});
}
getAll();

function addProduct(){
    let idNum=document.getElementById("id").value;
    let namee=document.getElementById("name").value;
    let pricee=document.getElementById("price").value;
    if(localStorage.getItem("products")===null){
        allProducts=[];
    }else{
        allProducts=JSON.parse(localStorage.getItem("products"));
    }
    let newProduct={id:idNum , name:namee , price:pricee};
    allProducts.push(newProduct);
localStorage.setItem("products",JSON.stringify(allProducts));
    getAll();


}
console.log(allProducts);
function showProducts(){
let boxs=document.querySelector(".boxs");
boxs.innerHTML = "";
allProducts.forEach((product)=>{
    boxs.innerHTML +=`
    <div class="box col-lg-3 mb-4 ">
    <div class="product">


        <h6>${product.id}</h6>
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button class="btn btns btn-success btn-sm " data-id="${product.id}">Add To Cart </button>
    </div>
</div>
    `;
})
}
showProducts();
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
localStorage.setItem("cart", JSON.stringify(cartItems));


let btnSC=document.querySelectorAll("#dark");
btnSC.forEach((btnC)=>{

   btnC.addEventListener("click" , (e)=>{
    btnSC.forEach((btnC)=>{
        setTimeout(()=>{
              btnC.classList.remove("active");
        },2000)
 

    })
  
 btnC.classList.add("active");
    document.body.style.backgroundColor=btnC.dataset.color;
   })
btnC.classList.remove("active");
})
function showCart(){
 let tabbod=document.querySelector(".t-bod");
 tabbod.innerHTML = "";
    cartItems.forEach((product)=>{
       
        tabbod.innerHTML +=`
        <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
     <td>   <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete </button></td>
        </tr>
        `;

    })
}
showCart();

let btns=document.querySelectorAll(".btns");
btns.forEach((btn)=>{
   btn.addEventListener("click" , ()=>{
    let id =btn.dataset.id;
    allProducts.find((product)=>{
      if(id === product.id){
         if(cartItems.some((product)=>product.id ===id)){
          alert("Product In Cart")
         }else{
          cartItems.push(product);
          localStorage.setItem("cart" , JSON.stringify(cartItems));
        
         }
      }
          
    });
showCart();
   });

});
function deleteProduct(id){
    cartItems = cartItems.filter((product) => product.id != id);
 showCart();
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
let num=document.getElementById("num").value;
function guessNum(){

    let num = parseInt(document.getElementById("num").value);

     if (num % 2 === 0) {
      console.log("Number is even");
      document.getElementById("result").innerHTML = "Number is even";
    } else {
      console.log("Number is odd");
      document.getElementById("result").innerHTML = "Number is odd";
    }
}
   
  

