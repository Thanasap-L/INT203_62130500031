const app = {
    data() {
        return {
            image: './images/1.jpg',
            name: 'Thanasap Leelapisuth',
            position: 'Student',
            article: 'Article',
            follower: 'Followers',
            rate:'Ratings',
            numar: '25',
            numfol: '103',
            numrate: '7.0',
            bt1: 'Follow',
            bt2: 'Chat'
        }
    },
}
var mountApp = Vue.createApp(app).mount('#app')