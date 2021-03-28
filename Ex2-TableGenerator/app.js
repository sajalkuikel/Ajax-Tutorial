function myClickEvent(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'ex2.php' ,true);

    xmlHttp.onreadystatechange = function (){
        if(xmlHttp.readyState > 3 ){
            document.getElementById('new').innerHTML=xmlHttp.responseText;
            
           //aayena hehe
            
        }
    };
    xmlHttp.send();
}
function myLoadEvent(){
    var element = document.getElementById('submitbtn');
    element.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

