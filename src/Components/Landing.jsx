import React from "react"
import "./Landing.css"

function Landing(){

  return(
    <section id="top" className="backgroundTop">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 left">
        <h1 className="seoHeader">Free time tracking software</h1>
        <h2 className="subheader">
          Increase project profitability with free time tracking
        </h2>
        <p className="para">
          A simple, yet powerful free time tracking app to stay on top of work. Ideal for professionals across all
          industries.
        </p>
        <div className="form">
          <form action="https://app.timecamp.com/auth/register" method="POST" className="inline-form-tc">
            <div className="form-wrapper">
              <input className="inp" placeholder="Your e-mail address" type="email" name="email"/>
              <p className="terms-submission">
                <label><input type="checkbox" required="required"/> By signing up you
                  agree to our
                  <a href="/terms-conditions/" rel="nofollow noopener noreferrer" target="_blank">Terms and Conditions</a>
                  and
                  <a href="/privacy-policy/" rel="nofollow noopener noreferrer" target="_blank">Privacy Policy</a>.</label>
              </p>
              <button type="submit" className="btn-filled green form-home-top">Sign up - it's free</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 ue-hero-main display">
        <div className="circle-content">
          <img src="https://cdn-m.timecamp.com/img/person.jpg" alt="review author" className="review-author"/>
        </div>
        <p className="strong">Adam Wagner, Co-owner and Chief Strategy Officer</p>
        <p>„TimeCamp proved to be an essential management tool that gives us clear insight into a project’s efficiency
          and helps to
          avoid an overblown workload for our team.”</p>
        <img src="https://cdn-m.timecamp.com/img/raindrop_logo.svg" alt="review company" className="review-company"/>
      </div>
    </div>
  </div>
</section>
  );
}
export {Landing}
