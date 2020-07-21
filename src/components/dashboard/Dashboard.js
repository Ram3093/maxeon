import React, { Component } from 'react'
import Banner from '../../image/Banner.png'
import SparowBird from '../../image/Sparrow Bird.png'
import Navbar from '../navigation/Navbar'
import './index.css'

class Dashboard extends Component {
    render() {
        return (
            <div className=''>
                    <div className='dashboard'>
                          <img src={ Banner } alt='brand-img' width="100%" height='785px' className='' />
                        
                            <div className='navbar'>
                                   < Navbar />
                             </div>
                                   <div className=' text-user'>
                                        <div className='row'>
                                              <div className='col l4 m4 s4 heading1' >
                                                  Where words fail, Music speaks.
                                              </div>
                                        </div> 
                                     
                                    </div>
                                    <div className='sparrow-bird'>
                                         <span><img src={SparowBird} alt='sparrow-bird'/></span>
                                    </div>
                    </div>
            
            </div>
        )
    }
}

export default Dashboard
