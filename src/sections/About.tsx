import profile from '@/assets/profile.png'

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='relative container mx-auto px-6 z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-primary text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-100'>
              Meet the
              <span className='text-primary glow-text'> Developer</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>I'm a full-stack developer currently pursuing my Master's in Computer Science, with a strong foundation in both frontend and backend development and an eye for design. I enjoy the full spectrum of building, from crafting clean intuitive interfaces to engineering solid APIs, and I have a solid understanding of security principles that informs how I build.</p>
              <p>My go-to stack includes React, Next.js, TypeScript, and Tailwind on the frontend, Node.js and Express on the backend, with PostgreSQL and MongoDB for data, and Figma and Canva when it's time to design.</p>
              <p>When I'm not pushing commits, you'll find me in the kitchen experimenting with new recipes or settled in for a good movie. The same curiosity that pulls me into a new technology is the one that has me trying to perfect a dish at midnight.</p>
            </div>
            <div className="glass glow-border rounded-2xl p-6 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nihil molestias, blanditiis soluta fuga alias.</p>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass-strong rounded-3xl p-2 glow-border">
                <img
                  src={profile}
                  alt="Ruben Aguilar"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>Available for work</span>
                  </div>
                </div>
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-xl font-bold text-primary'>MS</div>
                  <div className='text-xs text-muted-foreground'>Computer Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About