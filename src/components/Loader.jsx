import Lottie from 'lottie-react'
import loaderAnimation from '../assets/loaderAnimation.json'

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
      <div className="w-32 sm:w-48 md:w-56 lg:w-64">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
    </div>
  )
}

export default Loader