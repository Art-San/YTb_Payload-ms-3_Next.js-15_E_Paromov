import { getPayload } from 'payload'
import config from '@payload-config'
import { getAppPayload } from '@/shared/payload'

export default async function MoviesList() {
  const payload = await getAppPayload()
  const movies = await payload.find({
    collection: 'movies'
  })
  return <div className="">tyy</div>
}

// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }
