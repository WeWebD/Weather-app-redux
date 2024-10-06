import React from 'react'

const ErrorReport = ({message}) => {
  return (
    <h2 className='text-red-400 text-xs mb-5 bg-gray-500/20 mx-5 p-2 rounded-xl '>
        {message}
    </h2>
  )
}

export default ErrorReport