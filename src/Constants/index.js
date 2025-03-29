

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'tanisha',
        position: 'CEO of modinfra',
        img: 'assets/review1.png',
        review:
            'Priya’s coding skills are top-notch! She built a sleek, fast, and user-friendly website for our business. Super professional and easy to work with!'
    },
   
    {
        id: 3,
        name: 'Dheeraj jha',
        position: 'CEO of giftAura by PriDe',
        img: 'assets/review3.png',
        review:
           'GiftAura by Pride" offers a fantastic range of unique and high-quality gifts! The packaging is elegant, and the delivery is super fast. Highly recommended!',

    },
  
];

export const myProjects = [
   
    {
    "title": "BookStore - Your Gateway to Knowledge",
    "desc": "An interactive platform designed for book lovers and learners. Explore a vast collection of educational resources, courses, and books to enhance your knowledge every day.",
    "subdesc": "BookStore offers a seamless learning experience with personalized recommendations, easy navigation, and engaging content. Stay ahead with new courses and resources curated just for you." ,
   href:"https://bookstore-app-three-bay.vercel.app/",
texture: '/textures/project/bookprojects.mp4',
        logo: '/assets/booklogo.svg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'postman',
                path: '/assets/postman-icon.png',
            },
            {
                id: 4,
                name: 'mongoDB',
                path: '/assets/mongo.png',
            },
        ],
    },
    {

        "title": "Client-Centric Projects from My Previous Workplaces",
        "desc": "A showcase of projects tailored to meet client needs, ensuring seamless functionality, user-friendly design, and scalable solutions.",
        "subdesc": "Each project was developed with a deep understanding of client requirements, leveraging modern technologies to create efficient, high-performance applications." ,
    texture: '/textures/project/Workjob.mp4',
        logo: '',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'javascript',
                path: '/assets/javascript.png',
            },
            {
                id: 2,
                name: 'css',
                path: 'assets/css-3.png',
            },
            {
                id: 3,
                name: 'html',
                path: '/assets/html.png',
            },

        ],
    },
    

    {
        "title": "Trendify - Your One-Stop E-Commerce Destination",

       "desc": "Trendify is a cutting-edge e-commerce platform designed to offer a seamless shopping experience. Browse top trending products, enjoy secure payments, and get fast deliveries—all in one place.",
        
        "subdesc":"Built with React, Next.js, and Stripe for secure transactions, Trendify ensures a smooth, fast, and user-friendly shopping experience for modern consumers." ,
        href: 'https://mern-ecommerce-lake-one.vercel.app/',
        texture: '/textures/project/project3 (2).mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'GiftAura - Personalized Gifting Platform',
        desc: 'GiftAura is an innovative e-commerce platform that specializes in personalized gifting solutions. With AI-driven customization features, users can create unique gifts tailored to their loved ones effortlessly.',
        subdesc:
            'Developed as a cutting-edge Software-as-a-Service platform using Next.js 14, Tailwind CSS, TypeScript, Framer Motion, and Convex, GiftAura ensures a seamless and engaging shopping experience.',
        href: 'https://giftaura.vercel.app/',
        texture: '/textures/project/project3.mp',
        logo: '/assets/4.png',
        logoStyle: {
            backgroundColor: '#1E1A3B',
            border: '0.2px solid #2A2555',
            boxShadow: '0px 0px 60px 0px #6A5ACD4D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    } ,
            
        

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Frontend Developer',
        pos: 'Heeric technologies llp',
        duration: ' jan 2024 - Present',
        title: "As a Frontend Developer, I specialize in crafting dynamic and responsive user interfaces. My expertise includes building scalable web applications, optimizing performance, and ensuring seamless user experiences.",
        icon: '/assets/react-2.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Web Developer (Freelancer)',
        pos: 'Self-Employed',
        duration: 'part time',
        title: "As a Freelance Web Developer, I design and develop custom websites, ensuring high performance, responsive design, and seamless user experience. I specialize in front-end and back-end technologies to build scalable web solutions for diverse clients.",
        icon: '/assets/web.svg',
        animation: 'victory',
    },

];