/*
What we are creating???

CARDS -> COMPONENT -> FOR REUSABLE CODE 

HOW? -> CARDS.JS -> FUNCTIONAL COMPONENT 
                 -> CLASS BASED COMPONENT (X)

THIS COMPONENT DERIVED FROM A JAVASCRIPT FUNCTION 
*/
//Cards is a Functional Component
function Cards({data}){
    // name & imgPath are props
    if(!data) return <div className="cards-shimmer-layout"></div>
    return(
        // JSX Snippet
            <div className="cards-layout" style={{backgroundColor:data?.eyeColor}}>     
                <p>{`${data?.firstName} ${data?.lastName}`}</p>
                <img src={data?.image} alt="Profile-Avatar"/>
                <h4>@ {data?.username}</h4>
                <h5>My Hair Color is: {data?.hair?.color}</h5>
                <h5>My Hair type is: {data?.hair?.type}</h5>
            </div>
    )
}



export default Cards;