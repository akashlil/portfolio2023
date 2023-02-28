import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changetheme: {
    status: true,
    bgColor: "bg-[#0b1120]",
    textColor: "text-white",
    h1Color: "text-blue-700/90",
    themes: "dark",
    mySkillColor: {
      textColor: "text-white",
      bgColor: "bg-slate-800/80",
      iconColor: "bg-white",
    },
  },
};

const colorChane = createSlice({
  name: "colorchange",
  initialState,
  reducers: {
    lightToDark: (state, action) => {
      if (!state.changetheme.status) {
        state.changetheme.themes = "dark";
        state.changetheme.bgColor = "bg-[#0b1120]";
        state.changetheme.textColor = "text-white";

        //my section
        state.changetheme.mySkillColor.textColor = state.changetheme.textColor;
        state.changetheme.mySkillColor.bgColor = "bg-slate-800/80";
        state.changetheme.mySkillColor.iconColor = "bg-white";

        state.changetheme.status = true;
      } else {
        state.changetheme.themes = "light";
        state.changetheme.bgColor = "bg-white";
        state.changetheme.textColor = "text-balck";

        //mySkill section
        state.changetheme.mySkillColor.textColor = state.changetheme.textColor;
        state.changetheme.mySkillColor.bgColor = "bg-slate-800/50";
        state.changetheme.mySkillColor.iconColor = "bg-black/80";

        state.changetheme.status = false;
      }
    },
  },
});

export const { lightToDark } = colorChane.actions;

export default colorChane.reducer;
