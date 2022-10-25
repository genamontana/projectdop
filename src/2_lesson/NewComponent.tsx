/*type NewComponentType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number,
    name: string,
    age: number
}*/

type TopCarsType = {
    manufacturer: string,
    model: string
}


export const NewComponent = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <table>
            {topCars.map((topCars, index) => {
                return (
                    <tr>
                        <td><span>{topCars.manufacturer}</span></td>
                        <td><span> {topCars.model}</span></td>
                    </tr>
                )
            })}
        </table>
    )
}