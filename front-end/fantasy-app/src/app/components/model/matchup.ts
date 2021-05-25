export class ScheduleComp {
  constructor(rosterId: number, record: {}) {
    this.rosterId = rosterId
    this.record = record
  }

  rosterId: number;
  record: {};
}

export class WeeklyRecordComp {
  constructor(rosterId: number, records: {}, wins: number, loss: number, ties: number) {
    this.rosterId = rosterId;
    this.totalWins = wins;
    this.totalLosses = loss;
    this.totalTies = ties;
    this.records = records;
  }

  rosterId: number;
  totalWins: number;
  totalLosses: number;
  totalTies: number;
  records: {};
}
