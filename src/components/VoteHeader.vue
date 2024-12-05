<template>
	<div class="vote-header-box">
		<h2 v-if="title" class="vote-title">{{ props.title }}</h2>
		<div class="vote-header">
			<div class="vote-stats">
				<div class="stat-item">
					<span class="stat-label">Total: </span>
					<span class="stat-value">{{ props.voteTotalCount }}</span>
				</div>
				<div class="divider"></div>
				<div class="stat-item">
					<span class="stat-label">Voted: </span>
					<span class="stat-value">{{ props.votedCount }}</span>
				</div>
				<div class="divider"></div>
				<div class="stat-item">
					<span class="stat-label" :style="{ color: statusColor.affirmative }">Affirmative: </span>
					<span class="stat-value" :style="{ color: statusColor.affirmative }">{{ props.affirmativeVoteCount
						}}</span>
				</div>
				<div class="divider"></div>
				<div class="stat-item">
					<span class="stat-label" :style="{ color: statusColor.negative }">Negative: </span>
					<span class="stat-value" :style="{ color: statusColor.negative }">{{ props.negativeVoteCount
						}}</span>
				</div>
				<div class="divider"></div>
				<div class="stat-item">
					<span class="stat-label" :style="{ color: statusColor.abstain }">Abstain:</span>
					<span class="stat-value" :style="{ color: statusColor.abstain }">{{ props.abstainVoteCount }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { VoteHeaderProps } from '../types/vote';
import { statusColor } from '../color';

const props = defineProps<VoteHeaderProps>()
</script>

<style scoped>
.vote-title {
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
	text-align: left;
}

.vote-header {
	border: 1px solid #ccc;
	padding: 1rem;
	background-color: v;
	border-radius: 8px;
}

.vote-stats {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.stat-item {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 0.5rem;
}

.divider {
	width: 1px;
	height: 30px;
	background-color: #ccc;
	margin: 0 0.5rem;
}

.stat-label {
	font-size: 1.4rem;
	/* color: #666; */
	color: white;

	margin-right: 0.5rem;
}

.stat-value {
	font-size: 1.4rem;
	font-weight: bold;
	/* color: #333; */
	color: white;

}
</style>