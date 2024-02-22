//import React from 'react'
import Hero from "./hero/Hero"
import Offers from "./offers/Offers"
import Popular from "./popular/Popular"
import NewCollection from "./newCollection/NewCollection";
import NewsLetter from "./newsletter/NewsLetter";


export default function Shop() {
  return (
    <div>
<Hero/>
<Popular/>
<Offers/>
<NewCollection/>
<NewsLetter/>

    </div>
  )
}
