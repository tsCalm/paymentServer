export enum PayMethod {
  SAMSUNG = 'SAMSUNG', // 삼성페이
  CARD = 'CARD', // 신용카드
  TRANS = 'TRANS', // 계좌이체
  VBANK = 'VBANK', // 가상계좌
  PHONE = 'PHONE', // 휴대폰
  CULTURELAND = 'CULTURELAND', //문화상품권
  SMARTCULTURE = 'SMARTCULTURE', // 스마트문상
  BOOKNLIFE = 'BOOKNLIFE', //도서문화상품권 booknlife
  HAPPYMONEY = 'HAPPYMONEY', // 해피머니
  POINT = 'POINT', // 포인트
  SSGPAY = 'SSGPAY', // SSGPAY
  LPAY = 'LPAY', // LPAY
  PAYCO = 'PAYCO', // 페이코
  KAKAOPAY = 'KAKAOPAY', // 카카오페이
  TOSSPAY = 'TOSSPAY', // 토스
  NAVERPAY = 'NAVERPAY', //네이버페이
}

export enum Chanel {
  PC = 'PC',
  MOBILE = 'MOBILE',
  API = 'API',
}

export enum PgProvider {
  INICIS = 'INICIS', // 이니시스
  NICE = 'NICE', // 나이스정보통신
  KAKAOPAY = 'KAKAOPAY',
}

export enum EmbPgProvider {
  CHAI = 'CHAI', // 차이
  KAKAOPAY = 'KAKAOPAY', // 카카오페이
}

export enum CardCode {
  BC = 'BC', // '361 BC카드
  GJ = 'GJ', // '364' 광주카드
  SS = 'SS', // '365' 삼성카드
  SH_0 = 'SH_0', // '366' 신한카드
  HD = 'HD', // '367' 현대카드
  LT = 'LT', // '368' 롯데카드
  SH_1 = 'SH_1', // '369' 수협카드
  CT = 'CT', // '370' 씨티카드
  NH = 'NH', // '371' 농협카드
  JB = 'JB', // '372' 전북카드
  JJ = 'JJ', // '373' 제주카드
  HN_SK = 'HN_SK', // '374' 하나SK카드
  KB = 'KB', // '381' KB국민카드
  WR = 'WR', // '041' 우리카드
  POST = 'POST', // '071'우체국
}

export enum CardType {
  NONE = 'NONE',
  ZERO = 'ZERO',
  ONE = 'ONE',
}

export enum Currency {
  KRW = 'KRW',
  USD = 'USD',
  EUR = 'EUR',
}

export enum Status {
  READY = 'READY', // 미결제
  PAID = 'PAIED', // 결제완료
  CANCELED = 'CANCELED', // 결제취소
  FAILED = 'FAILED', // 결제 실패
}

export enum CustomUidUsage {
  ISSUE = 'ISSUE', // 빌링키 발급
  PAYMENT = 'PAYMENT', // 결제
  PAYMENT_SCHEDULED = 'PAYMENT_SCHEDULED',
}
