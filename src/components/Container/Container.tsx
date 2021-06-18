import React from 'react'

import Employees from '../Employees/Employees'
import Pagination from '../Pagination/Pagination'

import useEmployees from './hooks/useEmployees'
import useSortByCreated from './hooks/useSortByCreated'
import usePaginate from './hooks/usePaginate'
import useAddEmployee from './hooks/useAddEmployee'

const Container = () => {
  const [page, setPage] = React.useState<number>(1)
  const [loading, setLoading] = React.useState<Boolean>(false)

  const { employees, getEmployees } = useEmployees(setLoading)
  const sortedEmployees = useSortByCreated(employees)
  const { paginated, count } = usePaginate({
    employees: sortedEmployees,
    page
  })
  const onAddEmployee = useAddEmployee({ getEmployees, setLoading })

  const onPageChange = (
    event: React.ChangeEvent<unknown>,
    nextPage: number
  ) => {
    setPage(nextPage)
  }

  return (
    <React.Fragment>
      <Employees
        employees={paginated}
        loading={loading}
        onAddEmployee={onAddEmployee}
      />
      <Pagination count={count} page={page} onPageChange={onPageChange} />
    </React.Fragment>
  )
}

export default Container
