import type { ClubSimpleMemberSectionConfig } from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import ClubSimpleMemberPersonnelSection from "@/features/club/components/ClubPage/ClubSimpleMemberPersonnelSection";
import type { ClubVolunteerDto } from "@/features/club/components/ClubPage/types";
import { clubVolunteerFormSchema } from "@/features/club/lib/clubPersonnelFormSchemas";

const CONFIG: ClubSimpleMemberSectionConfig = {
  listTitle: "Wolontariusze",
  emptyMessage:
    "Brak wolontariuszy. Dodaj osobę, która pomoże przy organizacji — imię jest wymagane, reszta opcjonalna.",
  dialogAddTitle: "Dodaj wolontariusza",
  dialogEditTitle: "Edytuj wolontariusza",
  deleteDialogTitle: "Usuń wolontariusza",
  queryKey: (clubId) => ["club", "volunteers", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/volunteers`,
  putUrl: (id) => `/api/club/volunteers/${id}`,
  deleteUrl: (id) => `/api/club/volunteers/${id}`,
  formSchema: clubVolunteerFormSchema,
  showEmailField: false,
  lastNameRequired: false,
};

interface ClubVolunteersPersonnelSectionProps {
  clubId: string;
  volunteers: ClubVolunteerDto[];
  isLoading: boolean;
  loadError: string | null;
  onRetry: () => void;
}

export default function ClubVolunteersPersonnelSection(props: ClubVolunteersPersonnelSectionProps) {
  return (
    <ClubSimpleMemberPersonnelSection
      clubId={props.clubId}
      config={CONFIG}
      members={props.volunteers}
      isLoading={props.isLoading}
      loadError={props.loadError}
      onRetry={props.onRetry}
    />
  );
}
