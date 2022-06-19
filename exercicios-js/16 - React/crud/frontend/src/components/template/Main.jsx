import './Main.css';
import React from 'react'
import Header from './Header'

const Main = props => { <Header/>
    return <React.Fragment>
        <Header {...props}/> {/*recebe as propriedades do elemento Pai*/}
        <main className="content container-fluid">
            <div className='p-3 mt-3'>
                {props.children}
            </div>
        </main>
    </React.Fragment>
}

export default Main;