import React from 'react';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
function App() {

    return (
        <>
        <Header />
            <main>
                <section className='main'>
                    <Main />
                </section>
            </main>
        </>
    )
}

export default App