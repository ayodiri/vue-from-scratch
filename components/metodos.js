Vue.component('metodos', {
    data() {
        return {
            name: 'Aitziber',
            surname: 'Iridoy'
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.surname}`
        }
    },
    methods: {
        hello() {
            alert(this.fullName);
        }
    },
    template: `
        <div>
            <h2>Ejecutar métodos con VueJS</h2>
            <p @click="hello">Pulsa aquí para ejecutar el método hello</p>
        </div>
    `
});