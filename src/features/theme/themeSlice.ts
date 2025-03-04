import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    mode: 'light' | 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: { mode: 'dark' } as ThemeState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer