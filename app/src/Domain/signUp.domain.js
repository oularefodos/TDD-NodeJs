const yup = require('yup')

const UserSignUpSchema = yup.object.shape({
    name : yup.string().required('The name is Required'),
    email : yup.string().email('it has to be a valid email').required('The email is required'),
    password : yup.string().min(8, "minimum 8 char are required").required('the password is required')
});

module.exports = UserSignUpSchema;