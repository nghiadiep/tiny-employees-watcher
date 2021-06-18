import Employee from '../../../types/Employee'

const ITEMS_PER_PAGE = 5

type usePaginateProps = {
  employees: Employee[] | []
  page: number
}

const usePaginate = (props: usePaginateProps) => {
  const { employees, page } = props
  const pageIndex = page - 1
  return {
    paginated:
      employees?.length > 0
        ? employees?.slice(
            pageIndex * ITEMS_PER_PAGE,
            pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
          )
        : [],
    count: Math.floor(employees?.length / ITEMS_PER_PAGE)
  }
}

export default usePaginate
