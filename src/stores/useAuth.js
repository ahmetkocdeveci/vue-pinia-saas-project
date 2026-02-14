import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [],
    currentUser: null
  }),
  actions: {
    register(name, email, password) {
      const emailExists = this.users.find(u => u.email === email)
      if (emailExists) {
        throw new Error('An account with this email address already exists.')
      }
      
      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        avatar: `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=10b981&color=fff`
      }
      
      this.users.push(newUser)
      this.currentUser = newUser
    },
    login(email, password) {
      const user = this.users.find(u => u.email === email && u.password === password)
      if (!user) {
        throw new Error('Incorrect email or password.')
      }
      this.currentUser = user
    },
    logout() {
      this.currentUser = null
    }
  }
})