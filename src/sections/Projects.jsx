import { ArrowUpRight, Github } from "lucide-react"

const Projects = () => {

    const projects = [
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate, error eos repellendus fuga blanditiis quas eligendi magnam quod! Harum animi voluptatibus amet.',
            image: 'profile-photo.png',
            tags: ['React', 'TailwindCSS'],
            link: '#',
            github: '#'
        },
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate, error eos repellendus fuga blanditiis quas eligendi magnam quod! Harum animi voluptatibus amet.',
            image: 'profile-photo.png',
            tags: ['React', 'TailwindCSS'],
            link: '#',
            github: '#'
        },
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate, error eos repellendus fuga blanditiis quas eligendi magnam quod! Harum animi voluptatibus amet.',
            image: 'profile-photo.png',
            tags: ['React', 'TailwindCSS'],
            link: '#',
            github: '#'
        },
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate, error eos repellendus fuga blanditiis quas eligendi magnam quod! Harum animi voluptatibus amet.',
            image: 'profile-photo.png',
            tags: ['React', 'TailwindCSS'],
            link: '#',
            github: '#'
        }
    ]
    return (
        <section id='projects' className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground ">lorem Ipsum <span className="font-playfair font-normal text-white">documus init dur.</span></h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus iste labore.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover tranistion-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="h-6 w-6"/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="h-6 w-6"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects