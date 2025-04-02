/*
What we are creating???

CARDS -> COMPONENT -> FOR REUSABLE CODE 

HOW? -> CARDS.JS -> FUNCTIONAL COMPONENT 
                 -> CLASS BASED COMPONENT (X)

THIS COMPONENT DERIVED FROM A JAVASCRIPT FUNCTION 
*/
//Cards is a Functional Component
function Cards(){
    return(
        // JSX Snippet
            <div className="cards-layout"> 
                <p>Name</p>
                <img src="profile-image.png"/>
            </div>
    )
}



export default Cards;