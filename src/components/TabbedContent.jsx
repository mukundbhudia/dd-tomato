import React, { useState } from 'react'

const TabbedContent = ({ tabData }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  return (
    <div className="row">
      <div className="col-sm">
        <ul className="nav justify-content-center nav-tabs">
          {tabData.map((tab, i) => {
            const tabKey = tab.key
            return (
              <li
                key={tabKey}
                className="nav-item"
                onClick={() => setCurrentTabIndex(i)}
              >
                <a
                  className={`nav-link ${
                    currentTabIndex === i ? 'active' : ''
                  }`}
                  href={`#${tabKey}`}
                >
                  {tab.name}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="tab-content" id="nutrition">
          {tabData.map((tab, i) => {
            const tabKey = tab.key
            return (
              <div
                key={tabKey}
                className={`tab-pane fade ${
                  currentTabIndex === i ? 'show active' : ''
                }`}
                id={tabKey}
                role="tabpanel"
                aria-labelledby={`${tabKey}-tab`}
              >
                <p>{tab.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TabbedContent
