import React from 'react'
import wheelAlignment from '../../Images/wheelAlignment.jpg'
import './features.css'
import './common.css'
import Service  from '../../Images/service.jpg'
import nitrogen from '../../Images/nitrogen.jpg'
import jktyers from '../../Images/jktyers.jpg'
const Features = () => {
    return (
        <div>
             <h1>Wheel Alignment</h1>
        <div className='features container'>
       
            <div className='wheelImage'>
                <img className='wheel' src={wheelAlignment} alt="Wheel Alignment"  />
            </div>
            <div className='description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ut, eveniet quod earum doloremque velit architecto blanditiis possimus? Quaerat nostrum, quam possimus harum laboriosam consectetur earum rem asperiores maxime! Eum.
            </div>
           
           
            </div>
            <h1>Service & Repairs</h1>
            <div className='features container'>
                <div className='wheelImage'>
                    <img className='wheel'  src={Service} alt="" />
                </div>
                <div className='description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, provident accusantium. Ipsa hic et asperiores tempora praesentium impedit nulla minus laboriosam, repudiandae tenetur totam qui perferendis eius in quia dolores!
                </div>
            </div>
            
            <h1>Nitrogen Fillup</h1>
            <div className='features container'>
                <div className='wheelImage'>
                    <img className='wheel'  src={nitrogen} alt="Nitrogen fillup" />
                </div>
                <div className='description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, provident accusantium. Ipsa hic et asperiores tempora praesentium impedit nulla minus laboriosam, repudiandae tenetur totam qui perferendis eius in quia dolores!
                </div>
            </div>

            <h1>JK Tyers</h1>
            <div className='features container'>
                <div className='wheelImage'>
                    <img className='wheel'  src={jktyers} alt="Nitrogen fillup" />
                </div>
                <div className='description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, provident accusantium. Ipsa hic et asperiores tempora praesentium impedit nulla minus laboriosam, repudiandae tenetur totam qui perferendis eius in quia dolores!
                </div>
            </div>










        </div>
    )
}

export default Features
