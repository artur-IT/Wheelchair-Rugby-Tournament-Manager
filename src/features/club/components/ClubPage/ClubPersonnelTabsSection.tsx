import { forwardRef, useState } from "react";
import { CardContent, Paper, Tab, Tabs, useMediaQuery } from "@mui/material";
import type { TabProps } from "@mui/material";
import { UserCircle } from "lucide-react";
import ClubCoachesPersonnelSection from "@/features/club/components/ClubPage/ClubCoachesPersonnelSection";
import ClubOthersPersonnelSection from "@/features/club/components/ClubPage/ClubOthersPersonnelSection";
import ClubPlayersPersonnelSection from "@/features/club/components/ClubPage/ClubPlayersPersonnelSection";
import ClubRefereesPersonnelSection from "@/features/club/components/ClubPage/ClubRefereesPersonnelSection";
import ClubVolunteersPersonnelSection from "@/features/club/components/ClubPage/ClubVolunteersPersonnelSection";
import type { ClubCoachDto, ClubPlayerDto, ClubRefereeDto, ClubStaffDto, ClubVolunteerDto } from "./types";

type ClubPersonnelTabValue = "players" | "volunteers" | "coaches" | "referees" | "others";

const StyledTab = forwardRef<HTMLAnchorElement, TabProps>((props, ref) => (
  <Tab ref={ref} component="a" iconPosition="start" {...props} />
));

StyledTab.displayName = "StyledTab";

interface ClubPersonnelTabsSectionProps {
  clubId: string;
  players: ClubPlayerDto[];
  playersLoading: boolean;
  playersError: string | null;
  onRetryPlayers: () => void;
  volunteers: ClubVolunteerDto[];
  volunteersLoading: boolean;
  volunteersError: string | null;
  onRetryVolunteers: () => void;
  coaches: ClubCoachDto[];
  coachesLoading: boolean;
  coachesError: string | null;
  onRetryCoaches: () => void;
  referees: ClubRefereeDto[];
  refereesLoading: boolean;
  refereesError: string | null;
  onRetryReferees: () => void;
  others: ClubStaffDto[];
  othersLoading: boolean;
  othersError: string | null;
  onRetryOthers: () => void;
}

export default function ClubPersonnelTabsSection({
  clubId,
  players,
  playersLoading,
  playersError,
  onRetryPlayers,
  volunteers,
  volunteersLoading,
  volunteersError,
  onRetryVolunteers,
  coaches,
  coachesLoading,
  coachesError,
  onRetryCoaches,
  referees,
  refereesLoading,
  refereesError,
  onRetryReferees,
  others,
  othersLoading,
  othersError,
  onRetryOthers,
}: ClubPersonnelTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<ClubPersonnelTabValue>("players");
  const isWide = useMediaQuery("(min-width:1000px)");

  return (
    <Paper sx={{ borderRadius: 3 }}>
      <Tabs
        value={activeTab}
        onChange={(_, value: ClubPersonnelTabValue) => setActiveTab(value)}
        variant={isWide ? "standard" : "fullWidth"}
        sx={
          isWide
            ? {
                "& .MuiTab-root": {
                  minWidth: "auto",
                  px: 2.5,
                },
                "& .MuiTabs-flexContainer": {
                  width: "fit-content",
                },
              }
            : undefined
        }
      >
        <StyledTab label="Zawodnicy" value="players" icon={<UserCircle size={18} />} />
        <StyledTab label="Wolontariusze" value="volunteers" icon={<UserCircle size={18} />} />
        <StyledTab label="Trenerzy" value="coaches" icon={<UserCircle size={18} />} />
        <StyledTab label="Sędziowie" value="referees" icon={<UserCircle size={18} />} />
        <StyledTab label="Pozostali" value="others" icon={<UserCircle size={18} />} />
      </Tabs>

      <CardContent sx={{ minHeight: 400 }}>
        {activeTab === "players" ? (
          <ClubPlayersPersonnelSection
            clubId={clubId}
            players={players}
            isLoading={playersLoading}
            loadError={playersError}
            onRetry={onRetryPlayers}
          />
        ) : null}
        {activeTab === "volunteers" ? (
          <ClubVolunteersPersonnelSection
            clubId={clubId}
            volunteers={volunteers}
            isLoading={volunteersLoading}
            loadError={volunteersError}
            onRetry={onRetryVolunteers}
          />
        ) : null}
        {activeTab === "coaches" ? (
          <ClubCoachesPersonnelSection
            clubId={clubId}
            coaches={coaches}
            isLoading={coachesLoading}
            loadError={coachesError}
            onRetry={onRetryCoaches}
          />
        ) : null}
        {activeTab === "referees" ? (
          <ClubRefereesPersonnelSection
            clubId={clubId}
            referees={referees}
            isLoading={refereesLoading}
            loadError={refereesError}
            onRetry={onRetryReferees}
          />
        ) : null}
        {activeTab === "others" ? (
          <ClubOthersPersonnelSection
            clubId={clubId}
            others={others}
            isLoading={othersLoading}
            loadError={othersError}
            onRetry={onRetryOthers}
          />
        ) : null}
      </CardContent>
    </Paper>
  );
}
