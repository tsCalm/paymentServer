import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../common/base.entity';
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
import { CancelHistory, PaymentInterface } from './payment.type';
@Entity()
export class Payment extends BaseEntity implements PaymentInterface {
  @Column({
    primary: true,
    type: 'varchar',
    length: 250,
    generated: false,
    comment: '결제 고유 ID',
  })
  imp_uid: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  merchant_uid: string;

  @Column({
    type: 'enum',
    enum: PayMethod,
    default: PayMethod.CARD,
  })
  pay_method: PayMethod;

  @Column({
    type: 'enum',
    enum: Chanel,
    default: Chanel.API,
  })
  channel: Chanel;

  @Column({
    type: 'enum',
    enum: PgProvider,
    default: PgProvider.INICIS,
  })
  pg_provider: PgProvider;

  @Column({
    type: 'enum',
    enum: EmbPgProvider,
    default: EmbPgProvider.CHAI,
  })
  emb_pg_provider: EmbPgProvider;

  @Column({
    type: 'varchar',
  })
  pg_tid: string;

  @Column({
    type: 'varchar',
  })
  pg_id: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  escrow: boolean;

  @Column({
    type: 'varchar',
    default: null,
  })
  apply_num: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  bank_code: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  bank_name: string;

  @Column({
    type: 'enum',
    enum: EmbPgProvider,
  })
  card_code: CardCode;

  @Column({
    type: 'varchar',
    default: null,
  })
  card_name: string;

  @Column({
    type: 'tinyint',
    default: null,
  })
  card_quota: number;

  @Column({
    type: 'tinyint',
    default: null,
  })
  card_number: string;

  @Column({
    type: 'enum',
    enum: CardType,
    default: null,
  })
  card_type: CardType;

  @Column({
    type: 'varchar',
    default: null,
  })
  vbank_code: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  vbank_name: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  vbank_num: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  vbank_holder: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  vbank_date: number;

  @Column({
    type: 'varchar',
    default: null,
  })
  vbank_issued_at: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'int',
  })
  amount: number;

  @Column({
    type: 'int',
    default: 0,
  })
  cancel_amount: number;

  @Column({
    type: 'enum',
    enum: Currency,
    default: Currency.KRW,
  })
  currency: Currency;

  @Column({
    type: 'varchar',
  })
  buyer_name: string;

  @Column({
    type: 'varchar',
  })
  buyer_email: string;

  @Column({
    type: 'varchar',
  })
  buyer_tel: string;

  @Column({
    type: 'varchar',
  })
  buyer_addr: string;

  @Column({
    type: 'varchar',
  })
  buyer_postcode: string;

  @Column({
    type: 'text',
  })
  custom_data: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  user_agent: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PAID,
  })
  status: Status;

  @Column({
    type: 'int',
    default: null,
  })
  started_at: number;

  @Column({
    type: 'int',
    default: null,
  })
  paid_at: number;

  @Column({
    type: 'int',
    default: null,
  })
  failed_at: number;

  @Column({
    type: 'int',
    default: null,
  })
  cancelled_at: number;

  @Column({
    type: 'varchar',
    default: null,
  })
  fail_reason: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  cancel_reason: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  receipt_url: string;

  @Column('simple-array')
  cancel_history: CancelHistory[] | null;

  @Column('simple-array')
  cancel_receipt_urls: string[] | null;

  @Column({
    type: 'boolean',
    default: false,
  })
  cash_receipt_issued: boolean;

  @Column({
    type: 'varchar',
    default: null,
  })
  customer_uid: string | null;

  @Column({
    type: 'enum',
    enum: CustomUidUsage,
    default: null,
  })
  customer_uid_usage: CustomUidUsage | null;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
