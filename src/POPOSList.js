import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';


const titles = data.map((obj) => {
  return <h1>{obj.title}</h1>
})
function POPOSList() {

  const spaces = data.map(({ title, address, images, hours }) => {
  // Make a variable for each property
 

  return (
    <POPOSSpace
      key={title}
      name={title} // no need for obj. here
      address={address}
      image={images[0]}
      hours={hours}
    />
  )
})

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}




export default POPOSList

console.log(titles)