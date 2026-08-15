import React, { useLayoutEffect, useRef, useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [targetHeight, setTargetHeight] = useState(null);
  const modalRef = useRef(null);

  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const highlights = repo.highlights || [
    repo.description,
    `Technical focus: ${repo.languages.map((language) => language.name).join(", ")}.`,
    "Designed around a clear user workflow and measurable business outcome.",
    "Includes consideration for maintainability, usability, security, and scalable data handling.",
  ];

  function openProjectDetails(event) {
    const card = event.currentTarget.getBoundingClientRect();
    setOrigin(card);
    setIsExpanded(false);
    setTargetHeight(null);
    setIsOpen(true);
  }

  useLayoutEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const contentHeight = Math.min(
      modalRef.current.scrollHeight + 64,
      window.innerHeight - 48
    );
    setTargetHeight(contentHeight);
    requestAnimationFrame(() => setIsExpanded(true));
  }, [isOpen]);

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={openProjectDetails}>
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              {repo.isConcept ? "" : `Created on ${repo.createdAt.split("T")[0]}`}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
          {/* <div className="repo-stats">
          <div className="repo-left-stat">
            <span>
              <div className="language-color" style={{ backgroundColor: repo.node.primaryLanguage.color }}></div>
              <p>{repo.node.primaryLanguage.name}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 10 16" width="10" fill="rgb(106, 115, 125)" className="repo-star-svg">
                <path
                  fill-rule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>{repo.node.forkCount}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)" className="repo-star-svg">
                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              <p>{repo.node.stargazers.totalCount}</p>
            </span>
          </div>
          <div className="repo-right-stat">
            <p>{repo.node.diskUsage} KB</p>
          </div>
        </div> */}
        </div>
      </Fade>
      {isOpen && (
        <div className="project-modal-backdrop" onClick={() => setIsOpen(false)}>
          <section
            ref={modalRef}
            className={`project-modal${isExpanded ? " project-modal-expanded" : ""}`}
            style={{
              backgroundColor: theme.body,
              color: theme.text,
              "--origin-left": `${origin.left}px`,
              "--origin-top": `${origin.top}px`,
              "--origin-width": `${origin.width}px`,
              "--origin-height": `${origin.height}px`,
              "--target-height": `${targetHeight || origin.height}px`,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${repo.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="project-modal-close" onClick={() => setIsOpen(false)} aria-label="Close project details">×</button>
            <h2 id={`project-title-${repo.id}`}>{repo.name}</h2>
            <p>{repo.description}</p>
            <ul>
              {highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
            </ul>
            {!repo.isConcept && (
              <button className="project-modal-link" onClick={() => openRepoinNewTab(repo.url)}>
                View GitHub Repository
              </button>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
