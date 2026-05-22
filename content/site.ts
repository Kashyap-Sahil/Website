export const site = {
  name: "Sahil Kashyap",
  role: "Researcher",
  location: "Delhi, India",
  tagline:
    "Teaching equations to admit what they do not know, and building probabilistic models for the physics they leave out.",
  about: [
    "I'm a researcher exploring the boundary between data-driven and physics-based modeling. My work focuses on identifying and correcting the structural gaps that classical models carry — the assumptions baked in long before the data arrives.",
    "Recent work treats model-form error as a latent force: something inferable, separable, and useful, rather than noise to be smoothed over.",
  ],
  email: "sahilkashyap.nr@gmail.com",
  avatar: "/sahil.jpg",
  links: [
    { label: "Email", href: "mailto:sahilkashyap.nr@gmail.com" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=0MO0ArAAAAAJ",
    },
    { label: "GitHub", href: "https://github.com/kashyap-sahil" },
  ],
  papers: [
    {
      title: "Model-form errors as latent forces",
      venue: "Research publication",
      year: "",
      summary:
        "In practice, the true equation of motion is often unknown, and the assumed model contains discrepancies due to unmodelled physics. Here, the true system has a localised nonlinearity under ground-motion excitation, whose location and nature are unknown to the modeller. We use a Gaussian-Process Latent Force Model (GP-LFM) to identify the missing physics through GP-modelled latent forces.",
      embed: "/animation-model-form-errors.html",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=0MO0ArAAAAAJ&citation_for_view=0MO0ArAAAAAJ:u5HHmVD_uO8C",
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
};
