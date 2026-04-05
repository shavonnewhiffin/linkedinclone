import React from 'react'
import "./Widget.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                <InfoIcon className="infoIcon" />
        </div>
        {newsArticle("War in Iran: US updates", "Top news - 9099 readers")}
        {newsArticle("Tesla Hits New Highs", "Cars & Auto - 886 readers")}
        {newsArticle("10 Reasons Why AI is Not Taking Over Your Job", "Business - 3000 readers")}
        {newsArticle("Is Redux too good?", "Code - 123 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
        <p>Show all news <ArrowForwardIcon /></p>
    </div>
  )
}

export default Widget;