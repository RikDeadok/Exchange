import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState ({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    function changeHandler(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

        return (

            <div>
                <h1>AuthPage</h1>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="card blue-grey darken-4">
                            <div className="card-content white-text">
                                <span className="card-title">Войти</span>
                                
                                <div className="input-field">                            
                                    <input
                                        placeholder="Введите email"
                                        id="email"
                                        type="text"
                                        name="email"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="email">email</label>
                                </div>

                                <div className="input-field">                                
                                    <input
                                        placeholder="Введите пароль" 
                                        id="password" 
                                        type="password"
                                        name="password"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="password">password</label>
                                </div>

                            </div>
                            <div className="card-action">
                                <button 
                                    className="btn yellow darken-4"
                                    disabled={loading}
                                    onClick={loginHandler}
                                >
                                    Войти
                                </button>
                                <button 
                                    className="btn grey darken-4"
                                    onClick={registerHandler}
                                    disabled={loading}
                                >
                                    Регистрация
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }