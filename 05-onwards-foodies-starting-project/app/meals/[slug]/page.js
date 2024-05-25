import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

export default function page({params}) {

  const meal=getMeal(params.slug)

  if(!meal)
    {
      notFound()
    }

  return (
     <>
     <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} fill></Image>
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={classes.summer}>{meal.summary}</p>
      </div>
     </header>
     <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}}></p>
     </main>
     </>
  )
}
