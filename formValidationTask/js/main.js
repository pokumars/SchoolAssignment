let formRequiredValid=0;

function validateName(){
    const name =document.getElementById("commentName").value;

    if (name.length==0) {
        producePrompt('Name is Required','commentNamePrompt', 'red');

        return false;
    }
    if (!name.match(/^[a-zA-Z-]{2,}\s?([a-zA-Z-]{2,}\s?)*$/)) {
        producePrompt('First and Last name please','commentNamePrompt','red');
        return false;
    }

    producePrompt(`Welcome, ${name}`,'commentNamePrompt','green');
  formRequiredValid++;
  console.log(formRequiredValid);
}

function validatePhone(){
    const phone= document.getElementById('commentPhoneNumber').value;

    if (phone.length==0) {
        producePrompt('Number is Required','commentPhoneNumberPrompt', 'red');
        return false;
    }

    if (!phone.match(/^[+]{1}\d{12}$/)) {
        producePrompt('e.g "+3584012345675"','commentPhoneNumberPrompt','red');
        return false;
    }
    producePrompt('✓ Great work','commentPhoneNumberPrompt','green');
  formRequiredValid++;
  console.log(formRequiredValid);
}

function validateEmail(){
    const email= document.getElementById('commentEmail').value;

    if (email.length==0) {
        producePrompt('Email is Required','commentEmailPrompt', 'red');
        return false;
    }
    if (!email.match(/^\b[a-zA-Z0-9._%+-]+\@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        producePrompt('abcd@jklm.xyz','commentEmailPrompt','red');
        return false;
    }
    producePrompt('✓ Great work','commentEmailPrompt','green');
  formRequiredValid++;
  console.log(formRequiredValid);
}

function validateAddress(){
    const address= document.getElementById('commentAddress').value;

    producePrompt('✓ Great work','commentAddressPrompt','green');

}

function validatePostal(){
    const postal= document.getElementById('commentPostalCode').value;

    if (!postal.match(/^[0-9]{5}$/)) {
    producePrompt('exactly 5 numbers (01234)','commentPostalCodePrompt','red');
        return false;
    }

    producePrompt('✓ Great','commentPostalCodePrompt','green');

}

function validatePassword(){
    const password= document.getElementById('commentPassword').value;

    if (!password.match(/^.{4,10}$/)) {
    producePrompt('between 4 and 10 characters','commentPasswordPrompt','red');
        return false;
    }
    producePrompt('✓ Great','commentPasswordPrompt','green');
  formRequiredValid++;
}


console.log(formRequiredValid);

function producePrompt(message, promptLocation, color){
    document.getElementById(promptLocation).innerHTML =message;
    document.getElementById(promptLocation).style.color=color;
}

function loga() {
    console.log(document.getElementById("commentName").value.length);
}

//setInterval(loga,1000)
//^[a-zA-Z-]{2,}\s?([a-zA-Z-]{2,}\s?)*$ for the name
