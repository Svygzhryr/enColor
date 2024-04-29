import { Component, ReactNode } from 'react'
import { Fallback } from '../components/fallback'

interface IErrorBoundaryProps {
  children?: React.ReactNode
}

interface IErrorBoundaryState {
  error: Error | null
}

export default class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state: IErrorBoundaryState = {
    error: null,
  }

  public static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { error }
  }

  public render(): ReactNode {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return <Fallback error={error} />
    }

    return children
  }
}
