import React from 'react'

import Table from './component/table'
import Hero from './component/hero'
import Toppicks from './component/toppicks'
import Asgard from './component/asgard'
import Blog from './component/blog'
import Instagram from './component/instagram'

function page() {
  return (
    <div >
    
        <Hero/>
        <Table/>
        <Toppicks/>
        <Asgard/>
        <Blog/>
        <Instagram/>
     </div>
  )
}

export default page
