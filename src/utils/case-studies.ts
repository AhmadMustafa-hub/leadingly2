const CASE_STUDIES = [
  {
    id: 1,
    slug: "brand-heroes",
    title: "Leadingly guides Brand Heroes in Keeping Campaigns Running Amid COVID-19 Challenges",
    industry: "Advertising & Marketing",
    boxOneNumb: "50",
    boxOneText: "Appointments booked",
    boxTwoNumb: "30%",
    boxTwoText: "Open rate",
    image: "/images/case-studies/1.jpg",
    takeaways:
      "A small team, some agility and a well-built long-term strategy will get you far and let you maneuver your way around all kinds of pitfalls. Proven marketing tactics and software wille expand your business four times in 6 months.",
    summary:
      "Brand Heroes came to Leadingly seeking scaling up their operations. As a result, they obtained a steady flow of orders per month and increased revenue dramatically",
  },
  {
    id: 2,
    slug: "nft-brands",
    title:
      "Leadingly's Strategic Advice Helps NFT BRANDS INC. Revamp Strategies and Make Footprints in 10 Countries",
    industry: "Software Development",
    boxOneNumb: "114",
    boxOneText: "Appointments booked",
    boxTwoNumb: "20%",
    boxTwoText: "Response rate",
    image: "/images/case-studies/2.png",
    takeaways:
      "Tactics change is normal - embrace it. Changes to your initial lead generation method are normal and needed for a successful campaign. Our expertise and flexibility allows us to switch between approaches swiftly with no adverse outcomes.",
    summary:
      "Trying to reach out to the right audience while being in a niche industry is very limited. NFT Brands enlisted support from Leadingly and made the right choice. By fine-tuning each method according to the circumstances, NFT Brands was able to book 114 appointments in 3 months with a 20% response rate.",
  },
  {
    id: 3,
    slug: "mala",
    title: "Outbound Sales of MALA Optimized by Leadingly",
    industry: "Non-Profit",
    boxOneNumb: "70%",
    boxOneText: "Open rate",
    boxTwoNumb: "200%",
    boxTwoText: "Growth in sales",
    image: "/images/case-studies/3.png",
    takeaways:
      "Find yourself a partner that would discuss your goals and expectations and stay proactive in trying new approaches while enriching your current process.",
    summary:
      "With a goal of building a strong cold outreach channel and generating a good percentage of high-value appointments, the non-profit Mala reached out to Leadingly. This resulted in email campaigns with a 70% open rate and a 200% increase in sales.",
  },
  {
    id: 4,
    slug: "mobility-intel",
    title:
      "Leadingly becomes a Reliable Outbound Sales Partner for Mobility Intel with 26 Appointments in the First Month itself",
    industry: "SaaS",
    boxOneNumb: "61%",
    boxOneText: "Best open rate",
    boxTwoNumb: "50",
    boxTwoText: "Meetings booked in 3 months",
    image: "/images/case-studies/4.png",
    takeaways:
      "Being a big company, Mobility Intel knew that outsourcing business development to scale more effectively was their best option. Furthermore, the successful approach to forming and updating contact lists combined with trust based communications was their key to success.",
    summary:
      "Scalability is among the reasons to outsource, it's much easier to scale when an outside team does lead research, personalization, template copywriting. As a result of Leadingly’s efforts, Mobility Intel was able to achieve a 61% open rate and 50+ meetings booked in one month.",
  },
  {
    id: 5,
    slug: "metaverse-plus",
    title: "Metaverse Plus' Engagement Rate soars to 90% following Leadingly's Intervention",
    industry: "Manufacturing",
    boxOneNumb: "50%",
    boxOneText: "Increas in sales",
    boxTwoNumb: "473",
    boxTwoText: "Prospects",
    image: "/images/case-studies/5.png",
    takeaways:
      "MetaversePlus aimed to enhance their online presence and lead conversion. The leadingly team has helped develop effective strategies and solutions to help boost conversions and fill their pipeline with qualified appointments.",
    summary:
      "MetaversePlus has been struggling to land new deals and spread brand awareness on a large scale. Leadingly helped increase its users base, ultimately leading to a 50% increase in sales and over 473 prospects.",
  },
  {
    id: 6,
    slug: "luxury-partners",
    title: "Leadingly Sketches Effective Sales Process for Luxury Partners Within 3 Months",
    industry: "Construction",
    boxOneNumb: "30",
    boxOneText: "Appointments booked",
    boxTwoNumb: "50%",
    boxTwoText: "Response rate",
    image: "/images/case-studies/6.png",
    takeaways:
      "Outsourced sales development helped the in-house team spot and fix errors. Developing key productive sales strategies is crucial for multiple deals in a timely manner.",
    summary:
      "Leadingly helped Luxury Partners upgrade their sales strategies and create a new marketing strategy that resulted in 30 appointments booked with a 50% response rate.",
  },
  {
    id: 7,
    slug: "global-geeks",
    title: "Global Geeks captures 3 New Markets within 3 Months of Mentoring by Leadingly",
    industry: "Information Technology & Services",
    boxOneNumb: "10",
    boxOneText: "New deals in 3 months",
    boxTwoNumb: "$500k",
    boxTwoText: "In revenue",
    image: "/images/case-studies/7.png",
    takeaways:
      "Partnering with the right professional agency will optimize your time and fill your sales pipeline with qualified appointments.",
    summary:
      "Leadingly’s approach provided Global Geeks with a stream of fresh, qualified appointments. Ultimately allowing us to continue an ongoing 9-month partnership together and yield $500K+ in new revenue.",
  },
  {
    id: 8,
    slug: "web3-pay",
    title: "Leadingly Assured Appointments with Companies Hiring 5,000+ Employees for Web3Pay",
    industry: "Banking & Fintech",
    boxOneNumb: "50",
    boxOneText: "Appointments booked",
    boxTwoNumb: "30%",
    boxTwoText: "Opportunities",
    image: "/images/case-studies/8.png",
    takeaways:
      "Trial and error is a fundamental method of prospecting. Any high-performing sales team spends a great deal of their time fumbling around with templates, outreach strategies, and approaches.",
    summary:
      "Having outsourced sales prospecting to Leadingly, Web3Pay obtained 50 qualified appointments in one-month with a 30% close rate.",
  },
  {
    id: 9,
    slug: "bpm-a",
    title: "Leadingly steers BPM Advisors to Double its appointments",
    industry: "Renewable Energy",
    boxOneNumb: "50%",
    boxOneText: "Increase in sales",
    boxTwoNumb: "$2m",
    boxTwoText: "Added to sales pipeline",
    image: "/images/case-studies/9.jpeg",
    takeaways:
      "Despite the industry challenges, Leadingly helped BPM advisors gain a eco-friendly reputation and win their target audiences with personalized AI email sequences.",
    summary:
      "Leadingly helped BPM schedule new meetings, resulting in a 50% increase to their sales pipeline and over $2M generated in revenue",
  },
  {
    id: 10,
    slug: "shri-genesis",
    title: "Leadingly helps Shri Genesis surpass Sales Targets by 200%",
    industry: "Computer Software",
    boxOneNumb: "89",
    boxOneText: "Appointments scheduled",
    boxTwoNumb: "5",
    boxTwoText: "Deals closed the first 6 months",
    image: "/images/case-studies/10.webp",
    takeaways:
      "Improving your bottom line starts from pre-sales activities like adjusting an ICP, ensuring the right target audiences, and so on.",
    summary:
      "With an aim to bring new clients to Shri Genesis, Leadingly expanded its target audience and made some adjustments to Genesis’s ICP allowing them to unlock their potential in new markets resulting in 89 appointments scheduled and 5 deals closed.",
  },
];

export default CASE_STUDIES;
