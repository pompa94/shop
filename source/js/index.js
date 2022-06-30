const App = {
    data(){
        return{
            products:[],
            displayLabel:true,
            max: 18000,
            displayCart:false,
            cart:[]

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
        },
        cartTotal(){
            return this.cart.reduce((inc,item)=> Number(item.price) + inc,0)
        }
    },
    methods:{
        won(value){
            return value.toLocaleString('ko-KR');
        },
        addToCart(product){
            this.cart.push(product);
        }
    }
}

Vue.createApp(App).mount('#app')