import { Formik,Form, Field } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import './Contact.css';

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: ''
}

const validate = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .required('Required')
})

const onSubmitForm = (values) => {
  emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID, process.env.REACT_APP_FORMIK_TEMPLATE_ID,values,process.env.REACT_APP_FORMIK_PUBLIC_KEY)
  .then((result) => {
    console.log(result.text)
  })
  .catch((e) => {
    console.log(e)
  })
}

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='text-contact'>Contacto</h1>
      <Formik initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmitForm}
      >
        {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" placeholder="name"/>
          {errors.name && touched.name ? (
          <div>{errors.name}</div>
          ) : null}
          <label htmlFor="subject">Subject</label>
          <Field name="subject" placeholder="subject"/>
          {errors.subject && touched.subject ? (
            <div>{errors.subject}</div>
          ) : null}
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="email"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" placeholder="message"></Field>
          {errors.message && touched.message ? <div>{errors.message}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  );
};

export default Contact;