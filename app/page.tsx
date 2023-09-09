import Navigator from "@/components/Navigator/Navigator"
import { Routes } from "@/models/routes.model"
import desktop from "./desktop.jpg"
import { ImageBlur } from "@/app/image.blur"
import Image from "next/image"
import Banner from "@/components/Banner/Banner"
import { Suspense } from "react"
import Loading from "@/components/Banner/loading"

export default function App() {
  console.log('Hello')
  const dataObj = {
    index:1
  }
  return (
    <main className="text-sky-500">
        <Navigator pathNames={ [ Routes.HOME, Routes.CHARACTERES, Routes.LOCATIONS ] } />
        <h1>Welcome to NextJs</h1>
        <Image 
          src={desktop}
          alt ="Play logo"
          priority
          blurDataURL={ImageBlur}
        />

        <Suspense fallback={ <Loading /> }>

          <Banner data={ dataObj } />
        </Suspense>

    </main>
  )
}
