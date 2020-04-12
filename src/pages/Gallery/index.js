import React from "react";
import { Switch, Route } from "react-router-dom";

import Photos from "./photos";

export default function GalleryPage(){
  return(
      <Switch>
          <Route exact path='/gallery' component = {Photos}/>
      </Switch>
  )
};




// import React from 'react';
// // import { useParams } from "react-router-dom"

// export default (props) =>{
//     // const { id } = useParams();
//     // console.log(id);
//     return(
//         <h1>Gallery</h1>
//     );
// }