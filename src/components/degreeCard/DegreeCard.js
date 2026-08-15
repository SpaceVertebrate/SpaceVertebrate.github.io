import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={require(`../../assests/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence, index) => {
                return (
                  <p
                    key={`${degree.title}-description-${index}`}
                    className="content-list"
                    style={{ color: theme.text }}
                  >
                    {sentence}
                  </p>
                );
              })}
              {(degree.website_link || degree.certificate_links) && (
                <div className="degree-actions">
                  {degree.website_link && (
                    <a
                      href={degree.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="visit-btn"
                        style={{ backgroundColor: theme.headerColor }}
                      >
                        <p className="btn" style={{ color: theme.text }}>
                          Visit Website
                        </p>
                      </div>
                    </a>
                  )}
                  {degree.certificate_links && (
                    <div className="document-links">
                      <p className="document-links-title" style={{ color: theme.text }}>
                        Academic documents
                      </p>
                      <div className="document-link-grid">
                        {degree.certificate_links.map((certificate) => (
                          <a
                            key={certificate.label}
                            href={certificate.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="visit-btn"
                              style={{ backgroundColor: theme.headerColor }}
                            >
                              <p className="btn" style={{ color: theme.text }}>
                                {certificate.label}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
