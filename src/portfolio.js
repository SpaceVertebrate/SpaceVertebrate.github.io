/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Meet Solanki",
  description:
    "Software engineer who enjoys building intelligent applications and scalable systems, often powered by AI. I like turning complex problems into dependable technology that people can actually use, and occasionally teaching machines to be smarter than me.",
  og: {
    title: "Meet Solanki Portfolio",
    type: "website",
    url: "https://spacevertebrate.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Meet Solanki",
  logo_name: "Meet Solanki",
  nickname: "Space Vertebrate",
  subTitle:
    "Software engineer who enjoys building intelligent applications and scalable systems, often powered by AI. I like turning complex problems into dependable technology that people can actually use, and occasionally teaching machines to be smarter than me.",
  resumeLink: "/documents/Meet_Resume.pdf",
  portfolio_repository: "https://github.com/SpaceVertebrate",
  githubProfile: "https://github.com/SpaceVertebrate",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/SpaceVertebrate",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/meetpsolanki/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@meetsolanki5263",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:spacevertebrate@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/meetsolanki_in", //need to add twitter handle
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/meet.solanki.921025?mibextid=LQQJ4d",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/meetsolanki.in/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Engineering",
      fileName: "DataScienceImg",
      skills: [
        "• Build reliable applications with Java, Python, C/C++, C#/.NET, JavaScript, and SQL.",
        "• Apply object-oriented design, testing, debugging, Git workflows, and Agile delivery practices.",
        "• Work across APIs, cloud services, databases, CI/CD pipelines, and production-focused development environments.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "mdi:language-c",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "devicon:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "mdi:language-cpp",
          style: {
            backgroundColor: "transparent",
            color: "#260bef",
          },
        },
        {
          skillName: "C#/.NET",
          fontAwesomeClassname: "devicon:csharp",
          style: { color: "#512BD4" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Build responsive frontend experiences with React, HTML, CSS, and JavaScript.",
        "• Develop backend APIs and services with C#/.NET, Python, PHP, Node.js, Azure Functions, and REST patterns.",
        "• Design data-backed applications with MySQL, SQL Server, Oracle, MongoDB, Cosmos DB, Redis, and Power BI.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "ApacheDerby",
          fontAwesomeClassname: "logos:apache",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { color: "#777BB4" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
      ],
    },
    {
      title: "Artificial Intelligence",
      fileName: "ArtificialIntelligenceImg",
      skills: [
        "• Build machine-learning and computer-vision workflows with Python, PyTorch, OpenCV, YOLO, and CNNs.",
        "• Work with natural-language processing, named-entity recognition, LLMs, and Hugging Face Transformers.",
        "• Prepare data, evaluate models, and deliver AI-powered solutions through practical APIs and cloud-based workflows.",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
        { skillName: "PyTorch", fontAwesomeClassname: "simple-icons:pytorch", style: { color: "#EE4C2C" } },
        { skillName: "OpenCV", fontAwesomeClassname: "simple-icons:opencv", style: { color: "#5C3EE8" } },
        { skillName: "Hugging Face", fontAwesomeClassname: "simple-icons:huggingface", style: { color: "#FFD21E" } },
      ],
    },
    {
      title: "Network and Security",
      fileName: "CloudInfraImg",
      skills: [
        "• Designing and managing secure network infrastructures for both on-premises and cloud environments.",
        "• Configuring and maintaining firewalls, VPNs, and IDS/IPS to safeguard organizational data.",
        "• Implementing encryption protocols and secure communication channels to protect sensitive information.",
        "• Developing and executing incident response plans to mitigate and resolve security breaches promptly.",
      ],
      softwareSkills: [
        {
          skillName: "WireShark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Cisco",
          fontAwesomeClassname: "cib:cisco",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "google cloud security",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Kali-Linux",
          fontAwesomeClassname: "skill-icons:kali-light",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "• Designing highly attractive user interface for mobile and web applications",
        "• Customizing logo designs and building logos from scratch",
        "• Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/SpaceVertebrate/ ",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/spacevertebrate",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Windsor",
      subtitle: "Bachelor of Science (Honours) in Computer Science - Software Engineering Co-operative Education",
      logo_path: "uwin.png",
      alt_name: "University of Windsor",
      duration: "Jan 2023 - Expected Apr 2027",
      descriptions: [
        "• Developed practical software-engineering experience through collaborative projects, technical labs, multiple co-op work terms, and a 98% project-management capstone course.",
        "• Maintained a 3.7 / 4.0 GPA with Dean's Honour Roll recognition in 2023-2024 and 2024-2025, reflecting consistent academic performance.",
        "• Built broad knowledge across artificial intelligence, secure software development, operating systems, cloud and data systems, algorithms, databases, networks, web development, and object-oriented design through coursework and hands-on technical work.",
      ],
      website_link: "http://uwindsor.ca",
      certificate_links: [
        {
          label: "Dean's Honour Roll Certificate (2023-2024)",
          href: "/documents/DeanHonourRoll-Certificate.pdf",
        },
        {
          label: "Dean's Honour Roll Certificate (2024-2025)",
          href: "/documents/DeanHonourRoll2-Certificate.pdf",
        },
      ],
    },
    {
      title: "Gujarat Secondary and Higher Secondary Education Board",
      subtitle: "High School",
      logo_path: "gseb.png",
      alt_name: "Gujarat Secondary and Higher Secondary Education Board",
      duration: "2020 - 2022",
      descriptions: [
        "• Majored in Physics, Chemistry, Mathematics, English, and Computer Science, fostering a solid foundation in analytical and creative fields.",
        "• Engaged in advanced STEM courses and enhanced critical thinking skills through extensive problem-solving experiences.",
        "• Actively participated in extracurricular activities including science fairs and debate clubs, demonstrating a commitment to continuous learning and community involvement.",
      ],
      website_link: "https://website.gseb.org/",
    },
  ],
};
//certifications
const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    */
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Software Engineering, AI, Data, and Teaching",
  description:
    "I build full-stack, data, and AI-driven software systems, with experience spanning Azure IoT analytics, research databases, machine learning, business intelligence, and university teaching.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer (Co-op)",
          company: "CenterLine",
          company_url: "https://www.cntrline.com/",
          logo_path: "centerline-logo.svg",
          duration: "Jan 2026 - Present",
          location: "Windsor, ON",
          description: [
            "Develop full-stack features for an Azure-based IoT analytics web application.",
            "Build custom C#/.NET APIs, React web apps, Azure Function Apps, and business logic libraries with Redis caching to optimize data queries.",
            "Process and analyze IoT telemetry using Event Hubs, Azure Data Explorer, and KQL.",
            "Integrate Azure SQL, Cosmos DB, and ADX across relational, NoSQL, and analytical workloads.",
            "Train anomaly-detection models in Azure ML on 100,000+ IoT records, achieving 92% accuracy.",
            "Support secure deployments using Azure DevOps, CI/CD, VNets, and private endpoints.",
          ],
          color: "#000000",
        },
        {
          title: "Research Database Programmer",
          company: "University of Windsor",
          company_url: "https://www.uwindsor.ca/",
          logo_path: "uwin.png",
          duration: "Sep 2025 - Dec 2025",
          location: "Windsor, ON",
          description: [
            "Develop research-oriented database tools and scripts using MySQL, Oracle, Python, and PHP.",
            "Set up controlled test environments to evaluate query execution and indexing performance.",
            "Create preprocessing and data-mining workflows with SQL, Python, and WEKA for analysis.",
            "Support MSc and PhD researchers by dry running algorithms and validating experimental outcomes.",
            "Document experiment setups, findings, and procedures to ensure reproducible research workflows.",
          ],
          reference_links: [
            {
              label: "Letter of Recommendation - Dr. Christie Ezeife (Professor)",
              href: "/documents/University-of-Windsor-Reference-Database-Research.pdf",
              preview_href: "/documents/preview-database-reference-1.png",
            },
          ],
          color: "#005596",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "Glendor Inc.",
          company_url: "",
          logo_path: "glendor-logo.jpeg",
          duration: "May 2025 - Aug 2025",
          location: "Remote, United States",
          description: [
            "Developed deep learning pipelines for facial and mask detection using CNNs, PyTorch, and OpenCV, achieving about 95% accuracy on large datasets.",
            "Built an NLP/LLM pipeline for PHI extraction and redaction, achieving 98% precision and recall for healthcare clients.",
            "Fine-tuned Hugging Face Transformer models to classify sensitive health text, improving data-security workflows and model robustness.",
            "Collaborated on real-time visual object extraction methods, enhancing processing efficiency for production deployment.",
          ],
          reference_links: [
            {
              label: "Final Performance Evaluation - Julia Komissarchik (Placement Supervisor)",
              href: "/documents/Glendor-Final-Evaluation.pdf",
              preview_href: "/documents/preview-glendor-final-evaluation-1.png",
            },
          ],
          color: "#6A1B9A",
        },
        {
          title: "Data Specialist Assistant (Co-op)",
          company: "South Essex Community Council",
          company_url: "https://secc.on.ca/",
          logo_path: "secc-logo.png",
          duration: "Jan 2025 - Apr 2025",
          location: "Leamington, ON",
          description: [
            "Built and optimized CRM modules in PHP and MySQL, reducing report generation time by 40%.",
            "Automated ETL workflows with Power BI and Power Query, saving 15+ hours per month for multiple departments.",
            "Designed interactive Power BI dashboards used by leadership for operational decision-making.",
            "Implemented OTP authentication and encryption for secure cloud-based CRM access.",
            "Developed an internal address search tool replacing third-party APIs, reducing operational costs.",
          ],
          reference_links: [
            {
              label: "Letter of Recommendation - Luis Palacios (Data Specialist Supervisor)",
              href: "/documents/SECC-Recommendation-Letter.pdf",
              preview_href: "/documents/preview-secc-recommendation-1.png",
            },
          ],
          color: "#00796B",
        },
        {
          title: "Teaching Assistant",
          company: "University of Windsor",
          company_url: "https://www.uwindsor.ca/",
          logo_path: "uwin.png",
          duration: "Sep 2024 - Dec 2025",
          location: "Windsor, ON",
          description: [
            "Supported instruction across Systems Programming, OOSAD, Database Systems, Web Development, and Artificial Intelligence courses.",
            "Delivered lab sessions for 40+ students, teaching C in UNIX, SQL and schema design, OOP, UML modeling, and full-stack web fundamentals.",
            "Assisted students with AI fundamentals including search algorithms, Python ML workflows, and introductory PyTorch model development.",
            "Graded 200+ assignments, tests, and projects while ensuring consistency and academic integrity.",
            "Contributed to faculty research initiatives through experimentation, debugging, and technical analysis.",
          ],
          reference_links: [
            {
              label: "Letter of Recommendation - Dr. Muhammad Asaduzzaman (Professor)",
              href: "/documents/University-of-Windsor-Reference-Teaching-Assistant.pdf",
              preview_href: "/documents/preview-teaching-reference-1.png",
            },
          ],
          color: "#005596",
        },
        {
          title: "Data Entry Specialist",
          company: "Central Transport",
          company_url: "https://www.centraltransport.com/",
          logo_path: "CT.png",
          duration: "Jan 2023 - Dec 2024",
          location: "Windsor, ON, Canada",
          description: [
            "Maintained a typing speed of 70 words per minute with high accuracy while managing 300+ billings daily.",
            "Audited 500+ invoices daily within the .NET Framework and helped resolve server issues with team leaders.",
            "Handled key accounts for Amazon, Lowe's, Home Depot, Chrysler, Ford, and General Motors while maintaining data integrity.",
          ],
          color: "#000000",
        },
      ],
    },

    /*title: "Internships",
    experiences: [
      {
        title: "Machine Learning Intern",
        company: "TikTok Inc.",
        company_url: "https://www.tiktok.com/en/",
        logo_path: "tiktok_logo.png",
        duration: "May 2022 - Aug 2022",
        location: "San Francisco, USA",
        description:
          "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        color: "#000000",
      },
      {
        title: "Data Science Research Intern",
        company: "Delhivery Pvt. Ltd.",
        company_url: "https://www.delhivery.com/",
        logo_path: "delhivery_logo.png",
        duration: "May 2019 - Sept 2019",
        location: "Gurgaon, Haryana",
        description:
          "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        color: "#ee3c26",
      },
      {
        title: "Data Science Intern",
        company: "Intel Indexer LLC",
        company_url:
          "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        logo_path: "intel_logo.jpg",
        duration: "Nov 2018 - Dec 2018",
        location: "Work From Home",
        description:
          "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        color: "#0071C5",
      },
    ],
  },*/

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Member",
          company: "Computer Science Society",
          company_url: "https://css.uwindsor.ca/",
          logo_path: "CSS.png",
          duration: "June 2023 - Present",
          location: "Windsor, ON, Canada",
          description:
            "As an active member of the Computer Science Society at the University of Windsor, I regularly assist juniors with their courses through our Discord channel and play a key role in organizing and contributing to various CSS events, including bowling nights, chess competitions, coding tests, and gaming weeks.",
          color: "#4285F4",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A mix of completed work and clearly labelled technical concepts spanning full-stack applications, artificial intelligence, data systems, cloud services, security, and business automation.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      "id": "812707500",
      "name": "AnatomyCPU",
      "createdAt": "2024-06-09T16:48:52Z",
      "description": "An educational project to visualize and understand the working principles of a Central Processing Unit (CPU) through interactive models.",
      "url": "https://github.com/SpaceVertebrate/AnatomyCPU",
      "document_href": "/documents/AnatomyCPU-Technical-Article.pdf",
      "preview_href": "/documents/preview-anatomycpu-technical-article-1.png",
      "poster_href": "/documents/AnatomyCPU-Diagram.png",
      "document_label": "Technical article preview - click to open"
    },
    {
      "id": "research-article-sql-nosql",
      "name": "Performance, Patterns, and Path from SQL to NoSQL",
      "createdAt": "2025-12-12T00:00:00Z",
      "description": "Research comparing row-oriented SQL, column-oriented SQL, and MongoDB performance across transactional and analytical workloads, with Apriori-based pattern mining.",
      "venue": "Poster presented at Ontario DataBase Day (OnDBD) 2025, hosted by Western University in London, Ontario.",
      "document_href": "/documents/Research-Article.pdf",
      "preview_href": "/documents/preview-research-article-1.png",
      "poster_href": "/documents/Research-Article-Poster.png",
      "document_label": "Final report preview - click to open"
    }


  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.png",
    description:
      "Software developer focused on full-stack applications, AI and machine learning, data engineering, cloud services, and scalable database systems. Feel free to reach out about software, data, or AI opportunities.",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle:
      "Connect with me for professional updates and opportunities.",
    link: "https://www.linkedin.com/in/meetpsolanki/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Windsor, Ontario, Canada",
    locality: "Windsor",
    country: "Canada",
    region: "Ontario",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Windsor,+ON",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1-226-961-3375",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
