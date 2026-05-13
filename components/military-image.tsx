"use client"

import Image from "next/image"
import { Shield } from "lucide-react"
import { useState } from "react"
import { publicAsset } from "@/lib/utils"

export function MilitaryImage() {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-2xl border-2 border-border bg-muted">
        <Shield className="h-24 w-24 text-muted-foreground" strokeWidth={1.25} />
      </div>
    )
  }

  return (
    <Image
      src={publicAsset("/images/military.png")}
      alt="Seokwon Choi in ROK Army uniform"
      width={800}
      height={800}
      className="h-full w-full rounded-2xl object-cover object-top"
      unoptimized
      priority
      onError={() => setBroken(true)}
    />
  )
}
