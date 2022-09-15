import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <div
        className="footer text-center fs-5"
        style={{
          position: 'fixed',
          bottom: '0%',
          left: '0%',
          background: '#343a40',
          color: '#fff',
          display: 'block',
          width: '100%',
        }}
      >
        <p>Copyright &copy; 2022 The Daily Prophet News</p>
      </div>
    </div>
  )
}

export default Footer
