import React from 'react'   
import C_nabar from '../components/C_navbar'
import C_pembukaan from '../components/C_pembukaan'
import C_aqiqah from '../components/C_aqiqah'
import C_minikatalok from '../components/C_minikatalok'
import C_footer from '../components/C_footer'


const P_landing = () => {
    return (
        <div className='container m-auto' >
            <C_nabar />
            <C_pembukaan />
            <C_aqiqah />
            <C_minikatalok />
            <C_footer />
        </div>
    )
}

export default P_landing