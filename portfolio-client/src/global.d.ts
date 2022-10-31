interface IHomeProps {
  introduction: { id: number, profilePicUrl: string, text: string }
  setIntroduction: Dispatch<SetStateAction<introduction>>
}

interface IAboutProps {
  backgroundParagraphs: { id: number, text: string }[]
  setBackgroundParagraphs: Dispatch<SetStateAction<backgroundParagraphs>>
}

interface IMediaLinkProps {
  mediaLinks: { id: number, imgUrl: string, url: string, text: string }[]
  setMediaLinks: Dispatch<SetStateAction<mediaLinks>>
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
  mediaLinkProps: IMediaLinkProps
}
