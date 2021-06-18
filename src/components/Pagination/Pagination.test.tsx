import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Pagination from './Pagination'

afterEach(() => {
  cleanup()
})

describe('Pagination component', () => {
  test('renders correct snapshot', () => {
    const { container } = render(
      <Pagination page={1} count={5} onPageChange={() => {}} />
    )

    expect(container).toMatchSnapshot()
  })
})
