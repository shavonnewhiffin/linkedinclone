import React from 'react'
import "./Widget.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widget = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__article--left">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__article--right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>
                LinkedIn News
            </h2>
                <InfoIcon />
        </div>
        {newsArticle("War in Iran: US updates", "Top news - 9099 readers")}
        {newsArticle("Tesla Hits New Highs", "Cars & Auto - 886 readers")}
        {newsArticle("10 Reasons Why AI is Not Taking Over Your Job", "Business - 3000 readers")}
        {newsArticle("Is Redux too good?", "Code - 123 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
    </div>
  )
}

export default Widget;