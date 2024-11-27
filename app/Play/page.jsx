import Image from "next/image"
import Rocksvg from '../../public/icon-rock.svg'
import Papersvg from '../../public/icon-paper.svg'
import Scissorsvg from '../../public/icon-scissors.svg'
import { useEffect, useState } from "react"

export default function Play({svg}){
    const [computerSvg,setComputerSvg] = useState(svg);
    const [finalValue,setFinalValue] = useState(null);
    let svgArray = [Rocksvg,Papersvg,Scissorsvg]
    const [svgIndex,setIndex] = useState(null);

    
    useEffect(() =>{
        let arr = [];
        const getRandomInt =(max) =>{
            return Math.floor(Math.random()*max);
        }
        for (let index = 0; index < 10; index++) {
            const computSvg = getRandomInt(3);
            arr.push(computSvg);
        }
        let i = 0;
        const interval = setInterval(()=>{
            if( i > arr.length){
                clearInterval(interval)
            }
            setIndex(arr[i%arr.length])
            i++;    
        },100)
        
        return () => clearInterval(interval)
        
    },[])

    
    
    return(
        <>
            <Image src={svg} width="80" height="80" alt="user selected choice" />
            <>
                {svgIndex !== null && (
                    <Image 
                        key={svgIndex}
                        src={svgArray[svgIndex]} 
                        width="80" 
                        height="80" 
                        alt="computer selected choice" 
                    />
                )}
            </>
            
        </>
    )
}