import React, { useState } from 'react'
import POPOSSpace from '../poposspace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json'


function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.map(({ title, address, images, hours }, i) => {
  return (
    <POPOSSpace
      id={i}
      key={title}
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
    />
  )
})

  return (
    <div className="POPOSList">
            <form>
                <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {spaces}
    </div>
  )
}




export default POPOSList
