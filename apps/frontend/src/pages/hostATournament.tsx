import {TournamentForm} from "./tournamentComponents/tournamentForm.tsx";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";

const stubTournamentValues = {
  name: "Fall Championship",
  description: "Annual tournament to test your skills.",
  kingdom: "Dragonspine",
  park: "Park 1",
  date: dayjs(), // using dayjs to create a current date instance
  registrationCutoff: dayjs().add(1, "day"), // cutoff set to one day ahead
  strictCutoff: true,
  format: "doubleEliminationFormat",
  categories: ["Single Short", "Sword & Board"],
  formatSpecificFields: {losersBracket: "Yes", matchLength: "10 mins"},
  formatSpecificFieldsComplete: true,
};


export default function HostATournamentPage() {
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    // After successful form submission, navigate like:
    navigate("/tournament/123", { // use the proper id or URL
      state: {
        toast: {
          open: true,
          message: "Tournament created successfully!",
        },
      },
    });
  };


  return (
    <TournamentForm readOnly={false} initialValues={stubTournamentValues} pageTitle="Host a tournament"
                    handleFormSubmit={handleFormSubmit}/>
  );
}
