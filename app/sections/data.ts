import { RiPaintFill } from "react-icons/ri";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import AvatarImg from "@/assets/avatar.png";

// display portofolio
import DashboardImg from "@/assets/portofolio/dashboard-mockup.jpg";
import NgebookImg from "@/assets/portofolio/ngebook-mockup.jpg";
import QuizImg from "@/assets/portofolio/quiz-mockup.jpg";
import IdekeenImg from "@/assets/portofolio/idekeen-mockup.jpg";
import ESSImg from "@/assets/portofolio/ess-mockup.jpg";

// logo
import IdekeenLogo from "@/assets/logo/idekeen.jpg";
import ESSLogo from "@/assets/logo/ess.png";
import DashboardLogo from "@/assets/logo/dashboard.png";
import BooksLogo from "@/assets/logo/ngebook.png";
import QuizzLogo from "@/assets/logo/quiz.png";

// tech
import NextJSImg from "@/assets/tech/nextjs.png";
import ReactJSImg from "@/assets/tech/reactjs.png";
import ExpressJSImg from "@/assets/tech/expressJS.png";
import NodeJSImg from "@/assets/tech/nodeJS.png";
import MySqlImg from "@/assets/tech/mysql.png";
import ChakraImg from "@/assets/tech/chakraUI.png";
import AntImg from "@/assets/tech/antDesign.png";

// detailPortofolio
import idekeen1 from "@/assets/portofolio/idekeen/design.png";
import idekeen2 from "@/assets/portofolio/idekeen/card.png";
import idekeen3 from "@/assets/portofolio/idekeen/responsive.png";
import idekeen4 from "@/assets/portofolio/idekeen/mobileLandscape.jpg";
import idekeen5 from "@/assets/portofolio/idekeen/slider.png";
import idekeen6 from "@/assets/portofolio/idekeen/tabs.png";
import idekeen7 from "@/assets/portofolio/idekeen/youtubeEmded.png";

import Dashboard1 from "@/assets/portofolio/dashboard/design.png";
import Dashboard2 from "@/assets/portofolio/dashboard/diagram.png";
import Dashboard3 from "@/assets/portofolio/dashboard/filter.png";
import Dashboard4 from "@/assets/portofolio/dashboard/form.png";
import Dashboard5 from "@/assets/portofolio/dashboard/login.png";

import Quiz1 from "@/assets/portofolio/quizz/login.png";
import Quiz2 from "@/assets/portofolio/quizz/progress.png";
import Quiz3 from "@/assets/portofolio/quizz/responsive.png";
import Quiz4 from "@/assets/portofolio/quizz/timer.png";

import Books1 from "@/assets/portofolio/books/design.png";
import Books2 from "@/assets/portofolio/books/dark-theme.png";
import Books3 from "@/assets/portofolio/books/filter.png";
import Books4 from "@/assets/portofolio/books/login.png";
import Books5 from "@/assets/portofolio/books/responsive.png";

import ESS1 from "@/assets/portofolio/ess-telkom/design.png";
import ESS2 from "@/assets/portofolio/ess-telkom/download-file.png";
import ESS3 from "@/assets/portofolio/ess-telkom/multipage.png";
import ESS4 from "@/assets/portofolio/ess-telkom/responsive.png";
import ESS5 from "@/assets/portofolio/ess-telkom/slider.png";
import ESS6 from "@/assets/portofolio/ess-telkom/tabs.png";

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
    paket: "Paket Wesite E-Commerce",
    price: "3.000.000",
    desc: "Praktis dan ekonomis untuk merintis bisnis",
    isMain: false,
    items: [
      {
        paket: "Starter",
        price: "3.000.000",
        service: [
          "10 - 40 Produk",
          "E-commerce fitur",
          "Tampilan mobile friendly",
          "Free domain & hosting aktif 1 tahun",
          "Pembayaran bank/paypal",
        ],
      },
      {
        paket: "Growth",
        price: "5.000.000",
        service: [
          "50 - 100 Produk",
          "Dashboard admin",
          "Free domain & hosting aktif 1 tahun",
          "Pembayaran bank/paypal",
        ],
      },
      {
        paket: "Pro",
        price: "10.000.000",
        service: [
          "Custom design",
          "Bebas request fitur layanan",
          "Konsultasi kebutuhan dan riset",
          "Dashboard admin",
          "Gratis maintenance 6 bulan",
        ],
      },
    ],
  },
  {
    paket: "Paket Website Company Profile",
    price: "1.500.000",
    desc: "Praktis dan ekonomis untuk merintis bisnis",
    isMain: true,
    items: [
      {
        paket: "Basic",
        price: "1.500.000",
        service: [
          "1 halaman (landing page menarik)",
          "Tampian rapi di HP maupun laptop",
          "Form kontak",
          "Free domain & hosting aktif 1 tahun",
        ],
      },
      {
        paket: "Standar",
        price: "2.500.000",
        service: [
          "3-5 halaman (home, about, services, contact)",
          "Akses untuk update website sendiri",
          "Konten tulisan menarik dan mudah ditemukan search engine google",
          "Free domain & hosting aktif 1 tahun",
        ],
      },
      {
        paket: "Premium",
        price: "3.500.000",
        service: [
          "Desain sesuai kebutuhan dan brand",
          "Konsultasi konsep dan strategi website",
          "Website mudah ditemukan di google",
          "Bebas biaya perawatan selama 1 tahun",
          "Free domain & hosting aktif 1 tahun",
        ],
      },
    ],
  },
  {
    paket: "Paket Website Custom App",
    price: "7.000.000",
    desc: "Custom dengan teknologi advance dan scalable",
    isMain: false,
    items: [
      {
        paket: "Dashboard admin",
        price: "7.000.000",
        service: [],
      },
      {
        paket: "Sistem manajemen data",
        price: "10.000.000",
        service: [],
      },
      {
        paket: "Sistem penjadwalan",
        price: "14.000.000",
        service: [],
      },
      {
        paket: "Sistem konsultasi (chat realtime)",
        price: "17.000.000",
        service: [],
      },
      {
        paket: "Mullti user (lebih dari 2 role)",
        price: "20.000.000",
        service: [],
      },
    ],
  },
];

export const portofolios = [
  {
    id: 1,
    title: "Idekeen: Landing Page",
    link: "https://homepage-idekeen.vercel.app",
    desc: "Landing page bisnis untuk memperkenalkan produk dan layananan Anda",
    img: IdekeenImg,
    paket: "Basic Web",
    logo: IdekeenLogo,
    details: [
      "Merupakan sebuah web profile bisnis idekeen yang responsive untuk semua device, memuat beberapa konten seperti gambar, video dan interface design yang menarik. Website profil bertujuan untuk mengenalkan bisnis Anda berupa layanan, produk, alur transaksi atau menjadi media untuk melakukan transaksi.",
      "Landing page menjadi wajah sebuah bisnis anda, bagaimana value bisnis anda tersampaikan melalui kesan landing page bisnis yang anda miliki. Buat bisnis anda menjadi lebih profesional dan ekspansi bisnis anda agar semakin dikenal oleh calon customer dimulai dengan buat web profile yang menarik, informatif, persuasif dan profesional.",
    ],
    features: [
      "Tab content",
      "Video youtube embed",
      "Content slider",
      "Responsive",
      "Cards",
    ],
    demoImg: [
      idekeen1,
      idekeen2,
      idekeen3,
      idekeen4,
      idekeen5,
      idekeen6,
      idekeen7,
    ],
    techImg: [NextJSImg, ChakraImg],
    demoLink: "https://www.youtube.com/embed/VRH4sqtHz1o?si=vNJeNp8mNu-cW6oS",
  },
  {
    id: 2,
    title: "Dashboard Event Manajemen",
    desc: "Sistem Manajemen yang memudahkan aktivitas operasional perusahaan Anda",
    img: DashboardImg,
    paket: "Platinum Expert",
    logo: DashboardLogo,
    details: [
      "Merupakan web dashboard manajemen event, keuangan dan keanggotaan yang saling terintegrasi. Dashboard menampilkan performa event mulai dari jumlah pengunjung, income, outcome dan peserta event dalam bentuk grafik yang informatif. Dashboard memiliki fitur login, aktivitas manipulasi event (menambahkan, edit, hapus event).",
      "Sistem informasi manajemen pengolaan data akan sangat diperlukan untuk keberlangsungan kegiatan operasional bisnis anda. Manajemen data yang baik yaitu mudah diakses, terintegrasi dan tersimpan secara sistematis akan memudahkan proses evaluasi bisnis anda. Jadi, jangan ragu untuk buat bisnis anda menjadi lebih terstruktur dengan membuat sistem manajemen bisnis anda sekarang.",
    ],
    features: [
      "Chart",
      "Export file",
      "Form",
      "Login-Resgiter User",
      "Design user friendly",
      "Filter multivalue",
    ],
    demoImg: [Dashboard1, Dashboard2, Dashboard3, Dashboard4, Dashboard5],
    techImg: [ReactJSImg, NodeJSImg, ExpressJSImg, ChakraImg, MySqlImg],
    demoLink: "https://www.youtube.com/embed/FVeofSqu1kI?si=uLUDBoYWvO531uSs",
  },
  {
    id: 3,
    title: "Quizz App",
    desc: "Buat quiz atau survey dengan mudah di custome sesuai kebutuhan Anda",
    link: "https://quiziz-six.vercel.app",
    img: QuizImg,
    paket: "Premium Middle",
    logo: QuizzLogo,
    details: [
      "Merupakan sebuah web quizz atau bisa digunakan untuk keperluan kuesioner atau survey bisnis anda. Dengan design yang menarik, responsive dan tampilan yang interaktif akan membuat user nyaman menggunakan aplikasi berbasis website tersebut.",
      "Apabila anda ingin membuat website untuk keperluan pendidikan atau ujian, anda bisa memesannya disini. kemudahan membuat website secara custom akan membuat anda lebih mudah membuat fitur ataupun tampilan sesuai keinginan anda.",
    ],
    features: ["Login", "Responsive", "Timer", "Progress Bar"],
    demoImg: [Quiz1, Quiz2, Quiz3, Quiz4],
    techImg: [ReactJSImg, ChakraImg],
    demoLink: "https://www.youtube.com/embed/gZEn__P5hog?si=Er1u1LiCJdzwcwto",
    account: ["user@mail.com", "user123"],
  },
  {
    id: 4,
    title: "Books App",
    link: "http://book.labrisetess.com",
    desc: "Aplikasi manajemen buku store online sederhana dengan design menarik dan user friendly",
    img: NgebookImg,
    paket: "Premium Middle",
    logo: BooksLogo,
    details: [
      "Merupakan sebuah web book apps sejenis sebuah ecommerce sederhana, terdapat aktivitas menambahkan, edit, delete data buku dan menambahkan buku ke keranjang. Selain itu user bisa mengatur light-dark theme sesuai keinginan. Tampilan yang menarik, user friendly dan responsive di semua device.",
      "Jika anda menginkan bisnis anda memiliki market place, anda bisa memesan website market place di layanan kami. Kelebihan membuat market place sendiri ialah anda bisa memantau, membuat fitur atau custom alur sistem sesuai kebutuhan anda. Hal itu akan jauh lebih mudah dan aman jika anda memilki sistem internal untuk kegiatan operasional bisnis anda.",
    ],
    features: [
      "Login",
      "Design user friendly",
      "Responsive",
      "Dark-light theme",
      "Searching",
      "Sort dan filter multivalue",
    ],
    demoImg: [Books1, Books2, Books3, Books4, Books5],
    techImg: [ReactJSImg, ChakraImg, AntImg],
    demoLink: "https://www.youtube.com/embed/uAnzqVQZZug?si=zgPC7dxVA463o-1O",
    account: ["user@mail.com", "midorima"],
  },
  {
    id: 5,
    title: "ESS Telkom: Laboratorium Riset",
    link: "https://labrisetess.com",
    desc: "Landing page komunitas untuk memperkenalkan program dan produk komunitas Anda",
    img: ESSImg,
    paket: "Basic Web",
    logo: ESSLogo,
    details: [
      "Merupakan sebuah web profile komunitas pendidikan yang responsive untuk semua device, memuat beberapa konten seperti gambar, design yang menarik dan dapat melakukan download file. Web profile ini bertujuan untuk mengenalkan project komunitas pendidikan. Fitur web ini dilengkapi dengan dinamic halaman yaitu detail event program.",
      "Landing page menjadi wajah sebuah komunitas anda, bagaimana value komunitas anda tersampaikan melalui kesan landing page komunitas yang anda miliki. Buat komunitas anda menjadi lebih profesional dan semakin dikenal dimulai dengan buat web profile yang menarik, informatif, persuasif dan profesional.",
    ],
    features: [
      "Tab content",
      "Multipage",
      "Design user friendly",
      "Responsive",
      "Download file",
      "Slider Image",
    ],
    demoImg: [ESS1, ESS2, ESS3, ESS4, ESS5, ESS6],
    techImg: [NextJSImg, ChakraImg, AntImg],
    demoLink: "https://www.youtube.com/embed/qcn4aL2scMY?si=1zbgrFdFdus_s-Zl",
  },
];

export const testimonies = [
  {
    testimoni:
      "Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.",
    name: "Matt Cannon",
    role: "Head of Marketing",
    img: AvatarImg,
  },
  {
    testimoni:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    name: "John Doe",
    role: "Owner Figma",
    img: AvatarImg,
  },
  {
    testimoni:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    name: "Samuel Safer",
    role: "Staff of Engineering",
    img: AvatarImg,
  },
];
