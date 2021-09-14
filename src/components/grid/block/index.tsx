import React, { FC } from 'react'

import { Container } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return <Container className="block" />
}

export default Block