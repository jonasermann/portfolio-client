
interface IHomeProps {
  homeContent: { id: number, profilePicUrl: string, text: string }
  setHomeContent: Dispatch<SetStateAction<homeContent>>
}

interface IAboutProps {
  aboutParagraphs: { id: number, text: string }[],
  setAboutParagraphs: Dispatch<SetStateAction<aboutParagraphs>>,
  homeLinks: { id: number, imgUrl: string, url: string, text: string }[],
  setHomeLinks: Dispatch<SetStateAction<homeLinks>>
}

interface IProjectProps {
  projects: { id: number, title: string, imgUrl: string, text: string, gitUrl: string }[]
  setProjects: Dispatch<SetStateAction<projects>>
}

interface IContactProps {
  contacts: { id: number, imgUrl: string, text: string }[]
  setContacts: Dispatch<SetStateAction<contacts>>
}

interface ISkillsProps {
  skills: { id: number, imgUrl: string, text: string, type: number }[]
  setSkills: Dispatch<SetStateAction<backend>>
}

interface IAppProps {
  homeProps: IHomeProps
  aboutProps: IAboutProps
  projectProps: IProjectProps
  contactProps: IContactProps
  skillProps: ISkillsProps
}