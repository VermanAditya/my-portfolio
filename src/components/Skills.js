import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SKILLS } from "../config";
export const Skills = () => {
    return (_jsxs("section", { id: "skills", className: "px-6 py-20", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 dark:text-white", children: "Skills" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4", children: SKILLS.map((skill) => (_jsx("div", { className: "p-3 text-center bg-white dark:bg-gray-800 shadow rounded-lg text-gray-800 dark:text-gray-300", children: skill }, skill))) })] }));
};
