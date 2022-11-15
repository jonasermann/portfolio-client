const introductionMock = {
  id: 1,
  profilePicUrl: "notarealurl/api/PortfolioImages/1",
  text: "Home Test"
}

const backgroundParagraphsMock = [
  {
    id: 1,
    text: "About Test 1"
  },
  {
    id: 2,
    text: "About Test 2"
  },
  {
    id: 3,
    text: "About Test 3"
  },
  {
    id: 4,
    text: "About Test 4"
  }
]

const mediaLinksMock = [
  {
    id: 1,
    imgUrl: "notarealurl/api/PortfolioImages/7",
    url: "notarealurl/jonas-ermann-359797a2",
    text: "media link 1"
  },
  {
    id: 2,
    imgUrl: "notarealurl/api/PortfolioImages/8",
    url: "notarealurl/jonasermann",
    text: "media link 2"
  }
]

const projectsMock = [
  {
    id: 1,
    title: "Quiz",
    imgUrl: "notarealurl/api/PortfolioImages/2",
    text: "Project Test 1",
    gitUrl: "notarealurl/jonasermann/hackday"
  },
  {
    id: 2,
    title: "Horizon Calculator",
    imgUrl: "notarealurl/api/PortfolioImages/3",
    text: "Project Test 2",
    gitUrl: "notarealurl/jonasermann/hackday"
  },
  {
    id: 3,
    title: "Horizon Calculator (again)",
    imgUrl: "notarealurl/api/PortfolioImages/4",
    text: "Project Test 3",
    gitUrl: "notarealurl/jonasermann/horizon-calculator"
  },
  {
    id: 4,
    title: "Kalaha",
    imgUrl: "notarealurl/api/PortfolioImages/5",
    text: "Project Test 4",
    gitUrl: "notarealurl/jonasermann/python-projects/blob/main/Kalaha_Play.py"
  },
  {
    id: 5,
    title: "Python Projects",
    imgUrl: "notarealurl/api/PortfolioImages/6",
    text: "Project Test 5",
    gitUrl: "notarealurl/jonasermann/python-projects/"
  }
]

const contactsMock = [
  {
    id: 1,
    imgUrl: "notarealurl/api/PortfolioImages/9",
    text: "contact 1"
  },
  {
    id: 2,
    imgUrl: "notarealurl/api/PortfolioImages/10",
    text: "contact 2"
  }
]

const skillsMock = [
  {
    id: 1,
    imgUrl: "notarealurl/api/PortfolioImages/11",
    text: "ASP.NET Core",
    type: 0
  },
  {
    id: 2,
    imgUrl: "notarealurl/api/PortfolioImages/12",
    text: "Entity Framework",
    type: 0
  },
  {
    id: 3,
    imgUrl: "notarealurl/api/PortfolioImages/13",
    text: "SQL Server",
    type: 0
  },
  {
    id: 4,
    imgUrl: "notarealurl/api/PortfolioImages/14",
    text: "Azure",
    type: 0
  },
  {
    id: 5,
    imgUrl: "notarealurl/api/PortfolioImages/15",
    text: "HTML",
    type: 1
  },
  {
    id: 6,
    imgUrl: "notarealurl/api/PortfolioImages/16",
    text: "CSS",
    type: 1
  },
  {
    id: 7,
    imgUrl: "notarealurl/api/PortfolioImages/17",
    text: "JavaScript",
    type: 1
  },
  {
    id: 8,
    imgUrl: "notarealurl/api/PortfolioImages/18",
    text: "React",
    type: 1
  },
  {
    id: 9,
    imgUrl: "notarealurl/api/PortfolioImages/19",
    text: "Csharp",
    type: 2
  },
  {
    id: 10,
    imgUrl: "notarealurl/api/PortfolioImages/6",
    text: "Python",
    type: 2
  },
  {
    id: 11,
    imgUrl: "notarealurl/api/PortfolioImages/17",
    text: "JavaScript",
    type: 2
  },
  {
    id: 12,
    imgUrl: "notarealurl/api/PortfolioImages/20",
    text: "TypeScript",
    type: 2
  }
]

import { Dispatch, SetStateAction } from 'react';

const homeProps: IHomeProps = {
  introduction: introductionMock,
  setIntroduction: {} as Dispatch<SetStateAction<typeof introductionMock>>
}

const aboutProps: IAboutProps = {
  backgroundParagraphs: backgroundParagraphsMock,
  setBackgroundParagraphs: {} as Dispatch<SetStateAction<typeof backgroundParagraphsMock>>
}

const mediaLinkProps: IMediaLinkProps = {
  mediaLinks: mediaLinksMock,
  setMediaLinks: {} as Dispatch<SetStateAction<typeof mediaLinksMock>>
}

const projectProps: IProjectProps = {
  projects: projectsMock,
  setProjects: {} as Dispatch<SetStateAction<typeof projectsMock>>
}

const contactProps: IContactProps = {
  contacts: contactsMock,
  setContacts: {} as Dispatch<SetStateAction<typeof contactsMock>>
}

const skillProps: ISkillsProps = {
  skills: skillsMock,
  setSkills: {} as Dispatch<SetStateAction<typeof skillsMock>>
}

const mockAppProps: IAppProps = {
  homeProps, aboutProps, projectProps, contactProps, skillProps, mediaLinkProps, rootUrl: ''
}

export { mockAppProps };
