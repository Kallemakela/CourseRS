const math = require('mathjs')
// const fs = require('fs');

const PATH = './data/weights.csv'

// weights.csv pasted here because we can't read local files in browser
const mockCsvStr = `;UWAS-C0036;DOM-E5089;CS-A1110;CS-C3170;CS-E4800;CS-E3210;CS-C3160;MS-C1343;MS-A0309;MS-C2111;TU-C1030;TU-C9260;TU-C9270;TU-A1140;TU-A1150;MUO-C3006;ELEC-A4010;TU-C1020;AAN-C2006;AAN-C2011
0;Game Design and Production;Games Now!;Programming 1;Web Software Development;Artificial Intelligence;Machine Learning: Basic Principles;Data Science;Linear algebra;Differential and integral calculus 3;Stochastic Processes;Managerial accounting and finance for decision-makers;Studio Course of Industrial Engineering and Management;Introduction to Networks;Leading and Understanding Oneself;Philosophy and Systems Thinking;Basics of Service Design;Electrical Engineering Workshop;Creating Value;Product analysis;ADD BASICS: Working in the Digital Paradigm
1;The lectures consist of basic concepts of game design and production, focusing more on the design side. Participants develop a small game project, as a group work, beside the lectures. Part of the contact teaching sessions are dedicated for the project related tasks, like evaluation of design, priorities and development progress.;The Games Now! lecture series will present a monthly lecture or panel discussion addressing the hot topics of the game industry. Finnish and international speakers alike will bring the latest information about the many changes affecting the game industry at the moment. The point of view will be multidisciplinary and holistic, and aims to bring together students and industry professionals from all game related fields.;Key content: Programming, imperative programming, object-oriented  programming, reading program code, writing and modifying program code to  conform to a given specification, statements and expressions,  variables, data types, functions, parameters, return values, objects,  classes, methods, arrays and buffers, selection, loops, programming  style, class libraries and program documentation, using an integrated  development environment. Highly recommended content: Stages of program  code (source code, compiler, intermediate language, virtual machine),  program execution (e.g., call stack, garbage collection), reading and  writing text files, key-value maps, traits and inheritance, immutable  vs. mutable objects, function objects, higher-order functions, anonymous  functions, some basic aspects of code quality. Additional content:  graphical user interfaces, recursion, designing one s own program.;The main focus of this course is to view the web as a programming platform. Special emphasis is placed on the distributed nature of a web application, session management and the communication between a web-client and the HTTP-server. How applications and services are developed using modern web frameworks and technologies and what are the opportunities and restrictions imposed by both client and server platforms. Additional topics include security issues, efficiency, scalability, testing, debugging, and deployment.;The course presents a range of central AI techniques and  provides the students with an extensive toolbox for solving problems  in practice. For applications that require high degree of adaptation,  specific techniques such as (deep) machine learning, reinforcement  learning, and graphical models are included. These methods are  instrumental for decision under uncertainty. For the purposes of  knowledge representation and reasoning, different logical  representations such as formulas and rules are covered. These representations establish the foundations for  declarative problem solving and enable the use of state-of-the-art solver technology to search for solutions. The course also encourages  the students to combine the logical and machine learning perspectives  when solving future problems.;The course deals with basic principles needed to understand and apply  machine learning models and methods. The topics include supervised and  unsupervised learning, Bayesian decision theory, parametric methods,  tuning model complexity, dimensionality reduction, clustering,  nonparametric methods, decision trees, comparing and combining  algorithms, as well as a few applications of these methods.;The course serves as an introduction to the topic of  data science and  related topics such as machine learning. You will be  introduced to data  science methods and tools to find interesting  information from data.  Specific topics on the course include processing  of digital signals  such as speech and images, statistical estimation of  parametric  distributions, classification, prediction, clustering,  pattern mining,  and network analysis for developing search engines for  hypertext  collections such as the Web.;Vector spaces, linear maps, norm and inner product, theory and applications of eigenvalues. Systems of differential equations. Linear and shortly also nonlinear systems.;change of variables in multiple integrals, integration in cylindrical and spherical coordinates, vector fields, line and surface integrals, gradient,  divergence, curl, Gauss's, Green's and Stokes' theorems.;Random vectors and random processes. Markov chains. Stochastic population models. Random point patterns and Poisson processes. Martingales, queues, and gambling.;Understanding decision-making situations, especially investment decisions, and respective relevant costs and benefits. Methods for estimating revenues and costs. The required rate of return on capital and other opportunity costs. Decisions concerning capital structure. Considering risk and uncertainty in managerial accounting models. Consideration of the limitations of managerial accounting models in decision making.;The course deals with strategy, operations management and leadership related challenges of knowledge intensive companies.;The course deals with basic concepts of network theory and science.;The course lectures and assignments deal with personal strengths, goal setting and goal achievement, management of time and financial resources, good learning methods, stress factors and stress coping mechanisms, emotions and their impact on thinking and behavior and factors related to social interaction.;The series draws from western philosophical tradition and is strongly applicative.;Kurssilla tutustutaan palvelumuotoilun osaamisalueeseen ja perehdytään siinä käytettäviin suunnitteluprosesseihin ja menetelmiin luentojen ja harjoitustehtävien avulla.;Basics of Arduino and other electronic components. Electrical circuits, sensors, connections and interfaces, combined with software and data networks.;The core components of the course are 1) finding and defining a project with potential for a valuable outcome 2) cooperation with a self-identified company/companies on the opportunity, 3) designing a feasible and executable business experiment for the partner(s), (4) abstraction and reflection of the experience.;Students work in interdisciplinary teams. Each team is assigned a product that is analyzed from the perspectives of design, business, and engineering. The analysis is supported with lectures and workshops related to manufacturing techniques, materials, services, users, etc. The outcome of the analysis is presented in a final gala.;Digital transformation is changing the landscape of product design by introducing new technologies such as additive manufacturing, augmented reality, artificial intelligence and digital platforms. Each year, the course will focus on an emerging technology that is determined at the start of each course.  During the course, students create a value proposition / business plan that is made possible by, or builds on the chosen emergent technology. The outputs include a business model canvas, prototype / demo, and a pitch.
2;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=UWAS-C0036;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=DOM-E5089;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=CS-A1110;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=CS-C3170;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=CS-E4800;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=CS-E3210;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=CS-C3160;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=MS-C1343;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=MS-A0309;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=MS-C2111;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=TU-C1030;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=TU-C9260;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=TU-C9270;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=TU-A1140;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=TU-A1150;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=MUO-C3006;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=ELEC-A4010;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=TU-C1020;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=AAN-C2006;https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=AAN-C2011
3;https://mycourses.aalto.fi/course/search.php?search=UWAS-C0036;https://mycourses.aalto.fi/course/search.php?search=DOM-E5089;https://mycourses.aalto.fi/course/search.php?search=CS-A1110;https://mycourses.aalto.fi/course/search.php?search=CS-C3170;https://mycourses.aalto.fi/course/search.php?search=CS-E4800;https://mycourses.aalto.fi/course/search.php?search=CS-E3210;https://mycourses.aalto.fi/course/search.php?search=CS-C3160;https://mycourses.aalto.fi/course/search.php?search=MS-C1343;https://mycourses.aalto.fi/course/search.php?search=MS-A0309;https://mycourses.aalto.fi/course/search.php?search=MS-C2111;https://mycourses.aalto.fi/course/search.php?search=TU-C1030;https://mycourses.aalto.fi/course/search.php?search=TU-C9260;https://mycourses.aalto.fi/course/search.php?search=TU-C9270;https://mycourses.aalto.fi/course/search.php?search=TU-A1140;https://mycourses.aalto.fi/course/search.php?search=TU-A1150;https://mycourses.aalto.fi/course/search.php?search=MUO-C3006;https://mycourses.aalto.fi/course/search.php?search=ELEC-A4010;https://mycourses.aalto.fi/course/search.php?search=TU-C1020;https://mycourses.aalto.fi/course/search.php?search=AAN-C2006;https://mycourses.aalto.fi/course/search.php?search=AAN-C2011
4;0.88;0.66;0.86;0.77;0.49;0.48;0.54;0.28;0.49;0.42;0.12;0.08;0.05;0.15;0.0;0.0;0.0;0.0;0.03;0.0
5;0.8;0.95;0.81;0.78;0.61;0.64;0.56;0.69;0.36;0.39;0.55;0.38;0.36;0.15;0.25;0.0;0.14;0.0;0.0;0.02
6;0.76;0.71;0.83;0.82;0.8;0.83;0.72;0.74;0.47;0.45;0.38;0.25;0.38;0.31;0.07;0.17;0.06;0.0;0.0;0.1
7;0.49;0.53;0.88;0.9;0.56;0.7;0.6;0.71;0.52;0.68;0.49;0.2;0.24;0.2;0.12;0.19;0.02;0.06;0.16;0.0
8;0.58;0.66;0.73;0.95;0.94;0.66;0.86;0.6;0.56;0.51;0.35;0.58;0.48;0.53;0.24;0.3;0.13;0.2;0.09;0.21
9;0.57;0.79;0.83;0.6;0.83;0.73;0.75;0.87;0.79;0.71;0.61;0.33;0.63;0.55;0.36;0.5;0.07;0.25;0.12;0.0
10;0.42;0.61;0.74;0.73;0.75;0.67;0.89;0.68;0.67;0.75;0.75;0.69;0.65;0.47;0.25;0.26;0.22;0.24;0.06;0.33
11;0.45;0.58;0.7;0.52;0.45;0.8;0.93;0.61;0.65;0.87;0.63;0.78;0.67;0.5;0.52;0.51;0.17;0.3;0.34;0.4
12;0.34;0.57;0.56;0.4;0.41;0.74;0.62;0.83;0.8;0.87;0.67;0.74;0.67;0.58;0.34;0.41;0.42;0.16;0.38;0.1
13;0.39;0.41;0.54;0.57;0.5;0.74;0.6;0.86;0.55;0.91;0.68;0.51;0.7;0.63;0.35;0.65;0.61;0.57;0.41;0.47
14;0.5;0.39;0.46;0.59;0.61;0.54;0.41;0.78;0.83;0.76;0.74;0.72;0.67;0.76;0.52;0.44;0.44;0.42;0.54;0.47
15;0.39;0.2;0.26;0.34;0.28;0.4;0.48;0.58;0.77;0.9;0.59;0.61;0.75;0.82;0.79;0.59;0.38;0.58;0.3;0.5
16;0.26;0.15;0.1;0.19;0.21;0.32;0.53;0.4;0.53;0.52;0.69;0.76;0.69;0.59;0.82;0.5;0.61;0.75;0.63;0.53
17;0.23;0.09;0.16;0.34;0.36;0.52;0.45;0.6;0.55;0.66;0.5;0.77;0.68;0.69;0.68;0.76;0.55;0.68;0.6;0.32
18;0.0;0.06;0.23;0.21;0.36;0.49;0.32;0.39;0.44;0.52;0.53;0.8;0.54;0.72;0.76;0.79;0.52;0.56;0.42;0.65
19;0.0;0.0;0.13;0.1;0.37;0.5;0.25;0.42;0.36;0.33;0.59;0.68;0.5;0.54;0.81;0.78;0.56;0.65;0.68;0.54
20;0.17;0.13;0.23;0.14;0.29;0.33;0.37;0.43;0.37;0.36;0.38;0.73;0.66;0.81;0.75;0.71;0.71;0.6;0.8;0.64
21;0.0;0.08;0.23;0.09;0.33;0.16;0.23;0.28;0.32;0.27;0.63;0.58;0.48;0.65;0.83;0.6;0.79;0.73;0.89;0.51
22;0.0;0.09;0.1;0.04;0.0;0.34;0.04;0.44;0.43;0.16;0.5;0.61;0.56;0.5;0.45;0.75;0.71;0.78;0.92;0.71
23;0.0;0.0;0.0;0.12;0.0;0.3;0.04;0.22;0.4;0.41;0.21;0.48;0.49;0.42;0.55;0.76;0.45;0.64;0.7;0.89
`

const getRows = (path) => {
  // Uncomment to read from weights.csv (can't do in browser)
  // const csvString = fs.readFileSync(path, {encoding: 'utf8'})
  const csvString = mockCsvStr 
  return csvString.split('\n').slice(0,-1).map(row => row.split(';').slice(1))
}

const getWeights = (path) => {
  const weightRows = getRows(path).slice(5)
  return weightRows.map(row => row.map(Number))
}

export const getCourses = (path) => {
  const [ codes, names, descriptions, oodiLinks, myCoLinks ] = getRows(path).slice(0,5)
  return codes.map((code, index) => {
    return {
      index,
      code,
      name: names[index],
      description: descriptions[index],
      oodiLink: oodiLinks[index],
      myCoLink: myCoLinks[index],
      completed: false,
    }
  })
}

// v is steepness of sigmoid
const sigmoid = (v, x) => {
  const c = Math.exp(-v/2)
  return c/(c+Math.exp(-v*x))
}

export const recommendCourses = (courseList) => {
  const W = getWeights(PATH)
  const completedCourses = []
  const courseNames = []
  for (let i = 0; i< courseList.length;i++){
    completedCourses.push(courseList[i].completed)
    courseNames.push(courseList[i].name)
  }
  const completedLength = Math.max(1, completedCourses.filter(Boolean).length)
  const courseRank = (courses, W) => {
    const rankedCourses = math.multiply(courses, W)
    const filtered = []
    for (let i = 0; i < courses.length; i++) {
      if (!courses[i]) {
        filtered.push({
          name: courseNames[i],
          code:courseList[i].code,
          mIndex: rankedCourses[i] === 0 ? 0 : sigmoid(9, rankedCourses[i] / completedLength) * 100,
          // mIndex: rankedCourses[i] / completedLength * 100,
          // mIndex: rankedCourses[i]/l + (0.99 - rankedCourses[i]/l) * (1/4 * (Math.log(Math.max(0.019, rankedCourses[i]/l))) + 1)
        })
      }
    }
    return filtered.sort((a, b) => b.mIndex-a.mIndex)
  }
  return courseRank(completedCourses, W)
}