import { ReactNode } from 'react'

export type ChildrenWithProps<T> = {
  children: ReactNode;
} & T;