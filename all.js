// ---------- DATA ----------
const frontendProjects = [
  {
    title: "FoodieGo",
    description: "Responsive shopping website built using HTML, CSS, and JavaScript.",
    image: "./images/foodieGo.jpg",
    github: "https://github.com/katukurijaswanth2/Foodiego.git",
    live: "https://foodiego-by-jaswanth.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase skills and projects.",
    image: "./images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourusername.github.io/portfolio"
  },
  {
    title: "DriveWise",
    description: "DriveWise recommends vehicles based on your income for smarter, easier choices.",
    image: "./images/drivewise.png",
    github: "https://github.com/katukurijaswanth2/drivewise.git",
    live: "https://yourusername.github.io/weather-app"
  },
  {
    title: "Grantify",
    description: "Web app that helps students discover scholarships by filtering through income, state, and education level, with a modular frontend and live deployment.",
    image: "./images/Grantify.png",
    github: "https://github.com/katukurijaswanth2/Scholarship-Finder.git",
    live: "https://scholarpath-gamma.vercel.app/"
  },
  // {
  //   title: "Movie Search App",
  //   description: "Movie search application using OMDb API with real-time search and responsive UI.",
  //   image: "./images/jash.png",
  //   github: "https://github.com/yourusername/movie-search-app",
  //   live: "https://yourusername.github.io/movie-search-app"
  // }
];

const backendProjects = [
  {
    title: "PriorityCare",
    description: "A Java backend hospital triage system that prioritizes patients by medical urgency using efficient data structures..",
    image: "./images/priorityQueue.png",
    github: "https://github.com/katukurijaswanth2/javaProjects.git",
    live: "https://github.com/katukurijaswanth2/javaProjects.git"
  },
  {
    title: "WorkForceHub",
    description: "A Spring Boot–based Employee Management REST API that enables secure CRUD operations, department-based search, and MySQL integration using a clean layered backend architecture.ackend using Spring Boot, JPA, MySQL, and Stripe integration.",
    image: "./images/WorkForceHub.png",
    github: "https://github.com/katukurijaswanth2/employee_management.git",
    live: "https://github.com/katukurijaswanth2/employee_management.git"
  }
];
const fullStackProjects = [
  {
    title: "Full Stack E-Commerce Application",
    description: "Complete e-commerce web application with Spring Boot REST APIs, JWT authentication, MySQL database, and responsive frontend for product browsing, cart, and checkout.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/fullstack-ecommerce",
    live: "https://yourusername.github.io/fullstack-ecommerce"
  },
  {
    title: "Online Banking System",
    description: "Secure full stack banking application using Spring Boot, REST APIs, role-based authentication, and frontend dashboards for account management and transactions.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/online-banking-system",
    live: "https://yourusername.github.io/online-banking-system"
  },
  {
    title: "Employee Management System",
    description: "Full stack employee management system with Spring Boot backend, CRUD REST APIs, MySQL database, and responsive frontend for managing employees and departments.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/employee-management-system",
    live: "https://yourusername.github.io/employee-management-system"
  },
  {
    title: "Task Management Application",
    description: "Task management web app with Spring Boot backend, JWT-based authentication, REST APIs, and dynamic frontend for task creation, tracking, and status updates.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/task-management-app",
    live: "https://yourusername.github.io/task-management-app"
  },
  {
    title: "Student Management System",
    description: "Full stack student management system using Spring Boot, JPA, MySQL, and a responsive frontend to manage student records, courses, and enrollment.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/student-management-system",
    live: "https://yourusername.github.io/student-management-system"
  }
];

// ---------- REUSABLE FUNCTION ----------
function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";

  projects.forEach(p => {
    html += `
      <div class="project-card">
        <div class="project-image">
          <img src="${p.image}" alt="${p.title}">
        </div>

        <div class="project-content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>

          <div class="project-links">
            <a href="${p.github}" target="_blank">GitHub</a>
            <a href="${p.live}" target="_blank" class="live">View</a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ---------- INIT ----------
renderProjects(frontendProjects, "project-lists");
renderProjects(backendProjects, "javaBackend-projects");
renderProjects(fullStackProjects, "fullStackProjects");