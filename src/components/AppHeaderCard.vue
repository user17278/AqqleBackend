<template>
    <div class="app-header">
        <div class="app-header-left">
            <span class="app-header-left-icon">
                <svg t="1682567989128" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="2605" width="32" height="32" fill="none">
                    <path
                        d="M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z"
                        p-id="2606"></path>
                    <path
                        d="M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"
                        p-id="2607"></path>
                </svg>
            </span>
            <p class="app-header-left-name">Aqqle订单管理</p>
            <div class="search-wrapper">
                <input class="search-input" type="text" placeholder="搜索订单号/手机号码" v-model="searchInput"
                    @keyup.enter="searchHandler">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search"
                    viewBox="0 0 24 24" @click="searchHandler">
                    <defs></defs>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                </svg>
                <div class="search-result" v-if="searchResultArr.length">
                    <div class="search-result-box">
                        <div class="isNoResult" v-if="searchResultArr[0].isNoResult"><svg t="1682488624150" class="icon"
                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2069"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
                                <path
                                    d="M309.338022 495.542857c37.167824 0 67.415209-30.39367 67.415209-67.730286S346.505846 360.087912 309.338022 360.087912C272.181451 360.087912 241.934066 390.475956 241.934066 427.812571c0 37.336615 30.247385 67.730286 67.403956 67.730286z m405.323956 0c37.156571 0 67.403956-30.39367 67.403956-67.730286S751.818549 360.087912 714.661978 360.087912c-37.167824 0-67.415209 30.388044-67.415209 67.724659 0 37.336615 30.247385 67.730286 67.409583 67.730286z m-388.03411 223.147605c46.665143-37.336615 108.026374-59.909626 185.805363-59.909627 77.778989 0 138.273758 22.573011 185.805362 59.909627 28.520088 23.445099 45.798681 46.023736 54.446418 63.386725 6.909187 13.025055 0.860835 29.521582-12.096703 36.464527-12.968791 6.948571-29.386549 0.872088-36.301363-12.152967-0.866462-1.738549-3.454593-6.948571-8.64211-13.025055-7.775648-11.286505-19.017143-21.706549-31.113846-32.126593-37.156571-30.388044-87.281934-48.623121-152.097758-48.623121-64.815824 0-114.941187 18.229451-152.103385 48.623121a179.031209 179.031209 0 0 0-31.113846 32.126593c-4.315429 6.076484-7.775648 10.420044-8.636484 13.025055-6.92044 13.025055-22.471736 19.101538-36.301362 12.152967-12.963165-6.942945-19.011516-22.573011-12.096703-36.464527 8.64211-17.368615 25.92633-40.808088 54.446417-63.386725z"
                                    fill="#9D9D9D" p-id="2070"></path>
                                <path
                                    d="M512 1024c-282.421451 0-512-229.578549-512-512S229.578549 0 512 0s512 229.578549 512 512-230.445011 512-512 512zM512 51.982066C258.166154 51.982066 51.982066 258.166154 51.982066 512c0 253.833846 206.184088 460.017934 460.017934 460.017934 253.833846 0 460.017934-206.184088 460.017934-460.017934 0-253.833846-207.050549-460.017934-460.017934-460.017934z"
                                    fill="#9D9D9D" p-id="2071"></path>
                            </svg><span>无相关订单</span></div>
                        <div v-if="!searchResultArr[0].isNoResult">
                            <SearchResultBox v-for="(item, index) in searchResultArr" :key="index"
                                :item="searchResultArr[index + 1]">
                            </SearchResultBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-header-right">
            <button class="mode-switch" title="主题切换" @click="modeSwitchHandler">
                <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                    <defs></defs>
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
            </button>
            <button class="profile-btn"><img
                    src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R639.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"
                    title="点击切换头像" />
                <span title="点击修改用户信息">测试区域店</span></button>
        </div>
        <button class="messages-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-message-circle">
                <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        </button>
    </div>
</template>

<script>
import { getOrderList } from '@/api/order';
import SearchResultBox from './SearchResultBox.vue';
export default {
    components: { SearchResultBox },
    data() {
        return {
            // 搜索结果
            searchInput: "",
            isNoResult: false,
            searchResultArr: [

            ],
            // 通知信息
            messageListArr: [],
            isShowMessageBox: false
        }
    },
    mounted() {
        // 关闭搜索结果
        document.addEventListener('click', (e) => {
            if (e.target.className != 'search-result-box') {
                this.searchResultArr = []
            }
        })
    },
    methods: {
        // 获取搜索结果
        searchHandler() {
            console.log('回车事件获取输入值：', this.searchInput);
            getOrderList(this.searchInput).then(res => {
                this.searchResultArr = res.data
            })
        },
        modeSwitchHandler() {
            document.documentElement.classList.toggle('dark');
        },
        notificationHandler() {
            // getMessageList(this.searchInput).then(res => {
            //     this.searchResultArr = res.data
            // })
            this.messageListArr
        }
    }
}
</script>

<style lang="scss" scoped>
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    position: relative;

    &-left {
        flex-grow: 1;
    }

    &-left {
        display: flex;
        align-items: center;

        &-icon {
            transform: rotateY(180deg);

            svg {
                fill: var(--main-color)
            }
        }

        &-name {
            color: var(--main-color);
            margin: 0;
            font-size: 20px;
            line-height: 24px;
            font-weight: 700;
            margin: 0 32px;
        }

        .search-wrapper {
            position: relative;
            border-radius: 20px;
            background-color: var(--search-area-bg);
            padding-right: 12px;
            width: 100%;
            max-width: 480px;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--light-font);
            box-shadow: 0 2px 6px 0 rgba(136, 148, 171, .2), 0 24px 20px -24px rgba(71, 82, 107, .1);
            // overflow: hidden;
            z-index: 1;

            .dark & {
                box-shadow: none;
            }

            .search-input {
                border: none;
                flex: 1;
                outline: none;
                height: 100%;
                padding: 0 20px;
                font-size: 16px;
                background-color: transparent;
                // color: var(--main-color);
                -webkit-text-fill-color: var(--secondary-color);
                opacity: 0.6;

                &:placeholder {
                    color: var(--main-color);
                    opacity: .6;
                }
            }

            .search-result {
                position: absolute;
                width: 100%;
                max-width: 480px;
                top: 50px;
                z-index: 999;
                padding: 20px 0px;
                border-radius: 20px;
                box-shadow: 0 2px 6px 0 rgba(136, 148, 171, .2), 0 24px 20px -24px rgba(71, 82, 107, .1);
                background-color: var(--search-area-bg);
                transition: .2s;

                &-box .isNoResult {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0.7;

                    .icon {}

                    span {
                        margin-left: 6px;
                        font-size: 14px;
                        color: var(--secondary-color);
                    }
                }
            }
        }
    }

    &-right {
        display: flex;
        align-items: center;

        button {
            margin-left: 10px;
        }

        .mode-switch {
            background-color: transparent;
            border: none;
            padding: 0;
            color: var(--main-color);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .profile-btn {
            padding: 0;
            border: 0;
            background-color: transparent;
            display: flex;
            align-items: center;
            padding-left: 12px;
            border-left: 2px solid #ddd;

            img {
                width: 32px;
                height: 32px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 4px;
            }

            span {
                color: var(--main-color);
                font-size: 16px;
                line-height: 24px;
                font-weight: 700;
            }
        }
    }

    .messages-btn {
        border-radius: 4px 0 0 4px;
        position: absolute;
        right: 0;
        top: 58px;
        background-color: var(--message-btn);
        border: none;
        color: var(--main-color);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        display: none;
    }
}

@media screen and (max-width:880px) {
    .messages-btn {
        display: flex !important;
    }
}

@media screen and (max-width: 720px) {

    .app-header-left-name,
    .profile-btn span {
        display: none;
    }

    .notification-btn,
    .mode-switch {
        width: 20px !important;
        height: 20px !important;

        svg {
            width: 16px !important;
            height: 16px !important;
        }
    }

    .app-header-right button {
        margin-left: 4px;
    }
}

@media screen and (max-width: 520px) {
    .app-header-left-icon {
        display: none;
    }


    .app-header {
        padding: 16px 10px;
    }

    .search-input {
        max-width: 120px;
    }

    .profile-btn img {
        width: 24px;
        height: 24px;
    }

    .app-header {
        padding: 10px;
    }

    .search-input {
        font-size: 14px;
    }

    .messages-btn {
        top: 48px !important;
    }
}
</style>