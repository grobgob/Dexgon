const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.render('Login'));

//register page
router.get('/register', (req, res) => res.render('Register'));

//register handler
router.post('/register', (req, res) => {
    const {name, email, password, repeatPassword} = req.body;
    let errors = [];

    //Check that all fields are filled
    if(!name || !email || !password || !repeatPassword){
        errors.push({ msg: 'Please fill in all fields'});
    }

    //Check that passwords match 
    if(password !== repeatPassword){
        errors.push({ msg: 'Passwords do not match'});
    }

    //Check password requirements, add in regex checks later
    if(password.length < 6){
        errors.push({ msg: 'Password should be at least 6 characters long'})
    }
});

module.exports = router;