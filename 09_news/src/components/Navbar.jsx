import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='line'>
            <h1>Home</h1>
            <h1>About</h1>
            {/* <div> */}
                <form action="">
                <input type="text" placeholder='search here' />
                <button>Search</button>
                </form>
            {/* </div> */}
        </div>

    </div>
  )
}

export default Navbar
