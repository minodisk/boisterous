const wrapper = document.createElement("div");
wrapper.setAttribute("id", "wrapper");
document.body.appendChild(wrapper);

const canvas = SVG("wrapper").size("100%", "100%");

for (let i = 0; i < 100; i++) {
  const circle = canvas.circle(100).attr({
    cx: 1000 * Math.random(),
    cy: 1000 * Math.random(),
    fill: "white",
  });
  circle.animate().move(1000 * Math.random(), 1000 * Math.random());
}
