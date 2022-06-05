import {
  PayMethod,
  Chanel,
  PgProvider,
  EmbPgProvider,
  CardCode,
  CardType,
  Currency,
  Status,
  CustomUidUsage,
} from './payment.enum';

export interface PaymentRequest {
  pg: string;
  pay_method: string;
  merchant_uid: string;
  name: string;
  amount: number;
  buyer_email: string;
  buyer_name: string;
  buyer_tel: string;
  buyer_addr: string;
  buyer_postcode: string;
}

export interface PaymentResponse {
  code: number;
  message: string;
  response: PaymentInterface;
}

export interface PaymentInterface {
  imp_uid: string;
  merchant_uid: string;
  pay_method: PayMethod;
  channel: Chanel;
  pg_provider: PgProvider;
  emb_pg_provider: EmbPgProvider;
  pg_tid: string;
  pg_id: string;
  escrow: boolean;
  apply_num: string | null;
  bank_code: string | null;
  bank_name: string | null;
  card_code: CardCode;
  card_name: string | null;
  card_quota: number | null;
  card_number: string | null;
  card_type: CardType | null;
  vbank_code: string | null;
  vbank_name: string | null;
  vbank_num: string | null;
  vbank_holder: string | null;
  vbank_date: number | null;
  vbank_issued_at: number | null;
  name: string;
  amount: number;
  cancel_amount: number;
  currency: Currency;
  buyer_name: string;
  buyer_email: string;
  buyer_tel: string;
  buyer_addr: string;
  buyer_postcode: string;
  custom_data: string;
  user_agent: string | null;
  status: Status;
  started_at: number | null;
  paid_at: number | null;
  failed_at: number | null;
  cancelled_at: number | null;
  fail_reason: string | null;
  cancel_reason: string;
  receipt_url: string;
  cancel_history: CancelHistory[] | null;
  cancel_receipt_urls: string[];
  cash_receipt_issued: boolean;
  customer_uid: string | null;
  customer_uid_usage: CustomUidUsage | null;
}

export interface CancelHistory {
  pg_tid: string;
  amount: number;
  cancelled_at: number;
  reason: string;
  receipt_url: string;
}
