import { useEffect , useState, useRef} from "react";

export const useNearScreen = ()=>{

    const ref = useRef(null);
    const [ show, setShow ] = useState(false);

    useEffect(()=>{

        Promise.resolve(
            typeof window.IntersectionObserver !== "undefined"
            ? window.IntersectionObserver
            : import("intersection-observer")

        )
            .then(()=>{

                // console.log(ref.current)
                const observer = new window.IntersectionObserver((entries)=>{
                    const { isIntersecting } = entries[0];
        
                    if(isIntersecting){
                        setShow(true)
                        observer.disconnect()
                    }
                   // console.log( { isIntersecting } )
                    // console.log(entries)
                })
                observer.observe(ref.current)

            })

    }, [ref])

    return [show , ref]

}