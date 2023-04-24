<template>
    <div class="app-header">
        <div class="app-header-left">
            <span class="app-header-left-icon">
                <img src="@/assets/img/apple-fill.png" alt="">
            </span>
            <p class="app-header-left-name">Aqqle订单管理</p>
            <div class="search-wrapper">
                <input class="search-input" type="text" placeholder="搜索订单号/手机号码">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search"
                    viewBox="0 0 24 24">
                    <defs></defs>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                </svg>
            </div>
        </div>
        <div class="app-header-right">
            <button class="mode-switch" title="主题切换">
                <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                    <defs></defs>
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
            </button>
            <button class="notification-btn" title="通知信息"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg></button>
            <button class="profile-btn"><img src="https://assets.codepen.io/3306515/IMG_2025.jpg" title="点击切换头像" />
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
export default {

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
            width: 30px;
            height: 30px;
            position: relative;

            img {
                width: 30px;
                height: 30px;
                position: absolute;
                bottom: 2px;
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
            overflow: hidden;

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
                background-color: var(--search-area-bg);
                color: var(--main-color);

                &:placeholder {
                    color: var(--main-color);
                    opacity: .6;
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

        .notification-btn {
            color: var(--main-color);
            padding: 0;
            border: 0;
            background-color: transparent;
            height: 32px;
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