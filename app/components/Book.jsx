import { useRef } from "react"
import { pages } from "./UI"
import { BoxGeometry } from "three";



const Page = ({number, front, back, ...props}) => {
    const group = useRef();

    const PAGE_WIDTH = 1.28;
    const PAGE_HIGHT = 1.71;
    const PAGE_DEPTH = 0.003;
    const PAGE_SEGMENTS = 30;
    const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

    const pageGeometry = new BoxGeometry(
    PAGE_WIDTH,
    PAGE_HIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    1, // heightSegments
    2  // depthSegments
);

// here

    return(
        <group {...props} ref={group}>
                <mesh scale={1}>
                    <primitive object={pageGeometry} attach={"geometry"}/>
                    <meshBasicMaterial color='red'/>
                </mesh>
        </group>
    )
}


export const Book = ({...props}) => {
    return (<group {...props}>)
    {
        [...pages].map((pageDate, index)=>(
            index === 0 ?(
            <Page position-x={index * 0.15} key={index} number={index} {...pageDate}/>
        ):null
        ))}
    
    </group>) 

}