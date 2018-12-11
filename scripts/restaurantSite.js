function formSubmit(){
    var contactName = document.forms["contactForm"]["name"].value;
    var contactEmail = document.forms["contactForm"]["email"].value;
    var contactPhone = document.forms["contactForm"]["phone"].value;
    
    
    if(contactEmail == ""){
        alert("Email must be filled in.");
        document.forms["contactForm"]["email"].focus();
        return false;
    }
    
    if(contactName == ""){
        alert("Name must be filled in.");
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    
    if(contactPhone == "" || isNaN(contactPhone)){
        alert("Phone number must be filled in.");
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
    
    alert("Information Submitted!");
    
    return false;
}