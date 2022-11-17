interface IBackgroundParagraph {
  id: number
  text: string
};

interface IContact {
  id: number
  imgUrl: string
  text: string
};

interface IIntroduction {
  id: number
  profilePicUrl: string
  text: string
};

interface IMediaLink {
  id: number
  imgUrl: string
  url: string
  text: string
};

interface IProject {
  id: number
  title: string
  imgUrl: string
  text: string
  gitUrl: string
};

interface ISkill {
  id: number
  imgUrl: string
  text: string
  type: number
};

interface AppState {
  backgroundParagraphs: IBackgroundParagraph[]
  contacts: IContact[]
  introduction: IIntroduction
  mediaLinks: IMediaLink[]
  projects: IProject[]
  skills: ISkill[]
  baseUrl: string
  token: string
};

type AppAction = {
  type: string
  backgroundParagraph: IBackgroundParagraph
  contact: IContact
  introduction: IIntroduction
  mediaLink: IMediaLink
  project: IProject
  skill: ISkill
  state: AppState
};

type AppDispatch = (args: AppAction) => AppAction

interface IAppProps {
  baseUrl: string
  token: string
};