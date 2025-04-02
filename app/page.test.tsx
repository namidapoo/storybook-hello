import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Home from './page'

describe('Page', () => {
  test('renders the Next.js logo', () => {
    // Arrange
    render(<Home />)
    // Act
    const logo = screen.getByAltText('Next.js logo')
    // Assert
    expect(logo).toBeInTheDocument()
  })
})
