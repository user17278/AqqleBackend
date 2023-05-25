<template>
    <div class="dialogue-section">
        <button class="dialogue-section-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-x-circle">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
        </button>
        <div class="dialogue-section-header">
            <p>消费者对话</p>
        </div>
        <div class="dialogue-section-box">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202303_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1680617131118"
                alt="用户头像">
            <div class="dialogue-content">
                <div class="dialogue-content-header">
                    <div class="name">测试人</div>
                    <button class="dialogue-content-header-close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x-circle">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                    </button>
                </div>
                <p class="dialogue-content-line">
                    这是测试人的最新对话，点击进入聊天框。这是测试人的最新对话，点击进入聊天框。这是测试人的最新对话，点击进入聊天框。这是测试人的最新对话，点击进入聊天框。这是测试人的最新对话，点击进入聊天框。
                </p>
                <p class="dialogue-content-line time">
                    十二月, 12, 12:00
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dialogue-section {
    flex-shrink: 0;
    padding-bottom: 32px;
    background-color: var(--projects-section);
    margin-left: 24px;
    flex: 1;
    width: 100%;
    border-radius: 30px;
    position: relative;
    overflow: auto;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);

    &-close {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 3;
        border: none;
        background-color: transparent;
        color: var(--main-color);
        // display: none;
    }

    &-header {
        position: sticky;
        top: 0;
        z-index: 1;
        padding: 32px 24px 0 24px;
        background-color: var(--projects-section);
        color: var(--main-color);
        font-weight: 700;
        opacity: 0.9;
    }

    &-box {
        border-top: 1px solid var(--dialogue-section-box-border);
        padding: 16px;
        display: flex;
        align-items: flex-start;
        width: 100%;

        &:hover {
            background-color: var(--dialogue-section-box-hover);
            border-top-color: var(--link-color-hover);

            +.dialogue-section-box {
                border-top-color: var(--link-color-hover);
            }
        }

        img {
            border-radius: 50%;
            object-fit: cover;
            width: 40px;
            height: 40px;
        }

        .dialogue-content {
            padding-left: 16px;
            width: 100%;

            &-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;

                .name {
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: 700;
                    color: var(--main-color);
                    margin: 0;
                }

                &-close-btn {
                    background-color: transparent;
                    color: var(--main-color);
                    border: none;

                }
            }

            &-line {
                font-size: 14px;
                line-height: 20px;
                margin: 8px 0;
                color: var(--secondary-color);
                opacity: .7;

                &.time {
                    text-align: right;
                    margin-bottom: 0;
                }
            }

        }
    }
}

@media screen and (max-width: 880px) {
    .dialogue-section {
        transform: translateX(100%);
        position: absolute;
        opacity: 0;
        top: 0;
        z-index: 2;
        height: 100%;
        width: 100%;

        .dialogue-section-close {
            display: block;
        }
    }
}
</style>