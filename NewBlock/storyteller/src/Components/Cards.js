/*
What we are creating???

CARDS -> COMPONENT -> FOR REUSABLE CODE 

HOW? -> CARDS.JS -> FUNCTIONAL COMPONENT 
                 -> CLASS BASED COMPONENT (X)

THIS COMPONENT DERIVED FROM A JAVASCRIPT FUNCTION 
*/
//Cards is a Functional Component
function Cards({name,imgPath}){
    // name & imgPath are props
    return(
        // JSX Snippet
            <div className="cards-layout"> 
                <p>{name}</p>
                <img src={imgPath} alt="Profile-Avatar"/>
            </div>
    )
}



export default Cards;