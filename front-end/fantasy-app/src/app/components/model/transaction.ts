import {SleeperTeamTransactionData} from '../../model/SleeperLeague';

export class TransactionUI {
  constructor(transaction: SleeperTeamTransactionData, adds: any[], drops: any[]) {
    this.type = transaction.type;
    this.adds = adds;
    this.drops = drops;
    this.createdAt = transaction.createdAt;
    this.picks = transaction.draftpicks;
    this.status = transaction.status;
    this.rosterIds = transaction.rosterIds;
  }

  type: string;
  status: string;
  adds: TransactionPlayer[];
  drops: TransactionPlayer[];
  netValue: number;
  picks: any[];
  createdAt: number;
  rosterIds: number[];
  headerDisplay: string;
}

export class TransactionPlayer {
  playerName: string;
  value: number;
  rosterId: number;
}
