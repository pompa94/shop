const App = {
    data(){
        return{
            products:[],
            displayLabel:true,
            max: 18000
        }
    },
    created(){
        fetch('./js/data.json')
        .then(
            Response=>Response.json()
            )
        .then(
            data=>this.products=data
        )
    },
    computed:{
        filteredProducts(){
            return this.products.filter(item => (item.price < this.max));
        }
    },
    methods:{
        won(value){
            return value.toLocaleString('ko-KR');
        }
    }
}

Vue.createApp(App).mount('#app')