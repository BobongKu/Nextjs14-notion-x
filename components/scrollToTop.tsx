"use client"
import { useState, useEffect } from "react"
import Animation from "./animation";
import lottieJson from "../public/scrollup.json"

export default function ScrollToTop(){
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton &&(
        <div className="fixed z-30 right-10 bottom-8">
            <button className="w-14 md:w-20 bg-gray-600 bg-opacity-20 md:border-none 
                            hover:border-gray-600 hover:bg-opacity-60 " onClick={scrollToTop} type="button" >
                <Animation lottieJson={lottieJson}/>
            </button>
        </div>
    )
}