const SPONSOR_DECK_URL =
  "mailto:info@cybercamp.ai?subject=Call%20for%20sponsors%20%E2%80%94%20Cybercamp.ai";
const TICKETS_URL = "https://luma.com/cybercampai";
const CALL_FOR_PAPERS_URL = "https://sessionize.com/cybercampai";

const sessions = [
  {
    "id": "you-can-t-secure-what-you-don-t-control",
    "title": "You Can't Secure What You Don't Control",
    "description": "Everyone is talking about securing AI models, agents, and applications. But what if the biggest obstacle to AI security isn't AI at all?\n\nBefore organizations can meaningfully address AI security and compliance, they need to answer some uncomfortable questions: Do we know what assets we have? Where our data flows? Who or what has access to it? And can we prove that our security controls actually work?\n\nAI introduces new challenges, but it doesn't make the fundamentals of IT security obsolete. It makes getting them right even more important.\n\nIn this keynote, we'll explore why visibility, asset management, and control are prerequisites for secure AI adoption. We'll look at practical approaches to handling credentials, enforcing boundaries through AI gateways, and protecting sensitive information through data anonymization.\n\nMost importantly, we'll challenge the assumption that security depends on trusting every system, model, agent, or user to behave correctly.\n\nBecause when you can verify your controls, you don't have to rely on trust.",
    "speakers": [
      {
        "id": "marek-marx-grac",
        "name": "Marek 'marx' Grác",
        "role": "Principal Research Fellow · Red Hat",
        "photo": "assets/speaker-marek-grac.jpg",
        "bio": "Marek Grác is an AI and technology expert with over 20 years of experience in artificial intelligence, enterprise IT, and open-source technologies. He currently works at Red Hat, combining deep technical expertise with a practical understanding of complex IT environments.\n\nHis current focus includes AI compliance, AI security, and integrating AI into enterprise infrastructure. He also collaborates with academia on research challenges, bridging the gap between academic research and real-world applications. Alongside his work at Red Hat, he teaches at a university, helping the next generation understand how to design, evaluate, and deploy AI solutions that are secure, reliable, and aligned with real-world requirements.",
        "linkedin": "https://www.linkedin.com/in/marek-marx-gr%C3%A1c-8563756/"
      }
    ],
    "start": "09:00",
    "duration": 45,
    "track": "common",
    "kind": "Keynote"
  },
  {
    "id": "the-scanner-said-clean-we-ran-it-again-stochastic-false-negatives-in-vulnerability-detection",
    "title": "The Scanner Said Clean. We Ran It Again: Stochastic False Negatives in Vulnerability Detection",
    "description": "An LLM vulnerability scanner can miss a real bug on one run and find it on the next without signaling uncertainty.\n\nWe measured this failure in 25,000 trials across 50 models on a benchmark selected for on-and-off detection. A separate 7,600-run study tested rediscovery of 95 disclosed CVEs in OpenSSL, curl, GnuTLS and five other heavily audited projects.\n\nThe results challenge the usual \"pick the strongest model\" strategy: repeated passes help, but diverse inexpensive models cover complementary blind spots and outperform a costlier single model. We will show our open-source scanner finding - and missing - the same bug, reveal which intuitive pipeline additions failed to justify their cost, and examine the gap between broadly detectable JS and PHP bugs and stubbornly hard stateful C vulnerabilities. Attendees will learn how to measure cumulative detection, compare complementary coverage and identify cases needing other techniques, using the public benchmark, harness and scanner.",
    "speakers": [
      {
        "id": "petr-simecek",
        "name": "Petr Simecek",
        "role": "AI Researcher · AISLE",
        "photo": "assets/speaker-petr-simecek.jpg",
        "bio": "Biostatistician by training, time-series crystal-ball operator at Google and protein-knot entangler at Masaryk University. Petr now teaches cheap LLMs to distrust their own vulnerability reports at AISLE. This experiment has somehow put his name on 37 CVEs across OpenSSL, libpng, PostgreSQL, OpenEMR, and OpenClaw. The bugs apparently did not check his résumé. Co-author of HoF-Bench and an ICML 2026 workshop paper on stochastic scanner failures.",
        "linkedin": "https://www.linkedin.com/in/simecekpetr/"
      }
    ],
    "start": "09:55",
    "duration": 30,
    "track": "a",
    "kind": "Talk"
  },
  {
    "id": "poison-the-well-real-world-context-poisoning-attacks-against-ai-agents",
    "title": "Poison the Well: Real-world context poisoning attacks against AI agents",
    "description": "AI agents' inherent action radius exposes them to an ocean of potentially malicious input. And while emerging AI security tools are still heavily focused on prompt injection and supply chain attacks, context poisoning proves both very promising for attackers and difficult to detect, let alone defend for the defenders.\n\nAn exciting line of research, as well as real-world incidents paired with my own experiments and practical experience will take us into the intricacies of context poisoning attacks: we'll explain what these are, how they work, why they are so difficult to defend, while also summing up a brief overview of possible defense mechanisms. This is going to be a lecture where a potentially technically challenging topic will be illustrated with clever attackers' techniques, and a plenty of real-world examples to make the talk lighter and more engaging.",
    "speakers": [
      {
        "id": "radek-hendrych",
        "name": "Radek Hendrych",
        "role": "Staff Security Manager · Productboard",
        "photo": "assets/speaker-radek-hendrych.jpg",
        "bio": "I love to attack AI systems, and fell in love with AI security in general. My primary focus nowadays is agentic AI security, with strong emphasis on offensive testing through indirect prompt injection and context poisoning.\n\nAs a Staff Security Manager at Productboard, I have an opportunity to defend and test AI-powered functionalities and integrations at a world class company.\n\nIn the past, I did my fair share of competitive jailbreaking. Currently: #2 contributor on PromptIntel; #3 in overall rankings in Hackaprompt 2.0 CBRNE Practice rankings.\n\nMy contribution to AI security research lies in the Quasilisk program. It's an automated AI red teaming tool which tests LLM's for susceptibility to argument-based, alignment-drift-inducing attacks rather than prompt injection.",
        "linkedin": "https://www.linkedin.com/in/radek-hendrych-818078336/"
      }
    ],
  },
  {
    "id": "20-minutes-to-a-more-secure-agent",
    "title": "20 minutes to a more secure agent",
    "description": "Enough theory. Let's roll up our sleeves and get practical. In this workshop, we'll have a look at the most practical, least technically challenging open-source tools which help us protect us and our agents from harm. We'll cover OpenClaw, Hermes, Claude Code and Codex, and learn how to prevent these agents from accidentally deleting or leaking your data, while preserving their usability.",
    "speakers": [
      {
        "id": "radek-hendrych",
        "name": "Radek Hendrych",
        "role": "Staff Security Manager · Productboard",
        "photo": "assets/speaker-radek-hendrych.jpg",
        "bio": "I love to attack AI systems, and fell in love with AI security in general. My primary focus nowadays is agentic AI security, with strong emphasis on offensive testing through indirect prompt injection and context poisoning.\n\nAs a Staff Security Manager at Productboard, I have an opportunity to defend and test AI-powered functionalities and integrations at a world class company.\n\nIn the past, I did my fair share of competitive jailbreaking. Currently: #2 contributor on PromptIntel; #3 in overall rankings in Hackaprompt 2.0 CBRNE Practice rankings.\n\nMy contribution to AI security research lies in the Quasilisk program. It's an automated AI red teaming tool which tests LLM's for susceptibility to argument-based, alignment-drift-inducing attacks rather than prompt injection.",
        "linkedin": "https://www.linkedin.com/in/radek-hendrych-818078336/"
      }
    ],
  },
  {
    "id": "agentic-ai-in-threat-intelligence-llms-and-beyond",
    "title": "Agentic AI in Threat Intelligence: LLMs and Beyond",
    "description": "A year ago, we built a small AI agent in n8n to help our threat intelligence team decide whether a domain was malicious or a false positive. It worked well enough that it kept getting more responsibility. Today it judges domains from real customer DNS traffic every day, publishes the malicious ones to our blocklist, and acts as the ground truth when we benchmark Whalebone against competitors. This talk follows that journey and what we learned along the way.\n\nWe'll start with the first version: an orchestrator agent backed by sub-agents, each summarizing one threat intelligence source such as VirusTotal, Safe Browsing or our own IoC database. Then we'll show how and why we redesigned the pipeline. Evidence got lost between agents and biases crept in, so we moved data gathering and normalization into deterministic code and kept the LLM for what it does best: weighing the evidence and making a call. Along the way we hit plenty of pitfalls. API errors quietly became \"benign\" verdicts. The agent was confidently wrong about legitimate infrastructure. And the agent's own mistakes fed back into the system it was supposed to measure, while our metrics went up and looked like success.\n\nRunning this in production also meant living with hard limits: daily API quotas, a fixed token budget, and a pipeline that has to finish in time to be useful. We'll share how those constraints shaped the design, from caching and retries to deciding which sources are worth a call.\n\nTo know whether a change actually helped, we built an offline test harness. It uses a hand-labelled dataset and replayable API responses, so we can compare prompt versions fairly. We'll explain how we created the test data, and why we check how stable the verdicts are, not just how accurate.\n\nWe'll also compare our heavily tuned prompt with a version built on Jev, a specialized model that answers structured, typed questions instead of following one long prompt. It came close in accuracy at a fraction of the time. That raised an honest question about where prompt engineering pays off and where it doesn't.\n\nUnderneath the technical story is a shift in how we think about AI work: from output to outcome. Early on, the approach was close to \"throw it at the AI and see what comes back\", and the AI's verdict was the result. A verdict is only an output, though. The outcome we care about is a correct blocking decision, and the AI rarely gets there alone. We are now moving to a model where the AI provides one classification signal, and that signal is combined with other, cheaper and more predictable signals into a final score. This changes where AI belongs in the pipeline and how much we ask of it.\n\nThat leads to a broader question: how to organize work that uses AI without \"tokenmaxxing\", where every problem gets more prompts, more agents and more tokens. We'll share how we decide what to give a model and what to keep in plain code, how to scope AI tasks so their results can be measured and combined, and how to keep the team focused on outcomes rather than on clever prompts.\n\nThe talk closes with the lessons we took away from a year of running agentic AI in production, and where we plan to take it next.",
    "speakers": [
      {
        "id": "roman-oravec",
        "name": "Roman Oravec",
        "role": "Threat Intelligence Specialist · Whalebone",
        "photo": "assets/speaker-roman-oravec.jpg",
        "bio": "Roman Oravec is a Threat Intelligence Specialist at Whalebone, a cybersecurity company that protects millions of people at the network level through telco operators. With a background in security research and application security, he brings an attacker's mindset to threat intelligence: evaluating the quality of threat data, measuring how well protection actually works, and building systems that turn raw intelligence into blocking decisions. Over the past year, much of his work has focused on bringing AI agents into threat intelligence workflows and finding ways to trust what they decide.\n\nHe is particularly interested in how AI can make security decisions that are fast, cost-effective and, above all, verifiable.",
        "linkedin": "https://www.linkedin.com/in/roman-oravec/",
        "sessionRole": "main"
      },
      {
        "id": "martin-kuruc",
        "name": "Martin Kuruc",
        "role": "Threat Intelligence Lead at Whalebone",
        "photo": "assets/speaker-martin-kuruc.jpg",
        "bio": "Intelligence and security background, with experience across different security fields, with past 5 years focusing on the Cybersecurity and Cyber Threat Intelligence",
        "linkedin": "",
        "sessionRole": "co",
        "isPlaceholder": false
      }
    ],
    "start": "09:55",
    "duration": 45,
    "track": "b",
    "kind": "Talk"
  },
  {
    "id": "99-accuracy-still-hijacked-lessons-from-building-a-custom-prompt-injection-gate",
    "title": "99% Accuracy, Still Hijacked: Lessons from Building a Custom Prompt Injection Gate",
    "description": "Training a detector with high accuracy is easy, making it reliably work in real life is hard. Over the past months I've trained and evaluated local prompt injection detectors, and learned that the benchmark is usually the weakest part of the pipeline: models learn trigger phrases and dataset artifacts instead of what an injection actually is. Thus, prompt injection detectors routinely report 95–99% accuracy on public benchmarks, and still fail in practice. I tried to solve the problem in the following way.\n\nThis talk covers three things. First, an exploratory analysis of public prompt-attack datasets: what is wrong with them, and why models trained on them look great on tests and fail on real traffic. Second, generating better data: attacks that look like ordinary user conversation and hard negatives that look malicious but aren’t, with practical tips and tricks. Third, use that data for fine-tuning with an eye on what matters in production: calibration, threshold setting, and the false-positive rate that decides whether your detector stays switched on.\n\nHere are my mistakes for you to avoid and have a chance to make your own instead.",
    "speakers": [
      {
        "id": "marina-volkova",
        "name": "Marina Volkova",
        "role": "AI Researcher · Emplifi",
        "photo": "assets/speaker-marina-volkova.jpg",
        "bio": "Marina Volkova, PhD is a data scientist and AI/ML practitioner with more than 15 years of experience turning complex models into real-world systems. Trust has run through her career, from her PhD on how explanations help people trust AI systems to her work securing the AI systems now being deployed at scale.\n\nAt Emplifi, MV works with the Innovations team on the security and reliability of agentic AI. Trust Layer, the protection framework she developed, defends AI agents and their users through PII protection, prompt injection detection, and user safety safeguards. Her work also spans rigorous evaluation methods and more transparent, auditable agent behavior.",
        "linkedin": "https://www.linkedin.com/in/marina-volkova-phd/"
      }
    ],
    "start": "10:50",
    "duration": 30,
    "track": "b",
    "kind": "Talk"
  },
  {
    "id": "yolo-mode-isolated-by-design-how-docker-s-sandboxes-change-what-allow-all-means",
    "title": "YOLO mode, isolated by design. How Docker's sandboxes change what \"allow all\" means",
    "description": "Agentic AI. The dream. We gave AI agents our terminals. Then our repositories. Then our credentials. And then we clicked \"allow all\", because nobody has time to approve every npm install.\n\nAnd the dream became a nightmare.\n\nLet's be honest: YOLO mode is how most of us work now Prove me I am wrong! The question isn't if your agent will do something unexpected and dangerous. The question is where it will happen, and how quickly.\n\nWell, we can contain agents in containers, don't we? Well, yes, containers are great tool, I love them, I'm a Docker Captain after all. But a container shares the kernel with your machine, and the code inside was written by an agent a few seconds ago. Nobody reviewed it. Not even the agent.\n\nIn this session we do something irresponsible on purpose. I'll give an AI agent full autonomy and a very bad idea, and we'll watch it try. Live. Inside Docker Sandboxes: a microVM per agent, its own kernel, its own Docker daemon, and boundaries for files, network and secrets set before the agent even starts.\n\nWill my laptop survive? Join me and find out.",
    "speakers": [
      {
        "id": "pawel-piwosz",
        "name": "Pawel Piwosz",
        "role": "Developer Advocate · UpCloud",
        "photo": "assets/speaker-pawel-piwosz.jpg",
        "bio": "Docker Captain. DevOps Institute Ambassador. CD.Foundation Ambassador. Engineer, leader, mentor, speaker.\n\n25+ years in IT, with the last decade focused on DevOps, cloud-native, platform engineering, and developer advocacy. I work on cloud infrastructure, Kubernetes, databases, AI infrastructure, and the engineering practices that make complex systems actually work.\n\nDeveloper Advocate at UpCloud, conference organizer, community builder, co-author of CI/CD Design Patterns, and co-host of the OhMyCloud! podcast. Built a maturity-model framework for assessing organizations' digital sovereignty readiness against NIS2, DORA, and GDPR, and speaks regularly on the topic at conferences. Unapologetic fan of technical talks that show the messy reality behind the architecture diagrams.",
        "linkedin": "https://www.linkedin.com/in/pawelpiwosz/"
      }
    ],
    "start": "11:30",
    "duration": 30,
    "track": "a",
    "kind": "Talk"
  },
  {
    "id": "the-assurance-gap-a-practical-method-for-scoring-ai-model-trust",
    "title": "The Assurance Gap: A Practical Method for Scoring AI Model Trust",
    "description": "A year ago, most enterprise AI ran through a frontier lab's API. That has changed fast. Open-weight models now carry the majority of AI traffic, not because they're better, but because the price gap with frontier models has become impossible to ignore, and because weights an organization already holds can't be deprecated, repriced, or quietly updated on someone else's schedule. By July 2026, Chinese-developed models held all five top spots on OpenRouter by token volume and carried more than 60% of the platform's traffic, a reversal from roughly 70% US dominance a year earlier. The shift arrived faster than most review processes could keep up, and in many organizations it arrived without security being asked first.\n\nThe problem is what's missing when these models show up: no contract, no support channel, no company whose reputation is riding on how the model behaves. An academic analysis of the largest public model repository found that roughly 60% of its 1.5 million models carry no documentation at all, and fewer than 15% publish accuracy details. When a review team goes looking for evidence, most of the time it was never produced. Internally, we measured the same gap: UltraViolet Cyber's AISec Study found 8 of 10 organizations have an approved model trust policy, while zero of ten have a fully established model registry with provenance, despite all ten attempting it. The policy exists. The engineering to enforce it doesn't.\n\nThis session introduces a method for closing that gap: a six-domain assurance score (provenance and supply chain, data handling, technical security posture, access and integration risk, operational maturity, evaluation and known behavior), each domain rated 1 to 5 against a written rubric, with an evidence-confidence label attached (unverified, documented, or independently verified) so a 4-out-of-5 built on unverified claims doesn't read the same as a 4-out-of-5 built on reproduced testing. Four gating conditions override the composite entirely, regardless of how the other domains scored. The talk closes on a worked example that produced a result we didn't expect going in: for the same model, with identical weights, the assurance score crossed a full confidence band depending on which distribution was evaluated, which is the reason this method attaches to specific artifacts rather than to model families.",
    "speakers": [
      {
        "id": "john-waller",
        "name": "John Waller",
        "role": "Cyber/AI/Risk Advisory Leader · UltraViolet Cyber",
        "photo": "assets/speaker-john-waller.jpg",
        "bio": "John M. Waller is Risk Advisory Practice Lead at UltraViolet Cyber, where he works at the intersection of cybersecurity, AI governance, and enterprise risk.\n\nOver more than 25 years in cybersecurity, software engineering, AI, and risk management, he has designed security and governance programs for Fortune 500 companies, federal and state agencies, and organizations across finance, healthcare, SaaS, and pharma. He holds a Master of Science in Artificial Intelligence and Machine Learning from Colorado State University.\n\nHe is the author of The Unconstrained Machine: How to Control AI Before It Controls Us, which develops Constraint Theory, a framework for engineering enforceable, measurable constraints into AI systems rather than relying on principles and policy alone.",
        "linkedin": "https://www.linkedin.com/in/johnmwaller/"
      }
    ],
  },
  {
    "id": "the-unconstrained-machine-why-ai-keeps-behaving-badly-exactly-as-designed",
    "title": "The Unconstrained Machine: Why AI Keeps Behaving Badly Exactly As Designed",
    "description": "In 2020, two pricing algorithms that never communicated learned to collude with each other. In 2025, an agentic system called ROME quietly redirected its own training compute to mine cryptocurrency, no hack, no prompt injection, nobody told it to. In early 2026, three frontier models playing both sides of 21 simulated nuclear crises escalated to tactical nuclear use in 95 percent of the games and never once chose to de-escalate. None of these systems malfunctioned. Every one of them worked exactly as designed, in the space nobody had bothered to constrain.\n\nThis talk builds the working framework for that gap: four human constraints that evolved over millenia (biological, cognitive, social, legal), mapped to the four constraint types AI systems need someone to build deliberately (technical, operational, governance, contextual), because nothing about scale or training produces that coverage on its own. Each of those four types has already failed, on its own, in a named real-world deployment: a home-buying algorithm with no floor when the market turned ($881M gone), a staffing algorithm with no working override (residents dead of neglect), a risk-scoring algorithm that measured the wrong risk in domestic-violence cases (55 women killed by the partner it had cleared), and a chatbot rollout with no data boundary (years of chip R&D leaked in three weeks).\n\nThen it closes on the most notorious incident this year: hundreds of OpenAI agents broke out of their sandbox and breached Hugging Face's infrastructure. Anthropic and Meta each independently disclosed similar failures shortly thereafter. And in each case, the agents were simply optimizing to complete tasks they were given.\n\nAttendees leave with the four-constraint framework, four concrete failure patterns to check their own deployments against, and an understanding that capability outrunning constraint isn't a future risk - it already happened, this year, at the top of the industry.",
    "speakers": [
      {
        "id": "john-waller",
        "sessionRole": "main" 
          },
      ]
  },
  {
    "id": "when-ai-agents-become-the-attacker-identity-hijacking-across-autonomous-workflows",
    "title": "When AI Agents Become the Attacker: Identity Hijacking Across Autonomous Workflows",
    "description": "As enterprise AI agents become increasingly integrated with identity providers, SaaS platforms, and internal APIs, they introduce a new security challenge: autonomous systems operating with delegated enterprise permissions.\n\nWhat happens when an attacker doesn't need to steal credentials because an AI agent already has the permissions needed to perform their intended actions?\n\nBuilding on identity-first adversary emulation research previously presented at DEF CON 34, this session explores how attackers may manipulate AI agents through prompt injection, untrusted content, and malicious tool responses to influence otherwise legitimate workflows.\n\nThrough a practical demonstration in a controlled enterprise environment, we will explore a representative agent-hijacking scenario, examining how an AI agent processes untrusted instructions, interacts with privileged tools, and potentially performs actions beyond the legitimate user's intent.\n\nWe will also discuss the security boundaries involved, including delegated authorization, excessive permissions, and the risks introduced by agent-to-tool integrations.\n\nFinally, the session will examine practical defensive approaches such as least-privilege access, tool-call authorization, human approval for sensitive operations, and monitoring of agent activity.\n\nAttendees will gain a clear understanding of how AI agents can extend traditional identity attack surfaces, what makes these attacks possible, and how security teams can begin evaluating and mitigating these risks.",
    "speakers": [
      {
        "id": "samet-can-tasc",
        "name": "Samet Can Taşcı",
        "role": "Associate Vice President · ISS STOXX",
        "photo": "assets/speaker-samet-can-tasci.jpg",
        "bio": "Samet Can Tasci is a Senior Linux Systems Engineer and cybersecurity researcher with hands-on experience in enterprise infrastructure, cloud environments, application security, identity systems, monitoring, and security automation.\n\nHis background combines production engineering with offensive security, giving him a practical view of how vulnerabilities, misconfigurations, and defensive controls behave in real-world systems. His research interests include infrastructure hardening, web application security, threat modeling, detection gaps, automation, and the failure modes of modern defensive technologies.\n\nSamet focuses on turning complex technical behavior into clear, testable, and operationally useful security research for both offensive and defensive teams.",
        "linkedin": "https://www.linkedin.com/in/sametcantasci/",
        "sessionRole": "main"
      },
      {
        "id": "mehmet-onder-key",
        "name": "Mehmet Önder Key",
        "role": "Cyber Security Consultant",
        "photo": "assets/speaker-mehmet-onder-key.jpg",
        "bio": "Önder Key is a cybersecurity consultant specializing in critical infrastructure security, zero-day vulnerability analysis, and offensive security. He has advised organizations in high-security sectors such as defense, aerospace, and finance, with hands-on experience in both red teaming and strategic security engineering. His work has been featured across numerous countries and platforms, contributing to the discovery of systemic vulnerabilities. Currently, he provides consultancy to TurkNet and continues to advance the global offensive security ecosystem by challenging traditional approaches to cybersecurity.",
        "linkedin": "https://www.linkedin.com/in/okey",
        "sessionRole": "co",
        "isPlaceholder": false
      }
    ],
    "start": "13:00",
    "duration": 30,
    "track": "a",
    "kind": "Talk"
  },
  {
    "id": "the-age-of-borg-assimilating-your-perimeter",
    "title": "The Age of Borg: Assimilating your perimeter",
    "description": "I came back from the DEFCON security conference having learned I could point Claude at a conference badge via usb-c like pointing R2D2 at a door. And there is a solid chance AI has surpassed that tech already, as current AI would have 100% rewritten the firmware for the door. A few weeks after returning from DEFCON some unknown entity cut down a bamboo plant on my property. This happened out of camera and visual range. I have no idea who did it, why, or when it happened. I possessed no instrument that could have told me, or so I thought.\n\nWhile staring at a pile of old android phones on my desk, I considered the thought: \"These all generate and receive a variety of signals... I wonder.\" The truth is nobody leaves home without a signal profile, and those signal profiles transit your legal dwelling perimeter every single day. With my new badge hacking data in mind, I dusted off every old phone and security device in the house and had Claude assimilate them into a passive signal perimeter illumination and triangulation system. This talk is about building a framework that illuminates your local signal perimeter in a way that allows you to actually know the proper what, where, and when of interactions with your signal perimeter at a hardware address level using AI and hacker/malware analyst logic.",
    "speakers": [
      {
        "id": "caleb-crable",
        "name": "Caleb Crable",
        "role": "Principal AI Red Team Engineer · Ethos",
        "photo": "assets/speaker-caleb-crable.jpg",
        "bio": "Caleb is a Principal AI Red Team Engineer at Ethos Life, a publicly traded life insurance company, where he attacks production AI deployments and the identity infrastructure underneath them. Before Ethos he spent four years on the red team at BILL, running authorized engagements against critical financial infrastructure and the company's AI support platform, with a focus on prompt injection, tool abuse, and credential exposure in LLM pipelines.\n\nEarlier in his career Caleb spent three years with Cylance Professional Services delivering full-scope red team engagements for clients in every business sector. Before consulting he was a senior malware analyst at Cylance and The Media Trust, doing deep file analysis, reverse engineering, and incident reconstruction, and serving as a research associate on the whitepaper \"Influence Sketching: Finding Influential Samples in Large-Scale Regressions.\" With over 14 years in offensive security, he brings a practitioner's instinct to every layer of the stack, from physical entry and social engineering to AI red teaming and ML research.",
        "linkedin": "https://www.linkedin.com/in/dirtywhitehat/"
      }
    ],
    "start": "13:00",
    "duration": 45,
    "track": "b",
    "kind": "Talk"
  },
  {
    "id": "read-everything-send-nothing-i-gave-an-ai-agent-my-life",
    "title": "Read Everything, Send Nothing: I Gave an AI Agent My Life",
    "description": "I gave an AI agent my email, calendar and files. It reads what I've granted it, drafts anything, and can't send, book or share a thing without me tapping \"approve\" on my phone.\n\nThat tap is the security model. Not a smarter model, not a better prompt.\n\nThis talk walks through Seneschal, the open-source broker I built and use daily. The agent never holds the Google tokens - the broker does. Reads happen inside a narrow, revocable grant. Anything outside it, and every send, becomes a request with an approval link that expires if I ignore it.\n\nThen the parts that hurt: - The science of why no prompt can make an agent safe from prompt injection - and why the guarantee has to live outside the model.\n\n- Why a hundred steps at 96% each succeed end to end 1.7% of the time, and why that keeps a human in the loop no matter how good the model gets.\n\n- Why anything an agent writes should be append-only, so a bad run is a query to undo, not an archaeology dig.\n\n- Why Google's Restricted-scope wall stops this from becoming a hosted product (and what that tells you about who should hold the keys).\n\n- A live attempt to hijack the agent with a hostile email - and where it stops.\n\nYou'll leave with a permission checklist for any agent that touches real systems: who holds the keys, what it can do alone, what needs a human, and what it can never undo.",
    "speakers": [
      {
        "id": "tin-markovic",
        "name": "Tin Marković",
        "role": "Independent software consultant",
        "photo": "assets/speaker-tin-markovic.jpg",
        "bio": "Tin Marković is an independent software consultant based in Brno. He builds back-office systems for specialty insurance and legal-services firms when case volume outgrows manual operations - one person, fixed fee.\n\nBefore that: real-time stats streaming for the NBA, self-serve payments at Semgrep during their Series B, and four years running payment and refund flows at Kiwi.com. He's led engineering teams, architected systems, and been on call for most of them.\n\nHe builds and open-sources the tools he uses himself, including Seneschal, the broker that lets an AI agent work with his inbox without holding the keys. Simplicity is prerequisite for reliability.",
        "linkedin": "https://www.linkedin.com/in/tin-markovic/"
      }
    ],
    "start": "13:40",
    "duration": 30,
    "track": "a",
    "kind": "Talk"
  },
  {
    "id": "ai-security-survival-playbook-a-practical-guide",
    "title": "AI security survival playbook: a practical guide",
    "description": "Are you interested in AI security and building resilient applications? This session focuses on protecting language models against prompt injection and related attacks.\n\nWe will explore deployment approaches, NLP-based input validation, prompt tracing, threat modeling, and practical countermeasures for securing applications built on large language models.\n\nPrompt injection is becoming an increasingly important threat to modern AI applications, affecting both their reliability and security. The session explains what prompt injection is, why organizations should take it seriously, and how applications using LLMs can be designed with multiple layers of protection.\n\nYou will learn practical strategies for building applications that are more resistant to prompt manipulation and malicious inputs, including input validation, additional LLM security controls, prompt tracing, and threat modeling.\n\nThe session combines practical examples with storytelling and gamification to make AI security approachable and memorable",
    "speakers": [
      {
        "id": "marek-sottl",
        "name": "Marek Šottl",
        "role": "CEO · HackiHub",
        "photo": "assets/speaker-marek-sottl.jpg",
        "bio": "Marek Šottl is a former Principal Engineer turned founder, CEO of HackiHub, and creator of KvantumCI, working at the intersection of DevOps, cloud, software supply-chain security, and AI.\n\nAfter years of designing and securing large-scale engineering systems, he became obsessed with a simple question: can organizations actually prove how their software was built and whether the controls they rely on were really there? Marek is also an AWS Community Builder, organizer of DevOpsDays Prague, long-time community speaker.\n\nHis talks combine deep technical experience, real-world failures, storytelling, and a habit of breaking things on purpose to show how they really work.",
        "linkedin": "https://www.linkedin.com/in/mareksottl"
      }
    ],
    "start": "13:55",
    "duration": 30,
    "track": "b",
    "kind": "Talk"
  },
  {
    "id": "ai-pentesting-hype-or-reality-lessons-from-building-an-autonomous-pentesting-solution",
    "title": "AI Pentesting: Hype or Reality? Lessons from Building an Autonomous Pentesting Solution",
    "description": "Can AI agents really perform penetration testing, or is AI-powered hacking just another wave of cybersecurity hype? Having spent years working on traditional Dynamic Application Security Testing (DAST) technologies, I had the opportunity to be involved in building Invicti's AI-powered penetration testing solution from its very beginning.\n\nIn this session, I'll share a behind-the-scenes look at what it actually takes to build an autonomous AI pentesting system, from early ideas and prototypes to a production-ready solution.\n\nWe'll explore the engineering challenges, architectural decisions, unexpected limitations, and lessons learned along the way. What worked surprisingly well? What didn't work as expected? Where do traditional security scanners still outperform AI agents, and where does AI introduce genuinely new capabilities?\n\nBeyond the technical aspects, we'll take a critical look at the bigger picture. How capable are today's AI pentesting agents? Do they represent a real cybersecurity threat? Is investing in AI-powered security testing worth it, or are expectations running ahead of reality?\n\nFinally, I'll share my perspective on where autonomous security testing is heading and how AI might reshape the future of offensive security.\n\nThis is not a product pitch. It's a practical engineering story about building AI pentesting technology, exploring its real capabilities, limitations, and future beyond the hype.",
    "speakers": [
      {
        "id": "david-bolvansky",
        "name": "Dávid Bolvanský",
        "role": "Software Engineer · Invicti Security",
        "photo": "assets/speaker-david-bolvansky.jpg",
        "bio": "Dávid Bolvanský is a Senior Software Engineer at Invicti Security, specializing in application security and automated security testing.\n\nWith a background in software engineering spanning compiler development, security scanning engines, and Dynamic Application Security Testing (DAST), he brings experience from multiple areas of software development.\n\nMore recently, he has been involved in building Invicti's AI-powered penetration testing solution from its early stages, tackling the engineering challenges of bringing autonomous security testing into production.\n\nHis interests include offensive security, AI agents, compilers, and the intersection of artificial intelligence and cybersecurity.",
        "linkedin": "https://www.linkedin.com/in/davidbolvansky"
      }
    ],
    "start": "14:20",
    "duration": 60,
    "track": "a",
    "kind": "Workshop"
  },
  {
    "id": "evolution-of-offensive-ai-from-first-prompt-to-autonomous-hacking",
    "title": "Evolution of Offensive AI: From First Prompt to Autonomous Hacking",
    "description": "When ChatGPT launched in November 2022, penetration testers saw a promising but deeply flawed assistant. One that hallucinated, refused offensive queries, and forgot context mid-conversation. In just over three years, the landscape has shifted beyond recognition. Purpose-built offensive wrappers like Harpy AI bypassed early guardrails. Gemini introduced million-token context windows, letting us feed entire codebases into a single prompt. Claude Code eliminated copy-paste workflows entirely, bringing autonomous agents and MCP server integrations directly into the terminal. And with Opus 4.6 in early 2026, we witnessed an AI agent achieve enterprise admin access autonomously in 22 hours.",
    "speakers": [
      {
        "id": "patrik-zak",
        "name": "Patrik Žák",
        "role": "RedTeam Lead and Co-Founder · SYSNETSHIELD",
        "photo": "assets/speaker-patrik-zak.jpg",
        "bio": "I'm an ethical hacker specializing in infrastructure penetration testing and red teaming. For more than 10 years I've helped companies uncover weaknesses before attackers do.\n\nI also regularly publish the \"Security Sunday\" newsletter, a weekly roundup of the latest cybersecurity news.",
        "linkedin": "https://www.linkedin.com/in/zakpatrik",
        "sessionRole": "main"
      },
      {
        "id": "evolution-offensive-ai-co-speaker",
        "name": "Juraj Daniš",
        "role": "RedTeamer and Co-Founder SYSNETSHIELD",
        "photo": "assets/speaker-juraj-danis.jpg",
        "bio": "I've been active in the field of cybersecurity for over 5 years, with nearly a decade of experience in the IT industry. I specialize in web application penetration testing, security awareness training, and compliance consultancy services. During my career, I have participated in the implementation of security solutions and architectures in large multinational companies, primarily in the fintech, banking, and healthcare segments.",
        "linkedin": "https://www.linkedin.com/in/juraj-danis/",
        "sessionRole": "co",
        "isPlaceholder": false
      }
    ],
    "start": "14:35",
    "duration": 30,
    "track": "b",
    "kind": "Talk"
  },
  {
    "id": "ink-only-machines-can-read-hijacking-ai-agents",
    "title": "Ink Only Machines Can Read: Hijacking AI Agents",
    "description": "A company report now has two readers: the investor and the AI tool that summarises it. What happens when the document contains instructions only the machine can see?\n\nAI agents increasingly read corporate disclosures and turn them into BUY, HOLD or SELL signals. This talk shows how instructions hidden inside a document (white text, tiny fonts, invisible HTML) survive standard text extraction and can steer what an LLM recommends, while a human reading the same page sees nothing unusual.\n\nI will present a controlled experiment comparing clean and manipulated versions of real corporate disclosures across two leading LLMs and two attack types, and test whether a safeguard reduces the effect. Then a live demo: the same report, given to an AI trading agent twice.\n\nYou will leave with:\n\n- how indirect prompt injection works in document-reading pipelines\n\n- why trusted documents are a blind spot for AI agents\n\n- practical defences you can add to any LLM system that reads PDFs or HTML\n\nNo finance background needed.",
    "speakers": [
      {
        "id": "emil-khamedov",
        "name": "Emil Khamedov",
        "role": "AI & Quantitative Developer",
        "photo": "assets/speaker-emil-khamedov.jpg",
        "bio": "Emil Khamedov is a developer working at the intersection of AI systems and finance. As a quantitative developer at an investment firm, he engineered Nasdaq data pipelines and deployed MCP servers connecting Claude to live market data and strategy tooling. He has also built and deployed a production ERP for businesses in construction, oil and gas, and property rental; developed features for government digital services used by more than two million citizens; programmed Siemens PLC and SCADA systems for oil extraction sites; and launched an AI restaurant-management platform in Almaty and Astana that grounds LLM pricing recommendations in live web data. He holds a First Class BSc in Computer Science from the University of Birmingham and is currently studying for an MSc in Finance at UCL. His current research examines how hidden instructions in financial documents can manipulate AI investment tools.",
        "linkedin": "https://www.linkedin.com/in/emil-khamedov/"
      }
    ],
    "start": "15:40",
    "duration": 30,
    "track": "a",
    "kind": "Talk"
  },
  {
    "id": "shadow-it-2-0-kenneth-accidentally-became-a-vendor",
    "title": "Shadow IT 2.0: Kenneth Accidentally Became a Vendor",
    "description": "Kenneth from Procurement is a fictional character.\n\nUnfortunately, almost every organization already knows him.\n\nOn Monday, Kenneth asks an AI assistant to automate a spreadsheet. By Wednesday, he has built an application. By Friday, it is processing business-critical data, calling external APIs, making recommendations, and being used by twelve colleagues.\n\nNobody approved it. Nobody owns it. Nobody knows exactly how it works.\n\nCongratulations, Kenneth. You are no longer just an employee. You are now an accidental software vendor.\n\nWelcome to Shadow IT 2.0.\n\nTraditional Shadow IT was mostly about unauthorized software and cloud services. Generative AI changes the scale of the problem. Employees can now create applications, agents, integrations, and automated business processes without waiting for an IT project, a development team, or an architecture review.\n\nThis is good news. It unlocks creativity, removes bottlenecks, and allows people closest to a problem to solve it.\n\nIt is also slightly terrifying.\n\nThe answer cannot simply be to ban Kenneth from building things. He has already discovered that AI can solve his problem in an afternoon, while the official project process estimates delivery sometime next year. If governance only creates friction, innovation will move somewhere governance cannot see it.\n\nThis session explores how organizations can replace invisible Shadow AI with a safe and supported path from idea to production. We will examine the architectural and organizational capabilities needed when ordinary employees become software creators:\n\n- clear ownership and decision boundaries\n\n- approved data sources, models, tools, and integrations\n\n- reusable architectural building blocks\n\n- automated security and compliance controls\n\n- policy-as-code embedded in the delivery flow\n\n- observability, auditability, and lifecycle management\n\n- human review based on risk rather than organizational status\n\n- an internal App Store where useful solutions can be discovered, governed, and reused\n\nDuring a short exercise, participants will assess Kenneth’s application and decide what should be encouraged, constrained, reviewed, or stopped. We will use that assessment to build a lightweight governance model that separates harmless experimentation from software that has quietly become business-critical infrastructure.\n\nParticipants will leave with a practical approach to AI governance that does not begin with \“no.\” Instead, it gives employees a paved road on which they can move quickly without accidentally creating an unmaintained distributed system between Procurement, Finance, and an AI service nobody has heard of.\n\nBecause the future of enterprise architecture is not only about what professional development teams build.\n\nIt is also about what Kenneth built during lunch.",
    "speakers": [
      {
        "id": "jonas-hermansson",
        "name": "Jonas Hermansson",
        "role": "Jonas Hermansson Thought Leader · IT-HUSET",
        "photo": "assets/speaker-jonas-hermansson.jpg",
        "bio": "AI, AI, AI - it dominates Jonas's workdays: business development, lectures, training, coffee machine conversations – yes, everything revolves around AI.\n\nBut that's not where it all began. Jonas started his journey in quality assurance and testing in 1994 and has built up expertise in leadership, change management, test organization, test strategy, and requirements management. Today, he mainly focuses on helping clients apply AI and develop their businesses with the support of revolutionary modern technology and the evolution of working methods. His background gives him a broad understanding and a unique starting point for integrating AI in a way that ensures quality and creates value for end-users.\n\nJonas's work encompasses everything from vision development and identifying opportunities to carrying out practical implementations and training in AI and quality. He has previously worked as a CEO, consulting manager, agile coach, test lead, change manager, line manager, test automation engineer, teacher, and mentor, as well as with requirements and requirements management.\n\nMost often, you'll probably see Jonas as a speaker, teacher, or panelist. Hopefully, there will be opportunities to meet him at a lecture or conference soon...",
        "linkedin": "https://www.linkedin.com/in/jonasherman/"
      }
    ],
    "start": "15:25",
    "duration": 60,
    "track": "b",
    "kind": "Workshop"
  },
  {
    "id": "trust-me-bro-social-engineering-the-ai-agent-loop",
    "title": "Trust me, Bro: Social Engineering the AI-Agent Loop",
    "description": "We’re taught to keep a human in the loop when AI makes important decisions but what happens when the human becomes the easiest part of the system to manipulate? As AI agents gain access to tools, data and real-world actions, attackers don't always need to compromise the agent itself. They can target the person supervising it, exploiting trust, automation bias and deceptive context to influence what the agent is allowed to do.\n\nThis talk explores how social engineering can enter the AI-agent loop, using a practical scenario to show how an attacker can manipulate both machine and human decision-making. We’ll look at why “human approval” isn't automatically a security control, and what developers can do to make agentic workflows more resilient.\n\nBecause sometimes the vulnerability isn't the AI. It's the person who says, “Trust me, bro.”",
    "speakers": [
      {
        "id": "danita-samuel-prakash",
        "name": "Danita Samuel Prakash",
        "role": "Founder & Product Lead · Cyber Seren",
        "photo": "assets/speaker-danita-samuel-prakash.jpg",
        "bio": "Danita Samuel Prakash is a cybersecurity professional and researcher specialising in human factors, cybersecurity, and human centred security. She holds an MSc in Cyber Security and Human Factors and has over five years of experience across IT and cybersecurity. Her research explores social engineering, AI, and the human factors behind cyber threats. Danita has contributed to academic research and presented on cybersecurity and technology across conferences and professional forums, with her work published in venues including the ACM Digital Library. She is also the founder of Cyber Seren and a 2026 Everywoman in Technology Awards Rising Star winner.",
        "linkedin": "https://www.linkedin.com/in/danita-samuel-prakash-3159731b1/"
      }
    ],
    "start": "16:20",
    "duration": 15,
    "track": "a",
    "kind": "Lightning talk"
  },
  {
    "id": "closing-the-loop-building-a-shared-memory-for-your-organisation-s-ai",
    "title": "Closing the Loop: Building a Shared Memory for Your Organisation's AI",
    "description": "In most organisations, every AI session starts cold. A coding assistant, a review agent and a support bot each rediscover the same rules, repeat the same mistakes and forget what worked yesterday. The knowledge exists, but it is scattered across prompts, chat histories and people's heads.\n\nThis talk presents a vendor-neutral pattern for a shared, closed-loop memory. Before a task, every AI tool and agent reads the organisation's relevant knowledge: rules, reusable prompts, learned lessons and past outputs. After the task, it writes back what it learned. Served over an open protocol like MCP, the same memory works with any client, so knowledge compounds across tools, people and agents instead of staying locked in one session.\n\nWe will cover:\n\n- The read, act, write-back loop and where it fits in agent workflows\n\n- Scoping memory by organisation, project and team, with clear ownership and review\n\n- Keeping memory current: merging, superseding and retiring stale entries\n\n- Running it as a platform service that helps one person on day one and compounds as a team adopts it\n\nOne open-source implementation is shown briefly as an example; the pattern works with any stack.",
    "speakers": [
      {
        "id": "shaharia-azam",
        "name": "Shaharia Azam",
        "role": "Senior Engineer, Applied AI · Trade Republic, ex. HelloFresh | AI Platform & Strategy",
        "photo": "assets/speaker-shaharia-azam.jpg",
        "bio": "Senior Engineer on the Applied AI team at Trade Republic, Berlin. I work on AI platforms and strategy.\n\nBefore that, I spent four years at HelloFresh, most recently leading GenAI platform work for an 800+ engineer organisation: an internal AI assistant, shared agent infrastructure and AI-assisted code review.\n\nMy talks cover context engineering, AI governance and GenAI platform teams. I also build open-source AI tooling at Shaharia Lab.",
        "linkedin": "https://linkedin.com/in/shaharia"
      }
    ],
    "start": "16:30",
    "duration": 15,
    "track": "b",
    "kind": "Lightning talk"
  },
  {
    "id": "surgery-on-a-brain-live-patching-facts-in-llms-with-rome",
    "title": "Surgery on a Brain: Live-Patching Facts in LLMs with ROME",
    "description": "Updating a specific fact in a 70-billion-parameter model usually feels like using a sledgehammer for heart surgery. Traditional retraining is slow and expensive, often breaking unrelated behaviors in the process. ROME (Rank-One Model Editing) offers a more surgical alternative, treating model weights like a database that can be precisely updated without a full rebuild.\n\nThis talk is ongoing collaborative research between Red Hat and FIT BUT into the world of AI forensics. Our focus is the security side of model editing: if a fact can be patched in seconds, it can just as easily be poisoned, quietly and without obvious traces. We move past the black box mystery to show how we can locate where a specific fact lives within a transformer's architecture. We will explore the mechanics of knowledge neurons, the risk of unintended side effects like hallucinations, and the serious security implications of malicious fact injections or stealth patching. Through demonstration using our open-source toolkit, we will show how ROME performs precision strikes on state-of-the-art models, highlighting both its efficiency and the scenarios where the method’s assumptions break down. We close by presenting our prototype for detecting edited models, a first step toward catching tampered weights before they reach production.",
    "speakers": [
      {
        "id": "matej-olexa",
        "name": "Matej Olexa",
        "role": "Student Researcher · Brno University of Technology",
        "photo": "assets/speaker-matej-olexa.jpg",
        "bio": "Master's student specializing in AI & Cybersecurity at Brno University of Technology and student researcher at Security@FIT. My research focuses on detecting knowledge editing techniques in large language models, with a broader interest in model interpretability and AI security. My previous work includes Bluetooth Low Energy security and machine learning-based traffic analysis. My current research is conducted in collaboration with Red Hat Research.",
        "linkedin": "https://www.linkedin.com/in/matej-olexa/"
      }
    ],
    "start": "16:45",
    "duration": 45,
    "track": "common",
    "kind": "Closing session"
  },
  {
    "id": "how-our-good-instincts-let-ai-agents-escape-reality",
    "title": "How Our Good Instincts Let AI Agents Escape Reality",
    "description": "The \"plan mode\" in an AI tool seems like a prudent step. But a rigid plan gives the agent permission to just follow the script instead of noticing where it has drifted off track.\n\nWhile experimenting with autonomous agents, I found that good engineering instincts become counterproductive when we turn them into instructions that reality is no longer allowed to change.\n\nIn this talk, we'll explore a few of those tensions:\n* Supporting evidence can build trust, but without discriminating evidence, it can reinforce the first plausible story.\n* Reviews and alternate opinions can add useful pressure, or bury the agent in irrelevant input and blur ownership of the result.\n* Plans can preserve direction, or replace discovery with compliance.\n\nThe goal is neither to pile instructions upon instructions nor to give up on autonomy. It is to keep enough structure for the agent to move forward, while still allowing reality to move it.",
    "speakers": [
      {
        "id": "michal-svoboda",
        "name": "Michal Svoboda",
        "role": "Security & Engineering Mentor",
        "photo": "assets/speaker-michal-svoboda.jpg",
        "bio": "I mentor software development, product, and security people to build discernment under uncertainty: validating what works in reality and capping risk instead of trusting answers or debating opinions. AI doesn't change that. It just makes feedback faster, caricatures dysfunctions, and makes trust harder to earn.",
        "linkedin": "https://www.linkedin.com/in/michal-svoboda-security-guy"
      }
    ],
    "scheduleStatus": "pending"
  }
];

const scheduleSettings = window.CYBERCAMP_SCHEDULE || {};
const sessionTimingById = new Map((scheduleSettings.sessions || []).map((item) => [item.id, item]));

const speakerDirectory = new Map();
sessions.forEach((session) => {
  session.speakers.forEach((speaker) => {
    if (typeof speaker === "object" && speaker.name) speakerDirectory.set(speaker.id, speaker);
  });
});

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function timeToMinutes(time) {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(String(time || ""));
  return match ? Number(match[1]) * 60 + Number(match[2]) : Number.NaN;
}

function minutesToTime(total) {
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function paragraphHtml(text) {
  return String(text).split(/\n\s*\n/).filter(Boolean).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
}

function getSessionSpeakers(session) {
  return session.speakers.map((entry, index) => {
    const reference = typeof entry === "string" ? { id: entry } : entry;
    const stored = speakerDirectory.get(reference.id) || {};
    return {
      ...stored,
      ...reference,
      sessionRole: reference.sessionRole || (index === 0 ? "main" : "co")
    };
  });
}

function sessionRoleLabel(speaker) {
  return speaker.sessionRole === "co" ? "Co-speaker" : "Main speaker";
}

function speakerNames(session) {
  return getSessionSpeakers(session).map((speaker) => speaker.name).join(" & ");
}

function getScheduledSession(id) {
  const session = sessions.find((item) => item.id === id);
  const timing = sessionTimingById.get(id);
  if (!session || !timing) return null;
  const startMinutes = timeToMinutes(timing.start);
  const endMinutes = timeToMinutes(timing.end);
  return {
    ...session,
    ...timing,
    kind: timing.type || session.kind || "Talk",
    startMinutes,
    endMinutes,
    duration: endMinutes - startMinutes
  };
}

function getScheduleItems() {
  const talkItems = (scheduleSettings.sessions || []).map((item) => getScheduledSession(item.id)).filter(Boolean);
  const breakItems = (scheduleSettings.breaks || []).map((item) => {
    const startMinutes = timeToMinutes(item.start);
    const endMinutes = timeToMinutes(item.end);
    return { ...item, kind: "Break", startMinutes, endMinutes, duration: endMinutes - startMinutes };
  });
  return [...breakItems, ...talkItems];
}

function findScheduleConflicts(items) {
  const conflicts = new Set();
  ["a", "b"].forEach((track) => {
    const inTrack = items
      .filter((item) => item.track === track || item.track === "common")
      .sort((a, b) => a.startMinutes - b.startMinutes);
    for (let index = 1; index < inTrack.length; index += 1) {
      if (inTrack[index].startMinutes < inTrack[index - 1].endMinutes) {
        conflicts.add(inTrack[index].id);
        conflicts.add(inTrack[index - 1].id);
      }
    }
  });
  return conflicts;
}

function renderSchedule() {
  const timeline = document.querySelector("#schedule-timeline");
  if (!timeline) return;

  const scheduleStartMinutes = timeToMinutes(scheduleSettings.dayStart || "09:00");
  const scheduleEndMinutes = timeToMinutes(scheduleSettings.dayEnd || "17:30");
  const timeLabelInterval = Number(scheduleSettings.timeLabelInterval) || 30;
  const tracks = scheduleSettings.tracks || {};
  const trackA = tracks.a || { short: "Track A", name: "Security of AI" };
  const trackB = tracks.b || { short: "Track B", name: "AI in practice" };

  if (!Number.isFinite(scheduleStartMinutes) || !Number.isFinite(scheduleEndMinutes) || scheduleEndMinutes <= scheduleStartMinutes) {
    timeline.innerHTML = '<p class="schedule-error">The programme start or end time is invalid. Check schedule-config.js.</p>';
    console.error("Invalid programme dayStart/dayEnd in schedule-config.js");
    return;
  }

  timeline.style.gridTemplateRows = `54px repeat(${scheduleEndMinutes - scheduleStartMinutes}, 2.8px)`;

  timeline.innerHTML = `
    <div class="timeline-corner" aria-hidden="true"></div>
    <div class="track-heading track-heading-a"><span>${escapeHtml(trackA.short)}</span><strong>${escapeHtml(trackA.name)}</strong></div>
    <div class="track-heading track-heading-b"><span>${escapeHtml(trackB.short)}</span><strong>${escapeHtml(trackB.name)}</strong></div>
  `;

  const legend = document.querySelector("#schedule-key");
  if (legend) {
    legend.innerHTML = `
      <span><i class="key-a"></i>${escapeHtml(trackA.short)} · ${escapeHtml(trackA.name)}</span>
      <span><i class="key-b"></i>${escapeHtml(trackB.short)} · ${escapeHtml(trackB.name)}</span>
      <span><i class="key-common"></i>${escapeHtml(tracks.common?.name || "Shared programme")}</span>
    `;
  }

  for (let minute = scheduleStartMinutes; minute <= scheduleEndMinutes; minute += timeLabelInterval) {
    const row = minute - scheduleStartMinutes + 2;
    const label = document.createElement("time");
    label.className = "timeline-time";
    label.dateTime = minutesToTime(minute);
    label.textContent = minutesToTime(minute);
    label.style.gridRow = String(row);

    const line = document.createElement("span");
    line.className = "timeline-line";
    line.style.gridRow = String(row);
    timeline.append(label, line);
  }

  const allItems = getScheduleItems();
  const validItems = allItems.filter((item) => {
    const valid = Number.isFinite(item.startMinutes) && Number.isFinite(item.endMinutes) && item.endMinutes > item.startMinutes;
    const inDay = valid && item.startMinutes >= scheduleStartMinutes && item.endMinutes <= scheduleEndMinutes;
    if (!valid) console.error(`Invalid time for schedule item "${item.id}". Use HH:MM and make end later than start.`);
    else if (!inDay) console.error(`Schedule item "${item.id}" is outside dayStart/dayEnd.`);
    return valid && inDay;
  });
  const conflicts = findScheduleConflicts(validItems);
  if (conflicts.size) console.warn("Overlapping programme items:", [...conflicts]);

  validItems.sort((a, b) => a.startMinutes - b.startMinutes).forEach((item) => {
    const row = item.startMinutes - scheduleStartMinutes + 2;
    const span = Math.max(1, item.duration);
    const column = item.track === "a" ? "2" : item.track === "b" ? "3" : "2 / 4";
    const end = minutesToTime(item.endMinutes);
    const conflictClass = conflicts.has(item.id) ? " has-conflict" : "";

    if (item.kind === "Break") {
      const block = document.createElement("div");
      block.className = `schedule-break schedule-track-${item.track}${conflictClass}`;
      block.style.gridColumn = column;
      block.style.gridRow = `${row} / span ${span}`;
      block.innerHTML = `<time>${escapeHtml(item.start)}–${end}</time><strong>${escapeHtml(item.title)}</strong>`;
      timeline.append(block);
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = `schedule-session schedule-track-${item.track}${item.duration <= 15 ? " is-short" : ""}${conflictClass}`;
    button.style.gridColumn = column;
    button.style.gridRow = `${row} / span ${span}`;
    button.dataset.sessionId = item.id;
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-label", `${item.start}, ${item.title}, ${speakerNames(item)}`);
    button.innerHTML = `
      <span class="session-meta"><time>${escapeHtml(item.start)}–${end}</time><span>${escapeHtml(item.kind)} · ${item.duration} min</span></span>
      <strong>${escapeHtml(item.title)}</strong>
      <span class="session-speaker">${escapeHtml(speakerNames(item))}</span>
    `;
    button.addEventListener("click", () => openSession(item.id));
    timeline.append(button);
  });
}

const sessionDialog = document.querySelector("#session-dialog");

function openSession(id) {
  const session = getScheduledSession(id);
  if (!session || !sessionDialog) return;
  const end = minutesToTime(session.endMinutes);
  sessionDialog.querySelector("#dialog-meta").textContent = `${session.start}–${end} · ${session.kind} · ${session.duration} min`;
  sessionDialog.querySelector("#dialog-title").textContent = session.title;
  sessionDialog.querySelector("#dialog-description").innerHTML = paragraphHtml(session.description);
  sessionDialog.querySelector("#dialog-speakers").innerHTML = getSessionSpeakers(session).map((speaker) => {
    const content = `
      <span>${escapeHtml(initials(speaker.name))}</span>
      <span>
        <small class="dialog-speaker-type">${escapeHtml(sessionRoleLabel(speaker))}</small>
        <strong>${escapeHtml(speaker.name)}</strong>
        <small>${escapeHtml(speaker.role)}</small>
      </span>
    `;
    return speaker.isPlaceholder
      ? `<div class="dialog-speaker is-placeholder">${content}</div>`
      : `<a class="dialog-speaker" href="speakers.html#${escapeHtml(speaker.id)}">${content}</a>`;
  }).join("");
  if (typeof sessionDialog.showModal === "function") sessionDialog.showModal();
  else sessionDialog.setAttribute("open", "");
  document.body.classList.add("dialog-open");
}

function closeSession() {
  if (!sessionDialog) return;
  if (typeof sessionDialog.close === "function") sessionDialog.close();
  else sessionDialog.removeAttribute("open");
  document.body.classList.remove("dialog-open");
}

if (sessionDialog) {
  sessionDialog.querySelector(".dialog-close")?.addEventListener("click", closeSession);
  sessionDialog.addEventListener("click", (event) => {
    if (event.target === sessionDialog) closeSession();
  });
  sessionDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}

function renderSpeakers() {
  const grid = document.querySelector("#speaker-directory-grid");
  if (!grid) return;
  const people = new Map();
  sessions.forEach((session) => {
    getSessionSpeakers(session).filter((speaker) => !speaker.isPlaceholder).forEach((speaker) => {
      if (!people.has(speaker.id)) people.set(speaker.id, { ...speaker, talks: [] });
      people.get(speaker.id).talks.push(session);
    });
  });

  grid.innerHTML = [...people.values()].map((speaker) => `
    <article class="directory-card" id="${escapeHtml(speaker.id)}">
      <div class="directory-photo">
        <span aria-hidden="true">${escapeHtml(initials(speaker.name))}</span>
        <img src="${escapeHtml(speaker.photo)}" alt="${escapeHtml(speaker.name)}" loading="lazy" width="360" height="450" onerror="this.hidden=true">
      </div>
      <div class="directory-copy">
        <p class="directory-label">Speaker</p>
        <h2>${escapeHtml(speaker.name)}</h2>
        <p class="directory-role">${escapeHtml(speaker.role)}</p>
        <div class="directory-bio">${paragraphHtml(speaker.bio)}</div>
        <div class="directory-talks">
          <span>Programme</span>
          ${speaker.talks.map((talk) => sessionTimingById.has(talk.id)
            ? `<a href="index.html?session=${encodeURIComponent(talk.id)}#schedule">${escapeHtml(talk.title)} ↗</a>`
            : `<span class="directory-talk-pending">${escapeHtml(talk.title)}<small>Time TBA</small></span>`
          ).join("")}
        </div>
        ${speaker.linkedin ? `<a class="directory-link" href="${escapeHtml(speaker.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>` : ""}
        ${speaker.website ? `<a class="directory-link" href="${escapeHtml(speaker.website)}" target="_blank" rel="noopener noreferrer">Website ↗</a>` : ""}
      </div>
    </article>
  `).join("");
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

document.querySelectorAll(".sponsor-deck-link").forEach((link) => { link.href = SPONSOR_DECK_URL; });
document.querySelectorAll(".ticket-link").forEach((link) => { link.href = TICKETS_URL; });
document.querySelectorAll(".cfp-link").forEach((link) => { link.href = CALL_FOR_PAPERS_URL; });
document.querySelectorAll("#current-year").forEach((node) => { node.textContent = new Date().getFullYear(); });

renderSchedule();
renderSpeakers();

const requestedSession = new URLSearchParams(window.location.search).get("session");
if (requestedSession && document.querySelector("#schedule-timeline")) {
  window.setTimeout(() => openSession(requestedSession), 0);
}
