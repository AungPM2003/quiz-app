export default function Welcome({darkMode}){
    return(
        <>
            <div className="welcome-container">
                <div className="welcome"  style={{color:darkMode ? "#313E51":"#fff"}}>Welcome to the <span>Frontend Quiz!</span></div>
                <div className="pick"  style={{color:darkMode ? "#313E51":"#fff"}}>Pick a subject to get started</div>
            </div>
        </>
    )
}