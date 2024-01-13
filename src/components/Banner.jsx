import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className="banner">
            <div className="wrapper">
                <div className="banner_con">
                    <div className="banner_con_info">
                        <h2 className="heading heading-secondary">
                            <small className="primary-heading-small">Report Scammers</small>
                            Protect
                            <span>Each Other</span>
                        </h2>
                        <p>Your input can help others avoid falling victim to scams.</p>
                        <Link to="/reportanumber" className="btn btn-primary">
                            Report a Number
                        </Link>
                    </div>

                    <figure>
                        <img src="images/image.png" alt="woman smiling" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Banner;
