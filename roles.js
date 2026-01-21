const rolesData = [

  { id: 1, title1: "Full Stack", title2: "Developer" },
  { id: 2, title1: "Front End", title2: "Developer" },
  { id: 3, title1: "Back End", title2: "Developer" },
  { id: 4, title1: "Software", title2: "Engineer" }
];

const rolesContainer = document.getElementById("roles");

let html = "";

rolesData.forEach(role => {
  html += `
     
        <div class="role-card">
          <div class="role-number">0${role.id}</div>
          <div class="role-title">
            <span class="roleTitle1">${role.title1}</span>
            <span class="roleTitle2">${role.title2}</span>
          </div>
  
        </div>
      `;
});

rolesContainer.innerHTML = html;

// skills 



 // 

