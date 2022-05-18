import { defineStore } from "pinia";
import ky from 'ky'

let temp = []

export const allUsers = defineStore('allUsers', {
    state: () => {
        return{
            allUsers: [],
            currentContact:{},
            authUser: {},
            renderToggle: false,
            emojiToggle: false,
            chatMessage: '',
            chatData: [],
        }
    },
    actions:{
        async getChats(){
            const accessToken = localStorage.getItem('access_token');
        const data = await ky.get(`http://127.0.0.1:8000/api/chats/contact/${this.currentContact.id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    }).json()

     this.chatData = data.data 
        },

        async getAllUsers(){
            const accessToken = localStorage.getItem('access_token')
            const resp = await ky.get('http://localhost:8000/api/users', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
            }).json()
            .then((resp) => {
                setTimeout(()=>{
                     temp = resp.filter(user => user.id !== this.authUser.id)
                    this.allUsers = temp
                },500)
            })
           
        },

        current(contact){
            this.currentContact = contact
        },

        async getAuthUser(){
            const accessToken = localStorage.getItem('access_token');

            const resp = await ky.get('http://localhost:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .json()

            this.authUser = resp
        }
    }
})
