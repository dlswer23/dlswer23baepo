let nameDate = [
    "풀스택",
    "안드로이드일짱",
    
]

let name = document.getElementById('name');
let change = document.getElementById('change');


let index = 0;
setInterval(function() {
    console.log(nameDate[index++]);
    if (index == nameDate.length)
        index = 0
        change.innerHTML = nameDate[index]
    
}, 1000);

