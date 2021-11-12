import React from "react";
import { Link } from "react-router-dom";


class About extends React.Component {
    render() {
        return (
            <section className="about">
                <section className="about-header-img">
                    <div className="about-img-container container">
                        <h1 className="about-line">We Bring People Together</h1>
                        <span className="about-subtitle">About Tea With Strangers</span>
                    </div>
                </section>
                <div className="about-container container">
                    <h1>It's good to feel at home.</h1>
                    <p>Tea With Strangers is a community organization that's all about making our cities feel more like neighborhoods by breaking the barriers between strangers.</p>
                    <p>
                        Why?Because neighborhoods create a sense of belonging.
                        Neighborhoods let us be ourselves.
                        Neighborhoods make us feel like someone has our back.
                    </p>
                    <h2>
                        What does this have at all to do with sitting with strangers for conversations?
                    </h2>
                    <p>
                        There are two massive hurdles that often stop us from smiling at each other on the street, taking our headphones out on the bus, or just generally treating others with a huge amount of empathy, understanding, and awesome.
                    </p>
                    <ol>
                        <li>
                            We have our own lives to lead, and empathizing with others is hard when we're stuck in our own heads.
                        </li>
                        <li>
                            We don't know how others will respond if we actually do something so outlandish as saying, "Hi" or asking "How are you? No really, how are you?"
                        </li>
                    </ol>
                    <p>
                        So we have a community of hosts that bring small groups of people together for no-strings-attached conversations.
                        Just to talk about anything and everything.
                        It could be deep. It could be funny. It could be awkward. It could be vulnerable.
                        It's different every time, and you can't really plan for that.
                    </p>
                    <p>
                        And it's in this that we can be more understanding of the "strangers" around us.
                        And if more people can share that experience, we might start seeing the objects between us and the rest of our lives as, well, real people.
                        And that makes the space we share feel a lot more like home.
                    </p>
                    <p>
                        It starts with a conversation.
                    </p>
                    <h1>
                        Who is behind all of this?
                    </h1>
                    <p>
                        Hi, my name is Pasan Dharmasena, I created this clone of
                        <span className="about-link">
                            <a src="http://www.teawithstrangers.com"> Tea With Strangers </a>
                        </span>
                        as my final project for App Academy.
                    </p>
                    <p>
                        Here are links to my
                        <span className="about-link">
                            <a src="https://www.linkedin.com/in/pasan-dharmasena-135507159/"> LinkedIn </a>
                        </span>
                        and to the
                        <span className="about-link">
                            <a src="https://github.com/Arebiter/TeaWithStrangers"> Github page </a>
                        </span>
                        for this project.
                    </p>
                </div>
            </section>

        )
    }
}

export default About;