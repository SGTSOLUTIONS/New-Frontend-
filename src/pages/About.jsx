import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg/7.jpg'

const About = () => {
    const testimonialRef = useRef(null);
    const clientRef = useRef(null);
    const [activeFaq, setActiveFaq] = useState('ma_collapes_02');

    useEffect(() => {
        if (window.$ && testimonialRef.current) {
            window.$('.testimonialslider02').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                smartSpeed: 1000,
                dots: true,
                nav: false,
            });
        }

        if (window.$ && clientRef.current) {
            window.$('.client-slider').owlCarousel({
                items: 4,
                loop: true,
                autoplay: true,
                smartSpeed: 1000,
                dots: false,
                nav: false,
                responsive: {
                    0: { items: 2 },
                    768: { items: 3 },
                    992: { items: 4 },
                },
            });
        }

        if (window.$) {
            window.$('.collapse').on('show.bs.collapse', function () {
                window.$(this).closest('.card').addClass('activeBg');
            });
            window.$('.collapse').on('hide.bs.collapse', function () {
                window.$(this).closest('.card').removeClass('activeBg');
            });
        }

        if (window.$ && window.lightcase) {
            window.$('.popup_video').lightcase();
        }

        return () => {
            if (window.$ && testimonialRef.current) {
                window.$('.testimonialslider02').trigger('destroy.owl.carousel');
            }
            if (window.$ && clientRef.current) {
                window.$('.client-slider').trigger('destroy.owl.carousel');
            }
        };
    }, []);

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? '' : faqId);
    };

    const services = [
        {
            id: 1,
            icon: '',
            title: 'Flexible Solutions',
            description: "We develop the relationships that Into underpin the next phase in your Teen organisation's growth.",
            link: '/single-service',
        },
        {
            id: 2,
            icon: '',
            title: 'Premium Contact',
            description: "We develop the relationships that Into underpin the next phase in your Teen organisation's growth.",
            link: '/single-service',
        },
        {
            id: 3,
            icon: '',
            title: 'Creative Idea',
            description: "We develop the relationships that Into underpin the next phase in your Teen organisation's growth.",
            link: '/single-service',
        },
    ];

    const team = [
        { id: 1, name: 'Arnika Sorkar', role: 'Web Designer', image: '' },
        { id: 2, name: 'Georgie Haynes', role: 'Web Developer', image: '' },
        { id: 3, name: 'Jizz Merkel', role: 'Business Expert', image: '' },
    ];

    const testimonials = [
        {
            id: 1,
            avatar: '',
            text: "Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are",
            author: 'Akshit Singh Dutt',
            role: 'Digital Marketing Manager',
        },
        {
            id: 2,
            avatar: '',
            text: "Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are",
            author: 'Matt Sanchzi',
            role: 'ThemeForest Exclusive',
        },
        {
            id: 3,
            avatar: '',
            text: "Ash's tactics & books have helped me a lot in my understanding on how social media advertising works.I can say that he is one of the best development professionals i have dealt with so far. His experience is great & he is such a great & pleasant person to work with as he understands what you are",
            author: 'Billi Stanlake',
            role: 'ThemeForest Reviewer',
        },
    ];

    const faqs = [
        {
            id: 'ma_collapes_01',
            question: 'Wte Have added a new exciting feature in v2.0',
            answer: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers',
        },
        {
            id: 'ma_collapes_02',
            question: 'how Consultancy Experts Work?',
            answer: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers',
        },
        {
            id: 'ma_collapes_03',
            question: 'Wte Have added a new exciting feature in v2.0',
            answer: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites, We are committed to providing our customers',
        },
    ];

    const clients = ['', '', '', ''];

    return (
        <>


            <section
                className="page_banner"
                style={{
                       backgroundImage: `url(${bg})`,
    backgroundSize: '100% auto',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '800px'
                }}  >
                <div className="overlay"></div>
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="banner-title">About Page 0001</h2>

                        </div>
                    </div>

                </div>

            </section>
            <section className="aboutPageSection01">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="subTitle">Who We Are</div>
                            <h2 className="secTitle">SGT Solutions for You Business</h2>
                            <p>Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy.</p>
                            <ul className="listItem">
                                <li><i className="twi-check-circle"></i>Innovative Approach Consultancy</li>
                                <li><i className="twi-check-circle"></i>Flexibile Involvement Consultancy</li>
                                <li><i className="twi-check-circle"></i>Personal Manager Consultancy</li>
                            </ul>
                            <Link className="berpo_btn with_icon04" to="/service1">
                                <span className="bp-shape"></span>
                                <span className="bp-shape"></span>
                                <span className="bp-shape"></span>
                                <span className="bp-shape"></span>
                                <span className="bp-text">Read More<i className="twi-arrow-right"></i></span>
                            </Link>
                        </div>
                        <div className="col-lg-7">
                            <div className="abpageThumb">
                                <img src="/assets/images/about/1.jpg" alt="" />
                                <div className="abInner">
                                    <img src="/assets/images/about/2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service_section_09">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <div className="subTitle">Our Services</div>
                            <h2 className="secTitle">Focus on Your Business</h2>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((service) => (
                            <div className="col-lg-4 col-md-6" key={service.id}>
                                <div className="service_item_10">
                                    <div className="ibMeta">
                                        <img src="/assets/images/service/4.jpg" alt="" />
                                    </div>
                                    <h3><Link to={service.link}>{service.title}</Link></h3>
                                    <p>{service.description}</p>
                                    <Link className="srm" to={service.link}>
                                        <i className="twi-arrow-right1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="abvideoSection videoSection01">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="subTitle">We Have added a new exciting feature in v2.0</div>
                            <h2 className="secTitle">Organizations Realize the Benefits <br /> Forming Work Teams.</h2>
                            <a href="https://player.vimeo.com/video/213907368?h=3685456d6c" className="popup_video vbtn02">
                                <i className="bpro-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="abFa1Section">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="fqArea">
                                <div className="subTitle">Just a Consultancy</div>
                                <h2 className="secTitle">Bepro FAQ</h2>
                                <div className="accordion bepAccordion" id="befAccordion01">
                                    {faqs.map((faq, index) => (
                                        <div className={`card ${activeFaq === faq.id ? 'activeBg' : ''}`} key={faq.id}>
                                            <div className="faqInner">
                                                <div className="card-header" id={`ma_ac_${index + 1}`}>
                                                    <h2 className="mb-0">
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleFaq(faq.id)}
                                                            className={activeFaq === faq.id ? '' : 'collapsed'}
                                                            aria-expanded={activeFaq === faq.id}
                                                        >
                                                            <i>{index + 1}.</i> {faq.question}
                                                            <span></span>
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    id={faq.id}
                                                    className={`collapse ${activeFaq === faq.id ? 'show' : ''}`}
                                                    aria-labelledby={`ma_ac_${index + 1}`}
                                                    data-parent="#befAccordion01"
                                                >
                                                    <div className="card-body">{faq.answer}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faqThumb">
                                <div className="withborder"></div>
                                <img src="/assets/images/about/3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="teamSection01 abtmPad">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="subTitle">Our Members</div>
                            <h2 className="secTitle">Meet Our Latest <br /> Team Member</h2>
                        </div>
                    </div>
                    <div className="row">
                        {team.map((member) => (
                            <div className="col-lg-4 col-md-6" key={member.id}>
                                <div className="team_01 text-center">
                                    <div className="tm_thumb">
                                        <img src="/assets/images/team/1.jpg" alt={member.name} />
                                        <div className="tm_social">
                                            <a href="https://www.facebook.com/"><i className="twi-facebook-square"></i>Facebook</a>
                                            <a href="https://twitter.com/"><i className="twi-twitter"></i>Twitter</a>
                                            <a href="https://linkedin.com/"><i className="twi-youtube"></i>Youtube</a>
                                        </div>
                                    </div>
                                    <h3><Link to="/single-team">{member.name}</Link></h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="testimonialSection02 abTest01">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonialslider02 owl-carousel" ref={testimonialRef}>
                                {testimonials.map((testimonial) => (
                                    <div className="testiItem02" key={testimonial.id}>
                                        <div className="quote">
                                            <img src="/assets/images/home2/quote.jpg" alt="" />
                                        </div>
                                        <img src="/assets/images/home2/t1.jpg" alt="" />
                                        <p className="quotation">{testimonial.text}</p>
                                        <div className="ts_author">
                                            <h5>{testimonial.author}, <span>{testimonial.role}</span></h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clientSection03">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client-slider owl-carousel" ref={clientRef}>
                                {[1, 2, 3, 4].map((item, index) => (
                                    <a href="javascript:void(0);" key={index}>
                                        <img src={`/assets/images/client-logo/${9 + index}.png`} alt="" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;