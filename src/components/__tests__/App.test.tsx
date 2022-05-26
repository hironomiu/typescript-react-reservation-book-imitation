import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../../App'

describe('App', () => {
  it('renders learn react link', () => {
    let scrollIntoViewMock = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock
    render(<App />)
    const linkElement = screen.getByText(/2022/i)
    expect(linkElement).toBeInTheDocument()
  })
})
