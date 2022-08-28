import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { Sample } from '../recoil/num'

const After = () => {
    const [Obj, setObj] = useRecoilState(Sample)
    const navigate = useNavigate()

    const handleClick = () => {
        setObj({reset: 1})
        navigate('/')
    }

  return (
    <>
        <div>Your Reocil Value is: {Obj.yapp}</div>
        <button onClick={handleClick}>return with reset</button>
    </>
  )
}

export default After;