import React from 'react'
import PropTypes from 'prop-types'

function Test(props) {
    let toggle = true;
    return(
        <div>
            <h1 style = {{ color : toggle ? 'red' : 'green' }}>Hello {props.nom}</h1>
        </div>
    )
}

Test.propTypes = {
    nom: PropTypes.string.isRequired
}

export default Test;