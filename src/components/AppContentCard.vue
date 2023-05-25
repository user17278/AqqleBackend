<template>
    <div class="app-content">
        <div class="app-sidebar">
            <router-link to="/home/recent-order" class="app-sidebar-link" :class="{ active: isActive == 1 }"
                @click.native="click1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-home">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg></router-link>
            <router-link to="/home/setting" class="app-sidebar-link" :class="{ active: isActive == 2 }"
                @click.native="click2">
                <svg class="link-icon feather feather-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24">
                    <defs />
                    <circle cx="12" cy="12" r="3" />
                    <path
                        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
            </router-link>
        </div>
        <router-view></router-view>
        <DialogueSection></DialogueSection>
    </div>
</template>

<script>
import DialogueSection from './DialogueSection.vue';
export default {
    components: { DialogueSection },
    data() {
        return {
            isActive: 1
        }
    },
    methods: {
        click1() {
            this.isActive = 1
            console.log(1);
        },
        click2() {
            this.isActive = 2
            console.log(2);

        }
    }
}
</script>

<style lang="scss" scoped>
.app-content {
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 16px 24px 24px 0;

}

.app-sidebar {
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-link {
        // color: var(--main-color);
        color: var(--link-color);
        margin: 16px 0;
        transition: .2s;
        border-radius: 50%;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: var(--link-color-hover);
            color: var(--link-color-active);
        }

        &.active {
            background-color: var(--link-color-active-bg);
            color: var(--link-color-active);
        }
    }


}

@media screen and (max-width: 520px) {

    .app-sidebar {
        display: none;
    }

    .app-content {
        padding: 16px 12px 24px 12px;
    }
}
</style>