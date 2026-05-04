const queryKeys = {
  tournaments: {
    all: ["tournaments"],
    list: () => [...queryKeys.tournaments.all, "list"],
    detail: (id) => [...queryKeys.tournaments.all, "detail", id],
    matches: (id) => [...queryKeys.tournaments.all, "detail", id, "matches"],
    refereePlan: (id) => [...queryKeys.tournaments.all, "detail", id, "refereePlan"],
    classifierPlan: (id) => [...queryKeys.tournaments.all, "detail", id, "classifierPlan"]
  },
  seasons: {
    all: ["seasons"],
    list: () => [...queryKeys.seasons.all, "list"],
    detail: (id) => [...queryKeys.seasons.all, "detail", id]
  },
  teams: {
    all: ["teams"],
    detail: (id) => [...queryKeys.teams.all, "detail", id],
    bySeason: (seasonId) => [...queryKeys.teams.all, "list", seasonId],
    players: (teamId) => [...queryKeys.teams.all, "players", teamId]
  },
  referees: {
    all: ["referees"],
    bySeason: (seasonId) => [...queryKeys.referees.all, "list", seasonId]
  },
  classifiers: {
    all: ["classifiers"],
    bySeason: (seasonId) => [...queryKeys.classifiers.all, "list", seasonId]
  },
  dashboard: {
    all: ["dashboard"],
    /** Season-scoped dashboard bundle (tournaments + teams + referees for one season). */
    season: (seasonId) => [...queryKeys.dashboard.all, "season", seasonId]
  }
};

export { queryKeys as q };
