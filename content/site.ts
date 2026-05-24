export const site = {
  name: "Sahil Kashyap",
  role: "PhD Scholar, IIT Delhi",
  location: "India",
  tagline:
    "Teaching equations to admit what they do not know, and building probabilistic models for the physics they leave out.",
  about: [
    "I work at the intersection of physics-based modeling, probabilistic inference, and data-driven learning for dynamical systems.",
    "My research focuses on understanding what governing equations fail to capture — treating model-form errors not as residual noise, but as latent physical effects that can be inferred, learned, and used for prediction.",
    "Through Gaussian processes, Bayesian filtering, and probabilistic digital twins, I develop frameworks that combine imperfect physics with noisy measurements to enable robust state estimation and uncertainty-aware predictions.",
  ],
  email: "sahilkashyap.nr@gmail.com",
  emailUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=sahilkashyap.nr@gmail.com",
  avatar: "/sahil.jpg",
  links: [
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sahilkashyap.nr@gmail.com",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=0MO0ArAAAAAJ",
    },
    {
      label: "CV",
      href: "https://drive.google.com/file/d/19ZA91sj3WAXLTOcwGupn-cwGn37qMvQX/view?usp=sharing",
    },
  ],
  papers: [
    {
      title: "Model-form errors as latent forces",
      venue: "Research publication",
      year: "",
      summary:
        "In practice, the true equation of motion is often unknown, and the assumed model contains discrepancies due to unmodelled physics. Here, the true system has a localised nonlinearity under ground-motion excitation, whose location and nature are unknown to the modeller. We use a Gaussian-Process Latent Force Model (GP-LFM) to identify the missing physics through GP-modelled latent forces.",
      embed: "/Animation1-Standalone.html",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=0MO0ArAAAAAJ&citation_for_view=0MO0ArAAAAAJ:u5HHmVD_uO8C",
    },
    {
      title: "Probabilistic digital twins for misspecified dynamical systems",
      venue: "Research publication",
      year: "",
      summary:
        "Reliable prediction of structural and dynamical systems is limited by missing or simplified physics in their governing equations — and identifying these gaps is only the first step, since the equations themselves must be corrected to enable trustworthy prediction under unseen operating conditions. This work first employs Gaussian-Process Latent Force Models (GPLFMs) to infer latent model-form errors directly from measured responses. Because such errors are generally functions of the system's state, a probabilistic mapping is then constructed between the identified states and the inferred discrepancies, learned using Bayesian Neural Networks. This end-to-end probabilistic framework not only diagnoses where the physics falls short but also corrects it, delivering accurate and uncertainty-aware predictions even when the underlying model is imperfectly known.",
      embed: "/animation-paper-2.html",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=0MO0ArAAAAAJ&citation_for_view=0MO0ArAAAAAJ:d1gkVwhDpl0C",
    },
    {
      title: "Physics-as-measurement",
      venue: "Research publication",
      year: "",
      summary:
        "Most model discrepancy addressing frameworks assume system inputs (excitation) are known exactly, an assumption that rarely holds in practical sensing environments where both excitation and response measurements are corrupted by noise. This work introduces a physics-as-measurement framework, where governing equations are treated as probabilistic measurement channels rather than rigid deterministic constraints. By jointly integrating noisy input-output measurements with partial governing physics, the framework enables inference of system states and model discrepancies in misspecified dynamical systems.",
      embed: "/animation-physics-as-measurement.html",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=0MO0ArAAAAAJ&citation_for_view=0MO0ArAAAAAJ:UeHWp8X0CEIC",
    },
  ],
  projects: [],
  education: [
    {
      degree: "PhD in Applied Mechanics",
      institution: "Indian Institute of Technology Delhi (IIT Delhi)",
      years: "2022 – Ongoing",
      note: "",
    },
    {
      degree: "M.Tech. in Engineering Analysis and Design",
      institution:
        "Motilal Nehru National Institute of Technology Allahabad (MNNIT Allahabad)",
      years: "2019 – 2021",
      note: "CGPA: 8.00 / 10",
    },
    {
      degree: "B.Tech. in Mechanical Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar",
      years: "2013 – 2017",
      note: "CGPA: 8.31 / 10",
    },
  ],
  skills: [
    {
      group: "Programming",
      items: ["MATLAB", "Python", "Abaqus"],
    },
    {
      group: "Machine Learning & Inference",
      items: [
        "Gaussian Processes",
        "Bayesian Filtering & Smoothing",
        "Kalman Filtering",
        "Bayesian Inference",
        "Bayesian Neural Networks",
      ],
    },
    {
      group: "Signal Processing",
      items: [
        "Time-Series Analysis",
        "Statistical Signal Processing",
        "Sensor Data Analytics",
      ],
    },
    {
      group: "Engineering",
      items: [
        "System Identification",
        "Structural Dynamics",
        "State Estimation",
        "Probabilistic Forecasting",
      ],
    },
  ],
};
