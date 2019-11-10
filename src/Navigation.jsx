import React from 'react';

const Navigation = props => {
  return (
    <nav>
      <h2>This is nav</h2>
      <h3>Menu</h3>
      <ul>
        <li>
          <span>大項目１</span>
          <ul>
            <li><span>項目１－１</span></li>
            <li><span>項目１－２</span></li>
            <li><span>項目１－３</span></li>
            <li><span>項目１－４</span></li>
            <li><span>項目１－５</span></li>
          </ul>
        </li>
        <li>
          <span>大項目２</span>
          <ul>
            <li><span>項目２－１</span></li>
            <li><span>項目２－２</span></li>
            <li><span>項目２－３</span></li>
            <li><span>項目２－４</span></li>
            <li><span>項目２－５</span></li>
          </ul>
        </li>
        <li>
          <span>大項目３</span>
          <ul>
            <li><span>項目３－１</span></li>
            <li><span>項目３－２</span></li>
            <li><span>項目３－３</span></li>
            <li><span>項目３－４</span></li>
            <li><span>項目３－５</span></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;