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
        path: "/basic",
      },
      {
        label: "Premium Middle",
        path: "/midle",
      },
      {
        label: "Platinum Advance",
        path: "/advance",
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
