const skills = [
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
  {
    name: "Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
  },
  {
    name: "Spring MVC",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
  },
  {
    name: "Spring Data JPA (Hibernate)",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg"
  },
  {
    name: "RESTful APIs",
    image: "images/restapi.svg"
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  },
  {
    name: "SQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
  },
  {
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
  },
  {
    name: "Maven",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg"
  },
  {
    name: "Postman",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
  },
  {
    name: "JUnit",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg"

  },

  {
    name: "Data Structures",
    image: "images/dsa.svg"
  }
  ,

  {
    name: "intellij",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"
  },
  {
    name: "Clean Code",
    image: "images/cleancode.svg"
  },
  {
    name: "MVC Architecture",
    image: "images/mvc.svg"
  },
  {
    name: "React.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  }
];




const skillsContainer = document.getElementById("mySkills");

skills.forEach(skill => {
  skillsContainer.innerHTML += `
    <div class="skill-box">
      <span class="skill-name">${skill.name}</span>
      <img src="${skill.image}" alt="${skill.name}" class="skill-img">
     
    </div>
  `;
});

