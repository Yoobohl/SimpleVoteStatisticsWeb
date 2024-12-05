<template>
    <div class="vote-body">
        <div class="vote-grid">
            <VoteItem v-for="(vote, index) in props.voteItems" :key="computeKey(vote.id, index)"
                :voter-name="vote.voterName" :status="vote.status" />
        </div>
    </div>
</template>

<script setup lang="ts">
import VoteItem from './VoteItem.vue'
import type { VoteItem as VoteItemType } from '../types/vote'

const props = defineProps<{
    voteItems: VoteItemType[]
}>();

const computeKey = (key: undefined | string | number, defaultValue: number | string) => {
    if (!key) {
        return defaultValue
    }
    return key
};

</script>

<style scoped>
.vote-body {
    padding: 2rem;
    border-radius: 8px;
    min-height: 400px;
}

.vote-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
}
</style>