<template>
    <div class="vote-page">
        <VoteHeader title="Current Voting Results" :voteTotalCount=props.voteTotalCount :votedCount=props.votedCount
            :affirmativeVoteCount=props.affirmativeVoteCount :negativeVoteCount=props.negativeVoteCount
            :abstainVoteCount=props.abstainVoteCount />
        <div class="vote-body-container">
            <VoteBody :voteItems="props.voteItems" />
        </div>
    </div>
</template>

<script setup lang="ts">
import VoteHeader from '../components/VoteHeader.vue'
import VoteBody from '../components/VoteBody.vue'

import type { VotePageProps } from '../types/vote';
const props = defineProps<VotePageProps>()

</script>

<style scoped>
.vote-body-container {
    margin-top: 2rem;
}
</style>