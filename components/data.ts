export const menus = [
  {
    label: "Home",
    path: "/",
    to: "home",
  },
  {
    label: "Service",
    path: "/#service",
    to: "service",
    isAccordion: true,
    childs: [
      {
        label: "Basic Web",
        path: "service",
      },
      {
        label: "Premium Middle",
        path: "service",
      },
      {
        label: "Platinum Advance",
        path: "service",
      },
    ],
  },
  {
    label: "Product",
    path: "/#product",
    to: "product",
  },
  {
    label: "About",
    path: "/#about",
    to: "about",
  },
  {
    label: "Contact Us",
    path: "/#contact",
    to: "contact",
  },
];
