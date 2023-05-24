import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Navbar from "./Navbar"
import ContactMe from "../components/ContactMe"
import Projects from "../components/Projects"
import AboutPage from "./aboutPage"
import { Link } from 'gatsby'

///Will create routes here to mnove from page to page

const index = () => {
  return (
    <>
     <Layout />
      <Seo title="Home" />
      <h1>Hey its my site</h1>
      <Navbar />
      <Link to="/aboutPage">About</Link>
      <ContactMe /> 
      <Projects />
    </>
  )
}

export default index