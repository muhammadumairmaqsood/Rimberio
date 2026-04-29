import icons from "@/utils/icons";
import images from "@/utils/images";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const Careers = () => {
  const formik = useFormik({
    initialValues: {
      firstlastName: "",
      gender: "",
      qualification: "",
      applying: "",
      document: null,
      additional: "",
      address: "",
      contact: "",
      email: "",
    },

    validationSchema: Yup.object({
      firstlastName: Yup.string().min(3, "Min 3 chars").required("Required"),
      gender: Yup.string().required("Gender is required"),
      qualification: Yup.string().required("Required"),
      applying: Yup.string().required("Required"),
      document: Yup.mixed()
        .required("PDF is required")
        .test("fileType", "Only PDF allowed", (value) => {
          return value && value.type === "application/pdf";
        })
        .test("fileSize", "File too large (max 2MB)", (value) => {
          return value && value.size <= 2 * 1024 * 1024;
        }),
      additional: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      contact: Yup.string()
        .matches(/^[0-9]+$/, "Only numbers allowed")
        .min(10, "Min 10 digits")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
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
    <div className="w-full">
      <div
        className="relative w-full  flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.community})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-2xl font-bold   md:text-5xl lg:text-7xl text-white font-semibold">
            Careers
          </h1>
          <p className="text-[12px] w-[90%] lg:w-[80%] mx-auto md:text-[18px] mt-2 md:mt-4 mb-12 text-white">
            Join our team of dedicated educators and professionals in shaping
            the future of global citizens.
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto md:w-[60%] my-[30px] md:my-[80px]">
        <h3
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-lg md:text-2xl lg:text-3xl font-semibold text-center"
        >
          Work with Us
        </h3>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-[13px] md:text-[14px] text-muted-foreground text-center my-5"
        >
          At Rimberio International School, we are always looking for
          passionate, innovative individuals who are committed to the IB
          philosophy and excellence in education.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="w-full mx-auto md:w-[80%] flex gap-2 my-[30px]"
        >
          <div className="w-full bg-card rounded-md p-5">
            <h3 className="text-[14px] md:text-2xl font-semibold text-secondary py-2">
              Growth
            </h3>
            <p className="text-[12px] md:text-[13px] text-muted-foreground">
              Professional development and career advancement opportunities.
            </p>
          </div>{" "}
          <div className="w-full bg-card rounded-md p-5">
            <h3 className="text-[14px] md:text-2xl font-semibold text-secondary py-2">
              Support
            </h3>
            <p className="text-[12px] md:text-[13px] text-muted-foreground">
              A collaborative and supportive work environment.
            </p>
          </div>
        </div>
        <div className="w-full mx-auto md:w-[80%] flex flex-col items-center justify-center">
          <h3
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-lg md:text-2xl lg:text-3xl font-semibold text-center"
          >
            Application Process
          </h3>
          <div className="flex flex-col gap-5 my-8">
            {[
              "Submit your application via the form on this page.",
              "Our HR team will review your qualifications and experience.",
              "Shortlisted candidates will be contacted for an initial interview.",
              "Final rounds include class demonstrations and principal interviews.",
            ].map((item, index) => (
              <p
                data-aos="fade-right"
                data-aos-delay={index * 150}
                key={index}
                className="flex items-center gap-2"
              >
                <icons.arrow size={17} className="text-secondary" />
                <span className="text-[14px] font-light tracking-wide">
                  {item}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* //!Form */}
      <div className="my-[20px] md:my-[70px] bg-card rounded-md">
        <div className="w-[96%] mx-auto md:w-[70%] ">
          <form onSubmit={formik.handleSubmit} className="py-[30px] space-y-4">
            {/* First and Last Name + Email*/}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="firstlastName"
                  placeholder="First and Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstlastName}
                  className={getInputClass("firstlastName")}
                />
                {formik.touched.firstlastName &&
                  formik.errors.firstlastName && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.firstlastName}
                    </p>
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
            {/* Gender+ Phone */}
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
                  <p className="text-red-500 text-sm">
                    {formik.errors.contact}
                  </p>
                )}
              </div>
              <div className="w-full">
                <select
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  className={getInputClass("gender")}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                {formik.touched.gender && formik.errors.gender && (
                  <p className="text-red-500 text-sm">{formik.errors.gender}</p>
                )}
              </div>
            </div>
            {/* Qualification + Applying */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <select
                  name="qualification"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.qualification}
                  className={getInputClass("qualification")}
                >
                  <option value="">Qualification Level</option>
                  <option value="Intermediate">Intermediate/A-Level</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="PHD">PHD</option>
                </select>

                {formik.touched.qualification &&
                  formik.errors.qualification && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.qualification}
                    </p>
                  )}
              </div>
              <div className="w-full">
                <select
                  name="applying"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.applying}
                  className={getInputClass("applying")}
                >
                  <option value="">Applying For</option>
                  <option value="Teaching">Teaching Position</option>
                  <option value="Administrative">Administrative</option>
                </select>

                {formik.touched.applying && formik.errors.applying && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.applying}
                  </p>
                )}
              </div>
            </div>
            {/* cv upload */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-[50%]">
                <label className="block text-gray-700 dark:text-white font-medium mb-2">
                  Your resume/CV <span className="text-red-500">*</span>
                </label>

                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "document",
                      event.currentTarget.files[0],
                    );
                  }}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border transition
      ${
        formik.touched.document && formik.errors.document
          ? "border-red-500"
          : formik.touched.document && !formik.errors.document
            ? "border-green-500"
            : "border-gray-300"
      }`}
                />

                {formik.touched.document && formik.errors.document && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.document}
                  </p>
                )}
              </div>
              <div className="w-full">
                <textarea
                  name="address"
                  placeholder="Why do you want to work here ?  Cover Letter"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className={getInputClass("address")}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.address}
                  </p>
                )}
              </div>
            </div>

            {/*additional */}
            <textarea
              name="additional"
              placeholder="Any additional information you would like to share?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.additional}
              className={getInputClass("additional")}
            />
            {formik.touched.additional && formik.errors.additional && (
              <p className="text-red-500 text-sm">{formik.errors.additional}</p>
            )}
            <button className="px-4 py-2 bg-secondary cursor-pointer text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* //!Form */}
    </div>
  );
};

export default Careers;
