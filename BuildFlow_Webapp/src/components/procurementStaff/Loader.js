import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
function Loader() {
  
 
  return (
    <div className="sweet-loading text-center" style={{marginTop:'100px'}}>
      <FadeLoader color={'#C43D15'} loading={true} css='' size={50}  />
    </div>
  );
}

export default Loader;