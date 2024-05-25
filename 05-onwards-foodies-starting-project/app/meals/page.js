import React from 'react'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'

export default async function page() {

  const meals=await getMeals();

  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals created <span className={classes.highlight}>by you</span>
      </h1>
      <p>Chose your favourite recipe and cook it yourself. It is easy and fun</p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share your favourite recipe</Link>
      </p>
    </header>
    <main className={classes.main}>
      <MealsGrid meals={meals}></MealsGrid>
    </main>
    </>
  )
}
