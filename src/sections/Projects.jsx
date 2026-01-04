import { ArrowUpRight, Github } from "lucide-react"

const Projects = () => {

    const projects = [
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate.',
            image: 'profile-photo.png',
            tags: ['React', 'TailwindCSS'],
            link: '#',
            github: '#'
        },
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate.',
            image: 'profile-photo.png',
            tags: ['React', 'TailwindCSS'],
            link: '#',
            github: '#'
        },
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate.',
            image: 'profile-photo.png',
            tags: ['React', 'TailwindCSS'],
            link: '#',
            github: '#'
        },
        {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eos. Exercitationem cupiditate.',
            image: 'socialbuffington.png',
            tags: ['React', 'TailwindCSS'],
            link: 'https://www.socialbuffington.com/',
            github: '#'
        }
    ]
    return (
        <section id='projects' className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
                                    className="w-full h-full object-cover tranistion-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
                                />
                                
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass-strong hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="h-8 w-8"/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="h-8 w-8"/>
                                    </a>
                                </div>
                            </div>
                            {/* {content} */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
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