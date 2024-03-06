interface MenusProps {
  label: string;
  path: string;
  isAccordion?: boolean;
  childs?: {
    label: string;
    path: string;
  }[];
}

export default MenusProps;
