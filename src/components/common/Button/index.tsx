import React from 'react'
import { CSSObject } from 'styled-components'
import * as S from './style'

interface ButtonProps {
  backgroudnColorType: 'Main' | 'Secondary'
  border?: boolean
  customStyle?: CSSObject
  text: string
  width?: number
  onClick?: (value?: any) => void
}

const Button = ({
  backgroudnColorType,
  border,
  customStyle,
  text,
  width,
}: ButtonProps) => {
  return (
    <S.ButtonWrap
      backgroundColorType={backgroudnColorType}
      border={border}
      customStyle={customStyle}
      width={width}
    >
      {text}
    </S.ButtonWrap>
  )
}

export default Button
