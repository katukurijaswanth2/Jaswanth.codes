/* ================= Growth Curve Data ================= */

const growthData = [
  {
    stage: "10th",
    year: "2017–18",
    value: 2,
    title: "Secondary Education",
    subtitle: "Class 10",
    desc: "Built academic foundation and self-discipline"
  },
  {
    stage: "Intermediate",
    year: "2018–20",
    value: 4,
    title: "Intermediate",
    subtitle: "MPC",
    desc: "Improved consistency and subject clarity"
  },
  {
    stage: "B.Sc",
    year: "2020–23",
    value: 3.5,
    title: "Bachelor’s Degree",
    subtitle: "B.Sc",
    desc: "Balanced academics with skill development"
  },
  {
    stage: "Teaching",
    year: "2021–23",
    value: 6,
    title: "Teaching Experience",
    subtitle: "Educator",
    desc: "Developed communication and responsibility"
  },
  {
    stage: "MCA – I",
    year: "2023–24",
    value: 8,
    title: "Post Graduation",
    subtitle: "MCA + Work",
    desc: "CS Teacher & Web Developer"
  },
  {
    stage: "MCA – II",
    year: "2024–25",
    value: 9,
    title: "Post Graduation",
    subtitle: "Final Year",
    desc: "Advanced CS & real-world projects"
  },
  {
    stage: "Full Stack Java",
    year: "2025",
    value: 10,
    title: "Industry Preparation",
    subtitle: "AchieversIT",
    desc: "Full Stack Java with production projects"
  }
];

/* ================= Tooltip ================= */

const tooltip = d3.select("#growth-tooltip");

/* ================= Draw Function ================= */

function drawGrowthCurve() {
  d3.select("#growth-chart").selectAll("*").remove();

  const container = document.querySelector(".growth-curve .d3-chart");
  if (!container) return;

  const containerWidth = container.offsetWidth;

  const margin = { top: 20, right: 20, bottom: 60, left: 40 };
  const width = containerWidth - margin.left - margin.right;
  const height = Math.min(450, containerWidth * 0.55);

  const svg = d3
    .select("#growth-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  /* ===== Gradient ===== */

  const defs = svg.append("defs");

  const gradient = defs
    .append("linearGradient")
    .attr("id", "line-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");

  gradient.append("stop").attr("offset", "0%").attr("stop-color", "#ff2d2d");
  gradient.append("stop").attr("offset", "100%").attr("stop-color", "#ffffff");

  /* ===== Scales ===== */

  const x = d3.scalePoint()
    .domain(growthData.map(d => d.stage))
    .range([0, width])
    .padding(0.5);

  const y = d3.scaleLinear()
    .domain([0, 10])
    .range([height, 0]);

  /* ===== Axes ===== */

  const xAxis = svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  if (window.innerWidth < 768) {
    xAxis.selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-0.6em")
      .attr("dy", "0.15em")
      .attr("transform", "rotate(-35)");
  }

  svg.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(5));

  /* ===== Line ===== */

  const line = d3.line()
    .x(d => x(d.stage))
    .y(d => y(d.value))
    .curve(d3.curveCatmullRom.alpha(0.5));

  svg.append("path")
    .datum(growthData)
    .attr("class", "curve")
    .attr("d", line);

  /* ===== Dots + Tooltip ===== */

  svg.selectAll(".dot")
    .data(growthData)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.stage))
    .attr("cy", d => y(d.value))
    .attr("r", 6)
    .on("mouseover", (event, d) => {
      tooltip
        .style("opacity", 1)
        .html(`
          <span>${d.stage}</span><br/>
          <strong>${d.title}</strong><br/>
          <small>${d.subtitle}</small><br/>
          <small>${d.year}</small><br/>
          <small>${d.desc}</small>
        `);
    })
    .on("mousemove", (event) => {
      const tooltipWidth = 260;
      const tooltipHeight = 120;

      let xPos = event.clientX + 15;
      let yPos = event.clientY - 20;

      if (xPos + tooltipWidth > window.innerWidth) {
        xPos = event.clientX - tooltipWidth - 15;
      }

      if (yPos + tooltipHeight > window.innerHeight) {
        yPos = window.innerHeight - tooltipHeight - 10;
      }

      tooltip
        .style("left", xPos + "px")
        .style("top", yPos + "px");
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });
}

/* ================= Init & Resize ================= */

drawGrowthCurve();
window.addEventListener("resize", drawGrowthCurve);
