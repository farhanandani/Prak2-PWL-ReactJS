import React from "react";

const About = () => {
    return (
        <>
        <div className="card">
            <div className="card-block">
                <h2>About me</h2>
                <div className="row">
                    <div className="col-md-4">
                        <p><img className="img-responsive" alt="" /></p>
                    </div>
                    <div className="col-md-8">
                        <p>Mahasiswa Teknik Informatika di Institut Teknologi Sumatera</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-block">
              <h2>Education</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="education-experience">
                    <small className="date">2019-2023 (expected)</small>
                    <h3 className="h5 date-title">Informatics Engineering</h3>
                    <p>Institut Teknologi Sumatera</p>
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="education-experience">
                    <small className="date">2016-2019</small>
                    <h3 className="h5 date-title">MIPA</h3>
                    <p>SMAN 80 Jakarta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        

        
          
    );
}

export default About;