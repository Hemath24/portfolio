/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hemant's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hemant Madhu Kumar Portfolio",
    type: "website",
    url: "http://hemant-dk-7.com/",
  },
};

//Home Page
const greeting = {
  title: "Hemant Madhu Kumar",
  logo_name: "hemantmku",
  nickname: "Demon King",
  subTitle:
    "Dynamic and results-driven DevOps Engineer with over two years of experience in designing, automating, and optimizing missioncritical deployments in AWS and Azure. Adept at collaborating with cross-functional teams to drive innovation, streamline operations, and achieve organizational goals.",
  resumeLink:
    "https://drive.google.com/file/d/1XbtyY3fidM1Sa40w__eyHyIQjyGmLt3Z/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/Hemath24",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Hemath24",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hemant-madhu-kumar-3158b5171",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:hemantmku@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Associate Software Engineer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Implemented both UI engineer and DevOps Role for B2B products",
        "⚡ Designed and implemented a fully automated CI/CD pipeline, reducing deployment time and increasing deployment frequency",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
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
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Linux System Adminstration",
          fontAwesomeClassname: "simple-icons:redhat",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Chef",
          fontAwesomeClassname: "simple-icons:chef",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Groovy",
          fontAwesomeClassname: "simple-icons:groovy",
          style: {
            color: "#326CE5",
          },
        },                                        
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "National Institute of Technology Calicut",
      subtitle: "B.Tech. in Electrical and Electronics Engineering",
      logo_path: "nitc_logo_icon.svg",
      alt_name: "NIT Calicut",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I did my majory in Electrical and electronics engineering.Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      ],
      website_link: "https://nitc.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
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
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as UI Developer, QA and Devops Engineer. I have also worked with some well established companies mostly as Devops Engineer. I love organising events and that is why I was involved in organizing many workshops during college.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "Informatica",
          company_url: "https://www.informatica.com/",
          logo_path: "informatica_logo.jpeg",
          duration: "September 2022 - ",
          location: "Bengaluru, Karnataka",
          description:
            "Implemented both UI engineer and DevOps Role for B2B products. Designed an implemented a fully automated CI/CD pipeline, reducing deployment time and increasing deployment frequency.Streamlined deployment and scaling processes through automation,scripts and tools, reducing deployment time by 50%. Orchestrated and maintained high-availability, fault-tolerant infrastructure on AWS using services such as EC2, S3, RDS, and ELB. Managed scalable infrastructure on Azure using Azure VMs, Azure SQL Database, and Terraform.",
          color: "#0879bf",
        },
        {
          title: "PROJECT ENGINEER",
          company: "Wipro Limited",
          company_url: "https://www.wipro.com/en-IN/",
          logo_path: "Wipro_Primary Logo_Color_RGB.svg",
          duration: "July 2021 - August 2022",
          location: "Bengaluru, Karnataka",
          description:
            "Developed code for the data analysis product ZSI used by Zurich Insurance.Handled MySǪL database and Helm Charts Competitively developed features and fixed bugs for subsequent product releases. Developed UI test cases and automated testing using Azure pipeline service",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Student Intern",
          company: "JMR INFOTECH",
          company_url: "https://jmrinfotech.com/",
          logo_path: "JMR_Logos-03-1.svg",
          duration: "MAY 2018 TO JUNE 2018",
          location: "Banglore , Karnataka",
          description:
            "Close security loopholes by debugging and patching software. Maintain software performance with regular updates.Produce clean, error-free code to meet aggressive timelines. Merge Voice Assistance to JMR Shopping app",
          color: "#000000",
        },
        {
          title: "Student Intern",
          company: "HAMON TECHNOLOGIES",
          company_url: "https://hamon.in/",
          logo_path: "Hamon_Logo_V4-011 2.svg",
          duration: "MAY 2019 TO JUNE 2019",
          location: "Calicut, Kerala",
          description:
            "Developed, updated and maintained database of existing and potential customers in NITC Placement app. Automation of UI test Cases using selenium and Python Scripts",
          color: "#ee3c26",
        },
        {
          title: "Student Intern",
          company: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY MANAGEMENT KERALA (IIITMK)",
          company_url:
            "https://www.iiitmk.ac.in/",
          logo_path: "IIITMKLOGO-new.png",
          duration: "MAY 2018 TO JUNE 2018",
          location: "Trivandrum, kerala",
          description:
            "Developed application code for Android App (Sports Fest)",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Tathva Worrkshop Cordinator",
          company: "Tathvs",
          company_url: "https://nitc.ac.in/",
          logo_path: "google_logo.png",
          duration: "June 2019 - October 2019",
          location: "Calicut, Kerala",
          description:
            "Organized Various Workshops related to tathva 2019. NITC Tech Fest",
          color: "#4285F4",
        },
        {
          title: "Flood relief Volunteer",
          company: "Kerala Startup mission",
          company_url: "",
          logo_path: "nitc_logo_icon.svg",
          duration: "Aug 2018 and Aug 2019",
          location: "Calicut , Kerala",
          description:
            "Worked on emergency flood relied products and repair works of damaged Electronics component directly under Kerala Government",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Hobbies",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character. Semi - professional footballer and Political Analyst",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Sreehari, near SBI NITC BRANCH ,CALICUT P.O 673601",
    locality: "Valiyapoyil",
    country: "IN",
    region: "Kerala",
    postalCode: "673601",
    streetAddress: "Near SBI NITC",
    avatar_image_path: "adress.jpeg",
    location_map_link: "https://maps.app.goo.gl/goRULU7DTUpDxJHHA",
  },
  phoneSection: {
    title: "Whatsapp",
    subtitle: "9446642228",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
