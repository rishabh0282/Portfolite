export const siteConfig = {
  name: "Rishabh Tiwari",
  title: "Software Test Engineer",
  description: "Portfolio website of Rishabh Tiwari",
  accentColor: "#8B5CF6",
  social: {
    email: "rishabhofficial244@gmail.com",
    linkedin: "https://linkedin.com/in/rishabh028210",
    twitter: "https://x.com/auracup",
    github: "https://github.com/rishabh0282",
  },
  aboutMe:
    "I am Rishabh Tiwari, a Software Test Engineer certified by ISTQB, specializing in both Manual and Automation testing. I possess a B.Tech in Electronics and Communication Engineering from Amity University, Noida, as well as certifications in ISTQB Foundation Level and Microsoft Azure Fundamentals. I served at IBM India Pvt. Ltd. as an Associate Systems Engineer, where I enhanced the testing approach, defect management, and sprint productivity. Prior to joining IBM, I interned at Collaborative Intelligence Pvt. Ltd., where I developed deep learning pipelines for Object Detection and Tracking. I have a strong interest in software development and computer vision, and I love gaming as well as creating content with imaginative presentations.",
  skills: [
    "Manual Testing",
    "JavaScript",
    "Java",
    "Python",
    "RTM Debugging",
    "TCD",
    "Regression Testing",
    "UAT",
    "Defect Reporting & Tracking",
    "SQL",
    "JIRA",
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
      title: "Associate Systems Engineer",
      dateRange: "June 2022 - July 2023",
      bullets: [
        "Reduced post‑release defects by 15% by designing 500+ test cases and validating data integrity with SQL.",
        "Accelerated sprint cycles 25% by standardizing JIRA defect reports with reproducible steps and regression coverage.",
        "Improved defect resolution time by 18% through structured triage and close collaboration with developers.",
      ],
    },
    {
      company: "Collaborative Intelligence Pvt. Ltd.",
      title: "Student Intern",
      dateRange: "Jun 2021 - May 2022",
      bullets: [
        "Built and implemented comprehensive computer vision systems to handle high-resolution images captured by drones.",
        "Achieved a 15% boost in detection accuracy and 10% improvement in object detection and tracking speed.",
        "Enhanced prototype deliverables by collaborating with team and integrating AI workflows into production pipelines for real-time analysis.",
      ],
    },
  ],
  education: [
    {
      school: "Amity University",
      degree: "Bachelor of Technology in Electronics and Communications",
      dateRange: "2018 - 2022",
      
    },
  ],
};