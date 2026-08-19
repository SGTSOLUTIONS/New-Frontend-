import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg/banner.jpg'

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
            <style>{`
                /* About Page Responsive Styles */
                .aboutPageSection01 .row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .aboutPageSection01 .col-lg-5,
                .aboutPageSection01 .col-lg-7 {
                    flex: 0 0 100%;
                    max-width: 100%;
                }

                @media (min-width: 992px) {
                    .aboutPageSection01 .col-lg-5 {
                        flex: 0 0 41.666667%;
                        max-width: 41.666667%;
                    }
                    .aboutPageSection01 .col-lg-7 {
                        flex: 0 0 58.333333%;
                        max-width: 58.333333%;
                    }
                }

                .abpageThumb img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                }

                .service_section_09 .row {
                    display: flex;
                    flex-wrap: wrap;
                }

                .service_section_09 .col-lg-4 {
                    flex: 0 0 100%;
                    max-width: 100%;
                }

                @media (min-width: 768px) {
                    .service_section_09 .col-md-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }

                @media (min-width: 992px) {
                    .service_section_09 .col-lg-4 {
                        flex: 0 0 33.333333%;
                        max-width: 33.333333%;
                    }
                }

                .service_item_10 {
                    padding: 20px;
                    margin-bottom: 30px;
                    border-radius: 10px;
                    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    background: #fff;
                }

                .service_item_10:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
                }

                .service_item_10 .ibMeta img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 8px;
                }

                @media (max-width: 576px) {
                    .service_item_10 .ibMeta img {
                        height: 160px;
                    }
                }

                .service_item_10 h3 {
                    font-size: 20px;
                    margin: 15px 0 10px;
                }

                .service_item_10 h3 a {
                    color: #0a1922;
                    text-decoration: none;
                }

                .service_item_10 h3 a:hover {
                    color: #bb0b0b;
                }

                .service_item_10 p {
                    color: #666;
                    font-size: 14px;
                    line-height: 1.7;
                }

                .service_item_10 .srm {
                    display: inline-block;
                    margin-top: 10px;
                    color: #bb0b0b;
                    font-size: 20px;
                    transition: all 0.3s ease;
                }

                .service_item_10 .srm:hover {
                    transform: translateX(5px);
                }

                .abvideoSection {
                    padding: 60px 0;
                    background: #f8f9fa;
                }

                @media (max-width: 768px) {
                    .abvideoSection {
                        padding: 40px 0;
                    }
                    .abvideoSection .secTitle {
                        font-size: 22px !important;
                        line-height: 1.3 !important;
                    }
                }

                .vbtn02 {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    background: #bb0b0b;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 30px;
                    transition: all 0.3s ease;
                    margin-top: 20px;
                }

                .vbtn02:hover {
                    transform: scale(1.1);
                    background: #9e0909;
                    color: #fff;
                }

                @media (max-width: 576px) {
                    .vbtn02 {
                        width: 60px;
                        height: 60px;
                        font-size: 22px;
                    }
                }

                .abFa1Section {
                    padding: 60px 0;
                }

                .abFa1Section .row {
                    display: flex;
                    flex-wrap: wrap;
                }

                .abFa1Section .col-lg-6 {
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-bottom: 30px;
                }

                @media (min-width: 992px) {
                    .abFa1Section .col-lg-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                        margin-bottom: 0;
                    }
                }

                .fqArea {
                    padding: 0 15px;
                }

                @media (max-width: 768px) {
                    .fqArea {
                        padding: 0;
                    }
                }

                .bepAccordion .card {
                    border: none;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }

                .bepAccordion .card.activeBg {
                    box-shadow: 0 2px 15px rgba(187, 11, 11, 0.1);
                }

                .bepAccordion .faqInner {
                    background: #fff;
                }

                .bepAccordion .card-header {
                    padding: 0;
                    background: #f8f9fa;
                    border: none;
                }

                .bepAccordion .card-header button {
                    width: 100%;
                    text-align: left;
                    padding: 15px 20px;
                    background: transparent;
                    border: none;
                    font-weight: 600;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                @media (max-width: 576px) {
                    .bepAccordion .card-header button {
                        font-size: 14px;
                        padding: 12px 15px;
                    }
                }

                .bepAccordion .card-header button i {
                    color: #bb0b0b;
                    font-weight: 700;
                    font-style: normal;
                }

                .bepAccordion .card-header button span {
                    margin-left: auto;
                    transition: all 0.3s ease;
                }

                .bepAccordion .card-header button span::after {
                    content: '+';
                    font-size: 20px;
                    color: #bb0b0b;
                }

                .bepAccordion .card-header button:not(.collapsed) span::after {
                    content: '−';
                }

                .bepAccordion .card-body {
                    padding: 20px;
                    color: #666;
                    line-height: 1.8;
                }

                @media (max-width: 576px) {
                    .bepAccordion .card-body {
                        padding: 15px;
                        font-size: 14px;
                    }
                }

                .teamSection01.abtmPad {
                    padding: 60px 0;
                }

                .teamSection01 .row {
                    display: flex;
                    flex-wrap: wrap;
                }

                .teamSection01 .col-lg-4 {
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-bottom: 30px;
                }

                @media (min-width: 768px) {
                    .teamSection01 .col-md-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }

                @media (min-width: 992px) {
                    .teamSection01 .col-lg-4 {
                        flex: 0 0 33.333333%;
                        max-width: 33.333333%;
                    }
                }

                .team_01 {
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }

                .team_01:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
                }

                .team_01 .tm_thumb {
                    position: relative;
                    overflow: hidden;
                    border-radius: 10px;
                }

                .team_01 .tm_thumb img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                @media (max-width: 576px) {
                    .team_01 .tm_thumb img {
                        height: 220px;
                    }
                }

                .team_01 .tm_social {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0,0,0,0.7);
                    padding: 12px;
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    transform: translateY(100%);
                    transition: all 0.3s ease;
                }

                .team_01:hover .tm_social {
                    transform: translateY(0);
                }

                .team_01 .tm_social a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .team_01 .tm_social a:hover {
                    color: #bb0b0b;
                }

                @media (max-width: 576px) {
                    .team_01 .tm_social a {
                        font-size: 12px;
                    }
                    .team_01 .tm_social a i {
                        font-size: 14px;
                    }
                }

                .team_01 h3 {
                    font-size: 18px;
                    margin: 15px 0 5px;
                }

                .team_01 h3 a {
                    color: #0a1922;
                    text-decoration: none;
                }

                .team_01 h3 a:hover {
                    color: #bb0b0b;
                }

                .team_01 p {
                    color: #999;
                    font-size: 14px;
                }

                .testimonialSection02.abTest01 {
                    padding: 60px 0;
                    background: #f8f9fa;
                }

                .testiItem02 {
                    background: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
                }

                @media (max-width: 576px) {
                    .testiItem02 {
                        padding: 20px;
                    }
                }

                .testiItem02 .quote img {
                    width: 60px;
                    height: auto;
                    margin: 0 auto 15px;
                }

                .testiItem02 .quotation {
                    font-size: 16px;
                    color: #555;
                    line-height: 1.8;
                    font-style: italic;
                    max-width: 800px;
                    margin: 0 auto 20px;
                }

                @media (max-width: 576px) {
                    .testiItem02 .quotation {
                        font-size: 14px;
                    }
                }

                .testiItem02 .ts_author h5 {
                    font-size: 18px;
                    color: #0a1922;
                    margin: 0;
                }

                .testiItem02 .ts_author h5 span {
                    color: #999;
                    font-weight: 400;
                }

                @media (max-width: 576px) {
                    .testiItem02 .ts_author h5 {
                        font-size: 16px;
                    }
                }

                .clientSection03 {
                    padding: 50px 0;
                }

                .client-slider .owl-stage {
                    display: flex;
                    align-items: center;
                }

                .client-slider a {
                    display: block;
                    text-align: center;
                }

                .client-slider img {
                    max-height: 80px;
                    width: auto;
                    margin: 0 auto;
                    opacity: 0.6;
                    transition: all 0.3s ease;
                    filter: grayscale(0.5);
                }

                .client-slider img:hover {
                    opacity: 1;
                    filter: grayscale(0);
                }

                @media (max-width: 576px) {
                    .client-slider img {
                        max-height: 50px;
                    }
                }

                /* Page Banner Responsive */
                .page_banner {
                    min-height: 150px;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background-position: center top !important;
                    background-size: cover !important;
                }

                @media (max-width: 768px) {
                    .page_banner {
                        min-height: 280px !important;
                        background-size: cover !important;
                    }
                }

                @media (max-width: 576px) {
                    .page_banner {
                        min-height: 220px !important;
                    }
                }

                .page_banner .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.4);
                    z-index: 1;
                }

                .page_banner .container {
                    position: relative;
                    z-index: 2;
                }

                .page_banner .banner-title {
                    color: #fff;
                    font-size: 48px;
                    font-weight: 700;
                   
                }

                @media (max-width: 768px) {
                    .page_banner .banner-title {
                        font-size: 34px;
                    }
                }

                @media (max-width: 576px) {
                    .page_banner .banner-title {
                        font-size: 26px;
                    }
                }

                /* General responsive fixes */
                .container.largeContainer {
                    padding-left: 15px;
                    padding-right: 15px;
                }

                @media (min-width: 1200px) {
                    .container.largeContainer {
                        max-width: 1200px;
                    }
                }

                @media (min-width: 1400px) {
                    .container.largeContainer {
                        max-width: 1320px;
                    }
                }

                .secTitle {
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #0a1922;
                    margin-bottom: 12px;
                }

                @media (max-width: 768px) {
                    .secTitle {
                        font-size: 28px;
                    }
                }

                @media (max-width: 576px) {
                    .secTitle {
                        font-size: 22px;
                    }
                }

                .subTitle {
                    font-size: 16px;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    color: #bb0b0b;
                    font-weight: 600;
                    margin-bottom: 6px;
                }

                @media (max-width: 576px) {
                    .subTitle {
                        font-size: 12px;
                        letter-spacing: 1.5px;
                    }
                }

                .berpo_btn {
                    display: inline-block;
                    background: #bb0b0b;
                    color: #ffffff;
                    font-weight: 600;
                    padding: 12px 35px;
                    border-radius: 50px;
                    font-size: 15px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    text-decoration: none;
                }

                .berpo_btn:hover {
                    background: #9e0909;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
                    color: #fff;
                    text-decoration: none;
                }

                @media (max-width: 576px) {
                    .berpo_btn {
                        padding: 10px 25px;
                        font-size: 13px;
                    }
                }

                .listItem {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0 28px;
                }

                .listItem li {
                    padding: 8px 0;
                    font-size: 16px;
                    color: #4a4a62;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .listItem li i {
                    color: #bb0b0b;
                    font-size: 18px;
                }

                @media (max-width: 576px) {
                    .listItem li {
                        font-size: 14px;
                        padding: 6px 0;
                    }
                }

                .berpo_btn .bp-shape {
                    display: none;
                }

                .berpo_btn .bp-text {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .berpo_btn .bp-text i {
                    transition: all 0.3s ease;
                }

                .berpo_btn:hover .bp-text i {
                    transform: translateX(5px);
                }
            `}</style>

            <div className="overlay"></div>
            
            <section
            
                className="page_banner"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    minHeight: '250px',
                    margin:'top'
                }}
                
            >
                
                   <div className="col-md-12 text-center">
                            <h2 className="banner-title">About Us</h2>
                        </div>
                        
                    
                
            </section>
            <section className="aboutPageSection01" style={{ padding: '30px 16px 20px', background:'antiquewhite' }}>
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="subTitle">Who We Are</div>
                            <h2 className="secTitle">SGT Solutions for You Business</h2>
                            <p style={{ color: '#666', lineHeight: '1.8' }}>Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy.</p>
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
                                <span className="bp-text">Read More <i className="twi-arrow-right"></i></span>
                            </Link>
                        </div>
                        <div className="col-lg-7">
                            <div className="abpageThumb" style={{ marginTop: '30px' }}>
                                <img src="/assets/images/about/1.jpg" alt="" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service_section_09" style={{ padding: '60px 0', background: '#f8f9fa' }}>
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <div className="subTitle">Our Services</div>
                            <h2 className="secTitle">Focus on Your Business</h2>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '30px' }}>
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

            <section className="abvideoSection videoSection01" style={{ padding: '60px 0', background: '#f0f1f5' }}>
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

            <section className="abFa1Section" style={{ padding: '60px 0' }}>
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
                    </div>
                </div>
            </section>

            <section className="teamSection01 abtmPad" style={{ padding: '60px 0' }}>
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="subTitle">Our Members</div>
                            <h2 className="secTitle">Meet Our Latest <br /> Team Member</h2>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '30px' }}>
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

            <section className="testimonialSection02 abTest01" style={{ padding: '60px 0', background: '#f8f9fa' }}>
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonialslider02 owl-carousel" ref={testimonialRef}>
                                {testimonials.map((testimonial) => (
                                    <div className="testiItem02" key={testimonial.id}>
                                        <div className="quote">
                                            <img src="/assets/images/home2/quote.jpg" alt="" />
                                        </div>
                                        <img src="/assets/images/home2/t1.jpg" alt="" style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 15px', objectFit: 'cover' }} />
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

            <section className="clientSection03" style={{ padding: '50px 0' }}>
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