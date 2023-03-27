let gender = document.querySelector("div.gender_category");
let products = document.querySelector("div.product_category");

// Gender
gender.addEventListener("click", (e)=>{

    gender.classList.toggle('active');
    gender.lastElementChild.style="display:flex;";
    
    if (!gender.classList.contains("active")) {
        gender.lastElementChild.style="";   
    }

    for (let node of gender.childNodes) {
        if (node.nodeName === "UL") {
            let ul = node;
            // When we leave the list 
            ul.addEventListener("mouseleave", (e)=>{
                ul.style="";
                ul.parentElement.classList.remove("active");
            })
        } 
      }

    // The next element sibling (in this case the products div (dropdown))
    let nextUlElement = gender.nextElementSibling;
    nextUlElement.classList.remove("active");
    // If we click on the next element siblings (products category), we don't display the ul of the gender anymore, to prevent to have the two list (ul) open at the same time
    nextUlElement.addEventListener("click",(e)=>{
        for (let node of gender.childNodes) {
            if (node.nodeName === "UL") {
                let ul = node;
                ul.style="";
            } 
          }
    })

})

// Products
products.addEventListener("click", (e)=>{

    products.classList.toggle('active');
    products.lastElementChild.style="display:flex;";
    
    if (!products.classList.contains("active")) {
        products.lastElementChild.style="";   
    }
    
    for (let node of products.childNodes) {
        if (node.nodeName === "UL") {
            let ul = node;
            ul.addEventListener("mouseleave", (e)=>{
                ul.style="";
                ul.parentElement.classList.remove("active");
            })
        } 
    }
    
    // The previous element sibling (in this case the gender div (dropdown))
    let previousUlElement = products.previousElementSibling;
    console.log(previousUlElement);
    previousUlElement.classList.remove("active");

    // If we click on the previous element siblings (gender category), we don't display the ul of the products anymore, to prevent to have the two list (ul) open at the same time
    previousUlElement.addEventListener("click", (e)=>{
        for (let node of products.childNodes) {
            if (node.nodeName === "UL") {
                let ul = node;
                ul.style="";
            } 
          }

    })
})
