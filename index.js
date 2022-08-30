function validate() {
    let firstNameField = document.getElementById('first-name').value
    let lastNameField = document.getElementById('last-name').value
    let emailField = document.getElementById('email').value
    let contactNoField = document.getElementById('contact-no').value
    let batchNoField = document.getElementById('batch-no').value
    let moduleNoField = document.getElementById('module-no').value
    let termsAndConditionsField = document.getElementById('termsAndConditions').checked
    

    let error = false

    if(firstNameField.length >= 3){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error = true
    }

    if(lastNameField.length >= 3){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }
    else{
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
        error = true
    }

    if(emailField.length >=1 && emailField.includes('@') && emailField.includes('.') && emailField.lastIndexOf('.') <= emailField.length-3 && emailField.indexOf('@') != 0){
        document.getElementById('email-valid').style.display='block'
        document.getElementById('email-invalid').style.display='none'
    }
    else{
        document.getElementById('email-invalid').style.display='block'
        document.getElementById('email-valid').style.display='none'
        error = true
    }

    if(contactNoField.length===10){
        document.getElementById('contact-no-valid').style.display='block'
        document.getElementById('contact-no-invalid').style.display='none'
    }
    else{
        document.getElementById('contact-no-invalid').style.display='block'
        document.getElementById('contact-no-valid').style.display='none'
        error = true
    }

    if(batchNoField != 'None'){
        document.getElementById('batch-no-valid').style.display='block'
        document.getElementById('batch-no-invalid').style.display='none'
    }
    else{
        document.getElementById('batch-no-invalid').style.display='block'
        document.getElementById('batch-no-valid').style.display='none'
        error = true
    }

    if(moduleNoField != 'None'){
        document.getElementById('module-no-valid').style.display='block'
        document.getElementById('module-no-invalid').style.display='none'
    }
    else{
        document.getElementById('module-no-invalid').style.display='block'
        document.getElementById('module-no-valid').style.display='none'
        error = true
    }

    if(termsAndConditionsField){
        document.getElementById('termsAndConditions-invalid').style.display='none'
    }
    else{
        document.getElementById('termsAndConditions-invalid').style.display='block'
        error = true
    }

    if(!error){
        alert('Your details have been saved successfully!')
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('contact-no').value = ''
        document.getElementById('batch-no').value = 'None'
        document.getElementById('module-no').value = 'None'
        document.getElementById('termsAndConditions').checked = false
       

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('contact-no-valid').style.display = 'none'
        document.getElementById('batch-no-valid').style.display = 'none'
        document.getElementById('module-no-valid').style.display = 'none'
    }
}



