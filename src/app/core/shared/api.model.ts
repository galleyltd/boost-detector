export interface AccountFeedback {
    accountId: number;
    xpmSpike: boolean;
    gpmSpike: boolean;
    kpmSpike: boolean;
    heroDamageSpike: boolean;
    kdaSpike: boolean;
}

export interface CheckDate {
    nano: number;
    epochSecond: number;
}

export interface CheckResult {
    accountFeedback: AccountFeedback;
    checkDate: CheckDate;
}

export interface AccountFeedbackResult {
    checkResults: CheckResult[];
}