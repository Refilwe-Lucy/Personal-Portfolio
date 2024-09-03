function Contact(){
    return(
        <section className="contact_me" id="contact">
            <div className="cont">
                <main className="row">
                    <section className="col left">
                    <div className="contactTitle">
                        <h2>Get In Touch</h2>
                        <p>Lets talk, .........</p>
                    </div>
                    <div className="contactInfo">
                        <div className="iconGroup">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>

                            </div>
                            <div className="details">
                                <span>Phone</span>
                                <span>+2760 6</span>
                            </div>

                        </div>
                        <div className="iconGroup">
                            <div className="icon">
                                <i className="fa-solid fa-envelope"></i>

                            </div>
                            <div className="details">
                                <span>Email</span>
                                <span>makuwalucy@gmail.com</span>
                            </div>

                        </div>
                        <div className="iconGroup">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>

                            </div>
                            <div className="details">
                                <span>Location</span>
                                <span>X Street, Y Road, SA</span>
                            </div>
                            

                        </div>
                        

                    </div>
                    </section>

                   


                    <section className="col right">
                        <form className="messageForm">
                            <div className="inputGroup x">
                                <input type="text" name="" required="required"/>
                                <label>Your Name</label>

                            </div>
                            <div className="inputGroup halfWidth">
                                <input type="email" name="" required="required"/>
                                <label>Email</label>

                            </div>
                            <div className="inputGroup c">
                                <input type="text" name="" required="required"/>
                                <label>Subject</label>

                            </div>
                            <div className="inputGroup fullWidth">
                                <textarea required="required"></textarea>
                                <label>Say Something</label>

                            </div>
                            <div className=" inputGroup fullWidth">
                                <button>Send Message</button>
                                

                            </div>
                        </form>
                        </section>


                </main>
            </div>
        </section>
    )
}
export default Contact;