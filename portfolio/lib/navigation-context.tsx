"use client";

import { createContext, useContext } from "react";
import { SectionId } from "@/lib/sections";

export const NavigationContext = createContext<(id: SectionId) => void>(() => { });

export const useNavigate = () => useContext(NavigationContext);
