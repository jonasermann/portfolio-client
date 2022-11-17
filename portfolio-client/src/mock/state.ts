const introductionMock = {
  id: 1,
  profilePicUrl: 'notarealurl',
  text: 'Home Test',
}

const backgroundParagraphsMock = [
  {
    id: 1,
    text: 'About Test 1',
  },
  {
    id: 2,
    text: 'About Test 2',
  },
  {
    id: 3,
    text: 'About Test 3',
  },
  {
    id: 4,
    text: 'About Test 4',
  },
]

const mediaLinksMock = [
  {
    id: 1,
    imgUrl: 'notarealurl',
    url: 'notarealurl',
    text: 'media link 1',
  },
  {
    id: 2,
    imgUrl: 'notarealurl',
    url: 'notarealurl',
    text: 'media link 2',
  },
]

const projectsMock = [
  {
    id: 1,
    title: 'Quiz',
    imgUrl: 'notarealurl',
    text: 'Project Test 1',
    gitUrl: 'notarealurl',
  },
  {
    id: 2,
    title: 'Horizon Calculator',
    imgUrl: 'notarealurl',
    text: 'Project Test 2',
    gitUrl: 'notarealurl',
  },
  {
    id: 3,
    title: 'Horizon Calculator (again)',
    imgUrl: 'notarealurl',
    text: 'Project Test 3',
    gitUrl: 'notarealurl',
  },
  {
    id: 4,
    title: 'Kalaha',
    imgUrl: 'notarealurl',
    text: 'Project Test 4',
    gitUrl: 'notarealurl',
  },
  {
    id: 5,
    title: 'Python Projects',
    imgUrl: 'notarealurl',
    text: 'Project Test 5',
    gitUrl: 'notarealurl',
  },
]

const contactsMock = [
  {
    id: 1,
    imgUrl: 'notarealurl',
    text: 'contact 1',
  },
  {
    id: 2,
    imgUrl: 'notarealurl',
    text: 'contact 2',
  },
]

const skillsMock = [
  {
    id: 1,
    imgUrl: 'notarealurl',
    text: 'ASP.NET Core',
    type: 0,
  },
  {
    id: 2,
    imgUrl: 'notarealurl',
    text: 'Entity Framework',
    type: 0,
  },
  {
    id: 3,
    imgUrl: 'notarealurl',
    text: 'SQL Server',
    type: 0,
  },
  {
    id: 4,
    imgUrl: 'notarealurl',
    text: 'Azure',
    type: 0,
  },
  {
    id: 5,
    imgUrl: 'notarealurl',
    text: 'HTML',
    type: 1,
  },
  {
    id: 6,
    imgUrl: 'notarealurl',
    text: 'CSS',
    type: 1,
  },
  {
    id: 7,
    imgUrl: 'notarealurl',
    text: 'JavaScript',
    type: 1,
  },
  {
    id: 8,
    imgUrl: 'notarealurl',
    text: 'React',
    type: 1,
  },
  {
    id: 9,
    imgUrl: 'notarealurl',
    text: 'Csharp',
    type: 2,
  },
  {
    id: 10,
    imgUrl: 'notarealurl',
    text: 'Python',
    type: 2,
  },
  {
    id: 11,
    imgUrl: 'notarealurl',
    text: 'JavaScript',
    type: 2,
  },
  {
    id: 12,
    imgUrl: 'notarealurl',
    text: 'TypeScript',
    type: 2,
  },
]

const mockState: AppState = {
  backgroundParagraphs: backgroundParagraphsMock,
  contacts: contactsMock,
  introduction: introductionMock,
  mediaLinks: mediaLinksMock,
  projects: projectsMock,
  skills: skillsMock,
  baseUrl: '',
  token: '',
};

export { mockState };