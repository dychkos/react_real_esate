import React from "react";
import Logo from "../assets/img/real_logo.svg";
import Button from "./buttons/Button";
const Footer:React.FC=(props)=>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__row-1 row row row-cols-1 row-cols-sm-2">
                    <div className="footer__col col">
                        <div className="footer__title">
                            <h3>Make your dreams a </h3> <h3 className="yellow">reality</h3>
                        </div>
                    </div>
                    <div className="footer__col_right col">
                        <Button color={"yellow"}>
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="footer__row-2 row row-cols-2 row-cols-lg-4">
                    <div className="col">
                        <div className="footer__col footer__col_absolute">
                            <div className="footer__fix-size">
                                <div className="footer__logo logo">
                                    <img src={Logo} alt="logo"/>
                                </div>
                                <div className="footer__social social">
                                    <a className="social" href="https://google.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20"
                                             fill="none">
                                            <path
                                                d="M8.14996 3.29509H9.96164V0.139742C9.64908 0.0967442 8.57414 0 7.32226 0C4.71016 0 2.92081 1.643 2.92081 4.66274V7.44186H0.0383301V10.9693H2.92081V19.845H6.45487V10.9701H9.22076L9.65983 7.44269H6.45404V5.01251C6.45487 3.99297 6.72939 3.29509 8.14996 3.29509Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                    <a className="social" href="https://google.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px"
                                             height="24px">
                                            <path
                                                d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/>
                                        </svg>
                                    </a>
                                    <a className="social" href="https://google.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                             fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M6.875 0H15.125C18.9214 0 22 3.07862 22 6.875V15.125C22 18.9214 18.9214 22 15.125 22H6.875C3.07862 22 0 18.9214 0 15.125V6.875C0 3.07862 3.07862 0 6.875 0ZM15.125 19.9375C17.7787 19.9375 19.9375 17.7787 19.9375 15.125V6.875C19.9375 4.22125 17.7787 2.0625 15.125 2.0625H6.875C4.22125 2.0625 2.0625 4.22125 2.0625 6.875V15.125C2.0625 17.7787 4.22125 19.9375 6.875 19.9375H15.125Z"
                                                  fill="white"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M5.5 11C5.5 7.96263 7.96263 5.5 11 5.5C14.0374 5.5 16.5 7.96263 16.5 11C16.5 14.0374 14.0374 16.5 11 16.5C7.96263 16.5 5.5 14.0374 5.5 11ZM7.5625 11C7.5625 12.8948 9.10525 14.4375 11 14.4375C12.8948 14.4375 14.4375 12.8948 14.4375 11C14.4375 9.10388 12.8948 7.5625 11 7.5625C9.10525 7.5625 7.5625 9.10388 7.5625 11Z"
                                                  fill="white"/>
                                            <path
                                                d="M16.9125 5.82024C17.3173 5.82024 17.6454 5.49212 17.6454 5.08737C17.6454 4.68261 17.3173 4.35449 16.9125 4.35449C16.5077 4.35449 16.1796 4.68261 16.1796 5.08737C16.1796 5.49212 16.5077 5.82024 16.9125 5.82024Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer__col">
                            <h6>Column heading</h6>
                            <ul className="footer__nav">
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer__col">
                            <h6>Column heading</h6>
                            <ul className="footer__nav">
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer__col">
                            <h6>Column heading</h6>
                            <ul className="footer__nav">
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                                <li className="footer__link"><a href="https://google.com">Link goes here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;