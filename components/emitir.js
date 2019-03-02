Vue.component('emitir', {
    data() {
        return {
            carBrand: 'Toyota'
        }
    },
    template: `
        <div>
            <h2>Emitir eventos con Vuejs 2</h2>
            <p @click="$emit('show_card_brand', carBrand)">
                Pulsa aquí para emitir un evento a la instancia ROOT de Vuejs 2
            </p>
        </div>
    `
})