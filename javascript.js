// const red=document.getElementById('red')
// const blue=document.getElementById('blue')
// const yellow=document.getElementById('yellow')
// const green=document.getElementById('green')
// //const body=document.body;
//  const body=document.querySelector('body');

// red.addEventListener('click',()=>{
// body.style.backgroundColor='red';
// })
// blue.addEventListener('click',()=>{
// body.style.backgroundColor='blue';
// })
// yellow.addEventListener('click',()=>{
// body.style.backgroundColor='yellow';
// })
// green.addEventListener('click',()=>{
// body.style.backgroundColor='green';
// })
//------------------>>>>>>>>>code ko thoda optimise karte h
//yaha pe use hoga forEach loop why? because vo ek ek value ko pick karta h

// const buttons=document.querySelectorAll('button')
// const bodys=document.body;
// buttons.forEach((button)=>{ //because ek ek button par visit karna h
//     button.addEventListener('click',()=>{
//         bodys.style.backgroundColor=button.id;
            
//     })
//  })

//------------------->>>>>>>>>>>>>>>>##################################
//ab agar code ko aur bhi jada optimise karna h to event bubbling ka use karo

const parent=document.getElementById('root')
parent.addEventListener('click',(event)=>{
        // console.log(event.target.tagName);
        if(event.target.tagName==='H1')
        return;
        document.body.style.backgroundColor=event.target.id;
        // console.log(event.target.id);
        // event.stopPropagation(); //sirf click wala hi chalega
})

//addeventListner me 3 property hoti h
// addEventListener(eventtype, callback,capture)