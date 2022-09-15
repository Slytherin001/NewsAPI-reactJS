/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
  document.title = 'About - The Daily Prophet'
  return (
    <div>
      <div className="container" style={{ marginTop: '90px' }}>
        <div
          className="card text-center mt-5"
          style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}
        >
          <div className="card-header">
            <strong
              className="fs-1"
              style={{
                color: props.mode === 'dark' ? 'white' : 'black',
              }}
            >
              About The Daily Prophet News
            </strong>
          </div>
          <div
            className="card-body"
            style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
          >
            <p className="card-text fs-5">
              The Daily Prophet was a wizarding newspaper based in London,
              England and was the primary source of news for British and Irish
              wizards. The latest known Editor in Chief was Barnabas Cuffe, who
              worked in the main office located in Diagon Alley. Because of the
              newspaper's ability to influence the minds of many in the British
              and Irish wizarding communities, it had been known to print
              slanted-content at the request of the British Ministry of Magic,
              in an effort to publicise the Ministry's preferred versions of
              ongoing events and political agendas. Unfortunately, the Prophet
              did not seem to have a lot of journalistic integrity, as it had
              been known to be more concerned about sales than the factual
              accuracy and reporting of ongoing events,especially when it came
              to one of their journalists, Rita Skeeter, who frequently made up
              fake quotes for her stories. The paper featured a morning and
              evening edition, the latter of which was called the Evening
              Prophet. The weekend edition was called the Sunday Prophet.
              Additional news bulletins could be delivered quickly when
              important, newsworthy events occurred. As news changed, an edition
              might magically change, too, over the course of the day, probably
              by means of a Protean Charm.
            </p>
            <Link
              to="/"
              className="btn btn-dark"
              style={{
                background: props.mode === 'dark' ? 'white' : 'black',
                color: props.mode === 'dark' ? 'black' : 'white',
              }}
            >
              Back to News
            </Link>
          </div>
          <div
            className="card-footer text-muted fs-5"
            style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
          >
            The Daily Prophet
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
