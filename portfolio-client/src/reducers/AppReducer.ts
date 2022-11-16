const initialState: AppState = {

  backgroundParagraphs: [],
  contacts: [],
  introduction: {} as IIntroduction,
  mediaLinks: [],
  projects: [],
  skills: [],
  baseUrl: 'http://localhost:5133',
  token: '',
}

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {



    case "SET_STATE":
      return {
        ...state,
        backgroundParagraphs: action.state.backgroundParagraphs,
        contacts: action.state.contacts,
        introduction: action.state.introduction,
        mediaLinks: action.state.mediaLinks,
        projects: action.state.projects,
        skills: action.state.skills,
      }



    case 'ADD_BACKGROUNDPARAGRAPH':
      return {
        ...state,
        backgroundParagraphs: [...state.backgroundParagraphs, action.backgroundParagraph],
      };
    case 'EDIT_BACKGROUNDPARAGRAPH':
      return {
        ...state,
        backgroundParagraphs: state.backgroundParagraphs.map(backgroundParagraph => backgroundParagraph.id === action.backgroundParagraph.id ? action.backgroundParagraph : backgroundParagraph)
      };
    case 'REMOVE_BACKGROUNDPARAGRAPH':
      return {
        ...state,
        backgroundParagraphs: [...state.backgroundParagraphs.filter((backgroundParagraph) => backgroundParagraph.id !== action.backgroundParagraph.id)],
      };



    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.contact],
      };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.contact.id ? action.contact : contact)
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts.filter((contact) => contact.id !== action.contact.id)],
      };



    case 'EDIT_INTRODUCTION':
      return {
        ...state,
        introduction: action.introduction
      };



    case 'ADD_MEDIALINK':
      return {
        ...state,
        mediaLinks: [...state.mediaLinks, action.mediaLink],
      };
    case 'EDIT_MEDIALINK':
      return {
        ...state,
        mediaLinks: state.mediaLinks.map(mediaLink => mediaLink.id === action.mediaLink.id ? action.mediaLink : mediaLink)
      };
    case 'REMOVE_MEDIALINK':
      return {
        ...state,
        mediaLinks: [...state.mediaLinks.filter((mediaLink) => mediaLink.id !== action.mediaLink.id)],
      };


    case 'SET_PROJECTS':
      return {
        ...state,
        projects: [...action.state.projects]
        }
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.project],
      };
    case 'EDIT_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project => project.id === action.project.id ? action.project : project),
      };
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: [...state.projects.filter((project) => project.id !== action.project.id)],
      };



    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };
    case 'EDIT_SKILL':
      return {
        ...state,
        skills: state.skills.map(skill => skill.id === action.skill.id ? action.skill : skill)
      };
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: [...state.skills.filter((skill) => skill.id !== action.skill.id)],
      };

    default:
      return state;
  }
};

export default appReducer;
