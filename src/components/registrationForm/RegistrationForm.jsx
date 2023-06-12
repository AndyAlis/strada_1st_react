import { useState } from "react"
import "./registrationForm.css"

export default function RegistrationForm({isActive,setShowLogin, setShowRegistration}) {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
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
        if(data.name && data.email && data.password && data.password2 && (data.password === data.password2)) {      
            window.alert(`Вы зарегестрированы!
            Username: ${data.name}
            Email: ${data.email}
            Password: ${data.password}`);
            setShowRegistration(false);
            setShowLogin(true);
        }

        else window.alert("Проверьте, что заполнили все поля и оба пароля совпадают!")
    }

    return ( isActive && (
        <div className="reg-wrapper">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Username" value={data.name} onChange={handleChange}/>
                <input type="email" name="email" id="email" placeholder="Email" value={data.email} onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder="Password" value={data.password} onChange={handleChange}/>
                <input type="password" name="password2" id="password2" placeholder="Password again" value={data.password2} onChange={handleChange}/>
                <input type="submit" value="Register"></input>
            </form>
        </div>
    )
    )


}