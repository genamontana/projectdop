import React from 'react';
import './App.css';
import {Header} from './1_lesson/Header';
import {Body} from './1_lesson/Body';
import {Footer} from './1_lesson/Footer';

function App() {
    return (
        <>
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
        </>
    );
}

export default App;
