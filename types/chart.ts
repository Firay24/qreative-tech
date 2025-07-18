interface ChartProps {
  paket: string;
  desc: string;
  price: string;
  isMain: boolean;
  items: ItemsProps[];
}

export interface ItemsProps {
  paket: string;
  price: string;
  service: string[];
}

export default ChartProps;
