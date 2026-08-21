// src/pages/Admin/Dashboard.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

import { getProjects } from '../../features/projectSlice';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


const Dashboard = () => {

  // =========================================================
  // REDUX
  // =========================================================

  const dispatch = useDispatch();

  const {
    projects,
    loading,
    errors,
  } = useSelector((state) => state.project);


  // =========================================================
  // GET PROJECTS FROM DATABASE
  // =========================================================

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);


  // =========================================================
  // SAFE PROJECT ARRAY
  // =========================================================

  const projectList = Array.isArray(projects)
    ? projects
    : [];


  // =========================================================
  // SORT PROJECTS - LATEST FIRST
  // =========================================================

  const sortedProjects = [...projectList].sort((a, b) => {
    const dateA = new Date(a.created_at || 0);
    const dateB = new Date(b.created_at || 0);

    return dateB - dateA;
  });


  // =========================================================
  // PROJECT COUNTS
  // =========================================================

  const totalProjects = projectList.length;


  const activeProjects = projectList.filter(
    (project) =>
      project.status?.toLowerCase() === 'active'
  ).length;


  const completedProjects = projectList.filter(
    (project) =>
      project.status?.toLowerCase() === 'completed'
  ).length;


  const pendingProjects = projectList.filter(
    (project) =>
      project.status?.toLowerCase() === 'pending'
  ).length;


  const onHoldProjects = projectList.filter(
    (project) =>
      project.status?.toLowerCase() === 'on hold' ||
      project.status?.toLowerCase() === 'on_hold'
  ).length;


  // =========================================================
  // 1. KPI CARDS
  // =========================================================

  const kpiCards = [
    {
      title: 'Total Projects',
      value: totalProjects,
      change: '',
      description: 'total projects',
      icon: 'fas fa-folder-open',
      iconBg: '#e8f1ff',
      iconColor: '#0d6efd',
      changeColor: '#198754',
    },

    {
      title: 'Active Projects',
      value: activeProjects,
      change: '',
      description: 'currently running',
      icon: 'fas fa-chart-line',
      iconBg: '#e8f8f0',
      iconColor: '#198754',
      changeColor: '#198754',
    },

    {
      title: 'Completed Projects',
      value: completedProjects,
      change: '',
      description: 'successfully completed',
      icon: 'fas fa-check-circle',
      iconBg: '#fff4e5',
      iconColor: '#f59e0b',
      changeColor: '#198754',
    },

    {
      title: 'Total Users',
      value: '86',
      change: '',
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

  const projectProgress = sortedProjects
    .slice(0, 5)
    .map((project) => {

      const progress =
        Number(project.work_completed_percentage) || 0;

      return {
        id: project.id,
        name: project.project_name || 'Unnamed Project',
        type: project.project_profile || 'Project',
        progress: progress,
      };
    });


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
        data: [
          activeProjects,
          completedProjects,
          pendingProjects,
          onHoldProjects,
        ],

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

  const recentProjects = sortedProjects
    .slice(0, 5)
    .map((project) => {

      const progress =
        Number(project.work_completed_percentage) || 0;

      const createdDate = project.created_at
        ? new Date(project.created_at)
        : null;

      return {
        id: project.id,

        name:
          project.project_name ||
          'Unnamed Project',

        location:
          project.location ||
          '-',

        type:
          project.project_profile ||
          'Project',

        date:
          createdDate &&
          !Number.isNaN(createdDate.getTime())
            ? createdDate.toLocaleDateString(
                'en-IN',
                {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }
              )
            : '-',

        progress: progress,

        status:
          project.status ||
          'Pending',
      };

    });


  // =========================================================
  // 5. PROJECT ACTIVITY / TIMELINE
  // =========================================================

  /*
   * Your current projects table does not have a separate
   * project_activities table.
   *
   * Therefore, for now we generate activity information
   * from created_at / updated_at.
   *
   * Later, if you create an activities table, we can connect
   * the timeline directly to that table.
   */

  const projectActivities = sortedProjects
    .slice(0, 7)
    .map((project) => {

      const createdDate = project.created_at
        ? new Date(project.created_at)
        : null;

      const updatedDate = project.updated_at
        ? new Date(project.updated_at)
        : null;

      const activityDate =
        updatedDate ||
        createdDate;

      const isUpdated =
        updatedDate &&
        createdDate &&
        updatedDate.getTime() !== createdDate.getTime();

      const activityTitle = isUpdated
        ? 'Project Updated'
        : 'Project Created';

      const activityStatus = isUpdated
        ? 'Updated'
        : 'Created';

      let icon = 'fas fa-folder-plus';
      let iconBg = '#e8f8f0';
      let iconColor = '#198754';

      if (isUpdated) {
        icon = 'fas fa-chart-line';
        iconBg = '#e8f1ff';
        iconColor = '#0d6efd';
      }

      return {

        date:
          activityDate &&
          !Number.isNaN(activityDate.getTime())
            ? activityDate.toLocaleDateString(
                'en-IN',
                {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }
              )
            : '-',

        time:
          activityDate &&
          !Number.isNaN(activityDate.getTime())
            ? activityDate.toLocaleTimeString(
                'en-IN',
                {
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )
            : '-',

        title: activityTitle,

        project:
          project.project_name ||
          'Unnamed Project',

        description: isUpdated
          ? 'Project information was updated.'
          : 'New project was created successfully.',

        icon: icon,

        iconBg: iconBg,

        iconColor: iconColor,

        status: activityStatus,

      };

    });


  // =========================================================
  // STATUS STYLE
  // =========================================================

  const getStatusStyle = (status) => {

    const normalizedStatus =
      status?.toLowerCase() || 'pending';


    if (normalizedStatus === 'active') {

      return {
        backgroundColor: '#e8f8f0',
        color: '#198754',
        dotColor: '#198754',
      };

    }


    if (normalizedStatus === 'completed') {

      return {
        backgroundColor: '#e8f1ff',
        color: '#0d6efd',
        dotColor: '#0d6efd',
      };

    }


    if (normalizedStatus === 'pending') {

      return {
        backgroundColor: '#fff4e5',
        color: '#f59e0b',
        dotColor: '#f59e0b',
      };

    }


    if (
      normalizedStatus === 'on hold' ||
      normalizedStatus === 'on_hold'
    ) {

      return {
        backgroundColor: '#f1f3f5',
        color: '#6c757d',
        dotColor: '#6c757d',
      };

    }


    return {
      backgroundColor: '#f1f3f5',
      color: '#6c757d',
      dotColor: '#6c757d',
    };

  };


  // =========================================================
  // 6. GIS STATISTICS
  // =========================================================

  /*
   * These values are kept as they are for now because
   * they are not coming from the projects API.
   *
   * We can connect these to your GIS database later.
   */

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
  // LOADING
  // =========================================================

  if (loading && projectList.length === 0) {

    return (
      <div
        className="dashboard-page d-flex justify-content-center align-items-center"
        style={{
          minHeight: '400px',
        }}
      >
        <div className="text-center">

          <div
            className="spinner-border text-primary mb-3"
            role="status"
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>

          <div
            style={{
              fontSize: '14px',
              color: '#6c757d',
            }}
          >
            Loading projects...
          </div>

        </div>
      </div>
    );

  }


  // =========================================================
  // ERROR
  // =========================================================

  const errorMessage =
    errors?.message ||
    errors?.error ||
    null;


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

          <button
            className="btn btn-sm btn-outline-primary me-2"
          >
            <i className="fas fa-download me-1"></i>
            Export
          </button>


          <Link
            to="/admin/projects"
            className="btn btn-sm btn-primary"
          >
            <i className="fas fa-plus me-1"></i>
            Add New
          </Link>

        </div>

      </div>


      {/* =====================================================
          ERROR MESSAGE
      ===================================================== */}

      {errorMessage && (

        <div
          className="alert alert-danger"
          role="alert"
        >
          {typeof errorMessage === 'string'
            ? errorMessage
            : 'Unable to load projects.'}
        </div>

      )}


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
                boxShadow:
                  '0 2px 12px rgba(0, 0, 0, 0.06)',
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

                  {card.change && (

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

                  )}


                  <span
                    className={
                      card.change
                        ? 'ms-2'
                        : ''
                    }
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
              boxShadow:
                '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius:
                  '12px 12px 0 0',
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


            <div className="card-body px-4 pb-4">

              {projectProgress.length === 0 ? (

                <div
                  className="text-center py-4"
                  style={{
                    color: '#8a8f98',
                    fontSize: '13px',
                  }}
                >
                  No projects available.
                </div>

              ) : (

                projectProgress.map(
                  (project, index) => (

                    <div
                      key={project.id || index}
                      className={
                        index !==
                        projectProgress.length - 1
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
                            width: `${Math.min(
                              Math.max(
                                project.progress,
                                0
                              ),
                              100
                            )}%`,
                            height: '100%',
                            backgroundColor:
                              project.progress === 100
                                ? '#198754'
                                : '#0d6efd',
                            borderRadius: '10px',
                            transition:
                              'width 0.5s ease',
                          }}
                        ></div>

                      </div>

                    </div>

                  )
                )

              )}

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
              boxShadow:
                '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius:
                  '12px 12px 0 0',
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
                        transform:
                          'translate(-50%, -50%)',
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
                        {totalProjects}
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
                        value: activeProjects,
                        color: '#0d6efd',
                      },

                      {
                        label: 'Completed',
                        value: completedProjects,
                        color: '#198754',
                      },

                      {
                        label: 'Pending',
                        value: pendingProjects,
                        color: '#f59e0b',
                      },

                      {
                        label: 'On Hold',
                        value: onHoldProjects,
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
                            backgroundColor:
                              item.color,
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
              boxShadow:
                '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-3"
              style={{
                borderRadius:
                  '12px 12px 0 0',
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
                          borderBottom:
                            '1px solid #edf0f2',
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
                          borderBottom:
                            '1px solid #edf0f2',
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
                          borderBottom:
                            '1px solid #edf0f2',
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
                          borderBottom:
                            '1px solid #edf0f2',
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
                          borderBottom:
                            '1px solid #edf0f2',
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
                          borderBottom:
                            '1px solid #edf0f2',
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
                          borderBottom:
                            '1px solid #edf0f2',
                        }}
                      >
                        ACTION
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {recentProjects.length === 0 ? (

                      <tr>

                        <td
                          colSpan="7"
                          className="text-center py-5"
                          style={{
                            color: '#8a8f98',
                            fontSize: '13px',
                          }}
                        >
                          No projects found.
                        </td>

                      </tr>

                    ) : (

                      recentProjects.map(
                        (project, index) => {

                          const statusStyle =
                            getStatusStyle(
                              project.status
                            );

                          return (

                            <tr
                              key={
                                project.id ||
                                index
                              }
                            >

                              {/* PROJECT */}

                              <td
                                className="px-4 py-3"
                                style={{
                                  borderBottom:
                                    index !==
                                    recentProjects.length - 1
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
                                      backgroundColor:
                                        '#e8f1ff',
                                      color:
                                        '#0d6efd',
                                      display: 'flex',
                                      alignItems:
                                        'center',
                                      justifyContent:
                                        'center',
                                      marginRight:
                                        '12px',
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
                                      Project #
                                      {project.id}
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
                                    index !==
                                    recentProjects.length - 1
                                      ? '1px solid #f1f3f5'
                                      : 'none',
                                }}
                              >

                                <i
                                  className="fas fa-map-marker-alt me-2"
                                  style={{
                                    color:
                                      '#6c757d',
                                  }}
                                ></i>

                                {project.location}

                              </td>


                              {/* TYPE */}

                              <td
                                style={{
                                  borderBottom:
                                    index !==
                                    recentProjects.length - 1
                                      ? '1px solid #f1f3f5'
                                      : 'none',
                                }}
                              >

                                <span
                                  style={{
                                    fontSize: '12px',
                                    color: '#495057',
                                    backgroundColor:
                                      '#f5f6f8',
                                    padding:
                                      '5px 9px',
                                    borderRadius:
                                      '6px',
                                    whiteSpace:
                                      'nowrap',
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
                                    index !==
                                    recentProjects.length - 1
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
                                    index !==
                                    recentProjects.length - 1
                                      ? '1px solid #f1f3f5'
                                      : 'none',
                                }}
                              >

                                <div className="d-flex align-items-center">

                                  <div
                                    style={{
                                      width: '100px',
                                      height: '6px',
                                      backgroundColor:
                                        '#edf1f5',
                                      borderRadius:
                                        '10px',
                                      overflow:
                                        'hidden',
                                      marginRight:
                                        '8px',
                                    }}
                                  >

                                    <div
                                      style={{
                                        width: `${Math.min(
                                          Math.max(
                                            project.progress,
                                            0
                                          ),
                                          100
                                        )}%`,
                                        height: '100%',
                                        backgroundColor:
                                          project.progress ===
                                          100
                                            ? '#198754'
                                            : '#0d6efd',
                                        borderRadius:
                                          '10px',
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
                                    index !==
                                    recentProjects.length - 1
                                      ? '1px solid #f1f3f5'
                                      : 'none',
                                }}
                              >

                                <span
                                  style={{
                                    display:
                                      'inline-flex',
                                    alignItems:
                                      'center',
                                    padding:
                                      '5px 10px',
                                    borderRadius:
                                      '20px',
                                    fontSize:
                                      '11px',
                                    fontWeight:
                                      '600',
                                    backgroundColor:
                                      statusStyle.backgroundColor,
                                    color:
                                      statusStyle.color,
                                    whiteSpace:
                                      'nowrap',
                                  }}
                                >

                                  <span
                                    style={{
                                      width: '6px',
                                      height: '6px',
                                      borderRadius:
                                        '50%',
                                      backgroundColor:
                                        statusStyle.dotColor,
                                      marginRight:
                                        '6px',
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
                                    index !==
                                    recentProjects.length - 1
                                      ? '1px solid #f1f3f5'
                                      : 'none',
                                }}
                              >

                                <Link
                                  to={`/admin/projects/${project.id}`}
                                  className="btn btn-sm btn-light"
                                  title="View Project"
                                  style={{
                                    width: '32px',
                                    height: '32px',
                                    padding: '0',
                                    borderRadius:
                                      '7px',
                                    color:
                                      '#0d6efd',
                                    display:
                                      'inline-flex',
                                    alignItems:
                                      'center',
                                    justifyContent:
                                      'center',
                                  }}
                                >
                                  <i className="fas fa-eye"></i>
                                </Link>

                              </td>

                            </tr>

                          );

                        }
                      )

                    )}

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
              boxShadow:
                '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius:
                  '12px 12px 0 0',
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

              {projectActivities.length === 0 ? (

                <div
                  className="text-center py-4"
                  style={{
                    color: '#8a8f98',
                    fontSize: '13px',
                  }}
                >
                  No project activity available.
                </div>

              ) : (

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


                  {projectActivities.map(
                    (activity, index) => (

                      <div
                        key={index}
                        className="d-flex position-relative"
                        style={{
                          paddingBottom:
                            index !==
                            projectActivities.length - 1
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
                            backgroundColor:
                              activity.iconBg,
                            color:
                              activity.iconColor,
                            display: 'flex',
                            alignItems:
                              'center',
                            justifyContent:
                              'center',
                            fontSize: '15px',
                            flexShrink: 0,
                            zIndex: 1,
                            border:
                              '3px solid #fff',
                            boxShadow:
                              '0 0 0 1px #edf0f2',
                          }}
                        >
                          <i
                            className={
                              activity.icon
                            }
                          ></i>
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
                                  backgroundColor:
                                    '#f5f6f8',
                                  padding:
                                    '4px 8px',
                                  borderRadius:
                                    '5px',
                                  whiteSpace:
                                    'nowrap',
                                }}
                              >
                                {activity.status}
                              </span>


                              <span
                                style={{
                                  fontSize: '11px',
                                  color: '#8a8f98',
                                  whiteSpace:
                                    'nowrap',
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

                    )
                  )}

                </div>

              )}

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
              boxShadow:
                '0 2px 12px rgba(0, 0, 0, 0.06)',
            }}
          >

            {/* GIS Statistics Header */}

            <div
              className="card-header bg-white border-0 px-4 pt-4 pb-2"
              style={{
                borderRadius:
                  '12px 12px 0 0',
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

                {gisStatistics.map(
                  (stat, index) => (

                    <div
                      className="col-xl-3 col-lg-6 col-md-6"
                      key={index}
                    >

                      <div
                        style={{
                          padding: '20px',
                          borderRadius: '10px',
                          backgroundColor:
                            stat.background,
                          border:
                            `1px solid ${stat.border}`,
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
                              backgroundColor:
                                stat.iconBg,
                              color:
                                stat.iconColor,
                              display: 'flex',
                              alignItems:
                                'center',
                              justifyContent:
                                'center',
                              fontSize: '20px',
                              marginRight: '14px',
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className={
                                stat.icon
                              }
                            ></i>
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
                                whiteSpace:
                                  'nowrap',
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

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </div>


    </div>

  );

};


export default Dashboard;