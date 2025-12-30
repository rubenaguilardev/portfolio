const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(35)].map((_, i) => (
                    <div 
                        className={`absolute w-1.5 h-1.5 rounded-full opacity-60`}
                        style={{
                            backgroundColor: "#20B2A6", 
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                    Software Engineer •
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                lorem <span className="text-primary glow-text">ipsum</span>
                                <br />
                                quidem quo
                                <br />
                                <span className="font-playfair italic font-normal text-white">ducimus</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo perferendis ea enim, fugit voluptatibus iste debitis ex quisquam quidem quo ducimus error amet deserunt inventore architecto accusamus animi nesciunt?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero