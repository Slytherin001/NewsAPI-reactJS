import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props
  return (
    <div>
      <div
        className="card h-100"
        style={{
          backgroundColor: props.mode === 'dark' ? 'black' : 'white',
          border: props.mode === 'dark' ? '2px solid #fff' : '',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {source ? source : 'Unknown'}
          </span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          >
            {description}...
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="card-link"
            >
              Read More
            </a>
          </p>
          <p className="card-text">
            <small
              className="text-muted"
              style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
