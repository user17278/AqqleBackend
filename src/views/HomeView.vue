<template>
    <div class="app-container">
        <AppHeaderCard></AppHeaderCard>
        <AppContentCard></AppContentCard>
    </div>
</template>

<script>
import AppHeaderCard from '@/components/AppHeaderCard.vue';
import AppContentCard from '@/components/AppContentCard.vue';
export default {
    components: { AppHeaderCard, AppContentCard }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

.app-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--app-container);
    transition: .2s;
    max-width: 1800px;

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: 'DM Sans', sans-serif;
    }
}
</style>