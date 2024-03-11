interface MenusProps {
  label: string;
  path: string;
  to: string;
  isAccordion?: boolean;
  childs?: {
    label: string;
    path: string;
  }[];
}

export default MenusProps;
