import React from 'react';
import CountUp from 'react-countup';

function Middle() {
    return (
        <div className="middle">
            <div className="wrapper">
                <div className="middle_con">
                    <section className="middle_con_box">
                        <h3>
                            <CountUp end={1527} suffix="+" />
                        </h3>
                        <h2 className="heading">Reports in Database</h2>
                    </section>
                    <section className="middle_con_box">
                        <h3>
                            <CountUp end={1527} suffix="+" />
                        </h3>
                        <h2 className="heading">Scams Reported</h2>
                    </section>
                    <section className="middle_con_box">
                        <h3>
                            <CountUp end={157} suffix="+" />
                        </h3>
                        <h2 className="heading">Total Users</h2>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Middle;
