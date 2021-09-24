import React from 'react'
import "../../src/App.css";
import  ExplanationCard from "./ExplanationCard"
  

function Explanation () {
  
    return (
        <div className="Explanation">
          <h1>ＳＤＧｓとは</h1>
　　　　　　<p>持続可能な開発目標（SDGs：Sustainable Development Goals）とは，2001年に策定されたミレニアム開発目標（MDGs）の後継として，2015年9月の国連サミットで加盟国の全会一致で採択された「持続可能な開発のための2030アジェンダ」に記載された，2030年までに持続可能でよりよい世界を目指す国際目標です。</p>
          <ExplanationCard />
        </div> 
    )


}

export default Explanation;
