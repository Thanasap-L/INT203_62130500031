const app = {
    data() {
        return {
            image: './images/1.jpg',
            name: 'Thanasap Leelapisuth',
            position: 'Student',
            article: '25',
            follower: '103',
            rating: '7.0',
        }
    },
}
var mountApp = Vue.createApp(app).mount('#app')