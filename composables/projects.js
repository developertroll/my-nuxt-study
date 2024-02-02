export const useProjects = () => {
  const projects = useState("projects", () => []);
  const loadProjects = async () => {
    const response = await fetch("/api/Project");
    projects.value = await response.json();
  };
  const initProjects = () => {
    if (!projects.value.length) {
      projects.value = JSON.parse(localStorage.getItem("projects") || {});
    }
    watch(projects, () => {
      localStorage.setItem("projects", JSON.stringify(projects.value));
    });
  };
  return {
    projects,
    loadProjects,
    initProjects,
  };
};
