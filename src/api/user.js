import { mutate } from 'webkit/api'

export const NEWSLETTER_EMAIL_LOGIN_MUTATION = `
  mutation ($email: String!) {
    emailLogin(email: $email, subscribeToWeeklyNewsletter: true) {
      success
    }
  }
`

export const loginWithNewsletter = (email) =>
  mutate(NEWSLETTER_EMAIL_LOGIN_MUTATION, {
    variables: { email },
  })
