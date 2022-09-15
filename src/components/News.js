import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import PropTypes from 'prop-types'
const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)

    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category,
    )} - The Daily Prophet`
    updateNews()
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  }

  return (
    <>
      <h1
        className="text-center"
        style={{
          marginTop: '90px',
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        The Daily Prophet - Top{' '}
        <span className="text-danger">
          {capitalizeFirstLetter(props.category)}
        </span>{' '}
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner mode={props.mode} />}
      >
        <div
          className="container"
          style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
        >
          <div className="row row-cols-1 row-cols-md-4 g-4 my-3">
            {articles.map((element) => {
              return (
                <div className="col" key={element.url}>
                  <NewsItem
                    mode={props.mode}
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description : ''}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : 'https://images.indianexpress.com/2022/09/AppleiOS16_LEAD.jpg'
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 4,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
