interface IIntroduction {
  id: number
  profilePicUrl: string
  text: string
}

interface IntroductionState {
  introduction : IIntroduction
}

type IntroductionAction = {
  type: string
  introduction: IIntroduction
}

type IntroductionDispatch = (args: IntroductionAction) => IntroductionAction



interface IBackgroundParagraph {
  id: number
  text: string
}

interface BackgroundParagraphsState {
  backgroundParagraphs: IBackgroundParagraph[]
}

type BackgroundParagraphAction = {
  type: string
  backgroundParagraph: IBackgroundParagraph
  backgroundParagraphs: IBackgroundParagraph[]
}

type BackgroundParagraphDispatch = (args: BackgroundParagraphAction) => BackgroundParagraphAction



interface IMediaLink {
  id: number
  imgUrl: string
  url: string
  text: string
}

interface MediaLinksState {
  mediaLinks: IMediaLink[]
}

type MediaLinkAction = {
  type: string
  mediaLink: IMediaLink
  mediaLinks: IMediaLink[]
}

type MediaLinkDispatch = (args: MediaLinkAction) => MediaLinkAction



interface IProject {
  id: number
  title: string
  imgUrl: string
  text: string
  gitUrl: string
}

interface ProjectsState {
  projects: IProject[]
}

type ProjectAction = {
  type: string
  project: IProject
  projects: IProject[]
}

type ProjectDispatch = (args: ProjectAction) => ProjectAction



interface IContact {
  id: number
  imgUrl: string
  text: string
}

interface ContactsState {
  contacts: IContact[]
}

type ContactAction = {
  type: string
  contact: IContact
  contacts: IContact[]
}

type ContactDispatch = (args: ContactAction) => ContactAction



interface ISkill {
  id: number
  imgUrl: string
  text: string
  type: number
}

interface SkillsState {
  skills: ISkill[]
}

type SkillAction = {
  type: string
  skill: ISkill
  skills: ISkill[]
}

type SkillDispatch = (args: SkillAction) => SkillAction

interface IApp {
  backgroundParagraphs: IBackgroundParagraph[]
  contacts: IContact[]
  introduction: IIntroduction
  mediaLinks: IMediaLink[]
  projects: IProject[]
  skills: ISkill[]
}

interface AppState {
  backgroundParagraphs: IBackgroundParagraph[]
  contacts: IContact[]
  introduction: IIntroduction
  mediaLinks: IMediaLink[]
  projects: IProject[]
  skills: ISkill[]
}

type AppAction = {
  type: string
  backgroundParagraph: IBackgroundParagraph
  contact: IContact
  introduction: IIntroduction
  mediaLink: IMediaLink
  project: IProject
  skill: ISkill
  state: AppState
}

type AppDispatch = (args: AppAction) => AppAction

interface IAppProps {
  baseUrl: string
  token: string
};