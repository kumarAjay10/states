import React, { useState } from "react";

const Object = () => {
  let [coins, setCoins] = useState({ gold: 0, silver: 0, bronze: 0 });
  //   console.log("coins",coins);

  let goldInc = () => {
    
// setCoins(coins.gold + 1);// we cannot like this becoz we have to spread operator ,it will copy the object and gets updated
     setCoins({...coins,gold:coins.gold+1})
};

  return (
    <div>
      <h1>
        gold:{coins.gold}| silver:{coins.silver} | bronze:{coins.bronze}
      </h1>
      <button onClick={goldInc}>Increase gold</button>
      <button onClick={()=>setCoins({...coins,silver:coins.silver+1})}>Increase silver</button>
      <button onClick={()=>setCoins({...coins,bronze:coins.bronze+1})}>Increase bronze</button>
    </div>
  );
};

export default Object;
