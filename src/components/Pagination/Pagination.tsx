import React from 'react'
import Pagination from '@material-ui/lab/Pagination'

import './Pagination.css'

type PaginationProps = {
  page: number
  count: number
  onPageChange?: (event: React.ChangeEvent<unknown>, page: number) => void
}

const PaginationContainer = (props: PaginationProps) => {
  const { page, count, onPageChange } = props

  return (
    <div data-testid="pagination" className="pagination-wrapper">
      <Pagination
        color="primary"
        count={count}
        page={page}
        onChange={onPageChange}
      />
    </div>
  )
}

export default PaginationContainer
