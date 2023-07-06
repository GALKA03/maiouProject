"use client"
import { useState, useEffect } from "react";

 const ScrollUpBtn = () => {
    const [scrollUpBtn, setscrollUpBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setscrollUpBtn(true)
            } else {
                setscrollUpBtn(false)
            }
        })
    }, [])
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
    return (
    <>
        {scrollUpBtn && (
                <button className="fixed bottom-10 right-10 h-10 w-10  md:h-14 md:w-14 text-teal-800 md:text-5xl font-semibold text-wite bg-transparent rounded-full border-2 border-black"
                   
                onClick={scrollUp}>^</button>     
        )}
        </>
    )
}
export default ScrollUpBtn