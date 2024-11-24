"use client"
import Image from "next/image";
import Rocksvg from '../public/icon-rock.svg'
import Papersvg from '../public/icon-paper.svg'
import Scissorsvg from '../public/icon-scissors.svg'
import { useState } from "react";
import Play from "./Play/page";
export default function Home() {
  const [pressed,isPressed] = useState(false);
  const [svg,passSvg] = useState("");
  
  const common = (e) => {
    e.stopPropagation();
    console.log(e);
    const div = e.currentTarget;
    console.log(div);
    const img = div.querySelector('img')
    console.log(img.src);
    
    passSvg(img.src)
    isPressed(true);
  }
  return (

  <div className="border-2 flex flex-col min-h-screen justify-center gap-16 items-center relative border-4">
    <div className="border-2 rounded w-3/6 ">
      <h3>ROCK</h3>
      <h3>PAPER</h3>
      <h3>SCISSOR</h3>      
    </div>
    {pressed ? (<>
         <Play svg={svg} />
      </>
      )
      :(
      <>
        <div className="rounded-full border-8 cursor-pointer flex flex-row" onClick={common}>
          <div className="border-2 rounded-full w-20 "> 
            <Image src={Rocksvg} height="100vh" width="0vw" alt="Rock image" priority />
            <p> Rock </p>
          </div>
        </div>
        <div className="rounded-full border-8 cursor-pointer" onClick={common}>
          <div className="border-2 rounded-full w-20"> 
            <Image src={Papersvg} height="90vh" width="90vw" alt="Paper image" priority/>
            <p> Paper </p>
          </div>
        </div>
        <div className="rounded-full border-8 cursor-pointer" onClick={common}>
          <div className="border-2 rounded-full w-20"> 
            <Image src={  Scissorsvg} height="100vh" width="100vw" alt="Scissor image" priority />  
            <p> Scissor </p>
          </div>
        </div>
        <div className="absolute right-12 bottom-12 cursor-pointer">
          <button className="rounded-full border-4 p-1">Rules</button>
        </div>
      </>
    )}

  </div>

  );
}
