import { Icon } from '@iconify/react';
// import { useState } from 'react';
export default function Mode({changeMode,darkMode}){
    return <>
        <div style={{display:"flex",alignItems:"center",gap:".4em",justifyContent:"flex-end"}}>
            <Icon className="mode-icons" style={{color:darkMode ? "#313E51" : "#fff"}} icon="material-symbols-light:dark-mode-outline" />
            <div className='mode-container' style={{justifyContent:darkMode ? "end" : "start"}}>
                <button onClick={changeMode} className='mode'></button>
            </div>
            <Icon className="mode-icons" style={{color:darkMode ? "#313E51" : "#fff"}} icon="material-symbols-light:light-mode-outline" />
        </div>
    </>
}