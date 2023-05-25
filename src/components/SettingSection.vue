<template>
    <div class="setting-section">
        <div class="setting-section-header">
            <p>设置</p>
        </div>
        <div class="setting-section-line">
            <button class="profile-btn"><img
                    src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R639.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"
                    title="点击切换头像" /></button>
            <div class="setting-section-line-right">
                <div class="box">
                    <div class="box-detail">
                        <span class="box-detail-name" title="点击修改用户信息">测试区域店</span>
                        <button class="profile-edit-btn" @click="toEdit">编辑</button>
                    </div>
                    <div class="box-detail">
                        <svg t="1682567629901" class="icon-front" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="18020" width="18" height="18" stroke="currentColor"
                            stroke-width="20">
                            <path
                                d="M512 960c-4.266667 0-8.533333-2.133333-12.8-4.266667C486.4 945.066667 170.666667 701.866667 170.666667 433.066667 170.666667 251.733333 324.266667 106.666667 512 106.666667s341.333333 145.066667 341.333333 326.4C853.333333 704 537.6 947.2 524.8 955.733333c-4.266667 2.133333-8.533333 4.266667-12.8 4.266667z m0-810.666667c-164.266667 0-298.666667 125.866667-298.666667 283.733334 0 219.733333 238.933333 430.933333 298.666667 480 59.733333-49.066667 298.666667-258.133333 298.666667-480C810.666667 275.2 676.266667 149.333333 512 149.333333z"
                                p-id="18021"></path>
                            <path
                                d="M512 576c-83.2 0-149.333333-66.133333-149.333333-149.333333s66.133333-149.333333 149.333333-149.333334 149.333333 66.133333 149.333333 149.333334-66.133333 149.333333-149.333333 149.333333z m0-256c-59.733333 0-106.666667 46.933333-106.666667 106.666667s46.933333 106.666667 106.666667 106.666666 106.666667-46.933333 106.666667-106.666666-46.933333-106.666667-106.666667-106.666667z"
                                p-id="18022"></path>
                        </svg>
                        <span class="box-detail-address">这是一段地址这是一段地址这是一段地址这是一段地址这是一段地址</span>
                    </div>
                    <div class="box-detail">
                        <svg t="1682567690381" class="icon-front" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5531" width="18" height="18" stroke="currentColor"
                            stroke-width="20">
                            <path
                                d="M793.6 896c-10.666667 0-21.333333-2.133333-34.133333-6.4-123.733333-40.533333-292.266667-113.066667-403.2-224C245.333333 554.666667 172.8 386.133333 132.266667 262.4c-10.666667-32-6.4-64 12.8-91.733333 21.333333-25.6 53.333333-42.666667 89.6-42.666667h113.066666c23.466667 0 44.8 12.8 57.6 34.133333l53.333334 98.133334c10.666667 19.2 10.666667 42.666667 2.133333 61.866666l-49.066667 98.133334c4.266667 19.2 23.466667 76.8 70.4 123.733333 46.933333 46.933333 104.533333 66.133333 123.733334 70.4l98.133333-49.066667c19.2-10.666667 42.666667-8.533333 61.866667 2.133334l98.133333 55.466666c21.333333 10.666667 34.133333 34.133333 34.133333 57.6V789.333333c0 34.133333-17.066667 68.266667-44.8 87.466667-19.2 12.8-38.4 19.2-59.733333 19.2zM234.666667 170.666667c-21.333333 0-40.533333 8.533333-53.333334 25.6-10.666667 17.066667-12.8 36.266667-6.4 53.333333 40.533333 119.466667 108.8 281.6 213.333334 386.133333 104.533333 104.533333 266.666667 174.933333 386.133333 213.333334 19.2 6.4 38.4 4.266667 53.333333-8.533334 17.066667-10.666667 25.6-29.866667 25.6-51.2v-113.066666c0-8.533333-4.266667-17.066667-12.8-19.2l-98.133333-55.466667c-6.4-4.266667-14.933333-4.266667-21.333333 0l-104.533334 53.333333c-4.266667 2.133333-8.533333 2.133333-12.8 2.133334-4.266667 0-85.333333-17.066667-151.466666-83.2-68.266667-68.266667-83.2-149.333333-85.333334-151.466667 0-4.266667 0-8.533333 2.133334-12.8l53.333333-104.533333c4.266667-6.4 4.266667-14.933333 0-21.333334l-53.333333-98.133333c-6.4-10.666667-14.933333-14.933333-23.466667-14.933333H234.666667z"
                                p-id="5532"></path>
                        </svg>
                        <span class="box-detail-phone">123-4567-89</span>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toEdit() {
            this.$router.push('/home/setting/edit')
        }
    },
}
</script>
 
<style lang="scss" scoped>
.setting-section {
    flex: 2;
    background-color: var(--projects-section);
    border-radius: 32px;
    padding: 32px 32px 0 32px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        color: var(--main-color);

        p {
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            opacity: .9;
            margin: 0;
            color: var(--main-color);
        }
    }

    &-line {
        display: flex;
        width: 100%;

        &-right {
            display: flex;
            width: 100%;

            .box {
                padding: 20px 0;
                width: 100%;

                &-detail {
                    display: flex;
                    align-items: center;
                    color: var(--main-color);
                    opacity: .7;
                    margin-right: 6px;
                    width: 100%;
                    transition: .2s;

                    &-name {
                        font-size: 32px;
                        transition: .2s;

                        button {
                            display: inline-block;
                            font: inherit;
                            background: none;
                            border: none;
                            color: inherit;
                            padding: 0;
                            cursor: pointer;
                            transition: .2s;

                        }


                    }

                    &-address,
                    &-phone {
                        width: 60%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 12px;
                        line-height: 12px;
                        transition: .2s;

                    }

                    .icon-front {
                        fill: var(--link-color);
                    }

                    .icon-after {
                        margin-left: 8px;
                        cursor: pointer;
                        fill: var(--link-color);

                    }
                }

                &-detail:nth-child(2),
                &-detail:nth-child(3) {
                    margin-top: 20px;
                }
            }
        }

    }
}

.profile-btn {
    padding: 0;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;

    img {
        width: 180px;
        height: 180px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 10px;
        transition: .2s;
    }
}

.profile-edit-btn {
    position: relative;
    top: 6px;
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
    font-size: 12px;
    line-height: 12px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 6px 26px;
    margin-left: 20px;
    font-weight: 600;
    transition: .2s;
}

@media screen and (max-width:980px) {
    .profile-btn {
        img {
            width: 120px;
            height: 120px;
        }
    }

    .box-detail-name {
        font-size: 22px !important;
    }

    .box-detail-address,
    .box-detail-phone {
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

@media screen and (max-width:520px) {
    .box-detail-name {
        font-size: 20px !important;
    }

    .box-detail-address,
    .box-detail-phone {
        width: 50% !important;
        font-size: 8px !important;
    }

    .profile-edit-btn {
        font-size: 6px !important;
        padding: 4px 16px;
    }
}
</style>