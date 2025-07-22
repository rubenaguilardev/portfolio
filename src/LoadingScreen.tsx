import { useState, useEffect } from 'react'


type LoadingScreenProps = {
    onComplete: () => void
}

const LoadingScreen = ({ onComplete}: LoadingScreenProps) => {

    const [text, setText] = useState('')
    const fullText = "<Ruben />"

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++

            if (index > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    onComplete()
                }, 1000)
            }
        }, 100)

        return () => clearInterval(interval)
    }, [onComplete])


    return (
        <div className='fixed flex flex-col justify-center items-center inset-0 z-50 bg-black text-gray-100'>
            <div className='mb-4 text-4xl font-mono font-bold'>
                {text} <span className="animate-blink ml-1"> | </span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-full h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    )
}

export default LoadingScreen