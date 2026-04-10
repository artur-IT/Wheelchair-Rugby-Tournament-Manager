import type { ClubSimpleMemberSectionConfig } from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import ClubSimpleMemberPersonnelSection from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import type { ClubRefereeDto } from "@/features/club/components/ClubPage/types";
import { clubRefereeFormSchema } from "@/features/club/lib/clubPersonnelFormSchemas";

const CONFIG: ClubSimpleMemberSectionConfig = {
  listTitle: "Sędziowie",
  emptyMessage: "Brak sędziów. Dodaj pierwszą osobę — imię i nazwisko są wymagane.",
  dialogAddTitle: "Dodaj sędziego",
  dialogEditTitle: "Edytuj sędziego",
  deleteDialogTitle: "Usuń sędziego",
  queryKey: (clubId) => ["club", "referees", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/referees`,
  putUrl: (id) => `/api/club/referees/${id}`,
  deleteUrl: (id) => `/api/club/referees/${id}`,
  formSchema: clubRefereeFormSchema,
  showEmailField: true,
  lastNameRequired: true,
};

interface ClubRefereesPersonnelSectionProps {
  clubId: string;
  referees: ClubRefereeDto[];
  isLoading: boolean;
  loadError: string | null;
  onRetry: () => void;
}

export default function ClubRefereesPersonnelSection(props: ClubRefereesPersonnelSectionProps) {
  return (
    <ClubSimpleMemberPersonnelSection
      clubId={props.clubId}
      config={CONFIG}
      members={props.referees}
      isLoading={props.isLoading}
      loadError={props.loadError}
      onRetry={props.onRetry}
    />
  );
}
