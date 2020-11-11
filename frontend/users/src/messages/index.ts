import { defineMessages } from 'react-intl'

export const namespace = '@frontend/users'

export default defineMessages({
  users: {
    id: `${namespace}.users`,
    defaultMessage: 'Пользователи',
  },
  at: {
    id: `${namespace}.at`,
    defaultMessage: 'в',
  },
  name: {
    id: `${namespace}.name`,
    defaultMessage: 'имя',
  },
  email: {
    id: `${namespace}.email`,
    defaultMessage: 'email',
  },
  registered: {
    id: `${namespace}.registered`,
    defaultMessage: 'зарегестрирован',
  },
  lastLogin: {
    id: `${namespace}.lastLogin`,
    defaultMessage: 'последний вход',
  },
  nameFiltOptUp: {
    id: `${namespace}.nameFiltOptUp`,
    defaultMessage: 'Имена в порядке A-Z'
  },
  nameFiltOptDown: {
    id: `${namespace}.nameFiltOptDown`,
    defaultMessage: 'Имена в порядке Z-A'
  },
  emailFiltOptUp: {
    id: `${namespace}.emailFiltOptUp`,
    defaultMessage: 'Email в порядке A-Z'
  },
  emailFiltOptDown: {
    id: `${namespace}.emailFiltOptDown`,
    defaultMessage: 'Email в порядке Z-A'
  },
})
