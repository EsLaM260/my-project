// home page

// loading



$(document).ready(function(){
  $("#loading").fadeOut(2000 , function(){
      $("body").css( "overflow","auto" )
  })
})




// fix
let fix = document.getElementById("fix")
let fix2 = document.getElementById("fix2")
let fix3 = document.getElementById("fix3")
let fixItem = document.getElementById("fix-item")
let sideBar = document.getElementById("sideBar")
let Close = document.getElementById("close")
// header


let icon = document.getElementById("icon")
let search = document.getElementById("inputSeach") 

let pad =document.getElementById("pad")

 let header = document.getElementById("header")

 window.onscroll = function() {
     if(scrollY >= 200) {
        header.classList.add("header_2") 
        fix.classList.add("fixjs") 
     }
     else 
     {
        header.classList.remove("header_2")
        fix.classList.remove("fixjs")
     }
 }
 
icon.addEventListener("click" , function(){
    let form = document.getElementById("form-inline")

    search.style.cssText = "display: inline"
    form.style.cssText ="margin-left: -140px"




    // if (search.style.cssText = "display: none" == true) {
    //     search.style.cssText = "display: inline"
    //     form.style.cssText ="margin-left: -140px"
    // }else{
    //     search.style.cssText = "display: none"
    //     form.style.cssText ="margin-left: 0px"    
    // }



})


// side bar


sideBar.addEventListener("click" , function(){
    fix2.style.cssText = "right: 336px"
    fix3.style.cssText = "z-index:100"
    fixItem.style.cssText = "right:0"

})


Close.addEventListener("click" , function(){
    fix2.style.cssText = "right: 0"
    fix3.style.cssText = "z-index:-1"
    fixItem.style.cssText = "right:-28%px"
})


// add to card



let container = [
    {
        id :0,
        prise : "$85.00" ,
        name : "قابض العتاد",
        imgSrc :"img/product1-730x730.jpg"

    },
    {
        id :1,
        prise : "$470.00" ,
        name : "خزان غوص بالهواء المفتوح",
        imgSrc :"img/product4-730x730.jpg"

    },
    {
        id :2,
        prise : "$350.00" ,
        name : "الغوص",
        imgSrc :"img/product2-730x730.jpg"

    }
]

function productss(){
    let product1 = ""
    for (let i = 0; i < container.length; i++) {
        product1+= `
        <div class="col-lg-4">
        <div class="text2">
          <p>${container[i].prise}</p>
          <h2>${container[i].name}</h2>
        </div>
        <div class="photo">
          <div class="layer"></div>
          <img src="${container[i].imgSrc}" alt="">
          <button class="btn" onclick="AddItem(${i})">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
        `
    }
    document.getElementById("apply_product").innerHTML = product1
}
productss()

let container_product = []

function AddItem(id){
    let item = container.find((ele) => ele.id === id)
    container_product.push(item)
    displayProduct()
}


function displayProduct(){
    let rowProduct3 =""
    for (let i = 0; i < container_product.length; i++) {
        rowProduct3 +=`
        <div class="text">
        <div class="photo">
          <img src="${container_product[i].imgSrc}" alt="">
        </div>
        <div class="text_info">
          <h5>${container_product[i].name}</h5>
          <p>${container_product[i].prise}</p>
          <div onclick="deleteProduct(${i})">
      <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
        `
    }
    document.getElementById("product_show").innerHTML =rowProduct3
}



function deleteProduct(i) {
     container_product.splice(i,1)
     displayProduct()
}


