import React from 'react'
import ReactDOM from 'react-dom/client' 

// function Greeting(){
//     return <h2>My first holy moly it works  Cnoway omponenet</h2>
// }

function Greeting2(){
    return React.createElement('h2',{}, 'heelo world from Gretting2 function')
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting2 />)



