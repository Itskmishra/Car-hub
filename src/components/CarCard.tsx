'use client'

import { useState } from "react"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { calculateCarRent } from "../utils"
import CarDetails from "./CarDetails"

export interface CarInterface{
    city_mpg:number,
    class:string,
    combination_mpg:number,
    cylinders:number,
    displacement:number,
    drive:string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string,
    transmission:string,
    year:number,
}

interface CarCardInterface {
    car:CarInterface
}

const CarCard = ({car}:CarCardInterface) => {

    // Car modal state
    const [isOpen, setIsOpen ] = useState(false)
    // Car Data
    const { city_mpg, year, make, model, transmission, drive} = car
    // Car Rent
    const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
        {/* Company name and model */}
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        {/* Rent */}
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">$</span>
            {carRent}
            <span className="self-end text-[14px] font-medium">/ day</span>
        </p>

        {/* Car Image */}
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src={'/hero.png'} fill alt="Car Model"  priority className="object-contain"/>
        </div>

        {/* Some details about car */}
        <div className="relative flex w-full mt-2">

            <div className="flex group-hover:invisible w-full justify-between text-gray">

                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/steering-wheel.svg'} alt="drive" width={20} height={20}/>
                    <p className="text-[14px]">{transmission === "a" ? "Automatic" : "Manual"}</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/tire.svg'} alt="tire" width={20} height={20}/>
                    <p className="text-[14px]">{drive.toUpperCase()}</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={'/gas.svg'} alt="gas" width={20} height={20}/>
                    <p className="text-[14px]">{city_mpg}</p>
                </div>

            </div>

            {/* Button to open more details view */}
            <div className="car-card__btn-container">
                <CustomButton title="View More" 
                                btnStyle="w-full py-[16px] rounded-full bg-primary-blue"
                                textStyle="text-white text-[14px] leading-[17px] font-bold"
                                handleClick={() => setIsOpen(true)}
                                rightIcon="/right-arrow.svg"/>
            </div>
        </div>
        
        {/* Car Modal to show more deatiled view of car. */}
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  )
}
export default CarCard