import { SKILLS } from "../config";

export const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="p-3 text-center bg-white dark:bg-gray-800 shadow rounded-lg text-gray-800 dark:text-gray-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
