import React from 'react'
import C_usernavbar from '../components/C_usernavbar'
import C_userpembukaan from '../components/C_userpembukaan'
import C_usertimeline from '../components/C_usertimeline'
import C_footer from '../components/C_footer'

const P_user = () => {
  return (
    <div className='container m-auto'> 
        <C_usernavbar />
        <C_userpembukaan />
        <C_usertimeline />
        <C_footer />
    </div>
  )
}

export default P_user