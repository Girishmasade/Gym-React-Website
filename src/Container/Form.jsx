import React from "react";
import { useFormik } from "formik";
import "./Form.css";
import { validateSchema } from "./Validation";

const ContactForm = () => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: '',
      address: '',
      gender: '',
      options: '',
      bio: '',
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(`value of the form is ${values}`);
    },
    
  });
  return (
    <>
      <div className="card mb-2 py-4 h-100">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="/Images/Contact.svg"
              className="img-fluid rounded-start w-100"
              alt="..."
            />
          </div>
          <div className="col-md-4 formData">
            <div className="card-body ">
              <form onSubmit={handleSubmit}>
                <div className="form-group py-3">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                     id="name"
                     name="name"
                     value={values.name}
                     onChange={handleChange}
                    className="form-control bg-transparent text-white"
                    placeholder="Enter full name"
                  />
                  {errors.name && touched.name ? (<p className="text-danger">{errors.name}</p>) : null}
                </div>
                <div className="form-group py-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                     id="email"
                     name="email"
                     value={values.email}
                     onChange={handleChange}
                    className="form-control bg-transparent text-white"
                    placeholder="Enter email"
                  />
                   {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : null}
                </div>
                <div className="form-group py-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    className="form-control bg-transparent text-white"
                    placeholder="Enter address"
                  />
                   {errors.address && touched.address ? (<p className="text-danger">{errors.address}</p>) : null}
                </div>
                <div className="form-group ">Gender</div>
                <div className="form-group py-2">
                  <label htmlFor="gender">
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      className="bg-transparent text-white"
                    />
                    Male
                  </label>
                </div>
                <div className="form-group py-2">
                  <label htmlFor="gender">
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      className="bg-transparent text-white"
                    />
                    Female
                  </label>
                </div>
                <div className="form-group py-2">
                  <label htmlFor="gender">
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      className="bg-transparent text-white"
                    />
                    Other
                  </label>
                  {errors.gender && touched.gender ? (<p className="text-danger">{errors.gender}</p>) : null}
                </div>

                <div className="form-group py-3">
                  <label htmlFor="options">Options</label>
                  <select
                    className="form-control bg-transparent text-white"
                    name="options" onChange={handleChange}
                  >
                     <option value='Select your intrest'>Select your intrest</option>
                    <option value='Fat Loss'>Fat Loss</option>
                    <option value='Muscle Build'>Muscle Build</option>
                    <option value='Gain Weight'>Gain Weight</option>
                    <option value='Exercise'>Exercise</option>
                  </select>
                  {errors.options && touched.options ? (<p className="text-danger">{errors.options}</p>) : null}
                </div>
                <div className="form-group py-3">
                  <label htmlFor="bio">Tell us about yourself</label>
                  <textarea
                    type="text"
                    className="form-control bg-transparent text-white placeholder-wave"
                    id="bio"
                    name="bio"
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us about yourself"
                  ></textarea>
                  {errors.bio && touched.bio ? (<p className="text-danger">{errors.bio}</p>) : null}

                </div>
                <button type="submit" className="btn  btn-outline-warning">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
