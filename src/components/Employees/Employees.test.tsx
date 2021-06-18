import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'

import Employees from './Employees'
import { act } from 'react-dom/test-utils'

afterEach(() => {
  cleanup()
})

const mockEmployeesData = [
  {
    id: '1',
    name: 'Foo',
    email: 'foo@mail.com',
    position: 'I am Foo',
    createdAt: 'xxxx'
  }
]

const mockOnAddEmployee = jest.fn()

describe('Employees component', () => {
  test('renders employees data', () => {
    const { getAllByText } = render(
      <Employees
        employees={mockEmployeesData}
        loading={false}
        onAddEmployee={jest.fn()}
      />
    )

    expect(getAllByText(/foo@mail.com/i)[0]).toBeInTheDocument()
  })

  test('renders loading icon', () => {
    const { getByTestId } = render(
      <Employees employees={[]} loading={true} onAddEmployee={() => {}} />
    )
    const loadingIcon = getByTestId('progress-icon')
    expect(loadingIcon).toBeInTheDocument()
  })

  test('calls onAddEmployee when click button', () => {
    const { getByTestId } = render(
      <Employees
        employees={mockEmployeesData}
        loading={false}
        onAddEmployee={mockOnAddEmployee}
      />
    )
    const addButton = getByTestId('add-button')
    act(() => {
      fireEvent.click(addButton)
    })
    expect(mockOnAddEmployee).toBeCalled()
  })
})
