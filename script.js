let Btn = document.getElementById('Btn');
let ToDo = document.getElementById('ToBeDone');
let Item = document.getElementById('txt');

var MobileView = window.matchMedia('(max-width:600px)')

function Clicked() {
    var List = document.createElement('li');
    if (Item.value != '' ||Item.value != " ") {
        List.innerText = Item.value;
        ToDo.appendChild(List);
        Item.value = ""
        ToDo.style.display = "flex";

        if (MobileView.matches) {
            List.addEventListener('click', function () {
                ToDo.removeChild(List);
            })
        }
        else {
            List.addEventListener('dblclick', function () {
                ToDo.removeChild(List);
            })
        }
    }

}