//add to cart button

var items=["apple","samsung","logi tech","best sellers","feedback","laptops","demo","home","newsletters"];

var suggestions=document.querySelector(".suggestions");
var search= document.querySelector(".searchbar input");

search.addEventListener("keyup",function(){
    
        var val =(this.value).toLowerCase();
        let ans=items.filter((i)=>{
            let regex=new RegExp(val,'gi');
           return i.match(regex);
        }).map((i)=>{
        
            i=i.replace(val,`<p class="color">${val}</p>`);
        
            return `<span>${i} ?</span>`;
        }).join(" ");
    
        suggestions.innerHTML=ans;
        

});






