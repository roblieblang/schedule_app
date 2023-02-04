<template>
    <div>
        <home-content />
    </div>
</template>

<script>
import HomeContent from '@/components/HomeContent.vue';

export default {
    name: "home-view", 
    components: {
        HomeContent,
    },
};
</script>

<style scoped>
    <!-- .next-steps .fa-link {
        margin-right: 5px;
    } -->
</style>