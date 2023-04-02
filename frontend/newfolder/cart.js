let carts=JSON.parse(localStorage.getItem("carddata")) || [] ;


let tbodyel=document.querySelector(".cart-container")

display(carts)
function display(data){
    tbodyel.innerHTML=null;
    data.forEach((element,id) => {
        let card=document.createElement("div")

        let img=document.createElement("img")
        img.setAttribute("src",element.img)

        let name=document.createElement("h2")
        name.innerText=element.name;

        let price=document.createElement("h3")
        price.innerText="$"+element.price;

        let button=document.createElement("button")
        button.innerText="Remove"

        button.addEventListener("click",()=>{
            carts.splice(id,1)
            localStorage.setItem("carddata",JSON.stringify(carts))
            display(carts)
        })
        let Price=carts.reduce((acc,el) => acc+(Number(el.price)),0);
        console.log(Math.floor(Price))
        document.querySelector("#pan").innerText="₹"+Price;

        console.log(card)
        card.append(img,name,price,button)
        tbodyel.append(card)
    });
}

document.querySelector("#paynow").addEventListener("click",()=>{
    setTimeout(() => {
        window.location.href="Finalpage.html"; 
    }, 1000);
    
})