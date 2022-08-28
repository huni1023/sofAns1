import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { Sample } from '../recoil/num'

const Yapp = styled.button`
    width: 100px;
`

const Before = () => {
  const [obj, setObj ] = useRecoilState(Sample)
  const navigate = useNavigate()
  const strObj = JSON.stringify(obj)

  const handleClick = () => {
      setObj({yapp: 1})
      navigate('/after')
  }

  return (
    <div>
        <div>Current Sample: {strObj}</div>
        <Yapp onClick={handleClick}>Click me.</Yapp>
    </div>
  )
}

export default Before;