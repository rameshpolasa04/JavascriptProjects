const inputBox= document.getElementById('input_box')
const listContainer=document.getElementById('list_container')

function addTask(){
    if(inputBox.value===''){
        alert('You must Write Something')
    }
    else{
        console.log('hello')
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value=''
}