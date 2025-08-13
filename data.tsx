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
    title: "Event Management System",
    image: "/events-1.png",
    description: "Web app for organizing events with tools for managing organizers, attendees, sponsors, and real-time registration—all from a unified dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind", ".NET", "SQL Server"],
    urlGithub: "https://github.com/Gaitan19/Events-management-clientApp",
    urlDemo: "https://events-management-evanks.netlify.app/"
  },
  {
    id: 1,
    title: "Food Delivery Platform",
    image: "/foodingly-1.png",
    description: "App that merges recipe discovery with ordering features. Users browse, save recipes, generate lists, manage carts, and engage via reviews and blogs.",
    technologies: ["Next.js", "SCSS", "Bootstrap", "Context API"],
    urlGithub: "https://github.com/Gaitan19/foodingly-HW",
    urlDemo: "https://foodingly-evanks.netlify.app/",
  },
  {
    id: 2,
    title: "Asset Loan API",
    image: "/borrowing-1.jpg",
    description: "Backend API that handles inventory loans, request approvals, secure JWT access, and detailed tracking of item availability and return lifecycle.",
    technologies: [".NET", "Entity Framework", "SQL Server", "JWT"],
    urlGithub: "https://github.com/Gaitan19/BorrowingSystemAPI",
    urlDemo: "http://apiborrowing.somee.com/swagger/index.html",
  },
  {
    id: 3,
    title: "Digital Library System",
    image: "/library-mangement-1.png",
    description: "Library app for managing users, books, and borrowing limits with responsive filters, smooth modals, and real-time feedback for better UX.",
    technologies: ["Next.js", "TypeScript", "Tailwind", ".NET", "SQL Server"],
    urlGithub: "https://github.com/Gaitan19/library-management-CientApp",
    urlDemo: "https://library-management-app-evanks.netlify.app/",
  },
  {
    id: 4,
    title: "Marvel Universe Website",
    image: "/marvel-1.png",
    description: "Static site that showcases Marvel content using BEM, SASS, and Bootstrap. Offers multi-page navigation with simple JavaScript enhancements.",
    technologies: ["HTML", "JavaScript", "SASS", "BEM"],
    urlGithub: "https://github.com/Gaitan19/MarvelWebsite",
    urlDemo: "https://grand-pony-15914b.netlify.app/",
  },
  {
    id: 5,
    title: "Pokédex Pro",
    image: "/pokemon-1.png",
    description: "Interactive Pokédex built with GraphQL and Redux. Users can search, filter, and explore Pokémon, items, and moves with full detail and speed.",
    technologies: ["Next.js", "GraphQL API", "Redux Toolkit", "SASS"],
    urlGithub: "https://github.com/Gaitan19/pokemon-site",
    urlDemo: "https://pokemon-evanks.netlify.app/",
  },
  {
    id: 8,
    title: "TrackIt",
    image: "/borrowing-client-1.png",
    description: "Client-side app for managing item loans with dashboards, user roles, real-time updates, and request workflows via full API integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React Query", "JWT"],
    urlGithub: "https://github.com/Gaitan19/BorrowingSystem-ClientApp",
    urlDemo: "https://borrowing-system-client-app-yh8k.vercel.app/"
  },
  {
    id: 6,
    title: "Task Master Pro",
    image: "/todo-1.png",
    description: "Task manager with secure login, offline support, and Next.js ISR to ensure stable and efficient performance with near-perfect uptime.",
    technologies: ["Next.js", "SCSS", "JWT", "Bootstrap"],
    urlGithub: "https://github.com/Gaitan19/Todo-React",
    urlDemo: "https://todo-react-evanks.netlify.app/login",
  },
];

export const workExperiences = [
  {
    id: 1,
    role: "Freelance Web Developer",
    company: "ECOTEC – Production Management",
    duration: "July 2025 - August 2025",
    responsibilities: [
      "I participated in the development of a comprehensive web application for the daily record of production of construction materials, with generation of administrative reports for bond calculation.",
      "Implemented full CRUD operations for multiple system entities, applying ASP.NET Core 6 (MVC), SQL Server, Dapper, DTOs, ViewModels, repositories, and services.",
      "I contributed to the development of report modules, implementing independent views (create, edit, details and PDF generation by date range) and adapting functionalities to user profiles such as production managers, operators and supervisors.",
      "Elaborated and optimized SQL queries and scripts to improve performance in data collection and processing.",
      "Performed functional tests by entering data and verifying validations to ensure the absence of errors or failures in the system.",
      "I participated in the deployment of the application in the \"Somee\" hosting, allowing the end user to carry out tests prior to putting it into production.",
      "I used tools like Visual Studio 2022, SQL Server Management Studio, and version control with Git.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer | Backend Developer",
    company: "Smart Business Solutions (SMBS)",
    duration: "May 2023 - June 2025",
    responsibilities: [
      "Developed landing pages using Next.js, SCSS, Bootstrap, and Tailwind CSS.",
      "Implemented REST APIs using ASP.NET, LINQ, SQL Server, and JWT.",
      "Used coding tools such as Visual Studio Code and Visual Studio 2022, along with database management in SQL Server Management Studio.",
      "Designed an inventory solution that reduced entry and exit registration time by 40%.",
      "Utilized tools like Visual Studio, Postman, and version control with Git.",
      "Participated in agile teams managed with Jira.",
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "University Project",
    duration: "May 2022",
    responsibilities: [
      "Inventory Manager: C# program that tracks stock for a hardware store, allows queries on available and out-of-stock items, and enables merchandise additions. The data is stored in a database created with SQL Server.",
      "Technologies used: .NET, C#, SQL Server Database, Visual Studio 2022.",
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
        value: 100,
      },
      {
        name: "CSS",
        subtitle: "Intermedio",
        value: 100,
      },
      {
        name: "JavaScript",
        subtitle: "Experimentado",
        value: 100,
      },
      {
        name: "TypeScript",
        subtitle: "Experimentado",
        value: 100,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Experimentado",
        value: 100,
      },
      {
        name: "React",
        subtitle: "Experimentado",
        value: 100,
      },
      {
        name: "Next JS",
        subtitle: "Experimentado",
        value: 100,
      },
      {
        name: "Vue JS",
        subtitle: "Experimentado",
        value: 100,
      },
      {
        name: "Bootstrap",
        subtitle: "Basic",
        value: 100,
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
        value: 100,
      },
      {
        name: "SQL Server",
        subtitle: "Intermedio",
        value: 100,
      },
      {
        name: "C#",
        subtitle: "Basic",
        value: 100,
      },
      {
        name: "MySQL",
        subtitle: "Experimentado",
        value: 100,
      },
      {
        name: "ASP.NET",
        subtitle: "Experimentado",
        value: 100,
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
