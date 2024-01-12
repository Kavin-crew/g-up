function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer_con">
                    <div className="footer_con_copyright">
                        <h2>g.up</h2>
                        <p>
                            Copyright &copy; {new Date().getFullYear()} | <a href="javascript:;">Privacy Policy</a> | Designed by Probee
                        </p>
                    </div>

                    <ul className="social_list">
                        <li className="social_item">
                            <p>fb</p>
                        </li>
                        <li className="social_item">
                            <p>twitter</p>
                        </li>
                        <li className="social_item">
                            <p>ig</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
