import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const initialValues = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

const validate = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const onSubmitForm = (values) => {
  emailjs
    .send(
      process.env.REACT_APP_FORMIK_SERVICE_ID,
      process.env.REACT_APP_FORMIK_TEMPLATE_ID,
      values,
      process.env.REACT_APP_FORMIK_PUBLIC_KEY
    )
    .then((result) => {
      // console.log(result.text)
      alert(
        "Mensaje enviado con éxito. ¡Me pondré en contacto en la brevedad!"
      );
    })
    .catch((e) => {
      // console.log(e)
      alert("Sucedió un error al enviar el mensaje. ¡Intente más tarde!");
    });
};

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="wrapper-title-contact">
        <h1 className="text-contact">Contact</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={onSubmitForm}
      >
        {({ errors, touched }) => (
          <Form className="form-container">
            <label className="label-text" htmlFor="name">
              Name
            </label>
            <Field className="input" name="name" placeholder="name" />
            {errors.name && touched.name ? (
              <div className="error-message-form">{errors.name}</div>
            ) : null}
            <label className="label-text" htmlFor="subject">
              Subject
            </label>
            <Field className="input" name="subject" placeholder="subject" />
            {errors.subject && touched.subject ? (
              <div className="error-message-form">{errors.subject}</div>
            ) : null}
            <label className="label-text" htmlFor="email">
              Email
            </label>
            <Field
              className="input"
              name="email"
              type="email"
              placeholder="email"
            />
            {errors.email && touched.email ? (
              <div className="error-message-form">{errors.email}</div>
            ) : null}
            <label className="label-text" htmlFor="message">
              Message
            </label>
            <Field
              className="message-input"
              name="message"
              as="textarea"
              placeholder="message"
            ></Field>
            {errors.message && touched.message ? (
              <div className="error-message-form">{errors.message}</div>
            ) : null}
            <button className="submit-button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
