import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg/banner.jpg';
import intelligentInsights from '../assets/images/about/intelligent-insights.png';
import smarterDecisions from '../assets/images/about/smarter-decisions.png';
import betterFuture from '../assets/images/about/better-future.png';


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
        title: 'Intelligent Insights',
        description:
            'Turn complex geographic data into meaningful insights using GIS, remote sensing, and AI-powered spatial analytics.',
        image: intelligentInsights,
        link: '/about',
    },
    {
        id: 2,
        title: 'Smarter Decisions',
        description:
            'Empower governments and organizations with location-based intelligence for better planning, efficient resource management, and informed decisions.',
        image: smarterDecisions,
        link: '/about',
    },
    {
        id: 3,
        title: 'A Better Future',
        description:
            'Build smarter cities and resilient communities through intelligent mapping, natural resource monitoring, and sustainable land and water management.',
        image: betterFuture,
        link: '/about',
    },
];

    const team = [
        { id: 1, name: 'Mugesh Raja.S', role: 'Web Developer' },
        { id: 2, name: 'Nithish.J', role: 'Web Developer' },
        { id: 3, name: 'Gowsika.M', role: 'GIS Analyst' },
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
            id: 'ma_collapes_03',
            question: 'AI-driven insight',  
            answer: 'Automated detection, change monitoring and prediction that save time and reveal what manual review misses',
        },  
        {
            id: 'ma_collapes_04',
            question: 'Local expertise',  
            answer: '• A Chennai-based team that understands the ground realities of Indian cities and infrastructure.',
        },  
    ];
     const faqsd = [
        {
            id: 'ma_collapes_01',
            question: 'End-to-end delivery',
            answer: ' From data capture (drone, LiDAR, satellite) to AI analysis and live dashboards, all under one roof',
        },
        {
            id: 'ma_collapes_02',
            question: 'Built for governance',
            answer: 'Solutions designed around the real workflows of municipalities and government departments',
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
                    padding: 30px;
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

                .service_item_10 .ibMeta {
                   width: 100%;
                   height: 120px;
                   display: flex;
                   align-items: center;
                   justify-content: flex-start;
                   margin-bottom: 0;
                   overflow: hidden;
                }

                .service_item_10 .ibMeta img {
                   display: block;
                   width: 180px;
                   height: 120px;
                   object-fit: contain;
                   object-position: left center;
                   margin: 0;
                   padding: 0;
                   border-radius: 8px;
                }

                .service_item_10 h3 {
                   font-size: 20px;
                   line-height: 1.4;
                   margin: 20px 0 12px !important;
                   padding: 0;
                   clear: both;
                }

                .service_item_10 h3 a {
                  display: inline-block;
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
                    margin-top: 0;
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
                    box-shadow: 0 2px 1px rgba(187, 11, 11, 0.1);
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

                /* OUR MEMBERS: simple cards matching Our Experts; no photos/social links */
                .simple-members-section {
                    padding: 60px 0 !important;
                    background: #f8f9fa;
                }

                .simple-members-section .members-heading {
                    text-align: center;
                    margin-bottom: 35px;
                }

                .simple-members-section .members-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 22px;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .simple-members-section .member-card {
                    min-width: 0;
                    box-sizing: border-box;
                    padding: 25px 18px;
                    background: #ffffff;
                    border: 1px solid #e5e5e5;
                    border-top: 4px solid #bb0b0b;
                    border-radius: 12px;
                    text-align: center;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .simple-members-section .member-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
                }

                .simple-members-section .member-card h3 {
                    color: #111111;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0 0 8px;
                    overflow-wrap: anywhere;
                }

                .simple-members-section .member-card p {
                    color: #666666;
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                }

                @media (max-width: 700px) {
                    .simple-members-section {
                        padding: 45px 15px !important;
                    }
                    .simple-members-section .members-grid {
                        grid-template-columns: minmax(0, 400px);
                        justify-content: center;
                        gap: 15px;
                    }
                }

                @media (min-width: 701px) and (max-width: 900px) {
                    .simple-members-section .members-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 14px;
                    }
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
.bepAccordion .card.activeBg .card-header button {
    color: #0a1922 !important;
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
                
                /* OUR EXPERTS SECTION - SGT SOLUTIONS RED, BLACK & WHITE */
                .experts-section {
                    width: 100%;
                    padding: 65px 20px;
                    background: #998f91;
                    box-sizing: border-box;
                }

                .experts-container {
                    width: 100%;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .experts-heading {
                    text-align: center;
                    margin: 0 auto 35px;
                }

                .experts-heading .subTitle {
                    color: #bb0b0b;
                    text-align: center;
                }

                .experts-heading h2 {
                    color: #111111;
                    font-size: 34px;
                    font-weight: 700;
                    line-height: 1.25;
                    text-align: center;
                    margin: 10px 0 12px;
                }

                .experts-heading > p {
                    color: #555555;
                    text-align: center;
                    margin: 0;
                    line-height: 1.7;
                }

                .leadership-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 330px));
                    justify-content: center;
                    gap: 25px;
                    margin: 0 auto 25px;
                }

                .experts-section .expert-card {
                    min-width: 0;
                    box-sizing: border-box;
                    background: #ffffff;
                    border: 1px solid #e5e5e5;
                    border-top: 4px solid #bb0b0b;
                    border-radius: 12px;
                    padding: 25px;
                    text-align: left;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .experts-section .expert-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
                }

                .experts-section .expert-info h3 {
                    color: #111111;
                    font-size: 21px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0 0 8px;
                }

                .experts-section .expert-role {
                    color: #bb0b0b;
                    font-size: 15px;
                    font-weight: 600;
                    margin: 0 0 18px;
                }

                .experts-section .expert-badge {
                    display: inline-block;
                    padding: 7px 13px;
                    background: #bb0b0b;
                    color: #ffffff;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.4px;
                }

                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 20px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .experts-section .team-card {
                    border: 1px solid #e2e2e2;
                    border-bottom: 4px solid #bb0b0b;
                    border-radius: 10px;
                    padding: 25px 15px;
                    text-align: center;
                    background: #ffffff;
                    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.06);
                }

                .experts-section .team-card h3 {
                    color: #111111;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin: 0 0 8px;
                    overflow-wrap: anywhere;
                }

                .experts-section .team-card p {
                    color: #666666;
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                }

                .experts-footer {
                    text-align: center;
                    margin: 30px auto 0;
                    color: #555555;
                    font-size: 14px;
                    line-height: 1.8;
                }

                .experts-footer strong {
                    color: #bb0b0b;
                }

                /* Responsive layout for Our Experts */
                @media (max-width: 700px) {
                    .experts-section {
                        padding: 45px 15px;
                    }

                    .experts-heading h2 {
                        font-size: 28px;
                    }

                    .leadership-grid {
                        grid-template-columns: minmax(0, 400px);
                        gap: 16px;
                    }

                    .team-grid {
                        grid-template-columns: minmax(0, 400px);
                        justify-content: center;
                        gap: 15px;
                    }

                    .experts-section .expert-card {
                        width: 100%;
                        padding: 22px;
                    }
                }

                @media (min-width: 701px) and (max-width: 900px) {
                    .experts-container {
                        max-width: 760px;
                    }

                    .team-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 14px;
                    }

                    .experts-section .team-card {
                        padding: 22px 10px;
                    }
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
                            <h2 className="secTitle">Where Geospatial Intelligence Meets Artificial Intelligence</h2>
                            <p style={{ color: '#666', lineHeight: '1.8' }}>SGT Solutions is a Chennai-based geospatial technology company. We combine GIS, AI, remote sensing, drone surveys, LiDAR and spatial analytics to help governments and organisations understand their land, assets and revenue more clearly, and act on that understanding with confidence.
From uncovering revenue leakage in municipal tax systems to predicting flood risk, we turn complex spatial data into smarter maps, automated analysis, predictive insights and decision-ready dashboards.</p>
                            <ul className="listItem">
                                <li><i className="twi-check-circle"></i>Innovative Approach Consultancy</li>
                                <li><i className="twi-check-circle"></i>Flexibile Involvement Consultancy</li>
                                <li><i className="twi-check-circle"></i>Personal Manager Consultancy</li>
                            </ul>
                            
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
                            <div className="subTitle">Our Vision</div>
                            <h2 className="secTitle">To bridge the gap between data and decisions through intelligent technology.</h2>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '30px' }}>
                        {services.map((service) => (
                            <div className="col-lg-4 col-md-6" key={service.id}>
                                <div className="service_item_10">
                                   <div className="ibMeta">
                                    <img
                                      src={service.image}
                                      alt={service.title}
                                      loading="lazy"
                                      />
                                </div>
                                    <h3><Link to={service.link}>{service.title}</Link></h3>
                                    <p>{service.description}</p>
                                    
                                        
                                
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="experts-section">
              <div className="experts-container">

               <div className="experts-heading">
                <div className="subTitle">OUR TEAM</div>
                <h2>Our Experts</h2>
                <p>
                   Leadership driving innovation • Specialists delivering excellence
               </p>
            </div>

        <div className="leadership-grid">
            <div className="expert-card leadership-card">
                <div className="expert-info">
                    <h3>Dr. R. Saravani</h3>
                    <p className="expert-role">Founder &amp; CEO</p>
                    <span className="expert-badge">★ LEADERSHIP</span>
                </div>
            </div>

            <div className="expert-card leadership-card">
                <div className="expert-info">
                    <h3>Dr. S. Mahalingam</h3>
                    <p className="expert-role">Director</p>
                    <span className="expert-badge">◎ STRATEGY</span>
                </div>
            </div>
        </div>

        <div className="team-grid">
            <div className="expert-card team-card">
                <h3>M. Sheikh Dawood</h3>
                <p>Full Stack Developer</p>
            </div>

            <div className="expert-card team-card">
                <h3>S. Mohana</h3>
                <p>GIS Developer</p>
            </div>

            <div className="expert-card team-card">
                <h3>R. Gayathri</h3>
                <p>Web Developer</p>
            </div>

            <div className="expert-card team-card">
                <h3>A. Nirmala Devi</h3>
                <p>Admin</p>
            </div>
        </div>

        <p className="experts-footer">
            <strong>10+</strong> dedicated geospatial professionals
            <span> &amp; </span>
            <strong>50+</strong> live work surveyors
        </p>

    </div>
</section>

            
<section className="abFa1Section" style={{ padding: '60px 0' }}>
    <div className="container largeContainer">

        {/* Centered heading */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="subTitle">Just a Consultancy</div>
            <h2 className="secTitle">Bepro FAQ</h2>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <div className="fqArea">
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
                    <div className="accordion bepAccordion" id="befAccordion02">
                        {faqsd.map((faqa, index) => (
                            <div className={`card ${activeFaq === faqa.id ? 'activeBg' : ''}`} key={faqa.id}>
                                <div className="faqInner">
                                    <div className="card-header" id={`ma_ac_right_${index + 1}`}>
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                onClick={() => toggleFaq(faqa.id)}
                                                className={activeFaq === faqa.id ? '' : 'collapsed'}
                                                aria-expanded={activeFaq === faqa.id}
                                            >
                                                <i>{index + 1}.</i> {faqa.question}
                                                <span></span>
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id={faqa.id}
                                        className={`collapse ${activeFaq === faqa.id ? 'show' : ''}`}
                                        aria-labelledby={`ma_ac_right_${index + 1}`}
                                        data-parent="#befAccordion02"
                                    >
                                        <div className="card-body">{faqa.answer}</div>
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


            <section className="simple-members-section">
                <div className="container largeContainer">
                    <div className="members-heading">
                        <div className="subTitle">Our Members</div>
                        <h2 className="secTitle">Meet Our Latest Team Member</h2>
                    </div>
                    <div className="members-grid">
                        {team.map((member) => (
                            <div className="member-card" key={member.id}>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            
        </>
    );
};

export default About;