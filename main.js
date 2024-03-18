let list = document.querySelector('.list')
let buttonadd = document.querySelector('.buttonadd')
let boxinput = document.querySelector('.boxinput')
let datalist = []
console.log(JSON.parse(localStorage.getItem('value')))
if(JSON.parse(localStorage.getItem('value'))!=null)
{
    datalist =JSON.parse(localStorage.getItem('value'))
}
renderreload()
addenventtrash()
buttonadd.addEventListener('click',()=>{
    if(boxinput.value!=null)
    {
        let task = `<div class="data">
        <div>${boxinput.value}</div>
        <div class="data-icon">
            <i class="fa-solid fa-trash"></i>
            <i class="fa-solid fa-pen-to-square"></i>
        </div>
    </div>`
        datalist.push(task)
        render(datalist)
        localStorage.setItem('value',JSON.stringify(datalist))
        addenventtrash()
    }
})
function render(data){
    let datapush = data.join('')
    list.innerHTML= datapush
}
function renderreload(){
    let datareload = localStorage.getItem('value')
    if(datareload!=null)
    {
    render(JSON.parse(datareload))
    }
}
function addenventtrash(){
    let boxdata = document.querySelectorAll('.data')
    let trash = document.querySelectorAll('.fa-trash')
    for(let i = 0 ;i<trash.length;i++)
    {
        trash[i].addEventListener('click',()=>{
        boxdata[i].remove()
        datalist.splice(i,1)
        render(datalist)
        localStorage.setItem('value',JSON.stringify(datalist))
        addenventtrash()
        console.log('adas')
        })
    }
}

