(function () {
  "use strict";

  const data = window.portfolioData;
  if (!data) {
    return;
  }

  const selectAll = (selector) => Array.from(document.querySelectorAll(selector));

  const setText = (selector, value) => {
    selectAll(selector).forEach((node) => {
      node.textContent = value;
    });
  };

  const setHref = (selector, href) => {
    selectAll(selector).forEach((node) => {
      node.setAttribute("href", href);
    });
  };

  const toMail = (email) => "mailto:" + email;
  const toTel = (phone) => "tel:" + phone;

  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    if (typeof text === "string") {
      element.textContent = text;
    }
    return element;
  };

  const applyLinkTarget = (linkElement, href, openInNewTab) => {
    linkElement.setAttribute("href", href);
    if (openInNewTab) {
      linkElement.setAttribute("target", "_blank");
      linkElement.setAttribute("rel", "noopener noreferrer");
      return;
    }
    linkElement.removeAttribute("target");
    linkElement.removeAttribute("rel");
  };

  const renderHighlights = () => {
    const list = document.getElementById("highlights-list");
    if (!list || !Array.isArray(data.highlights)) {
      return;
    }

    list.replaceChildren();
    data.highlights.forEach((entry) => {
      list.appendChild(createElement("li", "", entry));
    });
  };

  const renderSkillGroups = () => {
    const container = document.getElementById("skills-grid");
    if (!container || !Array.isArray(data.skillGroups)) {
      return;
    }

    container.replaceChildren();
    data.skillGroups.forEach((group) => {
      const card = createElement("article", "skill-card");
      card.appendChild(createElement("h3", "", group.title));

      const list = createElement("ul", "skill-list");
      group.items.forEach((item) => {
        list.appendChild(createElement("li", "", item));
      });

      card.appendChild(list);
      container.appendChild(card);
    });
  };

  const renderExperience = () => {
    const container = document.getElementById("experience-list");
    if (!container || !Array.isArray(data.experience)) {
      return;
    }

    container.replaceChildren();
    data.experience.forEach((job) => {
      const item = createElement("article", "timeline-item");
      item.appendChild(createElement("h3", "timeline-role", job.role));
      item.appendChild(createElement("p", "timeline-company", job.company));
      item.appendChild(
        createElement("p", "timeline-meta", job.period + " | " + job.location)
      );

      const bullets = createElement("ul", "timeline-bullets");
      job.bullets.forEach((bullet) => {
        bullets.appendChild(createElement("li", "", bullet));
      });

      item.appendChild(bullets);
      container.appendChild(item);
    });
  };

  const renderProjectCards = (containerId, projects) => {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(projects)) {
      return;
    }

    container.replaceChildren();
    projects.forEach((project) => {
      const card = createElement("article", "project-card");
      card.appendChild(createElement("h3", "", project.title));
      card.appendChild(createElement("p", "", project.summary));

      if (Array.isArray(project.highlights) && project.highlights.length) {
        const highlights = createElement("ul", "project-highlights");
        project.highlights.forEach((detail) => {
          highlights.appendChild(createElement("li", "", detail));
        });
        card.appendChild(highlights);
      }

      if (Array.isArray(project.tags) && project.tags.length) {
        const tagList = createElement("div", "project-tags");
        project.tags.forEach((tag) => {
          tagList.appendChild(createElement("span", "tag", tag));
        });
        card.appendChild(tagList);
      }

      if (project.link) {
        const link = createElement("a", "card-link", project.linkLabel || "Learn more");
        applyLinkTarget(link, project.link, Boolean(project.openInNewTab));
        card.appendChild(link);
      }

      container.appendChild(card);
    });
  };

  const renderArticles = (containerId, limit) => {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(data.articles)) {
      return;
    }

    container.replaceChildren();
    const entries = typeof limit === "number" ? data.articles.slice(0, limit) : data.articles;

    entries.forEach((article) => {
      const card = createElement("article", "article-card");
      const title = createElement("h3", "");
      const titleLink = createElement("a", "", article.title);
      applyLinkTarget(titleLink, article.url, Boolean(article.openInNewTab));
      title.appendChild(titleLink);

      const meta = createElement("p", "article-meta", article.publication);
      const description = createElement("p", "", article.description);
      const link = createElement("a", "card-link", "Read article");
      applyLinkTarget(link, article.url, Boolean(article.openInNewTab));

      card.append(title, meta, description, link);
      container.appendChild(card);
    });
  };

  const renderSimpleList = (containerId, entries) => {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(entries)) {
      return;
    }

    container.replaceChildren();
    entries.forEach((entry) => {
      const item = createElement("li", "");
      item.appendChild(createElement("h3", "", entry.title));
      item.appendChild(createElement("p", "", entry.details));
      container.appendChild(item);
    });
  };

  const renderCertificates = () => {
    const container = document.getElementById("certificates-list");
    if (!container || !Array.isArray(data.certificates)) {
      return;
    }

    container.replaceChildren();
    data.certificates.forEach((certificate) => {
      const item = createElement("li", "");
      item.appendChild(createElement("p", "", certificate));
      container.appendChild(item);
    });
  };

  const renderPublications = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(data.publications)) {
      return;
    }

    container.replaceChildren();
    data.publications.forEach((publication) => {
      const item = createElement("li", "");
      item.appendChild(createElement("h3", "", publication.title));
      item.appendChild(
        createElement("p", "", publication.authors + " - " + publication.venue)
      );
      container.appendChild(item);
    });
  };

  const bindNavigation = () => {
    const nav = document.getElementById("site-nav");
    const toggle = document.querySelector(".js-nav-toggle");
    const toggleIcon = toggle ? toggle.querySelector(".bi") : null;

    if (!nav || !toggle || !toggleIcon) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggleIcon.classList.toggle("bi-list", !isOpen);
      toggleIcon.classList.toggle("bi-x", isOpen);
    });

    selectAll("#site-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggleIcon.classList.add("bi-list");
        toggleIcon.classList.remove("bi-x");
      });
    });
  };

  const bindSmoothScroll = () => {
    selectAll('a[data-scroll="true"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) {
          return;
        }

        const section = document.querySelector(targetId);
        if (!section) {
          return;
        }

        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const bindScrollSpy = () => {
    const links = selectAll("#site-nav a[data-section-link='true']");
    if (!links.length) {
      return;
    }

    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const updateActiveLink = () => {
      const fromTop = window.scrollY + 100;
      let activeSectionId = "";

      sections.forEach((section) => {
        if (section.offsetTop <= fromTop) {
          activeSectionId = section.id;
        }
      });

      links.forEach((link) => {
        const isActive = link.getAttribute("href") === "#" + activeSectionId;
        link.classList.toggle("active", isActive);
      });
    };

    window.addEventListener("scroll", updateActiveLink, { passive: true });
    updateActiveLink();
  };

  const bindBackToTop = () => {
    const button = document.querySelector(".back-to-top");
    if (!button) {
      return;
    }

    const toggleVisibility = () => {
      button.classList.toggle("is-visible", window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
  };

  const bindRoleCycler = () => {
    const roleNode = document.querySelector("[data-profile-role]");
    if (!roleNode) {
      return;
    }

    const roleCandidates = [
      data.profile.role,
      "Applied AI Systems Builder",
      "Agentic AI and RAG Specialist"
    ];
    const roles = roleCandidates.filter((value, index, source) => {
      return typeof value === "string" && value.length && source.indexOf(value) === index;
    });

    roleNode.textContent = roles[0] || "";
    if (roles.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let roleIndex = 0;
    window.setInterval(() => {
      roleNode.classList.add("is-switching");

      window.setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleNode.textContent = roles[roleIndex];
        roleNode.classList.remove("is-switching");
      }, 180);
    }, 3400);
  };

  const bindHeroTilt = () => {
    const card = document.querySelector(".hero-image-card");
    if (!card) {
      return;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    card.addEventListener("mousemove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      const rotateY = x * 9;
      const rotateX = -y * 9;
      card.style.transform =
        "perspective(900px) rotateX(" +
        rotateX.toFixed(2) +
        "deg) rotateY(" +
        rotateY.toFixed(2) +
        "deg) translateY(-3px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  };

  const bindScrollReveal = () => {
    const selectors = [
      ".section-heading",
      ".summary-card",
      ".availability-panel",
      ".skill-card",
      ".timeline-item",
      ".project-card",
      ".article-card",
      ".simple-list li",
      ".hero-image-card"
    ];

    const revealTargets = Array.from(
      new Set([...selectAll(".reveal-on-scroll"), ...selectAll(selectors.join(", "))])
    );
    if (!revealTargets.length) {
      return;
    }

    revealTargets.forEach((node, index) => {
      node.classList.add("reveal-on-scroll");
      node.style.setProperty("--reveal-delay", String((index % 7) * 55) + "ms");
    });

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      revealTargets.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    const immediateRevealOffset = window.innerHeight * 0.95;
    revealTargets.forEach((target) => {
      if (target.getBoundingClientRect().top <= immediateRevealOffset) {
        target.classList.add("is-visible");
        return;
      }
      observer.observe(target);
    });
  };

  const profile = data.profile;
  setText("[data-profile-name]", profile.name);
  setText("[data-profile-role]", profile.role);
  setText("[data-profile-headline]", profile.headline);
  setText("[data-profile-location]", profile.location);
  setText("[data-profile-summary]", profile.summary);
  setText("[data-availability-title]", data.availability.title);
  setText("[data-availability-description]", data.availability.description);
  setText("[data-current-year]", String(new Date().getFullYear()));

  setHref("[data-email-link]", toMail(profile.email));
  setHref("[data-phone-link]", toTel(profile.phoneLink));
  setHref("[data-linkedin-url]", profile.linkedin);
  setHref("[data-github-url]", profile.github);
  setHref("[data-medium-url]", profile.medium);

  setText("[data-email-text]", profile.email);
  setText("[data-phone-text]", profile.phoneDisplay);

  renderHighlights();
  renderSkillGroups();
  renderExperience();
  renderProjectCards("featured-projects-grid", data.featuredProjects);
  renderSimpleList("education-list", data.education);
  renderCertificates();
  renderPublications("publication-list");
  renderPublications("publication-list-extended");
  renderArticles("latest-articles-grid", 3);
  renderArticles("articles-grid");

  bindNavigation();
  bindSmoothScroll();
  bindScrollSpy();
  bindBackToTop();
  bindRoleCycler();
  bindHeroTilt();
  bindScrollReveal();
})();
