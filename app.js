showDummyData = (str) => {
   
    if(document.getElementById(str).style.display==='none'){
        document.getElementById(str).style.display='block';
        var data = "This is some kind of dummy data.";
        document.getElementById(str).innerHTML=data;
    }
    else{
        document.getElementById(str).style.display='none';
        var data = "";
        document.getElementById(str).innerHTML=data;
    }
    
}
