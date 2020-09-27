import React from "react"

import { DefaultLayout } from "./default"
import { GlobalStyle } from "../components/global-style"

export default props => {
  const { children, path } = props

  return (
    <>
      <GlobalStyle />
      <DefaultLayout path={path}>{children}</DefaultLayout>
    </>
  )
}
