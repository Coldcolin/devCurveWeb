import {useState} from "react";
import {FaChevronDown, FaRegArrowAltCircleRight} from "react-icons/fa";
import "./Faq.css"

const Faq = () => {
    const [dropFaqOne, setDropFaqOne] = useState(false);
    const [dropFaqTwo, setDropFaqTwo] = useState(false);
    const [dropFaqThree, setDropFaqThree] = useState(false);
    const [dropFaqFour, setDropFaqFour] = useState(false);
    const [dropFaqFive, setDropFaqFive] = useState(false);
    const [dropFaqSix, setDropFaqSix] = useState(false);
    const [dropFaqSeven, setDropFaqSeven] = useState(false);
    const [dropFaqEight, setDropFaqEight] = useState(false);
    const [dropFaqNine, setDropFaqNine] = useState(false);
    const [dropFaqTen, setDropFaqTen] = useState(false);

    return (
        <>
            <div className="FaqBody">
                <div className="FaqWrap">
                    <h2>Frequently Asked Question</h2>
                    <div className="FaqMain">
                        <div className="FaqMainLeft">
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() => setDropFaqOne(!dropFaqOne)}
                                >
                                    <h3>What are the requirements to join the Curve africa</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqOne ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqOne ? "" : "active"
                                    }`}
                                >
                                    <p>
                                    -You must be available for the whole 6 month duration of the training <br /> <br />
                                    -own or have access to a working laptop <br /> <br />
                                    -And be willing to learn and dedicate to the training
                                    </p>
                                </div>
                            </div>
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() => setDropFaqTwo(!dropFaqTwo)}
                                >
                                    <h3>How do I apply for the training</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqTwo ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqTwo ? "" : "active"
                                    }`}
                                >
                                    <p>
                                    - visit our website <br /> <br />
                                    - click on the register button <br /> <br />
                                    - fill the form and submit
                                    </p>
                                </div>
                            </div>
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() =>
                                        setDropFaqThree(!dropFaqThree)
                                    }
                                >
                                    <h3>Where is your location</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqThree ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqThree ? "" : "active"
                                    }`}
                                >
                                    <p>
                                    we are currently located in Lagos, Nigeria
                                    </p>
                                </div>
                            </div>
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() => setDropFaqFour(!dropFaqFour)}
                                >
                                    <h3>Is your program online</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqFour ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqFour ? "" : "active"
                                    }`}
                                >
                                    <p>
                                    Currently, we only run the onsite training
                                    </p>
                                </div>
                            </div>
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() => setDropFaqFive(!dropFaqFive)}
                                >
                                    <h3>Do you have weekend classes</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqFive ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqFive ? "" : "active"
                                    }`}
                                >
                                    <p>
                                    Currently our training is only on weekdays
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="FaqMainRight">
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() => setDropFaqSix(!dropFaqSix)}
                                >
                                    <h3>When are your training days</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqSix ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqSix ? "" : "active"
                                    }`}
                                >
                                    <p>
                                    Our training days are Mondays, Wednesdays and Fridays.
                                    </p>
                                </div>
                            </div>
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() =>
                                        setDropFaqSeven(!dropFaqSeven)
                                    }
                                >
                                    <h3>How long is the training</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqSeven ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqSeven ? "" : "active"
                                    }`}
                                >
                                    <p>
                                       our intensive training runs for 6 months
                                    </p>
                                </div>
                            </div>
                            {/* <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() =>
                                        setDropFaqEight(!dropFaqEight)
                                    }
                                >
                                    <h3>When is your next cohort starting</h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqEight ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqEight ? "" : "active"
                                    }`}
                                >
                                    <p>
                                        The Curve Africa cohort 4 will open 12th
                                        February, 2024
                                    </p>
                                </div>
                            </div>
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() => setDropFaqNine(!dropFaqNine)}
                                >
                                    <h3>When is your next cohort starting </h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqNine ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqNine ? "" : "active"
                                    }`}
                                >
                                    <p>
                                        The Curve Africa cohort 4 will open 12th
                                        February, 2024
                                    </p>
                                </div>
                            </div>
                            <div className="FaqMainItem1">
                                <div
                                    className="FaqMainItem1A"
                                    onClick={() => setDropFaqTen(!dropFaqTen)}
                                >
                                    <h3>When is your next cohort starting </h3>
                                    <FaChevronDown
                                        style={{
                                            rotate: `${
                                                dropFaqTen ? "-180deg" : ""
                                            }`,
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                </div>
                                <div
                                    className={`FaqMainItem1B ${
                                        dropFaqTen ? "" : "active"
                                    }`}
                                >
                                    <p>
                                        The Curve Africa cohort 4 will open 12th
                                        February, 2024
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <p className="FaqSeeMore">
                        <span>
                            See more
                            <FaRegArrowAltCircleRight className="FaqSeeMoreFaRegArrowAltCircleRight" />
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Faq;
