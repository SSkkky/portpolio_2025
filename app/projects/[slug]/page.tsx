"use client";

import { motion } from "framer-motion";
import { useRouter, useParams, notFound } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import dataJSON from "@/app/assets/data.json";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = useParams(); // title
  const services = ['title', 'date', 'member', 'year', 'desc'];

  const data = dataJSON.find((el) => el.slug === slug);
  console.log(data);

  // 데이터가 없을때 notFound로 이동
  if (!data) {
    return notFound();
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.div
      //  layoutId={`project-${data.id}`}
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="page-wrapper min-h-screen"
    >
      {/*         1. 메인          */}
      <section className="w-screen h-screen flex">
        <div className="texts w-1/2 p-12">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-white text-black rounded border hover:bg-gray-200"
          >
            ← 뒤로가기
          </button>
          <h1 className="text-8xl font-bold mt-[20vh] mb-4">{data.title}</h1>
          <section className="mt-[15vh] flex gap-10 font-bold">
            <h2>Service</h2>
            <ul>
              {
                services.map((item, key)=>(
                  <li key={key} className="flex border-t-1 p-1">
                    <h3 className="w-[140px]">{item}</h3>
                    <p className="w-[100%] font-normal">{data[item]}</p>
                  </li>
                ))
              }
              <li className="flex border-t-1 p-1">
                <h3 className="w-[140px]">tags</h3>
                <ul className="w-[100%] font-normal flex gap-1">
                  {
                    data.tags.map((text, key)=>(
                      <li key={key} className="bg-gray-200 rounded-full px-3 text-sm">{`#${text}`}</li>
                    ))
                  }
                </ul>
              </li>
            </ul>
          </section>
        </div>
        <img
          src={`/assets/projects/${data.id}/thumb.png`}
          alt={data.desc}
          className="w-1/2 h-full p-4 object-cover"
        />
      </section>
      {/*         2. overview          */}
      <section className="w-screen h-screen flex bg-black">
        <img
          src={`/assets/projects/${data.id}/thumb.png`}
          alt={data.desc}
          className="w-full h-full object-cover"
        />
      </section>
      {/*         3. features          */}
      <section className="w-screen h-screen flex bg-black">
        <img
          src={`/assets/projects/${data.id}/thumb.png`}
          alt={data.desc}
          className="w-full h-full object-cover"
        />
      </section>


    </motion.div>
  );
}
