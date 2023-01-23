import React from 'react'
import { useGetPageData } from '../../hooks/useGetPageData'

function Budget() {
  const budgetLink = process.env.REACT_APP_USER_BUDGETS!;
  useGetPageData(budgetLink);

  return (
    <div>
      Budget
    </div>
  )
}

export default Budget