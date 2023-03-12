type CityType = {
    country: string
    cityName: string
}
type AddressType = {
    city: CityType
    street: string
}
type TechType = {
    id: number
    techName: string
}
type StudentType = {
    id: number
    name: string
    age: number
    address: AddressType
    technologies: Array<TechType>

}
export const student: StudentType = {
    id: 1,
    name: "Max",
    age: 36,
    address: {
        city: {
            country: "Belarus",
            cityName: "Minsk"
        },
        street: "Fedorova"
    },
    technologies: [
        {
            id: 1,
            techName: "CSS"
        },
        {
            id: 2,
            techName: "Js"
        },
        {
            id: 3,
            techName: "React"
        }
    ]
}