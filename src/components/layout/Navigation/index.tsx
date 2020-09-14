import React from 'react';

interface Props {
  XWins: number;
  OWins: number;
}

const Navigation = (props: Props) => {
  return (
    <div className="navigation ">
      <input type="checkbox" className="navigation_checkbox" id="navi_toggle" />
      <label htmlFor="navi_toggle" className="navigation_button">
        <span className="navigation_icon">&nbsp;</span>
      </label>
      <div className="navigation_background">&nbsp;</div>
      <nav className="navigation_nav">
        <ul className="navigation_list">
          <li className="navigation_item">
            <div className="navigation_result">X Wins: {props.XWins}</div>
          </li>
          <li className="navigation_item">
            <div className="navigation_result">O Wins: {props.OWins}</div>
          </li>
          <li className="navigation_item">
            <a href="/" className="navigation_restart">
              Restart
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
