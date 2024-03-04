import { RiPaintFill } from "react-icons/ri";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import PortofolioImg from "@/assets/porto.png";

export const benefits = [
  {
    title: "Design Menarik",
    icon: RiPaintFill,
    desc: "Tampilan Web yang user friendly akan mempercepat Transaksi",
  },
  {
    title: "Konsultasi Gratis",
    icon: MdOutlineMarkUnreadChatAlt,
    desc: "Konsultasi pengembangan website anda boleh secara cuma-cuma",
  },
  {
    title: "Hemat Besar",
    icon: RiMoneyDollarCircleLine,
    desc: "Harga murah meriah dengan kualitas dijamin bintang lima",
  },
  {
    title: "Jaminan Kepuasan",
    icon: FaRegFaceLaughBeam,
    desc: "Kepuasan anda adalah prioritas dan komitmen kami",
  },
];

export const services = [
  {
    paket: "Premium Middle",
    price: "2.500.000",
    desc: "Praktis dan ekonomis untuk merintis bisnis",
    isMain: false,
    items: [
      "Custome design",
      "3x revisi gratis",
      "3x update konten gratis",
      "Garansi 1 tahun",
      "Fitur menyesuaikan kebutuhan",
    ],
  },
  {
    paket: "Basic Web",
    price: "700.000",
    desc: "Praktis dan ekonomis untuk merintis bisnis",
    isMain: true,
    items: [
      "Custome design",
      "2x revisi gratis",
      "2x update konten gratis",
      "Garansi 1 tahun",
    ],
  },
  {
    paket: "Platinum Advance",
    price: "6.000.000",
    desc: "Praktis dan ekonomis untuk merintis bisnis",
    isMain: false,
    items: [
      "Custome design",
      "3x revisi gratis",
      "3x update konten gratis",
      "Garansi 1 tahun",
      "Fitur menyesuaikan kebutuhan",
      "Dokumentasi alur sistem",
    ],
  },
];

export const portofolios = [
  {
    title: "Idekeen: Landing Page",
    desc: "Intip sebagian dari proyek-proyek website terbaik kami",
    img: PortofolioImg,
  },
  {
    title: "Dashboard Event Manajemen",
    desc: "Intip sebagian dari proyek-proyek website terbaik kami",
    img: PortofolioImg,
  },
  {
    title: "Quizz App",
    desc: "Intip sebagian dari proyek-proyek website terbaik kami",
    img: PortofolioImg,
  },
  {
    title: "Books App",
    desc: "Intip sebagian dari proyek-proyek website terbaik kami",
    img: PortofolioImg,
  },
  {
    title: "Idekeen: Laboratorium Riset",
    desc: "Intip sebagian dari proyek-proyek website terbaik kami",
    img: PortofolioImg,
  },
];
