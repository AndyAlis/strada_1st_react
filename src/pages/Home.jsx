import Header from "../components/header/Header"

export default function Home({isLogined, login, register,setIsLogined}) {
    return (
        <>
            <Header isLogined={isLogined} login={login} register={register} setIsLogined={setIsLogined}/>
            <div style={{marginTop: "3rem", textAlign: "center", fontSize: "60px"}}>
            {isLogined ? <h2>You are logined!</h2> : <h2>Please login!</h2>}
            </div>
        </>
    )
}