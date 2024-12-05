export type VoteStatus = "affirmative" | "negative" | "abstain" | "pending";

export interface VoteItem {
  id?: string | number;
  voterName: string;
  status: VoteStatus;
}

export interface VoteHeaderProps {
  voteTotalCount: number;
  votedCount: number;
  affirmativeVoteCount: number;
  negativeVoteCount: number;
  abstainVoteCount: number;
  title?: string;
}

export interface VotePageProps extends VoteHeaderProps {
  voteItems: VoteItem[];
}
