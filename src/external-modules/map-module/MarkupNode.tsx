import React from "react";

function MarkupNode({data}){
    
return(
<div className="node-wrapper">
<div className="node-header">
  <h5>{data.name}</h5>
</div>
<div className="node-text">
  <p>{data.oilProdDesc}</p>
  <p>{data.oilProdState}</p>
</div>
<div className="node-text">
  <p>{data.urggDesc}</p>
  <p>{data.urggState}</p>
</div>
<div className="node-text">
  <p>{data.vspDesc}</p>
  <p>{data.vspState}</p>
</div>
</div>)
}
export default MarkupNode