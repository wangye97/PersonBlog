<template>
  <div style="background-color: azure;">
    <div class="footer_contain">
        <div>Copyright @ by FUUKER All Rights Reserver</div>
        <div class="statement">
            <div>the morning sun never lasts a day</div>
            <div>Every tide has its ebb</div>
            <div>Diligence is the mother of good fortune</div>
        </div>
        <div>if you do not learn to think when you are young,you may never learn</div>
        <div>分别后的难过都是依赖，无法相拥的人要好好道别————|至此流年给天涯|</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
    .footer_contain{
        width: 1215px;
        height: 350px;
        /* background-color: aqua; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 18px;
        background-color: azure;
        margin: 0 auto;

}
.footer_contain .statement{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: aqua;
}
@media only screen and (max-width:768px){
    .footer_contain{
        width: 100%;
    }
    .footer_contain .statement{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>