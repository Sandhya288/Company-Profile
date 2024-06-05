import React from 'react';
import "./Manager.css"
// Team member component
const TeamMember = ({ name, position, imgSrc, twitter, facebook, instagram, email }) => (
  <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
    <div className="team-card">
      <div className="img-wrapper">
        <img className="team-img" src={imgSrc} alt={name} />
      </div>
      <p className="text-blk name">{name}</p>
      <p className="text-blk position">{position}</p>
      <div className="social-media-links">
        <a href={twitter} target="_blank">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="Twitter" />
        </a>
        <a href={facebook} target="_blank">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="Facebook" />
        </a>
        <a href={instagram} target="_blank">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram" />
        </a>
        <a href={email} target="_blank">
          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email" />
        </a>
      </div>
    </div>
  </div>
);

// Main component representing the team
const Team = () => (
  <div className="responsive-container-block outer-container" style={{ backgroundColor: '#000000' }}>
    <div className="responsive-container-block inner-container">
      <h1 style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', marginBottom: '0px', paddingBottom: '0px' }}>Meet Our Team</h1>
      <div className="responsive-container-block">
        {/* Team members */}
        <TeamMember
          name="AVINASH"
          position="Marketing Manager"
          imgSrc="https://2staritsolution.netlify.app/avi.png"
          twitter="http://www.twitter.com/"
          facebook="https://www.facebook.com/avinash.nakre?mibextid=ZbWKwL"
          instagram="https://instagram.com/avinash1250?igshid=OGQ5ZDc2ODk2ZA=="
          email="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=naikavinash153@gmail.com&tf=1"
        />
        <TeamMember
          name="DARSHITH"
          position="Business Development Manager"
          imgSrc="https://2staritsolution.netlify.app/dar.png"
          twitter="https://twitter.com/Rakshith26_"
          facebook="https://www.facebook.com/darshith.acharya.16?mibextid=ZbWKwL"
          instagram="https://instagram.com/_darshith_acharya_?igshid=OGQ5ZDc2ODk2ZA=="
          email="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=darshithacarya179@gmail.com&tf=1"
        />
        <TeamMember
          name="RAKSHITH"
          position="Software Development Manager"
          imgSrc="https://2staritsolution.netlify.app/rak2.png"
          twitter="https://twitter.com/Rakshith26_"
          facebook="https://www.facebook.com/rakshith.rakshii.9?mibextid=ZbWKwL"
          instagram="https://instagram.com/rakshii.th_19?igshid=NGVhN2U2NjQ0Yg=="
          email="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=rakshithrakshii26@gmail.com&tf=1"
        />
      </div>
    </div>
  </div>
);

export default Team;
