import { BsBoxArrowUpRight } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { FaCode } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { IoBagSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

import {
  logo,
  logo2,
  logo3,
  instagram,
  netflix,
  whatsapp,
  dropbox,
  shopify,
  website,
  reactCimg,
  enhancedCimg,
  benefitteamImg,
  aurora,
  takeExam1,
  takeExam2,
} from "../../assets/Imges";

export const navLink = [
  { title: "Steps to Certification" },
  { title: "Certificates" },
  { title: "Pricing" },
  { title: "Blog", icon: BsBoxArrowUpRight },
  { title: "Log In" },
];

export const reactCompanies = {
  title: "Companies that use React",
  logos: [instagram, netflix, whatsapp, dropbox, shopify, website],
};

export const benefitsofReact = [
  {
    headTitle: "Demonstrate your React competency",
    detail:
      "A React certification validates your expertise in building robust, scalable applications with React. Employers and clients seek certified developers who stay ahead of the curve and deliver top-quality work. Showcase your commitment to excellence with a React credential built by recognized international experts.",
    img: reactCimg,
  },
  {
    headTitle: "Enhanced Career Opportunities",
    detail:
      "React skills are in high demand, and certification sets you apart. Stand out from the competition and unlock new job opportunities at leading companies. Certified developers can command higher salaries and faster advancement to senior roles. Invest in your future today.",
    img: enhancedCimg,
  },
  {
    headTitle: "How Certification can benefit your team",
    detail:
      "Certifying your team cultivates a culture of continuous learning and improvement. Certified developers can enjoy boosted morale, improved productivity, and better efficiency through deepened skills and confidence. With a broader range of expertise, your team can tackle any challenge and ship better products faster.",
    img: benefitteamImg,
  },
];

export const auroraScharffData = [
  {
    img: aurora,
    name: "Aurora Scharff",
    job: "React Expert and Microsoft MVP in Web Technologies",
    instructor: "Meet your instructor",
    detail:
      "Aurora Scharff is a recognized React expert, Microsoft MVP in Web Technologies, and international conference speaker based in Norway. With extensive experience in React, Next.js, and React Server Components, she played a key role in shaping the React Certification program. The program is both comprehensive and practical-focused on real-world skills and aligned with industry best practices to deliver top-tier training. Her strong technical background and hands-on expertise make her a trusted voice in the React community and a core contributor to the React Certification.",
  },
];

export const stepstoCertification = [
  {
    step: "Step 1",
    icon: TiDocumentText,
    title: "Exam Preparation",
    detail:
      "Review the exam preparation guide to ensure that you are familiar with the requirements of the exam and clear on what is expected",
  },
  {
    step: "Step 2",
    icon: FaCode,
    title: "Optional Training",
    detail:
      "If you need additional training, there is additional self-study training available, or alternatively you can elect to attend the live, intensive bootcamp training sessions",
  },
  {
    step: "Step 3",
    icon: MdEditDocument,
    title: "Take Examination",
    detail:
      "Take the certification online proctored exam, which will consist of both multiple-choice questions and practical coding exercises",
    img: [takeExam1, takeExam2],
  },
];

export const clearInterestData = [
  {
    icon: TiDocumentText,
    persentage: "90%",
    detail: "of developers would read the docs before taking the exam",
  },
  {
    icon: MdEditDocument,
    persentage: "88%",
    detail: "aim to achieve advanced or both certification levels",
  },
  {
    icon: IoBagSharp,
    persentage: "82%",
    detail:
      "look to Certification to validate their skills and knowledge in React",
  },
  {
    icon: FaStar,
    persentage: "96%",
    detail:
      "believe that having a React certification will enhance their professional credibility",
  },
];

export const ReactCLevel = [
  {
    img: logo,
    title: "Junior React Developer",
    duration: "40 min",
    questions: "50 Questions",
    detail:
      "Validate your React fundamentals with this certification. Demonstrate your ability to work with core concepts and basic implementations, enhancing your credibility with employers and clients. This certification confirms your readiness for junior React developer roles and provides a solid foundation for your career growth.",
  },
  {
    img: logo2,
    title: "Mid-Level React Developer",
    duration: "135 min",
    questions: "40 Questions and 105 minutes of Coding Challenges",
    detail:
      "Prove your proficiency in intermediate React concepts and real-world applications. This certification showcases your ability to tackle complex projects, making you stand out in the job market. Ideal for developers looking to take on more challenging React roles and projects.",
  },
  {
    img: logo3,
    title: "Senior React Developer",
    duration: "140 min",
    questions: "50 Questions and 105 minutes of Coding Challenges",
    detail:
      "Demonstrate your expertise in React architecture and large-scale application development. This certification verifies your ability to lead React projects, solve advanced challenges, and architect enterprise-level applications. Position yourself as a top-tier React professional capable of driving complex, high-stakes projects.",
  },
];
