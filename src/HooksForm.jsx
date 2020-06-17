import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";

export const HooksForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = values => {
    // form is valid
    console.log(values);
  }
  return (
    <div className="container">
      <h1 className="mt-5">React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            placeholder="Enter email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address format",
              },
            })}
          />
        
            <ErrorMessage
              className="invalid-feedback"
              name="email"
              as="div"
              errors={errors}
            />
        
        </div>
        <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>   
      </form>
    </div>
  );
};
