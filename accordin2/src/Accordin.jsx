import React,{useState} from 'react'

const Accordin = ({items}) => {
    const [activeIndex,setActiveIndex] = useState(null);
    const handleOnClick = (index) => {
        setActiveIndex(index===activeIndex?null:index)
    }
    return (
        <div>
            {
                items.map((item,index)=>{
                    const isActive = activeIndex === index
                   return( 
                   <div key={index}>
                        <div key={index} onClick={()=>handleOnClick(index)}>{item.title}</div>
                        {isActive && <div>{item.content}</div>}
                    </div>
                    )
                })
            }
        </div>
    )
    
}

export default Accordin