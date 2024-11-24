import Image from "next/image"
import Rocksvg from '../../public/icon-rock.svg'
import Papersvg from '../../public/icon-paper.svg'
import Scissorsvg from '../../public/icon-scissors.svg'
import { useState } from "react"

export default function Play({svg}){
    const [computerSvg,setComputerSvg] = useState(null);
    let svgArray = [Rocksvg,Papersvg,Scissorsvg]
    setTimeout(() => {
        const computSvg = getRandomInt(3);
        setComputerSvg(svgArray[computSvg])
        
    },200)
    const getRandomInt =(max) =>{
        return Math.floor(Math.random()*max);
    }
    return(
        <>
            <Image src={svg} width="80" height="80" alt="selected toy" />
            <Image src={computerSvg} width="80" height="80" alt="selected toy" />
            
        </>
    )
}