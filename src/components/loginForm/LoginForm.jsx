import { useState } from "react"
import "./loginForm.css"

export default function LoginForm({isActive, setIsLogined}) {

    const [data, setData] = useState({
        name: "",
        password: ""
    })

    function handleChange(e) {
        setData(prevData => {
            return (
                {...prevData,
                    [e.target.name]: e.target.value,
                }
            )
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(data.name && data.password) {
            window.alert(`Вы залогинились!
            Username: ${data.name}
            Password: ${data.password}`)
            setIsLogined(true);
        }
        else window.alert("Проверьте, что вы ввели имя и пароль")
    }

    return ( isActive && (
        <div className="login-wrapper">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Username" value={data.name} onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder="Password" value={data.password} onChange={handleChange}/>
                <input type="submit" value="Login"></input>
            </form>
        </div>
        )
    )


}