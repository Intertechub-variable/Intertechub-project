import React from 'react'
import FundedProjects from './FundedProjects'

function RecentlyFundedProjects({funded}) {
  return (
    <div>
      <FundedProjects funded={funded}/>
    </div>
  )
}

export default RecentlyFundedProjects