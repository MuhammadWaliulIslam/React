
import PropTypes from 'prop-types'

function Header({text, color, bgColor}) {

    const headerStyle = {
        backgroundColor: bgColor,
        color: color
    }

  return (
    <header style={headerStyle}>

        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps= {
    text: 'Feedback UI',
    bgColor: "rgba(0,0,0,0.4)",
    color: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
}

export default Header
