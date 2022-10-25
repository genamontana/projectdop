/*type NewComponentType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number,
    name: string,
    age: number
}*/

type NewComponentType = {
    cars: Array<TopCarsType>
}

export type TopCarsType = {
    manufacturer: string,
    model: string
}



export const NewComponent = (props:NewComponentType) => {

    return (
        <table>
            {props.cars.map((topCars, index) => {
                return (
                    <tr key={index}>
                        <td><span>{topCars.manufacturer}</span></td>
                        <td><span> {topCars.model}</span></td>
                    </tr>
                )
            })}
        </table>
    )
}