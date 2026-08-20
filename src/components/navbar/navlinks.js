export const servicesLinks = [
  {
    label: "Web development",
    href: "/services/web-development",
    desc: "Custom, responsive, SEO-optimized sites",
  },
  {
    label: "App development",
    href: "/services/app-development",
    desc: "Cross-platform mobile & web apps",
  },
  {
    label: "Web security",
    href: "/services/web-security",
    desc: "Audits, pen-testing, vulnerability fixes",
  },
  {
    label: "API integration",
    href: "/services/api-integration",
    desc: "Custom APIs & third-party integrations",
  },
  {
    label: "Maintenance & support",
    href: "/services/maintenance",
    desc: "Ongoing fixes and upgrades",
  },
];

export const coursesLinks = [
  {
    label: "MERN stack",
    href: "/courses/mern-stack",
    desc: "MongoDB, Express, React, Node",
  },
  {
    label: "JavaScript fullstack",
    href: "/courses/js-fullstack",
    desc: "End-to-end JS development",
  },
  {
    label: "Python fullstack",
    href: "/courses/python-fullstack",
    desc: "Django/Flask + frontend",
  },
  { label: "All courses", href: "/courses", desc: "View curriculum & pricing" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: servicesLinks },
  { label: "Courses", href: "/courses", dropdown: coursesLinks },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
