import axios from "axios";
import { CarInterface } from "../components/CarCard";


interface fetchCarsInterface {
    manufacturer: string,
    year: number,
    fuel: string, 
    limit: number,
    model: string,
}


// fetch car function.
const fetchCars = async({manufacturer, year, fuel, limit, model}:fetchCarsInterface) =>  {
    const options = {
        method: 'GET',
        url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,
        params: {
            model: model,
            manufacturer:manufacturer,
            fuel_type:fuel,
            limit: limit,
            year: year,},
        headers: {
          'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };
    try{
        const response = await axios.request(options)
        return response.data
    }catch(err:any){console.log(err)}
}

// 
const calculateCarRent = (city_mpg:number, year:number) => {
    // Base variables
    const basePricePerDay = 50
    const mileageFactor = 0.1
    const ageFactor = 0.05
    // calculating mileage rate and age rate.
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor
    // Calculateing rent
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate
    return rentalRatePerDay.toFixed(0)
}

// Update search Params 
const updateSearchParam = (type:string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type,value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName
}


export { fetchCars, calculateCarRent, updateSearchParam }