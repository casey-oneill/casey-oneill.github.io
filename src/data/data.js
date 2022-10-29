import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export const contacts = [
	{
		"icon": solid("envelope"),
		"title": "Email",
		"link": "mailto:casey.oneill@unb.ca",
		"description": "casey.oneill@unb.ca"
	},
	{
		"icon": brands("github"),
		"title": "GitHub",
		"link": "https://github.com/casey-oneill/",
		"description": "casey-oneill"
	},
	{
		"icon": brands("linkedin"),
		"title": "LinkedIn",
		"link": "https://www.linkedin.com/in/caseyoneill/",
		"description": "Casey O'Neill",
	},
];

export const experiences = [
	{
		"title": "(Co-op) Software Developer",
		"company": "VeroSource Solutions",
		"link": "https://www.verosource.com/",
		"dates": [
			"May 2021 - August 2021 (co-op)",
			"September 2022 - Present (part-time)",
		],
		"description": "As a full stack web developer, I develop React, React Native, and Spring Boot applications leveraging microservices architecture. ",
	},
	{
		"title": "Research Assistant",
		"company": "UNB Human Computer-Interaction Lab",
		"link": "https://hcilab.github.io/",
		"dates": [
			"May 2022 - August 2022",
		],
		"description": "Designed, implemented, and conducted a preliminary pilot study for research investigating the role of neurotic robot personality in human-robot interaction. Conducted literature reviews, prepared interview questions, and programmed an iRobot Roomba robot. Prepared written reports, including “Abstract” and “Related Work” sections.",
	},
	{
		"title": "Co-op Software Developer",
		"company": "Innovatia",
		"link": "https://www.innovatia.net/",
		"dates": [
			"September 2020 - December 2020",
		],
		"description": "As a full stack web developer, developed a monolithic ASP.NET application and performed quality assurance testing.",
	},
	{
		"title": "Co-op Software Developer",
		"company": "Populus Global Solutions",
		"link": "https://www.populusplus.com/",
		"dates": [
			"May 2019 - August 2019",
			"January 2020 - May 2020",
		],
		"description": "As a full stack web developer, developed monolithic Angular and Spring Boot applications.",
	},
];

export const projects = [
	{
		"title": "OctoBlog",
		"description": "A free and open source blog template using GitHub services, designed for non-developers.",
		"authors": "Casey O'Neill",
		"codeLink": "https://github.com/casey-oneill/octo-blog",
		"lastUpdated": "Fall 2022",
	},
	{
		"title": "Portfolio",
		"description": "A personal website developed using React and Bootstrap. Hosted using GitHub Pages. Created to practise web development and responsive design principles.",
		"authors": "Casey O'Neill",
		"codeLink": "https://github.com/casey-oneill/casey-oneill.github.io/",
		"demoLink": "https://casey-oneill.github.io/",
		"lastUpdated": "Fall 2022",
	},
	{
		"title": "Book Swap",
		"description": "A fully-functioning web application for buying and selling used textbooks. Created for a CS4015 group project.",
		"authors": "Casey O'Neill, Bin Liao, Logan Fitzpatrick, Patrick Mollins, Qihao Guo",
		"codeLink": "https://github.com/casey-oneill/cs-4015-project/",
		"lastUpdated": "Winter 2022",
	},
	{
		"title": "X-TERM",
		"description": "A turn-based puzzle game created as a CS2053 course project.",
		"authors": "Casey O'Neill",
		"codeLink": "https://github.com/CS-2053-Winter-2021/course-project-2d-casey-oneill/",
		"demoLink": "https://casey-oneill.itch.io/x-term",
		"lastUpdated": "Winter 2021",
	},
];

export const data = {
	"skills": [
		{
			"icon": brands("java"),
			"title": "Java Frameworks",
			"description": "Spring Boot, JavaFX"
		},
		{
			"icon": brands("bootstrap"),
			"title": "Responsive Design",
			"description": "CSS, HTML, Bootstrap",
		},
		{
			"icon": brands("react"),
			"title": "JavaScript Frameworks",
			"description": "React, Angular",
		},
		{
			"icon": brands("unity"),
			"title": "Game Development",
			"description": "Unity, Godot, Basic 2D Animation"
		},
		{
			"icon": brands("git-alt"),
			"title": "Version Control",
			"description": "Git, GitHub, GitLab, Jira Software"
		},
		{
			"icon": solid("database"),
			"title": "Databases",
			"description": "PostgreSQL, MySQL, Spring Data JPA"
		}
	],
};
