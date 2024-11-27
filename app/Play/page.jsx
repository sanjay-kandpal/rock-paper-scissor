import Image from "next/image"
import Rocksvg from '../../public/icon-rock.svg'
import Papersvg from '../../public/icon-paper.svg'
import Scissorsvg from '../../public/icon-scissors.svg'
import { useEffect, useState } from "react"

export default function Play({svg}){

    const [computerSvg,setComputerSvg] = useState(svg);
    const [finalValue,setFinalValue] = useState(null);    
    const [svgIndex,setIndex] = useState(null);
    const [retry,setRetry] = useState(false);
    const [IsIntervalComplete,setIsIntervalComplete] = useState(false);
    
    let svgArray = {
        "0": Rocksvg,
        "1": Papersvg,
        "2": Scissorsvg
    }

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
            
            if( i == arr.length){
                
                clearInterval(interval)
                const newFinal = i-1; 
                console.log(arr[newFinal]);
                setFinalValue(newFinal)
                setIsIntervalComplete(true);
            }

            setIndex(arr[i%arr.length])
            i++;    

        },100)
        
        return () => clearInterval(interval)
        
    },[])
    
    
    return(
        <>
            <Image src={svg.src} width="80" height="80" alt="user selected choice" />
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
            {svg.index}{finalValue}
            {IsIntervalComplete && svg.index == finalValue && <button>Retry</button>}    
        </>
    )
}