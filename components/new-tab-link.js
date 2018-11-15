import PropTypes from "prop-types"

const NewTabLink = ({ href, text }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {text}
  </a>
)

NewTabLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NewTabLink
