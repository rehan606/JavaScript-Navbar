const ulContainer = document.getElementById('nav-container');
const listItemsLi = document.getElementsByTagName('li');


let lastClick = null
for(let item of listItemsLi){
    item.addEventListener('click', function(){
        if(lastClick == null){
            item.style.backgroundColor='goldenrod'
            item.style.color='blue'
            lastClick = item
        } else{
            lastClick.style.backgroundColor='transparent'
            lastClick.style.color='#111827'

            item.style.backgroundColor='goldenrod'
            item.style.color='blue'
            lastClick = item
        }
    })
}