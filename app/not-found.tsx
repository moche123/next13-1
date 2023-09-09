import Navigator from "@/components/Navigator/Navigator"
import { Routes } from "@/models/routes.model"

function NotFound() {
  return (
    <div>
        <Navigator pathNames={ [ Routes.HOME, Routes.CHARACTERES, Routes.LOCATIONS ] } />
        404 - Route not found
        
    </div>
  )
}

export default NotFound