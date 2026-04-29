import icons from "@/utils/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
const Contact = () => {
  const data = [
    {
      id: 1,
      title: "Phone",
      icn: icons.phone,
      subtitle: "0322-1112222 | 0324-1113333",
    },
    {
      id: 2,
      title: "Email",
      icn: icons.email,
      subtitle: "abc@gmail.com",
    },
    {
      id: 3,
      title: "Office Hours",
      icn: icons.clock,
      subtitle:
        "Monday – Thursday: 8:30 AM – 1:30 PM | Friday: 8:30 AM – 12:30 PM",
    },
    {
      id: 4,
      title: "Location",
      icn: icons.location,
      subtitle: " Rimberio, Gohar Town, 10km main Road, Lahore, Lahore",
    },
  ];
  const formik = useFormik({
    initialValues: {
      Name: "",
      question: "",
      contact: "",
      email: "",
    },

    validationSchema: Yup.object({
      Name: Yup.string().min(3, "Min 3 chars").required("Required"),
      question: Yup.string().required("Required"),
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
      <div className="w-full bg-secondary dark:bg-zinc-900 relative h-52 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-semibold text-center ">
            Contact Us
          </h1>
          <p className="text-[16px] text-white text-center py-3">
            We're here to help. Reach out to us for any inquiries or to schedule
            a visit.
          </p>
        </div>
      </div>
      <div className="w-full px-10 py-[80px] flex flex-col lg:flex-row items-center justify-center gap-8 bg-background">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">
            Get in Touch
          </h1>
          <p className="text-[14px] text-muted-foreground py-1">
            Have a question about our IB programmes or the admissions process?
            Our team is available to assist you.
          </p>
          <div>
            {data.map((item) => (
              <div className="flex items-center w-full justify-start mt-6 gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex gap-3 items-center justify-center">
                  <item.icn size={19} className="text-white" />
                </div>
                <div>
                  <p className="text-[16px] font-medium">{item.title}</p>
                  <span className="cursor-pointer text-zinc-700 dark:text-white">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-92">
          <form onSubmit={formik.handleSubmit} className="py-[30px] space-y-4">
            {/* First and Last Name + Email*/}
            <div className="w-full">
              <input
                type="text"
                name="Name"
                placeholder=" Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
                className={getInputClass("Name")}
              />
              {formik.touched.Name && formik.errors.Name && (
                <p className="text-red-500 text-sm">{formik.errors.Name}</p>
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
              <textarea
                name="question"
                placeholder="Your Question"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.question}
                className={getInputClass("question")}
              />
              {formik.touched.question && formik.errors.question && (
                <p className="text-red-500 text-sm">{formik.errors.question}</p>
              )}
            </div>
            <button className="px-4 py-2 bg-secondary cursor-pointer text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
