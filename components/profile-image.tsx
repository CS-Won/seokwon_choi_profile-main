"use client"

import Image from "next/image"
import { User } from "lucide-react"
import { useState } from "react"
import { publicAsset } from "@/lib/utils"

export function ProfileImage() {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-2xl border-2 border-border bg-muted">
        <User className="h-28 w-28 text-muted-foreground" strokeWidth={1.25} />
      </div>
    )
  }

  return (
    <Image
      src={publicAsset("/images/profile.png")}
      alt="Seokwon Choi"
      width={400}
      height={400}
      className="rounded-2xl object-cover"
      unoptimized
      priority
      onError={() => setBroken(true)}
    />
  )
}
