import { Element } from 'react-scroll';
import { data } from './data/data';
import ExperiencesPage from './pages/ExperiencesPage';
import ContactsPage from './pages/ContactsPage';
import ProjectsPage from './pages/ProjectsPage';
import BiographyPage from './pages/BiographyPage';
import SkillsPage from './pages/SkillsPage';

function App() {
	return (
		<div className="app">
			<Element id="home" name="home" className="pt-5">
				<BiographyPage />
				<SkillsPage skills={data.skills} />
			</Element>
			<Element id="experience" name="experience" className="py-5">
				<ExperiencesPage experiences={data.experiences} />
			</Element>
			<Element id="projects" name="projects" className="bg-light py-5">
				<ProjectsPage projects={data.projects} />
			</Element>
			<Element id="contact" name="contact" className="py-5">
				<ContactsPage contacts={data.contacts} />
			</Element>
		</div>
	);
}

export default App;
