import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  CheckCircle2, Flame, Award, Sparkles, Trophy, 
  Target, Lock, Unlock, Calendar, Star,
  Droplets, Crown, Hexagon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWallpaper } from "@/components/PageWallpaper";

// ==========================================
// DATA: QUESTS & BADGES (51 Badges Total)
// ==========================================

const DAILY_QUESTS = [
  { id: "d1", title: "🍎 Eat at least 2 seasonal foods today", points: 5, category: "Nutrition" },
  { id: "d2", title: "💧 Drink 10 glasses of water", points: 5, category: "Hydration" },
  { id: "d3", title: "🧘 Practice and meditate for 10 min", points: 10, category: "Mindfulness" },
  { id: "d4", title: "📱 Avoid screen time for 30 min in a day", points: 15, category: "Mindfulness" },
  { id: "d5", title: "🥛 Drink milk before sleeping", points: 5, category: "Nutrition" },
  { id: "d6", title: "🥗 Add a fresh salad or greens to lunch", points: 10, category: "Nutrition" },
  { id: "d7", title: "🌅 Wake up before 7:00 AM (Brahma Muhurta)", points: 25, badge: "Early Bird Yogi", category: "Routine" },
  { id: "d8", title: "👅 Practice tongue scraping after brushing", points: 20, badge: "Copper Cleanser", category: "Routine" },
  { id: "d9", title: "💦 Wash your face with cool water upon waking", points: 15, badge: "Morning Dew", category: "Routine" },
  { id: "d10", title: "👣 Massage soles of feet with oil before bed", points: 20, badge: "Deep Sleeper", category: "Routine" },
  { id: "d11", title: "☀️ Make lunch your biggest meal of the day", points: 20, badge: "Peak Pitta", category: "Digestion" },
  { id: "d12", title: "💧 Drink only warm/room-temp water with meals", points: 25, badge: "Agni Protector", category: "Digestion" },
  { id: "d13", title: "🧘 Chew every single bite 32 times for one meal", points: 15, badge: "Mindful Muncher", category: "Digestion" },
  { id: "d14", title: "🚶 Walk 100 steps immediately after dinner", points: 10, badge: "Moonlit Stroller", category: "Digestion" },
  { id: "d15", title: "🌞 Complete 12 rounds of Surya Namaskar", points: 30, badge: "Sun Warrior", category: "Movement" },
  { id: "d16", title: "💎 Sit in Vajrasana for 5 mins after a heavy meal", points: 15, badge: "Diamond Digester", category: "Movement" },
  { id: "d17", title: "🐝 Practice Bhramari Pranayama (Humming Bee)", points: 15, badge: "Zen Bee", category: "Movement" },
  { id: "d18", title: "🤸 Do a 10-minute stretching session during study", points: 10, badge: "Study Supple", category: "Movement" },
  { id: "d19", title: "🤫 Eat a meal with phone in another room", points: 20, badge: "Silent Savorer", category: "Mindfulness" },
  { id: "d20", title: "📵 Keep your phone out of the bedroom overnight", points: 30, badge: "Unplugged Dreamer", category: "Mindfulness" },
  { id: "d21", title: "🌳 Spend 15 mins in nature without taking photos", points: 15, badge: "Present Moment", category: "Mindfulness" },
  { id: "d22", title: "📝 Write down 3 things you are grateful for", points: 10, badge: "Gratitude Guru", category: "Mindfulness" },
  { id: "d23", title: "🦉 No blue light/screens for 2 hours before bed", points: 25, badge: "Night Owl No-More", category: "Mindfulness" },
];

const WEEKLY_QUESTS = [
  { id: "w1", title: "🥷 Junk Food Ninja: Choose a healthier alternative 3 times", points: 15, category: "Nutrition" },
  { id: "w2", title: "🌿 Learn about 3 Ayurvedic foods/herbs & their uses", points: 30, category: "Education" },
  { id: "w3", title: "🗺️ Try foods from 3 different Indian regions", points: 30, badge: "Bharat Food Explorer", category: "Exploration" },
  { id: "w4", title: "👨‍🌾 Learn about 5 locally available seasonal foods", points: 10, category: "Education" },
  { id: "w5", title: "📚 Study Smart, Eat Smart: 5 healthy study-breaks", points: 20, category: "Habit" },
  { id: "w6", title: "🌬️ Log 3 meals recommended for Vata dosha", points: 15, badge: "Vata Balancer", category: "Dosha" },
  { id: "w7", title: "🔥 Swap a spicy snack for a cooling food (Pitta)", points: 15, badge: "Pitta Pacifier", category: "Dosha" },
  { id: "w8", title: "🌍 15-min cardio/dance session to shake off Kapha", points: 15, badge: "Kapha Harmonizer", category: "Dosha" },
];

const SPECIAL_QUESTS = [
  { id: "s1", title: "🌾 Forgotten Grains Quest (Millets, Ragi, Jowar, Bajra)", points: 30, badge: "Ancient Grains Guardian", category: "Exploration" },
  { id: "s2", title: "👵 Grandma's Kitchen: Ask family for a traditional recipe", points: 10, badge: "Heritage Food Keeper", category: "Culture" },
  { id: "s3", title: "📵 Complete 3 meals without distractions (no screens)", points: 30, category: "Mindfulness" },
  { id: "s4", title: "🌟 Join Ahaar Amrit and complete your very first quest!", points: 50, badge: "Ahaar Amrit Pioneer", category: "Milestone" },
];

const POINT_THRESHOLDS = [
  { req: 200, title: "Rookie" },
  { req: 450, title: "Veteran" },
  { req: 750, title: "Elite" },
  { req: 1000, title: "Pro" },
  { req: 1300, title: "Master" },
  { req: 1600, title: "Grandmaster" },
  { req: 2000, title: "Legendary" },
];

const STREAK_THRESHOLDS = [
  { req: 1, title: "First Sprout" },
  { req: 3, title: "Growing Strong" },
  { req: 7, title: "Wellness Warrior" },
  { req: 14, title: "Rooted in Wellness" },
  { req: 30, title: "Amrit Master" },
  { req: 60, title: "Amrit Legend" },
];

const COLLECTOR_THRESHOLDS = [
  { req: 10, title: "Rookie Collector" },
  { req: 20, title: "Veteran Collector" },
  { req: 30, title: "Master Collector" },
  { req: 40, title: "Grandmaster Collector" },
  { req: 50, title: "Legendary Collector" },
];

const SECRET_BADGES = [
  { id: "sec_carrot", title: "The Carrot Collector", desc: "Complete 5 vegetable-related quests", req_type: "quest_count", count: 5 },
  { id: "sec_ayur", title: "Ayur's Apprentice", desc: "Ask Ayur 10 wellness questions", req_type: "dummy", count: 10 },
  { id: "sec_100", title: "The 100 Club", desc: "Earn exactly 100 Amrit Points in a single week", req_type: "points_exact", count: 100 },
  { id: "sec_golden", title: "The Golden Amrit", desc: "Complete one challenge from every category", req_type: "categories", count: 5 },
  { id: "sec_perf", title: "The Perfectionist", desc: "Use the app for 7 days without missing a challenge", req_type: "streak", count: 7 },
  { id: "sec_herb", title: "Herb Hacker", desc: "Search for Amla, Ashwagandha, and Tulsi", req_type: "dummy", count: 3 },
  { id: "sec_sun", title: "Sunday Prepster", desc: "Complete a challenge before 7:00 AM on a Sunday", req_type: "dummy", count: 1 },
  { id: "sec_bal", title: "The Balancer", desc: "Log a hydration and sleep challenge on the same day", req_type: "dummy", count: 2 },
];

// Helper to render icons for badges dynamically
const getBadgeIcon = (name: string) => {
  if (name.includes("Sprout") || name.includes("Rooted")) return <Target className="h-6 w-6 text-emerald-400" />;
  if (name.includes("Warrior") || name.includes("Pitta")) return <Flame className="h-6 w-6 text-orange-400" />;
  if (name.includes("Collector")) return <Trophy className="h-6 w-6 text-yellow-300" />;
  if (name.includes("Legend") || name.includes("Master")) return <Crown className="h-6 w-6 text-amber-400" />;
  if (name.includes("Water") || name.includes("Hydration")) return <Droplets className="h-6 w-6 text-blue-400" />;
  if (name.includes("Secret") || SECRET_BADGES.find(b => b.title === name)) return <Hexagon className="h-6 w-6 text-indigo-400" />;
  return <Award className="h-6 w-6 text-amber-300" />;
};

// ==========================================
// TYPES & EXPORT
// ==========================================
type Celebration = {
  id: string;
  type: "daily" | "weekly" | "secret" | "collector" | "badge";
  title: string;
  subtitle: string;
  rewardPreview?: string;
  badgeName?: string;
};

export const Route = createFileRoute("/wellness-challenge")({
  head: () => ({ meta: [
    { title: "Wellness Quests — Ahaar Amrit" },
    { name: "description", content: "Daily wellness quests, nutrition habits, and earned badges." },
    { property: "og:title", content: "Wellness Quests — Ahaar Amrit" },
    { property: "og:description", content: "Daily wellness quests, nutrition habits, and earned badges." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WellnessChallengePage,
});

function WellnessChallengePage() {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly" | "special" | "badges">("daily");
  
  // ==========================================
  // PERSISTENT STATE WITH LOCALSTORAGE
  // ==========================================
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    try {
      const readList = (key: string): string[] => {
        try {
          const value: unknown = JSON.parse(localStorage.getItem(key) || "[]");
          return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
        } catch { return []; }
      };
      setPoints(Number.parseInt(localStorage.getItem("ahaar_points") || "0", 10) || 0);
      setStreak(Number.parseInt(localStorage.getItem("ahaar_streak") || "0", 10) || 0);
      setCompletedQuests(readList("ahaar_completed_quests"));
      setUnlockedBadges(readList("ahaar_unlocked_badges"));
    } catch { /* Storage may be unavailable in private browsing. */ }
    setStorageReady(true);
  }, []);
  
  // Celebration Queue (Does not need to persist on reload)
  const [celebrations, setCelebrations] = useState<Celebration[]>([]);

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    if (!storageReady) return;
    try {
      localStorage.setItem("ahaar_points", points.toString());
      localStorage.setItem("ahaar_streak", streak.toString());
      localStorage.setItem("ahaar_completed_quests", JSON.stringify(completedQuests));
      localStorage.setItem("ahaar_unlocked_badges", JSON.stringify(unlockedBadges));
    } catch { /* Keep quests usable when storage is unavailable. */ }
  }, [points, streak, completedQuests, unlockedBadges, storageReady]);

  const addCelebration = (celeb: Omit<Celebration, "id">) => {
    setCelebrations(prev => [...prev, { ...celeb, id: Math.random().toString() }]);
  };

  // Logic: Check for newly unlocked achievements when state changes
  useEffect(() => {
    if (!storageReady) return;
    const newlyUnlocked: string[] = [];
    const currentBadges = new Set(unlockedBadges);

    const checkAndAward = (badgeName: string, isSecret = false, isCollector = false) => {
      if (!currentBadges.has(badgeName)) {
        currentBadges.add(badgeName);
        newlyUnlocked.push(badgeName);
        if (isCollector) {
          addCelebration({ type: "collector", title: "INCREDIBLE!", subtitle: `You earned the ${badgeName} badge!`, badgeName });
        } else if (isSecret) {
          addCelebration({ type: "secret", title: "SECRET UNLOCKED", subtitle: `You discovered: ${badgeName}!`, badgeName });
        } else {
          addCelebration({ type: "badge", title: "NEW BADGE", subtitle: `You earned: ${badgeName}`, badgeName });
        }
      }
    };

    // 1. Completion logic
    if (completedQuests.length > 0) checkAndAward("First Sprout");

    const dailyCompleted = DAILY_QUESTS.every(q => completedQuests.includes(q.id));
    if (dailyCompleted && completedQuests.length >= DAILY_QUESTS.length) checkAndAward("All Rounder");

    // 2. Point Thresholds
    POINT_THRESHOLDS.forEach(b => { if (points >= b.req) checkAndAward(b.title); });

    // 3. Streak Thresholds
    STREAK_THRESHOLDS.forEach(b => { if (streak >= b.req) checkAndAward(b.title); });

    // 4. Secret Quests Check
    if (completedQuests.length >= 5) checkAndAward("The Carrot Collector", true);
    if (completedQuests.length >= 15) checkAndAward("The Golden Amrit", true);
    if (streak >= 7) checkAndAward("The Perfectionist", true);

    // 5. Collector Thresholds
    COLLECTOR_THRESHOLDS.forEach(b => { 
      if (currentBadges.size >= b.req) checkAndAward(b.title, false, true); 
    });

    if (newlyUnlocked.length > 0) {
      setUnlockedBadges(Array.from(currentBadges));
    }
  }, [points, streak, completedQuests, storageReady]);

  const handleCompleteQuest = (questType: "daily" | "weekly" | "special", id: string, pts: number, badgeStr?: string) => {
    if (!completedQuests.includes(id)) {
      setCompletedQuests([...completedQuests, id]);
      setPoints(p => p + pts);
      
      // Trigger Quest Modal
      if (questType === "daily") {
        addCelebration({ type: "daily", title: "Congratulations!", subtitle: `You earned ${pts} Amrit Points.` });
        setStreak(s => s + 1);
      } else if (questType === "weekly") {
        addCelebration({ type: "weekly", title: "Congratulations!", subtitle: "Weekly Quest Complete!", rewardPreview: `+${pts} Points ${badgeStr ? `& ${badgeStr}` : ''}` });
      } else {
        addCelebration({ type: "daily", title: "Special Quest Complete!", subtitle: `You earned ${pts} Amrit Points.` });
      }

      // If quest grants a specific badge
      if (badgeStr && !unlockedBadges.includes(badgeStr)) {
        setUnlockedBadges(prev => [...prev, badgeStr]);
        addCelebration({ type: "badge", title: "NEW BADGE EARNED", subtitle: `You earned the ${badgeStr} badge!`, badgeName: badgeStr });
      }
    }
  };

  // Rest of the UI remains identical, ensuring everything looks the exact same
  const renderQuestList = (quests: any[], type: "daily"|"weekly"|"special") => (
    <div className="space-y-3 mt-4">
      {quests.map((quest) => {
        const isDone = completedQuests.includes(quest.id);
        return (
          <div key={quest.id} className="relative overflow-hidden rounded-2xl backdrop-blur-md border border-emerald-500/20 bg-emerald-900/20 p-4 transition-all hover:bg-emerald-900/20">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                  {quest.category}
                </span>
                <h4 className="mt-2 text-sm sm:text-base font-semibold text-emerald-50">
                  {quest.title}
                </h4>
                <div className="flex gap-2 mt-2">
                  {quest.points > 0 && (
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> +{quest.points} pts
                    </span>
                  )}
                  {quest.badge && (
                    <span className="text-xs font-bold text-orange-300 flex items-center gap-1">
                      <Award className="h-3 w-3" /> {quest.badge}
                    </span>
                  )}
                </div>
              </div>
              <Button
                onClick={() => handleCompleteQuest(type, quest.id, quest.points, quest.badge)}
                disabled={isDone}
                variant="ghost"
                size="sm"
                className={`rounded-xl px-4 py-5 border ${
                  isDone 
                    ? "bg-emerald-600/20 border-emerald-500/30 text-emerald-400" 
                    : "bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-500"
                }`}
              >
                {isDone ? <CheckCircle2 className="h-5 w-5" /> : "Complete"}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );

  const activeCelebration = celebrations[0];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative isolate">
      <PageWallpaper />
      
      
      {/* Celebration Overlay */}
      {activeCelebration && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity animate-in fade-in duration-300">
          <div className={`relative w-[90%] max-w-sm rounded-3xl border-2 p-8 text-center shadow-2xl animate-in zoom-in-95 duration-300 ${
            activeCelebration.type === "daily" ? "bg-emerald-950 border-emerald-500 shadow-emerald-500/20" :
            activeCelebration.type === "weekly" ? "bg-amber-950 border-yellow-500 shadow-yellow-500/30" :
            activeCelebration.type === "secret" ? "bg-gray-200 border-black shadow-black/50" :
            activeCelebration.type === "collector" ? "bg-black border-purple-500 shadow-purple-500/40" :
            "bg-emerald-900 border-emerald-400 shadow-emerald-400/20"
          }`}>
            
            <div className="flex flex-col items-center gap-4">
              {activeCelebration.badgeName && (
                <div className="h-20 w-20 rounded-full bg-black/15 flex items-center justify-center shadow-inner mb-2 animate-bounce">
                  {getBadgeIcon(activeCelebration.badgeName)}
                </div>
              )}

              <h2 className={`text-3xl font-display font-black tracking-wider uppercase ${
                activeCelebration.type === "daily" ? "text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]" :
                activeCelebration.type === "weekly" ? "text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]" :
                activeCelebration.type === "secret" ? "text-black drop-shadow-md" :
                activeCelebration.type === "collector" ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 animate-pulse" :
                "text-white"
              }`}>
                {activeCelebration.title}
              </h2>

              <p className={`text-lg font-medium ${activeCelebration.type === "secret" ? "text-gray-800" : "text-white/90"}`}>
                {activeCelebration.subtitle}
              </p>

              {activeCelebration.rewardPreview && (
                <div className="mt-2 bg-black/10 px-4 py-2 rounded-full border border-yellow-500/50">
                  <span className="text-yellow-300 font-bold text-sm">Reward: {activeCelebration.rewardPreview}</span>
                </div>
              )}

              <Button 
                onClick={() => setCelebrations(prev => prev.slice(1))}
                className={`mt-4 w-full rounded-xl py-6 font-bold text-lg shadow-lg ${
                  activeCelebration.type === "secret" ? "bg-black text-white hover:bg-gray-800" :
                  activeCelebration.type === "weekly" ? "bg-yellow-500 text-amber-950 hover:bg-yellow-400" :
                  "bg-emerald-500 text-white hover:bg-emerald-400"
                }`}
              >
                Awesome!
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Dashboard UI */}
      <div className="mx-auto w-full max-w-2xl rounded-[2.5rem] border border-emerald-500/30 bg-emerald-950/30 p-6 shadow-2xl backdrop-blur-2xl">
        
        <div className="grid grid-cols-3 gap-3 mb-6 text-center">
          <div className="flex flex-col items-center justify-center rounded-2xl backdrop-blur-md border border-white/10 bg-black/10 p-3 shadow-inner">
            <div className="flex items-center gap-1.5 text-orange-400 font-bold text-lg">
              <Flame className="h-5 w-5 fill-orange-400" />
              <span>{streak}</span>
            </div>
            <span className="text-xs font-medium text-emerald-200/70">Day Streak</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl backdrop-blur-md border border-white/10 bg-black/10 p-3 shadow-inner">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold text-lg">
              <Sparkles className="h-5 w-5 fill-amber-300" />
              <span>{points}</span>
            </div>
            <span className="text-xs font-medium text-emerald-200/70">Amrit Points</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl backdrop-blur-md border border-white/10 bg-black/10 p-3 shadow-inner">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-lg">
              <Trophy className="h-5 w-5" />
              <span>{unlockedBadges.length} / 51</span>
            </div>
            <span className="text-xs font-medium text-emerald-200/70">Badges</span>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
          {[
            { id: "daily", icon: Target, label: "Daily" },
            { id: "weekly", icon: Calendar, label: "Weekly" },
            { id: "special", icon: Star, label: "Special" },
            { id: "badges", icon: Award, label: "Badges" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-white/5 text-emerald-200/70 hover:bg-white/10"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {activeTab === "daily" && renderQuestList(DAILY_QUESTS, "daily")}
          {activeTab === "weekly" && renderQuestList(WEEKLY_QUESTS, "weekly")}
          {activeTab === "special" && renderQuestList(SPECIAL_QUESTS, "special")}
          
          {activeTab === "badges" && (
            <div className="space-y-6 mt-4 pb-10">
              
              <div>
                <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-widest mb-3 border-b border-emerald-500/20 pb-2">Unlocked ({unlockedBadges.length})</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {unlockedBadges.length === 0 ? (
                    <p className="text-sm text-emerald-200/50 italic col-span-3">No badges yet. Start completing quests!</p>
                  ) : (
                    unlockedBadges.map(badge => (
                      <div key={badge} className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-emerald-900/40 to-black/40 border border-emerald-500/30 text-center text-xs font-bold text-amber-300 shadow-md">
                        <div className="mb-2 p-2 bg-black/25 rounded-full">
                           {getBadgeIcon(badge)}
                        </div>
                        {badge}
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-3 border-b border-indigo-500/20 pb-2 flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Secret Badges
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SECRET_BADGES.map(badge => {
                    const isUnlocked = unlockedBadges.includes(badge.title);
                    return (
                      <div key={badge.id} className={`p-3 rounded-xl border ${isUnlocked ? 'bg-indigo-900/40 border-indigo-500/40' : 'bg-black/10 border-white/5'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          {isUnlocked ? <Unlock className="h-4 w-4 text-indigo-400" /> : <Lock className="h-4 w-4 text-white/20" />}
                          <span className={`font-bold text-sm ${isUnlocked ? 'text-indigo-300' : 'text-white/40 blur-[2px] select-none'}`}>
                            {badge.title}
                          </span>
                        </div>
                        <p className={`text-xs ${isUnlocked ? 'text-indigo-200/70' : 'text-white/20 blur-[2px] select-none'}`}>
                          {badge.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
