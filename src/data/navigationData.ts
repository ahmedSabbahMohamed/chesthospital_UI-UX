const navLinks = [
  { href: "#home", text: "home" },
  { href: "#doctors", text: "doctors" },
  { href: "#services", text: "services" },
  { href: "#about", text: "about" },
];

const receptionNavLinks = [
  { id: 1, href: "/", text: "بحث عن مريض" },
  { id: 2, href: "/add-patient", text: "إضافة مريض" },
];

const managerNavLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/add-employee", text: "Add Employee" },
  { id: 3, href: "/delete-employee", text: "Delete Employee" },
];

const pharmacistNavLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/delete-medicine", text: "Delelte Medicine" },
];

export { navLinks, receptionNavLinks, managerNavLinks, pharmacistNavLinks };
