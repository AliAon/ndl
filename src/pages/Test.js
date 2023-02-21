import React from 'react'
import { useSnackbar } from 'react-simple-snackbar'

function Test() {
  const options = {
    position: 'top-center',
    style: {
      backgroundColor: '#8f5e25',
      color: 'white',
      fontFamily: 'Manrope',
      fontSize: '18px',
      textAlign: 'center',
    },
    closeStyle: {
      color: 'white',
      fontSize: '16px',
    },
  }
  const [openSnackbar, closeSnackbar] = useSnackbar(options)

  return (
    <div>
      <button onClick={() => openSnackbar('Payment Successfull!')}>
        Click me to open the Snackbar!
      </button>
      <button onClick={closeSnackbar}>
        Click me to close the Snackbar programmatically.
      </button>
    </div>
  )
}
export default Test