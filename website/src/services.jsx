function Services(){
    return(
        <section className="Services_section" id="services">
      <div className="title">
        <h2>My Services</h2>

        </div>
        <div className="box">
            <div className="card">
                <i className="fas fa-bars"></i>
                <h5 className="text">Software Development</h5>
                <div className="pra">
                <p>Researching, designing, implementing, and managing software programs.
                    Testing and evaluating new programs. ...</p>
                        <p style={{textAlign: 'center'}}>
                        <a className="button" href="#">Read More</a>
                        </p>

                </div>
            </div>
            <div className="card">
            <i className="fas fa-bars"></i>
                <h5 className="text">Web Design</h5>
                <div className="pra">
                <p>Plan, create and code internet sites. Creating the designs and layout of 
                    a website or web pages.....</p>
                        <p style={{textAlign: 'center'}}>
                        <a className="button" href="#">Read More</a>
                        </p>

                </div>
            </div>
            <div className="card">
            <i className="fas fa-bars"></i>
                <h5 className="text">Technical Support</h5>
                <div className="pra">
                <p>Manage, Maintain, and repair IT systems. including the diagnotic and reparing
                    faults, resolving network issues, and configuring hardware and software...</p>
                        <p style={{textAlign: 'center'}}>
                        <a  className="button" href="#">Read More</a>
                        </p>
                </div>
            </div>

        </div>

      

        </section>

    )
}
export default Services;