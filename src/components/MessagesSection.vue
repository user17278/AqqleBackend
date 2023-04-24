<template>
    <div class="messages-section">
        <button class="messages-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-x-circle">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
        </button>
        <div class="projects-section-header">
            <p>Client Messages</p>
        </div>
        <div class="message-box">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="profile image">
            <div class="message-content">
                <div class="message-header">
                    <div class="name">Stephanie</div>
                    <div class="star-checkbox">
                        <input type="checkbox" id="star-1">
                        <label for="star-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-star">
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        </label>
                    </div>
                </div>
                <p class="message-line">
                    I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.
                </p>
                <p class="message-line time">
                    Dec, 12
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
.messages-section {
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

    .messages-close {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 3;
        border: none;
        background-color: transparent;
        color: var(--main-color);
        display: none;
    }

    .projects-section-header {
        position: sticky;
        top: 0;
        z-index: 1;
        padding: 32px 24px 0 24px;
        background-color: var(--projects-section);
    }

    .message-box {
        border-top: 1px solid var(--message-box-border);
        padding: 16px;
        display: flex;
        align-items: flex-start;
        width: 100%;

        &:hover {
            background-color: var(--message-box-hover);
            border-top-color: var(--link-color-hover);

            +.message-box {
                border-top-color: var(--link-color-hover);
            }
        }

        img {
            border-radius: 50%;
            object-fit: cover;
            width: 40px;
            height: 40px;
        }

        .message-content {
            padding-left: 16px;
            width: 100%;

            .message-header {
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

                .star-checkbox {
                    input {
                        opacity: 0;
                        position: absolute;
                        width: 0;
                        height: 0;
                    }

                    label {
                        width: 24px;
                        height: 24px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }

                    .dark & {
                        color: var(--secondary-color);



                        input:checked+label {
                            color: var(--star);
                        }
                    }

                    input:checked+label svg {
                        fill: var(--star);
                        transition: .2s;
                    }
                }
            }

            .message-line {
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
    .messages-section {
        transform: translateX(100%);
        position: absolute;
        opacity: 0;
        top: 0;
        z-index: 2;
        height: 100%;
        width: 100%;

        .messages-close {
            display: block;
        }
    }

    .messages-btn {
        display: flex;
    }
}</style>