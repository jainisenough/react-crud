import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Login.css';

import { ADMIN } from '../../../route-link';
const Login = memo(
  () => {
    const history = useHistory();
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          console.log(values);
          history.replace(ADMIN.USER);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Required'),
          password: Yup.string().required('Required')
        })}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'text-input error' : 'text-input'}
              />
              {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}

              <label htmlFor="password">Password</label>
              <input
                name="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? 'text-input error' : 'text-input'}
              />
              {errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}

              <button className="btn" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    );
  },
  () => true
);

export default Login;
