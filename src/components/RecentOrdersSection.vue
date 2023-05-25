<template>
    <div class="recent-orders-section">
        <div class="recent-orders-section-header">
            <p>最近订单</p>
            <p class="time">十二月, 12</p>
        </div>
        <div class="recent-orders-section-line">
            <div class="recent-orders-status">
                <div class="item-status" v-for="(item, index) in orderStatus" :key=index @click="statusHandler(index)">
                    <span class="item-status-number">{{ item.number }}</span>
                    <span class="item-status-type" :class="{ active1: isActive == index }">{{ item.type }}</span>
                </div>
            </div>
            <div class="view-mode">
                <button class="view-mode-btn list-mode" title="列表视图">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-list">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                </button>
                <button class="view-mode-btn grid-mode active" title="网格视图">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-grid">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                </button>
            </div>
        </div>
        <RecentOrdersSectionBoxes></RecentOrdersSectionBoxes>
    </div>
</template>

<script>
import RecentOrdersSectionBoxes from './RecentOrdersSectionBoxes.vue';
export default {
    components: { RecentOrdersSectionBoxes },
    data() {
        return {
            isActive: 0,
            orderStatus: [{ number: 1, type: '待发货' }, { number: 2, type: '待取货' }, { number: 3, type: '已完成' }]
        }
    },
    methods: {
        statusHandler(index) {
            console.log(index);
            this.isActive = index
        }
    }
}
</script>
 
<style lang="scss" scoped>
.active1 {
    border-radius: 210px;
    background-color: #115DFC;
    color: var(--projects-section) !important;
}

.recent-orders-section {
    flex: 2;
    background-color: var(--projects-section);
    border-radius: 32px;
    padding: 32px 32px 0 32px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;

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

        .time {
            font-size: 20px;
        }
    }

    &-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 32px;

        .recent-orders-status {
            display: flex;

            .item-status {
                display: flex;
                flex-direction: column;
                margin-right: 16px;
                cursor: pointer;

                &-number {
                    font-size: 24px;
                    line-height: 32px;
                    font-weight: 700;
                    padding-left: 8px;
                    color: var(--main-color);
                }

                &-type {
                    position: relative;
                    padding-left: 8px;
                    padding-right: 8px;
                    color: var(--main-color);
                    font-size: 16px;
                }
            }
        }

        .view-mode {
            display: flex;
            align-items: center;
        }

        .view-mode-btn {
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px;
            border-radius: 4px;
            background-color: transparent;
            border: none;
            color: var(--main-color);
            margin-left: 8px;
            transition: .2s;

            &.active {
                background-color: var(--link-color-active-bg);
                color: var(--link-color-active);
            }

            &:not(.active):hover {
                background-color: var(--link-color-hover);
                color: var(--link-color-active);
            }
        }
    }

    &-boxes {
        margin: 0 -8px;
        overflow-y: auto;

        &.jsGridView {
            display: flex;
            flex-wrap: wrap;
        }

        &.jsListView {
            .project-box {
                display: flex;
                border-radius: 10px;
                position: relative;

                >* {
                    margin-right: 24px;
                }
            }

            .more-wrapper {
                position: absolute;
                right: 16px;
                top: 16px;
            }

            .project-box-content-header {
                order: 1;
                max-width: 120px;
            }

            .project-box-header {
                order: 2;
            }

            .project-box-footer {
                order: 3;
                padding-top: 0;
                flex-direction: column;
                justify-content: flex-start;
            }

            .project-box-footer:after {
                display: none;
            }

            .participants {
                margin-bottom: 8px;
            }

            .project-box-content-header p {
                text-align: left;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .project-box-header>span {
                position: absolute;
                bottom: 16px;
                left: 16px;
                font-size: 12px;
            }

            .box-progress-wrapper {
                order: 3;
                flex: 1;
            }
        }
    }
}

@media screen and (max-width: 980px) {
    .recent-orders-section-boxes .jsGridView {
        width: 50% !important;
    }

    .item-status-number,
    .item-status-type {
        font-size: 14px !important;
    }

    .item-status-type:after {
        width: 4px !important;
        height: 4px !important;
    }

    .item-status {
        margin-right: 0 !important;
    }
}

@media screen and (max-width: 520px) {
    .recent-orders-section {
        overflow: auto !important;
    }

    .recent-orders-boxes {
        overflow-y: visible !important;
    }


    .item-status-number,
    .item-status-type {
        font-size: 10px !important;
    }

    .recent-orders-section-boxes.jsGridView .project-box-wrapper {
        width: 100% !important;
    }

    .recent-orders-section {
        padding: 24px 16px 0 16px !important;
    }

    .recent-orders-section-header p,
    .recent-orders-section-header .time {
        font-size: 18px !important;
    }

    .item-status-type {
        padding-right: 4px !important;

        &:after {
            display: none !important;
        }
    }


    .recent-orders-section-boxes.jsListView {
        font-size: 10px !important;
    }

    .recent-orders-section-boxes.jsListView {
        margin-right: 10px !important;
    }

    .recent-orders-section-boxes.jsListView {
        right: 2px !important;
        top: 10px !important;
    }
}
</style>