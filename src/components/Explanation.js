import React from 'react'
import "../../src/App.css";
import  E_Card from "./E_Card"
  

function Explanation () {
    return (
        <div className="Explanation">
          <h1>ＳＤＧｓ(エス・ディー・ジーズ)とは</h1>
　　　　　　<p>持続可能な開発目標（SDGs：Sustainable Development Goals）とは，2001年に策定されたミレニアム開発目標（MDGs）の後継として，2015年9月の国連サミットで加盟国の全会一致で採択された「持続可能な開発のための2030アジェンダ」に記載された，2030年までに持続可能でよりよい世界を目指す国際目標です。
             <br/>17のゴール・169のターゲットから構成され，地球上の「誰一人取り残さない（leave no one behind）」ことを誓っています。SDGsは発展途上国のみならず，先進国自身が取り組むユニバーサル（普遍的）なものであり，日本としても積極的に取り組んでいます。</p>
          <E_Card />
        </div> 
    )


}

export default Explanation;
