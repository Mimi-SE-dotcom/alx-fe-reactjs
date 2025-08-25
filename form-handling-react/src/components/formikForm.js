import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Registering user:", values);
    alert("User registered successfully");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <h2 className="text-xl font-bold">Register with Formik</h2>
        <label>
          Username:
          <Field name="username" className="border p-2 rounded w-full" />
        </label>
        <ErrorMessage name="username" component="div" className="text-red-500" />

        <label>
          Email:
          <Field name="email" type="email" className="border p-2 rounded w-full" />
        </label>
        <ErrorMessage name="email" component="div" className="text-red-500" />

        <label>
          Password:
          <Field name="password" type="password" className="border p-2 rounded w-full" />
        </label>
        <ErrorMessage name="password" component="div" className="text-red-500" />

        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Submit
        </button>
      </Form>
    </Formik>
  );
}