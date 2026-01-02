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
            <div className='container mx-auto relative z-10'>
                <div className='grid max-w-4xl mx-auto'>
                    <div className='flex justify-center animate-fade-in mx-auto glass-strong w-full py-1 rounded-t-md'>
                        <p><span className='text-muted-foreground '>aboutMe@admin:~</span></p>
                        <div className='absolute right-2'>
                            <div className='flex gap-4 items-center cursor-pointer'>
                                <div className='rounded-full hover:bg-muted-foreground p-1'>
                                    <Minus className='relative top-1 h-3 w-3'/>
                                </div>
                                <div className='rounded-full hover:bg-muted-foreground p-1'>
                                    <Square className='h-3 w-3'/>
                                </div>
                                <div className='rounded-full bg-muted-foreground p-1 hover:bg-amber-500'>
                                    <X className='h-4 w-4'/>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex flex-col bg-black/20 px-1 space-y-4'>
                        <p><span className='text-primary'>aboutMe@admin:~$</span> whoami</p>
                        {about.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p><span className='text-primary'>aboutMe@admin:~$</span></p>
                    </div>
                </div>
            </div>
        </section>
       
    )
}

export default About