import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"

const PublicationDate = ({ date, ...props }) => {
  const formattedDate = format(new Date(date), "MMMM d, yyyy")
  return (
    <time dateTime={date} {...props}>
      {formattedDate}
    </time>
  )
}

PublicationDate.propTypes = {
  date: PropTypes.string,
}

export { PublicationDate }
