import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import volunteerPic from '../images/volunteer.jpg'
import educationPic from '../images/edu.jpg'
import workPic from '../images/work.jpg'
import sportsPic from '../images/sports.jpg'
import photographyPic from '../images/photography.jpg'
import aidilInvokePic from '../images/aidil-invoke-web.jpg'
import frameworkPic from '../images/framework.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={
          this.props.timeout
            ? {
                display: 'flex',
              }
            : {
                display: 'none',
              }
        }
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Intro </h2>{' '}
          <span className="image main">
            <img src={pic01} alt="" />
          </span>{' '}
          <p>
            I don 't like labels, but if I were to put one on myself; it' d be a
            lifelong (knowledge) seeker, and I really don’ t fancy associating
            myself with the term programmer because to me personally, I don’ t
            just program, I solve problems; hence, a problem solver.{' '}
          </p>{' '}
          <p>
            Currently a Trainee Analyst Programmer at{' '}
            <a href="https://www.publicbankgroup.com">Public Bank</a>.
          </p>
          <p>
            Previously a Software Engineer at{' '}
            <a href="https://invokeisdata.com"> INVOKE </a> working on web and
            mobile development for both INVOKE and clients' products using
            frameworks and tools like ReactJS, React Native, NodeJS, ExpressJS,
            WordPress and Serverless. Started at INVOKE as an intern for 6
            months in my final semester of my Bachelor of Computer Science
            degree, was directly and hugely involved in a few projects, notably
            INVOKE's revamped website and{' '}
            <a href="https://n9.digital">n9.digital</a> and was offered a
            full-time position upon the completion of my internship.{' '}
          </p>{' '}
          <span className="image main">
            <img src={aidilInvokePic} alt="" />
          </span>{' '}
          <p>
            Was a science stream student in high school, graduating high school
            with 5A+ and 4A for SPM. I then did my foundation study at{' '}
            <a href="https://uitm.edu.my"> Universiti Teknologi MARA (UiTM) </a>{' '}
            before enrolling myself into engineering school for a Bachelor in
            Electronic Engineering degree at{' '}
            <a href="https://www.usm.my">Universiti Sains Malaysia (USM)</a>. My
            stint in engineering school was cut short as I fell in love with
            programming and decided to call it quit and get a Computer Science
            degree instead. I've never looked back since.{' '}
          </p>{' '}
          <p>
            In my final year, I worked on a project titled Visualizing the
            Reputation of Malaysian Communication Service Providers Through
            Twitter Sentiment Analysis Using Naive Bayes where I developed a
            bilingual sentiment classification model using Python and SciPy, ran
            the model on tweets collected from Twitter and visualized the result
            on a dashboard created using Python 's Flask.{' '}
          </p>{' '}
          <p>
            Have worked on a few mini projects in my own free time, such as my{' '}
            <a href="https://aidilsafwan.com"> personal website </a> built using
            GatsbyJS and my{' '}
            <a href="https://datastudio.google.com/s/iWiNsXTn9BM">
              Covid-19 Dashboard
            </a>{' '}
            using Google Data Studio and Flourish. Also a volunteer at{' '}
            <a href="https://ydlmalaysia.com">Young Digital Leaders Malaysia</a>{' '}
            working on web development using WordPress. Volunteering experience
            includes being a volunteer at{' '}
            <a href="https://petrosains.com.my">Petrosains</a> (Dinotrek 2 and
            Petronas Street Smart) as Assistant Science Communicator.
          </p>{' '}
          {close}{' '}
        </article>
        <article
          id="profile"
          className={`${this.props.article === 'profile' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Profile </h2>{' '}
          <div>
            <h3>
              {' '}
              <span className="icon fa-briefcase"> </span> Work Experience
            </h3>
          </div>{' '}
          <span className="image main">
            <img src={workPic} alt="" />
          </span>{' '}
          <ul>
            <li>
              <h3> Trainee Analyst Programmer </h3>{' '}
              <h4> Public Bank Berhad </h4> <h5> October 2020 - Present </h5>{' '}
            </li>{' '}
          </ul>{' '}
          <ul>
            <li>
              <h3> Software Engineer </h3> <h4> INVOKE Solutions Sdn Bhd </h4>{' '}
              <h5> July 2020 - October 2020 </h5>{' '}
            </li>{' '}
          </ul>{' '}
          <ul>
            <li>
              <h3> Software Engineer (Intern) </h3>{' '}
              <h4> INVOKE Solutions Sdn Bhd </h4>{' '}
              <h5> February 2020 - July 2020 </h5>{' '}
              <h6>
                {' '}
                - Front-end web and mobile development (ReactJS and React
                Native){' '}
              </h6>{' '}
              <h6>
                {' '}
                - Back-end web development (NodeJS, ExpressJS and Serverless){' '}
              </h6>{' '}
              <h6>- CMS (WordPress) </h6>
              <h6>- Cloud (AWS) </h6>{' '}
              <h6>
                {' '}
                - Project and team management (Jira, HubStaff, Trello, Slack){' '}
              </h6>{' '}
              <h6>- DevOps and version control (Git) </h6>{' '}
            </li>{' '}
          </ul>{' '}
          <div>
            <h3>
              {' '}
              <span className="icon fa-university"> </span> Education
            </h3>
          </div>{' '}
          <span className="image main">
            <img src={educationPic} alt="" />
          </span>{' '}
          <ul>
            <li>
              <h3> Bachelor of Computer Science (Hons.) </h3>{' '}
              <h4> Universiti Teknologi MARA (UiTM) </h4>{' '}
              <h5> March 2017 - July 2020 </h5>{' '}
              <h6>
                {' '}
                - Final year project title: Visualizing the Reputation of
                Malaysian Communication Service Providers Through Twitter
                Sentiment Analysis Using Naive Bayes{' '}
              </h6>{' '}
              <h6> - CGPA: 3.42 </h6>{' '}
            </li>{' '}
            <li>
              <h3> Bachelor Engineering (Hons.) (Electronic Engineering) </h3>{' '}
              <h4> Universiti Sains Malaysia(USM) </h4>{' '}
              <h5> August 2015 - February 2017 </h5>{' '}
            </li>{' '}
            <li>
              <h3> Foundation in Engineering </h3>{' '}
              <h4> Universiti Teknologi MARA (UiTM) </h4>{' '}
              <h5> June 2014 - April 2015 </h5> <h6> - CGPA: 3.78 </h6>{' '}
              <h6> - MUET: Band 5 </h6>{' '}
            </li>{' '}
            <li>
              <h3> Sijil Pelajaran Malaysia (SPM) </h3>{' '}
              <h4> Sekolah Menengah Kebangsaan Jitra </h4>{' '}
              <h5> January 2009 - December 2013 </h5> <h6> - Grade: 5A+ 4A </h6>{' '}
            </li>{' '}
          </ul>{' '}
          <div>
            <h3>
              {' '}
              <span className="icon fa-user"> </span> Volunteer Experience
            </h3>
          </div>{' '}
          <span className="image main">
            <img src={volunteerPic} alt="" />
          </span>{' '}
          <ul>
            <li>
              <h3> Young Digital Leaders Malaysia </h3>{' '}
              <h4> March 2020 - Present </h4>{' '}
              <h6> -Web development (Wordpress) </h6>{' '}
            </li>{' '}
            <li>
              <h3> Petrosains </h3> <h4> December 2013 - April 2015 </h4>{' '}
              <h6> - Dinotrek 2 </h6> <h6> - Petronas StreetSmart </h6>{' '}
            </li>{' '}
          </ul>{' '}
          <button
            style={{
              marginBottom: '5vh',
            }}
          >
            <a href="https://drive.google.com/uc?export=download&id=1VkOWPbcYRUUu0JFpHoqPNPO6t4C8GLih">
              {' '}
              Download resume{' '}
            </a>{' '}
          </button>{' '}
          {close}{' '}
        </article>
        <article
          id="portfolio"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Skills </h2> <h3> Language </h3>{' '}
          <ul>
            <li>
              <h4> Malay (Native) </h4>{' '}
            </li>{' '}
            <li>
              <h4> English (Fluent) </h4>{' '}
            </li>{' '}
            <li>
              <h4> Mandarin (Elementary) </h4>{' '}
            </li>{' '}
          </ul>{' '}
          <span className="image main">
            <img src={frameworkPic} alt="" />
          </span>{' '}
          <h3> Programming Language </h3>{' '}
          <ul>
            <li>
              <h4> C, C++, C# </h4>{' '}
            </li>{' '}
            <li>
              <h4> Java, JavaScript </h4>{' '}
            </li>{' '}
            <li>
              <h4> Python </h4>{' '}
            </li>{' '}
            <li>
              <h4> HTML, CSS </h4>{' '}
            </li>{' '}
          </ul>{' '}
          <h3> Development Framework </h3>{' '}
          <ul>
            <li>
              <h4> Flask </h4>{' '}
            </li>{' '}
            <li>
              <h4> ReactJS, React Native, GatsbyJS </h4>{' '}
            </li>{' '}
            <li>
              <h4> NodeJS, ExpressJS </h4>{' '}
            </li>{' '}
          </ul>{' '}
          <h3> Data Analytics </h3>{' '}
          <ul>
            <li>
              <h4> Natural Language Processing (Sentiment Analysis) </h4>{' '}
            </li>{' '}
            <li>
              <h4>
                {' '}
                Data Visualization (Google Data Studio, Tableau, Flourish,
                Matplotlib){' '}
              </h4>{' '}
            </li>{' '}
            <li>
              <h4> Machine Learning </h4>{' '}
            </li>{' '}
          </ul>{' '}
          <span className="image main">
            <img src={photographyPic} alt="" />
          </span>{' '}
          <h3> Creative </h3>{' '}
          <ul>
            <li>
              <h4> Photo Editing (Adobe Photoshop, Adobe Illusrator) </h4>{' '}
            </li>{' '}
            <li>
              <h4> Photography (Adobe Lightroom) </h4>{' '}
            </li>{' '}
          </ul>{' '}
          <span className="image main">
            <img src={sportsPic} alt="" />
          </span>{' '}
          <h3> Sports </h3>{' '}
          <ul>
            <li>
              <h4> Running </h4>{' '}
            </li>{' '}
            <li>
              <h4> Football </h4>{' '}
            </li>{' '}
            <li>
              <h4> Ultimate Frisbee </h4>{' '}
            </li>{' '}
          </ul>{' '}
          {close}{' '}
        </article>
        <article
          id="covid-19"
          className={`${this.props.article === 'covid-19' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Covid - 19 </h2>{' '}
          <span className="image main">
            <iframe
              title="data-studio"
              width="100%"
              height="600"
              src="https://datastudio.google.com/embed/reporting/8ba8d5d5-9a39-4506-af28-7ab8fcd8f8a9/page/WmKJB"
              allowfullscreen
            >
              {' '}
            </iframe>{' '}
          </span>{' '}
          <span className="image main">
            <iframe
              title="flourish-states-race"
              width="100%"
              height="800"
              src="https://flo.uri.sh/visualisation/2343954/embed"
            >
              {' '}
            </iframe>{' '}
          </span>{' '}
          {close}{' '}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Contact </h2>{' '}
          <form
            method="post"
            action="https://formspree.io/aidilsafwan.aas@gmail.com"
          >
            <div className="field half first">
              <label htmlFor="name"> Name </label>{' '}
              <input type="text" name="name" id="name" />
            </div>{' '}
            <div className="field half">
              <label htmlFor="email"> Email </label>{' '}
              <input type="text" name="email" id="email" />
            </div>{' '}
            <div className="field">
              <label htmlFor="message"> Message </label>{' '}
              <textarea name="message" id="message" rows="4">
                {' '}
              </textarea>{' '}
            </div>{' '}
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>{' '}
              <li>
                <input type="reset" value="Reset" />
              </li>{' '}
            </ul>{' '}
          </form>{' '}
          <h3>
            Or email me at{' '}
            <a href="mailto:aidilsafwan.aas@gmail.com">
              {' '}
              aidilsafwan.aas@gmail.com
            </a>
            .{' '}
          </h3>{' '}
          <ul
            className="icons"
            style={{
              marginTop: '5vh',
            }}
          >
            <li>
              <a
                href="https://www.twitter.com/aidilsfwn"
                className="icon fa-twitter"
              >
                <span className="label"> Twitter </span>{' '}
              </a>{' '}
            </li>{' '}
            <li>
              <a
                href="https://www.facebook.com/aidilsfwn"
                className="icon fa-facebook"
              >
                <span className="label"> Facebook </span>{' '}
              </a>{' '}
            </li>{' '}
            <li>
              <a
                href="https://www.instagram.com/aidilsfwnn"
                className="icon fa-instagram"
              >
                <span className="label"> Instagram </span>{' '}
              </a>{' '}
            </li>{' '}
            <li>
              <a
                href="https://www.linkedin.com/in/aidilsafwan"
                className="icon fa-linkedin"
              >
                <span className="label"> LinkedIn </span>{' '}
              </a>{' '}
            </li>{' '}
          </ul>{' '}
          {close}{' '}
        </article>{' '}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
