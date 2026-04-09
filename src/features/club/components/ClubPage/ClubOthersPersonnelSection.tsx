import type { ClubSimpleMemberSectionConfig } from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import ClubSimpleMemberPersonnelSection from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import type { ClubStaffDto } from "@/features/club/components/ClubPage/types";
import { clubStaffOtherFormSchema } from "@/features/club/lib/clubPersonnelFormSchemas";

const CONFIG: ClubSimpleMemberSectionConfig = {
  listTitle: "Pozostali",
  emptyMessage: "Brak pozostałych osób. Dodaj wpis — wymagane jest tylko imię.",
  dialogAddTitle: "Dodaj osobę",
  dialogEditTitle: "Edytuj osobę",
  deleteDialogTitle: "Usuń osobę",
  queryKey: (clubId) => ["club", "staff", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/staff`,
  putUrl: (id) => `/api/club/staff/${id}`,
  deleteUrl: (id) => `/api/club/staff/${id}`,
  formSchema: clubStaffOtherFormSchema,
  createExtras: { role: "OTHER" },
  showEmailField: true,
  lastNameRequired: false,
};

interface ClubOthersPersonnelSectionProps {
  clubId: string;
  others: ClubStaffDto[];
  isLoading: boolean;
  loadError: string | null;
  onRetry: () => void;
}

export default function ClubOthersPersonnelSection(props: ClubOthersPersonnelSectionProps) {
  return (
    <ClubSimpleMemberPersonnelSection
      clubId={props.clubId}
      config={CONFIG}
      members={props.others}
      isLoading={props.isLoading}
      loadError={props.loadError}
      onRetry={props.onRetry}
    />
  );
}
