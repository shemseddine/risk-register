import { withFormik } from "formik";
import EntryForm from "./EntryForm";
import * as Yup from "yup";

export default withFormik({
  mapPropsToValues: props => ({}),
  validationSchema: Yup.object().shape({}),
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(true);
    fetch("/api/registers", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(() => {
      setSubmitting(false);
      props.handleClose();
    });
  }
})(EntryForm);
