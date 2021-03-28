
function myClickEvent(){
    alert('The button was pressed');
}
function myLoadEvent(){
    var element = document.getElementById('paragraph');
    element.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

