import React from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch({ isNightTheme, onToggle }) {
  if (!onToggle) {
    return null;
  }

  const nextModeLabel = isNightTheme ? "day" : "night";

  return (
    <button
      type="button"
      className={`theme-toggle ${isNightTheme ? "night" : "day"}`}
      onClick={onToggle}
      aria-label={`Switch to ${nextModeLabel} mode`}
      aria-pressed={Boolean(isNightTheme)}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-halo"></span>
        <span className="theme-toggle-stars">
          <span className="star star-a"></span>
          <span className="star star-b"></span>
          <span className="star star-c"></span>
          <span className="star star-d"></span>
          <span className="star star-e"></span>
          <span className="star star-f"></span>
          <span className="star star-g"></span>
        </span>
        <span className="theme-toggle-clouds">
          <span className="cloud cloud-a"></span>
          <span className="cloud cloud-b"></span>
          <span className="cloud cloud-c"></span>
          <span className="cloud cloud-d"></span>
          <span className="cloud cloud-e"></span>
        </span>
        <span className="theme-toggle-thumb">
          <span className="crater crater-a"></span>
          <span className="crater crater-b"></span>
          <span className="crater crater-c"></span>
        </span>
      </span>
    </button>
  );
}
