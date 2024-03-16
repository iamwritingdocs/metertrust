import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './readings.css'

const Readings = (props) => {
  return (
    <div className="readings-container">
      <Helmet>
        <title>Readings - MeterTrust</title>
        <meta property="og:title" content="Readings - MeterTrust" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="navbarContainer readings-navbar-interactive"
      >
        <span className="logo">Metertrust</span>
        <div data-thq="thq-navbar-nav" className="readings-desktop-menu"></div>
        <div data-thq="thq-burger-menu" className="readings-burger-menu">
          <svg viewBox="0 0 1024 1024" className="readings-icon socialIcons">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="readings-mobile-menu1 mobileMenu"
        >
          <div className="readings-nav">
            <div className="readings-top">
              <span className="logo">ENERGY</span>
              <div data-thq="thq-close-menu" className="readings-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  className="readings-icon02 socialIcons"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="readings-links">
              <span className="readings-nav12 bodySmall">Home</span>
              <span className="readings-nav22 bodySmall">Submit Reading</span>
              <span className="readings-nav32 bodySmall">Previous Reads</span>
              <span className="readings-nav42 bodySmall">FAQ</span>
              <span className="readings-nav52 bodySmall">Contact Us</span>
            </nav>
            <div className="readings-buttons">
              <button className="buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="readings-icon04 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="readings-icon06 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="readings-icon08 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="readings-container01">
        <h1 className="readings-text">Dashboard</h1>
      </div>
      <div className="readings-container02">
        <h1 className="readings-text01">Current period</h1>
      </div>
      <div className="readings-container03">
        <div className="readings-container04">
          <div className="readings-container05">
            <h1 className="readings-text02">Description</h1>
          </div>
        </div>
        <div className="readings-container06">
          <h1 className="readings-text03">Period</h1>
        </div>
        <div className="readings-container07">
          <h1 className="readings-text04">Meter read</h1>
        </div>
        <div className="readings-container08">
          <h1 className="readings-text05">Rate</h1>
        </div>
        <div className="readings-container09">
          <h1 className="readings-text06">
            <span>Amount</span>
            <br></br>
          </h1>
        </div>
        <div className="readings-container10"></div>
      </div>
      <div className="readings-container11">
        <div className="readings-container12">
          <div className="readings-container13">
            <h2 className="readings-text09">
              <span>Electricity</span>
              <br></br>
            </h2>
          </div>
        </div>
        <div className="readings-container14">
          <h2 className="readings-text12">1/2/24 - 29/2/24</h2>
        </div>
        <div className="readings-container15">
          <h2 className="readings-text13">105 kWh</h2>
        </div>
        <div className="readings-container16">
          <h2 className="readings-text14">0.16706</h2>
        </div>
        <div className="readings-container17">
          <h2 className="readings-text15">
            <span className="readings-text16">£17.55</span>
            <br></br>
          </h2>
        </div>
        <div className="readings-container18">
          <button type="button" className="readings-button button">
            APPROVE
          </button>
        </div>
        <div className="readings-container19">
          <button type="button" className="readings-button1 button">
            REJECT
          </button>
        </div>
      </div>
      <div className="readings-container20">
        <div className="readings-container21">
          <div className="readings-container22">
            <h2 className="readings-text18">Gas</h2>
          </div>
        </div>
        <div className="readings-container23">
          <h2 className="readings-text19">1/2/24 - 29/2/24</h2>
        </div>
        <div className="readings-container24">
          <h2 className="readings-text20">45 kWh</h2>
        </div>
        <div className="readings-container25">
          <h2 className="readings-text21">0.10165</h2>
        </div>
        <div className="readings-container26">
          <h2 className="readings-text22">
            <span className="readings-text23">£4.57</span>
            <br className="readings-text24"></br>
            <br></br>
          </h2>
        </div>
        <div className="readings-container27">
          <button type="button" className="readings-button2 button">
            APPROVE
          </button>
        </div>
        <div className="readings-container28">
          <button type="button" className="readings-button3 button">
            REJECT
          </button>
        </div>
      </div>
      <div className="readings-container29">
        <h1 className="readings-text26">Pending</h1>
      </div>
      <div className="readings-container30">
        <div className="readings-container31">
          <div className="readings-container32">
            <h1 className="readings-text27">Description</h1>
          </div>
        </div>
        <div className="readings-container33">
          <h1 className="readings-text28">Period</h1>
        </div>
        <div className="readings-container34">
          <h1 className="readings-text29">Meter read</h1>
        </div>
        <div className="readings-container35">
          <h1 className="readings-text30">Rate</h1>
        </div>
        <div className="readings-container36">
          <h1 className="readings-text31">
            <span>Amount</span>
            <br></br>
          </h1>
        </div>
        <div className="readings-container37"></div>
      </div>
      <div className="readings-container38">
        <div className="readings-container39">
          <div className="readings-container40">
            <h2 className="readings-text34">
              <span>Electricity</span>
              <br></br>
            </h2>
          </div>
        </div>
        <div className="readings-container41">
          <h2 className="readings-text37">1/1/24 - 31/1/24</h2>
        </div>
        <div className="readings-container42">
          <h2 className="readings-text38">125 kWh</h2>
        </div>
        <div className="readings-container43">
          <h2 className="readings-text39">0.16706</h2>
        </div>
        <div className="readings-container44">
          <h2 className="readings-text40">
            <span className="readings-text41">£21.55</span>
            <br></br>
          </h2>
        </div>
        <div className="readings-container45">
          <label className="readings-text43">AWAITING APPROVAL</label>
        </div>
        <div className="readings-container46"></div>
      </div>
      <div className="readings-container47">
        <div className="readings-container48">
          <div className="readings-container49">
            <h2 className="readings-text44">Gas</h2>
          </div>
        </div>
        <div className="readings-container50">
          <h2 className="readings-text45">1/2/24 - 29/2/24</h2>
        </div>
        <div className="readings-container51">
          <h2 className="readings-text46">55 kWh</h2>
        </div>
        <div className="readings-container52">
          <h2 className="readings-text47">0.10165</h2>
        </div>
        <div className="readings-container53">
          <h2 className="readings-text48">
            <span className="readings-text49">£5.85</span>
            <br></br>
          </h2>
        </div>
        <div className="readings-container54">
          <label className="readings-text51">AWAITING VALIDATION</label>
        </div>
        <div className="readings-container55"></div>
      </div>
      <div className="readings-container56">
        <h1 className="readings-text52">Previous reads</h1>
      </div>
      <div className="readings-container57">
        <div className="readings-container58">
          <div className="readings-container59">
            <h1 className="readings-text53">Description</h1>
          </div>
        </div>
        <div className="readings-container60">
          <h1 className="readings-text54">Period</h1>
        </div>
        <div className="readings-container61">
          <h1 className="readings-text55">Meter read</h1>
        </div>
        <div className="readings-container62">
          <h1 className="readings-text56">Rate</h1>
        </div>
        <div className="readings-container63">
          <h1 className="readings-text57">
            <span>Amount</span>
            <br></br>
          </h1>
        </div>
        <div className="readings-container64"></div>
      </div>
      <div className="readings-container65">
        <div className="readings-container66">
          <div className="readings-container67">
            <h2 className="readings-text60">
              <span>Electricity</span>
              <br></br>
            </h2>
          </div>
        </div>
        <div className="readings-container68">
          <h2 className="readings-text63">1/12/23 - 31/12/23</h2>
        </div>
        <div className="readings-container69">
          <h2 className="readings-text64">130 kWh</h2>
        </div>
        <div className="readings-container70">
          <h2 className="readings-text65">0.16706</h2>
        </div>
        <div className="readings-container71">
          <h2 className="readings-text66">
            <span className="readings-text67">£25.67</span>
            <br></br>
          </h2>
        </div>
        <div className="readings-container72">
          <label className="readings-text69">APPROVED</label>
        </div>
        <div className="readings-container73">
          <Link to="/payment" className="readings-navlink button">
            PAY
          </Link>
        </div>
      </div>
      <div className="readings-container74">
        <div className="readings-container75">
          <div className="readings-container76">
            <h2 className="readings-text70">Gas</h2>
          </div>
        </div>
        <div className="readings-container77">
          <h2 className="readings-text71">1/2/24 - 29/2/24</h2>
        </div>
        <div className="readings-container78">
          <h2 className="readings-text72">60kWh</h2>
        </div>
        <div className="readings-container79">
          <h2 className="readings-text73">0.10165</h2>
        </div>
        <div className="readings-container80">
          <h2 className="readings-text74">
            <span className="readings-text75">£6.77</span>
            <br></br>
          </h2>
        </div>
        <div className="readings-container81">
          <label className="readings-text77">APPROVED</label>
        </div>
        <div className="readings-container82">
          <button type="button" className="readings-button4 button">
            PAY
          </button>
        </div>
      </div>
      <footer className="readings-footer footerContainer">
        <div className="readings-container83">
          <span className="logo">Metertrust</span>
          <nav className="readings-nav1"></nav>
        </div>
        <div className="readings-separator"></div>
        <div className="readings-container84">
          <span className="bodySmall readings-text78">
            © 2024 MeterTrust, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Readings
