function myClickEvent(){
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', 'garoh.php' ,true);

    xmlHttp.onreadystatechange = function (){
        if(xmlHttp.readyState > 3 ){
        document.getElementById('paragraph1').innerHTML=xmlHttp.responseText;
        }
    };
    xmlHttp.send();
}
function myLoadEvent(){
    var element = document.getElementById('paragraph');
    element.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

