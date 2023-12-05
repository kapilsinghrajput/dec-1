import React from 'react'
import Footer_links from "./Footer_links"

const Footer = () => {
  return (
    <div>
      <div className="footer">

        <div className="links">
            <ul>
            <h2>social link</h2>
                <Footer_links iteam={"facebook"}/>
                <Footer_links iteam={"instagram"}/>
                <Footer_links iteam={"linkdin"}/>
                <Footer_links iteam={"git hub"}/>
            </ul>
        </div>
        <div className="links">
            <ul>
            <h2>over project</h2>

                <Footer_links iteam={"spotify clone"}/>
                <Footer_links iteam={"gaana clone"}/>
                <Footer_links iteam={"netflix clone"}/>
                <Footer_links iteam={"chat gpt 3 clone"}/>
            </ul>
        </div>
        <div className="links">
            <ul>
            <h2>contact us</h2>

                <Footer_links iteam={"ph-9009090"}/>
                <Footer_links iteam={"led line = 887"}/>
                <Footer_links iteam={"www.space-x.com"}/>
                <Footer_links iteam={"spac-x.git hub"}/>
            </ul>
        </div>
        <div className="links">
            <ul>
            <h2>about us</h2>

                <Footer_links iteam={"24/7 service"}/>
                <Footer_links iteam={"22 country offise"}/>
                <Footer_links iteam={"loop"}/>
                <Footer_links iteam={"fr hub"}/>
            </ul>
        </div>


      </div>
    </div>
  )
}

export default Footer
