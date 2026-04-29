import icons from "@/utils/icons";

const GetInTouch = () => {
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
  return (
    <div className="w-full px-10 py-[80px] flex flex-col lg:flex-row items-center justify-center gap-3 bg-background">
      <div className="lg:w-1/2 w-full">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">
          Get in Touch
        </h1>
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
        <iframe
          src="https://www.google.com/maps?q=Plot+3+Green+Drive+10+km+Raiwind+Road+Lahore&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GetInTouch;
