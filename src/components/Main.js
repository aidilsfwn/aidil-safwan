import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import volunteerPic from '../images/volunteer.jpg'
import educationPic from '../images/edu.jpg'
import workPic from '../images/work.jpg'
import sportsPic from '../images/sports.jpg'
import photographyPic from '../images/photography.jpg'
import analyticsPic from '../images/analytics.jpg'
import frameworkPic from '../images/framework.jpg'
import programmingPic from '../images/programming.jpg'
import languagePic from '../images/language.jpg'

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
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            An intern at <a href="http://invokeisdata.com">INVOKE Malaysia</a> from February 2020 to July 2020 to fulfill the requirements to complete my Bachelor of Computer Science (Hons.) at <a href="http://uitm.edu.my">Universiti Teknologi MARA</a>. Will be graduating at the end of my internship period.
          </p>
          <p>
            I don't like labels, but if I were to put one on myself; it'd be a lifelong (knowledge) seeker.
          </p>
          <p>
            I don’t like associating myself with the term programmer. I don’t just program, I solve problems; hence, a problem solver. Well-versed in a few programming languages and frameworks, notably ReactJS, NodeJS, ExpressJS, GatsbyJS, React Native, Python, Flask and data visualization tools such as Tableau, Flourish and Google Data Studio.
          </p>
          <p>
            Currently, I mostly work on front-end web development with some mobile app development in between. As a data enthusiast, I run some data analytics on my free time. Also a volunteer at <a href="http://ydlmalaysia.com">Young Digital Leaders Malaysia</a>, where I developed and maintain the Wordpress site, and try to chip in on a bit of analytics every now and then.
          </p>
          {close}
        </article>

        <article
          id="profile"
          className={`${this.props.article === 'profile' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Profile</h2>
          <div>
            <h3><span className="icon fa-briefcase"></span> Work Experience</h3>
          </div>
          <span className="image main">
            <img src={workPic} alt="" />
          </span>
          <ul>
            <li>
              <h3>Web and Mobile Developer (Intern)</h3>
              <h4>INVOKE Solutions Sdn Bhd</h4>
              <h5>February 2020 - Present</h5>
              <h6>- Front-end web and mobile development (ReactJS and React Native)</h6>
              <h6>- Back-end web development (NodeJS and ExpressJS)</h6>
              <h6>- Project and team management (Jira, HubStaff, Trello, Slack)</h6>
              <h6>- DevOps and version control (Git)</h6>
            </li>
          </ul>
          <div>
            <h3><span className="icon fa-university"></span> Education</h3>
          </div>
          <span className="image main">
            <img src={educationPic} alt="" />
          </span>
          <ul>
            <li>
              <h3>Bachelor of Computer Science (Hons.)</h3>
              <h4>Universiti Teknologi MARA (UiTM)</h4>
              <h5>March 2017 - July 2020</h5>
              <h6>- Final year project title: Visualizing the Reputation of Malaysian Communication Service Providers Through Twitter Sentiment Analysis Using Naive Bayes</h6>
              <h6>- CGPA: 3.34</h6>
            </li>
            <li>
              <h3>Bachelor Engineering (Hons.) (Electronic Engineering)</h3>
              <h4>Universiti Sains Malaysia (USM)</h4>
              <h5>August 2015 - February 2017</h5>
            </li>
            <li>
              <h3>Foundation in Engineering</h3>
              <h4>Universiti Teknologi MARA (UiTM)</h4>
              <h5>June 2014 - April 2015</h5>
              <h6>- CGPA: 3.78</h6>
              <h6>- MUET: Band 5</h6>
            </li>
            <li>
              <h3>Sijil Pelajaran Malaysia (SPM)</h3>
              <h4>Sekolah Menengah Kebangsaan Jitra</h4>
              <h5>January 2009 - December 2013</h5>
              <h6>- Grade: 5A+ 4A</h6>
            </li>
          </ul>
          <div>
            <h3><span className="icon fa-user"></span> Volunteer Experience</h3>
          </div>
          <span className="image main">
            <img src={volunteerPic} alt="" />
          </span>
          <ul>
            <li>
              <h3>Young Digital Leaders Malaysia</h3>
              <h4>March 2020 - Present</h4>
              <h6>- Web development (Wordpress)</h6>
            </li>
            <li>
              <h3>Petrosains</h3>
              <h4>December 2013 - April 2015</h4>
              <h6>- Dinotrek 2</h6>
              <h6>- Petronas StreetSmart</h6>
            </li>
          </ul>
          <button style={{ marginBottom: "5vh" }}>
            <a href="https://drive.google.com/uc?export=download&id=1VkOWPbcYRUUu0JFpHoqPNPO6t4C8GLih">Download resume</a>
          </button>
          {close}
        </article>

        <article
          id="portfolio"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <h3>Language</h3>
          <ul>
            <li>
              <h4>Malay (Native)</h4>
            </li>
            <li>
              <h4>English (Fluent)</h4>
            </li>
            <li>
              <h4>Mandarin (Elementary)</h4>
            </li>
          </ul>
          <span className="image main">
            <img src={frameworkPic} alt="" />
          </span>
          <h3>Programming Language</h3>
          <ul>
          <li>
              <h4>C, C++, C#</h4>
            </li>
            <li>
              <h4>Java, JavaScript</h4>
            </li>
            <li>
              <h4>Python</h4>
            </li>
            <li>
              <h4>HTML, CSS</h4>
            </li>
          </ul>
          <h3>Development Framework</h3>
          <ul>
            <li>
              <h4>Flask</h4>
            </li>
            <li>
              <h4>ReactJS, React Native, GatsbyJS</h4>
            </li>
            <li>
              <h4>NodeJS, ExpressJS</h4>
            </li>
          </ul>
          <h3>Data Analytics</h3>
          <ul>
            <li>
              <h4>Natural Language Processing (Sentiment Analysis)</h4>
            </li>
            <li>
              <h4>Data Visualization (Google Data Studio, Tableau, Flourish, Matplotlib)</h4>
            </li>
            <li>
              <h4>Machine Learning</h4>
            </li>
          </ul>
          <span className="image main">
            <img src={photographyPic} alt="" />
          </span>
          <h3>Creative</h3>
          <ul>
            <li>
              <h4>Photo Editing (Adobe Photoshop, Adobe Illusrator)</h4>
            </li>
            <li>
              <h4>Photography (Adobe Lightroom)</h4>
            </li>
          </ul>
          <span className="image main">
            <img src={sportsPic} alt="" />
          </span>
          <h3>Sports</h3>
          <ul>
            <li>
              <h4>Running</h4>
            </li>
            <li>
              <h4>Football</h4>
            </li>
            <li>
              <h4>Ultimate Frisbee</h4>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="covid-19"
          className={`${this.props.article === 'covid-19' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Covid-19</h2>
          <span className="image main">
            <iframe width="100%" height="600" src="https://datastudio.google.com/embed/reporting/1Wh4QLAQuUqCJVLByhhIQgW_s5-g8_eLv/page/WmKJB" allowfullscreen></iframe>
          </span>
          <span className="image main">
            <iframe width="100%" height="800" src='https://flo.uri.sh/visualisation/2343954/embed'></iframe>
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/aidilsafwan.aas@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <h3>
            Or email me at <a href="mailto:aidilsafwan.aas@gmail.com">aidilsafwan.aas@gmail.com</a>.
          </h3>
          <ul className="icons" style={{ marginTop: "5vh" }}>
            <li>
              <a
                href="https://www.twitter.com/aidilsfwn"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/aidilsfwn" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aidilsfwnn" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aidilsafwan"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
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
