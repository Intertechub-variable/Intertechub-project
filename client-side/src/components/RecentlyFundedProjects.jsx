import React from 'react'
import FundedProjects from './FundedProjects'

function RecentlyFundedProjects({isLoading, funded}) {
  return (
    <div>
      <FundedProjects isLoading={isLoading} funded={funded}/>
    </div>
  )
}

export default RecentlyFundedProjects