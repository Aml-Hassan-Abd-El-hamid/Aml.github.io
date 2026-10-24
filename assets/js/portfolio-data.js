window.portfolioData = {
  profile: {
    name: "Aml Hassan Esmail",
    role: "AI Engineer / Data Scientist",
    headline: "Applied Scientist II at Microsoft",
    location: "Egypt (Hybrid)",
    summary:
      "AI Engineer and Data Scientist with 3+ years of experience designing data pipelines, evaluating models, fine-tuning LLMs, and shipping production-ready AI systems.",
    email: "aml.hassan.esmil@gmail.com",
    phoneDisplay: "+20 101 813 3304",
    phoneLink: "+201018133304",
    linkedin: "https://www.linkedin.com/in/aml-hassan-esmail/",
    github: "https://github.com/Aml-Hassan-Abd-El-hamid",
    medium: "https://medium.com/@amlhassanabdelhamid"
  },
  availability: {
    title: "Open to new opportunities and freelance projects",
    description:
      "I am currently looking for impactful AI opportunities and available for freelance work in LLM applications, agentic systems, and end-to-end data science delivery."
  },
  highlights: [
    "3+ years building AI and data systems for production use",
    "50% improvement in product image-text matching via BLIP fine-tuning",
    "1k+ Arabic news articles extracted in a single automated run"
  ],
  skillGroups: [
    {
      title: "Data Science & Analytics",
      items: [
        "Statistical model evaluation",
        "Exploratory data analysis",
        "Pandas and SQL",
        "Experiment design",
        "Data pipeline development (ingestion, cleaning, transformation)"
      ]
    },
    {
      title: "Generative AI & Agentic Frameworks",
      items: [
        "Agentic AI system design",
        "LangGraph and multi-agent orchestration",
        "RAG pipelines",
        "Prompt engineering",
        "LLM fine-tuning (Arabic and English)"
      ]
    },
    {
      title: "Machine Learning / Deep Learning",
      items: [
        "PyTorch",
        "Vision-language models (BLIP, CLIP)",
        "Text-to-Speech pipelines",
        "Whisper",
        "SentenceTransformer"
      ]
    },
    {
      title: "Data Platforms & Deployment",
      items: [
        "FAISS vector search",
        "Unstructured data processing (PDF, HTML, image, audio-to-text)",
        "Microsoft Azure and Azure AI Foundry",
        "FastAPI and REST APIs",
        "CI/CD with GitHub Actions"
      ]
    }
  ],
  experience: [
    {
      role: "Applied Scientist II",
      company: "Microsoft",
      period: "May 2026 - Present",
      location: "Egypt (Hybrid)",
      bullets: [
        "Part of the CoreAI Applied Engineering team, building and deploying agentic AI solutions and LLM-powered pipelines for enterprise clients.",
        "Delivering solutions using Azure AI Foundry and Semantic Kernel with production-focused quality and reliability."
      ]
    },
    {
      role: "Applied Scientist",
      company: "Microsoft",
      period: "Dec 2024 - May 2026",
      location: "Egypt (Hybrid)",
      bullets: [
        "Designed and implemented rule-based and AI-driven pipelines to enrich large-scale e-commerce data with high-quality product images.",
        "Ran controlled experiments across multiple vision-language models and fine-tuned BLIP with contrastive learning.",
        "Achieved a 50% improvement in product image-text matching accuracy and optimized models for scalable inference.",
        "Partnered with the Copilot team on shopping integration, prompt quality evaluation, and model experimentation."
      ]
    },
    {
      role: "Data Scientist",
      company: "WideBot",
      period: "Feb 2024 - Nov 2024",
      location: "Egypt (Hybrid)",
      bullets: [
        "Automated TTS data pipelines (collection, cleaning, force-alignment, and sliding-window processing), boosting production capacity by 300%.",
        "Fine-tuned XTTS V2 and fish-speech models for Egyptian dialect generation.",
        "Fine-tuned language models for Arabic summarization and evaluated with cosine-similarity metrics (73-94% accuracy).",
        "Designed and deployed production FastAPI services for text summarization and TTS workloads."
      ]
    },
    {
      role: "Coding Instructor (Project-Based)",
      company: "iSchool",
      period: "Nov 2023 - Feb 2024",
      location: "Remote",
      bullets: [
        "Taught Python and CS fundamentals to 80+ students (ages 10-12) through project-based learning."
      ]
    },
    {
      role: "AI Engineer (Project-Based)",
      company: "Flower Labs",
      period: "Jul 2023 - Nov 2023",
      location: "Germany (Remote)",
      bullets: [
        "Built an open-source federated learning system replicating a research paper on gradient-boosting trees across 6 datasets.",
        "Worked with Flower, Hydra, W&B, Poetry, PyTorch, and XGBoost to structure reproducible experiments."
      ]
    }
  ],
  featuredProjects: [
    {
      title: "Multi-Agent Web Scraping System",
      summary:
        "Built an AI-powered scraping workflow that generates extraction logic directly from website HTML, avoiding manual CSS selector work.",
      highlights: [
        "Designed a multi-agent orchestrator for link extraction and structural page clustering.",
        "Reused generated extraction logic across similar templates for efficient batch processing.",
        "Extracted 1k+ Arabic news articles in one run with only 3 LLM calls, pagination support, and deduplication."
      ],
      tags: ["Agentic AI", "LLMs", "Web scraping"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/AI-Agent-for-Web-Scraping",
      linkLabel: "View project on GitHub"
    },
    {
      title: "Arabic Islamic Inheritance RAG System",
      summary:
        "Implemented a retrieval-augmented generation system for complex Islamic inheritance questions using dense retrieval and generation.",
      highlights: [
        "Built multi-format ingestion for JSON Q&A data and TXT corpora.",
        "Tested three embedding models and integrated Qwen2.5:7B via Ollama.",
        "Improved answer accuracy by 12.5% over baseline generation."
      ],
      tags: ["RAG", "FAISS", "SentenceTransformer", "PyTorch"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/Islamic-inheritance-using-AI-qias-2025/tree/main/RAG",
      linkLabel: "View project on GitHub"
    },
    {
      title: "Bilingual Text Clustering (Arabic/English)",
      summary:
        "Developed a fast bilingual clustering pipeline using Louvain community detection and embedding-model benchmarking.",
      highlights: [
        "Benchmarked multiple embedding backbones for speed/quality trade-offs.",
        "Optimized clustering for practical multilingual text analytics use."
      ],
      tags: ["NLP", "Clustering", "SentenceTransformer", "PyTorch"],
      link: "articles/clustering-bilingual-texts-ar-en.html",
      linkLabel: "Read project article"
    },
    {
      title: "AI Lip Sync Application",
      summary:
        "Built a lip-sync app with Wav2Lip + Streamlit to synchronize image/video lip movement with arbitrary speech audio.",
      highlights: ["Supports multilingual audio input.", "Reached 40+ GitHub stars."],
      tags: ["Wav2Lip", "Streamlit", "Generative media"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/ai-lip-sync-app",
      linkLabel: "View project on GitHub"
    },
    {
      title: "Semantic Search in Text",
      summary:
        "Built an asymmetric semantic-search system for query-to-document retrieval and compared embedding and distance-metric strategies.",
      highlights: [
        "Experimented with multiple embedding models for retrieval quality.",
        "Evaluated distance metrics to optimize query-to-text matching performance."
      ],
      tags: ["Semantic Search", "NLP", "Embeddings"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/Semantic-Search-in-articles-using-NLP",
      linkLabel: "View project on GitHub"
    },
    {
      title: "Cat Breed Classification",
      summary:
        "Developed a full-stack web app to classify cat breeds using a curated multi-source image dataset.",
      highlights: [
        "Combined three datasets with Google Images to strengthen dataset coverage.",
        "Used PyTorch for modeling with Flask backend and custom front-end."
      ],
      tags: ["Computer Vision", "PyTorch", "Flask"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/cat-breeds-classification-website",
      linkLabel: "View project on GitHub"
    },
    {
      title: "Fraud Detection using Federated Learning",
      summary:
        "Built a cross-silo federated fraud-detection pipeline and banking demo application as a graduation project.",
      highlights: [
        "Reached 98% accuracy and 93% AUC on fraud detection.",
        "Applied federated-learning training flow across distributed data silos."
      ],
      tags: ["Federated Learning", "Fraud Detection", "Machine Learning"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/Fraud_Detection_using_Federated_Learning_AND_bank_application",
      linkLabel: "View project on GitHub"
    },
    {
      title: "RiverPay Exception Agent",
      summary:
        "Designed an agentic fraud-operations decision engine that applies deterministic policy rules with evidence lookups and safety gates.",
      highlights: [
        "Implemented policy-driven decisioning over event, customer, ledger, and sanctions evidence.",
        "Added rulebook compiler and validation tests to keep behavior reproducible and auditable."
      ],
      tags: ["Agentic AI", "FinTech", "Policy Engine", "Testing"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/fraud_detection_agentic_solution",
      linkLabel: "View project on GitHub"
    },
    {
      title: "The Finder (Arabic Product Similarity Search)",
      summary:
        "Built an Arabic-first product similarity search app under tight time constraints using multilingual embeddings.",
      highlights: [
        "Evaluated model options for Arabic product matching quality and latency.",
        "Delivered a working Streamlit demo for semantic product retrieval."
      ],
      tags: ["Semantic Search", "Arabic NLP", "Streamlit"],
      link: "https://github.com/Aml-Hassan-Abd-El-hamid/The-finder",
      linkLabel: "View project on GitHub"
    }
  ],
  publications: [
    {
      title: "Gumball at QIAS 2025 Shared Task: Arabic LLM Automated Reasoning in Islamic Inheritance",
      authors: "Aml Hassan Esmail, Eman Elrefai, Mohamed Lotfy Elrefai",
      venue: "ArabicNLP Conference 2025 (Association for Computational Linguistics)"
    }
  ],
  education: [
    {
      title: "B.Sc. in Computer Engineering",
      details:
        "Faculty of Engineering (Shoubra), Benha University (2018-2023) - GPA: 3.0 (80.53%)"
    },
    {
      title: "Graduation Project - Fraud Detection with Federated Learning",
      details:
        "Delivered 98% accuracy and 93% AUC using a cross-silo federated learning model. Grade: Excellent."
    }
  ],
  certificates: [
    "Machine Learning Cross-Skilling Nanodegree - Udacity",
    "CS50's Introduction to Computer Science - Harvard"
  ],
  articles: [
    {
      title: "Building Secure LLM Applications: A Practical 14-Point Checklist Based on OWASP 2026",
      url: "articles/owasp-llm-security-checklist-2026.html",
      publication: "Portfolio Draft",
      description:
        "A practical security checklist for building safer LLM-powered applications, based on OWASP GenAI Top 10 (2026)."
    },
    {
      title: "What's Federated Learning and why is it needed?",
      url: "articles/federated-learning-why-needed.html",
      publication: "Portfolio Article",
      description:
        "A practical introduction to federated learning, why it matters, and core categories of FL setups."
    },
    {
      title: "My Experience during Summer of Reproducibility with Flower",
      url: "articles/summer-of-reproducibility-flower.html",
      publication: "Portfolio Article",
      description:
        "A write-up of my reproducibility journey while building federated learning experiments with Flower."
    },
    {
      title: "Clustering bilingual texts -Arabic and English-",
      url: "articles/clustering-bilingual-texts-ar-en.html",
      publication: "Portfolio Article",
      description:
        "How I approached fast bilingual clustering and benchmarked embedding models for quality and speed."
    }
  ]
};
