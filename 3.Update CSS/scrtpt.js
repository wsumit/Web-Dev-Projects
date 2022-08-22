//filter:blur(--in px--)
//event listener--'CHANGE'
//-->(1)_data-[*-anything-*] can be added to any tag to select it via attribute
//this.dataset --when and event is called,,the elemnt has this property which returns-
//-->(2)list of datasets (see 1 |^)

//Method#2-->assign css variable to elements and update those using setProperty()

const spaceEl= document.querySelector(`input[name="spacing"]`);
const blurEl=document.querySelector(`input[name="blur"]`);
const colorEl=document.querySelector(`input[name="color"]`);

const object=document.querySelector(".object");
const heading=document.querySelector(".js");

var array=[spaceEl,blurEl,colorEl];

for(let e of array){
    
    e.addEventListener("change",adjust);
}




function adjust(){
    if(this.name=="spacing"){
        object.style.paddingLeft=this.value+"px";
        object.style.paddingTop=this.value+"px";
    }

    if(this.name=="blur"){
       object.style.filter=`blur(${this.value+"px"})`;
    }

    if(this.name=="color"){
        object.style.backgroundColor=this.value;
        heading.style.color=this.value;
    }
}