import { useState } from "react";

const Accordion=()=>{
    const [show,setShow]=useState(false);
    const handleToggle=()=>{
        // if(show){
        //    setShow(false); 
        // }else{
        //     setShow(true);
        // }
        setShow(!show);
    }
    return(
        <div className="accordion">
            <div className="accordion-header" onClick={handleToggle}>
                <h2>Accordion Heading 🔽</h2>
            </div>
            {
                //Conditional Rendering
                show && (<div className="accordion-body">
                    <span>
                    This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                    </span>
                </div>)
            }
        </div>
    )
}

export default Accordion;