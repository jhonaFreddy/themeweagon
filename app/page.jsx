import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen overflow-auto overflow-x-auto ">
      <Navbar/>
      <img src=""/>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-20">
        <div className=" flex flex-col text-center">
          <h2 className="h-[70px] w-[439px] text-5xl font-semibold bg-gradient-to-r
           from-purple-400 via-blue-400 to-blue-400 logo text-transparent">
          Bootstrap 5 theme
          </h2>
          <h3 className="text-4xl  font-thin">
          crafted by <strong className="font-[600]">ThemeWagon</strong> 
          </h3>
          <p className="h-11 w-96 text-base font-normal">
          ThemeWagon offers an wide array of category-oriented Free and Premium Bootstrap HTML Templates and Themes.
          </p>
          
        </div>
        <button className="bg-gradient-to-r from-purple-500 via-indigo-purple-200 to-indigo-500 text-white w-32 h-9 rounded-lg shadow-slate-500 shadow-lg">
            Check Demo
          </button>
        </div>
        <figure>
          <img src='homeimages/fondoHome.png' className=""/>
        </figure>
      </div>
      <div className="flex justify-center gap-20 mt-36 ">
        <a href="https://www.google.com/"><img src="homeimages/google.png" className="w-28 h-9"/></a>
        <a href="https://www.netflix.com/bo/"><img src="homeimages/netflix.png" className="w-28 h-7"/></a>
        <a href="https://www.microsoft.com/es-bo"><img src="homeimages/microsoft.png" className="w-36 h-8"/></a>
        <a href="https://mailbluster.com/"><img src="homeimages/mailbuster.png" className="w-52 h-10"/></a>
        <a href="https://themewagon.com/"><img src="homeimages/themewagon.png" className="w-32 h-12"/></a>
      </div>
    </div>
  );
}
