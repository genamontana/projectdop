import React from 'react';
import './App.css';
import {Button} from './3_lesson/Button';
//import {NewComponent} from './2_lesson/NewComponent';


// Это со второго урока
/*const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]*/


function App() {

    /*меняли с Олей
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]*/

    /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Im VASA')
    }
    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Im IVAN')
    }*/

    /*const onClickHandler = (name: string) => {
        console.log(name)
    }*/

    //Самостоятельное выполнение 2-х кнопок
    /*const foo1=()=>{
        console.log('100200')
    }
    const foo2=(number: number)=>{
        console.log(number)
    }*/


    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = (stupid: string) => {
        console.log(stupid)
    }


return (

    <>
        {/*<button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChanel-1</button>*/}

        {/*<button onClick={(event) => onClickHandler('VASA')}>MyYouTubeChanel-1</button>
            <button onClick={(event) => onClickHandler('IVAN')}>MyYouTubeChanel-2</button>*/}


        <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasa', 21)}/>
        <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
        <Button name={'Stupid'} callBack={() => Button3Foo('i am stupid')}/>

        {/*<button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel-3</button>*/}

        {/*//Самостоятельное выполнение 2-х кнопок
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>*/}

        {/*второй урок компонента
            <NewComponent cars={topCars}/>*/}
    </>
);
}

export default App;
