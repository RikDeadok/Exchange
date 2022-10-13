import { Callbacks } from 'jquery'
import React, {useState} from 'react'
import { SubNavbarAbout } from '../components/SubNavbarAbout'

export const ProjectPage = () => {

    const [text, setText] = useState ({
        textarea1: 'Say privet'
    })
    
    function changeHandler(event) {
        setText({ ...text, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }

    const hello = ['privet', 'hi', 'salut']
    const ask = {...text}.textarea1.toLowerCase()

    const pushHandler = async () => {
            if (
                hello.find(item => item === ask)
            ) {
                console.log('hello')
            } else {
                console.log('goodbye')
            }
        }; 
        // if (
        //     {...text}.textarea1 === element
        // ) {
        //     alert('hello')
        // } else alert('goodbye')


    return (
        <div className="footer_magnit">

            <SubNavbarAbout/>

            <h1>ProjectPage</h1>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea 
                                id="textarea1"
                                name="textarea1"
                                className=""
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <button 
                className="btn waves-effect waves-light" 
                type="submit" 
                name="action"
                onClick={pushHandler}
            >
            Отправить
            </button>


        </div>
    )
}