interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return `https://9000-firebase-bitwize-1772015880235.cluster-cz5nqyh5nreq6ua6gaqd7okl7o.cloudworkstations.dev/${src}?w=${width}&q=${quality || 75}`
}
