import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
interface FormFields {
  email: string;
  password: string;
}
const DefaultFormFields: FormFields = {
  email: "",
  password: "",
};
function Login() {
  //  Set State for form
  const [formData, setFormData] = useState(DefaultFormFields);

  const { email, password } = formData;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> User
        </h1>
        <p>Login and setting goal</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter Your Email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter Your Password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
