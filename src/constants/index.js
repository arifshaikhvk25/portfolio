import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nextjs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
  ];
  
  const services = [
    {
      title: "Javascript Developer",
      icon: javascript,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Nextjs Developer",
      icon: nextjs,
    },
    {
      title: "Shopify Developer",
      icon: shopify,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"Nextjs",
      icon:nextjs
    },
    // {
    //   // name: "TypeScript",
    //   // icon: typescript,
    // },
    // {
    //   // name: "Redux Toolkit",
    //   // icon: redux,
    // },
    // {
    //   // name: "Node JS",
    //   // icon: nodejs,
    // },
    // {
    //   // name: "MongoDB",
    //   // icon: mongodb,
    // },
    // {
    //   // name: "figma",
    //   // icon: figma,
    // },
    // {
    //   // name: "docker",
    //   // icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Todo List Crud",
      company_name: " Tech stack: ReactJS, uuid",
      // icon: shopify,
      icon: "https://todo-list-crud-two.vercel.app/",
      iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        "we can Create, Read, Update and Delete (crud)",
        "uuid is used to generate a unique id for the list",
        "Delete all button will delete all the existing list",
        "list can be added with by pressing enter key and edited list can also be added with enter key",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      // source_code_link: "https://todo-list-crud-two.vercel.app/",

    },
    {
      title: "Landing Page for Eco Friendly Product Business",
      company_name: " Tech stack: ReactJS, react-icons, AOS(Animate On Scroll Library",
      icon: "https://arifshaikh-earthly.vercel.app/",
      iconBg: "#383E56",
      points: [
        "Navigation bar that collapse in tab, mobile device and we get hamburger menu fully responsive website",
        "Built with functional components",
        "scroll animation is used in service section to introduce products and in about section",
        "footer section where clients can connect",
        "react-icons is used for hamburger menu and social media icons in footer",
      ],
    },
    {
      title: "Image Gallery",
      company_name: "Tech stack: ReactJS, Unsplash API",
      icon: "https://image-gallery-unsplash-api-nine.vercel.app/",
      iconBg: "#383E56",
      points: [
        "In this app we can search any images",
        "images are coming from the Unsplash API",
        "there are two search field one at the navbar and another in the main user can search on any of the search bar",
        "user can click the image it will open to new tab from that user can easily downlaod the image",
        "loading will show when the data will fetch from API",
      ],
    },
    {
      title: "Dashboard ",
      company_name: " Tech stack: NextJs, ChartJS, TailwindCSS",
      icon: "https://dashboard-project-nextjs.vercel.app/",
      iconBg: "#383E56",
      points: [
        "Used ChartJS for the chart bar for a better understanding and a great experience for the user",
        "A recent orders tab on the right side shows all the orders",
        "Customers route and Orders route with next/link so that it will not reload the page",
        "Fully responsive dashboard across all devices",
      ],
    },
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      // name: "Software development Internship",
      description:
      "I completed a 4-month software development internship, worked as a Shopify developer and learned about Shopify Liquid. During a 4-month software development internship, I gained valuable experience working as a Shopify developer and significantly improved my skills in Shopify Liquid, a key component of the Shopify tech stack. ",
      tags: [
        // {
        //   name: "react",
        //   color: "blue-text-gradient",
        // },
        // {
        //   name: "uuid",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      // image: carrent,
      // source_code_link: "https://github.com/",
      // source_code_link1: "https://todo-list-crud-two.vercel.app/",
    },
    // {
    //   name: "Landing Page for Eco Friendly Product Business",
    //   description:
    //   "Navigation bar that collapse in tab, mobile device and we get hamburger menu fully responsive website Built with functional components scroll animation is used in service section to introduce products and in about section footer section where clients can connect react-icons is used for hamburger menu and social media icons in footer",
    //   tags: [
    //     {
    //       name: "ReactJS",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "react-icons",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "AOS(Animate On Scroll Library",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   // image: jobit,
    //   // source_code_link: "https://arifshaikh-earthly.vercel.app/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };