import type { ClubSimpleMemberSectionConfig } from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import ClubSimpleMemberPersonnelSection from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import type { ClubCoachDto } from "@/features/club/components/ClubPage/types";
import { clubCoachFormSchema } from "@/features/club/lib/clubPersonnelFormSchemas";

const CONFIG: ClubSimpleMemberSectionConfig = {
  listTitle: "Trenerzy",
  emptyMessage: "Brak trenerów. Dodaj pierwszego trenera — imię i nazwisko są wymagane.",
  dialogAddTitle: "Dodaj trenera",
  dialogEditTitle: "Edytuj trenera",
  deleteDialogTitle: "Usuń trenera",
  queryKey: (clubId) => ["club", "coaches", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/coaches`,
  putUrl: (id) => `/api/club/coaches/${id}`,
  deleteUrl: (id) => `/api/club/coaches/${id}`,
  formSchema: clubCoachFormSchema,
  showEmailField: true,
  lastNameRequired: true,
};

interface ClubCoachesPersonnelSectionProps {
  clubId: string;
  coaches: ClubCoachDto[];
  isLoading: boolean;
  loadError: string | null;
  onRetry: () => void;
}

export default function ClubCoachesPersonnelSection(props: ClubCoachesPersonnelSectionProps) {
  return (
    <ClubSimpleMemberPersonnelSection
      clubId={props.clubId}
      config={CONFIG}
      members={props.coaches}
      isLoading={props.isLoading}
      loadError={props.loadError}
      onRetry={props.onRetry}
    />
  );
}
