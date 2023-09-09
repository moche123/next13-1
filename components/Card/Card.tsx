import Image from "next/image"
import { ImageBlur } from "@/app/image.blur"

function Card({ data }:any) {
  let formattedType = data.type
  formattedType ||= "No type"
    return (
    <>
      {
        data.image && (
          <div>
            Name: {data.name}
            Type: {formattedType}
            {
              data.image && (
                <Image alt="image" priority src={data.image} 
                                   width="100"
                                     height="100"
                                     blurDataURL={ImageBlur} />
              )
            }
          </div>
        )
  
      }
    </>
  )
}

export default Card