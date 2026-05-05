import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Public folder URL under `basePath` (needed for `next/image` with `unoptimized`). */
export function publicAsset(path: string) {
  const prefix =
    process.env.__NEXT_ROUTER_BASEPATH ??
    process.env.NEXT_PUBLIC_BASE_PATH ??
    ''
  const p = path.startsWith('/') ? path : `/${path}`
  return `${prefix}${p}`
}
