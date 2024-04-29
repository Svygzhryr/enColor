import { FC } from 'react'
import { ErrorWrapper } from './style'

interface IFallback {
  error: Error
}

export const Fallback: FC<IFallback> = ({ error }) => {
  return (
    <ErrorWrapper>
      <h1>An error has occured:</h1>
      <p>{`${error}`}</p>
    </ErrorWrapper>
  )
}
