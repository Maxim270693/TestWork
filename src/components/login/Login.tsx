import React from 'react';
import { useFormik } from 'formik';
import s from './login.module.css'

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <label htmlFor="email">Email Address</label>
            <input
                className={s.input}
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <input
                className={s.input}
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <button type="submit">Submit</button>
        </form>
    );
};