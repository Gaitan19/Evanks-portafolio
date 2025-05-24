import {
  BellPlus,
  BookText,
  Briefcase,
  Brush,
  Code2,
  CodeSquare,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const dataAboutMe = [
  {
    id: 1,
    name: "Experience",
    icon: <Briefcase />,
    description: "+2 years of experience",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={20} />,
    link: "#about-me",
  },
  // {
  //   id: 3,
  //   title: "Book",
  //   icon: <BookText size={20} />,
  //   link: "#services",
  // },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={20} />,
    link: "#portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

export const dataSlider = [
  {
    id: 1,
    url: "/slider-1.jpg",
  },
  {
    id: 2,
    url: "/slider-2.png",
  },
  {
    id: 4,
    url: "/slider-4.jpg",
  },
];


export const dataPortfolio = [
  {
    id: 7,
    title: "Events Management",
    image: "/events-1.png",
    description: "Full-stack platform for event management with real-time synchronization between modern UI and REST API.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      "SQL Server",
      "REST API"
    ],
    urlGithub: "https://github.com/Gaitan19/Events-management-clientApp",
    urlDemo: "https://events-management-evanks.netlify.app/"
  },
  {
    id: 1,
    title: "Foodingly",
    image: "/foodingly-1.png",
    description: "Food ordering management application with an intuitive interface.",
    technologies: ["Next.js", "SCSS", "Bootstrap", "JavaScript"],
    urlGithub: "https://github.com/Gaitan19/foodingly-HW",
    urlDemo: "https://foodingly-evanks.netlify.app/",
  },
  {
    id: 2,
    title: "Borrowing System API",
    image: "/borrowing-1.jpg",
    description: "Loan system for managing users, assets and documents.",
    technologies: ["C#","ASP.NET", "SQL Server", "JWT", "Swagger"],
    urlGithub: "https://github.com/Gaitan19/BorrowingSystemAPI",
    urlDemo: "http://apiborrowing.somee.com/swagger/index.html",
  },
  {
    id: 3,
    title: "Library Management",
    image: "/library-mangement-1.png",
    description: "A system that facilitates book borrowing and returns.",
    technologies: ["React", "TypeScript", "Tailwind", "ASP.NET", "SQL"],
    urlGithub: "https://github.com/Gaitan19/library-management-CientApp",
    urlDemo: "https://library-management-app-evanks.netlify.app/",
},
  {
    id: 4,
    title: "Marvel Website",
    image: "/marvel-1.png",
    description: "Portal with information and characters from the Marvel universe.",
    technologies: ["HTML5","SASS", "JavaScript", "Bootstrap"],
    urlGithub: "https://github.com/Gaitan19/MarvelWebsite",
    urlDemo: "https://grand-pony-15914b.netlify.app/",
  },
  {
    id: 5,
    title: "Pokemon App",
    image: "/pokemon-1.png",
    description: "Explore and visualize Pokémon information with a friendly UI.",
    technologies: ["Next.js","React", "GraphQL", "Redux", "SASS"],
    urlGithub: "https://github.com/Gaitan19/pokemon-site",
    urlDemo: "https://pokemon-evanks.netlify.app/",
  },
  {
    id: 8,
    title: "Borrowing System Client",
    image: "/borrowing-client-1.png",
    description: "Modern frontend for item borrowing management with JWT authentication, role-based access, and real-time analytics.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "React Query",
      "REST API",
      "JWT"
    ],
    urlGithub: "https://github.com/Gaitan19/BorrowingSystem-ClientApp",
    urlDemo: "https://borrowing-system-client-app-yh8k.vercel.app/"
  },
  {
    id: 6,
    title: "Todo App",
    image: "/todo-1.png",
    description: "Task organization application with authentication.",
    technologies: ["Next.js", "React", "SASS",'JavaScript', "Bootstrap"],
    urlGithub: "https://github.com/Gaitan19/Todo-React",
    urlDemo: "https://todo-react-evanks.netlify.app/login",
  },
];

export const workExperiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "University Project",
    duration: "May 2022",
    responsibilities: [
      "Inventory Manager: C# program that tracks stock for a hardware store, allows queries on available and out-of-stock items, and enables merchandise additions. The data is stored in a database created with SQL Server.",
      "Technologies used: .NET, C#, SQL Server Database, Visual Studio 2022.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer | Backend Developer",
    company: "Smart Business Solutions (SMBS)",
    duration: "June 2023 - Present",
    responsibilities: [
      "Developed landing pages using Next.js, SCSS, Bootstrap, and Tailwind CSS.",
      "Implemented REST APIs using ASP.NET, LINQ, SQL Server, and JWT.",
      "Used coding tools such as Visual Studio Code and Visual Studio 2022, along with database management in SQL Server Management Studio.",
      "Designed an inventory solution that reduced entry and exit registration time by 40%.",
      "Utilized tools like Visual Studio, Postman, and version control with Git.",
      "Participated in agile teams managed with Jira.",
    ],
  },
];

export const dataExperience = [
  {
    id: 1,
    title: "Frontend Development  💄",
    experience: [
      {
        name: "HTML",
        subtitle: "Experimentado",
        value: 90,
      },
      {
        name: "CSS",
        subtitle: "Intermedio",
        value: 85,
      },
      {
        name: "JavaScript",
        subtitle: "Experimentado",
        value: 90,
      },
      {
        name: "TypeScript",
        subtitle: "Experimentado",
        value: 90,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Experimentado",
        value: 70,
      },
      {
        name: "React",
        subtitle: "Experimentado",
        value: 70,
      },
      {
        name: "Next JS",
        subtitle: "Experimentado",
        value: 70,
      },
      {
        name: "Vue JS",
        subtitle: "Experimentado",
        value: 70,
      },
      {
        name: "Bootstrap",
        subtitle: "Basic",
        value: 80,
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development  🥷",
    experience: [
      {
        name: "Node JS",
        subtitle: "Experimentado",
        value: 80,
      },
      {
        name: "SQL Server",
        subtitle: "Intermedio",
        value: 75,
      },
      {
        name: "C#",
        subtitle: "Basic",
        value: 80,
      },
      {
        name: "MySQL",
        subtitle: "Experimentado",
        value: 60,
      },
      {
        name: "ASP.NET",
        subtitle: "Experimentado",
        value: 80,
      },
      // {
      //     name: "Django",
      //     subtitle: "Basic",
      //     value: 60,
      // },
    ],
  },
];

export const dataServices = [
  {
    id: 1,
    title: "Desarrollo Web",
    icon: <PanelsTopLeft />,
    features: [
      {
        name: "Desarrollo de sitios web personalizados",
      },
      {
        name: "Diseño y desarrollo responsive",
      },
      {
        name: "Optimización SEO",
      },
      {
        name: "Desarrollo de aplicaciones web",
      },
      {
        name: "Gestión de contenido",
      },
      {
        name: "Comercio electrónico",
      },
      {
        name: "Mantenimiento y soporte continuo",
      },
    ],
  },
  {
    id: 2,
    title: "Creación de contenido",
    icon: <BellPlus />,
    features: [
      {
        name: "Redacción de contenido original y de calidad",
      },
      {
        name: "Creación de vídeos atractivos y dinámicos",
      },
      {
        name: "Diseño gráfico para una imagen impactante",
      },
      {
        name: "Edición profesional de textos y materiales visuales",
      },
      {
        name: "Estrategias de marketing de contenidos efectivas",
      },
      {
        name: "Producción de podcasts informativos y entretenidos",
      },
      {
        name: "Generación de infografías claras y visualmente atractivas",
      },
      {
        name: "Fotografía profesional para capturar momentos excepcionales",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <Brush />,
    features: [
      {
        name: "Diseño intuitivo para una experiencia de usuario fluida",
      },
      {
        name: "Prototipado interactivo para visualizar la interfaz",
      },
      {
        name: "Investigación de usuarios para comprender necesidades y expectativas",
      },
      {
        name: "Optimización de la usabilidad para mejorar la accesibilidad",
      },
      {
        name: "Pruebas de usabilidad para evaluar la experiencia",
      },
      {
        name: "Diseño responsive para adaptarse a diferentes dispositivos",
      },
    ],
  },
];

export const dataContact = [
  {
    id: 1,
    title: "Phone",
    subtitle: "+505 5808-3149",
    link: "tel:+50558083149",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/Gaitan19",
    link: "https://github.com/Gaitan19",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "kenleyjos619@gmail.com",
    link: "mailto:kenleyjos619@gmail.com",
    icon: <Inbox />,
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile-1.jpeg",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile-3.jpeg",
  },
];
