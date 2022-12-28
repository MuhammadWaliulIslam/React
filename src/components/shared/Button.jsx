import PropTypes from 'prop-types'

function Button({childern, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {childern}
    </button>
  )
}

Button.defaultProps={
    childern: 'Send',
    version: 'primary',
    type: 'button', 
    isDisabled: false
}

Button.propTypes = {
    childern: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    
}

export default Button
