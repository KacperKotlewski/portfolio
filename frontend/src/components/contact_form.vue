<script>
export default{

}
</script>

<template>
    <form id="email_form">
        <div>
            <input placeholder="Name" type="text" name="name">
            <input placeholder="Email*" type="email" name="email" required>
            <input placeholder="Subject" type="text" name="subject">
        </div>
        <textarea placeholder="Message*" name="message" required></textarea>
    </form>
</template>

<style scoped>
#email_form{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
    padding: 5vw 5vh;
    max-width: 500px;
    max-height: 250px;
}
div{
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
</style>
