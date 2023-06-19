import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import TextField from "./TextField";

const App2 = () => {
    const userLoginSchema = object ( {
        email: string().required()
        .email("Email must be valid one"),
        password: string().required()
        .min(7, "Password contains less letters")
        .max(15, "Password maximum limit is 15"),
    });
  return (
    <div>
        <Formik initialValues={{ email:"", password:""}}
        onSubmit={(data) => {
           // console.log(data);
           // console.log('form submitted');
        }}
        validationSchema = {userLoginSchema}
        >
            {({ errors, handleSubmit, handleChange, values }) => {
                //console.log(values);
                return <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                   <TextField name="email" />
                    <label> Password:</label>
                    <TextField name="password" />
                    <input type="submit" />
                </form>;
            }}
        </Formik>
    </div>
  ); 
};

export default App2;