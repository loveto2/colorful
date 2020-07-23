import React from 'react'
import Button from '../src/Button'

export default () => (
  <>
    <Button disabled btnType="primary">
      primary
    </Button>
    <Button btnType="secondary">secondary</Button>
    <Button btnType="success">success</Button>
    <Button btnType="warning">warning</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link">link</Button>
  </>
)
