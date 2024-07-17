const tech = [
  {
    img: "css.png",
    title: "CSS",
  },
  {
    img: "nextjs.png",
    title: "Next JS",
  },
  {
    img: "figma.png",
    title: "Figma",
  },
  {
    img: "git.png",
    title: "Git",
  },
  {
    img: "gsap.svg",
    title: "GSAP",
  },
  {
    img: "html.png",
    title: "HTML",
  },
  {
    img: "java.png",
    title: "Java",
  },
  {
    img: "javascript.png",
    title: "Java Script",
  },
  {
    img: "mysql.png",
    title: "My SQL",
  },
  {
    img: "pandas.png",
    title: "Pandas",
  },
  {
    img: "python.png",
    title: "Python",
  },
  {
    img: "reactjs.png",
    title: "React JS",
  },
  {
    img: "scikitlearn.png",
    title: "SciKit Learn",
  },
  {
    img: "tailwind.png",
    title: "Tailwind CSS",
  },
  {
    img: "tensorflow.png",
    title: "TensorFlow",
  },
  {
    img: "threejs.png",
    title: "Three JS",
  },
  {
    img: "typescript.png",
    title: "Type Script",
  },
  {
    img: "bootstrap.png",
    title: "BootStrap",
  },
];

code = "";

tech.forEach((item) => {
  code += `
<div class="col-lg-2 col-md-3 col-sm-4 col-4 mt-4">
    <div class="card h-100 gradient-background text-center p-3 border-0 shadow-sm d-flex align-items-center justify-content-center smaller-card">
        <img src="assets/tech/${item.img}" height="60px" width="60px" alt="${item.title}" class="mb-2 rounded-circle">
        <h4 class="text-white font-weight-bold mt-2 font-monospace">${item.title}</h4>
    </div>
</div>

`;
});

document.getElementById("itemGrid").innerHTML = code;

