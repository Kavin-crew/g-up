import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className="banner">
            <div className="wrapper">
                <div className="banner_con">
                    <div className="banner_con_info">
                        <h1 className="heading heading-secondary">
                            <small className="primary-heading-small">Uncover Scammers:</small>
                            Search, Verify,
                            <span>Protect!</span>
                        </h1>
                        <p>Explore Our Tool to Identify Scam Phone Numbers Instantly.</p>
                        <Link to="/reportanumber" class="btn btn-primary">
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
