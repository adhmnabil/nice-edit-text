let actions = document.querySelectorAll('.selectAll')
let font = document.querySelector('#size')
let nColor = document.querySelector('#color')



changBk.addEventListener('change',()=>{
    notes.style.background = changBk.value
})
font.addEventListener('keyup',()=>{
    notes.style.fontSize=`${font.value+'px'}`
    if (font.value == ''){
        notes.style.fontSize= 20 +'px'
    }
})
nColor.addEventListener('change' , ()=>{
    notes.style.color = nColor.value
})

actions.forEach((action)=>{
    action.addEventListener('click',()=>{
    notes.classList.toggle(action.getAttribute('id') )
        if(action.getAttribute('id') == "left"){
            notes.classList.remove('center' , 'right')
        }else if (action.getAttribute('id') == "center"){
            notes.classList.remove('left' , 'right')
        }else if(action.getAttribute('id') == "right") {
            notes.classList.remove('left' , 'center')
        }
    })
    })
  