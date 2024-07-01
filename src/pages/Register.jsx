// rrd imports
import { Form, useActionData } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import {} from "../components";
import FormInput from "../components/FormInput";

//react imports
import { useEffect } from "react";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoUrl = formData.get("photoUrl")
  let email = formData.get("email")
  let pasword = formData.get("pasword")
  return {displayName, photoUrl, email, pasword};
};

function Register() {
  const userData = useActionData()

  useEffect(() => {
    if(userData) {
      console.log(userData)
    }
  }, [userData])
  return (
    <div className="auth-container">
      <div className="auth-left">
        <p className="text-7xl text-slate-100 text-center transition">Registar</p>
      </div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col gap-2 w-96 bg-base-100 shadow-xl p-8"
        >
          <h1 className="text-3xl font-semibold text-center">Register</h1>
          <FormInput name="displayName" type="text" label="Your Name" />
          <FormInput name="photoUrl" type="url" label="Your Image Url" />
          <FormInput name="email" type="email" label="email" />
          <FormInput name="pasword" type="pasword" label="pasword" />
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Register</button>
          </div>
          <div className="w-full">
            <button className="btn btn-secondary btn-block">Google</button>
          </div>
          <div className="text-center">
            <p className="text-slate-500">
              If you have an account,{" "}
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;