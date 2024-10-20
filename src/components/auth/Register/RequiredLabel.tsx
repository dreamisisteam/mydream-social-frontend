import React from 'react'
import { Form } from 'react-bootstrap'

interface IRequiredLabelProps {
	children: React.ReactNode
}
export default function RequiredLabel({children}: IRequiredLabelProps) {
  return (
	<Form.Label>{children} <sup className='required-field'>*</sup></Form.Label>
  )
}
