import React from 'react'
import { render, cleanup } from '@testing-library/react'

import App from './App'

afterEach(() => {
  cleanup()
})

describe('App component', () => {
  test('renders Employees and Pagination component inside', () => {
    const { getByTestId } = render(<App />)
    const employeesElement = getByTestId('employees')
    const paginationElement = getByTestId('pagination')

    expect(employeesElement).toBeInTheDocument()
    expect(paginationElement).toBeInTheDocument()
  })
})
