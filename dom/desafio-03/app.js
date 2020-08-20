new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    
    methods: {
        resultado(){
            return this.valor != 37 ? 'Valor diferente' : 'Valor Igual'

        },
        watch: {
            resultado(){
              setTimeout(() => {
                  this.value = 0


              },5000)
            }
            
          }
    }
});