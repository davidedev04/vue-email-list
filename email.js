const { createApp } = Vue;

createApp({
    data() {
        return {

            email: ""

        }
    },
    mounted() {
        for (i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((emailData) => {
                    console.log(emailData.data.response);
                    this.email = emailData.data.response;
                })
        }
    }
}).mount('#list')



