'use client';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../providers";

export default function ThemeToggle() {

  const { mode, toggleTheme } = useThemeContext();


  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
