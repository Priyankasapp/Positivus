import React from "react";
import {
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
} from "../assets/images/images";

const Team = () => {
  const members = [
    {
      image: team1,
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
      image: team4,
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      text: "5+ years of experience in SEO and analytics.",
    },

    {
      image: team7,
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
      name: "Alex Carter",
      role: "Content Strategist",
      text: "Builds high-converting content marketing campaigns.",
    },
  ];

  return (
    <section
      className="team-section"
      data-aos="fade-up"
      aria-labelledby="team-heading"
    >
      <div className="container">

        {/* HEADING */}
        <header
          className="services-heading"
          data-aos="fade-down"
        >
          <h2 id="team-heading">Team</h2>

          <p>
            Meet the skilled and experienced team behind our successful
            digital marketing strategies.
          </p>
        </header>

        {/* TEAM GRID */}
        <div
          className="row g-4"
          role="list"
          aria-label="Team members"
        >
          {members.map((member, index) => (
            <article
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              role="listitem"
            >
              <div className="team-card">

                {/* TOP */}
                <div className="team-top">

                  <div className="team-profile">

                    {/* FLOWER BACKGROUND */}
                    <div
                      className="flower-wrapper"
                      aria-hidden="true"
                    >
                      <div className="flower">
                        <div className="petal petal2"></div>
                        <div className="petal petal4"></div>
                        <div className="petal petal6"></div>
                        <div className="petal petal8"></div>

                        <div className="center"></div>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="team-img"
                      loading="lazy"
                    />

                    {/* INFO */}
                    <div>
                      <h3>{member.name}</h3>

                      <p>{member.role}</p>
                    </div>

                  </div>

                  {/* LINKEDIN BUTTON */}
                  <button
                    className="linkedin-btn"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    type="button"
                  >
                    <i
                      className="bi bi-linkedin"
                      aria-hidden="true"
                    ></i>
                  </button>

                </div>

                <hr />

                {/* TEXT */}
                <p className="team-text">
                  {member.text}
                </p>

              </div>
            </article>
          ))}
        </div>

        {/* BUTTON */}
        <div
          className="team-btn-wrapper"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <button
            className="team-btn"
            type="button"
            aria-label="View all team members"
          >
            See all team
          </button>
        </div>

      </div>
    </section>
  );
};

export default Team;