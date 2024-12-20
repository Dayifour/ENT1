import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-between bg-slate-100 h-full fixed w-full">
      <Sidebar />
      <div>
        <Header />
      </div>
    </div>
  );
}
