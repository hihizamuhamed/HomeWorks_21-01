const input = document.querySelector('.inp') 
const btn =document.querySelector('.btn')
const lists= document.querySelector('.lists')


let list = []

const  rever=word=> word.split('').reverse().join('')


btn.onclick=()=>{
    list.push(rever(input.value))
    lists.innerHTML=''
    list.map(item => {
        const h1 = document.createElement(h1)
        lists.append(h1)
        h1.append(item)
    }) 
}