import {Alert, Snackbar} from "@mui/material";
import {TournamentForm} from "./tournamentComponents/tournamentForm.tsx";
import dayjs from "dayjs";
import {useLocation} from "react-router-dom";

const stubTournamentValues = {
  name: "Fall Championship",
  description: "Annual tournament to test your skills.",
  kingdom: "Dragonspine",
  park: "Park 1",
  date: dayjs(), // using dayjs to create a current date instance
  registrationCutoff: dayjs().add(1, "day"), // cutoff set to one day ahead
  strictCutoff: true,
  format: "doubleEliminationFormat",
  categories: ["Single", "Sword & Board"],
  formatSpecificFields: {losersBracket: "Yes", matchLength: "10 mins"},
  formatSpecificFieldsComplete: true,
};

export default function TournamentDetailsPage() {

  const location = useLocation();
  const toast = location.state?.toast;

  return (
    <>
      <TournamentForm readOnly={true} initialValues={stubTournamentValues} pageTitle="Tournament Details"/>
      {toast && (
        <Snackbar open={toast.open} autoHideDuration={1000}>
          <Alert severity="success" variant="filled">
            Tournament created successfully!
          </Alert>
        </Snackbar>
      )}

    </>
  );
}
