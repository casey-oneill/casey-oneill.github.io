import React from 'react';
import { Element } from 'react-scroll';
import ExperiencesPage from './pages/ExperiencesPage';
import ContactsPage from './pages/ContactsPage';
import ProjectsPage from './pages/ProjectsPage';
import BiographyPage from './pages/BiographyPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
	const sections = [
		{
			id: 'home',
			component: <BiographyPage />,
		},
		{
			id: 'experience',
			component: <ExperiencesPage />,
		},
		{
			id: 'projects',
			component: <ProjectsPage />,
		},
		{
			id: 'contact',
			component: <ContactsPage />,
		},
	];

	const sectionItems = sections.map((section, i) =>
		<Element id={section.id} key={section.id} name={section.id} className={i % 2 === 0 ? 'py-5' : 'bg-light py-5'}>
			{section.component}
		</Element>
	);

	return (
		<div className="app">
			<Header />
			{sectionItems}
			<Footer />
		</div>
	);
}

export default App;
