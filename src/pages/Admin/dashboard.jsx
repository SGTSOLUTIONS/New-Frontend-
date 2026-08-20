// src/pages/Admin/Dashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {

  // =========================================================
  // 1. KPI CARDS
  // =========================================================

  const kpiCards = [
    {
      title: 'Total Projects',
      value: '24',
      change: '+12%',
      description: 'from last month',
      icon: 'fas fa-folder-open',
      iconBg: '#e8f1ff',
      iconColor: '#0d6efd',
      changeColor: '#198754',
    },
    {
      title: 'Active Projects',
      value: '18',
      change: '+8%',
      description: 'currently running',
      icon: 'fas fa-chart-line',
      iconBg: '#e8f8f0',
      iconColor: '#198754',
      changeColor: '#198754',
    },
    {
      title: 'Completed Projects',
      value: '6',
      change: '+15%',
      description: 'successfully completed',
      icon: 'fas fa-check-circle',
      iconBg: '#fff4e5',
      iconColor: '#f59e0b',
      changeColor: '#198754',
    },
    {
      title: 'Total Users',
      value: '86',
      change: '+8%',
      description: 'registered users',
      icon: 'fas fa-users',
      iconBg: '#f0eaff',
      iconColor: '#6f42c1',
      changeColor: '#198754',
    },
  ];


  // =========================================================
  // 2. PROJECT PROGRESS
  // =========================================================

  const projectProgress = [
    {
      name: 'SRIS - Pallipalayam',
      type: 'Revenue GIS',
      progress: 82,
    },
    {
      name: 'Property Tax Mapping',
      type: 'GIS Mapping',
      progress: 72,
    },
    {
      name: 'Drone Survey - Dharmapuri',
      type: 'Drone Survey',
      progress: 64,
    },
    {
      name: 'Property Mapping - Krishnagiri',
      type: 'Property Mapping',
      progress: 48,
    },
    {
      name: 'GIS Data Processing',
      type: 'Data Processing',
      progress: 35,
    },
  ];


  // =========================================================
  // 3. PROJECT STATUS DONUT
  // =========================================================

  const projectStatusData = {
    labels: [
      'Active',
      'Completed',
      'Pending',
      'On Hold',
    ],

    datasets: [
      {
        data: [14, 6, 3, 1],

        backgroundColor: [
          '#0d6efd',
          '#198754',
          '#f59e0b',
          '#6c757d',
        ],

        borderWidth: 0,

        hoverOffset: 5,
      },
    ],
  };


  const projectStatusOptions = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: '72%',

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return ` ${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };


  // =========================================================
  // 4. RECENT PROJECTS
  // =========================================================

  const recentProjects = [
    {
      name: 'SRIS - Pallipalayam',
      location: 'Pallipalayam',
      type: 'Revenue GIS',
      date: '20 Aug 2026',
      progress: 82,
      status: 'Active',
    },
    {
      name: 'Property Tax Mapping',
      location: 'Dharmapuri',
      type: 'GIS Mapping',
      date: '18 Aug 2026',
      progress: 72,
      status: 'Active',
    },
    {
      name: 'Drone Survey',
      location: 'Krishnagiri',
      type: 'Drone Survey',
      date: '15 Aug 2026',
      progress: 100,
      status: 'Completed',
    },
    {
      name: 'Property Mapping',
      location: 'Tiruchengode',
      type: 'Property Mapping',
      date: '12 Aug 2026',
      progress: 48,
      status: 'Pending',
    },
    {
      name: 'GIS Data Processing',
      location: 'Attur',
      type: 'Data Processing',
      date: '10 Aug 2026',
      progress: 35,
      status: 'Active',
    },
  ];


  // =========================================================
  // 5. PROJECT ACTIVITY / TIMELINE
  // =========================================================

  const projectActivities = [
    {
      date: '20 Aug 2026',
      time: '10:45 AM',
      title: 'Project Progress Updated',
      project: 'SRIS - Pallipalayam',
      description: 'Project progress updated from 76% to 82%.',
      icon: 'fas fa-chart-line',
      iconBg: '#e8f1ff',
      iconColor: '#0d6efd',
      status: 'Updated',
    },
    {
      date: '19 Aug 2026',
      time: '04:20 PM',
      title: 'GIS Data Uploaded',
      project: 'SRIS - Pallipalayam',
      description: '2,450 property records were uploaded for GIS processing.',
      icon: 'fas fa-cloud-upload-alt',
      iconBg: '#e8f8f0',
      iconColor: '#198754',
      status: 'Completed',
    },
    {
      date: '18 Aug 2026',
      time: '03:15 PM',
      title: 'Survey Completed',
      project: 'Property Tax Mapping',
      description: 'Ward 12 field survey was completed successfully.',
      icon: 'fas fa-map-marked-alt',
      iconBg: '#fff4e5',
      iconColor: '#f59e0b',
      status: 'Completed',
    },
    {
      date: '17 Aug 2026',
      time: '11:30 AM',
      title: 'Property Mapping Updated',
      project: 'Property Tax Mapping',
      description: 'New property boundaries and assessment information were updated.',
      icon: 'fas fa-home',
      iconBg: '#f0eaff',
      iconColor: '#6f42c1',
      status: 'Updated',
    },
    {
      date: '15 Aug 2026',
      time: '05:10 PM',
      title: 'Drone Survey Completed',
      project: 'Drone Survey',
      description: 'Drone imagery collection and initial processing were completed.',
      icon: 'fas fa-drone',
      iconBg: '#e8f1ff',
      iconColor: '#0d6efd',
      status: 'Completed',
    },
    {
      date: '12 Aug 2026',
      time: '02:40 PM',
      title: 'Project Created',
      project: 'Property Mapping',
      description: 'New property mapping project was created for Tiruchengode.',
      icon: 'fas fa-folder-plus',
      iconBg: '#e8f8f0',
      iconColor: '#198754',
      status: 'Created',
    },
    {
      date: '10 Aug 2026',
      time: '10:15 AM',
      title: 'GIS Data Processing Started',
      project: 'GIS Data Processing',
      description: 'GIS processing workflow was started for the latest survey data.',
      icon: 'fas fa-cogs',
      iconBg: '#fff4e5',
      iconColor: '#f59e0b',
      status: 'Started',
    },
  ];


  // =========================================================
  // STATUS STYLE
  // =========================================================

  const getStatusStyle = (status) => {

    if (status === 'Active') {
      return {
        backgroundColor: '#e8f8f0',
        color: '#198754',
        dotColor: '#198754',
      };
    }

    if (status === 'Completed') {
      return {
        backgroundColor: '#e8f1ff',
        color: '#0d6efd',
        dotColor: '#0d6efd',
      };
    }

    if (status === 'Pending') {
      return {
        backgroundColor: '#fff4e5',
        color: '#f59e0b',
        dotColor: '#f59e0b',
      };
    }

    return {
      backgroundColor: '#f1f3f5',
      color: '#6c757d',
      dotColor: '#6c757d',
    };
  };


  // =========================================================
  // 5. GIS STATISTICS
  // =========================================================

  const gisStatistics = [
    {
      title: 'Properties Mapped',
      value: '1,24,560',
      description: '+12.5% mapped this month',
      icon: 'fas fa-home',
      iconBg: '#e8f1ff',
      iconColor: '#0d6efd',
      background: '#f8fbff',
      border: '#edf3fb',
    },
    {
      title: 'Buildings Identified',
      value: '98,420',
      description: '+8.4% identified this month',
      icon: 'fas fa-building',
      iconBg: '#e8f8f0',
      iconColor: '#198754',
      background: '#f8fcfa',
      border: '#edf6f1',
    },
    {
      title: 'Roads Digitized',
      value: '2,845 km',
      description: '+5.8% digitized this month',
      icon: 'fas fa-road',
      iconBg: '#fff4e5',
      iconColor: '#f59e0b',
      background: '#fffaf2',
      border: '#f9f0df',
    },
    {
      title: 'Survey Area',
      value: '245.6 Sq.Km',
      description: '+15.2% area surveyed',
      icon: 'fas fa-map',
      iconBg: '#f0eaff',
      iconColor: '#6f42c1',
      background: '#faf8ff',
      border: '#f0ebfa',
    },
  ];


  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="dashboard-page">


      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h4 className="mb-0">
          Dashboard
        </h4>

        <div>

          <button className="btn btn-sm btn-outline-primary me-2">
            <i className="fas fa-download me-1"></i>
            Export
          </button>

          <button className="btn btn-sm btn-primary">
            <i className="fas fa-plus me-1"></i>
            Add New
          </button>

        </div>

      </div>


      {/* =====================================================
          1. KPI CARDS
      ===================================================== */}

      <div className="row g-4">

        {kpiCards.map((card, index) => (

          <div
            className="col-xl-3 col-lg-6 col-md-6"
            key={index}
          >

            <div
              className="card border-0 h-100"
              style={{
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
              }}
            >

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-start">

                  <div>

                    <p
                      className="mb-2"
                      style={{
                        fontSize: '14px',
                        color: '#6c757d',
                        fontWeight: '500',
                      }}
                    >
                      {card.title}
                    </p>

                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#212529',
                      }}
                    >
                      {card.value}
                    </h3>

                  </div>

                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      backgroundColor: card.iconBg,
                      color: card.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    <i className={card.icon}></i>
                  </div>

                </div>


                <div className="d-flex align-items-center mt-2">

                  <span
                    style={{
                      color: card.changeColor,
                      fontSize: '13px',
                      fontWeight: '600',
                    }}
                  >
                    <i className="fas fa-arrow-up me-1"></i>
                    {card.change}
                  </span>

                  <span
                    className="ms-2"
                    style={{
                      color: '#8a8f98',
                      fontSize: '12px',
                    }}
                  >
                    {card.description}
                  </span>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          2. PROJECT PROGRESS
      ===================================================== */}

      <div className="row g-4 mt-1">

        <div className="col-12">

          <div
            className="card border-0"
            style={{
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius: '12px 12px 0 0',
              }}
            >

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h5
                    className="mb-1"
                    style={{
                      fontSize: '17px',
                      fontWeight: '600',
                      color: '#212529',
                    }}
                  >
                    Project Progress
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: '12px',
                      color: '#8a8f98',
                    }}
                  >
                    Current progress of ongoing projects
                  </p>

                </div>

                <button
                  className="btn btn-sm btn-outline-primary"
                  style={{
                    fontSize: '12px',
                  }}
                >
                  View All
                </button>

              </div>

            </div>


            <div className="card-body px-4 pb-4">

              {projectProgress.map((project, index) => (

                <div
                  key={index}
                  className={
                    index !== projectProgress.length - 1
                      ? 'mb-4'
                      : ''
                  }
                >

                  <div className="d-flex justify-content-between align-items-center mb-2">

                    <div>

                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#343a40',
                        }}
                      >
                        {project.name}
                      </div>

                      <div
                        style={{
                          fontSize: '11px',
                          color: '#8a8f98',
                          marginTop: '2px',
                        }}
                      >
                        {project.type}
                      </div>

                    </div>

                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#0d6efd',
                      }}
                    >
                      {project.progress}%
                    </span>

                  </div>


                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: '#edf1f5',
                      borderRadius: '10px',
                      overflow: 'hidden',
                    }}
                  >

                    <div
                      style={{
                        width: `${project.progress}%`,
                        height: '100%',
                        backgroundColor: '#0d6efd',
                        borderRadius: '10px',
                        transition: 'width 0.5s ease',
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          3. PROJECT STATUS DONUT
      ===================================================== */}

      <div className="row g-4 mt-1">

        <div className="col-xl-6 col-lg-12">

          <div
            className="card border-0 h-100"
            style={{
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius: '12px 12px 0 0',
              }}
            >

              <h5
                className="mb-1"
                style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#212529',
                }}
              >
                Project Status
              </h5>

              <p
                className="mb-0"
                style={{
                  fontSize: '12px',
                  color: '#8a8f98',
                }}
              >
                Overall project status overview
              </p>

            </div>


            <div className="card-body">

              <div className="row align-items-center">

                <div className="col-md-6">

                  <div
                    style={{
                      height: '240px',
                      position: 'relative',
                    }}
                  >

                    <Doughnut
                      data={projectStatusData}
                      options={projectStatusOptions}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        pointerEvents: 'none',
                      }}
                    >

                      <div
                        style={{
                          fontSize: '28px',
                          fontWeight: '700',
                          color: '#212529',
                        }}
                      >
                        24
                      </div>

                      <div
                        style={{
                          fontSize: '11px',
                          color: '#8a8f98',
                        }}
                      >
                        Total Projects
                      </div>

                    </div>

                  </div>

                </div>


                <div className="col-md-6">

                  <div>

                    {[
                      {
                        label: 'Active',
                        value: 14,
                        color: '#0d6efd',
                      },
                      {
                        label: 'Completed',
                        value: 6,
                        color: '#198754',
                      },
                      {
                        label: 'Pending',
                        value: 3,
                        color: '#f59e0b',
                      },
                      {
                        label: 'On Hold',
                        value: 1,
                        color: '#6c757d',
                      },
                    ].map((item, index) => (

                      <div
                        className={
                          index < 3
                            ? 'd-flex align-items-center mb-3'
                            : 'd-flex align-items-center'
                        }
                        key={index}
                      >

                        <span
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: item.color,
                            display: 'inline-block',
                            marginRight: '10px',
                          }}
                        ></span>

                        <div className="flex-grow-1">

                          <div
                            style={{
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#343a40',
                            }}
                          >
                            {item.label}
                          </div>

                        </div>

                        <strong
                          style={{
                            fontSize: '14px',
                          }}
                        >
                          {item.value}
                        </strong>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          4. RECENT PROJECTS TABLE
      ===================================================== */}

      <div className="row g-4 mt-1">

        <div className="col-12">

          <div
            className="card border-0"
            style={{
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-3"
              style={{
                borderRadius: '12px 12px 0 0',
              }}
            >

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h5
                    className="mb-1"
                    style={{
                      fontSize: '17px',
                      fontWeight: '600',
                      color: '#212529',
                    }}
                  >
                    Recent Projects
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: '12px',
                      color: '#8a8f98',
                    }}
                  >
                    Recently created and updated projects
                  </p>

                </div>

                <Link
                  to="/admin/projects"
                  className="btn btn-sm btn-outline-primary"
                  style={{
                    fontSize: '12px',
                  }}
                >
                  View All
                </Link>

              </div>

            </div>


            <div className="card-body p-0">

              <div className="table-responsive">

                <table
                  className="table align-middle mb-0"
                  style={{
                    minWidth: '900px',
                  }}
                >

                  <thead>

                    <tr
                      style={{
                        backgroundColor: '#f8f9fa',
                      }}
                    >

                      <th
                        className="px-4 py-3"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6c757d',
                          borderBottom: '1px solid #edf0f2',
                        }}
                      >
                        PROJECT
                      </th>

                      <th
                        className="py-3"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6c757d',
                          borderBottom: '1px solid #edf0f2',
                        }}
                      >
                        LOCATION
                      </th>

                      <th
                        className="py-3"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6c757d',
                          borderBottom: '1px solid #edf0f2',
                        }}
                      >
                        TYPE
                      </th>

                      <th
                        className="py-3"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6c757d',
                          borderBottom: '1px solid #edf0f2',
                        }}
                      >
                        START DATE
                      </th>

                      <th
                        className="py-3"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6c757d',
                          borderBottom: '1px solid #edf0f2',
                        }}
                      >
                        PROGRESS
                      </th>

                      <th
                        className="py-3"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6c757d',
                          borderBottom: '1px solid #edf0f2',
                        }}
                      >
                        STATUS
                      </th>

                      <th
                        className="py-3 pe-4"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6c757d',
                          borderBottom: '1px solid #edf0f2',
                        }}
                      >
                        ACTION
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {recentProjects.map((project, index) => {

                      const statusStyle =
                        getStatusStyle(project.status);

                      return (

                        <tr key={index}>

                          {/* PROJECT */}

                          <td
                            className="px-4 py-3"
                            style={{
                              borderBottom:
                                index !== recentProjects.length - 1
                                  ? '1px solid #f1f3f5'
                                  : 'none',
                            }}
                          >

                            <div className="d-flex align-items-center">

                              <div
                                style={{
                                  width: '38px',
                                  height: '38px',
                                  borderRadius: '9px',
                                  backgroundColor: '#e8f1ff',
                                  color: '#0d6efd',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginRight: '12px',
                                  flexShrink: 0,
                                }}
                              >
                                <i className="fas fa-folder"></i>
                              </div>

                              <div>

                                <div
                                  style={{
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: '#343a40',
                                  }}
                                >
                                  {project.name}
                                </div>

                                <div
                                  style={{
                                    fontSize: '11px',
                                    color: '#8a8f98',
                                    marginTop: '2px',
                                  }}
                                >
                                  Project #{1001 + index}
                                </div>

                              </div>

                            </div>

                          </td>


                          {/* LOCATION */}

                          <td
                            style={{
                              fontSize: '13px',
                              color: '#495057',
                              borderBottom:
                                index !== recentProjects.length - 1
                                  ? '1px solid #f1f3f5'
                                  : 'none',
                            }}
                          >

                            <i
                              className="fas fa-map-marker-alt me-2"
                              style={{
                                color: '#6c757d',
                              }}
                            ></i>

                            {project.location}

                          </td>


                          {/* TYPE */}

                          <td
                            style={{
                              borderBottom:
                                index !== recentProjects.length - 1
                                  ? '1px solid #f1f3f5'
                                  : 'none',
                            }}
                          >

                            <span
                              style={{
                                fontSize: '12px',
                                color: '#495057',
                                backgroundColor: '#f5f6f8',
                                padding: '5px 9px',
                                borderRadius: '6px',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {project.type}
                            </span>

                          </td>


                          {/* DATE */}

                          <td
                            style={{
                              fontSize: '12px',
                              color: '#6c757d',
                              borderBottom:
                                index !== recentProjects.length - 1
                                  ? '1px solid #f1f3f5'
                                  : 'none',
                            }}
                          >
                            {project.date}
                          </td>


                          {/* PROGRESS */}

                          <td
                            style={{
                              minWidth: '150px',
                              borderBottom:
                                index !== recentProjects.length - 1
                                  ? '1px solid #f1f3f5'
                                  : 'none',
                            }}
                          >

                            <div className="d-flex align-items-center">

                              <div
                                style={{
                                  width: '100px',
                                  height: '6px',
                                  backgroundColor: '#edf1f5',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  marginRight: '8px',
                                }}
                              >

                                <div
                                  style={{
                                    width: `${project.progress}%`,
                                    height: '100%',
                                    backgroundColor:
                                      project.progress === 100
                                        ? '#198754'
                                        : '#0d6efd',
                                    borderRadius: '10px',
                                  }}
                                ></div>

                              </div>

                              <span
                                style={{
                                  fontSize: '11px',
                                  fontWeight: '600',
                                  color: '#495057',
                                }}
                              >
                                {project.progress}%
                              </span>

                            </div>

                          </td>


                          {/* STATUS */}

                          <td
                            style={{
                              borderBottom:
                                index !== recentProjects.length - 1
                                  ? '1px solid #f1f3f5'
                                  : 'none',
                            }}
                          >

                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '5px 10px',
                                borderRadius: '20px',
                                fontSize: '11px',
                                fontWeight: '600',
                                backgroundColor:
                                  statusStyle.backgroundColor,
                                color:
                                  statusStyle.color,
                                whiteSpace: 'nowrap',
                              }}
                            >

                              <span
                                style={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  backgroundColor:
                                    statusStyle.dotColor,
                                  marginRight: '6px',
                                }}
                              ></span>

                              {project.status}

                            </span>

                          </td>


                          {/* ACTION */}

                          <td
                            className="pe-4"
                            style={{
                              borderBottom:
                                index !== recentProjects.length - 1
                                  ? '1px solid #f1f3f5'
                                  : 'none',
                            }}
                          >

                            <Link
                              to={`/admin/projects/${1001 + index}`}
                              className="btn btn-sm btn-light"
                              title="View Project"
                              style={{
                                width: '32px',
                                height: '32px',
                                padding: '0',
                                borderRadius: '7px',
                                color: '#0d6efd',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >

                              <i className="fas fa-eye"></i>

                            </Link>

                          </td>

                        </tr>

                      );

                    })}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          5. PROJECT ACTIVITY / TIMELINE
      ===================================================== */}

      <div className="row g-4 mt-1">

        <div className="col-12">

          <div
            className="card border-0"
            style={{
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius: '12px 12px 0 0',
              }}
            >

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h5
                    className="mb-1"
                    style={{
                      fontSize: '17px',
                      fontWeight: '600',
                      color: '#212529',
                    }}
                  >
                    Project Activity
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: '12px',
                      color: '#8a8f98',
                    }}
                  >
                    Latest project activities and updates
                  </p>

                </div>

                <button
                  className="btn btn-sm btn-outline-primary"
                  style={{
                    fontSize: '12px',
                  }}
                >
                  <i className="fas fa-history me-1"></i>
                  View All
                </button>

              </div>

            </div>

            <div className="card-body px-4 pb-4">

              <div
                style={{
                  position: 'relative',
                  paddingLeft: '4px',
                }}
              >

                {/* Timeline vertical line */}
                <div
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: '10px',
                    bottom: '10px',
                    width: '2px',
                    backgroundColor: '#e9ecef',
                  }}
                ></div>

                {projectActivities.map((activity, index) => (

                  <div
                    key={index}
                    className="d-flex position-relative"
                    style={{
                      paddingBottom:
                        index !== projectActivities.length - 1
                          ? '24px'
                          : '0',
                    }}
                  >

                    {/* Timeline icon */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: activity.iconBg,
                        color: activity.iconColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '15px',
                        flexShrink: 0,
                        zIndex: 1,
                        border: '3px solid #fff',
                        boxShadow: '0 0 0 1px #edf0f2',
                      }}
                    >
                      <i className={activity.icon}></i>
                    </div>

                    {/* Timeline content */}
                    <div
                      className="flex-grow-1"
                      style={{
                        paddingLeft: '16px',
                        paddingTop: '1px',
                      }}
                    >

                      <div
                        className="d-flex justify-content-between align-items-start flex-wrap"
                        style={{
                          gap: '8px',
                        }}
                      >

                        <div>

                          <div
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#343a40',
                            }}
                          >
                            {activity.title}
                          </div>

                          <div
                            style={{
                              fontSize: '12px',
                              fontWeight: '500',
                              color: '#0d6efd',
                              marginTop: '3px',
                            }}
                          >
                            {activity.project}
                          </div>

                        </div>

                        <div
                          className="d-flex align-items-center"
                          style={{
                            gap: '8px',
                          }}
                        >

                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: '600',
                              color: '#495057',
                              backgroundColor: '#f5f6f8',
                              padding: '4px 8px',
                              borderRadius: '5px',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {activity.status}
                          </span>

                          <span
                            style={{
                              fontSize: '11px',
                              color: '#8a8f98',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {activity.time}
                          </span>

                        </div>

                      </div>

                      <div
                        style={{
                          fontSize: '12px',
                          color: '#6c757d',
                          marginTop: '6px',
                          lineHeight: '1.5',
                        }}
                      >
                        {activity.description}
                      </div>

                      <div
                        style={{
                          fontSize: '11px',
                          color: '#adb5bd',
                          marginTop: '5px',
                        }}
                      >
                        <i className="far fa-calendar-alt me-1"></i>
                        {activity.date}
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          6. GIS STATISTICS
      ===================================================== */}

      <div className="row g-4 mt-1">

        <div className="col-12">

          <div
            className="card border-0"
            style={{
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            {/* GIS Statistics Header */}

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius: '12px 12px 0 0',
              }}
            >

              <h5
                className="mb-1"
                style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#212529',
                }}
              >
                GIS Statistics
              </h5>

              <p
                className="mb-0"
                style={{
                  fontSize: '12px',
                  color: '#8a8f98',
                }}
              >
                Overview of GIS mapping and survey data
              </p>

            </div>


            {/* GIS Statistics Body */}

            <div className="card-body px-4 pb-4">

              <div className="row g-4">

                {gisStatistics.map((stat, index) => (

                  <div
                    className="col-xl-3 col-lg-6 col-md-6"
                    key={index}
                  >

                    <div
                      style={{
                        padding: '20px',
                        borderRadius: '10px',
                        backgroundColor: stat.background,
                        border: `1px solid ${stat.border}`,
                        height: '100%',
                      }}
                    >

                      {/* Icon + Value */}

                      <div className="d-flex align-items-center">

                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '10px',
                            backgroundColor: stat.iconBg,
                            color: stat.iconColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            marginRight: '14px',
                            flexShrink: 0,
                          }}
                        >
                          <i className={stat.icon}></i>
                        </div>


                        <div>

                          <div
                            style={{
                              fontSize: '12px',
                              color: '#8a8f98',
                              marginBottom: '4px',
                            }}
                          >
                            {stat.title}
                          </div>

                          <div
                            style={{
                              fontSize: '23px',
                              fontWeight: '700',
                              color: '#212529',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {stat.value}
                          </div>

                        </div>

                      </div>


                      {/* Description */}

                      <div
                        style={{
                          marginTop: '14px',
                          fontSize: '11px',
                          color: '#198754',
                          fontWeight: '600',
                        }}
                      >

                        <i className="fas fa-arrow-up me-1"></i>

                        {stat.description}

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>


    </div>
  );
};

export default Dashboard;