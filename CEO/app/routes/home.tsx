import type { Route } from "./+types/home";
import { CEOPortfolio } from "../components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dr. Tofazzal Hossain - CEO & Healthcare Leader" },
    { name: "description", content: "CEO Portfolio - Dr. Tofazzal Hossain, Chief Executive Officer of Servier Operations Bangladesh. Leading pharmaceutical innovation and healthcare transformation across Bangladesh with over two decades of expertise." },
    { name: "keywords", content: "CEO, Healthcare, Pharmaceutical, Bangladesh, Servier, Medical Innovation, Healthcare Leadership, Drug Development, Public Health" },
    { property: "og:title", content: "Dr. Tofazzal Hossain - CEO & Healthcare Leader" },
    { property: "og:description", content: "Leading pharmaceutical innovation and healthcare transformation at Servier Operations Bangladesh." },
    { property: "og:type", content: "profile" },
    { name: "author", content: "Dr. Tofazzal Hossain" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Home() {
  return <CEOPortfolio />;
}
