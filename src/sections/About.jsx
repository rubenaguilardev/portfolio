import { Square, Minus, X } from 'lucide-react'

const About = () => {

    const about = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda rerum ex obcaecati dolore facilis nihil iusto qui quis culpa in earum neque corrupti molestias, doloremque voluptatum! Facere, perspiciatis!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda rerum ex obcaecati dolore facilis nihil iusto qui quis culpa in earum neque corrupti molestias, doloremque voluptatum! Facere, perspiciatis!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda rerum ex obcaecati dolore facilis nihil iusto qui quis culpa in earum neque corrupti molestias, doloremque voluptatum! Facere, perspiciatis!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus assumenda rerum ex obcaecati dolore facilis nihil iusto qui quis culpa in earum neque corrupti molestias, doloremque voluptatum! Facere, perspiciatis!'

    ]

    return (
        <section id='about' className='py-32 relative overflow-hidden'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='grid lg:max-w-237.5 mx-auto'>
                    <div className='flex justify-center animate-fade-in mx-auto glass-strong w-full py-1 rounded-t-md'>
                        <div>
                            <span className='h-5 w-5 bg-black'></span>
                        </div>
                        <p><span className='text-muted-foreground '>admin@aboutMe:~</span></p>
                        <div className='absolute right-2'>
                            <div className='flex gap-4 items-center cursor-pointer text-muted-foreground'>
                                <div className='rounded-full hover:bg-muted-foreground p-1'>
                                    <Minus className='relative top-1 h-3 w-3 hover:text-white'/>
                                </div>
                                <div className='rounded-full hover:text-white hover:bg-muted-foreground p-1'>
                                    <Square className='h-3 w-3'/>
                                </div>
                                <div className='rounded-full bg-amber-600 p-1 hover:bg-amber-500 text-white'>
                                    <X className='h-3.5 w-3.5'/>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex flex-col bg-black/40 px-2 py-1 space-y-4'>
                        <p><span className='text-primary'>admin@aboutMe:~$</span> whoami</p>
                        {about.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p><span className='text-primary'>admin@aboutMe:~$</span></p>
                    </div>
                </div>
            </div>
        </section>
       
    )
}

export default About