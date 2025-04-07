import { Animation, AppShortcut, AssignmentTurnedIn, BusinessCenter, Chat, Facebook, Headset, Help, Insights, Instagram, Layers, LocationOn, Person, Phone, School, Storage, Twitter, Work } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { title } from "process";

export const menuItems = [
    { item: "Home", path: "/" },
    { item: "About", path: "/about-us" },
    { item: "Jobs", path: "/jobs" },
    { item: "Pages", path: "/pages" },
    { item: "Blog", path: "/blog" },
    { item: "Contact", path: "/contact" },
];

export const pagesSubmenuItems = [
    { label: "My Account", path: "/myaccount" },
    { label: "Candidate Directory", path: "/candidate-directory" },
    { label: "Candidate Profile", path: "/candidate-profile" },
    { label: "Employer Directory", path: "/employer-directory" },
    { label: "Employer Profile", path: "/employer-profile" },
    { label: "Registration", path: "/registration" },
    { label: "Faqs", path: "/faqs" },
];

export const textFieldItem = [
    { value: 'Accounting', title: 'Accounting' },
    { value: 'IT & Technology', title: 'IT & Technology' }
]

export const stats = [
    { label: 'Jobs Available', value: '14.3 K' },
    { label: 'Completed Jobs', value: '4.5 K' },
    { label: 'Worldwide Clients', value: '49 K' },
    { label: 'Total Payout', value: '25 B' },
];

export const steps = [
    {
        icon: <AssignmentTurnedIn sx={{ fontSize: 50, color: '#0859F7' }} />,
        title: 'Register Your Account',
        description: 'You need to create an account to find the best preferred job.',
    },
    {
        icon: <Help sx={{ fontSize: 50, color: '#0859F7' }} />,
        title: 'We Here to Help You',
        description: 'You need to create an account to find the best preferred job.',
    },
    {
        icon: <Person sx={{ fontSize: 50, color: '#0859F7' }} />,
        title: 'Complete Your Profile',
        description: 'You need to create an account to find the best preferred job.',
    },
    {
        icon: <School sx={{ fontSize: 50, color: '#0859F7' }} />,
        title: 'Apply Job or Hire',
        description: 'You need to create an account to find the best preferred job.',
    },
];

export const buttons = [
    { label: 'Accounting', icon: <BusinessCenter size='small' /> },
    { label: 'Commercial', icon: <Layers /> },
    { label: 'IT & Technology', icon: <Storage /> },
    { label: 'Sales & Marketing', icon: <Insights /> },
    { label: 'Support Service', icon: <Headset /> },
    { label: 'UI Designer', icon: <AppShortcut /> },
    { label: 'UX Designer', icon: <Animation /> },
];


export const jobData = [
    {
        category:'Accounting',
        company: 'Company Inc',
        title: 'Shop Manager',
        location: 'New York',
        tags: ['Creative', 'Full Time'],
        salary: '10000-15000',
        deadline: '21st Sep, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Accounting',
        company: 'Marketing Inc',
        title: 'Marketing Manager',
        location: 'Berlin, Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '15000-20000',
        deadline: '22nd Jan, 2024',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Accounting',
        company: 'Business Inc',
        title: 'Marketing Manager',
        location: 'Los Angeles, New York',
        tags: ['Creative', 'Designer', 'Full Time'],
        salary: '20000-25000',
        deadline: '21st May, 2024',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Accounting',
        company: 'Company Inc',
        title: 'Front-End Developer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Commercial',
        company: 'Business Management',
        title: 'Front-End Developer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Commercial',
        company: 'Company Inc',
        title: 'Front-End Developer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Commercial',
        company: 'Company Inc',
        title: 'Software Engineer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Commercial',
        company: 'Company Inc',
        title: 'Backend Developer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'IT & Technology',
        company: 'Company Inc',
        title: 'Software Engineer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'IT & Technology',
        company: 'Company Inc',
        title: 'Frontend Developer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Sales & Marketing',
        company: 'Company Inc',
        title: 'Integration Engineer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    },
    {
        category:'Sales & Marketing',
        company: 'Company Inc',
        title: 'Marketing Engineer',
        location: 'Houston',
        tags: ['C++', 'Creative', 'Designer'],
        salary: '25000-30000',
        deadline: '31st Dec, 2023',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
    }
];

export const categories = [
    {
        title: 'Accounting',
        jobsOpen: 4,
        icon: <Work style={{ color: '#0859F7' }} className='cardIcon' />,
    },
    {
        title: 'Commercial',
        jobsOpen: 4,
        icon: <Layers style={{ color: '#0859F7' }} className='cardIcon' />,
    },
    {
        title: 'IT & Technology',
        jobsOpen: 4,
        icon: <Storage style={{ color: '#0859F7' }} className='cardIcon' />,
    },
    {
        title: 'Support Service',
        jobsOpen: 4,
        icon: <Headset style={{ color: '#0859F7' }} className='cardIcon' />,
    },
];



export const recruiters = [
    {
        company: 'Adino Digital',
        location: 'Tokyo',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    },
    {
        company: 'E-Plugins',
        location: 'Berlin , New York',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    },
    {
        company: 'Atze',
        location: 'Berlin',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    },
    {
        company: 'Castrol Digital',
        location: 'Tokyo',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    },
    {
        company: 'Adino Digital',
        location: 'Berlin',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    },
    {
        company: 'Adino Digital',
        location: 'Berlin',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    }
    , {
        company: 'Adino Digital',
        location: 'Berlin',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    },
    {
        company: 'Adino Digital',
        location: 'Berlin',
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png',

    }
];

export const aboutAccordian = [
    {
        id: 'panel1',
        title: 'Can I apply for job listing',
        details: 'Dramatically disseminate real-time portals rather than on top-line action items. Uniquely provide access to low-risk high-yield products of without dynamic and products re-engineer low-risk high-yield.',
    },
    {
        id: 'panel2',
        title: 'Can I apply for multiple job listing',
        details: 'Dramatically disseminate real-time portals rather than on top-line action items. Uniquely provide access to low-risk high-yield products of without dynamic and products re-engineer low-risk high-yield.',
    },
    {
        id: 'panel3',
        title: 'Can I get feedback on my job application',
        details: 'Dramatically disseminate real-time portals rather than on top-line action items. Uniquely provide access to low-risk high-yield products of without dynamic and products re-engineer low-risk high-yield.',
    },

]

export const members = [
    {
        imageUrl: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/team-2.jpg',
        name: 'Andrew Smith',
        title: 'Technical Officer',
    },
    {
        imageUrl: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/team-3.jpg',
        name: 'Andrew Smith',
        title: 'Technical Officer',
    },
    {
        imageUrl: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/team-1.jpg',
        name: 'Andrew Smith',
        title: 'Technical Officer',
    },
    {
        imageUrl: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/team-4.jpg',
        name: 'Andrew Smith',
        title: 'Technical Officer',
    },
    {
        imageUrl: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/team-2.jpg',
        name: 'Andrew Smith',
        title: 'Technical Officer',
    }
];

const icons = [
    {
        icon: <Instagram />

    },
    {
        icon: <Facebook />
    },
    {
        icon: <Twitter />
    }

]

export const feedbacks = [
    {
        quote: `According to the council supply chain professionals the council of the logistics management logistics is the process of planning, implanting  controlling for procedures and solving the life projects all over life boundaries and more peoples says.`,
        name: "Andrew D. Smith",
        title: "Manager",
        avatarUrl: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/person.png",
        companyLogoUrl: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-img.png",
    },
    {
        quote: `According to the council supply chain professionals the council of the logistics management logistics is the process of planning, implanting  controlling for procedures and solving the life projects all over life boundaries and more peoples says.`,
        name: "Andrew D. Smith",
        title: "Manager",
        avatarUrl: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/person.png",
        companyLogoUrl: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-img.png",
    },
    {
        quote: `According to the council supply chain professionals the council of the logistics management logistics is the process of planning, implanting  controlling for procedures and solving the life projects all over life boundaries and more peoples says.`,
        name: "Andrew D. Smith",
        title: "Manager",
        avatarUrl: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/person.png",
        companyLogoUrl: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-img.png",
    }
];

export const filters = {
    category: ['Accounting', 'Commercial', 'IT & Technology', 'Sales & Marketing', 'Support Service', 'UI Designer', 'UX Designer'],
    tags: ['C++', 'Creative', 'Designer', 'Developer', 'Full Time', 'Javascript', 'Remote'],
    location: ['New York', 'Berlin', 'London', 'Remote', 'Tokyo'],
    jobType: ['Full Time', 'Freelance']
};

export const jobs = [
    {
        id: 1,
        category: 'Accounting',
        location: 'Berlin',
        deadline: '8th Mar, 2024',
        companyLogo: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
        salaryRange: '$ 10000-15000',
        tags: ['Creative', 'Full Time'],
    },
    {
        id: 2,
        category: 'Commercial',
        location: 'Tokyo',
        deadline: '13th Oct, 2023',
        companyLogo: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
        salaryRange: '$ 10000-15000',
        tags: ['Creative', 'Full Time'],
    },
    {
        id: 3,
        category: 'Sales & Marketing ',
        location: 'New York',
        deadline: '21st Sep, 2023',
        companyLogo: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png', // Sample logo image
        salaryRange: '$ 10000-15000',
        tags: ['Creative', 'Full Time'],
    },
    {
        id: 4,
        category: 'Support Service',
        location: 'Tokyo',
        deadline: '13th Oct, 2023',
        companyLogo: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
        salaryRange: '$ 10000-15000',
        tags: ['Creative', 'Full Time'],
    },
    {
        id: 5,
        category: 'sdfsdf',
        location: 'Tokyo',
        deadline: '13th Oct, 2023',
        companyLogo: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
        salaryRange: '$ 10000-15000',
        tags: ['Creative', 'Full Time'],
    },
    {
        id: 6,
        category: 'sdfsdf',
        location: 'Tokyo',
        deadline: '13th Oct, 2023',
        companyLogo: 'https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png',
        salaryRange: '$ 10000-15000',
        tags: ['Creative', 'Full Time'],
    }
];

export const posts = [
    {
        id: 1,
        title: "Repurpose mission-critical action life items rather than go to find it.",
        description: "Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing. Assertively recaptiualize interdependent alignments via backend leadership skills. Monotonectally formulate focused quality vectors whereas proactive infomediaries. Energistically utilize ethical initiatives [...]",
        date: "June 8, 2023",
        author: "Admin",
        comments: 3,
        category: "React Js",
        image: "	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-3-1320x700.jpg"
    },
    {
        id: 2,
        title: "What are the benefits of using job listing company to find new jobs",
        description: "Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing. Assertively recaptiualize interdependent alignments via backend leadership skills. Monotonectally formulate focused quality vectors whereas proactive infomediaries. Energistically utilize ethical initiatives [...]",
        date: "June 8, 2023",
        author: "Admin",
        comments: 2,
        category: "Web Development",
        image: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-1-1320x700.jpg"
    },
    {
        id: 3,
        title: "Repurpose mission-critical action life items rather than go to find it.",
        description: "Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing. Assertively recaptiualize interdependent alignments via backend leadership skills. Monotonectally formulate focused quality vectors whereas proactive infomediaries. Energistically utilize ethical initiatives [...]",
        date: "June 8, 2023",
        author: "Admin",
        comments: 2,
        category: "Web Development",
        image: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-2-1320x700.jpg"
    }
];

export const recentPosts = [
    { title: "Repurpose mission-critical action life items...", date: "June 8, 2023", image: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-3-1320x700.jpg" },
    { title: "What are the benefits of using job-oriented tasks?", date: "June 8, 2023", image: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-1-1320x700.jpg" },
    { title: "Many job listing companies allow job seekers...", date: "June 8, 2023", image: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-2-1320x700.jpg" },
    { title: "Utilize effective hiring strategies for faster recruitment", date: "June 8, 2023", image: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-2-1320x700.jpg" }
];

export const postCategories = [
    { name: "Full Time", count: 3 },
    { name: "Php Developer", count: 3 },
    { name: "React Js", count: 3 },
    { name: "Remote Job", count: 3 },
    { name: "Uncategorized", count: 3 },
    { name: "Web Developer", count: 3 }
];

export const tags = ["Developer", "Full time", "React", "Node.js", "JavaScript", "Web Development", "Frontend", "Backend"];

export const infoData = [
    {
        icon: <LocationOn fontSize="large" />,
        title: "Our Address",
        details: <>120 Perborate Street, Milton <br />Berlin, Germany</>,
    },
    {
        icon: <Phone fontSize="large" />,
        title: "Contact Info",
        details: (
            <>
                Open a chat or give us a call at<br />
                <Typography component="a" href="tel:25832562151" color="#0859F7" fontSize={'13px'} >
                    258-3256-2151
                </Typography>
            </>
        ),
    },
    {
        icon: <Chat fontSize="large" />,
        title: "Live Support",
        details: (
            <>
                Live chat service <br />
                <Typography component="a" href="https://www.hijobslivechat.com" color="#0859F7" fontSize={'14px'}>
                    www.hijobslivechat.com
                </Typography>
            </>
        ),
    },
];

export const candidateData = [
    {
        label: 'Locations:',
        detail: 'Berlin,Tokyo'
    },
    {
        label: 'Houlyrate:',
        detail: '$ 65/h'
    },
    {
        label: 'Address :',
        detail: 'Address Here'
    },
    {
        label: 'Website:',
        detail: 'http://website-here'
    },
    {
        label: 'Locations:',
        detail: 'Berlin,Tokyo'
    },
    {
        label: 'Phone:',
        detail: '012345'
    },
    {
        label: 'Tagline:',
        detail: '012345'
    },
    {
        label: 'Email:',
        detail: 'candidate@e-plugins.com'
    },
    {
        label: 'Skills:',
        detail: 'creative Designer'
    }
];

export const gallery = [
    {
        imageurl: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-3-1.jpg'
    },
    {
        imageurl: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-3-1.jpg'
    },
    {
        imageurl: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-3-1.jpg'
    },
    {
        imageurl: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/blog-3-1.jpg'
    },

]

export const experiences = [
    {
      company: 'Moto Design Company',
      role: 'UI/UX, Product Design (2005 - 2007)',
      description:
        'Suscipit nulla semper aliquam nostra gravida rhoncus tempor consequat. Risus vitae dictumst convallis netus tellus eleifend leo, quisque estc fusce euismod congue donec at nascetur.',
    },
    {
      company: 'e-Plugins',
      role: 'Business Consultant (2005 - 2007)',
      description:
        'Suscipit nulla semper aliquam nostra gravida rhoncus tempor consequat. Risus vitae dictumst convallis netus tellus eleifend leo, quisque estc fusce euismod congue donec at nascetur.',
    },
  ];

 export const directory = [
    {
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
        name: 'Andrew Smith',
        tags: ['Business', 'Consultant'],
        location: 'Vancover',
        salary: '$ 65/hr',
    },
    {
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
        name: 'Andrew Smith',
        tags: ['Business', 'Consultant'],
        location: 'Vancover',
        salary: '$ 65/hr',
    },
    {
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
        name: 'Andrew Smith',
        tags: ['Business', 'Consultant'],
        location: 'Vancover',
        salary: '$ 65/hr',
    },
    {
        logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
        name: 'Andrew Smith',
        tags: ['Business', 'Consultant'],
        location: 'Vancover',
        salary: '$ 65/hr',
    },
    // {
    //     logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
    //     name: 'Andrew Smith',
    //     tags: ['Business', 'Consultant'],
    //     location: 'Vancover',
    //     salary: '$ 65/hr',
    // },
    // {
    //     logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
    //     name: 'Andrew Smith',
    //     tags: ['Business', 'Consultant'],
    //     location: 'Vancover',
    //     salary: '$ 65/hr',
    // },
    // {
    //     logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
    //     name: 'Andrew Smith',
    //     tags: ['Business', 'Consultant'],
    //     location: 'Vancover',
    //     salary: '$ 65/hr',
    // },
    // {
    //     logo: '	https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-8.png',
    //     name: 'Andrew Smith',
    //     tags: ['Business', 'Consultant'],
    //     location: 'Vancover',
    //     salary: '$ 65/hr',
    // }
]

export const faqs = [
    {
        summary: 'What is a job listing ?',
        details: 'Sem erat lobortis etiam dapibus sagittis luctus imperdiet netus laoreet sollicitudi, blandit vitae integer posuere varius consequat tincidunt tortor. Sociosqu gravida porttitor nunc class commodo iaculis feugiat donec congue convallis tincidunt ornare quisque, cum blandit auctor penatibus consequat maecenas malesuada rutrum mus dictum euismod ligula. Luctus habitant tempor varius massa nulla faucibus tincidunt nibh metus...',
    },
    {
        summary: 'Can I apply for multiple job listings at the same company ?',
        details: 'Sem erat lobortis etiam dapibus sagittis luctus imperdiet netus laoreet sollicitudi, blandit vitae integer posuere varius consequat tincidunt tortor. Sociosqu gravida porttitor nunc class commodo iaculis feugiat donec congue convallis tincidunt ornare quisque, cum blandit auctor penatibus consequat maecenas malesuada rutrum mus dictum euismod ligula. Luctus habitant tempor varius massa nulla faucibus tincidunt nibh metus...',
    },
    {
        summary: `Can I apply for a job listing if I don't meet all of the qualifications?`,
        details: 'Sem erat lobortis etiam dapibus sagittis luctus imperdiet netus laoreet sollicitudi, blandit vitae integer posuere varius consequat tincidunt tortor. Sociosqu gravida porttitor nunc class commodo iaculis feugiat donec congue convallis tincidunt ornare quisque, cum blandit auctor penatibus consequat maecenas malesuada rutrum mus dictum euismod ligula. Luctus habitant tempor varius massa nulla faucibus tincidunt nibh metus...',
    },
    {
        summary: 'Can i get feedback on my job application ?',
        details: 'Sem erat lobortis etiam dapibus sagittis luctus imperdiet netus laoreet sollicitudi, blandit vitae integer posuere varius consequat tincidunt tortor. Sociosqu gravida porttitor nunc class commodo iaculis feugiat donec congue convallis tincidunt ornare quisque, cum blandit auctor penatibus consequat maecenas malesuada rutrum mus dictum euismod ligula. Luctus habitant tempor varius massa nulla faucibus tincidunt nibh metus...',
    },
    {
        summary: 'How do i know if a job listing a legitimate',
        details: 'Sem erat lobortis etiam dapibus sagittis luctus imperdiet netus laoreet sollicitudi, blandit vitae integer posuere varius consequat tincidunt tortor. Sociosqu gravida porttitor nunc class commodo iaculis feugiat donec congue convallis tincidunt ornare quisque, cum blandit auctor penatibus consequat maecenas malesuada rutrum mus dictum euismod ligula. Luctus habitant tempor varius massa nulla faucibus tincidunt nibh metus...',
    },
    {
        summary: 'How do i apply for job listing ?',
        details: 'Sem erat lobortis etiam dapibus sagittis luctus imperdiet netus laoreet sollicitudi, blandit vitae integer posuere varius consequat tincidunt tortor. Sociosqu gravida porttitor nunc class commodo iaculis feugiat donec congue convallis tincidunt ornare quisque, cum blandit auctor penatibus consequat maecenas malesuada rutrum mus dictum euismod ligula. Luctus habitant tempor varius massa nulla faucibus tincidunt nibh metus...',
    }
]
