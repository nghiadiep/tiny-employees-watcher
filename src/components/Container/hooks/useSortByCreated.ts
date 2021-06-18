import Employee from '../../../types/Employee'

const useSortByCreated = (employees: Array<Employee> | []) =>
  employees?.length > 0
    ? employees?.sort(
        (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
      )
    : []

export default useSortByCreated
