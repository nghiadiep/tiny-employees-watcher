import { useCallback } from 'react'
import service from '../../../api/service'

type useAddEmployeeProps = {
  getEmployees: () => void
  setLoading: Function
}

type onAddEmployeeArgs = {
  name: string
  email: string
  position: string
}

const useAddEmployee = (props: useAddEmployeeProps) => {
  const { getEmployees, setLoading } = props
  const addEmployee = useCallback(
    async (employee: onAddEmployeeArgs) => {
      // Don't add empty strings
      if (employee.name && employee.email && employee.position) {
        setLoading(true)
        try {
          const response = await service.post('/employees', {
            name: employee.name,
            email: employee.email,
            position: employee.position,
            createdAt: new Date().toISOString()
          })
          // Created successfully
          if (response.status === 201) {
            getEmployees()
            setLoading(false)
          }
        } catch (err) {
          console.error('Add employee error ', err)
          setLoading(false)
        }
      }
    },
    [getEmployees, setLoading]
  )

  return addEmployee
}

export default useAddEmployee
