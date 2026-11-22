"use client";

import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, BrainCircuit, Database, Layers3, Sparkles, GraduationCap,
  BriefcaseBusiness, FlaskConical, Users, ExternalLink, Download, MapPin
} from "lucide-react";

const skills = [
  { title: "Programming & Frameworks", items: ["Python", "C", "C++", "Java", "PHP", "Django", "Flask"] },
  { title: "AI & Machine Learning", items: ["Machine Learning", "NLP", "CNN / Computer Vision", "Predictive Modelling", "Generative AI research"] },
  { title: "Web & Data", items: ["HTML & CSS", "JavaScript", "React", "Node.js", "SQLite", "Excel (Advanced)", "Tableau", "Power BI"] },
  { title: "DevOps & Tools", items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git & GitHub", "Maven", "Bash", "Figma"] },
];

const projects = [
  {
    number: "01",
    title: "Hybrid Cryptography Based Secure Messaging System",
    type: "Full-stack security project · Jan–Jun 2026",
    description: "A secure messaging system with end-to-end encryption and digital signatures. I built the Flask and SQLite backend and worked in a 3-member team that kept the cryptography logic separate from the application logic.",
    tags: ["Python", "Flask", "SQLite", "Cryptography"],
    status: "Published · TIJER 2026",
    icon: "lock",
  },
  {
    number: "02",
    title: "Blood Cancer Prediction Model",
    type: "Deep learning project · Sep–Dec 2025",
    description: "A CNN model for blood cell cancer detection from peripheral blood smear images, paired with a real-time Streamlit dashboard for patient-level analysis.",
    tags: ["CNN", "Deep Learning", "Streamlit", "Healthcare"],
    status: "Published · IJERT 2025",
    icon: "health",
    link: "https://github.com/manya954/blood_cancer_cell",
  },
  {
    number: "03",
    title: "Crop Yield Prediction using Climate & Genomic Data",
    type: "Applied ML research · Feb–Apr 2025",
    description: "A crop yield prediction model built on climate data and NDVI-based genomics, aimed at scalable, data-driven insights for climate-resilient agriculture.",
    tags: ["Machine Learning", "NDVI", "Climate Data", "Genomics"],
    status: "Published · IFSC & SSRN 2025",
    icon: "sprout",
    link: "https://github.com/manya954/crop_yeild_prediction_NDVI",
  },
  {
    number: "04",
    title: "Aarambh — Patient Flow & Resource Optimization",
    type: "Smart India Hackathon 2024",
    description: "A hospital solution that optimizes patient flow and bed management, designed to integrate with city-wide healthcare systems.",
    tags: ["Healthcare", "Optimization", "Dashboard"],
    status: "Hackathon project",
    icon: "health",
  },
  {
    number: "05",
    title: "Ghanist — Legal Document Organization Platform",
    type: "Battlefield 2022",
    description: "A secure, real-time legal document platform with smart categorization and easy sharing.",
    tags: ["Web", "Security", "Document Management"],
    status: "Hackathon project",
    icon: "lock",
  },
];

const publications = [
  { title: "Hybrid Cryptography-Based Secure Messaging System with End-to-End Encryption & Digital Signatures", venue: "Technix International Journal for Engineering Research (TIJER)", year: "2026" },
  { title: "CNN-Based Leukemia Detection from Peripheral Blood Smear Images", venue: "International Journal of Engineering Research & Technology (IJERT)", year: "2025" },
  { title: "Crop Yield Prediction Using Weather, Genomic Data & NDVI Time Series Analysis", venue: "IFSC 2025 · SSRN", year: "2025" },
  { title: "Integrating NLP with Climate & Genomic Data for Resilient Crop Breeding", venue: "World Conf. of Agriculture & Civil Engg. · IJDSBDA", year: "2024" },
  { title: "Generative AI for Enhancing Climate Resilience & Plant Breeding", venue: "SSRN", year: "2024" },
];

const milestones = [
  { role: "AI Intern", org: "Recilens Corporation · Jul – Oct 2025", detail: "Built a web-based AI platform for context-aware conversations with NLP/ML and threat recommendation. Optimised ML performance and deployed with Docker and automated Jenkins CI/CD pipelines.", icon: BriefcaseBusiness },
  { role: "Data Analytics Intern", org: "Edulyt India · Jun – Jul 2024", detail: "Analysed credit banking statements to extract trends and patterns, using Excel, Python and NLP for data cleaning, visualization and financial dashboards.", icon: Database },
  { role: "Board of Director", org: "Devity Club · Jun 2026 – Present", detail: "Part of the club's board, guiding direction for student community and technology initiatives.", icon: Users },
  { role: "Club Advisor", org: "Devity Club · Apr 2025 – May 2026", detail: "Advised the club's leadership and mentored members on events and technical activities.", icon: Users },
  { role: "Vice President", org: "Devity Club · Sep 2024 – Mar 2025", detail: "Supported student community initiatives, coordination, and technology-focused campus activities.", icon: Users },
  { role: "UI/UX Lead", org: "Google Developer Club · Aug 2023 – Sep 2024", detail: "Led student design activities and worked in Figma on interface and landing-page concepts.", icon: Layers3 },
  { role: "Microsoft Learn Student Ambassador", org: "Alpha Batch milestone", detail: "Engaged with the Microsoft Learn Student Ambassador community and continued learning through the program.", icon: Sparkles },
];

function ProjectGlyph({ kind }: { kind: string }) {
  if (kind === "lock") return <Code2 size={21} />;
  if (kind === "sprout") return <FlaskConical size={21} />;
  return <BrainCircuit size={21} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const nav = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
    ["Publications", "#publications"], ["Journey", "#journey"], ["Contact", "#contact"],
  ];

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">M</span><span>manya<span className="brand-dot">.</span></span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></div>
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1>Manya <span>Sinha</span><i>.</i></h1>
          <h2>Computer Science Graduate <span className="muted-break">|</span><br className="desktop-break" /> Exploring <em>AI Innovation.</em></h2>
          <p className="hero-description">Computer Science graduate with two internships and five publications in AI, NLP and machine learning, building solutions across healthcare, agriculture, finance and security.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowRight size={16} /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/manya954" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/manya-sinha2004" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:manyasinha50@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <span className="social-caption">Find me around the web</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract purple technology illustration">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
          <div className="art-core"><span className="core-glow" /><BrainCircuit size={76} strokeWidth={1.1} /></div>
          <div className="float-card card-code"><Code2 size={16} /><span>build()</span><b>with curiosity</b></div>
          <div className="float-card card-ai"><Sparkles size={16} /><span>AI × Ideas</span></div>
          <div className="art-caption"><span>01 / 04</span><span>LEARN · BUILD · ITERATE</span></div>
        </div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading"><span className="section-index">01 — ABOUT</span><h2>A little about <em>me.</em></h2></div>
        <div className="about-grid">
          <div className="about-lead"><p className="large-copy">I&apos;m a computer science graduate who builds and publishes work in <em>artificial intelligence</em>, from predictive models to secure software.</p></div>
          <div className="about-detail">
            <p>I enjoy turning complex data into practical insight. My work spans machine learning, NLP and computer vision, with projects in healthcare, agriculture, finance and legal tech, and research published in journals and conferences.</p>
            <p>Beyond code, I value collaboration, design thinking, and the communities that make learning more meaningful.</p>
            <div className="about-facts">
              <div><GraduationCap size={18} /><span><b>Amity University</b><small>B.Tech · Computer Science · 2022–2026</small></span></div>
              <div><MapPin size={18} /><span><b>India</b><small>Open to opportunities</small></span></div>
            </div>
          </div>
        </div>
        <div className="stats-strip">
          <div><strong>8.91</strong><span>CGPA</span></div>
          <div><strong>05</strong><span>Publications</span></div>
          <div><strong>02</strong><span>Internships</span></div>
          <div><strong>05</strong><span>Projects</span></div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <div className="section-heading"><span className="section-index">02 — TOOLKIT</span><h2>Things I work <em>with.</em></h2><p>The languages, frameworks and tools I use to build and ship.</p></div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-top"><span className="skill-number">0{index + 1}</span><span className="skill-icon">{index === 0 ? <Code2 /> : index === 1 ? <BrainCircuit /> : index === 2 ? <Sparkles /> : <Database />}</span></div>
              <h3>{group.title}</h3>
              <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="small-note">Depth varies by tool and topic; I keep learning as projects demand.</p>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <div className="section-heading heading-row"><div><span className="section-index">03 — SELECTED WORK</span><h2>Ideas turned into <em>projects.</em></h2></div><span className="side-note">Builds, research<br />and hackathon work</span></div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-meta"><span>{project.type}</span><span className="project-status">{project.status}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={13} /></a>}
              </div>
              <div className="project-symbol"><ProjectGlyph kind={project.icon} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap publications-section" id="publications">
        <div className="section-heading"><span className="section-index">04 — PUBLICATIONS</span><h2>Research in <em>print.</em></h2><p>Peer-reviewed papers and preprints across security, healthcare AI and climate-resilient agriculture.</p></div>
        <div className="pub-list">
          {publications.map((pub) => (
            <article className="pub-item" key={pub.title}>
              <span className="pub-year">{pub.year}</span>
              <div><h3>{pub.title}</h3><p>{pub.venue}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap journey-section" id="journey">
        <div className="section-heading"><span className="section-index">05 — THE JOURNEY</span><h2>Learning, leading & <em>growing.</em></h2><p>Internships, leadership roles and communities that have shaped my journey.</p></div>
        <div className="journey-layout">
          <div className="education-card">
            <span className="section-index">EDUCATION</span>
            <GraduationCap size={28} />
            <h3>Bachelor of Technology</h3>
            <p>Computer Science & Engineering</p>
            <div className="education-divider" />
            <div className="education-bottom"><span>Amity University Chhattisgarh, Raipur</span><strong>8.91 CGPA</strong></div>
          </div>
          <div className="timeline">
            {milestones.map((item) => {
              const Icon = item.icon;
              return <article className="timeline-item" key={item.role}>
                <div className="timeline-icon"><Icon size={18} /></div>
                <div><span className="timeline-org">{item.org}</span><h3>{item.role}</h3><p>{item.detail}</p></div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap research-section">
        <div className="research-panel">
          <div className="research-orb"><FlaskConical size={34} /></div>
          <div className="research-copy"><span className="section-index">06 — RESEARCH INTERESTS</span><h2>Questions worth <em>exploring.</em></h2><p>My research has focused on applied AI, from generative AI and NLP for climate-resilient crop breeding to CNN-based medical imaging and secure systems. I want to keep working where AI meets healthcare and agriculture.</p><div className="research-tags"><span>Generative AI</span><span>NLP</span><span>Computer Vision</span><span>AI for Good</span></div></div>
          <div className="research-mark">R&amp;D<span> / 2026</span></div>
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <span className="section-index">07 — WHAT&apos;S NEXT?</span>
        <h2>Have an idea?<br /><em>Let&apos;s build something.</em></h2>
        <p>I&apos;m open to conversations, collaborations, and opportunities where I can learn, contribute, and grow.</p>
        <a className="button button-primary contact-button" href="mailto:manyasinha50@gmail.com">Say hello <ArrowUpRight size={17} /></a>
        <div className="contact-links">
          <a href="https://github.com/manya954" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
          <a href="https://www.linkedin.com/in/manya-sinha2004" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a>
          <a href="mailto:manyasinha50@gmail.com"><Mail size={17} /> Email <ExternalLink size={13} /></a>
        </div>
      </section>

      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">M</span><span>manya<span className="brand-dot">.</span></span></a><span>Designed with curiosity. Built with intention.</span><span>© {new Date().getFullYear()} Manya Sinha</span></footer>
    </main>
  );
}
