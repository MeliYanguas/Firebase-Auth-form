
//Sign in event
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', e => {
    e.preventDefault();
    const email= document.querySelector('#login-email').value;
    const password= document.querySelector('#login-password').value;
    console.log(email,password);

    auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredential => {
            //clear the form
            signinForm.reset();
            console.log('sign in');
        })
})

// const forgotPassword = document.querySelector('#forgotPassword');

// forgotPassword.addEventListener('click', function(e){
//     alert('missing password...')
// })

