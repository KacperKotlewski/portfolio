<script>
export default{

}
</script>

<template>
    <form id="email_form">
        <div id="first_holder">
            <input placeholder="Name" type="text" name="name">
            <input placeholder="Email*" type="email" name="email" required>
            <input placeholder="Subject" type="text" name="subject">
        </div>
        <div id="second_holder">
            <textarea placeholder="Message*" name="message" required></textarea>
            <span id="send"><i class="bi bi-send-fill"></i><span>send</span></span>
        </div>
    </form>
</template>

<style scoped>
#email_form{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 5px;
    padding: 5vw 5vh;
    min-width: 40vw;
    min-height: 40vh;
    max-width: 80vw;
    max-height: 60vh;
    margin-bottom: 10vh;
}
#email_form textarea, #email_form input, #email_form #send{
        background-color: rgba(0, 0, 0, 0.8);
        border: 3px solid #0AE1C1;
        border-radius: 1rem;
        color: #0AE1C1;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        transition: 0.4s;
        text-decoration: none;
        width: 100%
}
div#first_holder{
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 5px;
}
div#second_holder{
    position: relative;
}
div#second_holder #send{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0px;
    min-width: 1rem;
    padding: 0.2rem 1.5rem 0.2rem 0.5rem;
    border-radius: 1.5rem;
    height: 2.3rem;
}
#send span {
    width: 0px;
    display: none;
}
div#second_holder textarea{
    height: 100%;
}
@media screen and (max-width: 768px) {
    #email_form{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
    }
}
</style>
