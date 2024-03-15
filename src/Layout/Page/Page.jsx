/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import MovieList from '../../Component/MovieList/MovieList'
import { ThemeContext } from '../../Context/Context'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Page = () => {
    const {darkMode}=useContext(ThemeContext)
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
    <Header />
    <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
        </div>
    </main>
    <Footer />
</div>
  )
}

export default Page