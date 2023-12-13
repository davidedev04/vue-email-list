const { createApp } = Vue;

createApp({
    data(){
        return{

            email: ""

        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((emailData) => {
                console.log(emailData.data.response);
                this.email = emailData.data.response;
            })
    }
}).mount('#list')



