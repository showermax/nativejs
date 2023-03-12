import {isNumber} from "util";

type StreetAddressHousesType ={
    title: string
}
type AddressHousesType = {
    number: number
    street: StreetAddressHousesType
}
type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressHousesType
}

type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressHousesType

}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}