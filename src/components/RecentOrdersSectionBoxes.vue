<template>
    <div class="recent-orders-section-boxes jsGridView">
        <OrderBoxWrapper></OrderBoxWrapper>
    </div>
</template>

<script>
import OrderBoxWrapper from './OrderBoxWrapper.vue';
export default {
    components: {
        OrderBoxWrapper
    }
}
</script>

<style lang="scss" scoped>
.recent-orders-section-boxes {
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

@media screen and (max-width: 980px) {
    .recent-orders-section-boxes .jsGridView {
        width: 50% !important;
    }
}

@media screen and (max-width: 520px) {

    .recent-orders-section-boxes.jsGridView {
        width: 100% !important;
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