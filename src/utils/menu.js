import images from "./images";
export const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Programmes",
    submenu: [
      {
        id: 21,
        subtitle: "Early Years Programme",
        sublink: "/early-years",
      },
      {
        id: 22,
        subtitle: "Primary Years Programme",
        sublink: "/primary-years",
      },
      {
        id: 23,
        subtitle: "Cambridge Primary",
        sublink: "/cambridge-primary",
      },
    ],
  },
  {
    id: 3,
    title: "About Us",
    link: "/about",
  },
  {
    id: 4,
    title: "Admissions",
    link: "/admissions",
  },
  {
    id: 5,
    title: "Careers",
    link: "/careers",
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
  },
];
export const whychoosedata = [
  {
    id: 1,
    img: images.nurturing,
    title: "Nurturing Environment",
    para: "Safe, supportive spaces where every child feels valued and loved",
  },
  {
    id: 2,
    img: images.experienced,
    title: "Experienced Educators",
    para: "Trained in early childhood development and IB pedagogy",
  },
  {
    id: 3,
    img: images.world,
    title: "World-Class Facilities",
    para: "17-acre campus with dedicated early years learning spaces",
  },
  {
    id: 4,
    img: images.small,
    title: "Small Class Sizes",
    para: "Personalized attention for each child's unique needs",
  },
  {
    id: 5,
    img: images.rich,
    title: "Rich Co-Curricular",
    para: "Music, art, movement, and outdoor exploration",
  },
  {
    id: 6,
    img: images.smooth,
    title: "Smooth Transition",
    para: "Seamless progression to our IB Primary Years Programme",
  },
];
export const data = [
  {
    id: 1,
    title: "Academics",
    points: [
      "International Baccalaureate - Primary Years Programme (IB degree recognized in Europe, GCC, Canada)",
      "Inquiry Based Learning",
      "STEM",
    ],
  },
  {
    id: 2,
    title: "Sports Programme",
    points: [
      "Indoor Riding Arena",
      "Outdoor Riding Arena",
      "Swimming",
      "Taekwondo",
    ],
  },
  {
    id: 3,
    title: "Future Skills Programme",
    points: [
      "Robotics",
      "Diploma of French Language Studies (DELF) in collaboration with Alliance Francaise",
      "Piano (Collaboration with School of Music)",
    ],
  },
  {
    id: 4,
    title: "Life-Skills Programme",
    points: [
      "Kitchen Garden",
      "Young Chef Programme (Table Manners short course included)",
      "Eco-bamboo Programme (In-house Bamboo Workshop)",
    ],
  },
  {
    id: 5,
    title: "Extra-Curricular Programme",
    points: [
      "Excursion/Field Trips (accompanied with Army Grade Security Personnel)",
      "Expert-Talk Sessions",
      "Annual Play",
    ],
  },
];
