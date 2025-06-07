import {
  Coins,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  Target,
} from "lucide-react";

// Sentiment analysis data
export const sentiment_results = {
  aeyakovenko: "Greed",
  Bitcoin: "Neutral",
  brian_armstrong: "Neutral",
  CryptooIndia: "Fear",
  cz_binance: "Neutral",
  DriftProtocol: "Neutral",
  elonmusk: "Extreme Greed",
  garyvee: "Neutral",
  heliuslabs: "Neutral",
  jito_sol: "Neutral",
  JupiterExchange: "Neutral",
  laine_sa_: "Neutral",
  marginfi: "Extreme Fear",
  orca_so: "Neutral",
  phantom: "Neutral",
  rajgokal: "Neutral",
  realDonaldTrump: "Extreme Greed",
  save_finance: "Neutral",
  sendarcadefun: "Neutral",
  solana: "Neutral",
  SolanaFndn: "Neutral",
  SolanaLegend: "Fear",
  SOLBigBrain: "Neutral",
  SonicSVM: "Fear",
  stepfinance_: "Neutral",
  superteam: "Neutral",
  SuperteamIN: "Fear",
  TheSolanaBoss: "Neutral",
  VitalikButerin: "Fear",
  weremeow: "Greed",
  viratkohli: "Extreme Greed",
  cristiano: "Extreme Greed",
  arianagrande: "Greed",
  carryminati: "Greed",
  rohitsharma45: "Greed",
  selenagomez: "Greed",
  narendramodi: "Greed",
  kimkardashian: "Greed",
  kyliejenner: "Greed",
  leomessi: "Greed",
  kamalaharris: "Greed",
  champagnepapi: "Neutral",
  therock: "Neutral",
  markrober: "Neutral",
  justinbieber: "Neutral",
  nasa: "Neutral",
  magnus_carlsen: "Neutral",
  tombrady: "Neutral",
  natgeo: "Fear",
  openai: "Fear",
  neildegrassetyson: "Fear",
  wired: "Fear",
  who: "Extreme Fear",
  cryptodaily: "Extreme Fear",
  physicsfun: "Extreme Fear",
  cryptokiran: "Extreme Fear",
  // solana: 'Extreme Fear'
  MrBeast: "Greed",
  TSeries: "Greed",
  Cocomelon: "Neutral",
  SETIndia: "Extreme Fear",
  VladAndNiki: "Neutral",
  KidsDianaShow: "Neutral",
  LikeNastya: "Neutral",
  StokesTwins: "Greed",
  ChuChuTV: "Neutral",
  AlansUniverse: "Greed",
  FiveMinuteCrafts: "Fear",
  BANGTANTV: "Neutral",
  ColorsTV: "Fear",
  TipsOfficial: "Fear",
  ToysandColors: "Neutral",
  JustinBieber: "Extreme Greed",
  URCristiano: "Greed",
  AajTak: "Extreme Fear",
  BabySharkPinkfong: "Neutral",
  PewDiePie: "Greed",
  WWE: "Neutral",
  BLACKPINK: "Extreme Greed",
  MumbikerNikhil: "Fear",
  CarryMinati: "Greed",
  NASA: "Fear",
  ZeeMusicCompany: "Fear",
  HYBELABELS: "Neutral",
  TSeriesBhaktiSagar: "Fear",
  ShemarooFilmiGaane: "Neutral",
};

// Helper function to get sentiment styling
export const getSentimentStyling = (sentiment: string) => {
  switch (sentiment) {
    case "Extreme Greed":
      return {
        color: "text-red-400",
        bgColor: "bg-red-900/30",
        borderColor: "border-red-500/50",
        icon: TrendingUp,
        description: "High bullish sentiment - Maximum optimism detected",
      };
    case "Greed":
      return {
        color: "text-orange-400",
        bgColor: "bg-orange-900/30",
        borderColor: "border-orange-500/50",
        icon: TrendingUp,
        description: "Bullish sentiment - Strong positive outlook",
      };
    case "Extreme Fear":
      return {
        color: "text-purple-400",
        bgColor: "bg-purple-900/30",
        borderColor: "border-purple-500/50",
        icon: AlertTriangle,
        description: "High bearish sentiment - Maximum pessimism detected",
      };
    case "Fear":
      return {
        color: "text-blue-400",
        bgColor: "bg-blue-900/30",
        borderColor: "border-blue-500/50",
        icon: TrendingDown,
        description: "Bearish sentiment - Cautious outlook",
      };
    default: // Neutral
      return {
        color: "text-gray-400",
        bgColor: "bg-gray-900/30",
        borderColor: "border-gray-500/50",
        icon: Target,
        description: "Balanced sentiment - Neutral market outlook",
      };
  }
};