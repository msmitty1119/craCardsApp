import IdCard from "./IDcard";
import Data from "../Data.json"

const IDCards = () => {
    
    
    
    return ( <>
        <h1>IDCards</h1>
        {
           Data.data.map( elm => {
            return <IdCard key={elm.id} name={elm.name} age={elm.age} des={elm.des}/>
        }) }
    </> );
}
 
export default IDCards;