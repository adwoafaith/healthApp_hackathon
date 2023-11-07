import React from 'react'
import Styles from '../css-modules/HomePage.module.css'
import KidsWithBooks from '../assets/images/kids-with-books.svg'
import SignUpButton from '../components/buttons/signUpButton'
import LoginButton from '../components/buttons/loginButton'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className={Styles.hero}>
          <div className={Styles.content}>
            <h1 className={Styles.title}>
              Track your child's <br />
              performance <br />
              <span>in real time</span>
            </h1>

            <p className={Styles.subContent}>
              A one in all application which allows parents to know the 
              performance of their wards anywhere anytime with ease.
            </p>

            <div className={Styles.buttons}>
              <SignUpButton />
              <LoginButton />
            </div>
          </div>

          <div className={Styles.heroImage}>
            <img className={Styles.KidsWithBooks} src={KidsWithBooks} alt="children holding piles of books" />
          </div>
      </main>
    </>
  )
}

export default HomePage