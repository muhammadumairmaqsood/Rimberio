import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AdmissionForm = () => {
  const formik = useFormik({
    initialValues: {
      interest: "",
      studentName: "",
      currentGrade: "",
      age: "",
      school: "",
      disability: "",
      parentName: "",
      occupation: "",
      address: "",
      contact: "",
      email: "",
      aboutus: "",
    },

    validationSchema: Yup.object({
      interest: Yup.string().required("Required"),
      studentName: Yup.string().min(3, "Min 3 chars").required("Required"),
      currentGrade: Yup.string().required("Required"),
      age: Yup.number().typeError("Must be number").required("Required"),
      school: Yup.string().required("Required"),
      disability: Yup.string().required("Required"),
      parentName: Yup.string().required("Required"),
      occupation: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      contact: Yup.string()
        .matches(/^[0-9]+$/, "Only numbers allowed")
        .min(10, "Min 10 digits")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      aboutus: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log("FORM DATA:", values);
    },
  });

  const getInputClass = (name) =>
    `w-full px-4 py-3 rounded-xl border transition focus:outline-none focus:ring-2
    ${
      formik.touched[name] && formik.errors[name]
        ? "border-red-500 focus:ring-red-500"
        : formik.touched[name] && !formik.errors[name]
          ? "border-green-500 focus:ring-green-500"
          : "border-gray-300 focus:ring-black"
    }`;

  return (
    <div className="w-full my-[20px] md:my-[70px] bg-card rounded-md">
      <div className="w-[96%] mx-auto md:w-[70%] ">
        <h3 className="text-lg md:text-2xl lg:text-3xl pt-5 text-center font-semibold">
          Cambridge Admission Inquiry Form
        </h3>

        <form onSubmit={formik.handleSubmit} className="py-[30px] space-y-4">
          {/* Interest */}
          <div className="mb-5">
            <label>Interest In Admission *</label>
            <div className="flex gap-4 mt-5">
              {["Kindergarten", "Grade 1", "Grade 2"].map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    name="interest"
                    value={item}
                    onChange={formik.handleChange}
                  />{" "}
                  {item}
                </label>
              ))}
            </div>
            {formik.touched.interest && formik.errors.interest && (
              <p className="text-red-500 text-sm">{formik.errors.interest}</p>
            )}
          </div>

          {/* Student Name + Grade */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
                className={getInputClass("studentName")}
              />
              {formik.touched.studentName && formik.errors.studentName && (
                <p className="text-red-500 text-sm">
                  {formik.errors.studentName}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="currentGrade"
                placeholder="Current Grade Level"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentGrade}
                className={getInputClass("currentGrade")}
              />
              {formik.touched.currentGrade && formik.errors.currentGrade && (
                <p className="text-red-500 text-sm">
                  {formik.errors.currentGrade}
                </p>
              )}
            </div>
          </div>

          {/* Age + School */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="age"
                placeholder="Age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                className={getInputClass("age")}
              />
              {formik.touched.age && formik.errors.age && (
                <p className="text-red-500 text-sm">{formik.errors.age}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="school"
                placeholder="School"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.school}
                className={getInputClass("school")}
              />
              {formik.touched.school && formik.errors.school && (
                <p className="text-red-500 text-sm">{formik.errors.school}</p>
              )}
            </div>
          </div>

          {/* Disability */}
          <div>
            <label>Learning Disability *</label>
            <div className="flex gap-4">
              {["Yes", "No"].map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    name="disability"
                    value={item}
                    onChange={formik.handleChange}
                  />{" "}
                  {item}
                </label>
              ))}
            </div>
            {formik.touched.disability && formik.errors.disability && (
              <p className="text-red-500 text-sm">{formik.errors.disability}</p>
            )}
          </div>

          {/* Parent + Occupation */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="parentName"
              placeholder="Parent/ Guardian's Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.parentName}
              className={getInputClass("parentName")}
            />
            <input
              type="text"
              name="occupation"
              placeholder="Parent/ Guardian's Occupation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occupation}
              className={getInputClass("occupation")}
            />
          </div>

          {/* Address */}
          <textarea
            name="address"
            placeholder="Parent/ Guardian's Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className={getInputClass("address")}
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500 text-sm">{formik.errors.address}</p>
          )}

          {/* Contact + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact}
                className={getInputClass("contact")}
              />
              {formik.touched.contact && formik.errors.contact && (
                <p className="text-red-500 text-sm">{formik.errors.contact}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={getInputClass("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
          </div>

          {/* About Us */}
          <div>
            <label>How did you hear about us *</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Social Media",
                "Billboard",
                "Friends & Family",
                "Blogger",
                "Any Other",
              ].map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    name="aboutus"
                    value={item}
                    onChange={formik.handleChange}
                  />{" "}
                  {item}
                </label>
              ))}
            </div>
            {formik.touched.aboutus && formik.errors.aboutus && (
              <p className="text-red-500 text-sm">{formik.errors.aboutus}</p>
            )}
          </div>

          <button className="px-4 py-2 bg-secondary cursor-pointer text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
