import { useState, useEffect } from "react";
import { 
  CheckCircle2, Flame, Award, Sparkles, Trophy, 
  Target, Lock, Unlock, Calendar, Star, BookOpen, Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ==========================================
// DATA: QUESTS & BADGES
// ==========================================

const DAILY_QUESTS = [
  { id: "d1", title: "🍎 Eat at least 2 seasonal foods today", points: 5, category: "Nutrition" },
  { id: "d2", title: "💧 Drink 10 glasses of water", points: 5, category: "Hydration" },
  { id: "d3", title: "🧘 Practice and meditate for 10 min", points: 10, category: "Mindfulness" },
  { id: "d4", title: "📱 Avoid screen time for 30 min in a day", points: 15, category: "Mindfulness" },
  { id: "d5", title: "🥛 Drink milk before sleeping", points: 5, category: "Nutrition" },
  { id: "d6", title: "🥗 Add a fresh salad or greens to lunch", points: 10, category: "Nutrition" },
];

const WEEKLY_QUESTS = [
  { id: "w1", title: "🥷 Junk Food Ninja: Choose a healthier alternative 3 times", points: 15, category: "Nutrition" },
  { id: "w2", title: "🌿 Learn about 3 Ayurvedic foods/herbs & their uses", points: 30, category: "Education" },
  { id: "w3", title: "🗺️ Try foods from 3 different Indian regions", points: 0, badge: "Bharat Food Explorer", category: "Exploration" },
  { id: "w4", title: "👨‍🌾 Learn about 5 locally available seasonal foods", points: 10, category: "Education" },
  { id: "w5", title: "📚 Study Smart, Eat Smart: 5 healthy study-breaks", points: 20, category: "Habit" },
];

const SPECIAL_QUESTS = [
  { id: "s1", title: "🌾 Forgotten Grains Quest (Millets, Ragi, Jowar, Bajra)", points: 30, badge: "Ancient Grains Guardian", category: "Exploration" },
  { id: "s2", title: "👵 Grandma's Kitchen: Ask family for a traditional recipe", points: 10, badge: "Heritage Food Keeper", category: "Culture" },
  { id: "s3", title: "📵 Complete 3 meals without distractions (no screens)", points: 30, category: "Mindfulness" },
];

const POINT_THRESHOLDS = [
  { id: "pt_rookie", title: "Rookie", req: 200 },
  { id: "pt_veteran", title: "Veteran", req: 450 },
  { id: "pt_elite", title: "Elite", req: 750 },
  { id: "pt_pro", title: "Pro", req: 1000 },
  { id: "pt_master", title: "Master", req: 1300 },
  { id: "pt_grandmaster", title: "Grandmaster", req: 1600 },
  { id: "pt_legendary", title: "Legendary", req: 2000 },
];

const STREAK_THRESHOLDS = [
  { id: "st_1", title: "🌱 First Sprout", req: 1 },
  { id: "st_3", title: "🌿 Growing Strong", req: 3 },
  { id: "st_7", title: "🔥 Wellness Warrior", req: 7 },
  { id: "st_14", title: "🌳 Rooted in Wellness", req: 14 },
  { id: "st_30", title: "🏆 Amrit Master", req: 30 },
  { id: "st_60", title: "👑 Amrit Legend", req: 60 },
];

const SECRET_BADGES = [
  { id: "sec_carrot", title: "🥕 The Carrot Collector", desc: "Complete 5 vegetable quests" },
  { id: "sec_ayur", title: "🌿 Ayur's Apprentice", desc: "Ask Ayur 10 wellness questions" },
  { id: "sec_100", title: "💯 The 100 Club", desc: "Earn exactly 100 Amrit Points in a week" },
  { id: "sec_golden", title: "💎 The Golden Amrit", desc: "Complete one challenge from every category" },
];

// ==========================================
// COMPONENT
// ==========================================

export function WellnessChallengeWidget() {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly" | "special" | "badges">("daily");
  
  // State
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);

  // Check achievements automatically whenever points/completed quests change
  useEffect(() => {
    const newBadges = new Set(unlockedBadges);

    // 1. First quest completed
    if (completedQuests.length > 0) newBadges.add("First Sprout");

    // 2. All rounder (All daily quests done)
    const dailyCompleted = DAILY_QUESTS.every(q => completedQuests.includes(q.id));
    if (dailyCompleted) newBadges.add("All Rounder");

    // 3. Points thresholds
    POINT_THRESHOLDS.forEach(badge => {
      if (points >= badge.req) newBadges.add(badge.title);
    });

    // 4. Streak thresholds
    STREAK_THRESHOLDS.forEach(badge => {
      if (streak >= badge.req) newBadges.add(badge.title);
    });

    if (newBadges.size > unlockedBadges.length) {
      setUnlockedBadges(Array.from(newBadges));
    }
  }, [points, streak, completedQuests]);

  const handleCompleteQuest = (id: string, pts: number, badgeStr?: string) => {
    if (!completedQuests.includes(id)) {
      setCompletedQuests([...completedQuests, id]);
      setPoints(p => p + pts);
      if (badgeStr && !unlockedBadges.includes(badgeStr)) {
        setUnlockedBadges(prev => [...prev, badgeStr]);
      }
      // Simple streak increment for demo purposes
      if (activeTab === "daily") setStreak(s => s + 1);
    }
  };

  const renderQuestList = (quests: any[]) => (
    <div className="space-y-3 mt-4">
      {quests.map((quest) => {
        const isDone = completedQuests.includes(quest.id);
        return (
          <div key={quest.id} className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-900/20 p-4 transition-all hover:bg-emerald-900/40">
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
                onClick={() => handleCompleteQuest(quest.id, quest.points, quest.badge)}
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

  return (
    <div className="mx-auto w-full max-w-2xl rounded-[2.5rem] border border-emerald-500/30 bg-emerald-950/60 p-6 shadow-2xl backdrop-blur-2xl">
      
      {/* Top Stats Bar */}
      <div className="grid grid-cols-3 gap-3 mb-6 text-center">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-3 shadow-inner">
          <div className="flex items-center gap-1.5 text-orange-400 font-bold text-lg">
            <Flame className="h-5 w-5 fill-orange-400" />
            <span>{streak}</span>
          </div>
          <span className="text-xs font-medium text-emerald-200/70">Day Streak</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-3 shadow-inner">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold text-lg">
            <Sparkles className="h-5 w-5 fill-amber-300" />
            <span>{points}</span>
          </div>
          <span className="text-xs font-medium text-emerald-200/70">Amrit Points</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-3 shadow-inner">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-lg">
            <Trophy className="h-5 w-5" />
            <span>{unlockedBadges.length}</span>
          </div>
          <span className="text-xs font-medium text-emerald-200/70">Badges</span>
        </div>
      </div>

      {/* Navigation Tabs */}
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

      {/* Tab Content */}
      <div className="mt-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {activeTab === "daily" && renderQuestList(DAILY_QUESTS)}
        {activeTab === "weekly" && renderQuestList(WEEKLY_QUESTS)}
        {activeTab === "special" && renderQuestList(SPECIAL_QUESTS)}
        
        {activeTab === "badges" && (
          <div className="space-y-6 mt-4">
            
            {/* Unlocked Badges Gallery */}
            <div>
              <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-widest mb-3 border-b border-emerald-500/20 pb-2">Unlocked</h3>
              <div className="flex flex-wrap gap-2">
                {unlockedBadges.length === 0 ? (
                  <p className="text-sm text-emerald-200/50 italic">No badges yet. Start completing quests!</p>
                ) : (
                  unlockedBadges.map(badge => (
                    <span key={badge} className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-amber-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                      <Award className="h-3 w-3" /> {badge}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Secret Badges List */}
            <div>
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-3 border-b border-indigo-500/20 pb-2 flex items-center gap-2">
                <Lock className="h-4 w-4" /> Secret Badges
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {SECRET_BADGES.map(badge => {
                  const isUnlocked = unlockedBadges.includes(badge.title);
                  return (
                    <div key={badge.id} className={`p-3 rounded-xl border ${isUnlocked ? 'bg-indigo-900/40 border-indigo-500/40' : 'bg-black/20 border-white/5'}`}>
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
  );
}
