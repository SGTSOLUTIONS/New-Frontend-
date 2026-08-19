// features/project/projectSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';


// =========================
// CREATE PROJECT
// =========================
export const createProject = createAsyncThunk(
    'project/createProject',
    async (formData, { rejectWithValue }) => {
        try {

            const response = await api.post(
                '/projects',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            return response.data;

        } catch (error) {

            return rejectWithValue(
                error.response?.data || {
                    message: 'Something went wrong'
                }
            );
        }
    }
);


// =========================
// GET PROJECTS
// =========================
export const getProjects = createAsyncThunk(
    'project/getProjects',
    async (_, { rejectWithValue }) => {

        try {

            const response = await api.get('/projects');

            return response.data;

        } catch (error) {

            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to fetch projects'
                }
            );
        }
    }
);


// =========================
// DELETE PROJECT
// =========================
export const deleteProject = createAsyncThunk(
    'project/deleteProject',
    async (id, { rejectWithValue }) => {

        try {

            const response = await api.delete(`/projects/${id}`);

            return {
                id,
                ...response.data
            };

        } catch (error) {

            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to delete project'
                }
            );
        }
    }
);


// =========================
// SLICE
// =========================
const projectSlice = createSlice({

    name: 'project',

    initialState: {

        projects: [],

        project: null,

        errors: {},

        loading: false,

        success: false,

        message: '',

    },

    reducers: {

        clearErrors: (state) => {

            state.errors = {};

        },

        clearSuccess: (state) => {

            state.success = false;

        },

        clearMessage: (state) => {

            state.message = '';

        },

    },


    extraReducers: (builder) => {

        builder


            // ==================================
            // CREATE PROJECT
            // ==================================

            .addCase(createProject.pending, (state) => {

                state.loading = true;

                state.errors = {};

                state.success = false;

            })

            .addCase(createProject.fulfilled, (state, action) => {

                state.loading = false;

                state.success = true;

                state.message =
                    action.payload?.message ||
                    'Project created successfully';

                if (action.payload?.project) {

                    state.projects.push(
                        action.payload.project
                    );

                }

            })

            .addCase(createProject.rejected, (state, action) => {

                state.loading = false;

                state.success = false;

                state.errors =
                    action.payload || {
                        message: 'Project creation failed'
                    };

            })


            // ==================================
            // GET PROJECTS
            // ==================================

            .addCase(getProjects.pending, (state) => {

                state.loading = true;

                state.errors = {};

            })

            .addCase(getProjects.fulfilled, (state, action) => {

                state.loading = false;

                /*
                 * If Laravel returns:
                 *
                 * {
                 *   projects: [...]
                 * }
                 */

                state.projects =
                    action.payload?.projects ||
                    action.payload ||
                    [];

            })

            .addCase(getProjects.rejected, (state, action) => {

                state.loading = false;

                state.errors =
                    action.payload || {
                        message: 'Unable to fetch projects'
                    };

            })


            // ==================================
            // DELETE PROJECT
            // ==================================

            .addCase(deleteProject.pending, (state) => {

                state.loading = true;

            })

            .addCase(deleteProject.fulfilled, (state, action) => {

                state.loading = false;

                state.projects =
                    state.projects.filter(
                        project =>
                            project.id !== action.payload.id
                    );

                state.message =
                    action.payload?.message ||
                    'Project deleted successfully';

            })

            .addCase(deleteProject.rejected, (state, action) => {

                state.loading = false;

                state.errors =
                    action.payload || {
                        message: 'Unable to delete project'
                    };

            });

    },

});


export const {
    clearErrors,
    clearSuccess,
    clearMessage,
} = projectSlice.actions;


export default projectSlice.reducer;