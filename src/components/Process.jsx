import React from "react";
import "../App.css";

const Process = () => {
  return (
    <section className="process-section">

      <div className="container">

        {/* HEADING */}
        <div className="services-heading">

          <h2>Our Working Process</h2>

          <p>
            Step-by-step approach to achieving your business goals.
          </p>

        </div>

        {/* ACCORDION */}

        <div
          className="accordion process-accordion"
          id="processAccordion"
        >

          {/* ITEM 1 */}

          <div className="accordion-item process-item active-process">

            <h2 className="accordion-header">

              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >

                <span className="process-number">
                  01
                </span>

                <span className="process-title">
                  Consultation
                </span>

              </button>

            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#processAccordion"
            >

              <div className="accordion-body">

                During the initial consultation, we will discuss your
                business goals and objectives, target audience, and
                current marketing efforts.

              </div>

            </div>
          </div>

          {/* ITEM 2 */}

          <div className="accordion-item process-item">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >

                <span className="process-number">
                  02
                </span>

                <span className="process-title">
                  Research and Strategy Development
                </span>

              </button>

            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#processAccordion"
            >

              <div className="accordion-body">

                We analyze your market, competitors, and audience to
                build a strong marketing strategy.

              </div>

            </div>
          </div>

          {/* ITEM 3 */}

          <div className="accordion-item process-item">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >

                <span className="process-number">
                  03
                </span>

                <span className="process-title">
                  Implementation
                </span>

              </button>

            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#processAccordion"
            >

              <div className="accordion-body">

                Our team executes the strategy using the latest
                marketing tools and techniques.

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;