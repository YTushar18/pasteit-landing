"use client"

import { useState, useEffect } from "react"
import { Logo } from "./logo"
import { CTAButton } from "@/components/cta-button"

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo className={isSticky ? "text-gray-900" : "text-white"} />
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#features" className={`${isSticky ? "text-gray-600" : "text-white"} hover:text-orange-500`}>
              Features
            </a>
            <a href="#demo" className={`${isSticky ? "text-gray-600" : "text-white"} hover:text-orange-500`}>
              Demo
            </a>
            <a href="#reviews" className={`${isSticky ? "text-gray-600" : "text-white"} hover:text-orange-500`}>
              Reviews
            </a>
            <a href="#faq" className={`${isSticky ? "text-gray-600" : "text-white"} hover:text-orange-500`}>
              FAQ
            </a>
            {/* <Button size="sm" className={isSticky ? "bg-orange-500 text-white" : "bg-white text-orange-600"}> */}
              {/* Get PasteIt */}
            {/* </Button> */}
            <CTAButton size="sm" className={isSticky ? "bg-orange-500 text-white" : "bg-white text-orange-600"}>
              Get PasteIt
            </CTAButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

