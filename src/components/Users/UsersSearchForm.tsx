import {Field, Formik, FormikHelpers} from 'formik';
import React from 'react';
import {UserFilterType} from '../../Redux/users-reducer';

type UsersSearchFormPropsType = {
  onFilterChanged: (value: UserFilterType) => void;
};

export const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo(({onFilterChanged}) => {
  const usersSearchFormValidate = (values: UserFilterType) => {
    const errors: any = {};
    if (!values.term) {
      errors.term = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.term)) {
      errors.term = 'Invalid email address';
    }
    return errors;
  };

  const submit = (values: UserFilterType, {setSubmitting}: FormikHelpers<UserFilterType>) => {
    onFilterChanged(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik initialValues={{term: '', friend: ''}} onSubmit={submit}>
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <input type="text" name="term" onChange={handleChange} onBlur={handleBlur} value={values.term} />
            {errors.term && touched.term && errors.term}
            <Field as="select" name="friend" onChange={handleChange} value={values.friend}>
              <option value="">All</option>
              <option value="true">Friends</option>
              <option value="false">Unfriends</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
});
