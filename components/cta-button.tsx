"use client"

import { Button } from "@/components/ui/button"
import type React from "react" // Added import for React

interface CTAButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
  children: React.ReactNode
}

export function CTAButton({ className, size = "default", children }: CTAButtonProps) {
  return (
    <Button
      size={size}
      className={className}
      onClick={() =>
        window.open("https://chrome.google.com/webstore/detail/foiaocdbmfnbjhcnjbcdjaddjbghmefc", "_blank")
      }
    >
      {children}
    </Button>
  )
}

