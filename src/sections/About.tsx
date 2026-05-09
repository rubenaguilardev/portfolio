import profile from '@/assets/profile.avif'

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
              <p>I'm a full-stack developer with a passion for building things that look just as good as they work, currently deepening that foundation through a Master's in Computer Science. I care deeply about the details, from the way a component feels on mobile to the logic powering it behind the scenes.</p>
              <p>I specialize in crafting clean interfaces with React, Next.js, TypeScript, and Tailwind, bringing Figma and Canva designs into polished responsive experiences, backed by Node.js, Express, PostgreSQL, and MongoDB.</p>
              <p>When I'm not pushing commits, you'll find me in the kitchen experimenting with new recipes or settled in for a good movie.</p>
            </div>
            <div className="glass glow-border rounded-2xl p-6 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">My goal is to build things that are fast, beautiful, and intuitive. Experiences that leave an impression.</p>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass-strong rounded-3xl p-2 glow-border">
                <img
                  src={profile}
                  alt="Ruben Aguilar"
                  className="w-full aspect-4/5 object-cover object-right rounded-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/5 to-transparent opacity-60" />
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>Available for work</span>
                  </div>
                </div>
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-xl font-bold text-primary'>MS</div>
                  <div className='text-xs text-base-foreground font-medium'>Computer Science</div>
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