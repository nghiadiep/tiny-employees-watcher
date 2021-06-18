import { useState, useEffect, useCallback } from 'react'
import service from '../../../api/service'
import Employee from '../../../types/Employee'

const useEmployees = (setLoading: Function) => {
  const [employees, setEmployees] = useState<Array<Employee> | []>([])

  const getEmployees = useCallback(async () => {
    setLoading(true)
    try {
      const response = await service.get('/employees')
      const employeesData = response.data
      if (employeesData instanceof Array) {
        setEmployees(employeesData)
      }
      setLoading(false)
    } catch (err) {
      console.error('Error in get employees', err)
      setLoading(false)
    }
  }, [setLoading])

  useEffect(() => {
    getEmployees()
  }, [getEmployees])

  return { employees, getEmployees }
}

export default useEmployees
