import React from 'react'
import Lottie from 'react-lottie'
import CarAccident from '../../assets/LottieFiles/carAccident.json'
const PreLoader = () => {
    const defaultOption={
        loot:true,
        autoplay:true,
        animationData : CarAccident,
        rendererSetttings:{
            preserveAspectRatio:'xMidYMidslice'
        }
    }
    return (
        <div>
            <Lottie options={defaultOption} width={400} height={400}></Lottie>
        </div>
    )
}

export default PreLoader
