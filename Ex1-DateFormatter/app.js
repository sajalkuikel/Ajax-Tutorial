function myClickEvent(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'test.html' ,true);

    xmlHttp.onreadystatechange = function (){
        if(xmlHttp.readyState > 3 ){
        
        var current_datetime = new Date()
        var formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear()
        var withString =  "Today's date is : " + formatted_date;    
        
        alert(withString);
        }
    };
    xmlHttp.send();
}
function myLoadEvent(){
    var element = document.getElementById('btn1');
    element.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

