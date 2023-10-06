import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import {
  ErrorMessageStyled,
  FieldWrapper,
  FormStyled,
  Label,
  ButtonSubmit,
} from './Form.styled';

import { addContact } from 'redux/operations';
import { useContactActions } from '../Filter/Filter';

const initialValues = {
  name: '',
  phone: '',
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .length(9, 'Number must have 9 symbols')
    .trim()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Number must be in the format 111-11-11'
    )
    .required('Required'),
});

export default function ContactsForm() {
  const { dispatch, contacts } = useContactActions();

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const { name, phone } = values;

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with name "${name}" already exists!`);
      setSubmitting(false); 
    } else if (contacts.some(contact => contact.phone === phone)) {
      alert(`Contact with number "${phone}" already exists!`);
      setSubmitting(false); 
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormStyled>
          <FieldWrapper>
            <Label htmlFor="name">Name</Label>
            <Field id="name" name="name" placeholder="Jane" />
            <ErrorMessageStyled component="div" name="name" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="phone">Phone</Label>
            <Field id="phone" name="phone" placeholder="123-45-67" />
            <ErrorMessageStyled component="div" name="phone" />
          </FieldWrapper>
          <ButtonSubmit type="submit" disabled={isSubmitting}>
            Add contact
          </ButtonSubmit>
        </FormStyled>
      )}
    </Formik>
  );
}
