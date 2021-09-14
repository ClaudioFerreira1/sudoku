import React, { FC, Children } from 'react'
import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {

  //some stuff here

  return (
    <Container className="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row className="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid