import React from 'react'
import {team1, team2, team3, team4,team5, team6} from "../assets/images/images"


const Team = () => {

  const members = [
    {
      image: team4,
      name: "John Smith",
      role: "CEO and Founder",
      text: "10+ years of experience in digital marketing.",
    },

    {
      image: team5,
      name: "Jane Doe",
      role: "Director of Operations",
      text: "7+ years of experience in project management.",
    },

    {
      image: team6,
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      text: "5+ years of experience in SEO and analytics.",
    },

    {
      image: team1,
      name: "Emily Johnson",
      role: "PPC Manager",
      text: "Expert in paid advertising and campaign growth.",
    },

    {
      image: team2,
      name: "Brian Williams",
      role: "Social Media Specialist",
      text: "Creates engaging social campaigns and strategies.",
    },
    {
      image: team3,
      name: "Brian Williams",
      role: "Social Media Specialist",
      text: "Creates engaging social campaigns and strategies.",
    },

   
  ];

  return (
    <section className="team-section">

      <div className="container">

        {/* HEADING */}
        <div className="services-heading">

          <h2>Team</h2>

          <p>
            Meet the skilled and experienced team behind our successful
            digital marketing strategies.
          </p>

        </div>

        {/* TEAM GRID */}
        <div className="row g-4">

          {members.map((member, index) => (

            <div className="col-lg-4 col-md-6" key={index}>

              <div className="team-card">

                {/* TOP */}
                <div className="team-top">

                  <div className="team-profile">

                    <img src={member.image} alt="" />

                    <div>
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>

                  </div>

                  <button className="linkedin-btn">
                    <i className="bi bi-linkedin"></i>
                  </button>

                </div>

                <hr />

                {/* TEXT */}
                <p className="team-text">
                  {member.text}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* BUTTON */}
        <div className="team-btn-wrapper">

          <button className="team-btn">
            See all team
          </button>

        </div>

      </div>
    </section>
  );
};
export default Team
