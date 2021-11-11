function done(){
    var arr = document.getElementsByTagName ("input");
    var name = arr[0].value;
    var pass = arr[1].value;
    var cfpass = arr[2].value;
    if(name== "" && pass=="" && cfpass==""){
        alert("Please fill all the fields");
        return;
    }
    if(name== ""){
        alert("Username not be blank");
        return;
    }
    if(pass== ""){
        alert("Password not be blank");
        return;
    }
    if(cfpass==""){
        alert("Confirm password not be blank");
        return;
    }
    if(pass!=cfpass){
        alert("Password not be match confirm password");
        return;
    }
    else{
        alert("Register successful!"); 
        //window.location="file:///C:/Users/Admin/Documents/CODE%20-%20FONTEND/login.html";
    }
}      
