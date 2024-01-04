import { Icon } from '@iconify/react';
export default function Choice(){
    const choices = [
    {
        id:"1",
        title:"HTML",
        icon:"dashicons:html",
        bgColor:"#FFEDDF",
        color:"#FF8549"
    },
    {
        id:"2",
        title:"CSS",
        icon:"fluent:paint-brush-16-regular",
        bgColor:"#DEFEF4",
        color:"#61FF22"
    },
    {
        id:"3",
        title:"Javascript",
        icon:"fa-brands:js",
        bgColor:"#E1EEFF",
        color:"#758ACC"
    },
    {
        id:"4",
        title:"Accessibility",
        icon:"fluent:accessibility-32-regular",
        bgColor:"#F8E6FC",
        color:"#AE6FC7"
    }
    ]
    
    const options = choices.map((choice)=>{
        return (
            <>
                <div className='choice-container'>
                    <div key={choice.id} style={{backgroundColor:choice.bgColor}}
                    className='icon-container'>
                        <Icon style={{color:choice.color}}icon={choice.icon}/>
                    </div>
                    <div style={{fontWeight:"bold"}}>{choice.title}</div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className='choice' style={{}}>
            {options}
            </div>
        
        </>
    )
}