import { HOME, PROJECTS, BLOG, CONTACT } from '../constants/navigation';

import { Home } from '../components/Home/Home';
import { Projects } from '../components/Projects/Projects';
import { Blog } from '../components/Blog/Blog';
import { Contact } from '../components/Contact/Contact';

export const pageMap = {
  [HOME]: Home,
  [PROJECTS]: Projects,
  [BLOG]: Blog,
  [CONTACT]: Contact
};
