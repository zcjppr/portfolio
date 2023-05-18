import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Randy Chen',
  title: "Hi all, I'm Randy",
  description:
    "I'm passionate Full Stack web developer having Over 5 years of experience developing modern web applications using HTML5, CSS3, Javascript, React, Redux, React Router, Node.js, Webpack, Ajax, TypeScript, Babel, Sass, Bootstrap, jQuery, ES6 syntax, JSON, etc",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Washington State University',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: '2018 - 2021',
    desc: '',
    grade: 'GPA 3.7',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Virta Health',
    companyLogo: '/img/icons/common/virta.png',
    date: 'June 2021 - Present',
    desc: '',
    descBullets: [
    	"Develop medium to large scale, initiatives in the Virta mobile application utilizing React Native, TypeScript, and platform specific tooling",
    	"Modernize existing screens and components to improve our patient experience and support our internationalization and localization efforts",
    	"Collaborate with other engineering team members through knowledge sharing, pair programming, and giving feedback in code reviews",
    	"Propose and implement multiple process/product improvements to make the engineering team and developer experience even better",
    ],
  },
  {
    role: 'Frontend Software Engineer',
    company: 'Placements.io',
    companyLogo: '/img/icons/common/placement.png',
    date: 'June 2019 - May 2021',
    desc: '',
    descBullets: [
    	"Took responsibilities for communicating with clients to understand the requirements for the website, writing project design documents and project plan documents.",
    	"Develop responsive user interface components using React, Redux, and other third party libraries.",
    	"Wrote test cases intended for unit and integration tests of the application with Jest",
    	"Respond and fix bugs and issues related to demo applications, data processing monitoring/test modules and dashboards.",
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'PatientPoint',
    companyLogo: '/img/icons/common/patient.jpg',
    date: 'May 2018 - May 2019',
    desc: '',
    descBullets: [
    	"Perform software development on Front End Applications leveraging a test-driven development pattern",
    	"Iteratively build, prototype, and automate core datasets, reports, and dashboards to provide insights at scale, solving for the team’s analytical needs",
    	"Collaborate with Design Leads and Product Managers to turn wireframes and mockups into responsive, engaging, and intuitive user experiences",
    	"Advise teams about implementation best practices, mentor colleagues, and provide high quality code reviews",
    ],
  },
];

// export const projects: ProjectType[] = [
//   {
//     name: 'developer-portfolio',
//     desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
//     github: 'https://github.com/1hanzla100/developer-portfolio',
//     link: 'https://developer-portfolio-1hanzla100.vercel.app/',
//   },
//   {
//     name: 'AtlasMart',
//     desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
//     github: 'https://github.com/1hanzla100/Django-React-Marketplace',
//   },
//   {
//     name: 'Technota (Forum)',
//     desc: 'Get hands-on experience in technical skills with Technota',
//     github: 'https://github.com/1hanzla100/django-react-forum',
//   },
//   {
//     name: 'Shopaza (Ecommerce)',
//     desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
//     github: 'https://github.com/1hanzla100/Django-ecommerce',
//   },
// ];

// export const feedbacks: FeedbackType[] = [
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Randy Chen',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Randy Chen',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
  ],
};
