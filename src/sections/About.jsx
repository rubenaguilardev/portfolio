import { Code2 } from 'lucide-react'

const About = () => {

    const highlights = [
        {
            icon: Code2,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        },
        {
            icon: Code2,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        },
        {
            icon: Code2,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        },
        {
            icon: Code2,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        },
    ]

    return (
        <section id='about' className='py-32 relative overflow-hidden'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
                        </div>
                    

                        <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fadein animation-delay-100 text-secondary-foreground'>
                            Lorem ipsum,
                            <span className='font-playfair italic font-normal text-white'> consectetur adipisicing elit.</span>
                        </h2>

                        <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                            <p>
                               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam unde eligendi tenetur? Nobis, labore molestias voluptate odio culpa impedit facere iure eveniet, corporis ab aut deleniti a minima dolorem nesciunt.'
                            </p>
                             <p>
                               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam unde eligendi tenetur? Nobis, labore molestias voluptate odio culpa impedit facere iure eveniet, corporis ab aut deleniti a minima dolorem nesciunt.'
                            </p>
                             <p>
                               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam unde eligendi tenetur? Nobis, labore molestias voluptate odio culpa impedit facere iure eveniet, corporis ab aut deleniti a minima dolorem nesciunt.'
                            </p>
                        </div>

                        <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                             <p className='text-lg font-medium italic text-foreground'>
                               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam unde eligendi tenetur? Nobis, labore molestias voluptate odio culpa impedit facere iure eveniet.'
                            </p>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-6'>
                        {highlights.map((item, index) => (
                            <div key={index} className='glass p-6 rounded-2xl animate-fade-in '
                                style={{animationDelay: `${(index + 1) * 100}ms`}}
                            >
                                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'
                                >
                                    <item.icon className='w-6 h-6 text-primary'/>
                                </div>
                                <h3 className='text-lg font-semiboldmb-2'>{item.title}</h3>
                                <p className='text-sm text-muted-foreground'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About