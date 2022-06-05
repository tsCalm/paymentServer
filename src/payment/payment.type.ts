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

interface PaymentRequest {
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

interface PaymentResponse {
  code: number;
  message: string;
  response: Payment;
}

interface Payment {
  imp_uid: string;
  merchant_uid: string;
  pay_method: PayMethod;
  channel: Chanel;
  pg_provider: PgProvider;
  emb_pg_provider: EmbPgProvider;
  pg_tid: string;
  pg_id: string;
  escrow: true;
  apply_num: string;
  bank_code: string;
  bank_name: string;
  card_code: CardCode;
  card_name: string;
  card_quota: number;
  card_number: string;
  card_type: CardType | null;
  vbank_code: string;
  vbank_name: string;
  vbank_num: string;
  vbank_holder: string;
  vbank_date: number;
  vbank_issued_at: number;
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
  user_agent: string;
  status: Status;
  started_at: number;
  paid_at: number;
  failed_at: number;
  cancelled_at: number;
  fail_reason: string;
  cancel_reason: string;
  receipt_url: string;
  cancel_history: CancelHistory[];
  cancel_receipt_urls: string[];
  cash_receipt_issued: boolean;
  customer_uid: string | null;
  customer_uid_usage: CustomUidUsage | null;
}

interface CancelHistory {
  pg_tid: string;
  amount: number;
  cancelled_at: number;
  reason: string;
  receipt_url: string;
}
