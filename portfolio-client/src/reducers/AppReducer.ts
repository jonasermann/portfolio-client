const initialState: AppState = {

    backgroundParagraphs: [
      {
        id: 1,
        text: 'text',
      }
    ],

    contacts: [
      {
        id: 1,
        imgUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
        text: 'text',
      }
    ],

    introduction:
    {
      id: 1,
      profilePicUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
      text: 'text',
    },

    mediaLinks: [
      {
        id: 1,
        url: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
        imgUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
        text: 'text',
      }
    ],

    projects: [
      {
        id: 1,
        title: 'title',
        imgUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
        text: 'text',
        gitUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
      }
    ],

    skills: [
      {
        id: 1,
        imgUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
        text: 'text',
        type: 0
      },
      {
        id: 1,
        imgUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
        text: 'text',
        type: 1
      },
      {
        id: 1,
        imgUrl: 'https://th.bing.com/th/id/OIP.p7nqaITPepG75TidfxDmvQHaHa?pid=ImgDet&rs=1',
        text: 'text',
        type: 2
      }
    ]
  }

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return {
        ...state,
        app: action
      };



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
      console.log(action.backgroundParagraph.id)
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
      console.log(action.contact.id)
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
      console.log(action.mediaLink.id)
      return {
        ...state,
        mediaLinks: [...state.mediaLinks.filter((mediaLink) => mediaLink.id !== action.mediaLink.id)],
      };



    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.project],
      };
    case 'EDIT_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project => project.id === action.project.id ? action.project : project)
      };
    case 'REMOVE_PROJECT':
      console.log(action.project.id)
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
      console.log(action.skill.id)
      return {
        ...state,
        skills: [...state.skills.filter((skill) => skill.id !== action.skill.id)],
      };

    default:
      return state;
  }
};

export default appReducer;
