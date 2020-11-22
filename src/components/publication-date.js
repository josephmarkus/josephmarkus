import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"
import styled from "styled-components"
import { rem } from "polished"

const Time = styled.time`
  font-size: ${rem("16px")};
`

const PublicationDate = ({ date, dateFormat = "MMMM d, yyyy", ...props }) => {
  const formattedDate = format(new Date(date), dateFormat)

  return (
    <Time dateTime={date} {...props}>
      {formattedDate}
    </Time>
  )
}

PublicationDate.propTypes = {
  date: PropTypes.string,
  dateFormat: PropTypes.string,
}

export { PublicationDate }
