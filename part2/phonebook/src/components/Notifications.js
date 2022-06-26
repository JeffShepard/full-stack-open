import React from 'react'


const Notifications = ({message})=> {
    if (message) {
        return(
        <div>{message}</div>
        )}

    else if (message === null) {
        return null
    }
}

export default Notifications