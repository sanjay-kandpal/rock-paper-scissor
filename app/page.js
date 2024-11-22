import Image from "next/image";
import Rocksvg from '../public/icon-rock.svg'
import Papersvg from '../public/icon-paper.svg'
import Scissorsvg from '../public/icon-scissors.svg'

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center gap-16 items-center relative">
      <div className="rounded-full border-8">
        <div className="border-2 rounded-full w-20 "> 
          <Image src={Rocksvg} height="100vh" width="0vw" alt="Rock image"  />
          <p> Rock </p>
        </div>
      </div>
      <div className="rounded-full border-8">
        <div className="border-2 rounded-full w-20"> 
          <Image src={Papersvg} height="90vh" width="90vw" alt="Paper image" />
          <p> Paper </p>
        </div>
      </div>
      <div className="rounded-full border-8">
        <div className="border-2 rounded-full w-20"> 
          <Image src={Scissorsvg} height="100vh" width="100vw" alt="Scissor image" />  
          <p> Scissor </p>
        </div>
      </div>
      <div>
        <button className="absolute bottom-10">Rules</button>
      </div> 
    </div>
  );
}
