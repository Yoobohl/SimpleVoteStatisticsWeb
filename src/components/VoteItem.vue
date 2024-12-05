<template>
    <div class="vote-item">
        <div class="vote-status" :class="statusClass"></div>
        <span class="voter-name" :class="statusClass">{{ voterName }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { VoteStatus } from '../types/vote'
import { statusColor } from '../color';

interface Props {
    voterName: string
    status: VoteStatus
}

const props = defineProps<Props>()



const statusClass = computed(() => ({
    'status-affirmative': props.status === 'affirmative',
    'status-negative': props.status === 'negative',
    'status-abstain': props.status === 'abstain',
    'status-pending': props.status === 'pending'
}))
</script>

<style scoped lang="css">
.vote-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
}

.vote-status {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: inline-block;
}

.voter-name {
    font-size: 1.125rem;
}

.voter-name.status-affirmative {
    color: v-bind('statusColor.affirmative');
}

.vote-status.status-affirmative {
    background-color: v-bind('statusColor.affirmative');
}

.voter-name.status-negative {
    color: v-bind('statusColor.negative');
}

.vote-status.status-negative {
    background-color: v-bind('statusColor.negative');
}


.voter-name.status-abstain {
    color: v-bind('statusColor.abstain');

}

.vote-status.status-abstain {
    background-color: v-bind('statusColor.abstain');

}

.voter-name.status-pending {
    color: v-bind('statusColor.pending');
}

/* When Pending No Style */
/* .vote-status.status-pending {
    /* background-color: v-bind('statusColor.pending'); */

/* } */
</style>