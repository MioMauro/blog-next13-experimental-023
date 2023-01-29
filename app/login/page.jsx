'use client'

import { useFormik } from "formik";
import * as Yup from 'yup'

export default function LoginPage() {

//Formik logic
const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    country: "United Kingdom",
    terms: "",
  },

  //Validate form
  validationSchema: Yup.object({
    name: Yup.string()
      .max(20, "Name must be 20 characters or less.")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    terms: Yup.array().required("Terms of service must be checked"),
  }),

  //Submit form
  onSubmit: (values) => {
    console.log("form submitted");
    console.log(values);
    router.push({ pathname: "/success", query: values });
  },
});

  return (      
        <div className='h-screen w-full flex items-center justify-center'>
          <div>
          <form onSubmit={formik.handleSubmit} className='bg-white flex rounded-lg w-full'>
            <div className='flex text-gray-700 p-20 w-full'>              
              <div className='mt-6 w-full'>
              {/* name input field */}
              <div className='m-auto pb-4 w-full'>
                <label className={`block font-latoBold text-sm pb-2 ${formik.errors.name ? "text-red-400" : ""}`} 
                  htmlFor='name'>
                {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                </label>

              <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text" 
              name="name" 
              placeholder="Enter your name"/>
              </div>

              {/* email input field */}
              <div className='pb-4'>
              <label className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email ? "text-red-400" : ""}`} 
              htmlFor='email'>{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
              </label>

              <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500' 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email" 
              name="email" 
              placeholder="Enter your Email"/>
              </div>

              {/* country input field*/}
              <div className='pb-4'>
              <label className='block font-latoBold text-sm pb-2' 
              htmlFor='country'>Country</label>

              <select className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500'
              name='country' value={formik.values.country}
              onChange={formik.handleChange}>                
                <option>Italy</option>
                <option>Europe</option>
                <option>United States</option>
                <option>Asia</option>                
              </select>
              </div>

              {/* terms of services */}
              <div className='pb-4'>
              <label className={`block font-latoBold text-sm pb-2 ${formik.touched.terms && formik.errors.terms ? "text-red-400" : ""}`}  
              htmlFor='terms'>{formik.touched.terms && formik.errors.terms ? formik.errors.terms : "Terms of service"}
              </label>
              
              <div className='flex items-center gap-2'>
                <input onChange={formik.handleChange} type="checkbox" name="terms" value="checked" className='h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500' />
                <p className='text-sm font-latoBold text-gray-500'>I agree to the Terms and Services that my data will be taken and sold</p>
              </div>
              </div>
                  <div>
                    <button type='submit' className='bg-teal-500 text-sm text-white py-3 mt-6 rounded-lg w-full'>Sign n</button>
                  </div>
              </div>
            </div>            
          </form>
          </div>
        </div>      
    
  )
}
