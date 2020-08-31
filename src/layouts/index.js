import React from "react"

import { DefaultLayout } from "./default-layout"
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
