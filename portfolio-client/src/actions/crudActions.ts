//export function fetchProjectsRequest() {
//  const action: ProjectAction = {
//    type: 'FETCH_REQUEST',
//    project: {} as IProject,
//    projects: []
//  }
//  return (dispatch: ProjectDispatch) =>
//    dispatch(action)
//}

export function addBackgroundParagraph(backgroundParagraph: IBackgroundParagraph) {
  const action: AppAction = {
    type: 'ADD_BACKGROUNDPARAGRAPH',
    backgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function editBackgroundParagraph(backgroundParagraph: IBackgroundParagraph) {
  const action: AppAction = {
    type: 'EDIT_BACKGROUNDPARAGRAPH',
    backgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function removeBackgroundParagraph(backgroundParagraph: IBackgroundParagraph) {
  const action: AppAction = {
    type: 'REMOVE_BACKGROUNDPARAGRAPH',
    backgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}



export function addContact(contact: IContact) {
  const action: AppAction = {
    type: 'ADD_CONTACT',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function editContact(contact: IContact) {
  const action: AppAction = {
    type: 'EDIT_CONTACT',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function removeContact(contact: IContact) {
  const action: AppAction = {
    type: 'REMOVE_CONTACT',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}



export function editIntroduction(introduction: IIntroduction) {
  const action: AppAction = {
    type: 'EDIT_INTRODUCTION',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}



export function addMediaLink(mediaLink: IMediaLink) {
  const action: AppAction = {
    type: 'ADD_MEDIALINK',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function editMediaLink(mediaLink: IMediaLink) {
  const action: AppAction = {
    type: 'EDIT_MEDIALINK',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function removeMediaLink(mediaLink: IMediaLink) {
  const action: AppAction = {
    type: 'REMOVE_MEDIALINK',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink,
    project: {} as IProject,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}



export function addProject(project: IProject) {
  const action: AppAction = {
    type: 'ADD_PROJECT',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function editProject(project: IProject) {
  const action: AppAction = {
    type: 'EDIT_PROJECT',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function removeProject(project: IProject) {
  const action: AppAction = {
    type: 'REMOVE_PROJECT',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project,
    skill: {} as ISkill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}



export function addSkill(skill: ISkill) {
  const action: AppAction = {
    type: 'ADD_SKILL',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function editSkill(skill: ISkill) {
  const action: AppAction = {
    type: 'EDIT_SKILL',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}

export function removeSkill(skill: ISkill) {
  const action: AppAction = {
    type: 'REMOVE_SKILL',
    backgroundParagraph: {} as IBackgroundParagraph,
    contact: {} as IContact,
    introduction: {} as IIntroduction,
    mediaLink: {} as IMediaLink,
    project: {} as IProject,
    skill
  }
  return (dispatch: AppDispatch) => dispatch(action);
}
