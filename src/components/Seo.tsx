import React from 'react'

interface SeoProps {
 title: string
}

const Seo = ({title}: SeoProps) => {
  return (
    <div>{title}</div>
  )
}

export default Seo