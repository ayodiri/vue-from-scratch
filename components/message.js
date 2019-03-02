Vue.component('message', {
    data() {
        return {
            message: 'Hello Vue JS2 World!!!!'
        }
    },
    template: `
        <div>
            <h2>Componente Message</h2>
            <p>{{ message }}<p>
        </div>
    `
})