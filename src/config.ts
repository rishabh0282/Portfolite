export const siteConfig = { 
  name: "Rishabh Tiwari",
  title: "Full-Stack Software Engineer | AI Enthusiast (Computer Vision & Deep Learning)",
  description: "Portfolio website of Full-Stack and AI Engineer Rishabh Tiwari",
  accentColor: "#1E40AF",

  social: {
    email: "rishabhofficial244@gmail.com",
    linkedin: "https://linkedin.com/in/rishabh0282",
    twitter: "https://x.com/auracup",
    github: "https://github.com/rishabh0282",
  },

  aboutMe:
    "I am a Full-Stack and AI Engineer with industry experience in building production-grade applications and computer vision pipelines. I specialize in Java, Angular, .NET, AI-assisted development, and deep learning frameworks such as TensorFlow. I have worked at IBM as a Full-Stack Application Developer, where I built microservices, Angular modules, and enhanced test automation. Previously, at Collaborative Intelligence, I engineered real-time AI workflows for high-resolution object detection. I hold ISTQB and Microsoft Azure certifications, and I enjoy solving real-world problems using scalable software systems and machine learning.",

  skills: [
    "Full-Stack Development",
    "Angular",
    "Java",
    ".NET",
    "Python",
    "TypeScript",
    "C#",
    "Flask",
    "Django",
    "TensorFlow",
    "SQL",
    "MongoDB",
    "SQLite",
    "AI & Computer Vision",
    "Git",
    "Azure DevOps",
    "Unit Testing",
    "Automation Testing"
  ],
 
  projects: [
    {
      name: "Object Detection on Satellite Imagery using Modified YOLOv4",
      description:
        "Engineered a YOLOv4-modified model for efficient small-object detection in satellite imagery, improving accuracy and inference speed.",
      link: "https://doi.org/10.1111/exsy.13180",
      publisher: "Wiley (Expert Systems Journal, 2023)",
      skills: ["TensorFlow", "Deep Learning", "Satellite Imagery", "Computer Vision"],
    },
    {
      name: "WasteDet: Anchor-Free Detection for Waste Management",
      description:
        "Proposed a novel anchor-free detection algorithm tailored for waste object recognition, outperforming anchor-based models in cluttered environments.",
      link: "https://doi.org/10.1109/CISES54857.2022.9844399",
      publisher: "IEEE (CISES Conference, 2022)",
      skills: ["Object Detection", "Anchor-Free Models", "Waste Management", "Computer Vision"],
    },
    {
      name: "Waste Management System using Deep Learning",
      description:
        "Designed and optimized a CNN-based algorithm for waste classification, enhancing automation in municipal waste processing.",
      link: "https://doi.org/10.1109/ICACITE53722.2022.9823449",
      publisher: "IEEE (ICACITE Conference, 2022)",
      skills: ["Deep Learning", "Computer Vision", "Classification"],
    },
    {
      name: "Detection of Camouflaged Drones",
      description:
        "Developed a CNN-based UAV detection model for camouflaged and low-visibility scenarios, addressing surveillance and defense challenges.",
      link: "https://doi.org/10.1109/CISES54857.2022.9844399",
      publisher: "IEEE (CISES Conference, 2022)",
      skills: ["CNN", "Object Detection", "UAV", "Security Systems"],
    },
    {
      name: "Apple Disease Detection using K-Means Clustering",
      description:
        "Created MATLAB-based image segmentation and disease detection model for apple fruits, achieving improved classification accuracy.",
      link: "https://doi.org/10.1007/978-981-16-0695-3_9",
      publisher: "Springer (Lecture Notes in Electrical Engineering, 2021)",
      skills: ["MATLAB", "Image Processing", "Clustering", "Agriculture"],
    },
  ],
  

  experience: [
    {
      company: "IBM India Pvt. Ltd.",
      title: "Full-Stack Application Developer",
      dateRange: "June 2022 – Present",
      bullets: [
        "Developed Java-based CRM modules improving customer and asset workflows for telecom operations.",
        "Built Angular micro-frontends and REST microservices managing 2,000+ telecom assets.",
        "Increased unit test coverage to 80% by integrating AI-assisted development and test automation.",
        "Improved performance and maintainability by refactoring legacy modules across teams."
      ],
    },
    {
      company: "Collaborative Intelligence Pvt. Ltd.",
      title: "AI Engineer",
      dateRange: "June 2021 – June 2022",
      bullets: [
        "Designed computer vision pipelines for high-resolution object detection, boosting accuracy by 15%.",
        "Integrated real-time AI workflows into production environments with improved latency.",
        "Enhanced prototype readiness for defense and surveillance use cases."
      ],
    },
    {
      company: "Conduent",
      title: "Software Test Engineer",
      dateRange: "July 2020 – May 2021",
      bullets: [
        "Designed 500+ test cases and validated SQL data integrity, reducing post-release defects by 15%.",
        "Accelerated sprint cycles by 25% through reproducible JIRA defect reports and full regression coverage."
      ],
    },
  ],

  education: [
    {
      school: "National Institute of Technology (NIT) Durgapur",
      degree: "Bachelor of Technology in Electronics and Communications",
      dateRange: "2020",
      achievements: [],
    },
  ],
};
