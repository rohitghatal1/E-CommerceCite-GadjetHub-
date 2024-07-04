const products = document.getElementById("products");
const allProducts = ["Laptops", "Mobile Phones", "Smart Watches"];
let arrayIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 100;
let newTextDelay = 2000;

function type(){
    if (charIndex < allProducts[arrayIndex].length){
        products.textContent += allProducts[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if(charIndex > 0){
        products.textContent = allProducts[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        arrayIndex = (arrayIndex + 1) % allProducts.length;
        setTimeout(type, typingDelay)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTextDelay);
});