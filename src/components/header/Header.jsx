import "./header.css"

export default function Header({isLogined, login, register,setIsLogined}) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">Logo here</div>
                <div className="login-container">
                    {!isLogined ? 
                    <><button onClick={()=>{login(true); register(false)}}>Login</button>
                    <button onClick={()=>{register(true);login(false)}}>Register</button></>
                    :
                    <button onClick={()=>{setIsLogined(false);login(false)}}>Logout</button>}
                </div>
            </div>
        </header>
    )
}