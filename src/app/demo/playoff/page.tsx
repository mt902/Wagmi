"use client";

import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import "./playoff.css";

// Types
type Memecoin = {
  id: number;
  name: string;
  ticker: string;
  logo: string;
  emoji: string;
  price: string;
  change: string;
  volume: string;
  sentiment: number;
};

type Match = {
  coin1: Memecoin | null;
  coin2: Memecoin | null;
  winner: Memecoin | null;
};

type GameState = {
  currentRound: number;
  currentMatch: number;
  totalMatches: number;
  leftR16: Match[];
  rightR16: Match[];
  leftQF: Match[];
  rightQF: Match[];
  leftSF: Match;
  rightSF: Match;
  final: Match;
  winCounts: Record<number, number>;
};

type Screen = "intro" | "match" | "results";

// Memecoin data
const memecoins: Memecoin[] = [
  { id: 1, name: "Dogwifhat", ticker: "WIF", logo: "https://assets.coingecko.com/coins/images/33566/standard/dogwifhat.jpg", emoji: "🎩", price: "$2.34", change: "+156.7%", volume: "$1.8B", sentiment: 92 },
  { id: 2, name: "Pepecoin", ticker: "PEPE", logo: "https://assets.coingecko.com/coins/images/29850/standard/pepe-token.jpeg", emoji: "🐸", price: "$0.0000124", change: "+45.6%", volume: "$2.1B", sentiment: 85 },
  { id: 3, name: "Bonk", ticker: "BONK", logo: "https://assets.coingecko.com/coins/images/28600/standard/bonk.jpg", emoji: "🦴", price: "$0.0000024", change: "+28.9%", volume: "$340M", sentiment: 74 },
  { id: 4, name: "Mog Coin", ticker: "MOG", logo: "https://assets.coingecko.com/coins/images/31226/standard/mog.png", emoji: "😎", price: "$0.0000018", change: "+45.2%", volume: "$120M", sentiment: 71 },
  { id: 5, name: "Floki", ticker: "FLOKI", logo: "https://assets.coingecko.com/coins/images/16746/standard/PNG_image.png", emoji: "⚔️", price: "$0.000018", change: "-3.2%", volume: "$156M", sentiment: 61 },
  { id: 6, name: "Shiba Inu", ticker: "SHIB", logo: "https://assets.coingecko.com/coins/images/11939/standard/shiba.png", emoji: "🐕", price: "$0.0000089", change: "+8.2%", volume: "$890M", sentiment: 72 },
  { id: 7, name: "Dogecoin", ticker: "DOGE", logo: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png", emoji: "🐶", price: "$0.082", change: "+12.4%", volume: "$1.2B", sentiment: 78 },
  { id: 8, name: "Brett", ticker: "BRETT", logo: "https://assets.coingecko.com/coins/images/35529/standard/1000050750.png", emoji: "👦", price: "$0.089", change: "+89.4%", volume: "$560M", sentiment: 81 },
  { id: 9, name: "Popcat", ticker: "POPCAT", logo: "https://assets.coingecko.com/coins/images/33760/standard/image.png", emoji: "😺", price: "$0.34", change: "+234.5%", volume: "$780M", sentiment: 88 },
  { id: 10, name: "Slerf", ticker: "SLERF", logo: "https://assets.coingecko.com/coins/images/36243/standard/slerf.png", emoji: "🦥", price: "$0.23", change: "+67.8%", volume: "$245M", sentiment: 76 },
  { id: 11, name: "Notcoin", ticker: "NOT", logo: "https://assets.coingecko.com/coins/images/36459/standard/notcoin.jpg", emoji: "🚫", price: "$0.0089", change: "+34.5%", volume: "$890M", sentiment: 69 },
  { id: 12, name: "Book of Meme", ticker: "BOME", logo: "https://assets.coingecko.com/coins/images/36071/standard/bome.png", emoji: "📖", price: "$0.0089", change: "+67.3%", volume: "$420M", sentiment: 79 },
  { id: 13, name: "Cat in a Dogs World", ticker: "MEW", logo: "https://assets.coingecko.com/coins/images/36436/standard/mew.png", emoji: "🐱", price: "$0.0067", change: "+123.4%", volume: "$230M", sentiment: 82 },
  { id: 14, name: "Saga Meme", ticker: "SAGA", logo: "https://assets.coingecko.com/coins/images/35045/standard/saga.png", emoji: "⚡", price: "$1.45", change: "+56.7%", volume: "$167M", sentiment: 73 },
  { id: 15, name: "Toshi", ticker: "TOSHI", logo: "https://assets.coingecko.com/coins/images/31126/standard/toshi.png", emoji: "🐕‍🦺", price: "$0.00023", change: "+34.5%", volume: "$67M", sentiment: 63 },
  { id: 16, name: "GROK", ticker: "GROK", logo: "https://assets.coingecko.com/coins/images/33089/standard/grok.jpeg", emoji: "🤖", price: "$0.0034", change: "+89.2%", volume: "$312M", sentiment: 77 },
];

// Helper functions
const getMatchesInRound = (r: number) => [8, 4, 2, 1][r - 1];
const getRoundName = (r: number) => ["Round of 16", "Quarterfinals", "Semifinals", "Final"][r - 1];

// Initialize bracket
const initializeBracket = (): GameState => {
  const shuffled = [...memecoins].sort(() => Math.random() - 0.5);
  const leftR16: Match[] = [];
  const rightR16: Match[] = [];

  for (let i = 0; i < 8; i += 2) {
    leftR16.push({ coin1: shuffled[i], coin2: shuffled[i + 1], winner: null });
  }
  for (let i = 8; i < 16; i += 2) {
    rightR16.push({ coin1: shuffled[i], coin2: shuffled[i + 1], winner: null });
  }

  const winCounts: Record<number, number> = {};
  memecoins.forEach((c) => (winCounts[c.id] = Math.floor(Math.random() * 1000) + 100));

  return {
    currentRound: 1,
    currentMatch: 0,
    totalMatches: 0,
    leftR16,
    rightR16,
    leftQF: [
      { coin1: null, coin2: null, winner: null },
      { coin1: null, coin2: null, winner: null },
    ],
    rightQF: [
      { coin1: null, coin2: null, winner: null },
      { coin1: null, coin2: null, winner: null },
    ],
    leftSF: { coin1: null, coin2: null, winner: null },
    rightSF: { coin1: null, coin2: null, winner: null },
    final: { coin1: null, coin2: null, winner: null },
    winCounts,
  };
};

// Components
const CoinImage: React.FC<{ coin: Memecoin; size?: number }> = ({ coin, size = 48 }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="playoff-coin-img-wrapper" style={{ width: size, height: size }}>
      {!imgError ? (
        <img
          src={coin.logo}
          alt={coin.name}
          width={size}
          height={size}
          style={{ width: size, height: size, objectFit: "cover" }}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className="playoff-coin-emoji-fallback"
          style={{ width: size, height: size, fontSize: size * 0.45 }}
        >
          {coin.emoji}
        </div>
      )}
    </div>
  );
};

const CoinCard: React.FC<{ coin: Memecoin; onClick: () => void }> = ({ coin, onClick }) => {
  const isPositive = coin.change.startsWith("+");

  return (
    <div className="playoff-coin-card" onClick={onClick}>
      <CoinImage coin={coin} size={48} />
      <div className="playoff-coin-name">{coin.name}</div>
      <div className="playoff-coin-ticker">${coin.ticker}</div>
      <div className="playoff-coin-stats">
        <div className="playoff-coin-stat">
          <div className="playoff-stat-label">Price</div>
          <div className="playoff-stat-value">{coin.price}</div>
        </div>
        <div className="playoff-coin-stat">
          <div className="playoff-stat-label">24h</div>
          <div className={`playoff-stat-value ${isPositive ? "positive" : "negative"}`}>
            {coin.change}
          </div>
        </div>
        <div className="playoff-coin-stat">
          <div className="playoff-stat-label">Volume</div>
          <div className="playoff-stat-value">{coin.volume}</div>
        </div>
        <div className="playoff-coin-stat">
          <div className="playoff-stat-label">Sentiment</div>
          <div className="playoff-stat-value">{coin.sentiment}%</div>
        </div>
      </div>
    </div>
  );
};

const BracketTeam: React.FC<{ coin: Memecoin | null; status?: string }> = ({ coin, status = "" }) => {
  const [imgError, setImgError] = useState(false);

  if (!coin) {
    return <div className="playoff-bracket-team empty"><span>TBD</span></div>;
  }

  return (
    <div className={`playoff-bracket-team ${status}`}>
      <div className="playoff-bracket-team-icon">
        {!imgError ? (
          <img src={coin.logo} alt={coin.ticker} onError={() => setImgError(true)} />
        ) : (
          <span>{coin.emoji}</span>
        )}
      </div>
      <span>{coin.ticker}</span>
    </div>
  );
};

const BracketMatchBox: React.FC<{ match: Match | null; isCurrent?: boolean }> = ({
  match,
  isCurrent = false,
}) => {
  if (!match) {
    return <div className="playoff-bracket-match-box" />;
  }

  let c1Status = "";
  let c2Status = "";

  if (match.winner) {
    c1Status = match.coin1 && match.winner.id === match.coin1.id ? "winner" : "loser";
    c2Status = match.coin2 && match.winner.id === match.coin2.id ? "winner" : "loser";
  }

  return (
    <div
      className={`playoff-bracket-match-box ${isCurrent ? "current" : ""} ${
        match.winner ? "completed" : ""
      }`}
    >
      <BracketTeam coin={match.coin1} status={c1Status} />
      <BracketTeam coin={match.coin2} status={c2Status} />
    </div>
  );
};

const TournamentBracket: React.FC<{ gameState: GameState }> = ({ gameState }) => {
  const isCurrent = (r: number, m: number) =>
    gameState.currentRound === r && gameState.currentMatch === m;

  return (
    <div className="playoff-tournament-bracket">
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* LEFT R16 */}
        <div className="playoff-bracket-round playoff-bracket-round-r16">
          <div className="playoff-bracket-round-header">R16</div>
          {gameState.leftR16.map((m, i) => (
            <BracketMatchBox key={`lr16-${i}`} match={m} isCurrent={isCurrent(1, i)} />
          ))}
        </div>

        {/* Lines R16->QF left */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: 240 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={`line-lr16-${i}`} style={{ display: "flex", alignItems: "center", height: 56 }}>
              <div style={{ width: 12, height: 1, background: "var(--playoff-line-color)" }} />
              {i % 2 === 0 ? (
                <div style={{ width: 1, height: 56, background: "var(--playoff-line-color)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "50%", right: 0, width: 12, height: 1, background: "var(--playoff-line-color)" }} />
                </div>
              ) : (
                <div style={{ width: 1, height: 0 }} />
              )}
            </div>
          ))}
        </div>

        {/* LEFT QF */}
        <div className="playoff-bracket-round playoff-bracket-round-qf">
          <div className="playoff-bracket-round-header">QF</div>
          {gameState.leftQF.map((m, i) => (
            <BracketMatchBox key={`lqf-${i}`} match={m} isCurrent={isCurrent(2, i)} />
          ))}
        </div>

        {/* Lines QF->SF left */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: 240 }}>
          <div style={{ display: "flex", alignItems: "center", height: 120 }}>
            <div style={{ width: 12, height: 1, background: "var(--playoff-line-color)" }} />
            <div style={{ width: 1, height: 100, background: "var(--playoff-line-color)", position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", width: 12, height: 1, background: "var(--playoff-line-color)" }} />
            </div>
          </div>
        </div>

        {/* LEFT SF */}
        <div className="playoff-bracket-round playoff-bracket-round-sf">
          <div className="playoff-bracket-round-header">SF</div>
          <BracketMatchBox match={gameState.leftSF} isCurrent={isCurrent(3, 0)} />
        </div>

        {/* Line SF->Final left */}
        <div style={{ width: 20, height: 1, background: "var(--playoff-line-color)" }} />

        {/* FINAL */}
        <div className="playoff-bracket-final-box">
          <div className="playoff-bracket-round-header" style={{ color: "var(--playoff-accent-gold)" }}>
            🏆 FINAL
          </div>
          <BracketMatchBox match={gameState.final} isCurrent={isCurrent(4, 0)} />
          {gameState.final.winner && <div className="playoff-final-trophy">👑</div>}
        </div>

        {/* Line Final->SF right */}
        <div style={{ width: 20, height: 1, background: "var(--playoff-line-color)" }} />

        {/* RIGHT SF */}
        <div className="playoff-bracket-round playoff-bracket-round-sf">
          <div className="playoff-bracket-round-header">SF</div>
          <BracketMatchBox match={gameState.rightSF} isCurrent={isCurrent(3, 1)} />
        </div>

        {/* Lines SF->QF right */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: 240 }}>
          <div style={{ display: "flex", alignItems: "center", height: 120 }}>
            <div style={{ width: 1, height: 100, background: "var(--playoff-line-color)", position: "relative" }}>
              <div style={{ position: "absolute", top: "50%", right: 0, width: 12, height: 1, background: "var(--playoff-line-color)" }} />
            </div>
            <div style={{ width: 12, height: 1, background: "var(--playoff-line-color)" }} />
          </div>
        </div>

        {/* RIGHT QF */}
        <div className="playoff-bracket-round playoff-bracket-round-qf">
          <div className="playoff-bracket-round-header">QF</div>
          {gameState.rightQF.map((m, i) => (
            <BracketMatchBox key={`rqf-${i}`} match={m} isCurrent={isCurrent(2, i + 2)} />
          ))}
        </div>

        {/* Lines QF->R16 right */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: 240 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={`line-rr16-${i}`} style={{ display: "flex", alignItems: "center", height: 56 }}>
              {i % 2 === 1 ? (
                <div style={{ width: 1, height: 56, background: "var(--playoff-line-color)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "50%", width: 12, height: 1, background: "var(--playoff-line-color)" }} />
                </div>
              ) : (
                <div style={{ width: 1, height: 0 }} />
              )}
              <div style={{ width: 12, height: 1, background: "var(--playoff-line-color)" }} />
            </div>
          ))}
        </div>

        {/* RIGHT R16 */}
        <div className="playoff-bracket-round playoff-bracket-round-r16">
          <div className="playoff-bracket-round-header">R16</div>
          {gameState.rightR16.map((m, i) => (
            <BracketMatchBox key={`rr16-${i}`} match={m} isCurrent={isCurrent(1, i + 4)} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function PlayoffPage() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [champion, setChampion] = useState<Memecoin | null>(null);

  const startPlayoffs = useCallback(() => {
    setGameState(initializeBracket());
    setScreen("match");
  }, []);

  const getCurrentMatch = useCallback((): Match | null => {
    if (!gameState) return null;
    const { currentRound: r, currentMatch: m } = gameState;
    if (r === 1) return m < 4 ? gameState.leftR16[m] : gameState.rightR16[m - 4];
    if (r === 2) return m < 2 ? gameState.leftQF[m] : gameState.rightQF[m - 2];
    if (r === 3) return m === 0 ? gameState.leftSF : gameState.rightSF;
    return gameState.final;
  }, [gameState]);

  const selectWinner = useCallback(
    (coinId: number) => {
      if (!gameState) return;
      const match = getCurrentMatch();
      if (!match || !match.coin1 || !match.coin2) return;

      const winner = match.coin1.id === coinId ? match.coin1 : match.coin2;

      setGameState((prev) => {
        if (!prev) return prev;
        const newState = { ...prev };
        const { currentRound: r, currentMatch: m } = newState;

        // Set winner on current match
        if (r === 1) {
          if (m < 4) newState.leftR16[m] = { ...newState.leftR16[m], winner };
          else newState.rightR16[m - 4] = { ...newState.rightR16[m - 4], winner };
        } else if (r === 2) {
          if (m < 2) newState.leftQF[m] = { ...newState.leftQF[m], winner };
          else newState.rightQF[m - 2] = { ...newState.rightQF[m - 2], winner };
        } else if (r === 3) {
          if (m === 0) newState.leftSF = { ...newState.leftSF, winner };
          else newState.rightSF = { ...newState.rightSF, winner };
        } else {
          newState.final = { ...newState.final, winner };
        }

        // Advance winner to next round
        if (r === 1) {
          if (m < 4) {
            const qi = Math.floor(m / 2);
            if (m % 2 === 0) newState.leftQF[qi] = { ...newState.leftQF[qi], coin1: winner };
            else newState.leftQF[qi] = { ...newState.leftQF[qi], coin2: winner };
          } else {
            const adj = m - 4;
            const qi = Math.floor(adj / 2);
            if (adj % 2 === 0) newState.rightQF[qi] = { ...newState.rightQF[qi], coin1: winner };
            else newState.rightQF[qi] = { ...newState.rightQF[qi], coin2: winner };
          }
        } else if (r === 2) {
          if (m < 2) {
            if (m === 0) newState.leftSF = { ...newState.leftSF, coin1: winner };
            else newState.leftSF = { ...newState.leftSF, coin2: winner };
          } else {
            if (m === 2) newState.rightSF = { ...newState.rightSF, coin1: winner };
            else newState.rightSF = { ...newState.rightSF, coin2: winner };
          }
        } else if (r === 3) {
          if (m === 0) newState.final = { ...newState.final, coin1: winner };
          else newState.final = { ...newState.final, coin2: winner };
        }

        newState.totalMatches++;
        newState.winCounts[winner.id]++;

        // Advance to next match
        newState.currentMatch++;
        if (newState.currentMatch >= getMatchesInRound(newState.currentRound)) {
          if (newState.currentRound < 4) {
            newState.currentRound++;
            newState.currentMatch = 0;
          } else {
            // Tournament complete
            setChampion(winner);
            setTimeout(() => setScreen("results"), 200);
          }
        }

        return newState;
      });
    },
    [gameState, getCurrentMatch]
  );

  const currentMatch = getCurrentMatch();

  // Rankings for results screen
  const rankings = useMemo(() => {
    if (!gameState) return [];
    return memecoins
      .map((c) => ({ ...c, wins: gameState.winCounts[c.id] }))
      .sort((a, b) => b.wins - a.wins);
  }, [gameState]);

  const marketFavorite = useMemo(() => {
    const fav = memecoins[Math.floor(Math.random() * memecoins.length)];
    const pct = (Math.random() * 20 + 15).toFixed(1);
    return { coin: fav, percent: pct };
  }, []);

  return (
    <div className="playoff-page">
      <header className="playoff-header">
        <div className="playoff-logo">
          Powered by <span>PreDiva</span>
        </div>
        <Link
          href="/"
          style={{
            fontSize: 12,
            color: "var(--playoff-text-muted)",
            textDecoration: "none",
          }}
        >
          ← Back to hub
        </Link>
        {screen === "match" && gameState && (
          <div className="playoff-round-indicator">
            {getRoundName(gameState.currentRound)} · Match {gameState.currentMatch + 1}
          </div>
        )}
        {screen === "results" && <div className="playoff-round-indicator">Results</div>}
      </header>

      <div className="playoff-container">
        {/* Intro Screen */}
        {screen === "intro" && (
          <div className="playoff-screen">
            <div className="playoff-intro-screen">
              <div className="playoff-hero-visual">
                <div className="playoff-hero-coin left">🦴</div>
                <div className="playoff-hero-vs">vs</div>
                <div className="playoff-hero-coin right">😺</div>
                <div className="playoff-hero-trophy">🏆</div>
              </div>

              <h1 className="playoff-intro-title">Memecoin Playoffs</h1>
              <p className="playoff-intro-subtitle">Who Pumps +50% First?</p>

              <p className="playoff-intro-description">
                Test your conviction. In 15 head-to-head matchups, choose which memecoin you believe
                will outperform—then see how your picks compare to the collective wisdom of all
                participants.
              </p>

              <p className="playoff-intro-subtext">
                Every choice shapes your personal bracket <em>and</em> contributes to a live
                sentiment ranking. Benchmark your analysis against the market.
              </p>

              <div className="playoff-intro-features">
                <div className="playoff-intro-feature">
                  <div className="playoff-intro-feature-icon">🎯</div>
                  <span>Your picks, your bracket</span>
                </div>
                <div className="playoff-intro-feature">
                  <div className="playoff-intro-feature-icon">📊</div>
                  <span>Compare vs. market</span>
                </div>
                <div className="playoff-intro-feature">
                  <div className="playoff-intro-feature-icon">🏆</div>
                  <span>Crown your champion</span>
                </div>
              </div>

              <button className="playoff-start-btn" onClick={startPlayoffs}>
                Start the Tournament
              </button>
            </div>
          </div>
        )}

        {/* Match Screen */}
        {screen === "match" && gameState && currentMatch && (
          <div className="playoff-screen">
            <div className="playoff-match-screen">
              <div className="playoff-match-header">
                <div className="playoff-match-round">{getRoundName(gameState.currentRound)}</div>
                <h2 className="playoff-match-title">Pick your winner</h2>
                <div className="playoff-match-number">
                  Match {gameState.currentMatch + 1} of {getMatchesInRound(gameState.currentRound)}
                </div>
              </div>

              <div className="playoff-vs-container">
                {currentMatch.coin1 && (
                  <CoinCard coin={currentMatch.coin1} onClick={() => selectWinner(currentMatch.coin1!.id)} />
                )}
                <div className="playoff-vs-text">or</div>
                {currentMatch.coin2 && (
                  <CoinCard coin={currentMatch.coin2} onClick={() => selectWinner(currentMatch.coin2!.id)} />
                )}
              </div>

              <div className="playoff-bracket-section">
                <div className="playoff-bracket-title">Tournament Bracket</div>
                <TournamentBracket gameState={gameState} />
                <div className="playoff-bracket-progress">
                  <div className="playoff-bracket-progress-text">
                    <strong>{gameState.totalMatches}</strong> of 15 matches completed
                  </div>
                  <div className="playoff-bracket-progress-bar">
                    <div
                      className="playoff-bracket-progress-fill"
                      style={{ width: `${(gameState.totalMatches / 15) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {screen === "results" && gameState && champion && (
          <div className="playoff-screen">
            <div className="playoff-results-screen">
              <div className="playoff-results-intro">
                <h1>Your Champion</h1>
                <p>See how your conviction stacks up against the crowd</p>
              </div>

              <div className="playoff-final-bracket-section">
                <div className="playoff-bracket-title">Your Final Bracket</div>
                <TournamentBracket gameState={gameState} />
              </div>

              <div className="playoff-results-section">
                <div className="playoff-results-section-title">Your Winner</div>
                <div className="playoff-your-winner">
                  <CoinImage coin={champion} size={56} />
                  <div>
                    <div className="playoff-winner-name">{champion.name}</div>
                    <div className="playoff-winner-ticker">${champion.ticker}</div>
                  </div>
                </div>
              </div>

              <div className="playoff-results-section">
                <div className="playoff-results-section-title">Market Favorite</div>
                <div className="playoff-market-favorite">
                  <CoinImage coin={marketFavorite.coin} size={46} />
                  <div>
                    <div className="playoff-favorite-name">{marketFavorite.coin.name}</div>
                    <div className="playoff-favorite-ticker">${marketFavorite.coin.ticker}</div>
                  </div>
                  <div className="playoff-favorite-percent">{marketFavorite.percent}%</div>
                </div>
              </div>

              <div className="playoff-results-section">
                <div className="playoff-results-section-title">Collective Sentiment Rankings</div>
                <table className="playoff-rankings-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Coin</th>
                      <th style={{ textAlign: "right" }}>Total Wins</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankings.map((coin, i) => (
                      <tr key={coin.id}>
                        <td className={`playoff-rank-position ${i < 3 ? `top-${i + 1}` : ""}`}>
                          {i + 1}
                        </td>
                        <td>
                          <div className="playoff-rank-coin">
                            <CoinImage coin={coin} size={28} />
                            <div>
                              <div className="playoff-rank-coin-name">{coin.name}</div>
                              <div className="playoff-rank-coin-ticker">${coin.ticker}</div>
                            </div>
                          </div>
                        </td>
                        <td className="playoff-rank-wins">{coin.wins.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="playoff-cta-section">
                <h2 className="playoff-cta-title">Predict the next memecoin breakout</h2>
                <p className="playoff-cta-subtitle">Turn your market conviction into real predictions</p>
                <a
                  href="https://prediva.com/"
                  className="playoff-cta-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start on PreDiva
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
