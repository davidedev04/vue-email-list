const { createApp } = Vue;

createApp({
    data() {
        return {

            emailArr: [],

        }
    },
    mounted() {
        
        for (i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((emailData) => {
                    /* this.email = emailData.data.response; */
                    
                    console.log(emailData.data.response);
                    this.emailArr.push(emailData.data.response);
                });
        }
    }
}).mount('#list')



