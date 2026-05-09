import Figma from '@/components/ui/icons/Figma'
import { Nextjs } from '@/components/ui/icons/Nextjs'
import React from '@/components/ui/icons/React'
import TailwindCSS from '@/components/ui/icons/Tailwind'
import TypeScript from '@/components/ui/icons/Typescript'
import Node from '@/components/ui/icons/Node'
import Express from '@/components/ui/icons/Express'
import Postgres from '@/components/ui/icons/Postgress'
import Mongo from '@/components/ui/icons/Mongo'

const Skills = () => {


  return (
    <section id='skills' className='relative overflow-hidden py-32'>
      <div className='flex flex-col text-center space-y-16'>
        <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-100 text-primary glow-text'>
          Technologies
        </h2>
        <div className='flex flex-wrap max-w-xl md:max-w-full mx-auto justify-center items-center gap-4 px-6'>
          <TypeScript className='w-19 md:animate-float-reverse-long animate-float-long' />
          <React className='w-30 md:animate-float-long animate-float-reverse-long' />
          <Nextjs className='w-20 md:animate-float-reverse-long animate-float-long' />
          <TailwindCSS className='w-22 md:animate-float-long animate-float-reverse-long' />
          <Figma className='h-18 w-18 animate-float-long md:animate-float-reverse-long' />
          <Node className='h-21 animate-float-reverse-long md:animate-float-long' />
          <Express className='w-22 md:animate-float-reverse-long animate-float-long' />
          <Postgres className='w-20 h-20 animate-float-reverse-long md:animate-float-long' />
          <Mongo className='w-20 h-20 md:animate-float-reverse-long animate-float-long' />
        </div>
      </div>

    </section>

  )
}

export default Skills