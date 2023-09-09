'use client'

import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"
import { updateSearchParam } from "../utils"


interface ShowMoreInterface {
  pageNumber: number,
  isNext:boolean
}

const ShowMore = ({pageNumber, isNext}:ShowMoreInterface) => {

  const router = useRouter()
  const handleNavigattion = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathName = updateSearchParam("limit", `${newLimit}` )
    router.push(newPathName)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton title="Show more"
                      type="button"
                      btnStyle="bg-primary-blue rounded-full text-white" 
                      handleClick={handleNavigattion}/>
        )}
    </div>
  )
}
export default ShowMore