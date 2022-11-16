import React, {useState} from 'react';
import './App.css';
import {FullInput} from './6_lesson/FullInput';
import {Input} from './6_lesson/Input';
import {Button} from './6_lesson/Button';
//import {NewComponent_5} from './5_lesson/NewComponent_5';
//import {Button} from './3_lesson/Button';
//import {Button} from './3_lesson/Button';
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

//Задание с Игорем  на 2-ом допе
/*type ShowType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}*/

/*5-ый урок с Игорем filter*/

//type FilterType = 'all'|'Dollars'|'RUBLES'

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

    //Третий урок
    /*const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = (stupid: string) => {
        console.log(stupid)
    }*/

    /*Задание с Игорем на 2-ом допе*/
    /*const [show, setShow] = useState<ShowType[]>([])

    const useShowUP = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))
    }

    const clean =()=>{
        setShow([])
    }*/

    /*4-ый урок с Игорем useState*/
    /*//let a = 1
    let[a, setA] = useState(1)

    const onClickHandler = () =>{
        setA(++a)
        console.log(a)
    }

    const onClickHandlerNull = () =>{
        setA(0)
        console.log(a)
    }*/

    /*5-ый урок с Игорем filter*/
    /*const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLES', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLES') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLES')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }*/

    //6-ой урок с Игорем input
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }
    
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (

        <>
            <div className="App">
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>


            {/*5-ый урок с Игорем filter*/}
            {/*<ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return <li key={index}>
                        <span>{objFromMoneyArr.banknots}</span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('RUBLES')}>RUBLES</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
            <br/>
            <NewComponent_5/>*/}

            {/*4-ый урок с игорем useState*/}
            {/*<h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerNull}>0</button>*/}

            {/*Задание с Игорем на 2-ом допе */}
            {/*<Button name={'show me'} callBack={useShowUP}/>
            <Button name={'Clean me'} callBack={clean}/>

            <ul>
                {show.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{`${el.completed}`}</span>
                        </li>
                    )
                })}
            </ul>*/}

            {/*Третий урок*/}
            {/*
        <button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChanel-1</button>

        <button onClick={(event) => onClickHandler('VASA')}>MyYouTubeChanel-1</button>
            <button onClick={(event) => onClickHandler('IVAN')}>MyYouTubeChanel-2</button>

        <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasa', 21)}/>
        <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
        <Button name={'Stupid'} callBack={() => Button3Foo('i am stupid')}/>*/}

            {/*//Самостоятельное выполнение 2-х кнопок
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>*/}

            {/*второй урок компонента
            <NewComponent cars={topCars}/>*/}
        </>
    );
}

export default App;
