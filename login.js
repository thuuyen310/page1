function success(){
    var list = document.getElementsByTagName ("input");
    var username = list[0].value;
    var password = list[1].value;
    if(username== "" && password==""){
        alert("Please fill all the fields");
        return;
    }
    if(username== ""){
        alert("Username not be blank");
        return;
    }
    if(password== ""){
        alert("Password not be blank");
        return;
    }
    else{
        alert("Done! Have a good day !😜")
    }
}
