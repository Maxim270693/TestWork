import React from 'react';
import {useFormik} from 'formik';
import s from './login.module.css'

type FormikType = {
    email?: string
    password?: string
}

export const Login = () => {

    const validate = (values: any) => {
        const errors: FormikType = {};

        if (!values.email) {
            errors.email = 'Поле email не может быть пустым';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 7) {
            errors.password = 'Пароль должен быть более 7 символов';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm();
        },
    });
    return (
       <div className={s.login}>
           <form onSubmit={formik.handleSubmit} className={s.form}>
               <label htmlFor="email" className={s.label}>Email Address</label>
               <input
                   className={s.input}
                   id="email"
                   type="email"
                   {...formik.getFieldProps('email')}
               />
               {formik.touched.email && formik.errors.email ? <div className={s.error}>{formik.errors.email}</div> : null}

               <label htmlFor="email" className={s.label}>Password</label>
               <input
                   className={s.input}
                   id="password"
                   type="password"
                   {...formik.getFieldProps('password')}
               />
               {formik.touched.password && formik.errors.password ? <div className={s.error}>{formik.errors.password}</div> : null}

               <button type="submit" className={s.btn}>Submit</button>
           </form>
       </div>
    );
};