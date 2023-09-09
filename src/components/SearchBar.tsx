'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { useRouter } from "next/navigation"


// Search button
const SearchBtn = ({otherClasses}:{otherClasses:string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={'/magnifying-glass.svg'}
           alt="search logo"
           width={40}
           height={40}
           className="object-contain"/>
  </button>
)


const SearchBar = () => {

    const router = useRouter()

    
    const [ manufacturer, setManufacturer ] = useState('')
    const [ model, setModel ] = useState('')


    // handle Search function
    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(manufacturer === '' && model === ''){
        return alert("Please fill in the search bar.")
      }
      updateSearchParam(model.toLowerCase(), manufacturer.toLowerCase())
    }
    

    // Update url.
    const updateSearchParam = (model:string, manufacturer:string) => {
      const searchParams = new URLSearchParams(window.location.search)
      if(model){
        searchParams.set("model",model)
      }else{
        searchParams.delete("model")
      }
      if(manufacturer){
        searchParams.set("manufacturer",manufacturer)
      }else{
        searchParams.delete("manufacturer")
      }
      router.push(`${window.location.pathname}?${searchParams.toString()}`)
    }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          {/* Manufacturer Search */}
            <SearchManufacturer manufacturer={manufacturer}
                                setManufacturer={setManufacturer}/>
            <SearchBtn otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          {/* Car Name Search */}
          <Image src={'/model-icon.png'} width={25} height={25}
          className="absolute w-[20px] h-[20px] ml-4" alt="modal"/>
          <input  type="text" 
                  name="model" 
                  value={model}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => setModel(e.target.value)}
                  placeholder="Tiguan"
                  className="searchbar__input"
          />
          <SearchBtn otherClasses="sm:hidden"/>
        </div>
        <SearchBtn otherClasses="max-sm:hidden"/>
    </form>
  )
}
export default SearchBar